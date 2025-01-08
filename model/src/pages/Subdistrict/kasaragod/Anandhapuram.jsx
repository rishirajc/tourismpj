import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ana from '/src/pages/Subdistrict/kasaragod/image/anandha.png'

const IMG=styled.div`
width: 400px;
height: 400px;
background-color: antiquewhite;
border-radius: 14px;
box-shadow: 1px 1px 20px rgb(202, 189, 189);


`
const IMGBOX=styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

`
const FOOT=styled.div`
    width: 100%;
    height: 117px;
    background-color: antiquewhite;
    padding-top: 254px;
`
const Anandhapuram = () => {
  return (
    <div style={{width:"100%",height:"600px"}} >
<iframe width="100%" height="600px" src="https://www.youtube.com/embed/0fXiGMlzgXw?si=fxFgyYGLVu9x9CG7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>About Ananthapura Lake Temple</h1>
<p>Ananthapadmanabhaswamy Temple or Ananthapura Lake Temple is a Hindu temple in the middle of a lake in the village of Ananthapura, around 6 km from the town of Kumbla in Manjeshwaram Taluk of Kasaragod District of Kerala, South India. This is the only Hindu lake temple in Kerala, and as per some traditions, is believed to be the original seat (Moolasthanam) of Ananthapadmanabha Swami (Padmanabhaswamy Temple) Thiruvananthapuram. It is considered one among the 108 Abhimana Kshethram of Vaishnavate tradition. Legend has it that this is the original site where Ananthapadmanabha settled down.[1][2]

The lake in which the sanctum sanctorum is built measures about 2 acres. An interesting spot to keep in mind while visiting the temple is a cave to the right (North) corner of the lake. According to the local legend, the deity Anantha Padmanabha chose to go all the way to Thiruvananthapuram, through that cave. Hence, both the places retain similar names, being on either end of the region.</p>

<h3>Legends</h3>
<p>The past of the temple is still obscure except for some myths. It was at this place where Divakara Muni Vilwamangalam, the great Brahmin sage, did penance and performed poojas. Legend has it that one day Lord Narayana appeared before him as a child. The boy’s face was glowing with radiance and this overwhelmed the sage. He became anxious and asked who he was. The boy replied that he had no father no mother and none at home. Vilwamangalam felt pity for the boy and allowed him to stay there. The boy proposed a condition that whenever he feels humiliated he will leave the place at once. He served the sage for sometime. But soon his juvenile pranks became intolerable for the sage and he reacted violently. Humiliated, the boy disappeared from there after proclaiming that if Vilwamangalam wants to see him he would have to go to Ananthankat, the forest of serpent god Anantha.

Vilwamangalam soon realized that the boy was none but the Lord himself and he had great repentance. He found a cave at the place where the boy disappeared and he proceeded further into the cave in search of the boy. He reached the sea and proceeded further toward the south and at last he reached a woody area near the sea. Vilwamangalam saw the child who soon disappeared into huge illippa tree (Indian butter tree or Mahua tree). Immediately the tree fell down and assumed the shape of Lord Vishnu lying on a thousands hooded serpent.</p>
<h3>Structure and Deity</h3>
<p>The temple is unique in its structural aspects for it is erected in the middle of an impressive lake of 302 feet. The lake is gifted with a perennial supply of pure spring water. We can find the ruins of temples all round the lake which stand testimony to the fact that it was part of a great temple complex. The sreekovil (sanctum sanctorum), Namaskara-mandapam, Thitappalli, and shrines of Jala-Durga and the entrance of the cave are located in the lake. The Namaskara-mandapam is connected to the eastern rock by a foot-bridge which is the only passage to the Sreekovil.

The principal deity is Lord Vishnu. One of the key features of the temple is that the original idols in the sanctum sanctorum were not made of metal or stone, but of a rare combination of more than 70 medicinal materials called `kadu-sharkara-yogam.' These idols were replaced by panchaloha metals in 1972. They were donated by Kaanchi Kaamakoti Mathaadhipathi Jayendra Saraswathi Thiruvatikal. Efforts are going on now to reinstall the idols made with `kadu-sharkara-yogam.' The Lord Vishnu idol is in a sitting pose over a five-hooded serpent king Lord Anantha. The lake temple is open to all visitors regardless of caste or creed. The District Tourism Promotion Council has plans to preserve the temple and its surroundings for its uniqueness.

The temple has an excellent collection of wood carvings on the ceilings of the Mandapam. These carvings depict the incidents taken from the stories of Dashavatara (the ten incarnations of Lord Vishnu). Some of them are painted. The Nava-grahas (nine planets) are painted at the Muktha-mandapam. On either side of the Sreekovil the dwaara-palakas (Jays and Vijaya) are beautifully carved in wood.</p>

<h3>
Crocodile
</h3>
<p>Babiya, a crocodile who lived in the lake, was also famed for being vegetarian. It died aged 75 on October 9, 2022. It is believed that it ate only temple offerings that were served to her twice a week and never harmed a single human.</p>
<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
<div style={{width:"100%",height:'300px'}}>
<div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px",paddingTop:'20px'}}> <p>
The temple is open to all regardless of religion or caste. The nearest major railway station to Ananthapura Lake Temple is Kumbla railway station which is about 5 km from here. Mangalore Airport is the nearest airport which is about 54 km (via NH66) from here. Kannur International Airport, is about 123 km. To reach there by road one has to take a deviation from Naikap (4 km from Kumbla) on the Kumbala-Badiyadka road.</p> </div>

</div>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}><Button style={{backgroundColor:"green",marginLeft:"50px"}} variant="success">click here</Button></Link> 


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlucFpeE1IArOqoIFnOze9yJDfBGLkiN0LoQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0m0tQ3tc2RmyWqBKm_J3fjcE4ZVXblKR0g&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XfVwARN3JSMPXZukZGReyUmNpeBQOz59wg&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZu9t5QF6anwLd_UZZUmNt-j-E3oaAhPJ8PA&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbWt6gWcXn6E0UHFCB_XteD1PwW7PXbRydg&s" alt="" />
<img width={'200px'} height={'200px'} src="https://www.keralatourism.org/kasaragod/investment/images/top-attraction/large/anathapuram-lake-temple.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVW2E7Fby1JiGVu314EjnzN8AS90gQOO0jg&s" alt="" />
<img width={'200px'} height={'200px'} src="https://www.keralatourism.org/images/malabar/static-banner/large/Ananthapura_Lake_temple-25102019111537.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvz0gtQ2cFMpT3ulh4nmd6IoigttIX_oYlw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO15NjFwWGExuOB_YpcuLNZEaxJ_asfnS62w&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzGuGnuhQuGVWxn0CUdsxo5hS_SxIN2Qf3g&s" alt="" />
<img width={'200px'} height={'200px'} src="https://ananthapuratemple.com/wp-content/uploads/2014/09/Ananthapura-Temple-Slider-5.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkGtOgXVvL6lWfYUA_6hbp9AJSoIgFG-7tg&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJWhS09Nro0_sfigbzreIA_z68b7wVc--TQ&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>


<div>
<div>
<IMG><img src={ana}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/TPW2pxtQAyt4Lytn8">CLICK TO REVIEW MAP</a>
</div>

</div>



<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px"}}>
<div style={{width:"250px"}}>
<h3>Iman Beach Resort</h3>
<div>
<img style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://i.ytimg.com/vi/_xplrnbZkJg/sddefault.jpg" alt="" />
</div>
<a href="https://www.cmyvcard.com/ImanBeachResort">click to view</a>
</div>

<div  style={{width:"250px"}}>
<h3>
Meezan beach resort </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-4OZcKt1rm0GCqwVqTO-_WYGvPQNPEtWag&s" alt="" />
</div>
<a href="https://www.google.com/travel/search?q=Meezan%20beach%20resort&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72560029%2C72573224%2C72614662%2C72616120%2C72619927%2C72628720%2C72647020%2C72648289%2C72658035%2C72686036%2C72760082%2C72803964%2C72808078%2C72832973&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRwopEicyJTB4M2JhMzYzZmZiOGY3ZjllNToweDMwMWM0NzU2MmJkN2Y0MDASGhIUCgcI6A8QDBgUEgcI6A8QDBgVGAEyAhAA&qs=CAEyE0Nnb0lnT2pmM3VMcWtZNHdFQUU4AkIJCQD01ytWRxwwQgkJAPTXK1ZHHDA&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwiQ38fn7rOKAxUAAAAAHQAAAAAQEg">click to view</a>
</div>

<div  style={{width:"250px"}}>
<h3>Beach View Resort Ibthisam's Palace</h3>
<div>
<img style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://lh5.googleusercontent.com/p/AF1QipPm8lJQSsOyYcO8EmJGG6ZeZgC9WSv_2x2-v4X_=s296-w296-h168-n-k-no-v1" alt="" />
</div>
<a href="https://www.google.com.pk/travel/hotels/Kasaragod/entity/CgsItOqF-caIvOTgARAB?utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjAqeSn77OKAxUAAAAAHQAAAAAQBA&ts=CAEaIAoCGgASGhIUCgcI6A8QDBgUEgcI6A8QDBgVGAEyAhAAKgQKABoA">click to view</a>
</div>

<div  style={{width:"250px"}}>
<h3>KTDC BEKAL BEACH CAMP</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmknzOuI0lwTq4k0lQ9Hri_w__231rJXVLOg&s" alt="" />
</div>
<a href="https://www.keralatourism.org/hotels/bekal-beach-camp/3290">click to view</a>
</div>

</div>


<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Anandhapuram
