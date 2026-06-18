import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [send, setsend] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState({});
  const [map, setmap] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hanldesubmit = (e) => {
    e.preventDefault();
    const newerror = {};
    if (name.trim() === "") newerror.name = "Name is required";
    if (email.trim() === "") newerror.email = "Email is required";
    if (Object.keys(newerror).length > 0) { seterror(newerror); return; }

    seterror({});
    setsend(true);

     emailjs.sendForm("service_gzryzv7",
       "template_yvxl0yc",
        form.current, 
        "HH-QPnAc6E_vqFHiF")
        
      .then(() => { alert("message send successfully!"); setsend(false); form.current.reset(); })
      .catch((error) => { alert("failed to send message, please try again"); console.log(error); setsend(false); });
  };

  return (
    <div style={{ background: "linear-gradient(to bottom, #060000 0%, #000000 50%, #000000 70%, #0e0d0d 100%)", display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", paddingBottom: "120px", width: "100%" }}>

 <div
  style={{
    background:
      "linear-gradient(to bottom left, #000000 5%, #161616 25%, #0d0905 55%, #000000 85%, #000000 100%)",
    width: isMobile ? "95%" : "80%",
    height: "auto",
    padding: "20px",
    paddingBottom: "90px",
  }}
>

        <div style={{ marginTop: isMobile ? "80px" : "200px", textAlign: "left", gap: "25px", display: "flex", flexDirection: "column" }}>


          <p style={{ color: "#c2b23c", fontFamily: "fantasy", marginLeft: "20px",letterSpacing:"2px" }}>Contact studio</p>

          
          <p style={{ fontFamily: "monospace", color: "white", fontSize: isMobile ? "22px" : "35px", marginLeft: "20px" }}>Request a bespoke detailing<br /><br />consultation..</p>

          <p style={{ marginLeft: "20px", color: "wheat", fontSize: isMobile ? "13px" : "18px" }}>Tell us about your vehicle, detailing goals, and desired services. Every inquiry is reviewed individually to recommend the most suitable and protection strategy for your vehicle.</p>
        </div>

        <div style={{ border: "1px solid #1a1a1a", marginTop: "40px", padding: isMobile ? "15px" : "20px", borderRadius: "29px", background: "linear-gradient(to top right, #0a0a0a 10%, #141414 35%, #1c1c1c 70%, #0d0d0d 85%, #0a0a0a 100%)" }}>

          <form ref={form} onSubmit={hanldesubmit}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px", justifyContent: "center" }}>


              <div style={{ display: "flex", flexDirection: "column", width: "100%", textAlign: "left" }}>


                <label style={{ marginBottom: "10px", color: "white" }}>Name</label>

                <input type="text" value={name} name="form_name" onChange={(e) => setname(e.target.value)} style={{ height: "45px", borderRadius: "10px", border: "1px solid #2a2a2a", paddingLeft: "10px", background: "#161616", color: "white" }} />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}
              </div>


              <div style={{ display: "flex", flexDirection: "column", width: "100%", textAlign: "left" }}>

                <label style={{ marginBottom: "10px", color: "white" }}>Email</label>


                <input type="email" value={email} name="form_email" onChange={(e) => setemail(e.target.value)} style={{ height: "45px", borderRadius: "10px", border: "1px solid #2a2a2a", paddingLeft: "10px", background: "#161616", color: "white" }} />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: "20px", textAlign: "left" }}>
              <label style={{ marginBottom: "10px", color: "white" }}>Vehicle Number</label>


              <input type="text" name="vehicle" placeholder="e.g. porsche 911 carrera s" style={{ height: "45px", borderRadius: "10px", border: "1px solid #2a2a2a", paddingLeft: "10px", background: "#161616", color: "white" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: "20px", textAlign: "left" }}>
              <label style={{ marginBottom: "10px", color: "white" }}>Service Type</label>


              <select name="service" style={{ height: "45px", borderRadius: "10px", border: "1px solid #2a2a2a", paddingLeft: "10px", background: "#161616", color: "white" }}>


                <option value="">Select a Service</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Paint Correction">Paint Correction</option>
                <option value="Interior Deep Cleaning">Interior Deep Cleaning</option>
                <option value="Full Details Package">Full Details Package</option>
                <option value="Consultation / Other">Consultation / Other</option>
              </select>

              <div style={{ border: "1px solid #2a2a2a", marginTop: "15px", borderRadius: "10px", color: "white", display: "flex", alignItems: "center", gap: "10px", padding: "10px" }}>


                <input type="checkbox" style={{ height: "20px", width: "20px", minWidth: "20px", cursor: "pointer" }} />


                <p style={{ fontSize: "10px", margin: 0 }}>I have read the Privacy Policy and agree to the processing of my data for the purpose of handling this request in accordance with GDPR (Art. 6 Para. 1 lit. a DSGVO).</p>
              </div>

              <button disabled={send} type="submit" style={{ width: isMobile ? "100%" : "180px", marginTop: "20px", borderRadius: "10px", height: "40px", backgroundColor: "#d8c74a", border: "none", cursor: "pointer", fontWeight: "bold" }}>
                {send ? "sending..." : "submit"}
              </button>
            </div>
          </form>
        </div>

        <div style={{ marginTop: "20px", border: "1px solid #1a1a1a", borderRadius: "29px", padding: "15px", background: "linear-gradient(to top right, #0a0a0a 10%, #141414 35%, #1c1c1c 70%, #0d0d0d 85%, #0a0a0a 100%)" }}>


          <div style={{ fontSize: "13px", color: "white", textAlign: "start", margin: "8px 2%" }}>


            <p style={{ color: "#fff713", fontSize: "19px" }}>studio location</p>
            <p>To protect your privacy under GDPR, the external map is only loaded after consent. Until then, no third-party map provider resources are requested.</p>


            <div style={{ border: "1px solid #2a2a2a", marginTop: "10px", borderRadius: "12px", padding: "10px" }}>


              <p style={{ fontSize: "14px" }}>Location preview is disabled by default. Click below to load an embedded map and accept transfer of your IP address to the map provider.</p>


              <button style={{ marginTop: "12px", backgroundColor: "#d8c74a", border: "none", borderRadius: "10px 8px 4px", padding: "8px 15px", cursor: "pointer" }} onClick={() => setmap(true)}>Load map</button>
              {map && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440.38571770601754!2d74.96503293514253!3d27.99127304092894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914a9002321b677%3A0x938352dcc4b31441!2sShameek%20kalania%20(%20bada)!5e0!3m2!1sen!2sin!4v1778934619945!5m2!1sen!2sin" width="100%" height="250" style={{ border: "0", borderRadius: "12px", marginTop: "10px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;