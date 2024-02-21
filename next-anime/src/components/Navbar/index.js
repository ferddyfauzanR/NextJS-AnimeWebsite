import Link from "next/link"

const Navbar = () => {
    return (
        <header className="pt-1 pb-14">
            <div className="bg-white border-gray-200 dark:bg-red-300 rounded-3xl shadow-neutral-950 shadow-2xl container mx-auto px-2">
                <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                    <div className="md:px-2 px-4">
                        <Link href="/" className="font-bold text-white text-xl hover:scale-105">WebsiteAnimeBandung</Link>
                    </div>
                    <div className="md:flex-row flex-col ">
                        
                        <div className="flex md:justify-end justify-start gap-2 md:pl-4 md:pr-4 pl-4 pr-8">
                            <button className=" text-white hover:scale-105">Login</button>
                            <button className=" text-white hover:scale-105">Register</button>
                        </div>
                        <div className="md:px-2 px-4">
                        <input placeholder=" Cari Anime..." className="rounded-xl bg-gray-100 " />
                        </div>
                    </div>

                </div>
                <div className="pl-8">
                    <Link href="/" className="bg-red-500 text-white rounded-xl px-3 pt-2 pb-4 text-sm font-medium">Home</Link>
                    <Link href="/genreList" className="text-white  hover:bg-red-400 hover:text-white rounded-md px-3 pt-2 pb-4 m-1 text-sm font-medium">GenreList</Link>
                    <Link href="/" className="text-white  hover:bg-red-400 hover:text-white rounded-md px-3 pt-2 pb-4 m-1 text-sm font-medium">Anime News</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar