import Link from "next/link"

const Header = ({title}) => {
    return (
        <>
            <div className=" pt-0 px-8 flex justify-start items-center">
                <h1 className="absolute text-xl font-bold bg-red-300 pb-4 pt-2 rounded-xl px-2">{title}</h1>
            </div>
            <div className=" pt-4 px-8 flex justify-end items-center ">
                <Link href='/populer' className="absolute pb-8 md:text-md text-sm underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
            </div>
        </>
    )
}

export default Header