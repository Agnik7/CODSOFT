import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bk from '../assets/book-image.png';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
export default function Book() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const [purpose, setPurpose] = useState('');
  const [fromDest,setFromDest] = useState('');
  const [toDest,setToDest] = useState('');
  const [cabinClass,setCabinClass] = useState('');
  const [tripType,setTripType] = useState('');
  const [departure, setDeparture] = useState(dayjs()); 
  const [people,setPeople] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [location,setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(dayjs()); 
  const [checkOut, setCheckOut] = useState(dayjs()); 
  const [roomType,setRoomType]= useState('');

  const [flightData, setFlightData] = useState({
    flightName: [],
    flightNumber: [],
    availableSeats: [],
    departureTime: [],
    arrivalTime: [],
    date: [],
    price: [],
    fromDest:'',
    toDest:'',
    tripType:'',
    cabinClass:'',
    people:0
  });
  const handleAirlineBook= async()=>{
    const dept = departure.format('DD/MM/YYYY');
    await axios.get(`http://localhost:9000/get_airline?from_dest=${fromDest}&to_dest=${toDest}&cabin_class=${cabinClass}&trip_type=${tripType}&departure=${dept}&seats=${people}`,{
      headers:{
        Authorization: `Bearer ${token}`
      },
      withCredentials:true
    })
    .then((res)=>{
      const responseData = res.data;
      console.log(responseData);
      setFlightData({
        flightName: responseData.flightName,
        flightNumber: responseData.flightNumber,
        availableSeats: responseData.availableSeats,
        departureTime: responseData.departureTime,
        arrivalTime: responseData.arrivalTime,
        date: responseData.date,
        price: responseData.price,
        fromDest: fromDest,
        toDest: toDest,
        cabinClass:cabinClass,
        tripType:tripType,
        people:people
      });
    })
    .catch(err=>{
      console.log(err);
    });
    
  }
  useEffect(() => {
    if (flightData.flightName.length > 0) {
      alert("Go");
      navigate('/flights', { state: {flightData:flightData} });
    }
  }, [flightData]);
  const handleHotelBook = ()=>{
    console.log("Hotel Book");
  }
  return (
    <div>
      <main className='flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between'>
        <section className="book-section p-[3rem] w-full">
          <h1 className='text-[2.5rem] font-semibold mb-[2rem]'>Book</h1>
          <section className="book-container">
          <FormControl fullWidth>
            <InputLabel id="travel-purpose">Purpose</InputLabel>
            <Select
              labelId="travel-purpose"
              id="purpose"
              value={purpose}
              label="Purpose"
              onChange={(e)=>{setPurpose(e.target.value)}}
            >
              <MenuItem value={'Flight'}>Flight</MenuItem>
              <MenuItem value={'Hotel'}>Hotel</MenuItem>
            </Select>
          </FormControl>
          {purpose === 'Flight' && (<section className="airline">
            <div className="mt-[2rem] flex justify-between flex-row">
              <FormControl fullWidth sx={{marginRight:8}}>
                <InputLabel id="from-dest">From</InputLabel>
                <Select
                  labelId="from-dest"
                  id="from_destination"
                  value={fromDest}
                  label="From"
                  onChange={(e)=>{setFromDest(e.target.value)}}
                >
                  <MenuItem value={'CCU'}>Kolkata(CCU)</MenuItem>
                  <MenuItem value={'DEL'}>Delhi(DEL)</MenuItem>
                  <MenuItem value={'BLR'}>Bangalore(BLR)</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{marginLeft:8}}>
                <InputLabel id="to-dest">To</InputLabel>
                <Select
                  labelId="to-dest"
                  id="to_destination"
                  value={toDest}
                  label="To"
                  onChange={(e)=>{setToDest(e.target.value)}}
                >
                  <MenuItem value={'CCU'}>Kolkata(CCU)</MenuItem>
                  <MenuItem value={'DEL'}>Delhi(DEL)</MenuItem>
                  <MenuItem value={'BLR'}>Bangalore(BLR)</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div className="mt-[2rem] flex justify-between flex-row">
              <FormControl fullWidth sx={{marginRight:8}}>
                <InputLabel id="cabin-class">Cabin Class</InputLabel>
                <Select
                  labelId="cabin-class"
                  id="cabin_class"
                  value={cabinClass}
                  label="Cabin"
                  onChange={(e)=>{setCabinClass(e.target.value)}}
                >
                  <MenuItem value={'ECONOMY'}>Economy</MenuItem>
                  <MenuItem value={'BUSINESS'}>Business</MenuItem>
                  <MenuItem value={'FIRST'}>First</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{marginLeft:8}}>
                <InputLabel id="trip-type">Type of Trip</InputLabel>
                <Select
                  labelId="trip-type"
                  id="trip_type"
                  value={tripType}
                  label="Type"
                  onChange={(e)=>{setTripType(e.target.value)}}
                >
                  <MenuItem value={'ONE_WAY'}>One Way</MenuItem>
                  <MenuItem value={'ROUND_TRIP'}>Round Trip</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div className="my-[2rem] flex justify-between flex-row">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Travel"
                  value={departure}
                  onChange={(value) => setDeparture(value)}
                />
              </LocalizationProvider>
              <TextField id="people" label="Number of People" variant="outlined" type='number' InputLabelProps={{shrink:true}} value={people} onChange={(e)=>{setPeople(e.target.value)}}/>
            </div>
            <div className='flex justify-center items-center'>
              <button class="text-[1.5rem] text-slate-200 bg-[#003049] px-[3.5rem] py-[0.5rem] hover:text-black hover:bg-[#669bbc] rounded-full" id="search-airline" onClick={handleAirlineBook}>Search Flights</button>              
            </div>
          </section>)}
          {purpose==='Hotel' &&(<section className="hotel">
            <div className='my-[2rem] flex flex-wrap gap-[2rem]  md:justify-between flex-row'>
              <TextField
                required
                id="hotel-location"
                label="Location"
                value={location}
                onChange={(e)=>{setLocation(e.target.value)}}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Check-in"
                  value={checkIn}
                  onChange={(value) => setCheckIn(value)}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Check-out"
                  value={checkOut}
                  onChange={(value) => setCheckOut(value)}
                />
              </LocalizationProvider>
              <FormControl fullWidth>
                <InputLabel id="room-type">Room Type</InputLabel>
                <Select
                  labelId="room-type"
                  id="room_type"
                  value={roomType}
                  label="Room"
                  onChange={(e)=>{setRoomType(e.target.value)}}
                >
                  <MenuItem value={'Normal'}>Normal</MenuItem>
                  <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
                  <MenuItem value={'Royal'}>Royal</MenuItem>
                </Select>
              </FormControl>
              <TextField id="people-num" label="Number of People" variant="outlined" type='number' InputLabelProps={{shrink:true}} value={people} onChange={(e)=>{setPeople(e.target.value)}}/>
              <TextField id="people-num" label="Number of Rooms" variant="outlined" type='number' InputLabelProps={{shrink:true}} value={rooms} onChange={(e)=>{setRooms(e.target.value)}}/>
            </div>
            <div className='flex justify-center items-start'>
              <button class="text-[1.5rem] text-slate-200 bg-[#003049] px-[3.5rem] py-[0.5rem] hover:text-black hover:bg-[#669bbc] rounded-full" id="search-hotel" onClick={handleHotelBook}>Search Hotels</button>
            </div>
          </section>)}
          </section>
        </section>
        <section className="image-section flex items-center justify-center bg-[red] w-screen lg:h-screen lg:max-w-[35rem]">
          <img src={Bk} alt="Book Image" />
        </section>
      </main>
    </div>
  )
}
