"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
const pathname = usePathname();


  return (
    <header>
    <nav>
      <div className="py-5 flex justify-between items-center container">
        <div>
          <h1 className="text-3xl font-bold"><Link href="/">Hotel</Link></h1>
        </div>

        <div>
          <ul className="hidden items-center justify-center gap-8 font-medium md:flex">
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300`} href="/" aria-label="Return to homepage">Home</Link>
            </li>
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/about" ? "text-primary" : ""}`} href="/about" aria-label="Read More about our hotel here">About</Link>
            </li>
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/rooms" ? "text-primary" : ""}`} href="/rooms" aria-label="Read more about our rooms here">Rooms</Link>
            </li>
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/destinations" ? "text-primary" : ""}`} href="/destinations" aria-label="Explore nearby destinations here">Destinations</Link>
            </li>
            <li>
              <Link href="/contact" aria-label="Contact us">
                <Button className="">Contact</Button>
              </Link>
            </li>
            <li>
            <ModeToggle />
            </li>
          </ul>
          <div className="flex md:hidden items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <AlignJustify strokeWidth={1.5}></AlignJustify>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link className="transition-all active:text-primary hover:text-primary ease-in-out duration-300 " href="/" aria-label="Read More about our hotel here">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/about" ? "text-primary" : ""}`} href="/about" aria-label="Read More about our hotel here">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="transition-all hover:text-primary ease-in-out duration-300" href="/rooms" aria-label="Read more about our rooms here">Rooms</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="transition-all hover:text-primary ease-in-out duration-300" href="/destinations" aria-label="Explore nearby destinations here">Destinations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="transition-all hover:text-primary ease-in-out duration-300" href="/contact" aria-label="Contact us">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
