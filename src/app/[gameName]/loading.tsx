import loading from '../../../public/assets/menu/hsr/train.gif'
import trail from '../../../public/assets/menu/hsr/trail.png'

export default function Loading() {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0'>
      <div className="flex justify-center items-center h-full">
        <div className="relative">
          <img src={loading.src} alt="loading" />
          <img src={trail.src} alt="trail" className="absolute top-[-25px] w-[100vw]" />
        </div>
      </div>
    </div>
  )
}