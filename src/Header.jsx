import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setmenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "black", display: "flex",   justifyContent: isMobile ? "space-between" : "space-around", alignItems: "center", height: "60px", padding: "0 20px", position: "relative", borderBottom: "1px solid gray", gap:"30px"   }}>
      
      <div style={{ fontSize: "18px", fontWeight: "bold", color: "#c4b33a",letterSpacing:"2px",  }}>
        PRIME DETALING
      </div>

      <div  style={{ display: isMobile ? "none" : "flex", gap: "45px", fontSize: "18px" }}>


       <Link to='/Home' className="nav-link" style={{ textDecoration: "none", color: "white" }}>Home</Link>
<Link to='/Service' className="nav-link" style={{ textDecoration: "none", color: "white" }}>Service</Link>
<Link to='/Gallary' className="nav-link" style={{ textDecoration: "none", color: "white" }}>Gallary</Link>
<Link to='/Contact' className="nav-link" style={{ textDecoration: "none", color: "white" }}>Contact</Link>


      </div>

      <div style={{ display: isMobile ? "block" : "none" }}>
        <button onClick={() => setmenu(!menu)} style={{ fontSize: "28px", background: "transparent", border: "none", cursor: "pointer", color: "white" }}>☰</button>
      </div>

      {menu && isMobile && (
        <div style={{ position: "absolute", top: "60px", right: "20px", backgroundColor: "black", color: "white", padding: "15px", borderRadius: "10px", width: "150px", zIndex: 999 }}>


          <Link to="/Home" onClick={()=>setmenu(false)} style={{ textDecoration: "none", color: "white", display: "block", marginBottom: "10px" }}>Home</Link>

          <Link to="/Service"  onClick={()=>setmenu(false)} style={{ textDecoration: "none", color: "white", display: "block", marginBottom: "10px" }}>Service</Link>

          <Link to="/Gallary"  onClick={()=>setmenu(false)} style={{ textDecoration: "none", color: "white", display: "block", marginBottom: "10px" }}>Gallery</Link>


          <Link to="/Contact"  onClick={()=>setmenu(false)} style={{ textDecoration: "none", color: "white", display: "block" }}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Header;