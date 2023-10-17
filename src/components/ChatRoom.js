import { useRef, useState, useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import { fetchUser } from "../api/UserAPI";
import { useLocation } from "react-router-dom";

const ChatRoom = () => {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState("");

  const channelId = useLocation().state.channelId;
  const [user, setUser] = useState({});

  const ACCESS_TOKEN = localStorage.getItem("accessToken");

  const client = useRef({});

  useEffect(() => {
    if (ACCESS_TOKEN) {
      fetchUser()
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ACCESS_TOKEN]);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://localhost:8080/ws",
      onConnect: () => {
        console.log("success");
        subscribe();
      },
    });
    client.current.activate();
  };

  const publish = (chat) => {
    console.log("publish:", chat);
    if (!client.current.connected) {
      return;
    }
    console.log(user.name);
    const message = {
      channelId: channelId,
      writerName: user.name,
      chat: chat,
    };
    console.log(message);
    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify(message),
    });

    setChat("");
  };

  const subscribe = () => {
    client.current.subscribe("/sub/chat/" + channelId, (body) => {
      const json_body = JSON.parse(body.body);
      console.log(typeof json_body);
      setChatList((_chat_list) => [..._chat_list, json_body]);
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const handleChange = (event) => {
    // 채팅 입력 시 state에 값 설정
    setChat(event.target.value);
  };

  const handleSubmit = (event, chat) => {
    // 보내기 버튼 눌렀을 때 publish
    event.preventDefault();
    console.log(chat);
    publish(chat);
  };

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  return (
    <>
      {ACCESS_TOKEN ? (
        <div>
          <div className="chat-list">
            {chatList.map((data) => {
              return (
                <ul key={data.channelId}>
                  <li>
                    {data.writerName} : {data.chat}
                  </li>
                </ul>
              );
            })}
          </div>
          <form onSubmit={(event) => handleSubmit(event, chat)}>
            <div>
              <input
                type="text"
                name="chatInput"
                onChange={handleChange}
                value={chat}
              />
            </div>
            <input type="submit" value="보내기" />
          </form>
        </div>
      ) : (
        <div>
          <div>null</div>
        </div>
      )}
    </>
  );
};

export default ChatRoom;
