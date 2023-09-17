import React from 'react';

export default function FlightCard(props) {
  return (
    <div className="flight-card p-[1rem] font-semibold my-[2rem] rounded-[1rem] bg-[#B4D2E7] max-w-screen md:min-w-[30rem]">
      <h2 className='text-[2.5rem] w-full mb-[1rem] text-center font-bold'>{props.flightName}</h2>
      <p className='text-[1.3rem] mb-[2rem]'>Flight Number: {props.flightNumber}</p>
      <div className='w-full text-[1.2rem] mb-[1.5rem] flex flex-wrap flex-row justify-between'>
        <p>Departure Time: {props.departureTime}</p>
        <p>Arrival Time: {props.arrivalTime}</p>        
      </div>
      <div className="w-full text-[1.2rem] mb-[1rem] flex flex-wrap flex-row justify-between">
        <p>Available Seats: {props.availableSeats}</p>
        <p>Date: {props.date}</p>
      </div>
        <button className='w-full text-[1.3rem] p-[1rem] bg-[#000100] text-[#F8F8F8] rounded-[0.5rem] hover:bg-[#A1A6B4] hover:text-[#000100] cursor-pointer '>Book (₹{props.price})</button>
    </div>
  );
}
