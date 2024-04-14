import React from "react";

export const renderHeading = (data: any, index: number) => {
  return (
    <h1 className="font-bold text-[8vw] mt-5" key={index}>{data.content}</h1>
  )
}

export const renderParagraph = (data: any, index: number) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.content }} key={index} className="mt-2 text-[4vw]"></div>
  )
}

export const renderImages = (data: any, index: number) => {
  return (
    <div className="relative">
      <div className="h-[25vh] overflow-hidden">
        {
          data.url && data.url.map((item: any) => {
            return <img src={'http://localhost:8000/storage/' + item} alt={item + ' image'} key={index} className="mt-2" />
          })
        }
      </div>
      <div onClick={(event) => seeMore(event.target)} data-view="less" className="w-full h-[5vh] bg-black opacity-75 absolute bottom-0 flex justify-center items-center font-bold">
        See More
      </div>
    </div>
  )
}

const seeMore = (ele: any) => {
  let imageContainer = ele.previousElementSibling
  if (ele.dataset.view == 'less') {
    imageContainer.classList.remove('h-[25vh]')
    ele.textContent = 'See Less'
    ele.dataset.view = 'all'
  } else {
    imageContainer.classList.add('h-[25vh]')
    ele.textContent = 'See More'
    ele.dataset.view = 'less'
  }
}