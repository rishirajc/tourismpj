import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import idu from '/src/pages/Subdistrict/idukki/image/periyar.png'

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

const Periyar = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fidukki-wildlife-sanctuary-1724134277_59433e0027c02c279227.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Periyar National Park</h1>
        <p>Periyar National Park and Wildlife Sanctuary (PNP) is a protected area located in the districts of Idukki and Pathanamthitta in Kerala, India. It is a renowned elephant and tiger reserve. The protected area encompasses 925 km2 (357 sq mi), of which 305 km2 (118 sq mi) of the main zone was declared as the Periyar National Park in 1982. The park is a repository of rare, endemic, and endangered flora and fauna and forms the major watershed of two important rivers of Kerala: the Periyar and the Pamba.

The park is located high in the Cardamom Hills and Pandalam Hills of the south Western Ghats along the border with Tamil Nadu. It is 4 km (2.5 mi) from Kumily, Thekkady, 86 km (53 mi) south east of Thodupuzha, 103 km (64 mi) east of Kottayam, 110 km (68 mi) west of Madurai and 147 km (91 mi) southeast of Kochi</p>
      
      <h3 style={{backgroundColor:"lightgreen"}}>History</h3>
      <p>The first official action towards the conservation of wildlife and biodiversity in Kerala was taken in 1934 by the Maharaja of Travancore, Chithira Thirunal Balarama Varma, by declaring the forests around Periyar lake as a private reserve to stop the encroachment of tea plantations. It was founded as Nellikkampatty Reserve. It was consolidated as a wildlife sanctuary in 1950 after the political integration of India. The sanctuary was included in Project Tiger, a Central Government initiative, and was renamed the Periyar Tiger Reserve in 1978.</p>
   <h3 style={{backgroundColor:"lightgreen"}}>Geography</h3>
   <p>Periyar National Park lies in the middle of a mountainous area of the Cardamom Hills. In the north, the boundary commences from the point nearest to the Medaganam in the interstate boundary up to Vellimalai. To the east the boundary follows the inter-state boundary from Vellimalai to Kallimalai Peak[3] (1615 m) it is bounded by mountain ridges of over 1,700 m (5,600 ft) altitude. Toward the west it expands into a 1,200 m (3,900 ft) high plateau. From this level the altitude drops steeply to the deepest point of the reserve, the 100 metre valley of the Pamba River. The highest peak in the park is the 2,019 m (6,624 ft) high Kottamala, the southernmost peak in India higher than 2,000 metres (6,562 ft). The Periyar and Pamba Rivers originate in the forests of the reserve, both in Mlappara.[4] The other prominent peaks within the park are Pachayarmala, Vellimala, Sunderamala, Chokkampetti mala and Karimala.[5] The topography consists of steep and rolling hills which are thickly wooded.

The sanctuary surrounds Periyar Lake, a reservoir measuring 31 km2 (12 sq mi),[6] which was formed when the Mullaperiyar Dam was erected in 1895. The reservoir and the Periyar River meander around the contours of the wooded hills, providing a permanent source of water for the local wildlife.</p>
   <h4 style={{backgroundColor:"lightgreen"}}>Climate</h4>
   <p>The temperature varies depending upon the altitude, ranging between 15 °C in December and January and 31 °C in April and May. Annual precipitation is between 2000 and 3000 mm, with about two-thirds occurring during the southwest monsoon between June and September. Much of the rest occurs during the northeast monsoon between October and December. Summers are warm with some precipitation in April and winters are cold.</p>
   <h4 style={{backgroundColor:"lightgreen"}}>Boundaries</h4>
   <p>North: The boundary commences from the point nearest to the Medaganam in the interstate boundary up to Vellimalai.
East: Thence the boundary follows the inter-state boundary from Vellimalai to Kallimalai Peak (1615 m).
South: Thence the boundary follows along the main ridge to Chokkampettymalai Peak (1805 m). Thence along the main ridge to Udumalai (1594 m) (the same boundary which divides Ranni Forest Division and existing Periyar Tiger Reserve).
West: Thence the boundary proceeds due north along the main ridge dividing Periyar Tiger Reserve and Ranni Forest Division to Manikamalai and thence along the ridge to Sundaramalai 1813 m from Sundaramalai the boundary runs along the main ridge to Mangaladevi top 1737 m, and thence to Pachimalai top 1805 m from Puchimala top the boundary follows the Nallah in itself bank, Nallah coming from Mannarkavala and then proceed along Cherakottai river until it joins the Periyar lake between Pandaravara-malai and Poupara</p>
   <h4 style={{backgroundColor:"lightgreen"}}>Mammals</h4>
   <p>35 species of mammals have been recorded in the park, including many threatened species. It is an important tiger and elephant reserve. A total of 40 Bengal tigers were counted across 925 square kilometers of the park in 2017.[9] It is valuable for the Asian elephant, and a few white tigers are also found here. Other mammals include the gaur, sambar, wild pig, Indian giant squirrel, Travancore flying squirrel, jungle cat, Dhole, sloth bear, Nilgiri tahr, lion-tailed macaque, Nilgiri langur, Salim Ali's fruit bat, stripe-necked mongoose, and Nilgiri marten</p>
    <h4 style={{backgroundColor:"lightgreen"}}>Birds</h4>
    <p>About 266 species of birds can be seen in the park, including migrants. Endemic birds include the Malabar grey hornbill, Nilgiri wood pigeon, blue-winged parakeet, Nilgiri flycatcher, crimson-backed sunbird, white-bellied redstart, and black-necked stork.[11]

A four-day survey conducted on 1–4 December 2016, organised under the aegis of the Periyar Tiger Reserve (PTR), found the presence of 13 new bird and 16 butterfly species that were undetected earlier. The newly found bird species included Eurasian woodcock (Scolopax rusticola), steppe gull (Larus fuscus barbensis), grey-necked bunting (Emberiza bruniceps) and paddyfield warbler (Acrocephalus agricola)</p>
    <p>
        <h4 style={{backgroundColor:"lightgreen"}}>Reptiles</h4>

Bicolored frog (Malabar frog) Clinotarsus curtipes
There are 45 species of reptiles - 30 snakes, 13 lizards, and two turtles. Snakes include the king cobra, Malabar pit viper, and striped coral snake.

<h4 style={{backgroundColor:"lightgreen"}}>Amphibians </h4>
Amphibians in the park include caecilians, frogs, and toads. Species include the Malabar gliding frog, Asian toad, fungoid frog, and bicolored frog.[13]

<h4 style={{backgroundColor:"lightgreen"}}>Fish </h4>
About 40 species of fish are found in the local lakes and rivers. These include the Periyar trout, Periyar latia, Periyar barb, channa barb, and Travancore loach.[14]

 <h4 style={{backgroundColor:"lightgreen"}}>Insects</h4>

Mycalesis patnia junonia in Periyar National Park

Hemicordulia asiatica in Periyar National Park
There are about 160 butterfly taxa, including South India's largest butterfly, the southern birdwing; lime butterfly; Malabar tree nymph; Indian awlking; Evershed's ace, which is endemic to the South Western Ghats; southern spotted ace, which is also endemic to the southern parts of the western ghats, but is more common and with a greater range than T. evershedi; Madras ace; the highly threatened Travancore evening brown, which can only be found in cane brakes; various kinds of uncommon Mycalesis species (the bushbrowns), some of which are endemic to the Western Ghats; and many kinds of moths, such as the Southern Atlas moth.[15] A survey jointly conducted by the Periyar Tiger Conservation Foundation, Indian Dragonfly Society and the Forest and Wildlife Department in October 2017 found 77 species of odonata, including the Asian emerald (Hemicordulia asiatica).[16][17] A survey jointly conducted by the same team in September 2018 found eight more new species.</p>





<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Cochin International Airport, about 117 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Kottayam Railway Station, about 86 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Kattappana KSRTC Bus Stand, about 33 km away.</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={"200px"} height={"200px"} src="https://ihplb.b-cdn.net/wp-content/uploads/2017/04/Periyar-Wildlife-Sanctuary.jpg" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1QJmvDWWJNaO97D157eGkloI54pTuBhQxQ&s" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2acRmgR6krpqtTBQ7qwJRRqVc7CvupnRgw&s" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp529DhdxTbaT49YNp2wY6pIGVu4wnphGh7A&s" alt="" />
<img width={"200px"} height={"200px"}  src="https://somatheeram-c3c5.kxcdn.com/wp-content/uploads/2019/03/Somatheeram-Kerala-roundtrip-Wildlife-min.jpg" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T66dwNsusRFTjo5tW-y4fvaaLNA66jX-JA&s" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmbC1PoDcoCEwEBN0HLPk0IPuFCNzYTDTXw&s" alt="" />
<img width={"200px"} height={"200px"}  src="https://media.istockphoto.com/id/1311846127/photo/elephant-family-in-wild-nature-walking-near-the-forest.jpg?s=612x612&w=0&k=20&c=5nFgfY0PIBcQhqXf3DLUJBMS8zVN6AKBFUHJoAIjQWk=" alt="" />
<img width={"200px"} height={"200px"}  src="https://www.tripsavvy.com/thmb/koQxKTRhH19EElKs8seqn1H_ilI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-172881080-241fac55f98040a58a4866b482715169.jpg" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBPLBEx1NkWaHrd8MW6pMcNnlIeNFhUoDdA&s" alt="" />
<img width={"200px"} height={"200px"}  src="https://i.ytimg.com/vi/MHL9ouupjV4/maxresdefault.jpg" alt="" />
<img width={"200px"} height={"200px"}  src="https://springdaleheritage.in/assets/img/periyar-national-park.jpg" alt="" />
<img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnc3St_0sw46O8sk4THPmtWP9GMWx8PE-PQ&s" alt="" />
  <img width={"200px"} height={"200px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRt4dpPPfEMWAGcQwGAujWLEnJun2wcj7Bw&s" alt="" />
</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={idu}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Laurel Heights Resort Idukki</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b7/69/5b/caption.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="http://www.laurelheightsidukki.com/">click to view</a>
</div>


<div><h3>Arabian Holiday Resort </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/462722585.jpg?k=9e3a5e8b8fc55eaa62d1909e8d872748168562e9e3ce4698df7a277e2a9a2e26&o=&hp=1" alt="" />
</div>
<a href="https://www.arabianholidayresort.com/book-now/">click to view</a>
</div>


   <div><h3>
  
   
The Highlander</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/523942660.jpg?k=551a9cb1e7765ae4ab10034198e55c35d853bbd14ad59580659c8393334a04db&o=&hp=1" alt="" />
</div>
<a href="http://www.laurelheightsidukki.com/">click to view</a>
</div>


   <div><h3>Kananam Retreat</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG6uSCKCONF__PbORkmYDsNJ79RPfvLnBVQ&s" alt="" />
</div>
<a href="https://kananam.com/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Periyar
