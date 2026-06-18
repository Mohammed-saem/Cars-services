import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Garage = () => {
  
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="hidden"
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          textAlign: "start",
          marginLeft: "20px",
          marginBottom: "40px",
        }}
      >
        <p style={{ color: "#d4af37", fontSize: "20px", marginBottom: "10px" }}>
          Signature Treatments
        </p>

        <p style={{ fontSize: isMobile ? "30px" : "50px", lineHeight: "1.2", margin: 0 }}>
          Premium protection, correction, and cabin
          <br />
          restoration—with studio-grade scrutiny.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          padding: "0 20px",
          alignItems: isMobile ? "center" : "stretch",
        }}
      >
    
        <div
          style={{
            background: "#111",
            border: "1px solid #2a2a2a",
            borderRadius: "18px",
            overflow: "hidden",
            width: isMobile ? "100%" : "31%",
          }}
        >
          <div className="imagehover" style={{ height: "38vh", position: "relative", overflow: "hidden" }}>
            
            <LazyLoadImage
              src="/carwas.jpg"
              alt=""
              effect="blur"
              placeholderSrc="/waashhhe.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <p style={{ position: "absolute", bottom: "20px", left: "20px", margin: 0, fontSize: "32px", fontWeight: "600" }}>
              Ceramic Shielding
            </p>
          </div>

          <div style={{ padding: "25px 20px" }}>
            <p style={{ color: "#bdbdbd", fontSize: "14px", lineHeight: "28px" }}>
              Multi-layer ceramic systems for sustained gloss retention, UV resistance, and effortless maintenance washes.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "25px", fontSize: "15px" }}>
              <p>✓ Hydrophobic, self-cleaning surface behavior</p>
              <p>✓ Chemical resistance and swirl defence</p>
              <p>✓ Documented curing and aftercare briefing</p>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "30px", flexWrap: "wrap" }}>
              <button onClick={() => navigate('/Contact')} style={{ background: "#f4c430", border: "none", padding: "12px 20px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>
                RESERVE SLOT
              </button>
              <button onClick={() => navigate('/Service')} style={{ background: "#1c1c1c", border: "1px solid #333", color: "white", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>
                ALL SERVICES
              </button>
            </div>
          </div>
        </div>

  
        <div
          style={{
            background: "#111",
            border: "1px solid #2a2a2a",
            borderRadius: "18px",
            overflow: "hidden",
            width: isMobile ? "100%" : "31%",
          }}
        >
          <div className="imagehover" style={{ height: "38vh", position: "relative", overflow: "hidden" }}>
            <LazyLoadImage
              src="/paintcars.jpg"
              alt=""
              effect="blur"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <p style={{ position: "absolute", bottom: "20px", left: "20px", margin: 0, fontSize: "35px", fontWeight: "600" }}>
              Paint Perfection
            </p>
          </div>

          <div style={{ padding: "25px 20px" }}>
            <p style={{ color: "#bdbdbd", fontSize: "15px", lineHeight: "28px" }}>
              Controlled machine polishing to erase swirls, haze, and oxidation while preserving OEM clearcoat integrity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "25px", fontSize: "14px" }}>
              <p>✓ Paint-depth assessment under inspection lamps</p>
              <p>✓ Single or multi-stage correction plans</p>
              <p>✓ Finishing polish before protection layer</p>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "30px", flexWrap: "wrap" }}>
              <button style={{ background: "#f4c430", border: "none", padding: "12px 20px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "13px" }}>
                SEE TRANSFORMATIONS
              </button>
              <button onClick={() => navigate('/Service')} style={{ background: "#1c1c1c", border: "1px solid #333", color: "white", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>
                ALL SERVICES
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#111",
            border: "1px solid #2a2a2a",
            borderRadius: "18px",
            overflow: "hidden",
            width: isMobile ? "100%" : "31%",
          }}
        >
          <div className="imagehover" style={{ height: "38vh", position: "relative", overflow: "hidden" }}>
            <LazyLoadImage
              src="/interiorcars.jpg"
              alt=""
              effect="blur"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <p style={{ position: "absolute", bottom: "20px", left: "20px", margin: 0, fontSize: "32px", fontWeight: "600" }}>
              Interior Revival
            </p>
          </div>

          <div style={{ padding: "25px 20px" }}>
            <p style={{ color: "#bdbdbd", fontSize: "15px", lineHeight: "28px" }}>
              Deep upholstery, leather, alcantara, and trim care with antimicrobial finishing for a cabin that feels new.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "25px", fontSize: "16px" }}>
              <p>✓ Steam-safe extraction and leather conditioning</p>
              <p>✓ Trim revival without greasy residue</p>
              <p>✓ Odor-neutralizing treatment optional</p>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "30px", flexWrap: "wrap" }}>
              <button onClick={() => navigate('/Contact')} style={{ background: "#f4c430", border: "none", padding: "12px 20px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>
                BOOK INTERIOR
              </button>
              <button onClick={() => navigate('/Service')} style={{ background: "#1c1c1c", border: "1px solid #333", color: "white", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>
                ALL SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garage;