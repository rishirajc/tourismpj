import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import { DELETE } from '../Api';
import { useDispatch, useSelector } from 'react-redux';
import { removedata } from './Redux/Loginslice';
const MAIN=styled.div`
    width: 100%;
    min-height: 150vh;
    background: #2986db;
`

const SEC=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 40px;
    cursor: pointer;

`

const MAIN3=styled.div`
height: 661px;
`
const NAV=styled.div`
width: 100%;
height: 720px;
background-image: url("https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center;

padding-top: 10px;

`
const LAST=styled.div`
    height: 218px;
    background: #2986db;
  
`


const Homepage = () => {
  const localvalue=useSelector((state)=>state.login.loginData)
  console.log(localvalue);
  const Id=localvalue?. userid
  
  const dispatch=useDispatch()
  function display(){
  dispatch(removedata())
  }
  return (
    <MAIN>
     
     <NAV>
      
  <Link to={'/top'}> <Button style={{backgroundColor:'lightyellow',marginTop:'571px',marginLeft:"70px"}} variant="success">TOP 10 PLACES</Button>
  </Link>
 <Link to={'/ticket'}> <Button style={{cursor:'pointer',marginLeft:"250px",backgroundColor:'lightyellow'}} variant="link">TICKET</Button></Link>
<Link to={'/about'}><Button style={{cursor:'pointer',marginLeft:"250px",backgroundColor:'lightyellow'}} variant="success">ABOUT</Button></Link> 
<Link to={'/profile'}><Button style={{cursor:'pointer',marginLeft:"250px",backgroundColor:'lightyellow'}} variant="link">PROFILE</Button></Link> 
<button style={{marginLeft:'200px',backgroundColor:'lightyellow'}} onClick={display}>LOGOUT</button>




     </NAV>
 
        <SEC>
         
            <div>
             
           <Link to={'/ksd'}> <img height={"450px"} width={"400px"} style={{marginTop:"80px"}} src="https://www.keralatourism.org/images/ebooks/images/kasaragod.jpg" alt="" /></Link>

            </div>

            <div>
          <Link to={'/knr'}> <img  height={"450px"} width={"400px"}  style={{marginTop:"80px"}} src="https://www.idodesigns.in/locations/images/web-design-company-kannur-mob-banner.jpg" alt="" /></Link> 
            </div>

            <div>
            <Link to={'/waynad'}><img  height={"450px"} width={"400px"} style={{marginTop:"80px"}} src="https://ih1.redbubble.net/image.2179738660.5201/fposter,small,wall_texture,product,750x1000.jpg" alt="" /></Link> 
            </div>

<div>
<Link to={'/kozikode'}><img  height={"450px"} width={"400px"} style={{marginTop:"103px"}} src="https://s3.india.com/wp-content/uploads/2024/08/Kozhikode-Famous.jpg##image/jpg" alt="" /></Link>

</div>

<div>
<Link to={'/malppuram'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}}  src="https://yt3.googleusercontent.com/s0L4JR6AThTVGvNR3MVYVPGXfKjYWCHTYynEmCsS4_Qh1M0BZSnQomkhh6ne-ZiuOicSXXZNN4A=s900-c-k-c0x00ffffff-no-rj" alt="" /></Link>

</div>

<div>
<Link to={'/palakkad'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTfkkZL5C_sFgkoSoxblcFs2RjHJbOxkCvWa-EszcylTUBK8xSkaLjiAwJBU4EIhi-es&usqp=CAU" alt="" /></Link>

</div>

<div>
<Link to={'/thrissur'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}} src="https://i.ytimg.com/vi/CH3qVmT3ELU/hqdefault.jpg" alt="" /></Link>

</div>

<div>
<Link to={'/kochi'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}}  src="https://preview.redd.it/updated-the-logo-after-reading-the-feedback-on-the-previous-v0-mn4h8skdtthd1.png?width=2500&format=png&auto=webp&s=44a51eb4f119a533109b09bfc0f9da443e173b4f" alt="" /></Link>

</div>

<div>
<Link to={'/idukki'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UlsAIe-qKBOHK8niiAYma-9QUmKPXqhK6w&s" alt="" /></Link>

</div>

<div>
<Link to={'/kottayam'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}}  src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkottayam-keralas-hub-of-letters-lakes-and-latex-1715778292_c7ed13c60614a0dd3f74.webp&w=1920&q=75" alt="" /></Link>

</div>

<div>
<Link to={'/alappuza'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}}  src="https://mir-s3-cdn-cf.behance.net/projects/404/1cd70e176899173.Y3JvcCwyMDQ4LDE2MDIsNDAwLDA.png" alt="" /></Link>

</div>

<div>
<Link to={'/pathanmthitta'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzp0x1lxK5qMccFjlZjcdGu6mR3HFK2WksGO83PzpCHyyVJxh1hZOb7DF5lW3u69dd0cc&usqp=CAU" alt="" /></Link>

</div>

<div>
<Link to={'/kollam'}><img  height={"450px"} width={"400px"} style={{marginTop:"103px"}} src="https://s3.india.com/wp-content/uploads/2024/09/kollam-ecotourism.jpg##image/jpg" alt="" /></Link>

</div>

<div>
<Link to={'/trivandrum'}><img height={"450px"} width={"400px"} style={{marginTop:"103px"}} src="https://preview.redd.it/trivandrum-is-not-trivandrum-without-v0-qk135wttbyfc1.jpeg?auto=webp&s=ad140269d0f37559a502690968f5d0be63405af4" alt="" /></Link>

</div>
        </SEC>
        <MAIN3>
          <img style={{marginTop:'20px'}} height={"100%"} width={"100%"}  src="https://external-preview.redd.it/q_RJLIEnA897ZMTZYd-688t3LM7mmXBtQH2OeGG9nwE.png?format=pjpg&auto=webp&s=b7588b16ee2984c015ad069ccff8e385b618f6d1" alt="" />
        </MAIN3>
        <LAST>
            <h1 style={{marginLeft:'376px',marginTop:'140px'}}>CONTACT US FORE MORE INFORMATION</h1>
        </LAST>
      
    </MAIN>
  )
}

export default Homepage
