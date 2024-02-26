import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Single from "../public/assets/single-room.jpg";
import { Button } from "./ui/button";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "Single",
    route: "/rooms/single"
  },
  {
    id: 2,
    title: "Double",
    route: "/rooms/double"
  },
  {
    id: 3,
    title: "Triple",
    route: "/rooms/triple"
  },
  {
    id: 4,
    title: "Family",
    route: "/rooms/family"
  },
];

const Rooms = () => {
  return (
    <section className="container mt-[100px] mb-[60px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-wider pb-5 md:text-5xl">
          Our Rooms
        </h2>
        <p className="text-slate-400/70 text-[14px] md:text-[18px]">
          Choose the ideal room for your holidays!
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 pt-4">
        {rooms.map((room) => (
          <Card key={room.id} className="group">
            <div className="relative overflow-hidden">
              <Image
                src={Single}
                className="rounded-tl-lg rounded-tr-lg h-[250px] object-fill xl:w-full"
                alt="image"
                width={400}
                height={300}
              />
              <div
                className="absolute h-full w-full bg-black/20 flex items-center rounded-tl-lg rounded-tr-lg
              justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 "
              >
                <Link href={room.route}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
            <CardContent className="p-2 text-center text-[18px] ">
              <p>{room.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
