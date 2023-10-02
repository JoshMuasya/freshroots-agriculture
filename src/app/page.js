"use client"

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

const Page = () => {
  const email = 'info@freshrootsagriculture.co.ke';

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());    

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-10-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const isServer = typeof window === 'undefined';
    if (!isServer) {
      const countdownInterval = setInterval(() => {
        setTimeout(() => {
          const newTimeRemaining = calculateTimeRemaining();
          setTimeRemaining(newTimeRemaining);
        }, 1000)
      }, 1000);
  
      return () => clearInterval(countdownInterval);
    }
  }, []);

  return (
    <main>
      <div className='back-pic h-screen w-full flex flex-col justify-center items-center align-middle'>
        <div className='bg-light-green/70 h-fit w-fit md:w-2/3 flex flex-col justify-center align-middle items-center p-6 rounded-3xl'>
          {/* Top */}
          <div className='flex flex-col justify-center align-middle items-center'>
            {/* Logo */}
            <div className='mt-5 pb-7 pt-24'>
              <Image
                src='/Logo.png'
                width={85.5}
                height={40.52}
                alt='Logo'
              />
            </div>

            {/* Name */}
            <div className='text-barn-red font-armata s:text-sx sm:text-m l:text-ml font-black pb-10'>
              FRESHROOTS AGRICULTURE
            </div>
          </div>

          {/* Coming soon */}
          <div className='flex flex-col justify-center align-middle items-center pb-8'>
            <h1 className='font-overlook md:text-m text-sx text-bronze-yellow font-bold pb-5'>
              Website under Construction
            </h1>

            <h1 className='font-overlook text-lm md:text-l text-bronze-yellow font-bold'>
              Coming soon
            </h1>           
          </div>

          {/* CountDown */}
          <div className='flex flex-row justify-center align-middle items-center pb-5 m:pb-0'>
            {/* Days */}
            <div className='bg-laser-lemon text-barn-red font-black-san font-bold text-l rounded-xl mx-2 flex flex-col justify-center align-middle items-center'>
              <h1 className='px-3 py-2'>
                {timeRemaining.days}
              </h1>

              <h1 className='font-semibold text-xs px-4 py-1 bg-bronze-yellow text-light-green rounded-bl-xl rounded-br-xl '>
                Days
              </h1>
            </div>

            {/* Hours */}
            <div className='bg-laser-lemon text-barn-red font-black-san font-bold text-l rounded-xl mx-2 flex flex-col justify-center align-middle items-center'>
              <h1 className='px-3 py-2'>
                {timeRemaining.hours}
              </h1>

              <h1 className='font-semibold text-s px-3 py-1 bg-bronze-yellow text-light-green rounded-bl-xl rounded-br-xl'>
                Hours
              </h1>
            </div>

            {/* Minutes */}
            <div className='bg-laser-lemon text-barn-red font-black-san font-bold text-l rounded-xl mx-2 flex flex-col justify-center align-middle items-center'>
              <h1 className='px-3 py-2'>
                {timeRemaining.minutes}
              </h1>

              <h1 className='font-semibold text-s px-3 py-1 bg-bronze-yellow text-light-green rounded-bl-xl rounded-br-xl'>
                Minutes
              </h1>
            </div>

            {/* Seconds */}
            <div className='bg-laser-lemon text-barn-red font-black-san font-bold text-l rounded-xl mx-2 flex flex-col justify-center align-middle items-center'>
              <h1 className='px-3 py-2'>
                {timeRemaining.seconds}
              </h1>

              <h1 className='font-semibold text-s px-3 py-1 bg-bronze-yellow text-light-green rounded-bl-xl rounded-br-xl'>
                Seconds
              </h1>
            </div>
          </div>

          {/* Contact Us */}
          <div className='flex flex-col justify-center items-center align-middle'>
            {/* phone */}
            <div className='flex flex-col justify-center align-middle items-center py-5'>
              <h1 className='font-armata text-lm font-bold text-bronze-yellow'>
                Call Us
              </h1>

              <div 
                className='font-overlook text-m font-bold text-barn-red'
              >
                +254 20 521 0324
              </div>
            </div>

            {/* Email */}
            <div className='flex flex-col justify-center align-middle items-center py-5'>
              <h1 className='font-armata text-lm font-bold text-bronze-yellow'>
                Email Us
              </h1>

              <a 
                className='font-overlook text-lm font-bold text-barn-red cursor-pointer'
                onClick={handleMailClick}
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page