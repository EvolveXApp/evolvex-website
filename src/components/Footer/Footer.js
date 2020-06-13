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
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.footer_socialLinks}>
              <SocialLinks />
            </div>
            <div className={styles.footer_contact}>
              <Contact />
            </div>
            <div className={styles.footer_pageLinks}>
              <PageLinks />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
