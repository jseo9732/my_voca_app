import './Word.css';
import { useState } from 'react';
import axios from 'axios';

function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    const toggleDone = () => {
        axios(`http://localhost:3001/words/${word.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                ...word,
                isDone: !isDone,
            }
        }).then(res => {
            if (res.statusText === "OK") {
                setIsDone(!isDone);
            }
        });
    }

    const toggleDel = () => {
        if(window.confirm('삭제 하시겠습니까?')) {
            axios(`http://localhost:3001/words/${word.id}`,
            {
                method: "DELETE",
            }).then(res => {
                if (res.statusText === "OK") {
                    setWord({ id: 0 });
                }
            });
        }
    }

    if (word.id === 0) {
        return null;
    }

    return(
        <tr key={word.id} className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? "숨기기" : "보기"}
                </button>
                <button onClick={toggleDel} className="del_btn">삭제</button>
            </td>
        </tr>
    );
}
export default Word;