import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="contact-section py-5 text-center">
      <div className="container">
        <h2 className="fw-bold text-uppercase text-dark">Conatct Component</h2>

        <div className="d-flex align-items-center justify-content-center gap-2 my-4">
          <div className="bg-dark" style={{ height: '2px', width: '60px' }}></div>
          <div className="fs-5 text-dark">★</div>
          <div className="bg-dark" style={{ height: '2px', width: '60px' }}></div>
        </div>

        <form className="w-75 mx-auto text-start">
          <label htmlFor="userName" className="text-capitalize mb-1">userName</label>
          <input type="text" id="userName" className="form-control mb-3" />

          <label htmlFor="userAge" className="text-capitalize mb-1">userAge</label>
          <input type="number" id="userAge" className="form-control mb-3" />

          <label htmlFor="userEmail" className="text-capitalize mb-1">userEmail</label>
          <input type="email" id="userEmail" className="form-control mb-3" />

          <label htmlFor="userPassword" className="text-capitalize mb-1">userPassword</label>
          <input type="password" id="userPassword" className="form-control mb-4" />

          <button type="submit" className="btn btn-success">send Message</button>
        </form>
      </div>
    </section>
    </>
  )
}
