import Link from "next/link"

export default function Menu({ gameName }: {
  gameName: string
}) {
  const menu = require(`../../../public/locale/${gameName}/menu.json`)
  console.log('http://localhost:3000/public/assets/menu/hsr/' + menu.characters.image)

  return (
    <>
      <div className="grid grid-cols-3 gap-[10vw] mt-10 mx-5">
        {/* Characters */}
        <Link href={`/${gameName}/characters`} className="flex flex-col justify-center items-center">
          <div className="rounded-full flex justify-center items-center bg-blue-100 w-[10vw] h-[10vw]">
            <img src={`/assets/menu/${gameName}/${menu.characters.image}`} alt='menu' className="w-[8vw] h-[8vw]" />
          </div>
          <p className="text-blue-100 text-[4vw] font-semibold mt-1">{menu.characters.text}</p>
        </Link>
        {/* Weapons */}
        <Link href={`/${gameName}/weapons`} className="flex flex-col justify-center items-center">
          <div className="rounded-full flex justify-center items-center bg-blue-100 w-[10vw] h-[10vw]">
            <img src={`/assets/menu/${gameName}/${menu.weapons.image}`} alt='menu' className="w-[8vw] h-[8vw]" />
          </div>
          <p className="text-blue-100 text-[4vw] font-semibold mt-1">{menu.weapons.text}</p>
        </Link>
        {/* Gears */}
        <Link href={`/${gameName}/gears`} className="flex flex-col justify-center items-center">
          <div className="rounded-full flex justify-center items-center bg-blue-100 w-[10vw] h-[10vw]">
            <img src={`/assets/menu/${gameName}/${menu.gears.image}`} alt='menu' className="w-[8vw] h-[8vw]" />
          </div>
          <p className="text-blue-100 text-[4vw] font-semibold mt-1">{menu.gears.text}</p>
        </Link>
        {/* Map */}
        <Link href={`/${gameName}/locations`} className="flex flex-col justify-center items-center">
          <div className="rounded-full flex justify-center items-center bg-blue-100 w-[10vw] h-[10vw]">
            <img src={`/assets/menu/${gameName}/${menu.locations.image}`} alt='menu' className="w-[8vw] h-[8vw]" />
          </div>
          <p className="text-blue-100 text-[4vw] font-semibold mt-1">{menu.locations.text}</p>
        </Link>
        {/* Books */}
        <Link href={`/${gameName}/readables`} className="flex flex-col justify-center items-center">
          <div className="rounded-full flex justify-center items-center bg-blue-100 w-[10vw] h-[10vw]">
            <img src={`/assets/menu/${gameName}/${menu.readable.image}`} alt='menu' className="w-[8vw] h-[8vw]" />
          </div>
          <p className="text-blue-100 text-[4vw] font-semibold mt-1">{menu.readable.text}</p>
        </Link>
        {/* Beings */}
        <Link href={`/${gameName}/beings`} className="flex flex-col justify-center items-center">
          <div className="rounded-full flex justify-center items-center bg-blue-100 w-[10vw] h-[10vw]">
            <img src={`/assets/menu/${gameName}/${menu.beings.image}`} alt='menu' className="w-[8vw] h-[8vw]" />
          </div>
          <p className="text-blue-100 text-[4vw] font-semibold mt-1">{menu.beings.text}</p>
        </Link>
      </div>
    </>
  )
}