import React from "react";
import "./App.css";
import logo_img from "./images/logo_img.png";
import trophy from "./images/trophy.png";
import ceremony from "./images/ceremony.png";
import machines from "./images/machines.png";
import call_logo from "./images/call_logo.jpg";
import fb_logo from "./images/fb_logo.png";
import web_logo from "./images/web_logo.png";

function App() {
  return (
    <div className="App">
      <div className="heading_img">
        <img className="img1" src={logo_img} alt="logo" />
      </div>
      <div className="trophy">
        <img className="img2" src={trophy} alt="trophy" />
      </div>
      <div className="text">
        <p className="heading">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </p>
        <ul className="list">
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img className="ceremony_img" src={ceremony} alt="ceremony" />
        <p>
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
      <p className="textBImg">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img className="machines_img" src={machines} alt="machines" />
      <p className="textBMac">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
      <p className="textBLine">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p>
        CHEMICALS & PROCESS<i id="partition">|</i>POWER<i id="partition">|</i>
        WATER & WASTE WATER<i id="partition">|</i>OILS & GAS
        <i id="partition">|</i>PHARMA <i id="partition">|</i> SUGARS &
        DISTILLERIES<i id="partition">|</i>
        PAPER & PULP<i id="partition">|</i>MARINE & DEFENCE
        <i id="partition">|</i>METAL & MINING <i id="partition">|</i>
        FOOD & BEVERAGE<i id="partition">|</i>PETROCHEMICAL & REFINERIES
        <i id="partition">|</i>SOLAR <i id="partition">|</i>
        BUILDING <i id="partition">|</i>HVAC <i id="partition">|</i>FIRE
        FIGHTING<i id="partition">|</i> AGRICULTURE & RESIDENTIAL
      </p>
      <div className="socials">
        <i className="number">
          <img id="logos" src={call_logo} alt="phone" />
          Toll free:1800 2001234
        </i>

        <i id="link">
          <img id="logos" src={fb_logo} alt="fb" />
          <a href="https://www.facebook.com/cripumps" target="_blank">
            www.facebook.com/cripumps
          </a>
        </i>

        <i id="link">
          <img id="logos" src={web_logo} alt="web" />
          <a href="https://www.crigroups.com" target="_blank">
            {" "}
            www.crigroups.com
          </a>
        </i>
      </div>
    </div>
  );
}

export default App;
