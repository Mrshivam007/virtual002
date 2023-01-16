import { useCart } from 'react-use-cart';

const ColorBox = (props) => {
    // const { addItem } = useCart();
    // console.log(props);

    return ( 
        <>
        <a onClick={() => props.addItem(props.item)}>
            <img src={props.img} style={{width: '16vh', height: '10vh', padding: '1vh', borderRadius: '20px'}} />
        </a>
        
        </>
     );
}
 
export default ColorBox;