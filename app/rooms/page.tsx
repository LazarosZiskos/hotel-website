import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AirVent,
  BedDouble,
  CigaretteOff,
  CookingPot,
  SatelliteDishIcon,
  ShowerHead,
  Tv,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rooms = [
  {
    id: "single",
    type: "Single Room",
    details:
      "Indulge in the comfort and convenience of our meticulously appointed Single Room. Designed with the solo traveler in mind, this cozy sanctuary offers everything you need for a restful stay. Step into a spacious and beautifully renovated room, adorned with modern furnishings and thoughtful touches. Relax and unwind as you enjoy the convenience of complimentary high-speed WiFi, a 32-inch flat-screen TV with satellite channels, and individual air conditioning.",
    img: "/assets/single-room.jpg",
    href: "/rooms/single",
  },
  {
    id: "double",
    type: "Double Room",
    details:
      "Escape to serenity in our inviting Double Room, designed to provide couples with a haven of relaxation and comfort. Step into a spacious and elegantly furnished room, featuring modern amenities and tasteful decor. Stay connected with complimentary high-speed WiFi and unwind in front of the 32-inch flat-screen TV with satellite channels, offering a wide range of entertainment options. Indulge in the convenience of individual air conditioning, ensuring personalized comfort throughout your stay.",
    img: "/assets/single-room.jpg",
    href: "/rooms/double",
  },
  {
    id: "triple",
    type: "Triple Room",
    img: "/assets/single-room.jpg",
    href: "/rooms/triple",
    details:
      "Experience the ultimate in comfort and convenience in our spacious Triple Room, ideal for families or small groups seeking a memorable stay. Step into a beautifully renovated space, tastefully decorated with modern furnishings and thoughtful touches that create a welcoming atmosphere. Stay connected with complimentary high-speed WiFi and enjoy entertainment on the 32-inch flat-screen TV with satellite channels, providing endless entertainment options for guests of all ages. Keep cool and comfortable with individual air conditioning, ensuring a personalized environment throughout your stay.",
  },
  {
    id: "family",
    type: "Family Room",
    img: "/assets/single-room.jpg",
    href: "/rooms/family",
    details:
      "Create lasting memories with your loved ones in our spacious and inviting Family Room, designed to accommodate families of all sizes. Step into a generously proportioned space, beautifully appointed with modern furnishings and tasteful decor that creates a warm and welcoming ambiance. Stay connected with complimentary high-speed WiFi and enjoy entertainment on the 32-inch flat-screen TV with satellite channels, providing entertainment options for guests of all ages. Individual air conditioning ensures personalized comfort for every member of the family, creating a comfortable environment throughout your stay.",
  },
];

const page = () => {
  return (
    <main>
      <section className="container mt-10 mb-10">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-4xl font-bold">Rooms</h1>
          <p className="text-slate-400/70 italic pt-2">
            Find the room that fits your needs
          </p>
        </div>
        {rooms.map((room) => (
          <div key={room.id} className="mt-8">
            <Card className="flex flex-col lg:flex-row">
              <Image
                src="/assets/single-room.jpg"
                width={400}
                height={400}
                alt={room.img}
                className="rounded-l-lg rounded-r-lg md:w-full"
              />

              <CardHeader>
                <CardTitle className="pb-8">{room.type}</CardTitle>
                <CardDescription>{room.details.slice(0,262) + "..."}</CardDescription>
                <CardContent className="pt-20 gap-4 grid grid-cols-4 xl:flex xl:space-x-6">
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <Wifi />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <BedDouble />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <AirVent />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <Tv />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <SatelliteDishIcon />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <CookingPot />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <CigaretteOff />
                  </div>
                  <div className="rounded-full bg-primary py-2 px-2 w-10 h-10 flex items-center justify-center text-white">
                    <ShowerHead />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end pt-20">
                  <Link href={room.href}>
                    <Button variant="outline">View more...</Button>
                  </Link>
                </CardFooter>
              </CardHeader>
            </Card>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
