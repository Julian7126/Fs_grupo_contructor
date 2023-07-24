import React, { useState } from "react";
import "./styles.scss";
import { AnimatePresence, motion } from "framer-motion";
import ProyectosNavegador from "../../components/Barra_Proyectos";
import Proyects from "../../components/Proyects";
import ProyectsInProgress from "../../components/ProyectsInProgress";
import ProyectsVarios from "../../components/ProyectsVarios";
import ProyectsTransporte from "../../components/ProyectsTransporte";

const ItemListProyects = () => {
  const [activeTab, setActiveTab] = useState("proyects");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ProyectosNavegador onTabChange={handleTabChange} />
      <div className="scrollable-container">
        <AnimatePresence mode="wait">
          {activeTab === "proyects" && (
            <motion.div
              key="proyects"
              initial={{ opacity: 0, y: -400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Proyects />
            </motion.div>
          )}
          {activeTab === "inProgress" && (
            <motion.div
              key="inProgress"
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProyectsInProgress />
            </motion.div>
          )}
          {activeTab === "proyectsVarios" && (
            <motion.div
              key="proyectsVarios"
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProyectsVarios />
            </motion.div>
          )}
          {activeTab === "proyectsTransporte" && (
            <motion.div
              key="proyectsTransporte"
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProyectsTransporte/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ItemListProyects;
