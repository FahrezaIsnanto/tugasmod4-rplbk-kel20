import React, { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./index.css";

export default function Counter() {
  const [anggota, setAnggota] = useState(["reza", "zakia", "fariz", "bagas"]);
  const [search, setSearch] = useState("");
  const [showAnggota, setShowAnggota] = useState([]);

  useEffect(function(){
    if(search == ""){
      setShowAnggota(anggota);
      return;
    }
    const newAnggota = anggota.filter(function(a){
      var anggotaName = a.toLowerCase();
      return anggotaName.includes(search.toLowerCase());
    });
    setShowAnggota(newAnggota);
  },[search])  

  return (
    <>
      <div className="Main">
        <input type="text" onChange={(event) => setSearch(event.target.value)}/>

        <ul>
          {showAnggota.map((d,index) => (
           <li key={index}>{d}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
