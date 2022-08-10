import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import "../index.css";


function InfoTooltip ({isOpen, onClose}) {
  
const [logo, setLogo] = useState("");
const [title, setTitle] = useState("")

  return (
    <PopupWithForm
     isOpen={isOpen}
     onClose={onClose}
     name="infotooltip"
    >
      <div
       className="popup__infotooltip-logo"
       value={logo}
      />
      <h1
       className="popup__infotooltip-title"
       value={title}
       />
    </PopupWithForm>
  );
}


export default InfoTooltip;
