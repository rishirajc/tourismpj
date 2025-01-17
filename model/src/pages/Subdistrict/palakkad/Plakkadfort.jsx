import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import pkd from '/src/pages/Subdistrict/palakkad/image/pkdport.png'

const IMGBOX=styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

`
const IMG=styled.div`
width: 400px;
height: 400px;
background-color: antiquewhite;
border-radius: 14px;
box-shadow: 1px 1px 20px rgb(202, 189, 189);

`
const FOOT=styled.div`
    width: 100%;
    height: 117px;
    background-color: antiquewhite;
    padding-top: 254px;
`
const IMGG=styled.div`
    width: 100%;
   height:300px;
    background-color: #eb8d13;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
  
`
const Plakkadfort = () => {
  useEffect(()=>{
  
      window.scrollTo(0, 0);
    },[])
   return (
      <div>
      <div>
          <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Ftipus-fort-1723536036_2db1bc5ffcbfc0c8b077.webp&w=1920&q=75" alt="" />
      </div>
      <h1 style={{backgroundColor:"lightgreen"}}>About Palakkad Fort</h1>
      <p>Palakkad Fort is an old fort situated in the heart of Palakkad city of Kerala state, southern India. It was recaptured and rebuilt grandly by Sultan Hyder Ali in 1766 A.D and remains one of the best-preserved forts in Kerala.</p>
    <p>Palakkad Fort: (Open 0800-1800 hrs) The old fort situated in the very heart of Palakkad town is one of the best preserved in Kerala. It was built by Hyder Ali of Mysore in 1766 and later taken over and modified by the British in 1790. It is now preserved by Archeological Survey of India. A temple of Lord Hanuman is adjacent to the main entrance of the Fort. A museum of Archeology is also functioning inside the Fort.Fort is surrounded by a moat. A jogging track parallel to the moat is provided for jogging in the morning and evening hours. The entire area is beautifully landscaped.</p>
     <p> <h3>History</h3>
     The Palakkad Fort is said to have existed from very ancient times but believed to be constructed in the present form in 1766 A.D, but little is known of its early history. The local ruler, Palakkad Achchan, was originally a tributary of the Zamorin but had become independent before the beginning of the eighteenth century.[1] In 1757 he sent a deputation to Hyder Ali seeking help against an invasion threatened by the Zamorin. Hyder Ali seized upon the opportunity to gain possession of a strategically important location such as Palghat and from that time until 1790 the fort was continually in the hands of the Mysore Sultans or the British. It was first taken by the latter in 1768 when Colonel Wood captured it during his raid on Hyder Ali's fortresses, but it was retaken by Hyder a few months later. It was recaptured by Colonel Fullarton in 1783, after a siege that lasted eleven days but was abandoned the following year. It later fell into the hands of the Zamorin's troops. In 1790 it was finally captured by the British under Colonel Stuart. It was renovated and was used as a base for operations that ended with the storming of Srirangapatnam. The fort continued to be garrisoned until the middle of the 19th century. In the early 1900s, it was converted into a taluk office.[2]</p>
  <p> <h3>Current status</h3>
There is a large ground between the Fort and the Palakkad Townhall, known as Kota Maidanam (Fort Maidan/Fort Grounds). The ground is now used to stage cricket matches, exhibitions, and public meetings. An open-air auditorium called "Rappadi", currently under the preservation of the Archeological Survey of India, is also located within the spacious grounds of the Fort. Additionally, there is a children's park on one side of the Fort.This children's park is known by the name "Vatika", which has a beautiful garden alongside outdoor playground equipments for kids.</p>
  
<p> <h3>Interior</h3>
The Palakkad Special Sub Jail is also located within the fort. There is a small shrine dedicated to Lord Hanuman known as Anjaneya Swamy temple, The temple is situated on the Eastern entrance of the fort, Figure Anjaneya is carved on the inner side of the fort wall. The murti of Lord Anjaneya is south facing, while the lord himself is facing west. It is believed that Tipu and his warriors worshipped the lord to protect them from all enemies. A garden called Vatika-Shilavatika is maintained inside the court.</p>



  <h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
     <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
      <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
      Nearest airports to Palakkad Fort : Coimbatore International Airport, Avinashi Road, Coimbatore, And distance from airport 68 Kms, Cochin International Airport And distance from airport 112 Kms</p> </div>
      <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
      There are two railway Stations in the city. Palakkad Town Which is 3 kms from the fort, and Palakkad Junction (Olavakode Railway station) around 6 kms from the Palakkad Fort..</p> </div>
      <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
      Fort is situated in the Center of the Palakkad city. At a distance of 52 km from Coimbatore, 141 km from Kochi, 64 km from Thrissur, and 130 Kms from Kozhikode.</p> </div>
     </div>
  
  
  
  <div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
  <marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
  </div>
  <Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>
  
  <h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
  <IMGBOX>
<img  width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0w3dcBB7rlwjTFwmMDhcAZlcrc4hUxFKFRw&s" alt="" />
<img  width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YZMy3qp-kvDdPZqC633O8aRW_uoMOp6l9A&s" alt="" />
<img  width={'200px'} height={'200px'}   src="https://media1.thrillophilia.com/filestore/51ap9gny65nce5f2nljeyljxe1ns_maxresdefault.jpg" alt="" />
<img  width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYruftZHuiIAEsWV9EmW3zrwaKbHZlXAp1g&s" alt="" />
<img  width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhhiAOntqrNDOyAXZ6pF3_y99xuKfgbQ8rA&s" alt="" />
<img  width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPngYfRjSIsYmO1kR2ReJC5-edQ4PMGX7oEA&s" alt="" />
<img  width={'200px'} height={'200px'}   src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Ftipus-fort-1723536054_cf625b67063dd41bea30.webp&w=3840&q=75" alt="" />
<img  width={'200px'} height={'200px'}   src="https://www.holidify.com/images/cmsuploads/compressed/5164789720_9a534fb905_b_20170519132855.jpg" alt="" />
<img  width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl22OAGCe-1vmf4dGaTLhkTLWfOSOKOxRNYQ&s" alt="" />
<img  width={'200px'} height={'200px'}   src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg05EXbmfiKxQbogrYhXN5WQdcZS_lIFsoTgB9x_dVKBbTSZYNLPTH3SK5TMzoW_JGN16tuZZwMY2ENIDDTTARkV8fE2TvvTMUqVRCY5PO_jmQoTZ8sHxgVXBwkPiTpqNwRGVq-lTSF0uG2/s1024/Tipus-Fort-Palakkad-1024x768.jpg" alt="" />
<img  width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/XHvoHGbdQR0/maxresdefault.jpg" alt="" />
<img  width={'200px'} height={'200px'}   src="https://c8.alamy.com/comp/HDBTG7/palakkad-fort-inside-visiting-family-tipus-fort-palakkad-fort-palakkad-HDBTG7.jpg" alt="" />
<img  width={'200px'} height={'200px'}   src="https://3.imimg.com/data3/LM/IQ/MY-7716808/palakkad-fort-250x250.jpg" alt="" />
<img  width={'200px'} height={'200px'}   src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Palakkad-Fort.jpg/2560px-Palakkad-Fort.jpg" alt="" />
  </IMGBOX>
  
  <h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
  <div>
  
  </div>
  <h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>
  
<IMG><img src={pkd}   width={"400px"} height={"400px"} alt="" /></IMG>
  <a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>
  
  
  
  
  
  <h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>
  
  <IMGG >
  
     <div><h3>
     Udaya Resort</h3>
  <div >
    <img   style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/184411933.jpg?k=aa7de29b0744f43643618b1101360846f8fb5a57f29f90179e9eded34f076558&o=&hp=1" alt="" />
  </div>
  <a href="https://www.udayaresort.com/">click to view</a>
  </div>
  
  
  <div><h3>Mango County Resort</h3>
  <div>
      <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://static.wixstatic.com/media/849769_e59672dbe44240a3a9105058f1a53aa9~mv2.jpg/v1/fill/w_721,h_405,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/849769_e59672dbe44240a3a9105058f1a53aa9~mv2.jpg" alt="" />
  </div>
  <a href="https://www.themangocounty.in/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=7483131292507865942">click to view</a>
  </div>
  
  <div><h3>
  Hotel Tripenta</h3>
  <div>
  <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkZtKgU7qWh1S4amK8TIHN_KFoPenQhvrcg&s" alt="" />
  </div>
  <a href="https://www.tripenta.com/">click to view</a>
  </div>
  
  
  
  <div>
  <h3>KTDC Garden House Malampuzha</h3>
  <div>
  <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://www.ktdc.com/photo-gallery/large/garden-house//Garden-House-6.jpg" alt="" />
  </div>
  <a href="https://www.ktdc.com/garden-house">click to view</a>
  </div>
  
  </IMGG>
  
  
  
  
  <FOOT>
  <h2>contact us for more info 9656756476</h2>
  <h4>tourismkerala@gmail.com</h4>
  
  </FOOT>
  
  </div>
  )
}

export default Plakkadfort
