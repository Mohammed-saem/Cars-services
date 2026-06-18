import { useEffect, useRef, useState } from "react";

const Aboutstudio = () => {
  const ref = useRef(null);
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);

            if (timerRef.current) return;

            timerRef.current = setInterval(() => {
              setCount(prev => {
                if (prev >= 200) {
                  clearInterval(timerRef.current);
                  timerRef.current = null;
                  return 200;
                }
                return prev + 2;
              });
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="hidden" ref={ref} style={{ minHeight: "100vh", backgroundColor: "#050505", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "60px", padding: "120px 60px 60px 60px", color: "white" }}>
      <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <p style={{ color: "#d4af37", fontSize: "13px", letterSpacing: "4px", marginBottom: "20px" }}>ABOUT THE STUDIO</p>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: "700", lineHeight: "1.2", margin: "0 0 10px 0", color: "#888" }}>German-grade precision.</h2>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: "700", lineHeight: "1.2", margin: "0 0 40px 0", color: "#ded6d6" }}>Luxury-level execution.</h2>
        <p style={{ color: "#bdbdbd", fontSize: "16px", lineHeight: "30px", marginBottom: "20px", maxWidth: "560px" }}>Every vehicle is treated under calibrated lighting, paint-depth analysis, and meticulous hand-finishing techniques developed for premium automotive surfaces.</p>
        <p style={{ color: "#777", fontSize: "15px", lineHeight: "28px", marginBottom: "50px", maxWidth: "560px" }}>From ceramic shielding to deep interior restoration, every process is tailored to the vehicle's condition, driving profile, and ownership expectations.</p>
        <div style={{ display: "flex", gap: "50px", flexWrap: "wrap", justifyContent: "center" }}>
          <div className="animation">
            <p style={{ color: "#d4af37", fontSize: "36px", fontWeight: "700", margin: "0 0 6px 0" }}>{count}+</p>
            <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>Vehicles detailed annually</p>
          </div>
          <div className="animation">
            <p style={{ color: "#d4af37", fontSize: "36px", fontWeight: "700", margin: "0 0 6px 0" }}>5yr</p>
            <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>Ceramic protection options</p>
          </div>
          <div className="animation">
            <p style={{ color: "#d4af37", fontSize: "36px", fontWeight: "700", margin: "0 0 6px 0" }}>OEM</p>
            <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>Safe correction systems</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "16px", padding: "35px" }}>
          <p style={{ color: "#d4af37", fontSize: "12px", letterSpacing: "4px", marginBottom: "16px" }}>INSPECTION STANDARD</p>
          <p style={{ color: "#bdbdbd", fontSize: "15px", lineHeight: "28px", margin: 0 }}>Multi-stage paint evaluation with swirl detection, gloss measurement, and contamination analysis.</p>
        </div>
        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "16px", padding: "35px" }}>
          <p style={{ color: "#d4af37", fontSize: "12px", letterSpacing: "4px", marginBottom: "16px" }}>PROTECTION PHILOSOPHY</p>
          <p style={{ color: "#bdbdbd", fontSize: "15px", lineHeight: "28px", margin: 0 }}>Durable ceramic systems engineered for hydrophobic resistance, UV shielding, and long-term depth.</p>
        </div>
        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "16px", padding: "35px" }}>
          <p style={{ color: "#d4af37", fontSize: "12px", letterSpacing: "4px", marginBottom: "16px" }}>CLIENT EXPERIENCE</p>
          <p style={{ color: "#bdbdbd", fontSize: "15px", lineHeight: "28px", margin: 0 }}>Concierge-style consultations with transparent service recommendations and visual walkthroughs.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutstudio;