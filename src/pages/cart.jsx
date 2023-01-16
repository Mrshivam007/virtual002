import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = (props) => {
//     const { isEmpty, totalUniqueItems, items, totalItems, updateItemQuantity, removeItem, emptyCart } = useCart();
//     if (isEmpty) return <h5>You haven't save any color yet!</h5>
// console.log(props);

    return (
        <>
            {/* <div class="col-lg-4 order-2 order-lg-2 text-center text-lg-start" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", marginBottom: '-20vh' }}> */}
            {/* <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji', paddingBottom: '2vh' }}><ColorLensIcon />Saved Colors</h1> */}
            <div class="d-flex">
                <Link to="/visualize" class="btn-book-a-table" style={{ padding: '8px 18px', borderRadius: '20px', marginBottom: '2vh' }} >Paint your room</Link>
            </div>
            {/* <h5>Cart ({totalUniqueItems})</h5> */}

            <table className="table table-light table-hover m-0">
                <tbody>
                <td style={{ width: '30%' }}> <img src={props.color1Value} style={{ width: '16vh', height: '6vh' }} /> </td>

                   
                </tbody>
            </table>
            {/* </div> */}
        </>
    );
}

export default Cart;