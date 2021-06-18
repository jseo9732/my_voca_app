import axios from 'axios';
import { useRef } from 'react';
import useAxios from '../hooks/useAxios';
import { useHistory } from 'react-router-dom';
import "./CreateWord.css"

function CreateWord() {
    const days = useAxios("http://localhost:3001/days");
    const history = useHistory();

    const dayRef = useRef(null);
    const engRef = useRef(null);
    const korRef = useRef(null);

    const saveWord = (e) => {
        e.preventDefault();

        axios(`http://localhost:3001/words`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false 
            }
        }).then(res => {
            if (res.statusText === "Created") {
                alert('생성이 완료되었습니다.');
                history.push(`/day/${dayRef.current.value}`);
            }
        });
    }

    return(
        <div className="CreateWord">
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>

            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}></input>
            </div>
            
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}></input>
            </div>
        
            <button onClick={saveWord}>저장</button>
        </div>
    )
}

export default CreateWord;