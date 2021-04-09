import React from "react";
 
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import youtube from '../../assets/youtube.png';
import twit from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import arrow from '../../assets/arrow.png';

import footerjson from '../../json/footer.json';

import "./_footer.scss";

function Footer() {

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

  return (
    <div className="footercontainer">
        <div className="footercontainer__socialmedia">
          <img src={fb} alt="facebook" className="footercontainer__fb" />
          <img src={insta} alt="Instagram" className="footercontainer__insta" />
          <img src={youtube} alt="youtube" className="footercontainer__youtube" />
          <img src={twit} alt="twitter" className="footercontainer__twit" />
          <img src={linkedin} alt="linkedin" className="footercontainer__linkedin" />
        </div>
       
          <img src={arrow} alt="Scroll" className="footercontainer__scroll" onClick={scrollTop} />
       
        <p className="footercontainer__copyrights">{footerjson.footer_text} </p>
    
    </div>
  );
}

export default Footer;
