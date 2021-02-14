import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Senai Info</title>
        <link rel="shortcut icon" href="http://iconsetc.com/icons-watermarks/flat-rounded-square-white-on-ios-pink-gradient/alphanum/alphanum_uppercase-letter-s/alphanum_uppercase-letter-s_flat-rounded-square-white-on-ios-pink-gradient_512x512.png" type="image/x-icon" />
      </Head>

      <main style={{
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212121",
        width: "100%",
        height: "100vh",

        fontSize: "2rem",
        color:"white",
        fontWeight: "bold"
      }}>
        <h1>Em Desenvolvimento :D</h1>
      </main>
    </div>
  )
}

export default Home;