import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Menu from '../components/menu'

async function getBannerByGameName(name: string) {
  let gameId = 0
  switch (name) {
    case 'hi3':
      gameId = 1
      break;
    case 'hsr':
      gameId = 2
      break;
    case 'genshin':
      gameId = 3
    default:
      break;
  }
  const response = await fetch(`http://127.0.0.1:8000/api/banners?game_id=${gameId}`, { cache: 'no-store' })

  return response.json()
}

export default async function Game({ params }: {
  params: { gameName: string }
}) {
  const banners = await getBannerByGameName(params.gameName)

  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <Navbar />
        <Banner banners={banners.data} />
        <Menu gameName={params.gameName} />
      </div>
    </>
  )
}