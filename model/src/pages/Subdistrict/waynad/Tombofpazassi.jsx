import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tom from '/src/pages/Subdistrict/waynad/image/pazassi.png'

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
const Tombofpazassi = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://ttm.vintbit.com/wp-content/uploads/2024/10/TTM-Blog-FI-32.webp" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Pazhassi Tomb</h1>
    <p>The Pazhassi Tomb, located in Mananthavady in the Wayanad district of Kerala, stands as a poignant reminder of the valiant history of Kerala and its fight against colonial rule. This monument is dedicated to Pazhassi Raja, also known as the Lion of Kerala, who was a prominent freedom fighter and one of the earliest leaders to revolt against British dominance in India. The tomb, nestled amidst the lush greenery of Wayanad, attracts historians, tourists, and those who wish to pay homage to one of Kerala's most revered heroes.

<h3>The Legacy of Pazhassi Raja</h3>
Pazhassi Raja, born in the Kottayam royal family in the 18th century, is celebrated for his staunch resistance against the British East India Company. He led several guerrilla warfare campaigns against the British forces, utilizing the dense forests of Wayanad as his base. His strategic acumen and relentless spirit earned him the title of the "Lion of Kerala."

Pazhassi Raja's resistance is notable for its early challenge to British colonial power, long before the well-known revolts of the 19th century. Despite facing numerous setbacks, including betrayal and the loss of his close allies, he continued to fight for the freedom and dignity of his people until his death in 1805.

<h3>The Significance of Pazhassi Tomb</h3>
The Pazhassi Tomb is built at the site where Pazhassi Raja's body was cremated. The tomb was constructed in 1910 by the British, ironically honoring the very man who had fiercely opposed their rule. The structure is a simple yet elegant memorial that reflects the respect and admiration the people of Kerala have for their fallen hero.

The tomb is not just a memorial; it is a symbol of resistance and the indomitable spirit of the people of Kerala. It serves as a reminder of the sacrifices made by Pazhassi Raja and his followers in their struggle for freedom. The tomb's serene surroundings and its historical significance make it a place of reflection and reverence.

<h3>Architectural Features</h3>
The Pazhassi Tomb is designed in a traditional style, reflecting the architectural sensibilities of the region. The tomb is constructed with laterite stone, a common building material in Kerala, and features a tiled roof. The simplicity of the structure belies the profound historical significance it holds.

Inside the tomb, there is a statue of Pazhassi Raja, which was installed to honor his memory. The surrounding area is well-maintained, with lush gardens and pathways that provide a tranquil environment for visitors. The tomb's location, amidst the natural beauty of Wayanad, adds to its solemn and respectful ambiance.

<h3>Nearby Attractions</h3>
Visitors to the Pazhassi Tomb can also explore several other attractions in the Wayanad district. The nearby Pazhassi Raja Museum, located in the same compound, offers a deeper insight into the life and times of Pazhassi Raja. The museum houses a collection of artifacts, historical documents, and exhibits that chronicle the history of the Kottayam royal family and their resistance against British rule.

Wayanad is known for its stunning natural beauty, including lush forests, rolling hills, and scenic waterfalls. Some popular tourist spots near the Pazhassi Tomb include the Edakkal Caves, which feature ancient rock carvings, the picturesque Pookode Lake, and the majestic Meenmutty and Soochipara Waterfalls. The Wayanad Wildlife Sanctuary is another must-visit destination for nature and wildlife enthusiasts.

<h3>Accessibility and Visitor Information</h3>
The Pazhassi Tomb is easily accessible from the town of Mananthavady, which is well-connected by road to other major towns and cities in Kerala and Karnataka. The nearest railway station is Kozhikode (Calicut) and the nearest airport is Calicut International Airport.

The tomb is open to visitors throughout the year, and there is no entry fee. It is advisable to visit during the cooler months from October to March, when the weather is pleasant and conducive to sightseeing. The tranquil surroundings of the tomb provide a peaceful retreat for reflection and learning about Kerala's rich history.

The Pazhassi Tomb stands as a testament to the bravery and resilience of Kerala's great warrior king, Pazhassi Raja. It is a place of historical importance, offering visitors a chance to connect with the past and pay their respects to a national hero. Whether you are a history enthusiast, a student of India's freedom struggle, or simply a traveler seeking to explore Kerala's cultural heritage, a visit to the Pazhassi Tomb is an enriching and inspiring experience. Plan your trip to this historic site in Wayanad and immerse yourself in the legacy of the Lion of Kerala.</p>


<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Kannur International Airport, about 65 km | Calicut International Airport, about 115 km.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Vadakara Railway Station, about 51 km away | Kozhikode Railway Station, about 66 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Bus</h3>
    Wayanad KSRTC Bus Station, around 800 meters away</p> </div>
   </div>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={'200px'} src="https://wayanadtourism.co.in/images//tourist-places/pazhassi-raja-tomb-wayanad/pazhassi-raja-tomb-wayanad-tourism-opening-time-closing.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://wayanadtourism.co.in/images/places-to-visit/headers/pazhassi-raja-tomb-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://www.archaeology.kerala.gov.in/uploads/monuments/large/Pazhassi%20Kudeeram,%20Mananthavady_01022019101358.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://www.tourmyindia.com/states/kerala/images/pazhassi-Raja-Tomb-Wayanad-2.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-1v8dFsJp_DjX-z8yRiJ52RfWWTzNV5X0w&s" alt="" />
<img width={'200px'} height={'200px'} src="https://wayanadtourism.co.in/images//tourist-places/pazhassi-raja-tomb-wayanad/pazhassi-raja-tomb-wayanad-tourism-entry-ticket-price.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYcziigRAMGxcZtbGHeaJWyOSCBieHzwKJQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXanElfDJm9EplSvV8y9H5-QVeT_wbXKz3Q&s" alt="" />
<img width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/eYHt9ZAc7KE/mqdefault.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsTXDR3I-GKGNavWRaKApFnQtK-OMegKwHA&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKT4v_izkyHyE7HaH-wCfXOuzdhAXj-BebiA&s" alt="" />
<img width={'200px'} height={'200px'} src="https://ttm.vintbit.com/wp-content/uploads/2024/10/TTM-Blog-FI-32.webp" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MQtAC-BMny678IyMdcVMOMDsvNVwynN7PQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_hOETgkvf2N9lWa144gQAsiWHCg-07DqeA&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={tom}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/UdSFvkxq7gFoJLpr6">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>

   <div><h3>Fern Tree Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoQht2cFzlROCLmFZsZPQNspCzrJY9yTYiA&s" alt="" />
</div>
<a href="https://ferntreeresort.com/">click to view</a>
</div>


   <div>
<h3>
Humming Breeze Nature Retreat </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Vv_ZweSYoSm6U6rfxXn7gTK7i_v5gZfe0A&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/humming_breeze-details-wayanad.html">click to view</a>
</div>



<div>
<h3>DJ River Meadows, Resort in Wayanad </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://r1imghtlak.mmtcdn.com/5ef62be0ee6c11ecb9ac0a58a9feac02.jpg" alt="" />
</div>
<a href="https://djrivermeadows.com/">click to view</a>
</div>


   <div><h3>Serene Crest Resort</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD42B_I4fWuhA84ECFjuH6-UFHRNTj2G2CPQ&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/serene_crest_resort_and_spa-details-wayanad.html">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Tombofpazassi
