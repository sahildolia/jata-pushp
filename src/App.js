// import "./index.css"; // Adjust if you named your CSS file differently
// import "./App.css";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect, useState } from "react";
// import Loader from "./components/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className="App">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div>
//           <Header />
//           <Hero />
//           <Testimonial />
//           <WhyChooseUs />
//           <Pricing />
//           <Contact />
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./components/AuthContext";
import Login from "./components/Login";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { isAuthenticated } = useAuth(); // Use the auth context here

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {/* Protected Route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Testimonial />
                <WhyChooseUs />
                <Pricing />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default App;
