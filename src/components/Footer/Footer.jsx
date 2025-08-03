import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Location */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">LOCATION</h5>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          {/* Around the Web */}
          <div className="col-md-4 mb-4 ">
            <h5 className="text-uppercase fw-bold ps-5">AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3 mt-3 me-5 pe-5">
              <a href="#" className="text-white border rounded-circle p-2 fs-5"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-white border rounded-circle p-2 fs-5"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-white border rounded-circle p-2 fs-5"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="text-white border rounded-circle p-2 fs-5"><i class="fa-solid fa-globe"></i></a>
            </div>
          </div>

          {/* About Freelancer */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black text-center py-3 mt-4">
        <small>Copyright © Your Website {new Date().getFullYear()}</small>
      </div>
    </footer>
    </>
  )
}
