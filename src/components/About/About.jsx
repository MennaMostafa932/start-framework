import React from 'react'

export default function About() {
  return (
    <>
      <section className="w-100 bg-info about-section text-white xx text-center">
      <div className="container">
        <h2 className="fw-bold text-uppercase">About Component</h2>

        <div className="d-flex align-items-center justify-content-center gap-2 my-4">
          <div className="bg-white" style={{ height: '2px', width: '60px' }}></div>
          <div className="fs-5">★</div>
          <div className="bg-white" style={{ height: '2px', width: '60px' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 p-2">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as
              optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5 p-2">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as
              optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
