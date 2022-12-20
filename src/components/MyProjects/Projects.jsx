import React from "react";
import { SingleProject } from "./SingleProject/SingleProject";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./project.module.css";
import {projectsData} from "../../data/projectsData"
export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="projects" style={{ backgroundColor: theme.secondary }} >
        <h1 style={{ color: theme.primary ,textAlign:"center", fontSize:"60px",marginBottom:"50px"}}>Projects</h1>
        <div className={styles.main}>
        {projectsData.map((e)=>{
          return <SingleProject key={e.id} data={e}></SingleProject>
        })}
         
        
        </div>
      </div>
    </>
  );
};
