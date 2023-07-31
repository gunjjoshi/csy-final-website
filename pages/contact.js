import React from "react";
import Head from "next/head";
import styles from "../app/page.module.css";
import Script from "next/script";
import MediaComponent from "../app/components/MediaComponent";
import TextComponent from "../app/components/TextComponent";
import ImageComponent from "../app/components/ImageComponent";
import Navbar from "../app/components/navbar";
import Footer from '../app/components/footer';
import { useState } from "react";
import MediaComponent2 from "../app/components/MediaComponent2";
import ContactMap from "../app/components/ContactMap";
const Contact = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleRadioChange = (event) => {
        setIsChecked(!isChecked);
    };

    return (
        <div class="custom-background" style={{ fontFamily: 'Cascadia Code, monospace' }}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>CSY Club | Events</title>
            </Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        body {
            font-family: 'Cascadia Code', 'Courier New', 'monospace';
          background-image: url("background.png");
        background-size: cover;
        background-repeat: no-repeat;
        }
      `,
                }}
            />



            <ContactMap />

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossorigin="anonymous"
            />
        </div>
    );
};

export default Contact;
