import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function page() {
  return (
    <section className="container mt-10">
      <h1 className="text-4xl font-bold md:pb-6 text-center">Single Room</h1>
      <div className="w-full h-[400px] mb-10">
        <div className="max-w-[650px] mx-auto ">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/assets/single-room.jpg"
                  alt="room-img"
                  width={400}
                  height={200}
                  className="w-full h-[400px] object-contain"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/assets/single-room.jpg"
                  alt="room-img"
                  width={400}
                  height={200}
                  className="w-full h-[400px] object-contain"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/assets/single-room.jpg"
                  alt="room-img"
                  width={400}
                  height={200}
                  className="w-full h-[400px] object-contain"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/assets/single-room.jpg"
                  alt="room-img"
                  width={400}
                  height={200}
                  className="w-full h-[400px] object-contain"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/assets/single-room.jpg"
                  alt="room-img"
                  width={400}
                  height={200}
                  className="w-full h-[400px] object-contain"
                  priority
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div>
        <h2 className="pb-4 text-2xl">Description</h2>
        <p className="leading-loose pb-4">
          Indulge in the comfort and convenience of our meticulously appointed
          Single Room. Designed with the solo traveler in mind, this cozy
          sanctuary offers everything you need for a restful stay. Step into a
          spacious and beautifully renovated room, adorned with modern
          furnishings and thoughtful touches. Relax and unwind as you enjoy the
          convenience of complimentary high-speed WiFi, a 32-inch flat-screen TV
          with satellite channels, and individual air conditioning.
        </p>
        <p className="leading-loose pb-4">
          {" "}
          The fully equipped kitchenette provides the flexibility to prepare
          your favorite snacks or light meals at your convenience. After a day
          of exploring the vibrant surroundings, retreat to the privacy of your
          en-suite bathroom, where you can rejuvenate with a refreshing shower.
          Step outside onto your private balcony, where you can soak up the
          sunshine and enjoy views of the surrounding area, offering a peaceful
          escape from the hustle and bustle of everyday life.
        </p>
        <p className="leading-loose">
          {" "}
          Experience comfort and tranquility in our Single Room, where every
          detail has been carefully curated to ensure a memorable stay that
          exceeds your expectations.
        </p>
      </div>
      <div className="mt-10 mb-10">
        <h2 className="pb-4 text-2xl">Room Facilities</h2>
        <ul className="grid md:grid-cols-3 ">
          <li>
            <span className="text-primary text-xl">&#10004;</span> Free Wi-fi
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> Large Bed
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> Air
            Conditioning/Heating
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> 32' TV
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> Fully
            Equipped Kitchen
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> Satelite
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> En-suite
            bathroom
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> Hair Dryer
          </li>
          <li>
            <span className="text-primary text-xl">&#10004;</span> Balcony
          </li>
        </ul>
      </div>
    </section>
  );
}

export default page;
