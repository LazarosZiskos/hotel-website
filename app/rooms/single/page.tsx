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
      <h1 className="text-4xl pb-4 font-bold mb-4 text-center">Single Room</h1>
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
        <p>
          Indulge in the ultimate luxury with our newly renovated Junior suite.
          Immerse yourself in a comfortable and stylish room, adorned with
          modern and elegant furniture, offering breathtaking sea views and a
          vibrant street view of the Olympic Beach center. Designed to
          accommodate a maximum of two people, our Junior suite provides an
          exquisite blend of tranquility and sophistication.{" "}
        </p>
        <p>
          {" "}
          Each room is meticulously furnished with a plush double-size bed,
          ensuring a restful night's sleep. Stay entertained with a
          state-of-the-art 43' Smart TV featuring satellite channels. The
          en-suite bathroom provides convenience and privacy, completing the
          perfect sanctuary.For your comfort, all rooms are equipped with air
          conditioning, allowing you to create the ideal ambiance according to
          your preference.
        </p>
        <p>
          {" "}
          We take great pride in maintaining impeccable cleanliness standards.
          Our dedicated team ensures that each room is meticulously cleaned on a
          daily basis. Additionally, fresh towels and sheets are provided every
          third day, guaranteeing a consistently refreshed environment
          throughout your stay. Stay connected and enjoy seamless browsing with
          our complimentary high-speed Wi-Fi, available in all rooms. Rest
          assured, our rooms are soundproofed, ensuring a peaceful and
          uninterrupted experience.
        </p>
        <p>
          {" "}
          Furthermore, we maintain a non-smoking policy throughout the premises
          to provide a fresh and healthy atmosphere for all our esteemed guests.
          Discover the epitome of comfort, elegance, and relaxation in our newly
          renovated Junior suite. Whether you're traveling for business or
          leisure, our aim is to surpass your expectations and provide you with
          an exceptional stay.
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
