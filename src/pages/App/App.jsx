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
import EditPuppyPage from '../EditPuppyPage/EditPuppyPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);
  const history = useHistory();

  useEffect(() => {
		history.push('/puppies')
	}, [puppies, history])

  useEffect(() => {
    async function getPuppies(){
        const puppies = await puppiesAPI.getAll();
        setPuppies(puppies)
    } 
    getPuppies();
  },[]);

  async function handleUpdatePuppy(pup){
    const updatedPuppy = await puppiesAPI.update(pup);
    const newPuppiesArray = puppies.map(p => p._id === updatedPuppy._id ? updatedPuppy : p );
    setPuppies(newPuppiesArray);
  }

  async function handleDeletePuppy(id){
    await puppiesAPI.deleteOne(id);
    setPuppies(puppies.filter(puppy => puppy._id !== id));
  }

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
                return <PuppiesPage puppies={puppies} setPuppies={setPuppies} handleDeletePuppy={handleDeletePuppy} />;
              }}
            />
            <Route exact path="/details" render={() => {
              return <PuppyDetailPage puppies={puppies} />
            }}
            />
            <Route exact path='/edit' render={() => {
              return <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
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
