import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./utils/Reveal";

const destinations = [
  {
    title: "Mount Olympus",
    img: "/assets/mount-olympus.jpg",
    id: 1,
  },
  {
    title: "Meteora",
    img: "/assets/meteora.jpg",
    id: 2,
  },
  {
    title: "Skiathos",
    img: "/assets/skiathos.jpg",
    id: 3,
  },
  {
    title: "Skopelos",
    img: "/assets/skopelos.jpg",
    id: 4,
  },
  // {
  //   title: "Thessaloniki",
  //   img: "/assets/thessaloniki.jpg",
  //   id: 6,
  // },
  // {
  //   title: "Athens",
  //   img: "/assets/athens.jpg",
  //   id: 7,
  // },
];

const Destinations = () => {
  return (
    <section className="container pt-[100px] mb-[100px]">
      <div className="text-center">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-wider pb-5 md:text-5xl">
            Popular Destinations
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-slate-400/70 leading-loose text-[14px] md:text-[18px] ">
            Visit popular destinations nearby and enjoy the best that the
            olympic Riviera region has to offer!
          </p>
        </Reveal>
      </div>
      <Reveal>
        <div className="grid md:grid-cols-4 gap-4 pt-4">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group">
              <div className="relative overflow-hidden">
                <Image
                  src={destination.img}
                  className="rounded-tl-lg rounded-tr-lg h-[250px] object-fill xl:w-full"
                  alt="image"
                  width={400}
                  height={300}
                />
              </div>
              <CardContent className="p-2 text-center text-[18px] ">
                <p>{destination.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
      <div className=" flex justify-end mt-6">
        <Reveal>
          <Link href="/destinations" aria-label="link to see all the nearby destinations">
            <Button variant="outline">
              View more destinations <ArrowRight className="pl-1" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Destinations;
