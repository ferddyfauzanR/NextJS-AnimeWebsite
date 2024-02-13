import Link from "next/link"
import AnimeList from "@/components/AnimeList"

const Home = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=9`)
  const anime = await response.json()

  anime.data
  
  return (
    <div className="">
      <div className=" pt-0 px-8 flex justify-start items-center">
        <h1 className="absolute text-xl font-bold bg-red-300 pb-4 pt-2 rounded-xl px-2">Populer anime</h1>
      </div>
      <div className=" pt-4 px-8 flex justify-end items-center ">
        <Link href='/populer' className="absolute pb-8 md:text-md text-sm underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      
      
      <div className="static grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 bg-red-300  rounded-2xl p-8 container mx-auto">
      
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-xl rounded-md bg-red-100 hover:scale-105">
          <AnimeList id={data.mal_id} title={data.title} images={data.images.webp.image_url} />
          </div>
        )
       
      })}
      </div>
      
    </div>
    
  )
}

export default Home
