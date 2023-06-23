import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Navbar";

import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { motion as scroll, useScroll, useSpring } from "framer-motion";
import "./styles.scss"

const Root = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
    
    <scroll.div  className="progress-bar" style={{ scaleX }}/>
    <AnimatePresence mode="wait">
      <m.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        >
        <NavBar />
        <div style={{ marginTop: "10px" }}>
          <Outlet />
          
        </div>
      </m.div>
    </AnimatePresence>
        </>
  );
};

export default Root;