import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="Header">
            <h1 className="title">
                <Link to='/'>토익 VOCA</Link>
            </h1>
            <div className="add_btn">
                <Link to='/create_word'>단어 추가</Link>
                <Link to='/create_day'>Day 추가</Link>
            </div>
        </div>
    );
}

export default Header;