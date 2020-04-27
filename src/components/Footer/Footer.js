import React, { Component } from "react";
import styles from "./footer.module.scss";
import Logo from "./Logo";
import Contact from "./Contact";
import PageLinks from "./PageLinks";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className={styles.footerContent}>
            <Logo />
            <Contact />
            <PageLinks />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
