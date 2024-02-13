import Link from "next/link"
import AnimeList from "@/components/AnimeList"

const Home = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=9`)
  const anime = await response.json()

  anime.data
  
  return (
    <div>
      <div className="py-4 px-8 flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Populer anime</h1>
        <Link href='/populer' className="md:text-md text-sm underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 bg-red-300  rounded-2xl p-4 container mx-auto">
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
