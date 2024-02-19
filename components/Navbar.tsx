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
    <nav>
      <div className="py-5 flex justify-between items-center container">
        <div>
          <h1 className="text-3xl font-bold">Hotel</h1>
        </div>

        <div>
          <ul className="hidden items-center justify-center gap-8 font-medium md:flex">
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300`} href="/">Home</Link>
            </li>
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/about" ? "text-primary" : ""}`} href="/about">About</Link>
            </li>
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/rooms" ? "text-primary" : ""}`} href="/rooms">Rooms</Link>
            </li>
            <li>
              <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/destinations" ? "text-primary" : ""}`} href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/contact">
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
                  <Link className="transition-all active:text-primary hover:text-primary ease-in-out duration-300 " href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className={`transition-all hover:text-primary ease-in-out duration-300 ${pathname == "/about" ? "text-primary" : ""}`} href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="transition-all hover:text-primary ease-in-out duration-300" href="/rooms">Rooms</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="transition-all hover:text-primary ease-in-out duration-300" href="/destinations">Destinations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="transition-all hover:text-primary ease-in-out duration-300" href="/contact">Contact</Link>
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
  );
};

export default Navbar;
