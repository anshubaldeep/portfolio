import React,{useState,useRef,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import img from '../../Assets/logo.png';


const WorkSection=()=>{
    const [dimensions,setDimensions]=useState({height:0,width:0});
    const boxRef = useRef(null);
    useEffect(() => {
        setDimensions({height:boxRef.current.clientHeight,width:boxRef.current.clientWidth});
        
    },[]);

    const handleMove=(e)=>{
            console.log(dimensions);
            console.log(boxRef.current)
            // /*
            //   * Get position of mouse cursor
            //   * With respect to the boxRef.currentement
            //   * On mouseover
            //   */
            // /* Store the x position */
            // const xVal = e.layerX
            // /* Store the y position */
            // const yVal = e.layerY
            
            // /*
            //   * Calculate rotation valuee along the Y-axis
            //   * Here the multiplier 20 is to
            //   * Control the rotation
            //   * You can change the value and see the results
            //   */
            // const yRotation = 20 * ((xVal - dimensions.width / 2) / dimensions.width)
            
            // /* Calculate the rotation along the X-axis */
            // const xRotation = -20 * ((yVal - dimensions / 2) / dimensions)
            
            // /* Generate string for CSS transform property */
            // const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
            
            // /* Apply the calculated transformation */
            // boxRef.current.style.transform = string
          }
          
          

    
        return(
            <Container>
                <p className='section-start'>Work/&gt;</p>
                <h4>Some selected projects.....</h4>
                <br/>
                <div onMouseOver={handleMove} ref={boxRef}>
                <img src={img} alt='project'/>
                </div>
            </Container>
        );
}

export default WorkSection;