"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/bg_hero.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto">
          <Typography
            variant="h1"
            color="white"
            className="font-black text-7xl leading-[5.488rem] md:max-w-full lg:max-w-4xl"
          >
            CARTENZ SATSET INDONESIA GASPOL
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full text-2xl leading-9 md:max-w-full lg:max-w-3xl"
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
