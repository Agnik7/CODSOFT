import React from 'react';
import { useLocation } from 'react-router-dom';
import FlightCard from './FlightCard';

export default function Flights() {
  const { state } = useLocation();
  const handleClick=()=>{
    console.log(state);
    
  }
  const flightName = state.flightData.flightName;
  const flightNumber = state.flightData.flightNumber;
  const availableSeats = state.flightData.availableSeats;
  const departureTime = state.flightData.departureTime;
  const arrivalTime = state.flightData.arrivalTime;
  const date = state.flightData.date;
  const price = state.flightData.price;
  return (
    <div className='bg-[#260F26] min-h-screen'>
      <h1 className='text-slate-50 text-[3rem] font-bold mx-[2rem]'>Flights from {state.flightData.fromDest} to {state.flightData.toDest}</h1>
      <div className="flight-card-container w-full  flex flex-row flex-wrap justify-evenly">
      {flightNumber.map((number, index) => (
          <FlightCard
            key={index}
            flightName={flightName[index]}
            flightNumber={number}
            availableSeats={availableSeats[index]}
            departureTime={departureTime[index]}
            arrivalTime={arrivalTime[index]}
            date={date[index]}
            price={price[index]}
          />
        ))}
      </div>
    </div>
  );
}
