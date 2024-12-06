import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true); // State to toggle alert visibility
  const [userName, setUserName] = useState("")
useEffect(() => {
  const userName = localStorage.getItem("userName")
  if(userName){
    setUserName(userName)
  }
})
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      {/* Alert message */}
      <div className={`${showAlert ? "block" : "hidden"}`}>
        <Stack sx={{ width: "100%", position: "fixed", top: 0, zIndex: 1000 }}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setShowAlert(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Welcome <strong>{userName}</strong>!
          </Alert>
        </Stack>
      </div>

      {/* Navbar */}
      <header
        className={`text-white body-font bg-green-500 fixed w-full z-50 transition-all ${
          showAlert ? "top-10" : "top-0"
        }`}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Jata Pushp</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#home" className="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="#why-us" className="mr-5 hover:text-gray-900">
              Why Us
            </a>
            <a href="#review" className="mr-5 hover:text-gray-900">
              Reviews
            </a>
            <a href="#pricing" className="mr-5 hover:text-gray-900">
              Price
            </a>
            <a href="#contact" className="mr-5 hover:text-gray-900">
              Contact
            </a>
          </nav>
          <button
            onClick={handleNavigate}
            className="inline-flex items-center text-green-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            type="button"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
