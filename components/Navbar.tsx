import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav>
        <div className="container py-5 flex justify justify-between items-center bg-slate-400">
            <div>
                <h1 className="text-3xl font-bold">Hotel Hellas</h1>
            </div>

            <div>
                <ul className="flex items-center justify-center gap-8 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/rooms">Rooms</Link></li>
                    <li><Link href="/destinations">Destinations</Link></li>
                    <li><Link href="/contact"><Button>Contact</Button></Link></li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar