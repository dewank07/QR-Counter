import { useState } from "react";
import "./App.css";
import Scan from "./Components/Scan";
import GFGImg from "./assets/gfg.png";

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-around gap-16'>
        <div className='w-64'>
          <img src={GFGImg} alt='GFG LOGO' />
        </div>
        <div>
          <Scan />
        </div>
      </div>
    </>
  );
}

export default App;
