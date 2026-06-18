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
    <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-around", alignItems: "center", height: "60px", padding: "0 20px", position: "relative", borderBottom: "1px solid gray",   }}>
      
      <div style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}>
        PrimeDetaling
      </div>

      <div style={{ display: isMobile ? "none" : "flex", gap: "25px", fontSize: "18px" }}>
        <Link to='/Home' style={{ textDecoration: "none", color: "white" }}>Home</Link>
        <Link to='/Service' style={{ textDecoration: "none", color: "white" }}>Service</Link>
        <Link to='/Gallary' style={{ textDecoration: "none", color: "white" }}>Gallary</Link>
        <Link to='/Contact' style={{ textDecoration: "none", color: "white" }}>Contact</Link>
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