
  import React, { useState } from 'react';
  import Navigation from '../../components/Navigation';
  
  interface Props {
    changeNameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    clickEvent: () => void;
  }

  const HomeForm: React.FC<Props> = ({
    changeNameHandler,
    setLastName,
    clickEvent
  }) => {
      return (
        <>
          <input 
            onChange={changeNameHandler}
            placeholder='First Name'
          />
          <input 
            onChange={(e)=>setLastName(e.target.value)}
            placeholder='Last Name'
          />
          <button onClick={clickEvent}>
            Submit
          </button>
        </>
      )
  }
  
  export default HomeForm;
