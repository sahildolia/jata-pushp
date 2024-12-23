import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      text: "Hi yr main oil use kita bht vadiya result ha mere hair pehla nalo silky or hair fall v kut ho gaya bht vadiya oil ha thankew so much 🥰👍",
      name: "Happy customer",
      role: "Confident Hair Owner",
    },
    {
      text: "Main oil 4,5 bar use kra ji bot vdya results aye aa ji mera hair ch growth vi bot vdya hoo rye aa mnu oil bot vdya lga aa tysm didi ana vdya oil provid krn lye  ❤❤",
      name: "Happy customer",
      role: "Confident Hair Owner",
    },
    {
      text: "Hy vishu .....jo tusi oil ditaa si sachii oo bhutt achaa si 1 month ho Gaya Sanu oil use karde nu or hair foll bhut khaat ho gyà or hair silky ho gayee or growth vi bhutt ho Gai he thank you so much is oil Lai thank you so much matlab enaa vadiya oil ee hee manu bhutt vadiya result milyaa he thank you thode enee vadiya oil Lai ....🥰🥰🥰🥰🥰🥰",
      name: "Happy customer",
      role: "Confident Hair Owner",
    },
    {
      text: "Mam tohda oil mai 23 days phla lita c mnu 23 days ch boht bdia results aaye teh mere hairs di growth v hoggi🥹+ hairfall v khtm hogeyaa bs dead hairs hii niklde + shinning v aahgi g hairs teh♥ thank you so much mam rubberband v fisal jnda ehne silky hairs hogge🥰 bs mera tohde krke hairsfall ght gya mere bohtt hairfall hundii c  thank you 🙏🏻♥🥹",
      name: "Happy customer",
      role: "Confident Hair Owner",
    },
    {
      text: "Mam oil 4-5 vaar use kite aa boht bdia results aaye aa ji mere hairs growth v bohtt ho rhii aa mere bohtt vdia hairs ho gye tysm didi ehna vdia oil provide krn lyi❤👍🏻",
      name: "Happy customer",
      role: "Confident Hair Owner",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
        );
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isHovered, testimonials.length]);

  return (
    <>
      <section
        id="review"
        className="text-gray-600 body-font bg-green-500 overflow-hidden"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Testimonials
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Because Your Trust is Our Greatest Reward
            </p>
          </div>
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 50}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-4 md:w-1/2 w-full flex-shrink-0"
                  style={{ flexBasis: "50%" }}
                  onMouseEnter={() => setIsHovered(true)} // Stop slider on hover
                  onMouseLeave={() => setIsHovered(false)} // Resume slider when hover ends
                >
                  <div className="h-full bg-white p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">{testimonial.text}</p>
                    <Link className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={user}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {testimonial.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {testimonial.role}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
