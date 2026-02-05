"use client";

import Image from "next/image";
import { useState } from "react";

const imagens = [
  {
    src: "/imgs/background/cordel-lg.jpg",
  },
  {
    src: "/imgs/background/nossa_senhora_da_piedade-lg.jpg",
  },
  {
    src: "/imgs/background/palco_festival-lg.jpg",
  },
  {
    src: "/imgs/background/santuario_nossa_senhora_da_piedade-lg.jpg",
  },
  {
    src: "/imgs/background/praca_da_fonte-lg.jpg",
  }
];

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

export default function BackgroundHome() {
  const [index] = useState(() => getRandomIndex(imagens.length));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src={imagens[index].src}
        alt="Background"
        fill
        priority
        className="object-cover"
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 100vw,
          100vw
        "
      />
    </div>
  );
}
