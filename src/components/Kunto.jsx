

import React from 'react'

import image from '../assets/coba.png'

export default function Kunto() {
    return (
        <div>
        <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Error Code, <br />
              Start Next New Game
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <button
              className="btn px-5 btn-primary">
              Let's Go 
            </button>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={image}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
