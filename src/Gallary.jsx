import { useEffect,useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Gallary = () => {

    const navigate = useNavigate();
   const containerRef = useRef(null);
  
  const[isMobile,setIsMobile]=useState(window.innerWidth < 768)
  
  useEffect(()=>{
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize",handleResize);
    return ()=> window.removeEventListener("resize",handleResize)
  },[])

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
      { threshold: 0.3 }
    );
    elements.forEach((el) => observer.observe(el));
 
  }, []);

  const cards = [
    {
      src: "/paintcars.jpg",
      tag: "PAINT CORRECTION",
      title: "Porsche 911 Turbo S",
      desc: "Two-stage machine correction designed to eliminate swirl marks, oxidation, and micro-marring while restoring mirror-like gloss and optical clarity."
    },
    {
      src: "/bmwafter.jpg",
      tag: "CERAMIC COATING",
      title: "BMW M4 Competition",
      desc: "Complete exterior decontamination followed by a multi-layer ceramic application engineered to enhance gloss depth, hydrophobic behavior, and long-term surface resilience."
    },
    {
      src: "/interiorcars.jpg",
      tag: "INTERIOR REVIVAL",
      title: "Mercedes-Benz S-Class",
      desc: "Luxury cabin restoration involving leather conditioning, steam sanitation, trim rejuvenation, and delicate material treatment for an OEM-fresh interior presentation."
    },
     {
      src: "/alloy.jpg",
      tag: "Exterior Refinement",
      title: "Audi RS6 Avant",
      desc: "Advanced exterior refinement removing bonded contaminants, mineral deposits, and wheel buildup before restoring deep gloss and sharp body reflections."
    },
  ]

  return (
    <div ref={containerRef} style={{ position: "relative", minHeight: "100vh", padding: isMobile ? "40px 24px 60px 24px" : "60px 80px 60px 80px", background:"#000000" }}>
      <div style={{display:"flex", flexDirection:"column", marginTop:"40px", textAlign:'start', gap:"20px"}}>

        <p className="fade-up" style={{color:"#c89e22", letterSpacing: "2px", fontSize:"15px"}}>GALLARY</p>

        <p  className="fade-up"  style={{color:"white", fontSize: isMobile ? "22px" : "38px", lineHeight: isMobile ? "1.3" : "1.2", wordBreak:"break-word"}}>Before and After Transformations</p>

        <p   style={{color:"whitesmoke", fontSize: isMobile ? "14px" : "16px"}}>Explore selected projects that demonstrate correction depth, gloss enhancement, and interior restoration.</p>
        

        <div   style={{display:"flex",
         flexDirection: isMobile ? "column" : "row",
          gap:"20px",
            flexWrap:"wrap",  
        }}>
          {cards.map((card, i) => (
            <div className="imagehover"
              key={i} 
               onClick={() => navigate(`/gallery/${i}`)}
              style={{
           
              height: isMobile ? "60vh" : "78vh",
              position:"relative",
              overflow:"hidden",
              borderRadius:"20px",
                    flex: "0 0 calc(33.33% - 14px)",
            }}>
              
              <LazyLoadImage 
                src={card.src}
                alt=""
                effect="blur"
          
                style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
              />
                 <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.7)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "16px" }}>

              Transformations</span>

              <div style={{position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(37, 24, 24, 0.1) 0%, rgba(0,0,0,0.85) 100%)", borderRadius:"20px"}}/>

              <div style={{
                position:"absolute",
                bottom:"20px",
                left:"24px",
                right:"80px"
              }}>
                
                <p style={{color:"#c89e22", fontSize:"12px", letterSpacing:"2px", margin:"0 0 6px 0"}}>{card.tag}</p>

                <p style={{color:"white", fontSize: isMobile ? "20px" : "24px", fontWeight:"700", margin:"0 0 8px 0"}}>{card.title}</p>

                <p style={{color:"rgba(255,255,255,0.8)", fontSize:"13px", lineHeight:"1.6", margin:"0"}}>{card.desc}</p>
              </div>

             
              <div className="arrow" style={{
                position:"absolute",
                bottom:"20px",
                right:"20px",
                width:"48px",
                height:"48px",
                borderRadius:"50%",
                border:"1px solid #000000",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                cursor:"pointer",
                zIndex:1
              }}>
                <span  style={{color:"white", fontSize:"28px", fontWeight:"bold"}}>⤴</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallary