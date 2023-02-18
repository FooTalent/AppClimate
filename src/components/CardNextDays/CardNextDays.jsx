import React from "react";
import granizo from "../../images/graniz.png";
import lluvia from "../../images/lluv.png";
import nublado from "../../images/nublad.png";
import nub from "../../images/nub.png";
import thunder from "../../images/thunder.png";

const CardNextDays = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl">
      <p className=" text-lg font-bold mb-2">The Next 5 days</p>
      <div className="flex gap-2">
        <div>
          <p className="mb-1 text-center text-xs">Sunday</p>
          <div className="border rounded-2xl p-3 w-16 flex flex-col items-center gap-1">
            <img src={granizo} alt="" width='30px' />
            <p>10 °C</p>
          </div>
        </div>

        <div>
          <p className="mb-1 text-center text-xs">Monday</p>
          <div className="border rounded-2xl p-3 w-16 flex flex-col items-center gap-1">
            <img src={lluvia} alt="" width='30px'/>
            <p>8 °C</p>
          </div>
        </div>

        <div>
          <p className="mb-1 text-center text-xs">Tuesday</p>
          <div className="border rounded-2xl p-3 w-16 flex flex-col items-center gap-1">
            <img src={nublado} alt="" width='30px' />
            <p>3 °C</p>
          </div>
        </div>

        <div>
          <p className="mb-1 text-center text-xs">Thursday</p>
          <div className="border rounded-2xl p-3 w-16 flex flex-col items-center gap-1">
            <img src={nub} alt="" width='30px'/>
            <p>5 °C</p>
          </div>
        </div>

        <div>
          <p className="mb-1 text-center text-xs">Friday</p>
          <div className="border rounded-2xl p-3 w-16 flex flex-col items-center gap-1">
            <img src={thunder} alt="" width='30px' />
            <p>9 °C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNextDays;
