import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Footer = () => {


  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


   useEffect(()=>{
       const elements = document.querySelectorAll(".fade-up")
       const observe = new IntersectionObserver((entires)=>{
    entires.forEach((entry)=>{
     if (entry.isIntersecting) {
      entry.target.classList.add("show")
      observe.unobserve(entry.target)
     }
    })
   },    { threshold: 0.2 })

   elements.forEach((e1)=>{
    observe.observe(e1);

   })
   
    return () => observe.disconnect();
     
   },[]); 



  return (
    <div style={{ background: "linear-gradient(to bottom, #0e0d0d 0%, #1c1c1c 50%, #3b3621 70%, #0e0d0d 100%)", color: "white", padding: isMobile ? "40px 20px" : "80px 20px" }}>

      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "20px" : "40px 70px 40px 160px", flexWrap: "wrap", gap: "30px", minHeight: isMobile ? "auto" : "70vh" }}>

        <div style={{ textAlign: "center" }}>
          <p className="fade-up" style={{ fontSize: isMobile ? "18px" : "25px" }}>Prime Detailing Studio</p>
          <h3 className="fade-up"  style={{ fontSize: isMobile ? "22px" : "35px", lineHeight: "1.3" }}>Precision detailing crafted for <br />collectors and performance <br />vehicles.</h3>
          <span style={{ fontSize: isMobile ? "18px" : "25px" }}>+91 9461047417</span>
        </div>

        <div className="icons" style={{ display: "flex", gap: isMobile ? "30px" : "40px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon fade-up" style={{ color: "red" }}><FaInstagram /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon fade-up" style={{ color: "#3b93d7" }}><FaFacebookF /></a>
          <a href="#" className="icon fade-up" style={{ color: "#0091ff" }}><FaLinkedinIn /></a>
          <a href="#" className="icon fade-up" style={{ color: "white" }}><FaXTwitter /></a>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "2px solid #6d6868", width: isMobile ? "90%" : "75%", marginLeft: isMobile ? "auto" : "160px", marginRight: "auto" }} />

      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "flex-start", alignItems: "flex-start", padding: isMobile ? "20px" : "20px 70px 40px 160px", flexWrap: "wrap", gap: isMobile ? "30px" : "190px", minHeight: isMobile ? "auto" : "40vh" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
          <h2 className="fade-up" style={{ margin: 0, color: "white" }}>Services</h2>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Ceramic Coating</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Paint Correction</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Interior Detailing</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Full Detail Packages</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
          <h2 style={{ margin: 0, color: "white" }}>Studio</h2>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>About Us</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Gallery</p>
          <p  className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Consultation</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
          <h2 className="fade-up" style={{ margin: 0, color: "white" }}>Legal</h2>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Impressum</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Datenschutz</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Cookie Policy</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
          <h2 className="fade-up" style={{ margin: 0, color: "white" }}>Opening Hours</h2>
          <p  className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Mon - Fri: 9:00 - 18:00</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Saturday: 10:00 - 16:00</p>
          <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>Sunday: Closed</p>
        </div>
      </div>

      <div style={{ border: "2px solid gray", minHeight: "38vh", padding: "10px 10px", borderRadius: "27px", width: isMobile ? "90%" : "70vw", margin: "0 auto", display: "flex", flexDirection: "column", textAlign: "center", backgroundColor: "#1f1d1d91" }}>
        <h2 className="fade-up" style={{ color: "white", marginTop: "40px", fontFamily: "bold", fontSize: "40px" }}>Stay updated with detailing insights.</h2>
        <p className="fade-up">Receive premium care tips, coating maintenance guidance, and early access to exclusive appointment availability.</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <input type="email" placeholder="Your Email Address" style={{ width: isMobile ? "35vw" : "35vw", minHeight: isMobile ? "3vh" : "5vh", borderRadius: "12px 10px", padding: isMobile ? "5px 3px" : "5px 8px" }} />
          <button style={{ minHeight: "5vh", borderRadius: "12px 10px", backgroundColor: "#f1bb08", padding: "10px 8px" }}>Subscribe</button>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "2px solid #6d6868", width: isMobile ? "90%" : "75%", marginLeft: isMobile ? "auto" : "180px", marginRight: "auto", marginTop: "29px" }} />

      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", padding: "20px 40px", gap: "15px", marginTop: "20px" }}>
        <p className="fade-up" style={{ margin: 0, fontSize: "14px", color: "#a1a1aa", marginLeft: isMobile ? "0" : "90px", textAlign: "center" }}>
          © 2026 Prime Detailing Studio. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginRight: isMobile ? "0" : "90px", justifyContent: "center" }}>
          <div className="fade-up" style={{ fontSize: "14px", color: "#a1a1aa", cursor: "pointer" }}>Impressum</div>
          <div className="fade-up" style={{ fontSize: "14px", color: "#a1a1aa", cursor: "pointer" }}>Datenschutz</div>
          <div className="fade-up" style={{ fontSize: "14px", color: "#a1a1aa", cursor: "pointer" }}>Cookie Policy</div>
        </div>
      </div>

    </div>
  );
};

export default Footer;