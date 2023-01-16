import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ColorBox from './Colorbox';
import Red from "../data/Red.js";
import Blue from "../data/blue.js";
import Yellow from "../data/yellow.js";
import Green from "../data/green.js";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Cart from './cart';
import { useState } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';

const Color = () => {
  const [colorValue, setcolorValue] = useState([])
  const [color1Value, setcolor1Value] = useState([])

  const Colorhandler = (color) => {
    axios.get(`http://54.145.86.185:8200/api/getColorList/?color=${color}`)
    .then((res)=> {
     
        setcolorValue(res.data.data)
        
        
  
        })
      }
     
    //   const addItem  = (item) => {
    //     // console.log([...item]);
    //     // setcolor1Value((item) = ({item}))
    //     // setcolor1Value([...color1Value,item])
    //     // setcolor1Value((prev) => ({...prev, item}))
    //     // setcolor1Value((props) => ({...props, item}))
    // }
    const { addItem } = useCart();
  
  
  return (
    <>
      <div className="container">
        <Link to="/Living"><ArrowBackIosIcon style={{ fontSize: 'small' }} />Select another photos</Link>
        <div class="row justify-content-between gy-5">
          <div class="col-lg-8 order-1 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji' }}>Browse Paint Colors</h1>
            <div class="tab-content" data-aos="fade-up" data-aos-delay="300">
              <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ placeSelf: 'center' }}>
               
                <li class="nav-item" onClick={() => Colorhandler('Red')}>
                  <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters" style={{ height: '50px', width: '50px', backgroundColor: 'red', borderRadius: '50px' }}>

                  </a>
                </li>

                <li class="nav-item" onClick={() => Colorhandler('Blue')}>
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast" style={{ height: '50px', width: '50px', backgroundColor: 'blue', borderRadius: '50px' }}>
                  </a>
                </li>

                <li class="nav-item" onClick={() => Colorhandler('Yellow')}>
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch" style={{ height: '50px', width: '50px', backgroundColor: 'yellow', borderRadius: '50px' }}>
                  </a>
                </li>

                <li class="nav-item" onClick={() => Colorhandler('Green')}>
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner" style={{ height: '50px', width: '50px', backgroundColor: 'green', borderRadius: '50px' }}>
                  </a>
                </li>

              </ul>

              <div class="tab-pane fade active show" id="menu-starters">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {colorValue.map((item, index) => {
                 
                  return (

                    <ColorBox
                      img={item}
                      // addItem = {addItem}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      item={item}
                      key={index} />
                  )

                })}
              </div>

              <div class="tab-pane fade" id="menu-breakfast">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {colorValue.map((item, index) => {
                 
                 return (

                   <ColorBox
                     img={item}
                     addItem = {addItem}
                     title={item.title}
                     desc={item.desc}
                     price={item.price}
                     item={item}
                     key={index} />
                 )

               })}
              </div>

              <div class="tab-pane fade" id="menu-lunch">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {colorValue.map((item, index) => {
                 
                 return (

                   <ColorBox
                     img={item}
                     addItem = {addItem}
                     title={item.title}
                     desc={item.desc}
                     price={item.price}
                     item={item}
                     key={index} />
                 )

               })}
              </div>

              <div class="tab-pane fade" id="menu-dinner">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {colorValue.map((item, index) => {
                 
                 return (

                   <ColorBox
                     img={item}
                     addItem = {addItem}
                     title={item.title}
                     desc={item.desc}
                     price={item.price}
                     item={item}
                     key={index} />
                 )

               })}
              </div>

              
            </div>
          </div>

          <div class="col-lg-4 order-2 order-lg-2 text-center text-lg-start" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", marginBottom: '-20vh' }}>
          <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji', paddingBottom: '2vh' }}><ColorLensIcon />Saved Colors</h1>
         
          <Cart color1Value={color1Value} />
          </div>

        </div>
      </div>

    </>
  );
}

export default Color;