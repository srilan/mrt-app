
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import HomeForm from './homeform';
import Counter from './counter';
 
const Home = () => {
    const [name, setName] = useState("John Doe");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const count = 10;
    const clickEvent = () => {
      console.log("Clicked");
      setName("Jane Doe");
    }
    const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    }
    return (
        <div>
            <Navigation />
            <h1 className="text-3xl font-bold underline">
              Home! {firstName} {lastName}
            </h1>
            <HomeForm 
              setLastName={setLastName}
              clickEvent={clickEvent}
              changeNameHandler={changeNameHandler}
            />
            <Counter count={count} />
            <div>Footer</div>
        </div>
    )
}
 
export default Home;
