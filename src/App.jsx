import "./App.css";
import React from "react";
import { useState } from "react";

import b1 from "./SVG/b1.svg";
import b2 from "./SVG/b2.svg";
import b3 from "./SVG/b3.svg";
import b4 from "./SVG/b4.svg";
import b5 from "./SVG/b5.svg";
import b6 from "./SVG/b6.svg";
import b7 from "./SVG/b7.svg";
import b8 from "./SVG/b8.svg";
import b9 from "./SVG/b9.svg";
import b10 from "./SVG/b10.svg";

import b11 from "./SVG/b11.svg";
import b12 from "./SVG/b12.svg";
import b13 from "./SVG/b13.svg";
import b14 from "./SVG/b14.svg";
import b15 from "./SVG/b15.svg";
import b16 from "./SVG/b16.svg";
import b17 from "./SVG/b17.svg";
import b18 from "./SVG/b18.svg";
import b19 from "./SVG/b19.svg";
import b20 from "./SVG/b20.svg";

import t1 from "./SVG/t1.svg";
import t2 from "./SVG/t2.svg";
import t3 from "./SVG/t3.svg";
import t4 from "./SVG/t4.svg";
import t5 from "./SVG/t5.svg";
import t6 from "./SVG/t6.svg";
import t7 from "./SVG/t7.svg";
import t8 from "./SVG/t8.svg";
import t9 from "./SVG/t9.svg";
import t10 from "./SVG/t10.svg";
import t11 from "./SVG/t11.svg";
import t12 from "./SVG/t12.svg";
import t13 from "./SVG/t13.svg";
import t14 from "./SVG/t14.svg";
import t15 from "./SVG/t15.svg";
import t16 from "./SVG/t16.svg";

import t17 from "./SVG/t17.svg";
import t18 from "./SVG/t18.svg";
import t19 from "./SVG/t19.svg";
import t20 from "./SVG/t20.svg";
import t21 from "./SVG/t21.svg";
import t22 from "./SVG/t22.svg";
import t23 from "./SVG/t23.svg";
import t24 from "./SVG/t24.svg";
import t25 from "./SVG/t25.svg";
import t26 from "./SVG/t26.svg";
import t27 from "./SVG/t27.svg";
import t28 from "./SVG/t28.svg";
import t29 from "./SVG/t29.svg";
import t30 from "./SVG/t30.svg";
import t31 from "./SVG/t31.svg";
import t32 from "./SVG/t32.svg";

const App = () => {
  const Teeth = ({ teethName, ID, image }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive((current) => !current);
    };

    return (
      <div>
        <button
          id={ID}
          style={{
            backgroundColor: isActive ? "rgba(4, 173, 190, 1)" : "",
            color: isActive ? "rgb(237, 237, 237)" : "",
          }}
          onClick={handleClick}
        >
          <img src={image} />
        </button>
      </div>
    );
  };

  // render(){
  return (
    <div id="TeethDiagramContainer">
      <Teeth teethName={"B1"} ID={"b1"} image={b1}></Teeth>
      <Teeth teethName={"B2"} ID={"b2"} image={b2}></Teeth>
      <Teeth teethName={"B3"} ID={"b3"} image={b3}></Teeth>
      <Teeth teethName={"B4"} ID={"b4"} image={b4}></Teeth>
      <Teeth teethName={"B5"} ID={"b5"} image={b5}></Teeth>
      <Teeth teethName={"B6"} ID={"b6"} image={b6}></Teeth>
      <Teeth teethName={"B7"} ID={"b7"} image={b7}></Teeth>
      <Teeth teethName={"B8"} ID={"b8"} image={b8}></Teeth>
      <Teeth teethName={"B9"} ID={"b9"} image={b9}></Teeth>
      <Teeth teethName={"B10"} ID={"b10"} image={b10}></Teeth>

      <Teeth teethName={"B11"} ID={"b11"} image={b11}></Teeth>
      <Teeth teethName={"B12"} ID={"b12"} image={b12}></Teeth>
      <Teeth teethName={"B13"} ID={"b13"} image={b13}></Teeth>
      <Teeth teethName={"B14"} ID={"b14"} image={b14}></Teeth>
      <Teeth teethName={"B15"} ID={"b15"} image={b15}></Teeth>
      <Teeth teethName={"B16"} ID={"b16"} image={b16}></Teeth>
      <Teeth teethName={"B17"} ID={"b17"} image={b17}></Teeth>
      <Teeth teethName={"B18"} ID={"b18"} image={b18}></Teeth>
      <Teeth teethName={"B19"} ID={"b19"} image={b19}></Teeth>
      <Teeth teethName={"B20"} ID={"b20"} image={b20}></Teeth>

      <Teeth teethName={"T1"} ID={"t1"} image={t1}></Teeth>
      <Teeth teethName={"T2"} ID={"t2"} image={t2}></Teeth>
      <Teeth teethName={"T3"} ID={"t3"} image={t3}></Teeth>
      <Teeth teethName={"T4"} ID={"t4"} image={t4}></Teeth>
      <Teeth teethName={"T5"} ID={"t5"} image={t5}></Teeth>
      <Teeth teethName={"T6"} ID={"t6"} image={t6}></Teeth>
      <Teeth teethName={"T7"} ID={"t7"} image={t7}></Teeth>
      <Teeth teethName={"T8"} ID={"t8"} image={t8}></Teeth>
      <Teeth teethName={"T9"} ID={"t9"} image={t9}></Teeth>
      <Teeth teethName={"T10"} ID={"t10"} image={t10}></Teeth>
      <Teeth teethName={"T11"} ID={"t11"} image={t11}></Teeth>
      <Teeth teethName={"T12"} ID={"t12"} image={t12}></Teeth>
      <Teeth teethName={"b1"} ID={"t13"} image={t13}></Teeth>
      <Teeth teethName={"b1"} ID={"t14"} image={t14}></Teeth>
      <Teeth teethName={"b1"} ID={"t15"} image={t15}></Teeth>
      <Teeth teethName={"b1"} ID={"t16"} image={t16}></Teeth>

      <Teeth teethName={"b1"} ID={"t17"} image={t17}></Teeth>
      <Teeth teethName={"b1"} ID={"t18"} image={t18}></Teeth>
      <Teeth teethName={"b1"} ID={"t19"} image={t19}></Teeth>
      <Teeth teethName={"b1"} ID={"t20"} image={t20}></Teeth>
      <Teeth teethName={"b1"} ID={"t21"} image={t21}></Teeth>
      <Teeth teethName={"b1"} ID={"t22"} image={t22}></Teeth>
      <Teeth teethName={"b1"} ID={"t23"} image={t23}></Teeth>
      <Teeth teethName={"b1"} ID={"t24"} image={t24}></Teeth>
      <Teeth teethName={"b1"} ID={"t25"} image={t25}></Teeth>
      <Teeth teethName={"b1"} ID={"t26"} image={t26}></Teeth>
      <Teeth teethName={"b1"} ID={"t27"} image={t27}></Teeth>
      <Teeth teethName={"b1"} ID={"t28"} image={t28}></Teeth>
      <Teeth teethName={"b1"} ID={"t29"} image={t29}></Teeth>
      <Teeth teethName={"b1"} ID={"t30"} image={t30}></Teeth>
      <Teeth teethName={"b1"} ID={"t31"} image={t31}></Teeth>
      <Teeth teethName={"b1"} ID={"t32"} image={t32}></Teeth>
    </div>
  );
  // }     //Render closing bracket
};

export default App;
