import React from 'react'
import { useNavigate } from 'react-router-dom';
import Log from '../assets/login-image.png';
export default function Login() {
  const navigate = useNavigate();
  const handleRegisterClick = ()=>{
    navigate('/register');
  }
  return (
    <div>
      <main class="container flex flex-col lg:flex-row ">
          <section class="image-section flex justify-center items-center bg-[#780000] w-screen lg:w-[30rem] lg:h-screen">
              <img src={Log} alt="Login Image"/>
          </section>
          <section class="form-section p-[5rem] lg:mx-[3rem]">
              <h1 class="form-title text-[3rem] font-medium mb-[2rem]">Login</h1>
              <div class="form flex items-center flex-col gap-[3rem]">
                  <input type="email" name="Email" placeholder="Email" id="email" class="bg-[transparent] border-b-4 outline-none border-[#003049] text-[1.3rem] px-2"/>
                  <input type="password" name="Password" placeholder="Password" id="password" class="bg-[transparent] border-b-4 outline-none border-[#003049] text-[1.3rem] px-2"/>
                  <button class="text-[1.5rem] text-slate-200 bg-[#003049] px-[3.5rem] py-[0.5rem] hover:text-black hover:bg-[#669bbc] rounded-full" id="login_button">Login</button>
                  <p class="text-[1.3rem]">Not a user? <span class="underline font-medium cursor-pointer" onClick={handleRegisterClick}>Register</span></p>
              </div>

          </section>
      </main>
    </div>
  )
}
