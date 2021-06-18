import { Link } from 'react-router-dom';
import './DayList.css';
import useAxios from '../hooks/useAxios';

function DayList() {
    const days = useAxios("http://localhost:3001/days");
 
    return(
        <ul className="DayList">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day { day.day }</Link>
                </li>
            ))}
        </ul>
    );
}
export default DayList;