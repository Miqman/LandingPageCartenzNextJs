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
    icon: InboxIcon,
    title: "Hands-On Projects",
    description:
      "Apply your knowledge to real-world projects, building a robust portfolio.",
  },
  {
    icon: AcademicCapIcon,
    title: "Career Opportunities",
    description:
      "React developers are in high demand and this course is designed for you!",
  },
  {
    icon: CheckBadgeIcon,
    title: "Flexible Learning",
    description: "Access course materials whenever it suits your schedule.",
  },
];

export function Highlight() {
  return (
    <section className="py-[75px] px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-1 rounded-bl-xl lg:mb-0 mb-12">
          <Image
            width={427}
            height={700}
            src="/image/1.jpg"
            className="h-full max-h-[700px] w-[427px] rounded-bl-xl"
            alt="highlight1"
          />
        </div>
        <div className="col-span-2">
          <Typography
            variant="h2"
            className="mb-4 font-bold text-[32px] text-[#0199CB] leading-10"
          >
            1. Optimalisasi Penerimaan Pendapatan Daerah
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Peningkatan pendapatan optimal adalah langkah awal untuk peningkatan
            kualitas daerah dengan cara penyediaan sistem perpajakan daerah,
            monitoring, serta pelayanan perpajakan yang semuanya terdigitalisasi
            dan terintegrasi
          </Typography>
          <Typography
            variant="h2"
            className="mb-4 font-bold text-[32px] text-[#0199CB] leading-10"
          >
            2. Peningkatan Kualitas Kesejahteraan Daerah
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Pendapatan daerah yang meningkat mewajibkan daerah meningkatkan
            kesejahteraan masyarakat dengan cara memberikan pelayanan dan
            keamanan sehingga masyarakat akan semakin mendukung pemerintah
            akibat merasakan dampak nyata pelayanan prima
          </Typography>

          {/* <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div> */}
        </div>
        <div className="col-span-1 rounded-tr-xl lg:mb-0 mb-12 mt-10">
          <Image
            width={427}
            height={700}
            src="/image/2.png"
            className="max-h-[700px] w-[427px] rounded-tr-xl"
            alt="highlight2"
          />
        </div>
      </div>
    </section>
  );
}

export default Highlight;
