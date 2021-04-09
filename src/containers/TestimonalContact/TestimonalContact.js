import React from "react";

import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import Testimonals from "../../components/cmi-testimonals/Testimonals";

import testimonalquote from "../../assets/quote.png";

import testimonalprofile from "../../assets/john.png";

import "./_testimonalContact.scss";

function TestimonalContact() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    
    <Testimonals
      testimonalprofile={testimonalprofile}
      testimonalname="John Doe"
      testimonalrole="Software Engineer"
      testimonalquote={testimonalquote}
      onDragStart={handleDragStart}
      testimonaldescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    />,

    <Testimonals
      testimonalprofile={testimonalprofile}
      testimonalname="John Doe"
      testimonalrole="Software Engineer"
      testimonalquote={testimonalquote}
      onDragStart={handleDragStart}
      testimonaldescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    />,

    <Testimonals
      testimonalprofile={testimonalprofile}
      testimonalname="John Doe"
      testimonalrole="Software Engineer"
      testimonalquote={testimonalquote}
      onDragStart={handleDragStart}
      testimonaldescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    />,

    <Testimonals
      testimonalprofile={testimonalprofile}
      testimonalname="John Doe"
      testimonalrole="Software Engineer"
      testimonalquote={testimonalquote}
      onDragStart={handleDragStart}
      testimonaldescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    />,
  ];

  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
  };

  return (
    <div className="testimonalcontact">
      <h1 className="testimonalcontact_heading">Testimonials</h1>
      <p className="testimonalcontact_subheading">It is a long established fact that a reader will be distracted by the readable content of a page
      <p>when looking at its layout.</p></p>
      <AliceCarousel
        autoPlay
        infinite
        mouseTracking
        items={items}
        autoPlayInterval={4000}
        responsive={responsive}
      />
    </div>
  );
}

export default TestimonalContact;
