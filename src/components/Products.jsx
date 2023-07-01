import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { server } from "../main"
import { add } from "../store/cartSlice"
import { useDispatch } from "react-redux"


const Products = () => { 
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    useEffect(() => {

        const fetchProducts = async () => {
            const {data} = await axios.get(`${server}/products`)
            console.log(data)
            setProducts(data);
        }
        fetchProducts()
    }, []);
    const handleAdd = (product)=>{ 
        dispatch(add(product));
    }   
    return (
        <div className="productsWrapper">
            {
                products.map(product =>(

                    <div className="card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                        <button onClick={()=>handleAdd(product)} className="btn">Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products



