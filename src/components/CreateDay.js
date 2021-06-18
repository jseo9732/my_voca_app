import axios from "axios";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import "./CreateDay.css"

function CreateDay() {
    const days = useAxios("http://localhost:3001/days");
    const history = useHistory();

    const saveDay = (e) => {
        e.preventDefault();

        axios(`http://localhost:3001/days`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                day: days.length + 1
            }
        }).then(res => {
            if (res.statusText === "Created") {
                alert('생성이 완료되었습니다.');
                history.push(`/`);
            }
        });
    }

    return(
        <div className="CreateDay">
            <h3>현재 일 수 : {days.length}일</h3>
            <button onClick={saveDay}>Day 추가</button>
        </div>
    );
}

export default CreateDay;