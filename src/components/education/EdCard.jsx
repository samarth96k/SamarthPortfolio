import React from "react";
import "./EdCard.css";

export default function EdCard({
  inst_name,
  board,
  degree_name,
  cgpa,
  percantage,
  start,
  end,
  inst_img,
  img_setting,
  img_type
}) {
  return (
    
    <div className="ed-card">
        <div className="ed-right-side">
            <img
              className={"inst-img"+img_type}
              src={inst_img}
              alt={inst_name}
              style={img_setting ? { width: "20rem" } : {}}
            />        
        </div>
        <div className="ed-left-side libertinus-serif-regular">
            <h2 className="ed-inst libertinus-serif-bold">{inst_name}</h2>
            <p className="board">{board}</p>
            <p className="degreeName">{degree_name}</p>
        </div>
        <div className="ed-mid-side libertinus-serif-bold">
            <span className="ed-duration">{start}{end && <>–{end}</>}</span>
            <div className="ed-score">
                {cgpa && <span>CGPA: <strong>{cgpa}</strong></span>}
                {percantage && (<span><strong>{percantage}%</strong></span>)}
            </div>
        </div>

    </div>    
  );
}
