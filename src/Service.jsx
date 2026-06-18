import { useEffect, useRef, useState } from "react";
import Feature from "./Feature";

function Service() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timer = null;
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
            timer = setInterval(() => {
              setCount((prev) => {
                if (prev >= 200) { clearInterval(timer); return 200; }
                return prev + 2;
              });
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => { observer.disconnect(); if (timer) clearInterval(timer); };
  }, []);

  return (
    <div ref={containerRef} style={{
      background: "radial-gradient(circle at left bottom, #372b0b 4%, #000000 30%)",
      padding: isMobile ? "40px 24px 60px 24px" : "60px 80px 60px 80px",
    }}>
      <div style={{ marginTop: "15vh" }}>
        <h2 style={{ textAlign: "start", marginBottom: "10px", color: "wheat", fontSize: isMobile ? "22px" : "clamp(20px, 3vw, 28px)" }}>
          Studio Service
        </h2>
      </div>
      <h1 className="fade-up" style={{ lineHeight: "1.2", textAlign: "start", marginTop: 0, color: "#a29f9fe3", fontSize: isMobile ? "28px" : "clamp(22px, 3.5vw, 36px)" }}>
        Tailored detailing protocols for<br />premium automotive surfaces.
      </h1>
      <p className="fade-up" style={{ textAlign: "start", maxWidth: "700px", lineHeight: "1.7", fontSize: isMobile ? "16px" : "clamp(14px, 2vw, 18px)", color: "#ffffff", marginTop: "16px" }}>
        Every package begins with a detailed paint and material assessment to ensure correction intensity, protection strategy, and finishing standards align precisely with your vehicle's condition and ownership expectations.
      </p>
      <div style={{ textAlign: "start", marginTop: "60px", display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "30px" : "100px", marginBottom: "21px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: isMobile ? "20px" : "clamp(16px, 2.5vw, 22px)", color: "#c89e22" }}>
          <p>{count}+</p>
          <p>Vehicles detailed annually</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: isMobile ? "20px" : "clamp(16px, 2.5vw, 22px)", color: "#f4c430" }}>
          <p>OEM</p>
          <p>Safe polishing systems</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: isMobile ? "20px" : "clamp(16px, 2.5vw, 22px)", color: "#f4c430" }}>
          <p>5yr</p>
          <p>Ceramic protection options</p>
        </div>
      </div>
      <div style={{ width: "100%", margin: "40px 0 0 0", borderTop: "1px solid rgba(255,255,255,0.12)" }} />
      <Feature />
    </div>
  );
}

export default Service;