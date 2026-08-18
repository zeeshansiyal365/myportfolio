'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({
  texts = [
    "I am a passionate MERN Stack Developer_",
    "I love React and Tailwind CSS_",
    "I build modern and responsive websites_",
    "I enjoy solving real-world coding problems_",
    "I constantly learn new technologies_"
  ],
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  className = "",
  showCursor = true
}) => {

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [textIndex, setTextIndex] = useState(0);

  const currentText = texts[textIndex];

  useEffect(() => {

    let timeout;

    if (isPaused) {

      timeout = setTimeout(() => {

        setIsPaused(false);

        if (loop) {
          setIsDeleting(true);
        }

      }, pauseDuration);

    } 
    
    else if (isDeleting) {

      if (displayText.length > 0) {

        timeout = setTimeout(() => {

          setDisplayText(
            currentText.substring(
              0,
              displayText.length - 1
            )
          );

        }, deleteSpeed);

      } 
      
      else {

        setIsDeleting(false);

        setTextIndex((prevIndex) =>
          prevIndex === texts.length - 1
            ? 0
            : prevIndex + 1
        );

      }

    } 
    
    else {

      if (displayText.length < currentText.length) {

        timeout = setTimeout(() => {

          setDisplayText(
            currentText.substring(
              0,
              displayText.length + 1
            )
          );

        }, speed);

      } 
      
      else if (loop) {

        setIsPaused(true);

      }

    }

    return () => clearTimeout(timeout);

  }, [
    displayText,
    isDeleting,
    isPaused,
    currentText,
    speed,
    deleteSpeed,
    pauseDuration,
    loop,
    texts
  ]);

  return (
    <div className={`font-mono ${className}`}>

      <span className="text-black">

        {displayText}

        {showCursor && (
          <motion.span
            animate={{
              opacity: [1, 0]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-blue-500"
          >
            |
          </motion.span>
        )}

      </span>

    </div>
  );
};

export default function TypewriterView() {
  return <TypewriterText />;
}