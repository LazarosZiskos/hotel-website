"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { Reveal } from "./utils/Reveal";

export function Testimonials() {
  return (
    <section className="container pt-[100px] mb-[100px]">
      <Reveal>
        <h2 className="text-2xl font-bold tracking-wider pb-5 md:text-5xl text-center">
          What our <span className="text-primary">guests</span> have to say
          about us?
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-slate-400/70 text-[14px] md:text-[18px] text-center mb-6">
          Read some of the reviews that our guests wrote about us!
        </p>
      </Reveal>

      <Reveal>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </Reveal>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was a great experience spending our holidays at you hotel! It was clean and tidy, and the location is perfect! Overall a 10/10!",
    name: "Andrea Babic",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "The hotel is very nice and renovated, it is clean and the breakfast has almost EVERYTHING! Thank you very much for making our holidays such a great experience!",
    name: "Dana Dimitrescu",
    title: "Hamlet",
  },
  {
    quote:
      "Not much to say! Location 10/10, cleanliness 10/10, facilities 10/10! The only bad thing was that we couldn't stay for longer! :)",
    name: "Maria Papadopoulou",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "The breakfast buffet was amazing, everything homemade and delicious! Also the rooms are very tidy and spacious and the hotel is very close to the sea, only 3min walk! Overall great hotel",
    name: "Tatyana Borisova",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Hotel was as expected! A true 3-star hotel with all that comes with it. Clean, spacious, friendly staff and good food! Will definately visit again!",
    name: "Andrei Sidorof",
    title: "Moby-Dick",
  },
];
