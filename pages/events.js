"use client"
import styles from '../app/page.module.css';
import Head from 'next/head';
import Script from 'next/script';
import MediaComponent from '../app/components/MediaComponent';
import MediaComponent2 from '../app/components/MediaComponent2';
import React, { useState } from 'react';
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

const Events = () => {
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

            <Navbar position="fixed" />
            <div className={styles.heading} style={{ marginTop: '10px', color: 'rgb(252, 3, 3)' }}>
                <div className={`${styles.radioGroup} d-flex flex-wrap justify-content-center`}>
                    <div className={`${styles.radioItem}`}>
                        <input
                            type="radio"
                            className={`${styles.radioButton}`}
                            name="btnradio"
                            id="btnradio1"
                            autoComplete="off"
                            checked={isChecked}
                            onChange={handleRadioChange}
                        />
                        <label className={`${styles.radioLabel}`} htmlFor="btnradio1">
                            Upcoming
                        </label>
                    </div>
                    <div className={`${styles.radioItem}`}>
                        <input
                            type="radio"
                            className={`${styles.radioButton}`}
                            name="btnradio"
                            id="btnradio3"
                            autoComplete="off"
                            checked={!isChecked}
                            onChange={handleRadioChange}
                        />
                        <label className={`${styles.radioLabel}`} htmlFor="btnradio3">
                            Previous
                        </label>
                    </div>
                </div>
            </div>

            <br />
            <br />

            {isChecked ? ( // Conditionally render based on the radio button state
                <>
                    <MediaComponent
                        imageSrc="/event1.jpg"
                        title="Capture The Flag - 7"
                        description="Welcome to the thrilling world of Capture the Flag! Get ready for an adrenaline-fueled hacking competition where participants will showcase their skills, unravel complex challenges, and battle it out in a virtual arena. Sharpen your coding techniques, collaborate with fellow hackers, and outsmart the competition. With exciting prizes, bragging rights, and the chance to join an elite community, this CTF event is not to be missed!"
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/CSC_Logo_Dark_name (1).svg"
                        title="Cryptography WorkShop"
                        description="Sharpen your coding techniques, collaborate with fellow hackers, and outsmart the competition. With exciting prizes, bragging rights, and the chance to join an elite community, this CTF event is not to be missed! Sharpen your coding techniques, collaborate with fellow hackers, and outsmart the competition. With exciting prizes, bragging rights, and the chance to join an elite community, this CTF event is not to be missed!"
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/event1.jpg"
                        title="Event"
                        description="Sharpen your coding techniques, collaborate with fellow hackers, and outsmart the competition. With exciting prizes, bragging rights, and the chance to join an elite community, this CTF event is not to be missed!"
                    /><br /><br />


                </>
            ) : (

                <>
                    <MediaComponent
                        imageSrc="/images.png"
                        title="Event"
                        description="Upcoming event description."
                    /><br /><br />

                    <MediaComponent
                        imageSrc="CSC_Logo_Dark_name (1).svg"
                        title="Event"
                        description="Upcoming event description."
                    /><br /><br />
                </>
            )}
            <Footer />
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossorigin="anonymous"
            />
        </div>
    );
};

export default Events;
