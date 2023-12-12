import React, { useEffect, useState ,useRef} from "react";
import { useDispatchCart,useCart } from "./ContextReducer";
export default function Cards(props) {

let dispatch=useDispatchCart();
let data=useCart()

const priceRef=useRef();
let options=props.options;

let priceOptions=Object.keys(options);

const [qty,setQty]=useState(1)
const[size, setSize]=useState("")




const handleAddToCart= async()=>
{


  let food=[]
  for(const item of data){
    if(item.id===props.foodItem._id){
      food=item;
      break;
    }
  }


  if(food!==[]){
    if(food.size===size){
      await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})

      return
    }
    else if(food.size !==size){
      await dispatch({type:'ADD',id:props.foodItem._id, name:props.foodItem.name,price:finalPrice,qty:qty,size:size})

      return
    }

    return
  }

    await dispatch({type:'ADD',id:props.foodItem._id, name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
 

//await console.log(data)
}

let finalPrice=qty*parseInt(options[size]);

useEffect(()=>
{
  setSize(priceRef.current.value)
},  [])

  return (
    <div>
      <div>
        <div
          className="card m-2  "
          style={{ maxHeight: "3600px", width: "20rem", marginTop: "50px" , border: '2px solid #ccc',color:'black',backgroundColor:'white',boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"}}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"220px",objectFit:"fill"}} />
          <div className="card-body ">
     
          <h5 className="card-title" >{props.foodItem.name.toUpperCase()}</h5>


            <div className="container w-100"style={{ marginTop: "20px"}} >
            
            
              <select className="m-1 rounded" style={{backgroundColor:'white',color:'black'}} onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(5), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i}KG
                    </option>
                  );
                })}
              </select>

              <select className="m-1 h-100 rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)} style={{backgroundColor:'white',color:'black'}}>
             { priceOptions.map((data)=>
             {
              return <option key={data} value={data}>{data}</option>
             })}
              </select>
              <div className="d-inline h-100 fs-5">
                
                ₹{finalPrice}/-

              </div>
            </div>
          </div>
       

          <hr>
          </hr>
          <div className="d-flex justify-content-center mb-3 " >
          <button className={"btn justify-center "} style={{
    backgroundColor: "#2bb24c",
    color: "white",
    borderRadius: "4px",
    padding: "10px 66px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    
  }}
  onClick={handleAddToCart} >  Add To Cart</button></div>
        </div>
      </div>
    </div>
  );
}
