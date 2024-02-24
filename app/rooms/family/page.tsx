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
      <h1 className="text-4xl pb-4 font-bold mb-4 text-center">Family Room</h1>
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
          Create lasting memories with your loved ones in our spacious and
          inviting Family Room, designed to accommodate families of all sizes.
          Step into a generously proportioned space, beautifully appointed with
          modern furnishings and tasteful decor that creates a warm and
          welcoming ambiance. Stay connected with complimentary high-speed WiFi
          and enjoy entertainment on the 32-inch flat-screen TV with satellite
          channels, providing entertainment options for guests of all ages.
          Individual air conditioning ensures personalized comfort for every
          member of the family, creating a comfortable environment throughout
          your stay.
        </p>
        <p className="leading-loose pb-4">
          The fully equipped kitchenette offers the flexibility to prepare meals
          or snacks at your convenience, adding an extra layer of convenience to
          your stay. Refresh yourself in the en-suite bathroom, complete with
          all the essentials for your comfort and convenience. Step out onto
          your private balcony to enjoy the fresh air and stunning views,
          offering a peaceful retreat after a day of adventure and exploration.
        </p>
        <p className="leading-loose">
          With ample space and modern amenities, our Family Room is the perfect
          choice for a memorable stay that brings families together and creates
          cherished moments that last a lifetime.
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
