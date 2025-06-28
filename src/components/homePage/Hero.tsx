"use client";
import Image from "next/image";
import styles from "./styles/Hero.module.css";
import { useState, useRef } from "react";
import { FaPlay, FaPause, FaDownload } from "react-icons/fa";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(percentage);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>
          We Build <br />A <span>Premium</span> <br />
          Mobile And <br />
          Web App
        </h1>

        <div className={styles.dec}>
          <h5>
            I craft high-performance, cross-platform mobile apps using React
            Native and the latest development technologies.
          </h5>
        </div>

        <div className={styles.buttons}>
          <button
            onClick={() => {
              const win = window.open("/cv/NirajResume.html", "_blank");
              setTimeout(() => {
                win?.print();
              }, 200);
            }}
          >
            <FaDownload /> Download CV
          </button>
          <button onClick={toggleAudio}>
            {isPlaying ? <FaPause /> : <FaPlay />} Self Introduction
          </button>
        </div>

        <div className={styles.audioProgress}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>

        <audio
          ref={audioRef}
          src="/selfIntro.m4a"
          onTimeUpdate={handleTimeUpdate}
        />

        <div className={styles.stats}>
          <button>
            <strong>02+</strong> Years Of Experience
          </button>
          <button>
            <strong>9</strong> Project Completed
          </button>
          <button>
            <strong>15</strong> Project Running
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageFrame}>
          <Image
            src="/nirajImage.png"
            alt="Niraj"
            width={250}
            height={300}
            // layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
