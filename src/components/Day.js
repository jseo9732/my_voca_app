import Word from './Word';
import { useParams } from "react-router-dom";
import './Day.css';
import useAxios from '../hooks/useAxios';

function Day() {
    const { day } = useParams();
    const words = useAxios(`http://localhost:3001/words?day=${day}`);

    return(
        <div className="Day">
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}     
                </tbody>
            </table>
        </div>
    );
}
export default Day;