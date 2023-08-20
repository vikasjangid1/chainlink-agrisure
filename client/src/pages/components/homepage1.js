import React from "react";
import Styles from "./homepage1.module.css";
import Link from "next/link";



const homepage1 = () => {
  return (
    <div className={Styles.forhomeone} >

      <header>
        <div>
          <p className="border-solid bg-neutral-200 border border-green-800 border-t-0 border-x-0 static top-9 right-9  text-gray-900 flex font-serif tracking-wide text-[22px] bg-[HEX-#DCEDC8] text-lime-800 leading-loose italic justify-center ">
            "Fortify, Insure, Thrive"
          </p>
        </div>

        <nav className=" flex justify-between items-center ">
          <Link href="/">
            <button type="button">
              <img className=" xs:w-20 xs:h-16 w-28 xs:mt-4 xs:ml-4 mt-8 h-24 ml-16" src="logo.png" />
            </button>
          </Link>

          <ul className="flex justify-center align-center ">
            <li>
              <Link href="/aboutUS">
              <button
                type="button"
                className=" xs:scale-50  xs:text-2xl xs:px-3.5 xs:py-3 
                xs:left-4 xs:mt-3 md:mt-4 shadow-md xs:mr-0 
                mr-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-8 mb-2"
              >  
                About Us
              </button>
              </Link>
            </li>

            <li>
              <Link href="/launched-app">
              <button
                type="button"
                className="shadow-md xs:scale-50 xs:mt-3 xs:text-2xl xs:px-3.5 xs:py-3 xs:mr-0 
                md:mt-4 mr-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-12 mb-2"
              >
                Launch App
              </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className=" md:mt-5 md:ml-0 flex justify-between xs:flex-col">
        <div>
          <div>
            <p className="md:text-4xl  text-6xl text-cyan-950 mt-14 ml-10 leading-normal text-justify font-serif xs:text-4xl">
              Planting Seeds of <br />
              Security 🛡
            </p>
          </div>

          <div>
            <p className="text-base font-sans md:font-serif font-semibold uppercase text-slate-600 tracking-wide mt-7 leading-loose text-left ml-10">
              We aim to provide farmers with a reliable <br /> and transparent
              solution that automatically <br />
              triggers payouts based on <br /> predetermined weather conditions
            </p>
          </div>
        </div>

        <div className={Styles.flexdone}>
            <div>
              <img className={Styles.oneimg} src="h1-3.png" />
            </div>

            <div>
              <img className={Styles.twoimg} src="h1-5.png" />
            </div>

            <div>
              <img className={Styles.threeimg} src="h1-4.png" />
            </div>
        </div>

      </div> 

        
    </div>
  );
};

export default homepage1;
