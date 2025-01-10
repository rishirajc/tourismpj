import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import fot from "/src/image/foot.png"

const MAIN=styled.div`
width: 100%;
min-height: 140vh;
background: #2986db;
`
const NAV=styled.div`
width: 100%;
height: 110px;
background-color: #ffffff;
padding-left: 289px;
display: flex;
`
const FIN=styled.div`
margin-top:-20px;
height: 250px;
background-color: #78a9d4;

`

const SEC=styled.div`
width: 100%;
background-color: #78a9d4;
padding-top: 112px;
padding-left: 126px;
height: 2080px;

cursor: pointer;
    transition: transform 5s ease;
  :hover {
    transform: scale(0.9);
  }
`
const LAST=styled.div`
width: 100%;
    background-color:#e4e1e1;
height: 300px;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
`

const Topplaces = () => {
  return (
    <MAIN>
      <NAV>
        <img  width={'150px'} height={'100px'} src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/Kerala_Tourism_8MBbARQ.jpg" alt="" />
        <h1 style={{marginLeft:"8px",marginTop:'33px',fontFamily:"math"}}>TOP 10 TOURIST PLACES IN KERALA</h1>
      </NAV>
      <SEC>
       <Link to={'/periyar'}> <img style={{borderRadius:'18px'}}  width={"350px"} height={'400px'} src="https://www.studyiq.com/articles/wp-content/uploads/2023/04/01193018/Periyar-national-park.jpg" alt="" /></Link> 
  <Link to={'/athirapally'}><img  width={"350px"} height={'400px'} style={{marginLeft:'100px',borderRadius:'18px'}} src="https://t3.ftcdn.net/jpg/03/09/80/64/360_F_309806423_jS5B6uzBJMmLOZnF4tW7bB7EQobRSs31.jpg" alt="" /> </Link> 
 <Link to={'/pathman'}> <img   width={"350px"} height={'400px'} style={{marginLeft:'100px',borderRadius:'18px'}}  src="https://i.pinimg.com/736x/c6/e3/3e/c6e33e73a41c294022a85f7f099ff7d7.jpg" alt="" /></Link>
     <Link to={'/edaykkl'}><img   width={"350px"} height={'400px'} style={{marginTop:'112px',borderRadius:'18px'}}  src="https://www.flashpackingkerala.com/wp-content/uploads/2018/12/edakkal-caves-wayanad-kerala-rock-carvings-india-.jpeg" alt="" /></Link>
     <Link to={'/vadakk'}><img  width={"350px"} height={'400px'} style={{marginTop:'112px',marginLeft:'100px',borderRadius:'18px'}}  src="https://live.staticflickr.com/8424/29281753943_8ef3d85016_b.jpg" alt="" /></Link>
     <Link to={'/bakel'}><img  width={"350px"} height={'400px'} style={{marginTop:'112px',marginLeft:'100px',borderRadius:'18px'}} src="https://revolvingcompass.com/wp/wp-content/uploads/2023/09/BekalFort_2.jpg?x42979" alt="" /></Link> 
     <Link to={'/waynd'}><img   width={"350px"} height={'400px'} style={{marginTop:'112px',borderRadius:'18px'}}  src="https://i.pinimg.com/736x/88/23/7a/88237a7616131956653fc331827fdb4b.jpg" alt="" /></Link> 
    <Link to={"/kovalam"}> <img  width={"350px"} height={'400px'} style={{marginTop:'112px',marginLeft:'100px',borderRadius:'18px'}} src="https://i.ytimg.com/vi/dLrlBn8QGo0/sddefault.jpg" alt="" /></Link>
     <Link to={'/alappy'}>  <img  width={"350px"} height={'400px'} style={{marginTop:'112px',marginLeft:'100px',borderRadius:'18px'}} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/469759854.jpg?k=433715849b87a4981268d5c492e3d893888dba0a52c1d3e1b0f9b538b2c4284b&o=&hp=1" alt="" /></Link> 
      <Link to={'/munnartea'}><img   width={"350px"} height={'400px'} style={{marginTop:'112px',marginLeft:'454px',borderRadius:'18px'}}  src="https://s3.india.com/wp-content/uploads/2024/10/munnar-eco-friendly.jpg##image/jpg" alt="" /></Link> 
      </SEC>
  <FIN>

       <img className="imgfot" src={fot} alt="" />
           </FIN>

      
    </MAIN>
  )
}

export default Topplaces
