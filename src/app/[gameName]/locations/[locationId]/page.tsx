'use client'
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";
import { renderHeading, renderImages, renderParagraph } from '../../../utils/RenderContent';

type World = {
  id: number,
  game_id: number,
  thumbnail: string,
  name: string,
  description: string,
  content: string
}

export default function World({ params }: {
  params: { gameName: string, locationId: number }
}) {
  const [world, setWorld] = useState<World | null>(null)
  const [content, setContent] = useState([])
  const getWorldDetail = async (worldId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/worlds/${worldId}`, { cache: 'no-store' })
      if (response.ok) {
        const result = await response.json()
        setWorld(result.data)
        setContent(JSON.parse(result.data.content));
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getWorldDetail(params.locationId)
  }, [])
  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <Navbar />
        {world &&
          <>
            <div className="mt-5 text-white overflow-hidden">
              <img src={'http://127.0.0.1:8000/storage/' + world.thumbnail} alt="thumbnail" />
              <div className="p-4 relative">
                <h1 className="font-bold text-[8vw]">{world.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: world.description }} className="mt-3 max-h-[25vh] text-[4vw] h-auto overflow-auto"></div>
              </div>
            </div>
            <div className="h-[10px] bg-[#2e2e53] mt-4"></div>

            <div className="mt-3 p-4 text-white">
              <h1 className="font-bold text-[8vw]">Residents</h1>
              <div className="grid grid-cols-5 gap-3 mt-3">
                <div className="w-[18vw] h-[22vw] bg-yellow-500 relative rounded-tr-2xl">
                  <img src="https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/20/9cb4a2305547a5dabf6c30ee58f8245a_185738241261815724.png" alt="avatar" className="rounded-tr-2xl" />
                  <div className="bg-black h-[4vw] w-[18vw] absolute bottom-[2px] left-0 flex justify-center items-center">
                    <span className="text-white text-xs">Acheron</span>
                  </div>
                </div>
                <div className="w-[18vw] h-[22vw] bg-yellow-500 relative rounded-tr-2xl">
                  <img src="https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/11/5308864/65121c1056e26cfe184da72a5bf3ef0c_8289176652754699928.png" alt="avatar" className="rounded-tr-2xl" />
                  <div className="bg-black h-[4vw] w-[18vw] absolute bottom-[2px] left-0 flex justify-center items-center">
                    <span className="text-white text-xs">Luocha</span>
                  </div>
                </div>
                <div className="w-[18vw] h-[22vw] bg-yellow-500 relative rounded-tr-2xl">
                  <img src="https://upload-static.hoyoverse.com/hoyolab-wiki/2023/07/24/250281765/8f0c086968f504bde0b12d6b94b4622c_2558772353835707790.png" alt="avatar" className="rounded-tr-2xl" />
                  <div className="bg-black h-[4vw] w-[18vw] absolute bottom-[2px] left-0 flex justify-center items-center">
                    <span className="text-white text-xs">Dang Heng</span>
                  </div>
                </div>
                <div className="w-[18vw] h-[22vw] bg-yellow-500 relative rounded-tr-2xl">
                  <img src="https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/02/04/2262abfd4d364802d02de83985ce2ccc_1374510882608270077.png" alt="avatar" className="rounded-tr-2xl" />
                  <div className="bg-black h-[4vw] w-[18vw] absolute bottom-[2px] left-0 flex justify-center items-center">
                    <span className="text-white text-xs">Black Swan</span>
                  </div>
                </div>
                <div className="w-[18vw] h-[22vw] bg-yellow-500 relative rounded-tr-2xl">
                  <img src="https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2023/12/25/d8ac43b6abd3b9210deebd8a50eae5d1_4760046445899355689.png" alt="avatar" className="rounded-tr-2xl" />
                  <div className="bg-black h-[4vw] w-[18vw] absolute bottom-[2px] left-0 flex justify-center items-center">
                    <span className="text-white text-xs">Ruan Mei</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-white">
              {
                content &&
                content.map((item: any, index: number) => {
                  if (item.type === 'heading') {
                    return renderHeading(item.data, index);
                  } else if (item.type === 'paragraph') {
                    return renderParagraph(item.data, index);
                  } else if (item.type == 'images') {
                    return renderImages(item.data, index);
                  } else {
                    return null
                  }
                })
              }
            </div>
          </>
        }
      </div>
    </>
  )
}