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
    id: 1,
    type: "Single Room",
    details: "Indulge in the ultimate luxury of our newly renovated Junior suite  offering comfort and style with stunning sea and street views. Designed for a maximum of two guests, each room is meticulously furnished with a double-size bed, a 43 Smart TV,and an en-suite bathroom. Our commitment to cleanliness ensures daily room cleaning and regular towel and sheet changes. Enjoy seamless browsing with complimentary high-speed Wi-Fi, and experience a peaceful stay in our soundproof, non-smoking rooms. Discover the epitome of comfort and elegance in our Junior suite, where exceptional hospitality awaits you.",
    img: "/assets/single-room.jpg",
    href: "/rooms/single"
  },
  {
    id: 2,
    type: "Double Room",
    details: "Indulge in the ultimate luxury of our newly renovated Junior suite  offering comfort and style with stunning sea and street views. Designed for a maximum of two guests, each room is meticulously furnished with a double-size bed, a 43 Smart TV,and an en-suite bathroom. Our commitment to cleanliness ensures daily room cleaning and regular towel and sheet changes. Enjoy seamless browsing with complimentary high-speed Wi-Fi, and experience a peaceful stay in our soundproof, non-smoking rooms. Discover the epitome of comfort and elegance in our Junior suite, where exceptional hospitality awaits you.",
    img: "/assets/single-room.jpg",
    href: "/rooms/double"
  },
  {
    id: 3,
    type: "Triple Room",
    img: "/assets/single-room.jpg",
    href: "/rooms/triple",
    details: "Indulge in the ultimate luxury of our newly renovated Junior suite  offering comfort and style with stunning sea and street views. Designed for a maximum of two guests, each room is meticulously furnished with a double-size bed, a 43 Smart TV,and an en-suite bathroom. Our commitment to cleanliness ensures daily room cleaning and regular towel and sheet changes. Enjoy seamless browsing with complimentary high-speed Wi-Fi, and experience a peaceful stay in our soundproof, non-smoking rooms. Discover the epitome of comfort and elegance in our Junior suite, where exceptional hospitality awaits you."
  },
  {
    id: 4,
    type: "Family Room",
    img: "/assets/single-room.jpg",
    href: "/rooms/family",
    details: "Indulge in the ultimate luxury of our newly renovated Junior suite  offering comfort and style with stunning sea and street views. Designed for a maximum of two guests, each room is meticulously furnished with a double-size bed, a 43 Smart TV,and an en-suite bathroom. Our commitment to cleanliness ensures daily room cleaning and regular towel and sheet changes. Enjoy seamless browsing with complimentary high-speed Wi-Fi, and experience a peaceful stay in our soundproof, non-smoking rooms. Discover the epitome of comfort and elegance in our Junior suite, where exceptional hospitality awaits you."
  },
]

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
          <Card className="flex">
            <Image
              src="/assets/single-room.jpg"
              width={400}
              height={400}
              alt={room.img}
              className="w-1/2 rounded-l-lg"
            />

            <CardHeader>
              <CardTitle className="pb-8">{room.type}</CardTitle>
              <CardDescription>
                {room.details}
              </CardDescription>
              <CardContent className="space-x-12 pt-20 pb-0 flex justify-center items-center">
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
