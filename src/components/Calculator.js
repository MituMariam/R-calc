import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Calculator = () => {
  const [result, setresult] = useState("");
  const handleClick = (e) => {
    console.log(e.target.name);
    setresult(result.concat(e.target.name));
  };
  const clear = (e) => {
    setresult("");
  };

  const backspace = (e) => {
    setresult(result.slice(0, result.length - 1));
  };

  const calculate = (e) => {
    try{

        setresult(eval(result).toString());
    }catch(error){
        setresult("Error");
    }
  };


  return (
    <React.Fragment>
      <section className="flex justify-center items-center h-screen bg-primary">
        <div className="w-80 pb-6 rounded-lg overflow-hidden  shadow-inner1  ">
          <div className="flex items-center gap-10 text-gray-800 w-full h-20 font-bold text-3xl px-5">
            <GiHamburgerMenu className="" />
            <h1>Calculator App</h1>
          </div>
          {/* screen  */}
          <div className="px-5">
            <input 
              type="text"
            //   placeholder="0"
              value={result}
              className=" bg-primary w-full text-right text-[40px] h-20 px-3 rounded-lg focus:outline-none shadow-inner1 "
            />
          </div>
          {/* keypad  */}
          <div className="px-5 pt-3 grid grid-cols-4 gap-3">
            <button name="AC" onClick={clear} className="btn">
              AC
            </button>
            <button name="C" onClick={backspace} className="btn">
              C
            </button>
            <button name="/" onClick={handleClick} className="btn">
              /
            </button>
            <button
              name="+"
              onClick={handleClick}
              className="btn row-span-2 h-full"
            >
              +
            </button>
            <button name="9" onClick={handleClick} className="btn">
              9
            </button>
            <button name="8" onClick={handleClick} className="btn">
              8
            </button>
            <button name="7" onClick={handleClick} className="btn">
              7
            </button>

            <button name="4" onClick={handleClick} className="btn">
              4
            </button>
            <button name="5" onClick={handleClick} className="btn">
              5
            </button>
            <button name="6" onClick={handleClick} className="btn">
              6
            </button>
            <button name="-" onClick={handleClick} className="btn">
              -
            </button>

            <button name="1" onClick={handleClick} className="btn">
              1
            </button>
            <button name="2" onClick={handleClick} className="btn">
              2
            </button>
            <button name="3" onClick={handleClick} className="btn">
              3
            </button>
            <button name="*" onClick={handleClick} className="btn">
              *
            </button>

            <button name="." onClick={handleClick} className="btn">
              .
            </button>
            <button name="0" onClick={handleClick} className="btn">
              0
            </button>
            <button
              name="="
              onClick={calculate}
              className="btn col-span-2 w-full"
            >
              =
            </button>

            {/* <button className="btn">10</button> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Calculator;
