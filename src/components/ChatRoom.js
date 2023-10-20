import { useRef, useState, useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import { fetchUser } from "../api/UserAPI";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ChatRoom = () => {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState("");
  const client = useRef({});
  const messageEndRef = useRef(null)
  const channelId = useLocation().state.channelId;
  const [user, setUser] = useState({});

  const ACCESS_TOKEN = localStorage.getItem("accessToken");


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
      writerName: user.nickName,
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
    setChat(event.target.value);
  };

  const handleSubmit = (event, chat) => {
    event.preventDefault();
    if(chat){
      console.log(chat);
      publish(chat);
    }
  };

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);


  useEffect(() => {
    messageEndRef.current.scrollIntoView({behavior:'smooth'})
  }, [chatList])

  return (
    <>
      {ACCESS_TOKEN ? (
        <div>
          <ChatBox>
            {chatList.map((data) => {
              return (
                <ChatUl key={data.channelId}>
                  <li>
                    {data.writerName} : {data.chat}
                  </li>
                </ChatUl>
              );
            })}
            <div ref={messageEndRef}></div>
          </ChatBox>
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
          <div>login 해주세요!</div>
        </div>
      )}
    </>
  );
};

export default ChatRoom;

export const ChatBox = styled.div`
  height: 200px;
  border: white dashed 1px;
  max-width: 300px;
  padding-bottom:2px;
  overflow-y:auto;
  overflow-x:hidden;
  white-space:nowrap;
  &::-webkit-scrollbar{
    display: none;
  }
`
export const ChatUl = styled.ul`
  color:#ffff;
`
