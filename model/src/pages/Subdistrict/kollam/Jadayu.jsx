import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import kol from '/src/pages/Subdistrict/kollam/image/jadau.png'

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
const Jadayu = () => {
  useEffect(()=>{
  
      window.scrollTo(0, 0);
    },[])
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fjatayu-adventure-center-1718177242_fa1fb8c99bfa168b27b4.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Jatayu Earth's Center Nature Park</h1>
    <p>Jatayu Earth Center, also known as Jatayu Nature Park or Jatayu Rock, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India. It stands at an altitude of 350m (1200ft) above the mean sea level. Jatayu Nature Park holds the distinction of having the world’s largest bird sculpture, which is of Jatayu.[2]

The sculpture measures 200 feet (61 m) long, 150 feet (46 m) wide, 70 feet (21 m) in height and occupies 15,000 square feet (1,400 m2) of floor area). It was sculpted by Rajiv Anchal.[3][4]

This rock-theme nature park was the first Public–private partnership tourism initiative in the state of Kerala under the BOT model. The park is about 38 km (24 mi) away from the city of Kollam and 46 km (29 mi) away from the state capital, Thiruvananthapuram.

After completion, it became accessible to visitors on 17 August 2018</p>
<p><h3>Origins
</h3>
Ravana cuts Jatayu's wings, by Raja Ravi Varma
The park located near the town of Chadayamangalam (Jatayumangalam), which was named for Jatayu. Jatayu was a demi-god in Ramayana (a Hindu epic) who had the form of a vulture.

According to the epic, Ravana was attempting to abduct Sita to Lanka when Jatayu tried to rescue her. Jatayu fought valiantly with Ravana, but as Jatayu was very old Ravana soon defeated him, clipping his wings, and Jatayu fell onto the rocks in Chadayamangalam. Rama and Lakshmana while on the search for Sita, chanced upon the stricken and dying Jatayu, who informed them of the battle with Ravana and told them that Ravana had headed South.[7][8]</p>
  <p><h3>The Statue</h3>
  The statue is a representation of a legend - Ramayana -, and symbolizes the protection of women, and their honour and safety.[9] It was designed and sculpted by Rajiv Anchal.[3][4]</p>
<p><h3>Jatayu Museum</h3>
The statue houses the construction of the Jatayu museum. Jatayu,Chadayamangalam</p>
<p><h3>Adventure Park</h3>
The Park, on Adventure rock hill, opened on 5 December 2017.</p>
<p><h3>Cave Resort</h3>
Jatayu is said to have taken refuge in a cave after his battle with Ravana. An Ayurvedic and Siddha cave resort is under construction and will offer ayurvedic healing paired with tales of Jatayu.[10][11][12]

<h3>Dedication</h3>
The park opened to visitors on 4 July 2018 and was soft-inaugurated by Pinarayi Vijayan, Chief Minister of Kerala.[13][14] The park's first phase was worth ₹100 crore (US$12 million) and included the adventure zone having 3 km (1.9 mi) radius.[15][16] On 29 November 2015, Dubai Corporation for Tourism and Commerce's Director of stakeholder relations, Majid Al Marri visited the under construction Jatayu Nature Park along with the then Chief Minister of Kerala, Mr. Oommen Chandy.</p>
<p><h3>Location and access</h3>
The park is located on a hilltop in Kollam district in Kerala. No special transportation is required to get into the park.

To reach the top, where Jatayu's sculpture is present, visitors can either take the 826 steps walkway up the hill, or take a cable car.

An additional paid ticket is required for cable car route.

There is a security screening process on the way to the top.

Cameras and bags are allowed. Food is not allowed. Water is allowed, but not in a plastic bottle.

Free filtered water is available at the top. There are multiple cafes present throughout the route.</p>
<p> <h3>Inscriptions and plaques</h3>
A plaque outside the museum pays tribute to the fallen Jatayu, in a poem translated by K. Jayakumar, was dedicated by Pinarayi Vijayan, the Chief minister of Kerala.

The plaque at Jatayu Nature Park, dedicated by Shri Pinarayi Vijayan
The plaque at Jatayu Nature Park, dedicated by Shri Pinarayi Vijayan
"Stand atop this hill for a while in contemplation
 Here is where Jatayu fell
 Trying to block with his talons and beak
 The alien gnome who seized in deceit
 The priceless pearl of a daughter..."</p>





<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'} src="https://www.indigocruise.com/images/tourist-place/06.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvQlXUJuNYCTpyEXSVbz3s_ICrlCWAoZNgQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7GUYdfl5Fg0t_C_XyR4x85brErX231by9w&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qFg5n0Gk_zDjPz0UIFKdIyN5AgsO9slTLg&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPattOgF-vFmh1FuT1091IQicP6zHE4eTcA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuf6DQeYyPhql0igUtgsbIyVWwqTecVfOzVA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/bgCa2gOHpTg/maxresdefault.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e0/6d/20/jatayu-bird-sculpture.jpg?w=900&h=-1&s=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzW8mPMKjKzsOKEW5BGrnZSjnPYqDAwuRs7Q&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://static.wixstatic.com/media/9b64ce_31679638098742ae8d8f2a9b1fd02be1~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/9b64ce_31679638098742ae8d8f2a9b1fd02be1~mv2.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c511T06U1uo0Z3zOr_qH8IyT2m9OitJXjQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fpanoramic-view-of-jadayupara-1729242762_fa86d38c4392cdb48818.webp&w=3840&q=75" alt="" />
<img  width={'200px'} height={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jatayu_Earth_Centre.jpg/1200px-Jatayu_Earth_Centre.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeQGpbSzZ83msyqdJz33_MTRCxxdIVisKRg&s" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={kol}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   The Brook Serene</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwDppEmTNqc87tOUtGDqdnk0EwmN4SRXAag&s" alt="" />
</div>
<a href="https://www.thebrookserene.com/">click to view</a>
</div>


   <div>
<h3>Elixir Cliff Beach Resort </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GKovJNFcjdo-_sFQIYfCFABTJDjB2QSkYw&s" alt="" />
</div>
<a href="https://www.elixircliff.com/">click to view</a>
</div>


   <div><h3>
  
   NSK Anamthara Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPneid3mSyoGlRfwldBPDQb-mcIAs87GX2ww&s" alt="" />
</div>
<a href="https://anamthara.com/">click to view</a>
</div>


   <div><h3>Munroe Island Lake Resort </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUywJCZQ9fpOsdJH1FClS4mE8pYZB8AnpHnw&s" alt="" />
</div>
<a href="https://www.munroeislandlakeresort.in/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Jadayu
