"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

// import FeatureCard from "@/components/feature-card";

export function Highlight() {
  return (
    <section className="py-[70px] px-8">
      {/* <div className="bg-blue-300 min-h-[calc(100vh-15rem)] w-full"></div> */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="hidden lg:col-span-1 lg:flex mb-12">
          {/* <div className="rounded-bl-[32px] h-[622px] w-[296px] bg-blue-200"> */}
          <img
            // width={296}
            // height={700}
            src="/image/1.jpg"
            className="rounded-bl-[32px] h-[622px] w-[296px]"
            alt="highlight1"
          />
          {/* </div> */}
        </div>
        <div className="col-span-2 p-5 lg:p-10">
          <div className="flex gap-4 mb-10 lg:mb-20">
            <div className="font-bold text-[32px] text-[#0199CB] leading-10 px-2">
              1.
            </div>
            <div>
              {/* @ts-ignore */}
              <Typography
                variant="h2"
                className="mb-4 font-bold text-[32px] text-[#0199CB] leading-10"
              >
                Optimalisasi Penerimaan Pendapatan Daerah
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="lead"
                className="mb-5 max-w-lg text-left text-[1rem] leading-5 font-semibold px-0 lg:px-0  "
              >
                Peningkatan pendapatan optimal adalah langkah awal untuk
                peningkatan kualitas daerah dengan cara penyediaan sistem
                perpajakan daerah, monitoring, serta pelayanan perpajakan yang
                semuanya terdigitalisasi dan terintegrasi
              </Typography>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold text-[32px] text-[#0199CB] leading-10 opacity-0 px-2">
              2.
            </div>
            <div>
              {/* @ts-ignore */}
              <Typography
                variant="h2"
                className="mb-4 font-bold text-[32px] text-[#0199CB] leading-10"
              >
                Peningkatan Kualitas .2 Kesejahteraan Daerah
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="lead"
                className="mb-5 max-w-lg text-left text-[1rem] leading-5 font-semibold px-0 lg:px-0  "
              >
                Pendapatan daerah yang meningkat mewajibkan daerah meningkatkan
                kesejahteraan masyarakat dengan cara memberikan pelayanan dan
                keamanan sehingga masyarakat akan semakin mendukung pemerintah
                akibat merasakan dampak nyata pelayanan prima
              </Typography>
            </div>
          </div>

          {/* <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div> */}
        </div>
        <div className="hidden lg:col-span-1 lg:flex mb-12 mt-14 ">
          <img
            // width={296}
            // height={622}
            src="/image/2.png"
            className="h-[622px] w-[296px] rounded-tl-[32px]"
            alt="highlight2"
          />
        </div>
      </div>
    </section>
  );
}

export default Highlight;
