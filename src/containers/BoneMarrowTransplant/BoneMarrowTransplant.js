import React from "react";

import bonemarrow from '../../assets/bonemarrow.png';

import "./_boneMarrowTransplant.scss";

function BoneMarrowTransplant() {
  return (
    <div className="bonemarrowtransplant">
        <div className="bonemarrowtransplant-align">
            <img src={bonemarrow} alt="bonemarrow" className="bonemarrowtransplant-align_profile" />
            <span>
                <p className="bonemarrowtransplant-align_subheading">
                    Bone Marrow Transplant (BMT) better known as haematopoietic stem cell transplant(HSCT) as bone marrow cells are transplanted
                </p>
                <p className="bonemarrowtransplant-align_subheading">
                    Replacement of diseased or defective marrow with marrow from a healthy donor
                </p>
                <p className="bonemarrowtransplant-align_subheading">
                Medicines and in certain situations radiotherapy as well is given to get rid of diseased marrow and bone marrow cells from healthy donor is given to replace it.
                </p>
                <p className="bonemarrowtransplant-align_subheading">
                    IN autologous bone marrow transplant, high dose chemotherapy is given to kill cancer cells and child own marrow cells are given back
                </p>
            </span>
        </div>
    </div>
  );
}

export default BoneMarrowTransplant;
