import React from "react";
import styles from "./TabelBody.module.sass";

export const TabelBody = ({ type, name, date, status, link }) => {
  return (
    <tbody>
      <tr className={styles.container}>
        <td className={styles.element}>{name}</td>
        <td className={styles.element}>{date}</td>
        <td className={[styles.type, styles[type]].join(" ")}>{type}</td>
        <td>
          <div className={[styles[status.split(" ").join("")]].join("")}>
            {" "}
            {status}
          </div>
        </td>
        <td>
          <a className={styles.link} href={link}>
            Browse
          </a>
        </td>
      </tr>
    </tbody>
  );
};
