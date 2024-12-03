import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Pricing = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
const navigate = useNavigate()
  const handleCOD = () => {
    navigate('/add-address')
    console.log("Order placed with Cash on Delivery!");
    // Your COD logic here (e.g., saving order details)
    setIsPopupOpen(false);
  };
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (price) => {
    const isLoaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Please check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_OSTW4yBBpF7tlV", // Replace with your Razorpay Key ID
      amount: price * 100, // Amount in paise (e.g., 50000 paise = ₹500)
      currency: "INR",
      name: "Jata Pushp",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png", // Optional: Replace with your logo
      handler: (response) => {
        toast.success(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
          }
        );
        // alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log(response);
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "8360352730", // Pre-fill customer details (optional)
      },
      theme: {
        color: "#22c55e00", // Customize the theme color
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <section
        id="pricing"
        className="text-white bg-green-500 body-font overflow-hidden"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Find the Perfect Blend of Nature and Affordability with Pricing
              That Matches Your Needs
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹400</span>
                  <span className="text-lg ml-1 font-normal text-white">
                    /250ml
                  </span>
                </h1>

                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="flex items-center mt-auto text-green-500 bg-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 hover:bg-green-600 rounded"
                >
                  Claim Your Bottle
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                     {/* Payment Method Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setIsPopupOpen(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-green-500">Choose Payment Method</h2>
            <div className="space-y-4">
              <button
                onClick={() => {
                  handlePayment(400);
                  setIsPopupOpen(false);
                }}
                className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Pay Online
              </button>
              <button
                onClick={handleCOD}
                className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cash on Delivery
              </button>
            </div>
          </div>
        </div>
      )}
                <p className="text-xs text-white mt-3">
                &#10003; Strengthens Hair Roots
                </p>
                <p className="text-xs text-white mt-3">
                &#10003; Boosts Hair Volume Naturally
                </p>
                <p className="text-xs text-white mt-3">
                &#10003; Removes Dandruff Effectively
                </p>
                <p className="text-xs text-white mt-3">
                &#10003; Gentle for All Hair Types
                </p>
                <p className="text-xs text-white mt-3">
                &#10008; Increase Hair Volume in 2 Uses? Patience Pays Off.
                </p>
                <p className="text-xs text-white mt-3">
                &#10008; Harsh Chemicals? Absolutely None.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹800</span>
                  <span className="text-lg ml-1 font-normal text-white">
                    /500ml
                  </span>
                </h1>
                <button
                 onClick={() => setIsPopupOpen(true)}
                  className="flex items-center mt-auto bg-white text-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 hover:text-white rounded"
                >
                  Claim Your Bottle
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                      {/* Payment Method Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setIsPopupOpen(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-green-500">Choose Payment Method</h2>
            <div className="space-y-4">
              <button
                onClick={() => {
                  handlePayment(400);
                  setIsPopupOpen(false);
                }}
                className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Pay Online
              </button>
              <button
                onClick={handleCOD}
                className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cash on Delivery
              </button>
            </div>
          </div>
        </div>
      )}
                <p className="text-xs text-white mt-3">
                &#10003; Strengthens Hair Roots
                </p>
                <p className="text-xs text-white mt-3">
                &#10003; Boosts Hair Volume Naturally
                </p>
                <p className="text-xs text-white mt-3">
                &#10003; Removes Dandruff Effectively
                </p>
                <p className="text-xs text-white mt-3">
                &#10003; Gentle for All Hair Types
                </p>
                <p className="text-xs text-white mt-3">
                &#10008; Increase Hair Volume in 2 Uses? Patience Pays Off.
                </p>
                <p className="text-xs text-white mt-3">
                &#10008; Harsh Chemicals? Absolutely None.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Pricing;
