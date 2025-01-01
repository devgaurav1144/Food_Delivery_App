'use client'
import { useState } from "react";
import RestrurantLogin from "../_components/RestaurantLogin";
import RestrurantSignup from "../_components/RestaurantSignup";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
const Restrurant=()=>{
    const [login,setLogin] = useState(true)
    return(

        <>
        
           <Header/>
        
       <h1>Restrurant Page</h1> 
       {
        login ? <RestrurantLogin/> :<RestrurantSignup/>
       }
        
       
       <button className="button-link" onClick={()=>setLogin(!login)}>
        {login ? "Do not have account ? SignUp" : "Already Have Account ? Login"} </button>
        <Footer/>
        </>
    )
}

export default Restrurant;