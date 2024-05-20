"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    title: "XXX++",
    description: "Satuan Kerja Perangkat Daerah",
  },
  {
    title: "30+",
    description: "Sistem e-Government",
  },
  {
    title: "350+",
    description: "Proyek Pemerintah Daerah",
  },
  {
    title: "38+",
    description: "IT partner di Indonesia",
  },
];
const FEATURES2 = [
  {
    title: "Rp 2 T++",
    description: "total transaksi termonitoring perbulan",
  },
  {
    title: "10 Jt++",
    description: "volume transaksi monitoring perbulan",
  },
  {
    title: "Rp 18 T++",
    description: "total transaksi PPAT setahun melalui app pelayanan publik",
  },
  {
    title: "Rp 43 T++",
    description: "total pelaporan SPTPD setahun melalui app pelayanan publik",
  },
];
function BoxHighlight({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative max-w-[15rem]">
      <div className="absolute right-0 top-0">
        <img src="/image/arrow-yellow-right-up.svg" alt="icon-arrow-yellow" />
      </div>
      <div>
        <h3 className="text-[#0199CB] text-[3rem] font-semibold leading-[3.657rem]">
          {title}
        </h3>
        <p className="text-[24px] leading-7">{description}</p>
      </div>
    </div>
  );
}
function BoxHighlight2({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-[15rem] lg:max-w-[21.25rem]">
      <div>
        <h3 className="text-[#0199CB] text-[3rem] font-semibold leading-[3.657rem]">
          {title}
        </h3>
        <p className="text-[24px] leading-7">{description}</p>
      </div>
    </div>
  );
}

export function Highlight2() {
  return (
    <section className="">
      <div className="container mx-auto">
        <h2 className="font-bold text-[32px] leading-10 mb-5">
          Cartenz dalam angka
        </h2>
      </div>
      <div className="bg-[#F0F6FF]">
        <div className="container flex items-center justify-center gap-20 lg:gap-36 py-10 px-4 mx-auto flex-wrap">
          {/* <div className="container grid grid-cols-3 lg:grid-cols-7 items-center py-10 px-4 gap-10 mx-auto"> */}
          <div className="">
            <img src="/image/logos/1Daerah.svg" alt="1daerah" />
          </div>
          <div className="">
            <img src="/image/logos/2Daerah.svg" alt="2daerah" />
          </div>
          <div className="">
            <img src="/image/logos/3Daerah.svg" alt="3daerah" />
          </div>
          <div className="">
            <img src="/image/logos/5Daerah.svg" alt="4daerah" />
          </div>
          <div className="">
            <img src="/image/logos/5Daerah.svg" alt="5daerah" />
          </div>
          <div className="text-center ">
            <h3 className="text-[#0199CB] text-[3rem] font-semibold leading-[3.657rem]">
              100++
            </h3>
            <p className="text-[24px] leading-7">Pemerintah Daerah</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 lg:mt-32 relative">
        {/* <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 "> */}
        <div className="flex gap-24 justify-center lg:justify-normal flex-wrap">
          {FEATURES.map(({ title, description }) => (
            <BoxHighlight key={title} title={title} description={description} />
          ))}
        </div>
        {/* <div className="relative max-w-[14.125rem]">
          <div className="absolute right-0 top-0">
            <img
              src="/image/arrow-yellow-right-up.svg"
              alt="icon-arrow-yellow"
            />
          </div>
          <div>
            <h3 className="text-[#0199CB] text-[3rem] font-semibold leading-[3.657rem]">
              XXX++
            </h3>
            <p className="text-[24px] leading-7">
              Satuan Kerja Perangkat Daerah
            </p>
          </div>
        </div> */}

        <div className="lg:w-3/5 mt-20">
          <div className="flex gap-20 justify-center lg:justify-normal flex-wrap">
            {FEATURES2.map(({ title, description }) => (
              <BoxHighlight2
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-3/5 mt-20 text-center lg:text-left">
          <p className="font-bold text-2xl lg:text-4xl">
            80% Klien kami memiliki pendapatan diatas rata - rata provinsi dan
            nasional
          </p>
          <p className="text-lg lg:text-2xl text-[#828282} lg:mt-10">
            * data tahun 2023
          </p>
        </div>
      </div>
    </section>
  );
}

export default Highlight2;
