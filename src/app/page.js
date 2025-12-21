'use client'
import Image from "next/image";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [ detail, setDetail ] = useState(false)
  const seeDetail = () => {
    setDetail(true)
  }

  return (
    <main>
      <div className="">
        {/* navbar */}
        <div className="fixed z-1 top-0 left-0 flex justify-end items-center h-screen ml-30 px-18 w-fit border border-black">
          <ul className="space-y-8 text-xl">
            <li>about</li>
            <li>projects</li>
            <li>blog</li>
            <li>contact</li>
          </ul>
        </div>

          <div className="flex transition-all duration-500 ease-in-out my-16">
            <div
              className={`
                border border-black p-8
                transition-all duration-500
                ${detail ? "w-1/2 ml-100 mr-8" : "w-full mx-100"}
              `}
            >
              <h1 className="text-3xl">Amanda Nur Rahmi.</h1>
              <p className="text-xl">Web developer</p>
              <button onClick={seeDetail} className="text-xl py-8">
                Pendidikan
              </button>
            </div>

            <div
              className={`
                transition-all duration-500 overflow-hidden
                ${detail ? "w-1/2 opacity-100" : "w-0 opacity-0"}
              `}
            >
              <div className="border border-black mr-30">
                dsd
              </div>
            </div>
          </div>

       
      </div>
      </main>
  );
}
