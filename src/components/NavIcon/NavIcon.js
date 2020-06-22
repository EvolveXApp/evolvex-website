import React, { Component } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../assets/icons/close_icon.png";

export default class NavIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let icon;
    if (this.props.sideDrawerOpen) {
      icon = (
        <img className={styles.closeIcon} src={closeIcon} alt="close_icon" />
      );
    } else {
      icon = (
        <div>
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
      );
    }

    return (
      <div className={styles.nav_icon} onClick={this.props.iconClickHandler}>
        {icon}
      </div>
    );
  }
}
