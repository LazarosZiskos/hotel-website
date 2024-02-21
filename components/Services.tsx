import {
  Coffee,
  ConciergeBell,
  Lock,
  Luggage,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Free Wi-Fi",
    description: "Free WiFi on all the premises of the hotel",
    icon: <Wifi />,
    id: 1
  },
  {
    title: "24-hour Reception",
    description: "Our reception works 24/7!",
    icon: <ConciergeBell />,
    id: 2
  },
  {
    title: "Luggage Storage",
    description: "Store your luggage on a safe space, free of charge",
    icon: <Luggage />,
    id: 3
  },
  {
    title: "Safety Box",
    description: "Secure your precious belogings, free of charge",
    icon: <Lock />,
    id: 4
  },
  {
    title: "Restaurant",
    description: "Breakfast and dinner! Ask the reception",
    icon: <UtensilsCrossed />,
    id: 5
  },
  {
    title: "Cafeteria",
    description: "Enjoy a cup of coffe or tea on our cafeteria!",
    icon: <Coffee />,
    id: 6
  },
];

const Services = () => {
  return (
    <section className="container mt-[100px] mb-[100px]">
        <h2 className="text-2xl font-bold tracking-wider pb-5 md:text-5xl text-center">
          Our Services
        </h2>
        <p className="text-slate-400/70 text-[14px] md:text-[18px] text-center mb-6">
          We offer a wide variety of services.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
        <Card key={service.id} className="border-gray shadow-2xl">
          <CardHeader className="">
          <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary py-4 px-4 w-16 h-16 flex items-center justify-center text-white">
                {service.icon}
              </div>
            </div>
            <CardTitle className="text-center mb-4">
              {service.title}
            </CardTitle>
            <CardDescription className="text-[16px] text-center pt-4 text-slate-400">
              {service.description}
            </CardDescription>
          </CardHeader>
        </Card>
        ))}
        </div>


    </section>
  );
};

export default Services;
