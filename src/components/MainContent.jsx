/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./MainContent.module.css";
import BackImage from "./BackImage";
import LocationSection from "./LocationSection";
import CompanyInfo from "./CompanyInfo";
import ContactForm from "./ContactForm";


const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <BackImage />
          </div>
          <div className={styles.rightColumn}>
          <CompanyInfo />
          </div>
          </div>
          <div className={styles.backpic}>
            <div className={styles.transbox}>
          <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <LocationSection />
          </div>
        
          
         
        <div className={styles.rightColumn}>
          <ContactForm />
        </div>
        </div>
        </div>
        </div>
    </main>
  );
};

export default MainContent;