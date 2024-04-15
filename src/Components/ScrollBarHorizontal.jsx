import React, { useEffect, useRef, useState } from 'react'

const ScrollBarHorizontal = () => {
    const containerRef = useRef(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        // Calculate scroll percentage based on container width and scroll position
        const containerWidth =
          containerRef.current.scrollWidth - containerRef.current.clientWidth;
        const scrolled = containerRef.current.scrollLeft;
        const percentage = (scrolled / containerWidth) * 100;
        setScrollPercentage(percentage);
      };
  
      // Add event listener for scroll event
      containerRef.current.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        containerRef && containerRef.current && containerRef.current.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures this effect runs only once after initial render
  
    console.log({ scrollPercentage });
  
    return (
      <div>
        <h4 style={{textAlign:'center', marginTop:'10px', marginBottom:'10px'}}>Horizontal Scroll with Progress Bar</h4>
         <progress
          style={{
            // position: 'absolute',
            // top: '0',
            // left: '0',
            width: '100%',
          }}
          value={scrollPercentage}
          max="100"
        ></progress>
        <div
          ref={containerRef}
          style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}
        >
          {/* Content with horizontal scrolling */}
          <div
            style={{
              width: '5000px',
              height: '100px',
              backgroundColor: 'lightblue',
            }}
          >
            {/* Your content here */}
          </div>
        </div>
       
      </div>
    );
}

export default ScrollBarHorizontal