import React from 'react'
import img2 from '../../assets/poert1.png'
import img3 from '../../assets/port2.png'
import img4 from '../../assets/port3.png'



export default function Portfolio() {
  const portfolioItems = [
    { id: 1, image: img2, alt: 'cabin' },
    { id: 2, image: img3, alt: 'cake' },
    { id: 3, image: img4, alt: 'circus' },
    { id: 1, image: img2, alt: 'cabin' },
    { id: 2, image: img3, alt: 'cake' },
    { id: 3, image: img4, alt: 'circus' }
  ];
  return (
    <>
      <section className="contact-section py-5 text-center">
      <div className="container">
        <h2 className="fw-bold text-uppercase text-dark">portfolio component</h2>

        <div className="d-flex align-items-center justify-content-center gap-2 my-4">
          <div className="bg-dark" style={{ height: '2px', width: '60px' }}></div>
          <div className="fs-5 text-dark">★</div>
          <div className="bg-dark" style={{ height: '2px', width: '60px' }}></div>
        </div>

        <div className="row g-3 mt-4">
          {portfolioItems.map((item) => (
            <div className="col-lg-4 col-md-6 " key={item.id}>
              <div className="portfolio-item-card position-relative">
                <img src={item.image} className="img-fluid" alt={item.alt} />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
