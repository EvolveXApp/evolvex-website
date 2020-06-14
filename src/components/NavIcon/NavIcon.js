import React, { Component } from "react";
import styles from "./styles.module.scss";

export default class NavIcon extends Component {
  componentDidMount() {
    const menu = document.querySelector("#nav_icon_container");
    const sideBar = document.querySelector("#navSideBarContainer");
    menu.addEventListener("click", () => {
      const menuState = menu.dataset.state;
      if (menuState === "hidden") {
        menu.dataset.state = "showing";
        sideBar.style.right = 0;
        return;
      }
      menu.dataset.state = "hidden";
      sideBar.style.right = "-70vw";
    });
  }
  render() {
    return (
      <div>
        <div
          className={styles.nav_icon}
          data-state="hidden"
          id="nav_icon_container"
        >
          <div
            className={`${styles.nav_icon_lines} ${styles.nav_icon_topline}`}
          ></div>
          <div
            className={`${styles.nav_icon_lines} ${styles.nav_icon_midline}`}
          ></div>
          <div
            className={`${styles.nav_icon_lines} ${styles.nav_icon_bottomline}`}
          ></div>
        </div>
      </div>
    );
  }
}
