import React, { useState } from "react";
import "./Navbar.css";
import apple_logo from "../assets/apple_logo.svg";
import search from "../assets/search.png";
import bag from "../assets/bag.png";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    store : false,
    mac : false,
    iPad : false,
    iPhone : false,
    watch : false,
    airpods : false,
    tv : false,
    entertainment : false,
    accessories : false,
    support : false,
  });

  const handleMouseEnter = (item) => {
    setDropdowns((prevState)=>({prevState, [item]: true}));
  }
  const handleMouseLeave = (item) => {
    setDropdowns((prevState)=>({prevState, [item]: false}));
  }



 

  return (
    <>
      <div className="navbar-container">
        <div className="apple-logo">
          <img className="logo" src={apple_logo} alt="Apple Logo" />
        </div>

        <ul className="list-container">
        <li
          onMouseEnter = {()=>handleMouseEnter('store')}
          > 
          <a href="#">Store</a>
         
          {dropdowns.store && (
            

            <div className="dropdown-container" onMouseLeave = {()=>handleMouseLeave('store')}>
              
            <ul className="dropdown1">
              <li>Shop</li>
              <li><a href="#">Shop the Latest</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Apple Watch</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          
            <ul className="dropdown2">
              <li>Quick Links</li>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Ways to buy</a></li>
             
            </ul>
            <ul className="dropdown3">
              <li>Shop Special Stores</li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Business</a></li>
  
             
            </ul>
            
            </div>
          ) } 
          
          </li>
  
    
          <li
          onMouseEnter = {()=>handleMouseEnter('mac')}
          ><a href="#">Mac</a>
          {dropdowns.mac && (
            

            <div className="dropdown-container" onMouseLeave = {()=>handleMouseLeave('mac')}>
              
            <ul className="dropdown1">
              <li>Explore Mac</li>
              <li><a href="#">Explore All Mac</a></li>
              <li><a href="#">MacBook Air</a></li>
              <li><a href="#">MacBook Pro</a></li>
              <li><a href="#">iMac</a></li>
              <li><a href="#">Mac Mini</a></li>
              <li><a href="#">Mac Studio</a></li>
              <li><a href="#">Mac Pro</a></li>
              <li><a href="#">Displays</a></li>
              <li><strong style={{color:"white"}}>Compare Mac</strong></li>
              <li><strong style={{color:"white"}}>Switch from PC to Mac</strong></li>
            </ul>
          
            <ul className="dropdown2">
              <li>Shop Mac</li>
              <li><a href="#">Shop Mac</a></li>
              <li><a href="#">Mac Accessories</a></li>
              <li><a href="#">Ways to buy</a></li>
             
            </ul>
            <ul className="dropdown3">


              <li>More from Mac</li>
                <li>
                  <a href="#">Mac Support</a>
                </li>          
                <li><a href="#">AppleCare+ for Mac</a></li>
                <li>
                  <a href="#">macOS Sequoia</a>
                </li>            
                <li><a href="#">Apple Intelligence</a></li>
                <li>
                  <a href="#">Apps by Apple</a>
                </li>            
                <li>
                  <a href="#">Continuity</a>
                </li>         
                <li>
                  <a href="#">iCloud+</a>
                </li>      
                <li>
                  <a href="#">Mac for Business</a>
                </li>               
                <li>
                  <a href="#">Education</a>
                </li>        
            </ul>
            
            </div>
          )}
          
          
          </li>

          <li
          onMouseEnter = {()=>handleMouseEnter('iPad')}

          
          ><a href="#">iPad</a>
          {dropdowns.iPad && (
            

            <div className="dropdown-container" onMouseLeave = {()=>handleMouseLeave('iPad')}>
              
            <ul className="dropdown1">
            <li>Explore iPad</li>
               <li><a href="#">Explore All iPad</a></li>
               <li>
                 <a href="#">iPad Pro</a>
               </li>        <li>
                 <a href="#">iPad Air</a>
               </li>        <li>
                 <a href="#">iPad</a>
               </li>    <li>
                 <a href="#">iPad mini</a>
               </li>         <li>
                 <a href="#">Apple Pencil</a>
               </li>            <li>
                 <a href="#">Keyboards</a>
               </li>         <li>
                 <strong style={{color:"white"}}>Compare iPad</strong>
               </li>            <li>
                 <strong style={{color:"white"}}>Why iPad</strong>
               </li>     </ul>
          
            <ul className="dropdown2">
            <li>Shop iPad</li>
            <li>
              <a href="#">Shop iPad</a>
            </li>      
            <li><a href="#">iPad Accessories</a></li>
            <li>
              <a href="#">Ways to Buy</a>
            </li>         
            </ul>


            <ul className="dropdown3">
            <li>More from iPad</li>
            <li>
              <a href="#">iPad Support</a>
            </li>      
            <li><a href="#">AppleCare+ for iPad</a></li>
            <li>
              <a href="#">iPadOS 18</a>
            </li>   
            <li><a href="#">Apple Intelligence</a></li>
            <li>
              <a href="#">Apps by Apple</a>
            </li>       
            <li>
              <a href="#">iCloud+</a>
            </li> 
            <li>
              <a href="#">Education</a>
            </li>       
            </ul>
            
            </div>
          )}
          
          </li>
          <li
          onMouseEnter = {()=>handleMouseEnter('iPhone')}

          
          ><a href="#">iPhone</a>
          {dropdowns.iPhone && (
            

            <div className="dropdown-container" onMouseLeave = {()=>handleMouseLeave('iPhone')}>
              
            <ul className="dropdown1">
            <li>Explore iPhone</li>

               <li><a href="#">Explore All iPhone</a></li>
               <li>
                 <a href="#">iPhone 16 Pro</a>
               </li>          <li>
                 <a href="#">iPhone 16</a>
               </li>      <li>
                 <a href="#">iPhone 15</a>
               </li>      <li>
                 <a href="#">iPhone 14</a>
               </li>      <li>
                 <a href="#">iPhone SE</a>
               </li>      <li>
                 <strong style={{color:"white"}}>Compare iPhone</strong>
               </li>           <li><strong style={{color:"white"}}>Switch from Android</strong></li>     
               </ul>
          
            <ul className="dropdown2">
            <li>Shop iPhone</li>
             <li>
               <a href="#">Shop iPhone</a>
             </li>      <li><a href="#">iPhone Accessories</a></li>
             <li>
               <a href="#">Apple Trade In</a>
             </li>          <li>
               <a href="#">Ways to Buy</a>
             </li>       </ul>


            <ul className="dropdown3">
            <li>More from iPhone</li>
            <li>
              <a href="#">iPhone Support</a>
            </li>      <li><a href="#">AppleCare+ for iPhone</a></li>
            <li>
              <a href="#">
                iOS 18
                Apple Intelligence
              </a>
            </li>          <li>
              <a href="#">Apps by Apple</a>
            </li>     <li>
              <a href="#">iPhone Privacy</a>
            </li>      
            <li>
              <a href="#">
                iCloud+ </a></li>
                <li><a href="#">Wallet</a></li>
                <li><a href="#">Siri</a></li>
             
             </ul>
            
            </div>
          )}
          
          </li>
       
          <li><a href="#">Watch</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">TV & Home</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Support</a></li>
        </ul>

        <div className="search-bag-container">
          <img className="search-icon" src={search} alt="Search Icon" />
          <img className="bag-icon" src={bag} alt="Bag Icon" />
        </div>
      </div>
      <div className="para-content">
        <span>
          Get up to ₹10000.00 instant cashback with eligible cards.± Plus up to
          12 months of No Cost EMI. <a href="Shop >">Shop</a>
        </span>
      </div>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import apple_logo from "../assets/apple_logo.svg";
// import search from "../assets/search.png";
// import bag from "../assets/bag.png";

// const Navbar = () => {

//   return (
//     <>
//     <div className="navbar-container">
//       <div className="apple-logo">
//         <img className="logo" src={apple_logo} alt="" />
//       </div>

//       <ul className="list-container">
//         <li >Store</li>
//         <li>Mac</li>
//         <li>iPad</li>
//         <li>iPhone</li>
//         <li>Watch</li>
//         <li>AirPods</li>
//         <li>TV & Home</li>
//         <li>Entertainment</li>
//         <li>Accessories</li>
//         <li>Support</li>
//       </ul>

//       <div className="search-bag-container">
//         <img className="search-icon" src={search} alt="" />
//         <img className="bag-icon" src={bag} alt="" />
//       </div>
//     </div>
//     <div className="para-content">
//       <span>Get up to ₹10000.00 instant cashback with eligible cards.± Plus up to 12 months of No Cost EMI. <a href="Shop >">Shop</a></span>
//     </div>
//     </>
//   );
// };

// export default Navbar;
