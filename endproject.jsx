import React, { useState } from "react";

function EventPortal() {
  const [show, setShow] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  const events = [
    { title: "Tech Fest", date: "10-12-2025", details: "College annual tech festival." },
    { title: "AI Workshop", date: "15-12-2025", details: "Hands-on session on AI & ML." }
  ];

  const openModal = (e) => {
    setEventInfo(e);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div>
      <h2>Upcoming Events</h2>

      {events.map((e, i) => (
        <div 
          key={i}
          style={{ border: "1px solid black", width: "200px", padding: "10px", margin: "10px" }}
          onClick={() => openModal(e)}
        >
          <h3>{e.title}</h3>
          <p>{e.date}</p>
        </div>
      ))}

      {/* Modal */}
      {show && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex",
            justifyContent: "center", alignItems: "center"
          }}
        >
          <div style={{ background: "white", padding: "20px", width: "250px" }}>
            <h3>{eventInfo.title}</h3>
            <p><b>Date:</b> {eventInfo.date}</p>
            <p>{eventInfo.details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPortal;
