import "./index.css"; // Adjust if you named your CSS file differently
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Testimonial />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
