import { useState } from "react";
import "./styles.scss";
import ProyectosNavegador from "../../components/Barra_Proyectos";
import Proyects from "../../components/Proyects";
import ProyectsInProgress from "../../components/ProyectsInProgress";

const ItemListProyects = () => {
  const [activeTab, setActiveTab] = useState("proyects");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ProyectosNavegador onTabChange={handleTabChange} />
      <div>
        {activeTab === "proyects" && <Proyects />}
        {activeTab === "inProgress" && <ProyectsInProgress />}
      </div>
    </>
  );
};

export default ItemListProyects;