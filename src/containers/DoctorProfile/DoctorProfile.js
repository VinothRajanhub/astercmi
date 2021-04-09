import React from "react";

import doctor from "../../assets/vijay.png";
import Doctors from "../../components/cmi-doctor/Doctors";

import "./_doctorProfile.scss";

function DoctorProfile() {
  return (
    <>
    <h1 className="doctorprofileheading">Doctors</h1>
    <div className="doctorprofile">
      <Doctors
        doctorheadline="Pediatric BMT"
        doctorphoto={doctor}
        doctorname="Dr. Vijay Agarwal"
        doctordegree="MD, MRCP, PhD,CCT "
        degreestudy="Lead & Sr. Consultant - Medical Oncology & Haematology"
        doctordescription="Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. "
        doctorbtn="Know More"
      />

      <Doctors
        doctorheadline="Pediatric BMT"
        doctorphoto={doctor}
        doctorname="Dr. Vijay Agarwal"
        doctordegree="MD, MRCP, PhD,CCT "
        degreestudy="Lead & Sr. Consultant - Medical Oncology & Haematology"
        doctordescription="Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. "
        doctorbtn="Know More"
      />

      <Doctors
        doctorheadline="Pediatric BMT"
        doctorphoto={doctor}
        doctorname="Dr. Vijay Agarwal"
        doctordegree="MD, MRCP, PhD,CCT "
        degreestudy="Lead & Sr. Consultant - Medical Oncology & Haematology"
        doctordescription="Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. "
        doctorbtn="Know More"
      />

      <Doctors
        doctorheadline="Pediatric BMT"
        doctorphoto={doctor}
        doctorname="Dr. Vijay Agarwal"
        doctordegree="MD, MRCP, PhD,CCT "
        degreestudy="Lead & Sr. Consultant - Medical Oncology & Haematology"
        doctordescription="Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. "
        doctorbtn="Know More"
      />
    </div>
    </>
  );
}

export default DoctorProfile;
