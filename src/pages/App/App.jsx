import {useState} from "react";
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import AuthPage from '../AuthPage/AuthPage';
import PuppiesPage from '../PuppiesPage/PuppiesPage';
import {Redirect, Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './App.css';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      <NavBar />
      { user ? 
      <Switch>
        <Route path="/puppies/new">
          <NewPuppyPage />
        </Route>
        <Route path="/puppies">
          <PuppiesPage />
        </Route>
        <Redirect to='/puppies' />
      </Switch>
      :
      <AuthPage />
      }
    </main>
  );
}
