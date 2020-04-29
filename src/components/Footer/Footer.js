import React, { Component } from "react";
import styles from "./footer.module.scss";
import Logo from "./Logo";
import Contact from "./Contact";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks/SocialLinks";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.col1}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <SocialLinks />
            </div>
            <Contact />
            <PageLinks />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
