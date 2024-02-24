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
      <h1 className="text-4xl pb-4 font-bold mb-4 text-center">Double Room</h1>
      <div className="w-full h-[400px] mb-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/assets/single-room.jpg"
                alt="room-img"
                width={400}
                height={200}
                className="w-full h-[400px] object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/assets/single-room.jpg"
                alt="room-img"
                width={400}
                height={200}
                className="w-full h-[400px] object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/assets/single-room.jpg"
                alt="room-img"
                width={400}
                height={200}
                className="w-full h-[400px] object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/assets/single-room.jpg"
                alt="room-img"
                width={400}
                height={200}
                className="w-full h-[400px] object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/assets/single-room.jpg"
                alt="room-img"
                width={400}
                height={200}
                className="w-full h-[400px] object-contain"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <h2 className="pb-4 text-2xl">Description</h2>
        <p className="leading-loose pb-4">
          Escape to serenity in our inviting Double Room, designed to provide
          couples with a haven of relaxation and comfort. Step into a spacious
          and elegantly furnished room, featuring modern amenities and tasteful
          decor. Stay connected with complimentary high-speed WiFi and unwind in
          front of the 32-inch flat-screen TV with satellite channels, offering
          a wide range of entertainment options. Indulge in the convenience of
          individual air conditioning, ensuring personalized comfort throughout
          your stay.
        </p>
        <p className="leading-loose pb-4">
          {" "}
          The fully equipped kitchenette allows you to prepare your own meals or
          snacks, adding an extra layer of convenience to your experience.
          Refresh yourself in the en-suite bathroom, complete with all the
          essentials for your comfort and convenience. Step out onto your
          private balcony to enjoy the fresh air and beautiful views, providing
          the perfect backdrop for moments of relaxation and reflection.
        </p>
        <p className="leading-loose">
          {" "}
          Whether you're here for a romantic getaway or a rejuvenating retreat,
          our Double Room offers the perfect blend of style and comfort for an
          unforgettable stay that leaves you refreshed and revitalized.
        </p>
      </div>
      <div className="mt-10 mb-10">
        <h2 className="pb-4 text-2xl">Room Facilities</h2>
        <ul className="grid grid-cols-3 gap-0 ">
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
