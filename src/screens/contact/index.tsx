
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
 
const Contact = () => {
    const [name, setName] = useState("John Doe");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
              Contact! {firstName} {lastName}
            </h1>
            Contact
            <button onClick={clickEvent}>
              Submit
            </button>

            <div>Footer</div>
        </div>
    )
}
 
export default Contact;
