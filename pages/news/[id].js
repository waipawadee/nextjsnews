/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'
import MainLayout from '../../src/components/layouts/MainLayout'

import NewsService from '../../src/services/NewsService'
import { useEffect, useState } from 'react'

const NewsDetail = () => {
  
  const router = useRouter()

  // สร้างตัวแปรแบบ state ไว้เก็บข้อมูลข่าวที่ได้จาก api
  const [news, setNews] = useState({})

  useEffect(()=>{
    if(!router.isReady) return      
    NewsService.getNewsById(router.query.id).then(res=>{
      console.log(res.data)
      setNews(res.data)
    })
  },[router.isReady])
  
  return (
    <MainLayout>

        <div className="bg-primary py-4">
            <div className="container">
                <h1 className='text-white'>{news.topic}</h1>
            </div>
        </div>

        <div className="container py-2">
            <img src={news.imageurl} alt="" width={'100%'} className="rounded"/>
            <p className='pt-2'>Published: {news.created_at}</p>
            <p>{news.detail}</p>
        </div>
        
    </MainLayout> 
  )
}

export default NewsDetail