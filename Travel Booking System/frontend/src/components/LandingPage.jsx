import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../assets/about-img.png';
import Intro from '../assets/intro-image.png';


export default function LandingPage() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/register');
  }
  return (
    <div>
      <nav class="navbar bg-[#780000] min-w-full flex flex-col px-[1rem] pb-[1.5rem] items-center justify-between sm:flex-row sm:pb-0">
        <h1 class="text-slate-200 text-[2rem] m-[1rem] font-bold">GlobeTrotter</h1>
        <div class="tabs text-center text-[1.2rem]">
            <ul class="list w-full flex items-center justify-between sm:flex-row sm:w-[25rem] md:w-[30rem]">
                <li class="list-items m-1 text-slate-200 hover:text-slate-400"><a href="#home">Home</a></li>
                <li class="list-items m-1 text-slate-200 hover:text-slate-400"><a href="#about">About</a></li>
                <li class="list-items m-1 text-slate-200 hover:text-slate-400"><a href="#features">Features</a></li>
                <li class="list-items m-1 text-slate-200 hover:text-slate-400 cursor-pointer" onClick={handleClick}>Login/Register</li>
            </ul>
        </div>
    </nav>
    <main>
        {/* <!-- Home Section --> */}
        <section class="home flex flex-col-reverse px-[1rem] justify-center items-center sm:flex-row sm:justify-between md:justify evenly" id="home">
            <div class="text-section">
                <h2 class="text-[3rem] font-bold">Welcome to GlobeTrotter!</h2>
                <p  class="text-[1.3rem]">Enter your paradise with a bang!!</p>
                <p class="text-[1.3rem]">Book the tickets to your dream destination now!!!</p>
                <button class="bg-[#669bbc] text-black hover:bg-[#003049] hover:text-slate-50 text-[1.2rem] font-medium px-[2rem] py-1 rounded-full my-[1rem]" onClick={handleClick}>
                  Book your tickets!
                </button>
            </div>
            <div class="image-section">
                <img src={Intro} alt="Intro image"/>
            </div>
        </section>
        
        {/* <!-- About Section --> */}
        <section class="px-[2rem]" id="about">
            <h2 class="mt-4 text-[3rem] font-bold">About Us</h2>
            <div class="container flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                <div class="image-section">
                    <img src={About} alt="About image"/>
                </div>
                <div class="text-section  max-w-full sm:max-w-[40rem]">
                    <p  class="text-[1.3rem]">
                        Welcome to GlobeTrotters, your ultimate destination for seamless 
                        travel experiences. At GlobeTrotters, we're passionate about making 
                        your travel dreams come true. Whether you're a seasoned globetrotter 
                        or a first-time explorer, we're here to simplify and enhance your journey.
                    </p>
                    <p class="text-[1.3rem] my-[1rem]">
                        We are committed to providing you with a world-class travel booking system that 
                        combines convenience, affordability, and reliability. We believe that travel should 
                        be an enriching and stress-free experience, and that's why we've designed our platform 
                        with you in mind.
                    </p>
                </div>
                
            </div>
        </section>

        {/* <!-- Feature Section --> */}
        <section class="px-[2rem]" id="features">
            <div class="text-section">
                <h2 class="text-[3rem] font-bold">Features We Offer</h2>
                <ul class="text-[1.3rem] list-disc px-[2rem] whitespace-normal">
                    <li class="my-4">
                        <span class="font-medium">Extensive Travel Options:</span> Choose from a wide range of destinations, flights, 
                        hotels, and activities tailored to your preferences.
                    </li>
                    <li class="my-4">
                        <span class="font-medium">User-Friendly Interface:</span> Our intuitive website makes booking your next adventure
                         a breeze.
                    </li>
                    <li class="my-4">
                        <span class="font-medium">Competitive Pricing:</span> We work tirelessly to offer you the best deals and discounts, 
                        ensuring you get the most value from your travels.
                    </li>
                    <li class="my-4">
                        <span class="font-medium">Personalized Support:</span> Our dedicated support team is here to assist you 
                        every step of the way, from planning to booking and beyond.
                    </li>
                    <li class="my-4">
                        <span class="font-medium">Trust and Security:</span> Your trust is important to us, and we prioritize the security of your 
                        personal information and payment details.
                    </li>
                </ul>
            </div>
        </section>
        <footer class="px-[2rem] my-[3rem]">
            <p class="text-[1.3rem]">
                Join the GlobeTrotters community today and embark on a journey filled with exploration, 
                discovery, and unforgettable memories. Let us be your trusted companion in the world of 
                travel, and together, we'll explore the globe one adventure at a time.
            </p>
            <p class="text-[1.3rem] my-4 whitespace-normal">
                Start your next adventure with GlobeTrotters and let the world be your playground!
            </p>
        </footer>
    </main>   
    </div>
  )
}
