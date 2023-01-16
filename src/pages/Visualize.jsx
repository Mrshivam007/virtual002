import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ColorBox from './Colorbox';
import Red from "../data/Red.js";
import Blue from "../data/blue.js";
import Yellow from "../data/yellow.js";
import Green from "../data/green.js";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Cart from './cart';
const Visualize = () => {

  return (
    <div>
      <div className="container">
        <Link to="/Living"><ArrowBackIosIcon style={{ fontSize: 'small' }} />Select another photos</Link>
        <div class="row justify-content-between gy-5">
          <div class="col-lg-8 order-1 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji' }}>Visualize Your Room</h1>
            <h3 data-aos="fade-up" style={{ paddingTop: '2vh', paddingBottom: '2vh', fontFamily: 'emoji' }}>Click a wall to paint the selected color.</h3>

            <div class="row gy-4" style={{ border: '1px solid #0e0e0e', width: '94%' }}>
              <div>
                <button type="button" class="btn btn-light" style={{ width: '10vh', fontSize: '16px' }}>Reset</button>
                <button type="button" class="btn btn-secondary btn-lg" style={{ borderRadius: '5px 20px' }}>Undo</button>
                <button type="button" class="btn btn-secondary btn-lg" style={{ borderRadius: '5px 20px' }}>Redu</button>
                <button type="button" class="btn btn-light" style={{ width: '22vh', fontSize: '16px' }}>Change your photo</button>
              </div>

              <div class="col-lg-12 position-relative about-img"
                data-aos="fade-up" data-aos-delay="150"> <img src="assets/img/living/1.jpg" alt="" style={{ width: '100%', padding: '2vh', background: '#e0e0e0' }} />

              </div>
            </div>

          </div>

          <div class="col-lg-4 order-2 order-lg-2 text-center text-lg-start" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", marginBottom: '-20vh' }}>
            <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji', paddingBottom: '2vh' }}><ColorLensIcon />Saved Colors</h1>
            <Cart />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Visualize;