import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {  useDispatch, useSelector } from 'react-redux';
import "../App.css"
import fot from "/src/image/footok.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { removedata } from './Redux/Loginslice';

const MAIN=styled.div`
    width: 100%;
   height: auto;
`

const SEC=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    cursor: pointer;
    transition: transform 5s ease;
  :hover {
    transform: scale(0.9);
  }
`

const MAIN3=styled.div`
margin-top: 50px;
height: 700px;
`
const NAME=styled.div`
height: 100px;
`
const FIN=styled.div`
margin-top:-20px;
height: 250px;
background-color: #0087fd;

`
const NAV=styled.div`
width: 100%;
height: 720px;

border-radius: 20px;
padding-top: 10px;


`
const LAST=styled.div`
    height: 518px;
    background-color: #78a9d4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -93px;

  
`



const Homepage = () => {
  const localvalue=useSelector((state)=>state.login.loginData)
  console.log(localvalue);
  const Id=localvalue?. userid
  const dispatch= useDispatch()
  function display(){
    dispatch(removedata())
    }
  
  return (
    <MAIN>
       <div className='nav'>
            <img className='imge' src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20241204143845.jpg" alt="" />
            <h1 className='headd'>WELCOME TO KERALA</h1>
    
        <Dropdown className='drop'>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
      MORE
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Link to={'/top'}> <Dropdown.Item href="#/action-1">TOP 10 PLACES</Dropdown.Item></Link>
       <Link to={'/about'}> <Dropdown.Item href="#/action-2">ABOUT</Dropdown.Item></Link>
       <Link to={'/profile'}> <Dropdown.Item href="#/action-3">PROFILE</Dropdown.Item></Link>
       <Link to={'/ticket'}> <Dropdown.Item href="#/action-3">TICKET</Dropdown.Item></Link>
      <Dropdown.Item href="#/action-3" onClick={display}>LOGOUT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </div>
    

     
     <NAV>
     <iframe width="100%" height="720px" src="https://www.youtube.com/embed/JCAQiQP5sEE?si=53v_wGMRLaK_Vgxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

     </NAV>
  
     <NAME><h1 className='headtext' >TOURIST PLACES IN KERALA</h1> 
     <p className="line">____________________________________________________________________________________________________</p></NAME>

 
        <SEC>
         
            <div >
             
           <Link to={'/ksd'}> <img height={"450px"} width={"400px"} style={{marginTop:"80px",borderRadius:'18px',}} src="https://www.keralatourism.org/images/ebooks/images/kasaragod.jpg" alt="" /></Link>

            </div>

            <div>
          <Link to={'/knr'}> <img  height={"450px"} width={"400px"}  style={{marginTop:"80px",borderRadius:'18px'}} src="https://www.idodesigns.in/locations/images/web-design-company-kannur-mob-banner.jpg" alt="" /></Link> 
            </div>

            <div>
            <Link to={'/waynad'}><img  height={"450px"} width={"400px"} style={{marginTop:"80px",borderRadius:'18px'}} src="https://ih1.redbubble.net/image.2179738660.5201/fposter,small,wall_texture,product,750x1000.jpg" alt="" /></Link> 
            </div>

<div>
<Link to={'/kozikode'}><img  height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}} src="https://s3.india.com/wp-content/uploads/2024/08/Kozhikode-Famous.jpg##image/jpg" alt="" /></Link>

</div>

<div>
<Link to={'/malppuram'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}}  src="https://i.ytimg.com/vi/fiXAeIV0bWQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC2XOzV8QFa9KiVwN_eORLjscYkRg" alt="" /></Link>

</div>

<div>
<Link to={'/palakkad'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fpalakkadthunb%20-%20500.jpg&w=828&q=75" alt="" /></Link>

</div>

<div>
<Link to={'/thrissur'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}} src="https://i.ytimg.com/vi/CH3qVmT3ELU/hqdefault.jpg" alt="" /></Link>

</div>

<div>
<Link to={'/kochi'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}}  src="https://preview.redd.it/updated-the-logo-after-reading-the-feedback-on-the-previous-v0-mn4h8skdtthd1.png?width=2500&format=png&auto=webp&s=44a51eb4f119a533109b09bfc0f9da443e173b4f" alt="" /></Link>

</div>

<div>
<Link to={'/idukki'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Framakkalmedu-1726917706_75c6c985c06426980b67.webp&w=1920&q=75" alt="" /></Link>

</div>

<div>
<Link to={'/kottayam'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}}  src="https://i.ytimg.com/vi/51SB6LQ4nLc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwU7sSo7MHM3bqkAV8LEwfiW2U5g" alt="" /></Link>

</div>

<div>
<Link to={'/alappuza'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}}  src="https://mir-s3-cdn-cf.behance.net/projects/404/1cd70e176899173.Y3JvcCwyMDQ4LDE2MDIsNDAwLDA.png" alt="" /></Link>

</div>

<div>
<Link to={'/pathanmthitta'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzp0x1lxK5qMccFjlZjcdGu6mR3HFK2WksGO83PzpCHyyVJxh1hZOb7DF5lW3u69dd0cc&usqp=CAU" alt="" /></Link>

</div>

<div>
<Link to={'/kollam'}><img  height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}} src="https://s3.india.com/wp-content/uploads/2024/09/kollam-ecotourism.jpg##image/jpg" alt="" /></Link>

</div>

<div>
<Link to={'/trivandrum'}><img height={"450px"} width={"400px"} style={{marginTop:"103px",borderRadius:'18px'}} src="https://preview.redd.it/trivandrum-is-not-trivandrum-without-v0-qk135wttbyfc1.jpeg?auto=webp&s=ad140269d0f37559a502690968f5d0be63405af4" alt="" /></Link>

</div>
        </SEC>
        <MAIN3>
          <div className='anima'></div>
        </MAIN3>
        <p className="headt">Follow us on :</p>

        <LAST>
            <div className='box' >  <img  style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLj1PbSrMAbL2in3vFChhGTJxdWAqtBrHOw&s" alt=""  />  <p className="font">BRDC</p> </div>
            <div className='box' ><img style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIH5lcnZwinn-A222bxlFt9NMcivr9kMTGdQ&s" alt="" /> <p className="font">DTPC</p> </div>
            <div className='box'  ><img  style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://www.jellyfishwatersports.com/wp-content/uploads/2018/11/KATPS.png" alt="" /> <p className="font">KATPS</p> </div>
            <div className='box'   ><img style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJf2JkDIgB2ZCxdggw9vk7SsA02mhlSKvc6A&s" alt="" /> <p className="font">KITTS</p> </div>
            <div className='box'  ><img  style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCU06kY8ubBkEQoQh4UhGt8O3uGzaJmnsziA&s" alt="" /> <p className="font">KTDC</p> </div>
      

        </LAST>
        <FIN>

       <img className="imgfot" src={fot} alt="" />
           </FIN>
      
    </MAIN>
  )
}

export default Homepage
