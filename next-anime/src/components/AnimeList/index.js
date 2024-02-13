import Image from "next/image"
import Link from "next/link"


const AnimeList = ({title,images,id}) => {
    return (
            <div className="">
            <Link href={`${id}`} className="cursor-pointer">
                <Image src={images} width={350} height={350} alt="..." className="w-full rounded-md max-h-64 object-cover"/>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>
            </div>
            
    )
}

export default AnimeList