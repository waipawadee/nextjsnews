import react from 'react';
import styled from 'styled-components'
import MainLayout from "../src/components/layouts/MainLayout";
import NewsService from '../src/services/NewsService'
import { useEffect, useState } from 'react'
import Link from "next/link";
const index = () => {
 
  // สร้างตัวแปรแบบ state ไว้เก็บข้อมูลข่าวที่ได้จาก api
  const [news, setNews] = useState([])

  useEffect(()=>{
    NewsService.getAllNews().then(res=>{
      console.log(res.data)
      setNews(res.data)
    })
    
  },[])

  return (
    <MainLayout title="Home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/slides/food1.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/slides/food2.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/slides/food3.jpg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <h2 className="mt-5 mb-4">ข่าวล่าสุด</h2>
        <div className="row">
        {
            news.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card">
                <img src={item.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2>{item.topic}</h2>
                  <p className="card-text">{item.detail.substring(0,150)}</p>
                  <Link href="/news/[id]" as ={`/news/${item.id}`}>
                  <a  className="btn btn-primary">อ่านต่อ</a>
                  </Link>
                </div>
              </div>
            </div>
            ))
          }

   
        </div>

      </div>
    </MainLayout>
 
    )
}
export default index
