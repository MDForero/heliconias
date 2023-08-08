import TableCheckOut from "@/components/TableCheckOut";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <div className="bg-gray-200">
            <nav className="">
                <Link href='/'><Image src="/logo.png" width={200} height={100} /></Link>
            </nav>
            <TableCheckOut/>
        </div>
    )
}
