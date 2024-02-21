import Header from "@/components/TopAnimeList/Header"

const GenreList = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/anime`)
    const anime = await response.json()
    return (
        <>
            <Header title="Genre List Anime" />
            <div className=" shadow-neutral-950 shadow-2xl static grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 bg-red-300  rounded-2xl p-8 container mx-auto">

                {anime.data.map(data => {

                    return (
                        <>
                            <div key={data.mal_id} className="shadow-xl rounded-md bg-red-100 hover:scale-105">
                            <h3>{data.name}</h3>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}


export default GenreList