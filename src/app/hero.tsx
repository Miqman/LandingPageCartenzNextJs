"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/bg_hero.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto">
          {/* @ts-ignore */}
          <Typography
            variant="h1"
            color="white"
            className="font-black text-3xl md:text-7xl lg:text-7xl leading-[3rem] md:leading-[5.488rem] lg:leading-[5.488rem] md:max-w-full lg:max-w-4xl"
          >
            CARTENZ SATSET INDONESIA GASPOL
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full text-lg leading-7 lg:text-2xl  lg:leading-9 md:max-w-full lg:max-w-4xl"
          >
            Mendorong Pertumbuhan Ekonomi Daerah Indonesia melalui kemitraan
            dengan Pemerintah Daerah untuk meningkatkan Pendapatan,
            Produktivitas, dan Pelayanan Publik melalui Transformasi Digital
            yang Berkelanjutan dan Berdampak.
          </Typography>
          {/* <div>
            <Button variant="gradient" color="white">
              ENROLL TODAY
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Hero;
