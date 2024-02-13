import Link from "next/link"

const Navbar = () => {
    return (
        <header className="">
            <div className="bg-white border-gray-200 dark:bg-red-300 rounded-3xl shadow-neutral-950 shadow-md container mx-auto px-2">
                <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                    <Link href="/" className="font-bold text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black p-2">WebsiteAnimeBandung</Link>
                    <input placeholder=" Cari Anime..." className="rounded-xl" />
                </div>
            </div>
        </header>
    )
}

export default Navbar