import React, { useEffect, useRef, useState } from 'react'
import { useDispatch,useCart } from './ContextReducer'
export default function Card() {
    const priceRef = useRef();
    let dispatch = useDispatch();
    let data = useCart();
    let options = "";
    let priceOptions = Object.keys(options);
    const [qty,setQty] = useState(1)
    const [size,setSize] = useState("")
    const handleAddToCart = async ()=>{
        await dispatch({type:"ADD",id:"1233",price:450,qty,size})
        console.log(dispatch);
        console.log(data)
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "16rem", "maxHeight": "360px" }}>
                    <img src="https://th.bing.com/th/id/OIP.puF6tu-p2kBHlPaOnrELwQHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Tshirt</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 bg-success rounded' ref = {priceRef} onChange={(e)=> setSize(e.target.value)}>
                                {/* {priceOptions.map((data) =>{
                                    return <option key={data} value={data}></option>
                                })} */}
                                <option value="small">Small</option>
                                <option value="large">Large</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                ${finalPrice}/-
                            </div>
                        </div>
                        <div>
                            <hr /> {/* This is correct! */}
                            <button
                                className="btn btn-success justify-center ms-2"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
