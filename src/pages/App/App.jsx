import React, { useState, useEffect } from "react";
import AddPuppyPage from "../AddPuppyPage/AddPuppyPage";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import PuppiesPage from "../PuppiesPage/PuppiesPage";
import * as puppiesAPI from '../../utilities/puppies-api';
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);
  const history = useHistory();

  useEffect(() => {
		history.push('/')
	}, [puppies, history])

  useEffect(() => {
    async function getPuppies(){
        const puppies = await puppiesAPI.getAll();
        setPuppies(puppies)
    } 
    getPuppies();
  },[]);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route
              exact
              path="/puppies/new"
              render={() => {
                return (
                  <AddPuppyPage puppies={puppies} setPuppies={setPuppies} />
                );
              }}
            />
            <Route
              exact
              path="/puppies"
              render={() => {
                return <PuppiesPage puppies={puppies} setPuppies={setPuppies} />;
              }}
            />
            <Route exact path="/details" render={() => {
              return <PuppyDetailPage puppies={puppies} />
            }}
            />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
