import React from "react";
import Head from "next/head";
import styles from "../app/page.module.css";
import Script from "next/script";
import MediaComponent from "../app/components/MediaComponent";
import TextComponent from "../app/components/TextComponent";
import ImageComponent from "../app/components/ImageComponent";
import Navbar from "../app/components/navbar";
import Footer from '../app/components/footer';
const People = () => {
  return (
    // <div>This is people page</div>
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.cdnfonts.com/css/cascadia-code"
        rel="stylesheet"
      ></link>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          font-family: 'Cascadia Code', sans-serif;
        }
      `,
        }}
      />
      <Navbar position="fixed" />
      <div className={styles.bg} style={{ fontFamily: 'Cascadia Code, monospace' }}>
        <div
          className={styles.heading}
          style={{ marginTop: "10px", color: "rgb(252, 3, 3)" }}
        >
          <div
            className={`${styles.radioGroup} d-flex flex-wrap justify-content-center`}
          >


          </div>
        </div>

        <br />

        <br />
        <br />
        <TextComponent title="Patrons" />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Dr. Rajiv V Dharaskar"
          imageSrc2="/images.png"
          name2="Dr. M. Radhakrishnan"
          imageSrc3="/images.png"
          name3="Prof P. Mohanan"
        />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Dr. Ebin Deni Raj"
          imageSrc2="/images.png"
          name2="Dr. Panchami V"
          imageSrc3="/images.png"
          name3="Dr. Lavanya Settipalli"
        />
        <br />


        <TextComponent title="Club Leads" />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Tanuj Karteek Allena"
          imageSrc2="/images.png"
          name2="Ajay Krishna Narayanasetti"
          imageSrc3="/images.png"
          name3="Priyatham Darisi"
        />
        <br />

        <TextComponent title="Core Team(2021)" />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Akhilesh"
          imageSrc2="/images.png"
          name2="Divyesh"
          imageSrc3="/images.png"
          name3="Jayant"
        />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Arnav"
          imageSrc2="/images.png"
          name2="Shivani"
          imageSrc3="/images.png"
          name3="Richa"
        />
        <br />


        <TextComponent title="Core Team(2022)" />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Gunj"
          imageSrc2="/images.png"
          name2="Sarthak"
          imageSrc3="/images.png"
          name3="Abel"
        />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Vedanta"
          imageSrc2="/images.png"
          name2="Shravasti"
          imageSrc3="/images.png"
          name3="Kaustubh"
        />
        <br />
        <ImageComponent
          imageSrc1="/images.png"
          name1="Purandhar"
          imageSrc2="/images.png"
          name2="Goutham"
          imageSrc3="/images.png"
          name3="Gaurav"
        />
        <br />



        <Footer />


        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
};

export default People;
