import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "linear-gradient(to right, #0d6efd, #0dcaf0)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <div className="container-fluid">

          <Link
            className="navbar-brand fw-bold fs-3 text-white"
            to="/"
          >
            🏥 Hospital App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <Link className="nav-link text-white fw-semibold px-3" to="/">
                Register
              </Link>

              <Link className="nav-link text-white fw-semibold px-3" to="/se">
                Search
              </Link>

              <Link className="nav-link text-white fw-semibold px-3" to="/di">
                Discharge
              </Link>

              <Link className="nav-link text-white fw-semibold px-3" to="/vi">
                View Patients
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavigationBar