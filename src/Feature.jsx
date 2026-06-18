import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
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
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="hidden" style={{ padding: "60px 0 0 0" }}>

        
      <p style={{ color: "#f4c430", fontSize: "13px", letterSpacing: "4px", marginBottom: "16px", textAlign: "start" }}>FEATURE OFFERINGS</p>


      <h1 style={{ color: "white", fontSize: "clamp(24px, 3vw, 42px)", lineHeight: "1.2", marginBottom: "50px", maxWidth: "800px", textAlign: "start" }}>
        Selectable studio protocols with transparent timelines and concours-inspired handover standards.
      </h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "16px", overflow: "hidden", flex: "1", minWidth: "280px" }}>

          <div style={{ position: "relative" }}>

            <img src="/carwas.jpg" alt="" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />


            <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.7)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>

              1-2 DAYS</span>

            <p style={{ position: "absolute", bottom: "12px", left: "16px", color: "white", fontSize: "22px", fontWeight: "600", margin: 0 }}
            >Ceramic Shielding</p>
            
          </div>
          <div style={{ padding: "24px" }}>
            <p style={{ color: "#bdbdbd", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>Multi-layer ceramic systems for sustained gloss retention, UV resistance, and effortless maintenance washes.</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Hydrophobic, self-cleaning surface behavior</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Chemical resistance and swirl defence</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Documented curing and aftercare briefing</p>


            <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap",justifyContent:"center" }}>


              <button onClick={() => navigate('/Contact')} style={{ background: "#f4c430", border: "none", padding: "10px 18px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "13px" }}>RESERVE SLOT</button>


              <button onClick={() => navigate('/Service')} style={{ background: "#1c1c1c", border: "1px solid #333", color: "white", padding: "10px 18px", borderRadius: "8px", cursor: "pointer", fontSize: "13px" }}>ALL SERVICES</button>
            </div>
          </div>
        </div>

        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "16px", overflow: "hidden", flex: "1", minWidth: "280px" }}>
          <div style={{ position: "relative" }}>
            <img src="/paintcars.jpg" alt="" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
            <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.7)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>1-3 DAYS</span>
            <p style={{ position: "absolute", bottom: "12px", left: "16px", color: "white", fontSize: "22px", fontWeight: "600", margin: 0 }}>Paint Perfection</p>
          </div>
          <div style={{ padding: "24px" }}>
            <p style={{ color: "#bdbdbd", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>Controlled machine polishing to erase swirls, haze, and oxidation while preserving OEM clearcoat integrity.</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Paint-depth assessment under inspection lamps</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Single or multi-stage correction plans</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Finishing polish before protection layer</p>


           <div style={{display:"flex", gap:"10px", marginTop:"20px", flexWrap:"nowrap", width:"100%"}}>
  <button style={{background:"#f4c430", border:"none", padding:isMobile?"10px 8px":"11px 18px", borderRadius:"8px", fontWeight:"600", cursor:"pointer", fontSize:isMobile?"11px":"10px", flex:"1"}}>
    SEE TRANSFORMATIONS
  </button>

  <button onClick={() => navigate('/Service')} style={{background:"#1c1c1c", border:"1px solid #333", color:"white", padding:isMobile?"10px 8px":"10px 18px", borderRadius:"8px", cursor:"pointer", fontSize:isMobile?"11px":"13px", flex:"1"}}>
    ALL SERVICES
  </button>
</div>
          </div>
        </div>

        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "16px", overflow: "hidden", flex: "1", minWidth: "280px" }}>
          <div style={{ position: "relative" }}>
            <img src="/interiorcars.jpg" alt="" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
            <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.7)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>6-10 HOURS</span>
            <p style={{ position: "absolute", bottom: "12px", left: "16px", color: "white", fontSize: "22px", fontWeight: "600", margin: 0 }}>Interior Revival</p>
          </div>
          <div style={{ padding: "24px" }}>
            <p style={{ color: "#bdbdbd", fontSize: "14px", lineHeight: "1.7", marginBottom: "36px" }}>Deep upholstery, leather, alcantara, and trim care with antimicrobial finishing for a cabin that feels new.</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Steam-safe extraction and leather conditioning</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Trim revival without greasy residue</p>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "8px" }}>✓ Odor-neutralizing treatment optional</p>

            
            <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" ,justifyContent:"center"}}>

              <button onClick={() => navigate('/Contact')} style={{ background: "#f4c430", border: "none", padding: "10px 18px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "13px" }}>BOOK INTERIOR</button>

              <button onClick={() => navigate('/Service')} style={{ background: "#1c1c1c", border: "1px solid #333", color: "white", padding: "10px 18px", borderRadius: "8px", cursor: "pointer", fontSize: "13px" }}>ALL SERVICES</button>
            </div>
          </div>
        </div>
      
      </div>
         
       <div
  style={{
    border: "1px solid #333",
    marginTop: "20vh",
    minHeight: "30vh",
    borderRadius: "35px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: isMobile ? "flex-start" : "center",
    padding: isMobile ? "25px" : "30px 40px",
    background:
      "radial-gradient(circle at left bottom, #372b0b 4%, #1e1e0c74 30%)",
    gap: isMobile ? "25px" : "0",
  }}
>
  <div style={{ textAlign: "start" }}>
    <p
      style={{
        fontSize: isMobile ? "18px" : "20px",
        color: "#f4c430",
      }}
    >
      Consultation
    </p>

    <p
      style={{
        fontSize: isMobile ? "28px" : "40px",
        marginTop: "14px",
        lineHeight: isMobile ? "38px" : "50px",
        color: "white",
      }}
    >
      Build a tailored detailing plan for
      <br />
      your vehicle.
    </p>

    <p
      style={{
        fontSize: isMobile ? "15px" : "18px",
        marginTop: "20px",
        color: "white",
        lineHeight: "1.7",
      }}
    >
      Receive a consultation covering paint condition,
      protection goals, correction possibilities,
      <br />
      timelines, and maintenance recommendations.
    </p>
  </div>

  <button onClick={()=> {
    navigate("/Contact")
  }
  }
  
    style={{
      padding: "11px 25px",
      fontSize: "18px",
      borderRadius: "30px",
      border: "none",
      background: "#f4c430",
      cursor: "pointer",
      alignSelf: isMobile ? "center" : "auto",
      minWidth: "140px",
    }}
  >
    Book
  </button>
</div>
    </div>
  );
};

export default Feature;