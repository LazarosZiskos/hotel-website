import Destinations from "@/components/Destinations";
import Landing from "@/components/Landing";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Landing />
      <Rooms />
      <Services />
      <Destinations />
      <Testimonials />
    </>
  );
}

