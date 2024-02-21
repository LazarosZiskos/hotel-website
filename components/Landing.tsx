import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hotel from "../public/assets/hotel-bento.jpg"
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";


import React from 'react'

const Landing = () => {
  return (
    <section className="container mt-[60px] mb-[60px]">
    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-4 ">
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 gap-10">
        <h1 className="text-3xl text-center md:text-start md:text-5xl font-bold md:leading-snug tracking-wide">The <span className="text-primary">best holiday</span> is about to come!</h1>
        <p className="text-center text-[14px] md:text-[18px] md:text-start text-slate-400/70 leading-loose">Only a small walk from the beach, our hotel <br />is the best choice for you this summer! </p>
        <Link href="/about"><Button>Learn More <ArrowRight className="ml-2"/></Button></Link>
      </div>

      <div className="flex justify-end md:w-1/2 w-full h-full mt-10 rounded-lg">
        <Image src={Hotel} width={700} height={200} alt="hotel-image" priority className="rounded-lg object-fill" />
      </div>
    </div>
    </section>
  )
}

export default Landing
