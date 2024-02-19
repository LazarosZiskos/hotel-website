import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Single from "../public/assets/single-room.jpg";
import { Button } from "./ui/button";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "Single",
    description: "One large bed",
  },
  {
    id: 2,
    title: "Double",
    description: "Double bed / Two single beds",
  },
  {
    id: 1,
    title: "Triple",
    description: "Double bed plus One single bed",
  },
  {
    id: 1,
    title: "Family",
    description: "Two double beds",
  },
];

const Rooms = () => {
  return (
    <section className="container mt-[60px] mb-[60px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-wider pb-5 md:text-3xl">
          Our Rooms
        </h2>
        <p className="text-slate-400/70 text-[14px] md:text-[16px]">
          Choose the ideal room for your holidays!
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-3 w-full">
        {rooms.map((room) => {
          return (
            <div className="pt-10 w-full md:w-1/4 hover:scale-105" key={room.id}>
              <Link href="/rooms">
                <Card className="hover:border-primary transition-all ease-in-out">
                  <CardHeader className="text-center">
                    <CardTitle>{room.title} Room</CardTitle>
                    <CardDescription className="text-slate-400/70 min-h-[60px] pt-3">{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={Single}
                      alt="card-image"
                      width={150}
                      height={300}
                      className="w-full"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Read More</Button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Rooms;
