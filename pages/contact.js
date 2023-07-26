import styles from '../app/page.module.css';
import Head from 'next/head';
import Script from 'next/script';
import MediaComponent from '../app/components/MediaComponent';
import MediaComponent2 from '../app/components/MediaComponent2';
import React, { useState } from 'react';
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

const Contact = () => {
    return (
        <>
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
            <div>This is Home page</div>
            <Footer />
        </>
    )
}

export default Contact;