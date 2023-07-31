import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import React, { useState } from "react";
// import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
    }
  };
  return (
    <>
 
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
       
             {/* <Route exact path="/about" element={<About /> * */}
          <TextForm showAlert={showAlert}heading="Enter Text to analyze " mode={mode} />
      
        </div>
   
    </>
  );
  // return (
  //   <>
  //     {/* <Navbar title="TextUtils2" aboutText="About"/> */}
  //     <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
  //     <strong>
  //       <Alert alert={alert} />
  //     </strong>
  //     <BrowserRouter>
  //       <div className="container my-3">
  //         <Routes>
  //           <Route path="/about" element={<About />}/>

  //           <Route path="/" element={<TextForm
  //               showAlert={showAlert}
  //               heading="Enter your Text"
  //               mode={mode}
  //             />}/>
              
           
  //           </Routes>
        
  //       </div>
  //       </BrowserRouter>
      
  //   </>
  // );
}

export default App;
