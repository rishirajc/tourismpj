import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const IMGBOX=styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

`
const IMG=styled.div`
width: 600px;
height: 600px;
background-color: antiquewhite;

`
const FOOT=styled.div`
    width: 100%;
    height: 117px;
    background-color: antiquewhite;
    padding-top: 254px;
`
const Rainforest = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/images/enchanting_kerala/large/nedumkayam_rainforest_unshackle_yourself_here20210910070921_1115_1.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Nedumkayam Rainforest</h1>
    <p>Nedumkayam Rainforest in Malappuram district has a magic around it: just step into it and within moments, the scent of virgin forest will take over all your senses. The fresh air and clear water along with a wealth of rare species of flora and fauna, will make you wonder why you didn’t come here before.

Located 15 km from Nilambur, Nedumkayam Rainforest is part of the Nilgiri Biosphere Reserve, and is one of the main reasons to visit Malappuram district.

Elephants are a major attraction of the jungle here, and a taming camp for jumbos is a tourist-magnet. Apart from elephants, bison, tiger, rabbit, blue monkey, bear, wildcat and deer are some of the wild animals spotted in the forests.  With more than 200 species of birds, the forest has been classified as an ‘Important Bird Area’ (using an internationally agreed set of criteria to identify globally important places for the conservation of bird populations). White-rumped Vulture, Malabar Parakeet, Malabar Grey Hornbill, Crimson Backed Sunbird, Lesser Adjutant and Rufous Babbler are some of the commonly spotted birds in the rainforests.

A wooden rest house built during British rule is worth spending some time in. Step into the rest house and get a panoramic view of grazing grounds of wild elephants and deer. There is also an age-old rustic iron bridge over the Chaliyar river that passes through the forest.

The forest area is also home to the oldest teak plantation in the world, which is spread across 2.3 hectares.

Trekking and hiking trails through the forests are popular among the tourists to the forest. Come, unshackle your concerns and worries, and soak in the true beauty of Mother Nature.
</p>
    <p>Nedumkayam Rainforest is located approximately 15 km from Nilambur in Malappuram district of Kerala. 'Kayam' in Malayalam translates to deep part of a river. The Nedumkayam rainforest can be reached via Karulayi, a small town situated on the banks of the Karimpuzha River. The entire area is surrounded by tall, trees that block sunlight giving the impression of night all the time. For adventure enthusiasts, Nedumkayam offers excellent trekking opportunities, the most popular one being the 3-hour trek to nearby Mundakadav waterfalls.

Access to Nedumkayam requires prior permission from the Indian Forest Service due to conservation efforts aimed at saving the existing forest land.</p>
  <h3>Historical and Cultural Significance</h3>
  <p>Nedumkayam has the world's oldest teak plantation, established during the British colonial era in the 1840s, in a vast area of 2.3 hectares. You can see a wooden house built during the British rule here.  

Nedumkayam is home to the Cholanaikkars, an ancient tribe residing in the Mancheeri area. They spend lives in the open or under rock shelters.</p>
<h3>Biodiversity</h3>
<p>The rainforest is part of the Nilgiri Biosphere Reserve. The fresh air and clear water that flows through, along with rare species of flora and fauna makes the place a popular destination for tourists.

Visitors often see elephants on the journey through the teak plantations. There is an elephant taming centre at Nedumkayam.  Many mammals of the western ghats such as bisons, tigers, macaques, deer, and wild cats can be seen here. The area also has more than 200 species of birds.</p>


<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Calicut International Airport, about 59 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Nilambur Railway Station, about 14 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Nilambur Bus Stand, about 15 km away</p> </div>
   </div>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={'200px'} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/13/98/1b/nedumkayam-bridge-largejpg.jpg?w=1200&h=-1&s=1" alt="" />
<img width={'200px'} height={'200px'} src="https://www.keralatourism.org/images/enchanting_kerala/large/nedumkayam_rainforest_unshackle_yourself_here20210910070921_1115_1.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgW7GQ31hgzeskDf3husMH805ikhxctQmsA&s" alt="" />
<img width={'200px'} height={'200px'} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fnedumkayam-rainforest-1721121860_4d12c4923eab56db98b1.webp&w=3840&q=75" alt="" />
<img width={'200px'} height={'200px'} src="https://s3-ap-southeast-1.amazonaws.com/sb-singleserver-prod-bucket/5afa79237c9d881fccd8060c8c22ce37/s_1540371514.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfN1wiNDtfiEL8lgmgvQMeRj6HPQhKC02MA&s" alt="" />
<img width={'200px'} height={'200px'} src="https://cdn.tripuntold.com/media/photos/location/2018/08/12/a1d5edb8-61a3-4492-bc03-1ef0040470e3.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3JOoawtMWsuSBYYYo6E1jPxRCeqPa4tmqw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://village.kerala.gov.in/smartoffice/DCMS/articles/ARTICLE_2021-08-28202131_article_2021-08-28124139_nkym%20elephants.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/xXBJfbKg1z4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBl7E6vNhpPdy2MjGJu_dqjp_Ob2g" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEipKl-cL9Ls4Fcokr2j2TYcdGnWZinbVsQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPw0ZhQxI7Bcb2uI62-7hajEODNEq4zohLg&s" alt="" />
<img width={'200px'} height={'200px'} src="https://cdn.tripuntold.com/media/photos/location/2020/07/13/97b9a328-ad36-4d27-b469-caa049a257ac.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KM9qw3CANhNF3Cjdx_kMzkMR6NqZMDu_tg&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/PkEUhxtCEdCPcom77">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>
<div><h3>Great Hornbill Resorts</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnakbBOn__lAWCAIWUmBr1kDXK0TgfXulAIw&s" alt="" />
</div>
<a href="https://greathornbillresort.com/">click to view</a>
</div>


   <div>
<h3>Jungle Beats Resorts</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-snXLWlhFn1yzMF5hJDaZvYWoNNJ9Sp3A&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/ranches_jungle_beats_resorts-details-wayanad.html">click to view</a>
</div>


   <div><h3>
  
   Rockdale Resort

</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/504967281.jpg?k=a0046afe06c93906db317f9dea9a53d6341dd10e937708b4902752f451b4de3c&o=&hp=1" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/rockdale_resort-details-nilambur.html">click to view</a>
</div>


   <div><h3>ela Forest Stay (Tree House)</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max500/607627915.jpg?k=6bb4cb76f845a6b0a23caa873ca3e14d176c481a9b4a7730690143e1fc9ae1e3&o=&hp=1" alt="" />
</div>
<a href="https://elaforeststay.com/">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Rainforest
