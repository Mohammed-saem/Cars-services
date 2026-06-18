import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Garage from "./Garage";
import Aboutstudio from "./Aboutstudio";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div style={{ position: "relative", minHeight: "100vh", width: "100%", overflow: "hidden" }}>


        <video autoPlay loop muted playsInline style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", top: 0, left: 0, zIndex: -1 }}>

          <source src="/carvidoes.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", top: "22%", left: "10%", width: isMobile ? "85%" : "80%", textAlign: "left" }}>
          <h4 className="fade-up" style={{ margin: 0, color: "rgb(241,127,14)", marginBottom: "15px", fontSize: "15px" }}>
            Bespoke Automotive Detailing
          </h4>
          <h2 className="fade-up" style={{ fontSize: "clamp(28px, 3vw, 42px)", color: "white", margin: 0, lineHeight: "1.2" }}>
            Cinematic Finish.
          </h2>
          <h2 className="fade-up" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", color: "white", marginTop: "5px", lineHeight: "1.2" }}>
            Concours-Level Protection
          </h2>
          <p className="fade-up" style={{ marginTop: "18px", color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: "1.7", maxWidth: "700px" }}>
            Precision paint correction, ceramic shielding, and interior restoration engineered for premium vehicles that deserve immaculate presentation in every light.
          </p>

          <div style={{ marginTop: "25px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <Link to="/Contact" style={{ textDecoration: "none" }}>
              <h4 className="fade-up btn-hover" style={{ backgroundColor: "#c4b33a", width: isMobile ? "220px" : "17vw", padding: "12px", borderRadius: "10px", textAlign: "center", color: "black", fontFamily: "Roboto", margin: 0, fontSize: "14px" }}>
                BOOK CONSULTATION
              </h4>
            </Link>
            <Link to="/Service" style={{ textDecoration: "none" }}>
              <h4 className="fade-up btn-hover" style={{ backgroundColor: "#c4b33a", width: isMobile ? "220px" : "17vw", padding: "12px", borderRadius: "10px", textAlign: "center", color: "black", fontFamily: "Roboto", margin: 0, fontSize: "14px" }}>
                EXPLORE SERVICES
              </h4>
            </Link>
          </div>

          <div style={{ marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <h4 className="fade-up btn-hover" style={{ backgroundColor: "#eeecec", width: isMobile ? "220px" : "17vw", padding: "12px", borderRadius: "10px", textAlign: "center", color: "black", fontFamily: "Roboto", margin: 0, fontSize: "14px" }}>
              200+ Detailed Vehicles / Year
            </h4>
            <h4 className="fade-up btn-hover" style={{ backgroundColor: "#eeecec", width: isMobile ? "220px" : "17vw", padding: "12px", borderRadius: "10px", textAlign: "center", color: "black", fontFamily: "Roboto", margin: 0, fontSize: "14px" }}>
              German-Grade Product Portfolio
            </h4>
            <h4 className="fade-up btn-hover" style={{ backgroundColor: "#eeecec", width: isMobile ? "220px" : "17vw", padding: "12px", borderRadius: "10px", textAlign: "center", color: "black", fontFamily: "Roboto", margin: 0, fontSize: "14px" }}>
              Warranty-Backed Protection Plans
            </h4>
          </div>
        </div>
      </div>
      <Garage />
      <Aboutstudio/>
    </div>
  );
};

export default Home;