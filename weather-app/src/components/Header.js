import React, { useContext } from "react";
import CityContext from "../context/CityContext";

const Header = () => {
    const data = useContext(CityContext);
    console.log(data)
    
    const handleChange = (e) => {
        data.setSelectedCity(e.target.value)
    }    

  return (
    <div
      style={{
        width: "100vw",
        height: "60px",
        backgroundColor: "lightskyblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <select onChange={handleChange}>
        {data?.cities.map((item) => (
          <option key={item.name} value={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Header;
