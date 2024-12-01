import React from "react";
import heroImage from "../assets/hero-main.jpg";
import { Helmet } from "react-helmet";
const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Home - Jata Pushp</title>
      </Helmet>
      <section id="home" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Where Tradition Meets
              <br className="hidden lg:inline-block" />
              <span className="text-green-500">True Care</span>
            </h1>
            <p className="mb-8 leading-relaxed">
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
