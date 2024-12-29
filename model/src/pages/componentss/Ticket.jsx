import React from 'react'
import styled from 'styled-components'
import './ticket.css'
const MAIN=styled.div`
  width: 100%;
  height: 130vh;
 background-image: url("https://st.depositphotos.com/1002200/1355/i/450/depositphotos_13554958-stock-photo-colourful-background.jpg");
 background-repeat: no-repeat;
background-size: cover;
background-position: center;


`
const ONE=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
 padding-top: 150px;
 transition: width 5s,height 5s;
    animation-name: rishi;
    animation-duration: 10s;
    animation-delay: 5s;
    animation-iteration-count: infinite; 
 
`
const FIR=styled.div`
  :hover{
    width: 300px;
    height: 300px;
    opacity: 1;
  }
`
const SEC=styled.div`
  :hover{
    width: 300px;
    height: 300px;
    opacity: 1;
  }
`
const THR=styled.div`
  :hover{
    width: 300px;
    height: 300px;
    opacity: 1;
  }
`
const FOR=styled.div`
  :hover{
    width: 300px;
    height: 300px;
    opacity: 1;
  }
`
const FIV=styled.div`
  :hover{
    width: 300px;
    height: 300px;
    opacity: 1;
  }
`
const SIX=styled.div`
  :hover{
    width: 300px;
    height: 300px;
    opacity: 1;
  }
`

const Ticket = () => {
  return (
    <MAIN >
      <ONE>
       

     <FIR><a href="https://www.railyatri.in/">   <img  width={'250px'} height={'220px'} style={{marginLeft:'60px'}}  src="https://www.businessoutreach.in/wp-content/uploads/2024/03/RailYatri-Success-Story.webp" alt="" />
        </a> </FIR> 
       
      

      <SEC> <a href="https://www.makemytrip.com/">        <img width={'250px'} height={'220px'} style={{marginLeft:'60px'}}  src="https://i0.wp.com/buzzzted.com/wp-content/uploads/2024/05/CRED.png?fit=960%2C503&ssl=1" alt="" />
        </a> </SEC> 

       <THR><a href="https://www.irctc.co.in/nget/train-search"> <img width={'250px'} height={'220px'} style={{marginLeft:'60px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuv-uP42SxGfD2lRVBxZ0aEpKMuQAekj35yw&s" alt="" /></a></THR> 
       
     <FOR> <a href="https://www.ixigo.com/?utm_source=Google_Search&utm_medium=paid_search_google&utm_campaign=Ixigo_Brand&utm_source=brand_g&utm_medium=paid_search_google&utm_campaign=ixigo_brand&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LOkb79Izyy8f0bpgigN7UeAbFPRWcuOEtoOx0LeRHXLdguzZz41FbRoC0doQAvD_BwE"><img width={'250px'} height={'220px'}style={{marginLeft:'60px'}}  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/84/fa/a5/84faa50f-9419-a540-bf80-41068cb9a1fe/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/1200x600wa.png" alt="" /></a> </FOR> 
        
     <FIV> <a href="https://www.redbus.in/"> <img width={'250px'} height={'220px'} style={{marginLeft:'60px',marginTop:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbAD2iOPk1Yk_7DDKy2A80Xdv2YF01Ny1kg&s" alt="" /></a></FIV> 
       
     <SIX>  <a href="https://www.easemytrip.com/offers/no-convenience-fee.html?ompAff=utmdigital&utm_source=affiliate&utm_medium=utmdigital&utm_campaign=affiliate_id&utm_source=affiliate&utm_medium=utmdigital&utm_campaign=affiliate_id&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LFv_4cMRMZVClqsZogG0VVjM_zo8ZAOnEXg41veXUVeGZUYodQSFsBoCBGwQAvD_BwE">  <img width={'250px'} height={'220px'} style={{marginLeft:'60px',marginTop:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OrK6aQN7sW_17tLm70luhSKZBtLQgNt_pw&s" alt="" /></a></SIX>
     

      </ONE>
    </MAIN>
  )
}
export default Ticket
