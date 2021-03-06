import React from "react";

const InfoCard = ({ cardImg, cardTitle, cardBg, cardBody }) => {
  return (
    <div>
      <div className={`card lg:card-side shadow-xl ${cardBg}`}>
        <figure>
          <img className="p-3" src={cardImg} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}!</h2>
          <p>{cardBody}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
