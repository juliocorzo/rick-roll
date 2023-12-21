import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const rickRoll = () => {
    if (!isPlaying) {
      const video = document?.getElementById('rickroll') as HTMLVideoElement;
      if (!video) return;
      video.play();
      video.muted = !video.muted;
      setIsPlaying(true);
    }
  }
  return (
    <div className={inter.className} style={{ 
      width: '100% !important',
      height: '100vh',
      backgroundColor: !isPlaying ? 'white' : 'black',
    }}>
      <Head>
        <title>
          A gift from Jess
        </title>
        <meta name="description" content="Amazon Gift Card" key="desc" />
        <meta property="og:title" content="A gift from Jess" />
        <meta
          property="og:image"
          content="/preview.png"
        />
      </Head>
      <div style={{ display: !isPlaying ? 'block' : 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Image src="/amazon.png" width={150} height={45} alt="Amazon Logo" />
          <p style={{ textAlign: "center", color: "black", marginTop: "20px", fontSize: '12px' }}>
            Please wait while we redirect you...
          </p>
          <button className={inter.className} style={{
            backgroundColor: 'rgb(66, 153, 225)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid rgb(66, 153, 225)',
            marginTop: '20px',
            cursor: 'pointer',
            fontSize: '12px',
          }} id="aButton" onClick={rickRoll}>
            {`Click here if you aren't redirected`}
          </button>
        </div>
      </div>
      <div style={{ display: !isPlaying ? 'none' : 'block' }}>
        <video
          id="rickroll"
          style={{ position: 'absolute', top: '0', left: '0', zIndex: '1', maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}
          src="/rickroll.mp4"
          preload="auto"
          muted 
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
