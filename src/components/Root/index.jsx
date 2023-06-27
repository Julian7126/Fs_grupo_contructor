import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Navbar";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./styles.scss";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <m.div
          key={location.pathname}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 1 , y: 1000 }}
        >
          <NavBar />

          <Outlet />
        </m.div>
      </AnimatePresence>
    </>
  );
};

export default Root;
