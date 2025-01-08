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
const IMGG=styled.div`
    width: 100%;
   height:300px;
    background-color: #eb8d13;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
  
`

const Konni = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/images/eco-tourism/trekking_thumb/jungle-safari/Konni%20forest_16072018175921.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Konni - Adavi</h1>
    <p>Adavi is a major tourist destination in Konni, Kerala[1] situated in the banks of Kallar river. Eco-tourism project in Adavi is jointly launched by Kerala Tourism Development Corporation and Department of Forests and Wildlife, Kerala.[2]

The main attraction in Adavi is Coracle riding and Bamboo huts, which are erected on the banks of Kallar river.[3][4][5]</p>
   
  <h2>JUNGLE SAFARIS</h2>
  <p><h3>Elephant Kraal of Konni</h3>
Konni, famous for the elephant training happening in the state attracts a huge number of visitors every year. People visit here to see the biggest animal on land in close quarters without fear. One of the major attractions at Konni is the giant wooden cages or the elephant kraals used to house the elephants. Locally known as Aanakoodu, they can house up to 3 to 4 elephants at a time. The place also has a children’s park.  The centre is closed on Mondays. 
07.30 AM to 05.00 PM</p>
<p><h3>Bus Tour to Gavi Rainforest</h3>
A bus tour to Gavi from Adavi will gasp you whenever the thick curtain of woods part to give you glimpses of stunning landscapes. On the way, you can see some of the beautiful dams in Kerala – Moozhiyar, Kakki, and Anathodu. You can also see the waters of Kochu Pamba at Gavi and on the return journey, you can see plantation towns of Vandiperiyar, Peerumedu, Mundakayam, and Ranni. This is a full day programme and lunch is arranged at Gavi.  
07.30 AM to 09.00 PM </p>
<p><h3>Bow boat riding/Coracle boating</h3>
With a 5-km stretch broadened by the Kallar River, Adavi welcomes you to experience nature at its best.  The package is available in two slots – one is short ride and the other long ride. The place is best during monsoon as the river is full and you can experience the fresh air, and soak yourself in the scenery of pristine greenery, and clear waters of the Kallar River. 
08.30 AM to 05.30 PM </p>
<p><h3>Tree top Bamboo huts</h3>
A night stay in the tree-top bamboo huts at Adavi gives you the memory of a lifetime. The package includes food.</p>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/images/eco-tourism/trekking_thumb/jungle-safari/adavi_16072018175921.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/images/enchanting_kerala/large/konni_a_package_of_experiences20180105103242_694_1.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyq6ElQYbGFIfvligF11LG5neoh1inpVF0wg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEAlieQjxzjG-JGD8YcOkG2swaKdgAoThWw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/rtJWx6xMIgQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBaAFqpwy6MyNiUSVMMzV2hIFbywg" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.pinimg.com/736x/4e/48/1b/4e481b4ecb754ee630747e348c7d4af4.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpO2ZSQL8Cp0ymOdBMQ9jFNgFMPfnMm3osg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleXYapYx98kBLro4zG-4eDp547ml5pTI1Ng&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxv9S0CmITqXUomzR-B3HL4uLhLrgjIsYZNw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/I8kwdm6d3zI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCjbS942zamWiuaTwaJDCCevBDpHg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKvEFddrQ9iDcjUkrtP5GFh36vqQ6EqhhMw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDfo9w_FVBJQE_BCG9wxoP3G3609azIX80Q&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt12t2Rmw04PZ_Z2QRVy0qKvk113rSnpxcEg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/images/eco-tourism/destinations/Konni-elephent-camp.jpg" alt="" />


</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>
<div><h3>
  
Mistywindvalley Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://www.mistywindvalley.in/wp-content/uploads/2018/04/GALLARY-3.jpg" alt="" />
</div>
<a href="https://www.mistywindvalley.in/">click to view</a>
</div>


   <div>
<h3>Gairah Resort
</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/521778740.jpg?k=060a81fdd28e76c3ecefff10e8ae45d6b949b5a18b9d9f08545860917b4d8dd1&o=&hp=1" alt="" />
</div>
<a href="https://gairahresorts.com/">click to view</a>
</div>


   <div><h3>
  
   Contour Jungle Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdfAbae9ZQp4k_eW3KW_6igGVUv-hGcPdgQ&s" alt="" />
</div>
<a href="https://www.contourresorts.com/contour_page.php?page_id=Contour_40">click to view</a>
</div>


   <div><h3>Archh
   </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9azvWNRueymQWWAP_JypKD4CvEguGYBXMig&s" alt="" />
</div>
<a href="https://www.bluepillow.com/search?p_id=59329b8e7c00cb1fb893ffbf&dest=bkng&cat=House&accomodationids=62df0fb5ba4544849389a81a">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Konni
