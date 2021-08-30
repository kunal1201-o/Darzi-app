import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
const Women = () => {
    let history= useHistory();
    return (
        <>
            <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
                    WOMEN
                </div>
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
            
            <div className="bigblock">

          
      <div className="block">
          <div className="box">MEN POLO SHIRTS</div>
          <div className="box">MEN CASAUL SHIRTS</div>
      </div>
      <div className="block">
          <div className="box">MEN JEANS</div>
          <div className="box">MEN SHOES</div>
      </div> 
      </div>
        </>
    )
}

export default Women
