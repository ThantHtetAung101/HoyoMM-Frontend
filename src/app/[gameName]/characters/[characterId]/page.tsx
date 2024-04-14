'use client'
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";
import { renderHeading, renderImages, renderParagraph } from '../../../utils/RenderContent';

type Character = {
  id: number,
  name: string,
  thumbnail: string,
  splash_art: string,
  description: string,
  content: string,
  type: string,
  rarity: string,
  element: string,
  path: string,
  game_id: number,
  world_id: number,
  faction_id: number,
}

export default function Character({ params }: {
  params: { gameName: string, characterId: number }
}) {
  const [character, setCharacter] = useState<Character | null>(null)
  const [content, setContent] = useState([])
  const getCharacterDetail = async (characterId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/characters/${characterId}`, { cache: 'no-store' })
      if (response.ok) {
        const result = await response.json()
        setCharacter(result.data)
        setContent(JSON.parse(result.data.content));
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCharacterDetail(params.characterId)
  }, [])

  return (
    <>
      {
        character &&
        <div className='absolute top-0 bottom-0 left-0 right-0'>
          <Navbar />
          <div className="mt-5 text-white overflow-hidden">
            <img src={'http://127.0.0.1:8000/storage/' + character.splash_art} alt="splash_art" />
            <div className="p-4 relative">
              <h1 className="font-bold text-[8vw]">{character.name}</h1>
              <div dangerouslySetInnerHTML={{ __html: character.description }} className="mt-3 max-h-[25vh] text-[4vw] h-auto overflow-auto"></div>
            </div>
          </div>
          <div className="h-[10px] bg-[#2e2e53] mt-4"></div>
          <div className="p-4 text-white">
            {
              content && content.map((item: any, index: number) => {
                if (item.type === 'heading') {
                  return renderHeading(item.data, index);
                } else if (item.type === 'paragraph') {
                  return renderParagraph(item.data, index);
                } else if (item.type === 'images') {
                  return renderImages(item.data, index);
                } else {
                  return null
                }
              })
            }
          </div>
        </div>
      }
    </>
  )
}