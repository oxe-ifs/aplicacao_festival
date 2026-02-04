"use client";

import Image from "next/image";
import { useState } from "react";

const imagens = [
  "/imgs/background/cordel.jpg",
  "/imgs/background/nossa_senhora_da_piedade.jpg",
  "/imgs/background/palco_festival.jpg",
  "/imgs/background/praca_da_fonte.jpg",
  "/imgs/background/santuario_nossa_senhora_da_piedade.jpg",
];

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

export default function BackgroundHome() {
  const [index] = useState(() => getRandomIndex(imagens.length));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src={imagens[index]}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
