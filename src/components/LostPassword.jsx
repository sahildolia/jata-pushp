import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const LostPassword = () => {

  const handleClick = () => {
    toast.success('Email sent!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
    });
  };

    return (
        <>
         <Helmet>
        <title>Forget Password - Jata Pushp</title>
      </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
              Reset Password
            </h2>
            <form className="space-y-6" action="#">
                      <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Enter your registered email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
  
              <button
                type="button"
                onClick={handleClick}
                className="w-full bg-green-500 text-white py-2.5 rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Reset Password
              </button>
              <p className="text-center text-sm text-gray-600">
                Back to home page?{" "}
                <Link
                  to="/"
                  className="text-green-500 font-medium hover:underline"
                >
                  Home
                </Link>
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
        </>
      );
}

export default LostPassword
