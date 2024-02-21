import AnimeList from "@/components/TopAnimeList"
import TopAnimeList from "@/components/TopAnimeList"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=9`)
  const anime = await response.json()

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?limit=20`)
  const anime2 = await response2.json()

  return (
    <div>
      <div className="pb-8">
        <TopAnimeList api={anime} title=" Top Anime" />
      </div>
      <div className="pt-8">
        <AnimeList api={anime2} title=" Anime List "/>
      </div>
    </div>

  )
}

export default Home
