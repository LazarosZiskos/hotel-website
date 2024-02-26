import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" bg-black/90 px-20">
      <div className="container">
        <div className="pt-10 pb-10 md:flex md:items-center md:justify-between gap-10">
          <div className="pt-8 space-y-10 flex flex-col items-center justify-center">
            <h3 className="text-white font-bold text-5xl ">Hotel</h3>
            <ul className="flex space-x-4">
              <li>
                <Link href="https://facebook.com">
                  <Facebook className="text-slate-400 hover:text-slate-200" />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com">
                  <Instagram className="text-slate-400 hover:text-slate-200" />
                </Link>
              </li>
              <li>
                <Link href="https://gmail.com">
                  <Mail className="text-slate-400 hover:text-slate-200" />
                </Link>
              </li>
            </ul>
          </div>

          <div className=" hidden md:grid grid-cols-2 gap-10 text-white items-center">
            <div className="space-y-6 ">
              <h2 className="text-[18px]">Directory</h2>
              <ul className="space-y-2">
                <li className="text-slate-400 hover:text-slate-200">
                  <Link href="/about">About us</Link>
                </li>
                <li className="text-slate-400 hover:text-slate-200">
                  <Link href="/rooms">Rooms</Link>
                </li>
                <li className="text-slate-400 hover:text-slate-200">
                  <Link href="/destinations">Destinations</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-[18px]">Contact us</h3>
              <ul className="space-y-2">
                <li className="text-slate-400">Tel: +30 23510 61507</li>
                <li className="text-slate-400">Email: ziskoslaz@gmail.com</li>
                <li className="text-slate-400">
                  Address: Thrakis 1, Paralia Katerini
                </li>
              </ul>
            </div>
          </div>
        </div>
            <div>
            <h4 className="text-sm text-center text-primary/60 pb-4 pt-4">&copy; Copyright N.D. Devs 2024</h4>
            </div>
      </div>
    </section>
  );
};

export default Footer;
