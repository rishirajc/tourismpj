import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import koz from '/src/pages/Subdistrict/kozikode/image/kozokode.png'


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
const Kozikodbeach = () => {
   useEffect(()=>{
   
       window.scrollTo(0, 0);
     },[])
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://media1.thrillophilia.com/filestore/2avtoejrqvk2f56od0c0okrujfpr_1584439345_shutterstock_1023261916.jpg?w=400&dpr=2" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Kozhikode Beach</h1>
    <p>Kozhikode Beach is a beach on the western side of Kozhikode, situated on the Malabar Coast of India. Kozhikode beach is most crowded beach in kerala. The beach is accessible through four road overbridges in the city. The beach has paved stones and illumination. There is one Lions Park for the children and an aquarium. Kozhikode beach has always been a prominent place for conducting public meetings. The beach road was renamed 'Gandhi Road' in 1934 after Gandhi visited Kozhikode in 1934.</p>
   <h3>History</h3>
<p>100 years ago Valiyangadi and the beach area were the centre of Kozhikode city. In the 1970s the downtown shifted to Mananchira area and again, in the 1980s, Mavoor Road became the centre of attraction. In 2010s, Thondayad Bypass area and Palazhi on the Airport road has emerged as the new city centre with a vibrant night life.</p>
<h3>The 28-km beach road</h3>
<p>Kozhikode Beach has a long drive from Beypore in the south to Kappad in the north. The following beaches are part of Kozhikode Beach:

Beypore, Payyanakkal and Marad
Kallayi, Kuttichira and Thekkeppuram
Vellayil, South Beach and Valiyangadi
Kamburam, Putiyappa and Elathur
Konad, Bhat Road</p>

<p> <h3>Valiyangadi</h3>
On the southern side of the beach, Valiyangadi was the place where European and Arab traders brushed shoulders just a few centuries back. There is one Gujarathi Street and a Halwa Street on the locality. The road towards the south reaches the Chakkum Kadavu bridge and has access to the Kallayi, Marad and Beypore beaches. Valiyanagdi have great past and history. We can see the value of valiyangadi in malabar history

<h3>Mishkal Masjidh</h3>
The Mishkal Masjidh is a four storied mosque at Kuttichira in Kozhikode city. The mosque is about 700 years old. Originally built of wood in five stories, the mosque was later rebuilt into the present four stories. The mosque has 47 doors, 24 pillars decorated with carvings and a very big prayer hall that can accommodate 400 people. [2]

<h3>Cherootty Road</h3>
The Road over bridge from Mananchira to the Kozhikode beach takes you to the Red Cross Road that terminates in the beach. Cherootty road is one of the offshoots of the Red Cross Road that ends at Court Road near the Mathrubhumi newspaper office. This is a major shopping area of the Kozhikode beach area with many branded clothing shops and branches of nationalized branches on either side of the road. Gandhi Peace Foundation is maintaining an office there. The convent road is a branch of the Cherootty Road. Tagore Centenary Hall, Muslim League Office, Moonnalingal junction and the Beach Office are also connected to the Red Cross Road. The Silk Street and the Court Road runs parallel to Cherootty Road. The Silk Street has a Punjabi school, St.Joseph's school and Sidhi Durbar. Further west of the Silk Street lies the beach road which runs north–south from Vellayil in the north to Chakkum Kadavu in the south.

<h3>Nalam Gate</h3>
Nalam Gate or the fourth gate is a posh shopping locality on P.T.Usha Road in Kozhikode city. It is known as a foodie paradise because of the presence of a number of classy restaurants and coffee shops.</p>
<p><h3>Important landmarks </h3>

Kozhikode Beach View
Barami Masjidh
Santhwanam NGO, Cherootty Road
Gandhi Peace Foundation, Cherootty Road
All India Radio, Beach Road
Corporation Office, Beach
Thodiyil Shree Bhagawathy Temple
Gurajathi School, Gujarathi Street
St.Josephs Boys School
District Court, Kozhikode
St.Josephs AIGHSS, Convent Road
Sea Queen Hotel
Beach Hotel
Sree Thiruvani Bhagavathi Temple, Moonalingal
Government General Hospital, Beach Hospital
Hotel Neerayi
Merchant Navy Club[1]
The Marine Research Aquarium, CMFRI, Beach Road
Crescent Mervue Apartments
Maha Ganapathi Bhuvaneshwari Temple, Puthiya Kadavu, Beach Road
Kamburam Bhagavathy Temple
Vellayil Police Station, Beach Road
Vellayil Fishing Harbour
Appolo Sea Breeze Apartments,Beach Road,</p>

<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Calicut International Airport, about 30 km away | Kannur International Airport, about 92 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Kozhikode Railway Station, about 6 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Kozhikode KSRTC Bus Stand, about 6 km away.</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYtpQg3Q62Oz_QZxJPOQ3XvwWJbmZsV9idA&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2f/ee/ad/beypore-beach.jpg?w=1200&h=-1&s=1" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oUj0L8BZuHJGeYLKVraDEmXyso0wBMXNtA&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrF_dg1WJe3iolPgaDKDxuUQMa4HDx7w1qg&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24Lp_j9dqNRK1KLNuSqt4cJaemMPF5lw7Bw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://images.nativeplanet.com/img/2023/08/scenic-view-of-kozhikode-beach_1693469197165-600x338-20230831134613.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkozhikode-beach-1724136273_4f4e219404e64aa92290.webp&w=3840&q=75" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9mhLUGRogmHvdSVq7wHL8K5G1V9p5dMfsw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://media1.thrillophilia.com/filestore/2avtoejrqvk2f56od0c0okrujfpr_1584439345_shutterstock_1023261916.jpg?w=400&dpr=2" alt="" />
<img  width={'200px'} height={'200px'}  src="https://i.ytimg.com/vi/XPgx91_3nlU/sddefault.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7MOKMtfsAbtA5JudBx35AIfRCzhJbpncpA&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://yometro.com/images/places/kozhikode-beach.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzysEH3I5wEq3tJKIighM9ua2sIdL37J6uzQ&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsZRnDZ75FVcsOApVwjilJXhE8Luany87pA&s" alt="" />
</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={koz} width={"400px"} height={"400px"} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>

   <div><h3>
   Staydium Bungalow Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39eUhej5DbGhmt7s9T-IfFDqjR75pvDs0Zg&s" alt="" />
</div>
<a href="https://staydium.in/">click to view</a>
</div>


   <div>
<h3>Harivihar Wellness Retreat</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://harivihar.com/wp-content/uploads/2019/06/hariviharbanner7.jpg" alt="" />
</div>
<a href="https://harivihar.com/">click to view</a>
</div>


   <div><h3>
  
   Beachway Inn</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAYkV-XC9chzV3eiOowPhbiYDse1ZEv7_5g&s" alt="" />
</div>
<a href="https://beachwayinn.com/">click to view</a>
</div>


   <div><h3>HOTEL ALAKAPURI KOZHIKODE</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c9/f5/9b/alakapuri-hotel.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://www.hotelalakapuri.com/">click to view</a>
</div>

</div>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Kozikodbeach
