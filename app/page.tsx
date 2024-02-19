import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hotel from "../public/assets/hotel-hero.jpg"
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section>
    <div className="flex flex-col items-center md:flex-row md:justify-between mt-[60px] md:gap-4">
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 gap-10">
        <h1 className="text-3xl text-center md:text-start md:text-5xl font-bold md:leading-snug tracking-wide">The <span className="text-primary">best holiday</span> is about to come!</h1>
        <p className="text-center text-[14px] md:text-[18px] md:text-start text-slate-400">Only a small walk from the beach, our hotel is the best choice for you this summer! </p>
        <Link href="/about"><Button>Learn More <MoveRight className="ml-2 h-4 w-4" /></Button></Link>
      </div>

      <div className="flex justify-end md:w-1/2 w-full h-full mt-10">
        <Image src={Hotel} width={500} height={200} alt="hotel-image" className="rounded-lg object-fill" />
      </div>
    </div>
    </section>
  );
}

