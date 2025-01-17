import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import idu from '/src/pages/Subdistrict/idukki/image/top.png'

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

const Topstation = () => {
    useEffect(()=>{
    
        window.scrollTo(0, 0);
      },[])
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/images/microsites/munnar/munnar-banner-inner.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Top Station</h1>
    <p>With magnificent views all around, the scenic heights of Top Station will make you wish for wings to soar in the misty blue sky. One of the most beautiful spots in Munnar, Top Station is situated about 1,700 m above sea level. The cool breeze and wild flowers make this a great place to wind away the hours. The heights offer a striking view of the nearby State of Tamil Nadu. 

Top Station will be in all its beauty during the flowering season of Neelakurinji and it’s simply amazing to watch miles and miles of flowers blanketing the hills and valleys. </p>
    <p>Top Station is a tourist destination located in Theni district of Tamil nadu.[1][2][3] Top Station is notable as the historic transshipment location for Kannan Devan tea delivered there from Munnar and Madupatty by railway and then down by ropeway to Kottagudi.[4] This area is popular for the rare Neelakurinji flowers. The Kurinjimala Sanctuary is nearby. Top Station is the western entrance to the planned Palani Hills National Park</p>
   <p> <h3>History</h3>

Sunrise colors over the Sahyadris
Top Station was a transshipment point for delivery of tea from Munnar to Bodinayakkanur. Top Station derived its name from its being the upper terminus of the Kottagudi Aerial Ropeway. It was also the location of the terminal railway station on the Kundala Valley Railway, built in 1902 between Munnar, Kundalai and this low point in the crest of the hills above steep cliffs. A monorail goods carriage system was initially installed along this cart route.[5] In 1908 the monorail was replaced by a 24 inch gauge railway. Kundalai is 12 kilometers (7.5 mi) west from Top Station on the way from Munnar station.[4] Some remains of Kundala Valley Railway can be seen at the Munnar Tea Museum.[6]

Tea chests arriving at Top Station from the Kundalai Valley were transported by a ropeway from Top Station 5 km downhill to the south to Kurangani, Tamil Nadu. The tea was then shipped 15 km by cart to Bodinayakkanur, then by rail to other places in India and by ship to England.[4] Remains of the ropeway station at Top Station are still visible.[6][7] The elevation at the top of the Bodi ropeway was 1,911 meters (6,270 ft).[8]

 <h3>Geography</h3>

Top Station shown on map of Kodai-Munnar Escape road, 1955
Top Station offers a panoramic view of the majestic Western Ghats and the valley of Theni district. Top Station is located at 10°07′24″N 77°14′02″E. Its elevation is 1,880 meters (6,170 ft). It is 6.6 kilometers (4.1 mi) southwest of the highest point on the old Kodaikanal-Cochin escape road at 2,260 meters (7,410 ft) on the eastern shoulder of Vandaravu Peak</p>
p\op Station, located around 32 km away from Munnar, is the highest point (1700m) in Munnar, on the Munnar-Kodaikkanal road. The place falls on the Kerala-Tamil Nadu border. Here you can enjoy the panoramic view of Western Ghats and the valley of Theni district of Tamil Nadu.

Top Station got its name from the fact that it was the uppermost railway station located in the Kundala Valley. At this highest point, you may feel that the clouds are just a hand touch away from you. The destination is famous for the Neelakurinji flowers (Strobilanthus), which used to bloom once in twelve years. The bloom of these rare flowers will give the destination a different bluish look. The next flowering season of Neelakurinji is on 2018.

The best time to visit Top station is from April to May. Top Station is easily accessible from Munnar as there are frequent buses from there and you can also make use of the cabs available. You can also visit the Kurinjimala sanctuary very near to top Station.

<h3>Echo Point</h3>
This is a very beautiful place in Munnar, which got its name from natural echo phenomenon situated at a scenic lake bank. When you scream at here, you will be hearing your voice returning to you. Placed at an altitude about 600 ft, Echo Point is located 15 km away from Munnar, on the way to Top Station.

Echo Point always has a greenish look as it is covered with abundant green sceneries. It is an adventurous destination, which will be a perfect choice for those who love to have a nature walk or trekking. The place surrounded with mist covered hills, water falls and clean air will be a visual treat.






<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vle9Iek1wl2UhL7f9LR5ZSc1DLC13syTVQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPb6iG3oNoerTneNqEZo8VjJUXaQ1Pfjxig&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfjqihmw41HupVpt2pjzubhbg-WOaW-IGTA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/0Eelppbi5R4/maxresdefault.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://cdn.bluebirdtravels.in/wp-content/uploads/uncategorized/munnar/Top-Station-Munnar-600x438.jpg?p=23449" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.seasonzindia.com/images/blogs/20200203091424_1580721264.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVK_IWL7QxiRrf57I-bIB9GIPOXdYI8BkzMw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW98r53qmK4mNlwdEO61vLCj7TtnXlZpWqDg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT92Chckw9tdErbWNxJSuu4GF2Of_NGVElUNQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWQbPrWsWXyMwATWRTRPaLA_ZphJ-qNZg_Q&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Xb2EnJE3LirubZOvPT4_ST6BW9c8XQqnCg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrPLTUm7JvNVCinHM55US5KpimbJv_qS9jg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/I0Z0A6QIpfo/maxresdefault.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fv1725351469%2Fkiomoi%2FTop_Station_7909.jpg&w=3840&q=75" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={idu}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

<div>
<h3>Campper Camp Woody Munnar
</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TB93T0RiTi0v2_D2Vep3wWBrJYoqdN16Cg&s" alt="" />
</div>
<a href="https://www.campper.com/camp-woody-at-anayirangal-valley">click to view</a>
</div>



   <div>
<h3>Mountain Club Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/569261161.jpg?k=7ddc3c7f643a066402db3a7380b84061f83df0590c627c1465cec6724eaca2f4&o=&hp=1" alt="" />
</div>
<a href="https://www.mountainclub.co.in/">click to view</a>
</div>


   <div><h3>
  
   Vattavada Jungle Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/568322423.jpg?k=bcd68a14d152d82eacda45e8d7e1d3612dba4dcbe26b1c65d31ce6ca0bc7b519&o=&hp=1" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/sahari_mariental_resorts-details-marayoor.html">click to view</a>
</div>


   <div><h3>The Regalia Munnar
   </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADnJWDu2j_Dg7aQcG73iAOI9Sjh2NTFfdEw&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/the_regalia_munnar-details-munnar.html">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Topstation
