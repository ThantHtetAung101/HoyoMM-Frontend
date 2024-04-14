import Navbar from "@/app/components/navbar";
import { gameDetector } from "@/app/utils/gameDetector";
import Link from "next/link";

async function getLocationList(name: string) {
  let gameId = gameDetector(name)
  const response = await fetch(`http://127.0.0.1:8000/api/worlds?game_id=${gameId}`, { cache: 'no-store' })

  return response.json()
}

export default async function Map({ params }: {
  params: { gameName: string }
}) {
  const locations = await getLocationList(params.gameName)

  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <Navbar />
        <div className="mt-10 mx-5">
          {
            locations && locations.data.map((location: any, index: number) => {
              return (
                <Link href={`/${params.gameName}/locations/${location.id}`}>
                  <div className="relative h-[80px] mb-5 border rounded-2xl" key={index}>
                    <img src={'http://127.0.0.1:8000/storage/' + location.thumbnail} alt="location-bg" className="absolute top-0 left-0 h-[80px] w-full object-cover rounded-2xl blur-[1px] opacity-50" />
                    <p className="ms-5 pt-3 text-2xl font-bold absolute top-0 text-white">{location.name}</p>
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>
    </>
  )
}