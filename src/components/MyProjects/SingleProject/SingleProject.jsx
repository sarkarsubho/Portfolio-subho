import React from "react";
import styles from "./singleProject.module.css";
import { FaPlay, FaCode } from "react-icons/fa";
import { DiAndroid, DiReact } from "react-icons/di";
export const SingleProject = ({data}) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h2> {data.projectName}</h2>
      </div>
      <img
        src={data.image}
        alt="Project demo image"
      
      />
      <p className={styles.description}>
        {data.projectDesc}
      </p>
      <hr className={styles.divider} />
      <div className={styles.techStackicon}>
        <h6> Tech Stack Used:</h6>
        <div className={styles.techTag}>
         {
          data.tags.map((e)=>{
            return <div className={styles.singleTechTag}>
            <span># </span><span>{e}</span>
          </div>
          })
         }
         
          
        </div>
      </div>
      <div className={styles.projectShowcaseBtn}>
        <a
          href={data.demo}
          target="_blank"
          rel="noreferrer"
          className={styles.iconBtn}
        >
          <FaPlay className={styles.icon} />
        </a>
        <a
          href={data.code}
          target="_blank"
          rel="noreferrer"
          className={styles.iconBtn}
        >
          <FaCode className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
