
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import { useLocation, useParams } from 'react-router-dom';
import { stations } from '../../services/stations';
 
const Station = () => {
  /*
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const stationId = searchParams.get('stationd_id');
    const method = searchParams.get('method');
    console.log("method", search)
  */
  const { stationId, method } = useParams();
  let welcomeMessage = "Welcome to ";
  if (method === "out") {
    welcomeMessage = "Thank you for using "
  } else if (method === "in") {
    welcomeMessage = "Welcome to"
  }
  const matchedStation = stations.find((station)=>station.shortName == stationId);
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl font-bold underline">
        {welcomeMessage} {matchedStation?.name} station!
      </h1>
    </div>
  )
}
 
export default Station;
