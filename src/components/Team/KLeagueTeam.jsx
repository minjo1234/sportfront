import React , {useEffect , useState} from "react";
import axios from "axios";

export default function KLeagueTeam() {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/kLeague/Team')
                setTeamData(response.data);

            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);


    const listItemStyle = {
        display: "flex", // 가로로 배열
        margin: "5px", // 아이템 간격

    };

    const commonStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#222',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        border: 0,
        font: 'inherit',
        verticalAlign: 'baseline',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        width: '80%',
        borderTop: '1px solid #929292',
        justifyContent: 'space-between', // Add this line
        background: '#fff',
    };

    const pStyle = {
        padding: '10px', // Adjust the padding as needed
        lineHeight: '1.5', // Adjust the line height as needed
    };

    const pStyleElement = {
        padding: '21px', // Adjust the padding as needed
        lineHeight: '1.5', // Adjust the line height as needed
    };

    return (
        <div>
        {teamData.map((team , index) =>{
                <li key={index}>{team.k_Team_Id}</li>
            })}
        </div>
    )
}
