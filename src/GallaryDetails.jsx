import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const cards = [
  {
    before: "/color.jpg",
    after: "/paintcars.jpg",
    title: "Porsche 911 Turbo S",
    tag: "PAINT CORRECTION",
    desc: "Complete paint correction removing swirl marks and restoring gloss."
  },
  {
    before: "/before bmw.jpg",
    after: "/bmwafter.jpg",
    title: "BMW M4 Competition",
    tag: "CERAMIC COATING",
    desc: "Premium ceramic coating with deep gloss finish."
  },
  {
    before: "/afterinter.jpg",
    after: "/interiorcars.jpg",
    title: "Mercedes-Benz S-Class",
    tag: "INTERIOR REVIVAL",
    desc: "Luxury interior restoration and detailing."
  },
  {
    before: "/alloyaudi.jpg",
    after: "/alloy.jpg",
    title: "Audi RS6 Avant",
    tag: "EXTERIOR REFINEMENT",
    desc: "Advanced exterior refinement and gloss enhancement."
  }
];

const GallaryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cards[id];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!car) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Project Not Found
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        padding: isMobile ? "20px" : "50px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: isMobile ? "30px" : "50px",
        }}
      >
        <div>
          <p style={{ color: "#c89e22", letterSpacing: "6px", fontSize: "14px", marginBottom: "15px", textAlign: "start" }}>
            {car.tag}
          </p>

          <h1 style={{ fontSize: isMobile ? "26px" : "40px", margin: 0, letterSpacing: "2px", fontWeight: "700", textAlign: "left", color: "#72727e" }}>
            {car.title}
          </h1>

          <p style={{ color: "#bdbdbd", maxWidth: "700px", lineHeight: "1.8", marginTop: "20px", textAlign: "left" }}>
            {car.desc}
          </p>
        </div>

        <button
          className="hoverback"
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "40px",
            padding: "15px 30px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Back
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div
          className="image-card"
          style={{
            flex: "1",
            width: isMobile ? "100%" : "auto",
            background: "#0b0b0b",
            borderRadius: "30px",
            overflow: "hidden",
            border: "1px solid rgba(255,100,100,0.2)",
          }}
        >
          <p style={{ color: "#ffb3b3", letterSpacing: "6px", padding: "25px", margin: 0, fontSize: "15px", textAlign: "left" }}>
            BEFORE
          </p>

          <img
            src={car.before}
            alt="before"
            style={{
              width: "100%",
              height: isMobile ? "300px" : "500px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div
          className="image-card"
          style={{
            flex: "1",
            width: isMobile ? "100%" : "auto",
            background: "#0b0b0b",
            borderRadius: "30px",
            overflow: "hidden",
            border: "1px solid rgba(0,255,200,0.2)",
          }}
        >
          <p style={{ color: "#75ffd9", letterSpacing: "6px", padding: "25px", margin: 0, fontSize: "15px", textAlign: "left" }}>
            AFTER
          </p>

          <img
            src={car.after}
            alt="after"
            style={{
              width: "100%",
              height: isMobile ? "300px" : "500px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GallaryDetails;