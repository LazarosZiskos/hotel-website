import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Platamon from "../public/assets/platamon-castle-1.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
import Olympus from "../public/assets/mount-olympus.jpg"
import Meteora from "../public/assets/meteora.jpg"
import Skiathos from "../public/assets/skiathos.jpg"
import Skopelos from "../public/assets/skopelos.jpg"
import Thessaloniki from "../public/assets/thessaloniki.jpg"
import Athens from "../public/assets/athens.jpg"
import Dion from "../public/assets/ancient-dion.jpg"
import Waterland from "../public/assets/waterland.jpg"
import GreekNight from "../public/assets/greek-night.jpg"


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
    {
        title: "Platamon Castle",
        img: "assets/platamon-castle-1.jpg",
        id: 5,
    },
    {
        title: "Thessaloniki",
        img: "/assets/thessaloniki.jpg",
        id: 6,
    },
    {
        title: "Athens",
        img: "/assets/athens.jpg",
        id: 7,
    },
    {
        title: "Ancient Dion",
        img: "/assets/ancient-dion.jpg",
        id: 8,
    },
    {
        title: "Waterland",
        img: "/assets/waterland.jpg",
        id: 9,
    },
    {
        title: "Greek Night",
        img: "/assets/greek-night.jpg",
        id: 10,
    },
   
]


const Destinations = () => {
  return (
    <section className="container mb-[100px]">
      <h2 className="text-2xl font-bold tracking-wider pb-5 md:text-5xl">
        Popular Destinations
      </h2>
      <p className="text-slate-400/70 leading-loose text-[14px] md:text-[18px] md:max-w-[500px]">
        Visit popular destinations nearby and enjoy the best that the olympic
        Riviera region has to offer!
      </p>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {destinations.map((destination) => (
            <Card key={destination.id} className="group">
            <div className="relative overflow-hidden">
            <img
                src={destination.img}
                className="rounded-tl-lg rounded-tr-lg w-full"
                alt="image"
                width={400}
                height={400}
              />
              <div className="absolute h-full w-full bg-black/20 flex items-center rounded-tl-lg rounded-tr-lg
              justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                <Link href="/destinations">
                <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
            <CardContent className="p-2 text-center text-[18px] ">
              <p>{destination.title}</p>
            </CardContent>
          </Card>
        ))}
      
      </div>
    </section>
  );
};

export default Destinations;
