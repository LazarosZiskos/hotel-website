"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 400 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="">
        <Button
          className="fixed bottom-5 right-5 z-50 cursor-pointer p-2 md:p-4 "
          onClick={scrollToTop}
        >
          <ArrowUp className="group-hover:scale-125" />
        </Button>
      </div>
    )
  );
};

export default ScrollButton;