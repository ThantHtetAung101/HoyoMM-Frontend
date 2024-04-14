'use client'

import Navbar from "@/app/components/navbar";
import cardBg from '../../../../public/assets/bg/card-bg.png'
import fourStar from '../../../../public/assets/rarity/4star.png'
import fiveStar from '../../../../public/assets/rarity/5star.png'
import Link from "next/link";
import { getCharacterList, getElementList, getPathList } from "@/app/utils/apiList";
import { useEffect, useState } from "react";

const renderRarity = (rarity: number) => {
  if (rarity == 4) {
    return fourStar.src
  } else if (rarity == 5) {
    return fiveStar.src
  } else {
    return ''
  }
}

export default function CharacterList({ params }: {
  params: { gameName: string }
}) {
  const [characters, setCharacters] = useState([]);
  const [elements, setElements] = useState([]);
  const [paths, setPaths] = useState([]);
  const [filteredElements, setFilteredElements] = useState<number[]>([])
  const [filteredPaths, setFilteredPaths] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getCharacterList(params.gameName);
      const elementsData = await getElementList(params.gameName);
      const pathsData = await getPathList();
      setCharacters(charactersData.data);
      setElements(elementsData.data);
      setPaths(pathsData.data);
    };

    fetchData();
  }, [params.gameName]);

  const filterElement = async (ele: any) => {
    ele.classList.toggle('border-2')
    if (!filteredElements.includes(ele.dataset.id)) {
      setFilteredElements([...filteredElements, ele.dataset.id]);
    } else {
      const updatedFilteredElements = filteredElements.filter(item => item !== ele.dataset.id);
      setFilteredElements(updatedFilteredElements);
    }
  }

  const filterPath = async (ele: any) => {
    ele.classList.toggle('border-2')
    if (!filteredPaths.includes(ele.dataset.id)) {
      setFilteredPaths([...filteredPaths, ele.dataset.id]);
    } else {
      const updatedFilterPath = filteredPaths.filter(item => item !== ele.dataset.id);
      setFilteredPaths(updatedFilterPath);
    }
  }

  useEffect(() => {
    const filterCharacters = async () => {
      const filteredCharacters = await getCharacterList(params.gameName, JSON.stringify(filteredElements), JSON.stringify(filteredPaths))
      setCharacters(filteredCharacters.data)
    }
    filterCharacters()
  }, [filteredElements, filteredPaths])

  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <Navbar />
        <div className="mt-5 mx-5 text-white">
          {/* Elements */}
          <div className="flex gap-3 items-center">
            <div className="w-[30%]">
              <span className="font-semibold text-[3vw]">Combat Type</span>
            </div>
            <div className="flex justify-evenly w-full">
              {
                elements && elements.map((element: any, index: number) => {
                  return (
                    <button onClick={(event) => filterElement(event.currentTarget)} data-id={element.id} className="w-[8.5vw] h-[8.5vw] p-[0.3rem] bg-black rounded-full flex items-center" key={index}>
                      <img src={'http://127.0.0.1:8000/storage/' + element.thumbnail} alt={element.name} />
                    </button>
                  )
                })
              }
            </div>
          </div>
          {/* Paths */}
          <div className="flex gap-3 items-center mt-2">
            <div className="w-[30%]">
              <span className="font-semibold text-[3vw]">Path</span>
            </div>
            <div className="flex justify-evenly w-full">
              {
                paths && paths.map((path: any, index: number) => {
                  return (
                    <button onClick={(event) => filterPath(event.currentTarget)} data-id={path.id} className="w-[8.5vw] h-[8.5vw] p-[0.4rem] bg-black rounded-full flex items-center" key={index}>
                      <img src={'http://127.0.0.1:8000/storage/' + path.logo} alt={path.name} />
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5 mx-5 gap-5">
          {
            characters && characters.map((character: any, index: number) => {
              return (
                <Link href={`/${params.gameName}/characters/${character.id}`}>
                  <div className="relative overflow-hidden border rounded-2xl w-full h-[18vw]" key={index}>
                    <img src={'http://127.0.0.1:8000/storage/' + character.thumbnail} alt="avatar" className="rounded-tr-2xl z-[-1] absolute left-0 w-[30vw] top-[-40%]" />
                    <img src={cardBg.src} alt="cardBg" className="h-full ms-[20px]" />
                    <img src={'http://127.0.0.1:8000/storage/' + character.path} alt="path" className="absolute top-[-35px] right-[-15px] w-[30vw] opacity-25" />
                    <div className="absolute left-[30vw] top-0 text-white">
                      <div className="flex">
                        <h1 className="text-[5vw] font-bold">{character.name}</h1>
                        <img src={'http://127.0.0.1:8000/storage/' + character.element} alt="element" className="ms-2 mt-1 w-[6vw] h-[6vw]" />
                      </div>
                      <img src={renderRarity(character.rarity)} alt="rarity" className="w-[15vw]" />
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div >
    </>
  )
}