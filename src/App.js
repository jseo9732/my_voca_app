import './App.css';
import DayList from './components/DayList';
import Header from './components/Header';
import Day from './components/Day';
import EmptyPage from './components/EmptyPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ DayList } />
          <Route path='/day/:day' component={ Day } />
          <Route path='/create_word' component={ CreateWord } />
          <Route path='/create_day' component={ CreateDay } />
          <Route component={ EmptyPage } />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
