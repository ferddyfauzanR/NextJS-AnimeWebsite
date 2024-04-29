import AnimeList from "@/components/AnimeList"

const page = async() => {

    const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime`)
    const anime2 = await response2.json()
    return (
        <>
            <div className="pt-8">
                <AnimeList api={anime2} title=" Anime List " />
            </div>
        </>
    )
}


export default page