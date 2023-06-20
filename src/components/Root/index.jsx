import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="out-in">
      <m.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <NavBar />
        <div style={{ marginTop: "40px" }}>
          <Outlet />
          <Footer />
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default Root;
