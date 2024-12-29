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
const Muzupland = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Muzhappilangad_Beach13.jpg/1280px-Muzhappilangad_Beach13.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Muzhappilangad Beach</h1>
    <p>Muzhappilangad Beach near Thalassery (formerly Tellicherry) is a drive-in beach in the Kannur district of Kerala, on the Malabar Coast of India. It stretches across 4 kilometers in length.[1] In 2016, it was featured among the six "best beaches for driving in the world" in an article published by BBC - Autos.[2][3] This beach is currently under major renovation</p>
    <p>The Muzhapilangad beach is located parallel to National Highway 66 (formerly National Highway 17) between Kannur and Thalassery.[4] There is an unpaved road winding through coconut groves leading to the beach. To get to this road, if you are driving from Thalassery towards Kannur, take the left turn just before the railway over bridge (the first railway crossing) which you will encounter after crossing the Moidu bridge. For those travelling from Kannur towards Thalassery, the entrance to this road will be available on the right side from Edakkad town. The beach is about 3.8 km long and curves in a wide area providing a good view of Kannur on the north. Local laws allow beachgoers to drive for a full 3.4 km directly on the sands of the beach. The beach is bordered by black rocks, which also protect it from the strong currents of the ocean. These rocks provide habitat for Blue mussel, a delicious seafood. Beach attracts bird-watchers from far off places as hundreds of birds flock here during various seasons.

There is a private island called Dharmadam Island (Pacha Thuruthu in Malayalam, which translates as 'Green Island' in English), approximately 100–200 m south of the beach . It is possible to walk to the island during low tide from the nearby Dharmadam beach.</p>
<p><h4>Tourism </h4>
Since the late 1990s, the beach has seen a steady influx of European and other foreign tourists during winter. A major share of foreign and domestic tourists are not aware of the potentials of this elusive destination. It is a must see destination for Indians as well as for foreign tourists. After the ongoing facelift of the beach there has been a huge improvement in the facilities available to the beach visitors including in resorts, roads, etc. The beach is wide and the sand is firm enough to support smooth driving.

 <h4>Birdwatching hotspot</h4>

Whimbrel at Muzhappilangad Beach

Lesser crested terns

Ruddy turnstone
Despite being a tourist destination, the beach is a birdwatching hotspot too.[5] More than thirty species of migratory birds visit here in the winter. Among them Pectoral sandpiper and Caspian plover, sighted here in 2013, were reported for the first time in Kerala.[6] Long, broad shore and rocky formations on the side of the beach provide a safe place for migration of birds.</p>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Muzhapilangad_beach.JPG/1280px-Muzhapilangad_beach.JPG" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Muzhappilangad_Beach_2.jpg/1920px-Muzhappilangad_Beach_2.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Muzhappilangad_Beach13.jpg/1280px-Muzhappilangad_Beach13.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Muzhappilangad_beach6.jpg/1280px-Muzhappilangad_beach6.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Muzhapilangad-Beach.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%E0%B4%AE%E0%B5%81%E0%B4%B4%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BF%E0%B4%B2%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%BE%E0%B4%9F%E0%B5%8D_%E0%B4%95%E0%B4%9F%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B5%81%E0%B4%B1%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%86_%E0%B4%AC%E0%B5%88%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D_%E0%B4%B8%E0%B4%9E%E0%B5%8D%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%95%E0%B5%BE.JPG/1280px-%E0%B4%AE%E0%B5%81%E0%B4%B4%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BF%E0%B4%B2%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%BE%E0%B4%9F%E0%B5%8D_%E0%B4%95%E0%B4%9F%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B5%81%E0%B4%B1%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%86_%E0%B4%AC%E0%B5%88%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D_%E0%B4%B8%E0%B4%9E%E0%B5%8D%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%95%E0%B5%BE.JPG" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B4%AE%E0%B5%81%E0%B4%B4%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BF%E0%B4%B2%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%BE%E0%B4%9F%E0%B5%8D_%E0%B4%A1%E0%B5%8D%E0%B4%B0%E0%B5%88%E0%B4%B5%E0%B4%BF%E0%B4%82%E0%B4%97%E0%B5%8D_%E0%B4%AC%E0%B5%80%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B5%8D.jpg/1280px-%E0%B4%AE%E0%B5%81%E0%B4%B4%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BF%E0%B4%B2%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%BE%E0%B4%9F%E0%B5%8D_%E0%B4%A1%E0%B5%8D%E0%B4%B0%E0%B5%88%E0%B4%B5%E0%B4%BF%E0%B4%82%E0%B4%97%E0%B5%8D_%E0%B4%AC%E0%B5%80%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B5%8D.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Dharmadam_Thuruth_%28Island%29.jpg/1920px-Dharmadam_Thuruth_%28Island%29.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Muzhappilangad_beach_%2812%29.JPG/1280px-Muzhappilangad_beach_%2812%29.JPG" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rocks_t_Muzhappilangad_Beach.jpg/1280px-Rocks_t_Muzhappilangad_Beach.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Rocks_at_Muzhappilangad_beach.jpg/1280px-Rocks_at_Muzhappilangad_beach.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Muzhappilangad_beach%28Edited%29.jpg/1280px-Muzhappilangad_beach%28Edited%29.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lesser_crested_terns_at_Muzhappilangad_beach.jpg/1920px-Lesser_crested_terns_at_Muzhappilangad_beach.jpg" alt="" />
<img width={'200px'} height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Fisherman_at_Muzhappilangad_Beach.jpg/1280px-Fisherman_at_Muzhappilangad_Beach.jpg" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/yrFTYxeu2crYAids8">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px"}}>

   <div><h3>Hotel Sky Pearl</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/40/f6/36/hotel-sky-pearl.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://www.tripadvisor.in/Hotel_Review-g777115-d3456169-Reviews-Hotel_Sky_Pearl-Kannur_Kannur_District_Kerala.html">click to view</a>
</div>


   <div>
<h3>Pranav Beach Resort</h3>
<div>
  <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vFztMYiI4uafmJf9SZwdaaDJfmweMDmjLw&s" alt="" />
</div>
<a href="1https://pranavbeachresort.com/">click to view</a>
</div>


   <div><h3>Sahara Suites</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIF7_N9rdEKgP5E27ZeTJSaxkXVzb3Br2vw&s" alt="" />
</div>
<a href="https://www.tripadvisor.in/Hotel_Review-g8709696-d21723362-Reviews-Sahara_Suites-Chakkarakkal_Kannur_District_Kerala.html">click to view</a>
</div>


   <div><h3>Hotel Sky Palace</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://ik.imagekit.io/tvlk/apr-asset/7b0-N4jo0JoCM7LcqEvqVNF3dd8gAi0X9eKT+dS2PfA=/poze_hotel/21/2168125/CjnzGj1W_d48442d39543a94b2cb5ebf66e6c9bd3.jpeg?tr=q-80,c-at_max,w-740,h-500&_src=imagekit" alt="" />
</div>
<a href="https://www.hotelskypalacekannur.com/">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Muzupland
