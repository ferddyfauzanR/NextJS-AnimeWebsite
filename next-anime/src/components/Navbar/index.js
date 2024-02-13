import Link from "next/link"

const Navbar = () => {
    return (
        <header className="pt-4 pb-14">
            <div className="bg-white border-gray-200 dark:bg-red-300 rounded-3xl shadow-neutral-950 shadow-md container mx-auto px-2">
                <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                    <Link href="/" className="font-bold text-white text-xl hover:scale-110 ">WebsiteAnimeBandung</Link>
                    <input placeholder=" Cari Anime..." className="rounded-xl" />
                </div>
                <div className="pl-8">
                <Link href="/" class="bg-red-500 text-white rounded-xl px-3 pt-2 pb-4 text-sm font-medium" aria-current="page">Home</Link>
                <Link href="/" class="text-white  hover:bg-red-400 hover:text-white rounded-md px-3 pt-2 pb-4 m-1 text-sm font-medium">GenreList</Link>
                <Link href="/" class="text-white  hover:bg-red-400 hover:text-white rounded-md px-3 pt-2 pb-4 m-1 text-sm font-medium">Anime News</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar