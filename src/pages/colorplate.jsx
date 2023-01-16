import { CartProvider } from 'react-use-cart'
import Color from './color';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Colorplate = () => {
  return (
  // const [News, setData] = useState([])
  // const fetchData = () => {
  //   axios.get("http://54.145.86.185:8200/api/getColorList/?color=Red")
  //   .then((res)=> {
     
  //    setData(res.data)

  //   })
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])

  // return (
  //   <div>
  //     <div className='container my-3'>
  //       <div className="row">
  //         <div className="col-4">
  //           <button className="btn btn-primary" onClick={Colorplate}> get img</button>
  //         </div>
  //       </div>
  //     </div>
  //         {
  //           News.map((id) =>{
  //             return (
  //     <div className="container">
  //       <div className="row">

  //         </div>
  //         </div>

  //             )
  //           })
  //         }

       
  //   </div>
  // )

  
    
    

    <CartProvider>
    <Color />
    </CartProvider>


  )

};

export default Colorplate;