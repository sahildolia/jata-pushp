import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = ({loaderwhite}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "auto",
      }}
    >
      <CircularProgress style={{'color': loaderwhite}} />
    </Box>
  );
};

export default Loader;
