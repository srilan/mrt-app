
import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import { useLocation, useParams } from 'react-router-dom';
import { stations } from '../../services/stations';
import { Station as MRTStation } from '../../models/mrt';
 
const Station = () => {
  /*
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const stationId = searchParams.get('stationd_id');
    const method = searchParams.get('method');
    console.log("method", search)
  */
  const [ station, setStation] = useState<MRTStation>();
  const { stationId, method } = useParams();
  let welcomeMessage = "Welcome to ";
  if (method === "out") {
    welcomeMessage = "Thank you for using "
  } else if (method === "in") {
    welcomeMessage = "Welcome to"
  }

  const retrieveData = async () => {
    //http://localhost:3000/stations/get/10
    const res = await fetch(`http://localhost:3000/stations/get/${stationId}`)
    .then((res)=> { 
      if (res.status == 400) {
        throw res;
      }
      return res.json();
    })
    .then((res)=> {
      setStation(res);
    }).catch(e=>console.log(e))

    console.log("re", res)

  }
  useEffect(()=> {
    retrieveData();
  }, []);
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl font-bold underline">
      </h1>
      {station?.stationName}
    </div>
  )
}
 
export default Station;
