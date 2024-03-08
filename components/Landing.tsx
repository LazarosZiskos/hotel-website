"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hotel from "../public/assets/hotel-bento.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import React from "react";
import { Reveal } from "./utils/Reveal";

const Landing = () => {
  return (
    <section className="container mt-[100px] min-h-screen">
      <div className="flex flex-col items-center lg:flex-row md:justify-between md:gap-4">
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 gap-10">
          <Reveal>
            <h1 className="text-3xl text-center lg:text-start md:text-5xl font-bold md:leading-snug tracking-wide">
              The <span className="text-primary">best holiday</span> is about to
              come!
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-center text-[14px] md:text-[18px] lg:text-start text-slate-400/70 leading-loose">
              Only a small walk from the beach, our hotel <br />
              is the best choice for you this summer!{" "}
            </p>
          </Reveal>
          <Reveal>
            <Link href="/about">
              <Button>
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </Reveal>
        </div>

        <div className="flex justify-end lg:w-1/2 w-full h-full mt-10 rounded-lg">
          <Reveal>
            <Image
              src={Hotel}
              width={700}
              height={200}
              alt="hotel-image"
              priority
              className="rounded-lg object-fill"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Landing;
