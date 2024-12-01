import React from "react";
import heroImage from "../assets/hero-main.jpg";
import { Helmet } from "react-helmet";
const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Home - Jata Pushp</title>
      </Helmet>
      <section
        id="home"
        className="text-gray-600 body-font relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Full screen height
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Optional overlay for better text visibility */}
        <div
          className="container mx-auto px-5 py-24 flex items-start justify-center relative z-10"
          style={{ top: "10%" }}
        >
          <div className="flex flex-col items-center text-center lg:w-3/4 xl:w-2/3 2xl:w-1/2">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white">
              Where Tradition Meets
              <span className="text-green-500"> True Care</span>
            </h1>
            <p className=" text-center mb-8 leading-relaxed text-white">
              Discover the transformative power of nature with our handcrafted
              hair oils and skincare products. Made from 100% natural
              ingredients, we deliver safe, effective solutions to elevate your
              hair and skin care routine. Embrace the purity and tradition that
              define every drop and every jar.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Buy Now!
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
