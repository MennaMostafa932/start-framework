import React from 'react'
import img1 from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <>
<header className="bg-info w-100 py-5 text-center text-white">
  <div className="d-flex flex-column align-items-center">
    <img src={img1} alt="avatar" className="rounded-circle mb-4" width="200" />
    <h1 className="fw-bold text-uppercase">Start Framework</h1>
    <div className="d-flex align-items-center gap-2 my-3">
      <div className="bg-white" style={{ height: '2px', width: '60px' }}></div>
      <div className="fs-5">★</div>
      <div className="bg-white" style={{ height: '2px', width: '60px' }}></div>
    </div>
    <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</header>


      
    </>
  )
}
