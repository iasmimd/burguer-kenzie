import "./style.css";
import LogoHeader from "../../assets/logoHeader.svg";
import { useState } from "react";

const Header = (filter, setFilteredProducts) => {  

  return (
    <header>
      <img className="logoHeader" src={LogoHeader} alt=""></img>
      <div className="inputContainer">
        <input
          className="inputHeader"
          placeholder="Digitas pesquisa"
          onChange={(event) => setFilteredProducts(event.target.value)}
        ></input>
        {/* <button 
        className="buttonHeader"
        onClick={filter}
        >Pesquisar</button> */}
      </div>
    </header>
  );
};

export default Header;
