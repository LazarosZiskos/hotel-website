import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Platamon from "../public/assets/Castle-of-Platamonas.jpg";
import { Button } from "./ui/button";

const Try = () => {
  return (
    <section className="container">
      <Card className="group">
        <div className="relative overflow-hidden">
        <Image
            src={Platamon}
            className="w-full rounded-tl-lg rounded-tr-lg"
            alt="image"
            width={50}
            height={50}
          />
          <div className="absolute h-full w-full bg-black/20 flex items-center 
          justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">

            <Button variant="outline">Read More</Button>
          </div>
        </div>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Try;
