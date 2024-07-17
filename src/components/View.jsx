import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllvideoApi, UpdateCategoryApi } from '../services/allApi'


function View({addVideoStatus,setDragOut}) {
  const [allVideo,setAllVideo] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] =useState([])

  const getAllVideo = async () => {
    const result = await getAllvideoApi()
    setAllVideo(result.data)
  }
  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const result = JSON .parse(e.dataTransfer.getData("dataShare"))
    console.log(result);
    const selectedCategory = result.categoryDeatails 
    const newDeatails = selectedCategory.allVideos.filter((item)=>item.id!=result.videoId)
    console.log(newDeatails);

    const reqBody = {
      categoryName:selectedCategory.categoryName,
      allVideos:newDeatails,
      id:selectedCategory.id
    }
    const response = await UpdateCategoryApi(selectedCategory.id,reqBody)
    console.log(response);
    if (response.status>=200 && response.status<300){
      setDragOut(true)
    }
  }
  console.log(allVideo);
  useEffect(() => {
    getAllVideo()
  }, [addVideoStatus,deleteVideoStatus])

  return (
    <>
      <div className="row w-100 " droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        <h4>All videos</h4>
       {allVideo? 
       allVideo?.map((item)=>(<div className="col-md-3 mt-4">
          <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
        </div>)):
        <p className='text-danger fs-5 mt-5'>Nothing to display</p>}
      </div>
    </>
 
  )
}

export default View
