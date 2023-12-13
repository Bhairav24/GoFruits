// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Cards from "../components/Cards";
// import Carousal from "../components/Carousal";

// export default function Home() {

  
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);
//   const[search, setSearch]=useState('');

//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/create/foodData", {
//       method: "POST",
//       header: {
//         "Content-Type": "application/json",
//       },
//     });
//     response = await response.json();

//     setFoodItem(response[0]);
//     setFoodCat(response[1]);

//     // console.log(response[0],response[1]);
//   };

//   useEffect(() => {
//     loadData();
//   }, [])

//   return (
//     <>
//       <div>
//         <Navbar/>
//       </div>

//       <div>
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//   <div className="carousel-inner" id="carousel"   >

//     <div className="carousel-caption" style={{zIndex:"10"}}>
//     <div class="d-flex justify-content-center">
//       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
//       {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
//     </div>
   
  

//     </div>
//     <div className="carousel-item active">
//       <img src="https://source.unsplash.com/random/300×300/?apple" className="d-block w-100" style={{filter:"brightness(30%)",objectFit:'contain !important'}}alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://source.unsplash.com/random/300×300/?mango" className="d-block w-100" style={{filter:"brightness(30%)",objectFit:'contain !important'}} alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://source.unsplash.com/random/300×300/?guava" className="d-block w-100" style={{filter:"brightness(30%)",objectFit:'contain !important'}} alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//       </div>
//       <div className="container">
//         {

//           foodCat!==[]
//           ?foodCat.map((data)=>{
//             return(<div className="row mb-3">
//             <div key={data._id} className="fs-3 m-3">
//               {data.category_name}
//               </div>
//               <hr/>

//               {foodItem!==[]?foodItem.filter((item)=>(item.category_name=== data.category_name)&&(item.name.toLowerCase().includes(search.toLowerCase()))) 
//               .map(filterItems=>{
//                 return(

//                   <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">

//                       <Cards foodName={filterItems.name}
//                       options={filterItems.options[0]}
//                       imgSrc={filterItems.img}></Cards>

//                     </div>
//                 )
//               }):<div>No such data</div>}
//               </div>
              
              
              
              
//               )


//           })
//           :""
          
//         }

        
//       </div>
//       <div>
//         {" "}
//         <Footer />{" "}
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

//import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState('');
  const BACKURL = process.env.CONNECT_TO_BACK_URL;


  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" >
          
          <div className="carousel-inner" id="carousel">

            <div className="carousel-caption" style={{ zIndex: "9" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2 w-75 bg-white text-dark" type="search"  placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              
              </div>
            </div>
            
            <div className="carousel-item active" >
              <img src="https://img.freepik.com/free-vector/lemon-slice-background_1409-1253.jpg?w=1380&t=st=1690313541~exp=1690314141~hmac=24da01499d3ed54d6fdbbff4c5f69bcbbe233a817fc6c55641969ba1a8a594bd" className="d-block  w-100" style={{ filter: "brightness(85%)"}} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1474564862106-1f23d10b9d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1191&q=80" className="d-block w-100" style={{ filter: "brightness(85%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="d-block w-100" style={{ filter: "brightness(85%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {
          foodCat.length !== 0 ? foodCat.map((data) => (
            <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3"style={{ color: 'black' ,fontWeight:'bold'}} >
                {data.category_name}
              </div>
              <hr />

              {foodItem.length !== 0 ? foodItem
                .filter((item) => (item.category_name === data.category_name) && item.name.toLowerCase().includes(search.toLowerCase()))
                .map(filterItems => (
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3" >
                    <Cards
                    foodItem={filterItems}
                      options={filterItems.options[0]}
                     
                    />
                  </div>
                )) : <div>No such data</div>}
            </div>
          )) 
          
          : ""
        }
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
