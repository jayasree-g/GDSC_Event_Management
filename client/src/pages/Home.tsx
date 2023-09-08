import React, { useState } from "react";
import Popup from "./Popup";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
