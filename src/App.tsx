
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "../src/pages/home";
// import { ThemeWrapper } from "../src/theme";

// function App() {
//   return (

//     // <ThemeWrapper>
//     //   <Router>
//     //     <Routes>
//     //       <Route path="/" element={<Home />} />
//     //       <Route path="/My-Portfolio" element={<Home />} /> {/* Add this line */}
//     //     </Routes>
//     //   </Router>
//     // </ThemeWrapper>
//   );
// }

// export default App;


import About from "./components/About";
import Header from "./components/Header";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header /> 
      <About />
      <Experience />
    </div>
  );
}

export default App;
