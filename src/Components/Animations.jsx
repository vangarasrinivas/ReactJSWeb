import React from 'react'
import Footer from './Footer'

const Animations = () => {
  return (
    <>
      <div className='container-fluid' style={{overflow :'hidden'}}>
        <h3 className='text-center'>Welcome to AOS animation library</h3>

        <h2 className='my-2'>Fade Animations</h2>
        <div className='mt-5'>
          <h4>Fade Left</h4>

          <div data-aos-delay="500" data-aos="fade-left" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="fade-left" className='border border-4 mt-5 border-success py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="fade-left" className='border border-4 mt-5 border-warning py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>

        <div className='mt-5'>
          <h4>Fade Right</h4>
          <div data-aos-delay="500" data-aos="fade-right" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="fade-right" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="fade-right" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>Fade Up</h4>
          <div data-aos-delay="500" data-aos="fade-up" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="fade-up" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="fade-up" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>Fade Down</h4>
          <div data-aos-delay="500" data-aos="fade-down" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="fade-down" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="fade-down" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>Fade Up Right</h4>
          <div data-aos-delay="500" data-aos="fade-up-right" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="fade-up-right" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="fade-up-right" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>Fade Up Left</h4>
          <div data-aos-delay="500" data-aos="fade-up-left" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="fade-up-left" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="fade-up-left" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>

        <h2>Flip Animations</h2>

        <div className='mt-5'>
          <h4>flip-up</h4>
          <div data-aos-delay="500" data-aos="flip-up" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="flip-up" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="flip-up" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>flip-down</h4>
          <div data-aos-delay="500" data-aos="flip-down" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="flip-down" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="flip-down" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>flip-left</h4>
          <div data-aos-delay="500" data-aos="flip-left" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="flip-left" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="flip-left" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>flip-right</h4>
          <div data-aos-delay="500" data-aos="flip-right" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="flip-right" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="flip-right" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>

        <h2>Slide Animations</h2>

        <div className='mt-5'>
          <h4>slide-up</h4>
          <div data-aos-delay="500" data-aos="slide-up" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="slide-up" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="slide-up" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>slide-down</h4>
          <div data-aos-delay="500" data-aos="slide-down" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="slide-down" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="slide-down" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>slide-left</h4>
          <div data-aos-delay="500" data-aos="slide-left" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="slide-left" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="slide-left" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>
        <div className='mt-5'>
          <h4>slide-right</h4>
          <div data-aos-delay="500" data-aos="slide-right" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="750" data-aos="slide-right" className='border border-4 border-success mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello1
          </div>
          <div data-aos-delay="1000" data-aos="slide-right" className='border border-4 border-warning mt-5 py-3' style={{ paddingInline: '10rem' }}>
            Hello2
          </div>
        </div>


        <div className='mt-5'>
          <h4>Fade Zoom In</h4>
          <div data-aos-delay="500" data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="600" className='border border-4 border-danger py-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="800" data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="900" className='border border-4 border-success py-3 mt-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
          <div data-aos-delay="1100" data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="1200" className='border border-4 border-warning py-3 mt-3' style={{ paddingInline: '10rem' }}>
            Hello
          </div>
         

          
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Animations