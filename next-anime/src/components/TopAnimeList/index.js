import Image from "next/image"
import Link from "next/link"
import Header from "./Header"


const topAnimeList = ({ api, title }) => {

    return (
        <>

            <Header title={title} />
            <div className=" shadow-neutral-950 shadow-2xl static grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 bg-red-300  rounded-2xl p-8 container mx-auto">
                {api.data.map(data => {
                    return (
                        <>
                            <div key={data.mal_id} className="shadow-xl rounded-md bg-red-100 hover:scale-105">
                                <div className="">
                                    <div>
                                        <Link href={`${data.mal_id}`} className="cursor-pointer">
                                            <div>
                                                <Image src={data.images.webp.image_url} width={350} height={350} alt="..." className="w-full rounded-md max-h-64 object-cover" />
                                            </div>
                                            <div className="p-5">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
                                                    {data.title}
                                                </h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}

            </div>
        </>
    )
}

export default topAnimeList