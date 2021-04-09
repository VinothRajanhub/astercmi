import React from "react";
 
import "./_testimonals.scss";

function Testimonals(props) {
  return (
    <div className="testimonals">
        <div className='testimonals_profiledesc'>
                <span className="testimonals_rowalign">
                <img src={props.testimonalprofile} alt="testimonalprofile" className='testimonals_profiledesc-photo' />
                <h3 className="testimonals_profiledesc-text">{props.testimonalname}
                <p className="testimonals_profiledesc-textline">{props.testimonalrole}</p>
                </h3>
                </span>
                <img src={props.testimonalquote} alt="testimonalquote" className='testimonals_profiledesc-quote' />

        </div>
        <p className='testimonals_description'>{props.testimonaldescription}</p>
    </div>
  );
}

export default Testimonals;
