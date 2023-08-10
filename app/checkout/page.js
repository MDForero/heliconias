import Form from "@/components/Form";
import TableCheckOut from "@/components/TableCheckOut";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (<div>

        <nav className="">
            <Link href='/'><Image alt="logo" src="/logo.png" width={200} height={100} /></Link>
        </nav>
        <div className="bg-gray-50 flex xl:flex-row  flex-col-reverse  items-center">
            <TableCheckOut />
            <Form />
        </div>
    </div>
    )
}
