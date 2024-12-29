import {createBrowserRouter,RouterProvider} from  "react-router-dom"
import Loginpage from "./pages/Loginpage"
import SignupPage from "./pages/SignupPage"
import Homepage from "./pages/Homepage"
import Kasaragod from "./pages/Districts/Kasaragod"
import Kannur from "./pages/Districts/Kannur"
import Waynad from "./pages/Districts/Waynad"
import Kozhikode from "./pages/Districts/Kozhikode"
import Malappuram from "./pages/Districts/Malappuram"
import Palakkad from "./pages/Districts/Palakkad"
import Thrissur from "./pages/Districts/Thrissur"
import Ernakulam from "./pages/Districts/Ernakulam"
import Idukki from "./pages/Districts/Idukki"
import Kottayam from "./pages/Districts/Kottayam"
import Alappuza from "./pages/Districts/Alappuza"
import Pathanamthitta from "./pages/Districts/Pathanamthitta"
import Kollam from "./pages/Districts/Kollam"
import Trivandrum from "./pages/Districts/Trivandrum"
import Topplaces from "./pages/componentss/Topplaces"
import Ticket from "./pages/componentss/Ticket"
import About from "./pages/componentss/About"
import Profile from "./pages/componentss/Profile"
import NameUpdt from "./pages/update/NameUpdt"
import EmailUpdt from "./pages/update/EmailUpdt"
import MobileUpdt from "./pages/update/MobileUpdt"
import PlaceUpdt from "./pages/update/PlaceUpdt"
import AgeUpdt from "./pages/update/AgeUpdt"
import PswdUpdt from "./pages/update/PswdUpdt"
import { useSelector } from "react-redux"
import Periyarnatlpark from "./pages/Top10places/Periyarnatlpark"
import Athirapally from "./pages/Top10places/Athirapally"
import Pathmanabatmpl from "./pages/Top10places/Pathmanabatmpl"
import Edaykklcave from "./pages/Top10places/Edaykklcave"
import Thrissurvadakkum from "./pages/Top10places/Thrissurvadakkum"
import Bakelfort from "./pages/Top10places/Bakelfort"
import Wyndwlidlife from "./pages/Top10places/Wyndwlidlife"
import Alappyboat from "./pages/Top10places/Alappyboat"
import Kovalam from "./pages/Top10places/Kovalam"
import Munnartea from "./pages/Top10places/Munnartea"
import Ranipuram from "./pages/Subdistrict/kasaragod/Ranipuram"
import Anandhapuram from "./pages/Subdistrict/kasaragod/Anandhapuram"
import Kappil from "./pages/Subdistrict/kasaragod/Kappil"
import Chandragiri from "./pages/Subdistrict/kasaragod/Chandragiri"
import Maliqdinar from "./pages/Subdistrict/kasaragod/Maliqdinar"
import Bakelfortksd from "./pages/Subdistrict/kasaragod/Bakelfortksd"
import Ezimala from "./pages/Subdistrict/kannur/Ezimala"
import Lighhs from "./pages/Subdistrict/kannur/Lighhs"
import Muzupland from "./pages/Subdistrict/kannur/Muzupland"
import Payyambalam from "./pages/Subdistrict/kannur/Payyambalam"
import Stangelos from "./pages/Subdistrict/kannur/Stangelos"
import Thalessey from "./pages/Subdistrict/kannur/Thalessey"
import Banasura from "./pages/Subdistrict/waynad/Banasura"
import Edaykkal from "./pages/Subdistrict/waynad/Edaykkal"
import Kurumbala from "./pages/Subdistrict/waynad/Kurumbala"
import Kuruva from "./pages/Subdistrict/waynad/Kuruva"
import Tombofpazassi from "./pages/Subdistrict/waynad/Tombofpazassi"
import Wildlife from "./pages/Subdistrict/waynad/Wildlife"
import Kadalundi from "./pages/Subdistrict/kozikode/Kadalundi"
import Kappad from "./pages/Subdistrict/kozikode/Kappad"
import Kozikodbeach from "./pages/Subdistrict/kozikode/Kozikodbeach"
import Manachira from "./pages/Subdistrict/kozikode/Manachira"
import Pazassi from "./pages/Subdistrict/kozikode/pazassi"
import Smstreet from "./pages/Subdistrict/kozikode/smstreet"
import Bharath from "./pages/Subdistrict/malappuram/Bharath"
import Adayan from "./pages/Subdistrict/malappuram/Adayanpara"
import Kerlmkund from "./pages/Subdistrict/malappuram/Kerlmkund"
import Miniooty from "./pages/Subdistrict/malappuram/Miniooty"
import Rainforest from "./pages/Subdistrict/malappuram/Rainforest"
import Malapuza from "./pages/Subdistrict/palakkad/Malapuza"
import Mnagldam from "./pages/Subdistrict/palakkad/Mnagldam"
import Nelliyampthy from "./pages/Subdistrict/palakkad/Nelliyampthy"
import Parambikulam from "./pages/Subdistrict/palakkad/Parambikulam"
import Plakkadfort from "./pages/Subdistrict/palakkad/Plakkadfort"
import Silentvally from "./pages/Subdistrict/palakkad/Silentvally"
import Chavakkd from "./pages/Subdistrict/thrissur/Chavakkd"
import Guruvyur from "./pages/Subdistrict/thrissur/Guruvyur"
import Klalmdlm from "./pages/Subdistrict/thrissur/Klalmdlm"
import Shakthan from "./pages/Subdistrict/thrissur/Shakthan"
import Vadakkum from "./pages/Subdistrict/thrissur/Vadakkum"
import Bolgatty from "./pages/Subdistrict/kochi/Bolgatty"
import Cheraibeach from "./pages/Subdistrict/kochi/Cheraibeach"
import Chottanikara from "./pages/Subdistrict/kochi/Chottanikara"
import Fortkochi from "./pages/Subdistrict/kochi/Fortkochi"
import Mattancheriplc from "./pages/Subdistrict/kochi/Mattancheriplc"
import Vasco from "./pages/Subdistrict/kochi/Vasco"
import Damidukki from "./pages/Subdistrict/idukki/Damidukki"
import Meeshapuli from "./pages/Subdistrict/idukki/Meeshapuli"
import Periyar from "./pages/Subdistrict/idukki/Periyar"
import Ramakklmed from "./pages/Subdistrict/idukki/Ramakklmed"
import Topstation from "./pages/Subdistrict/idukki/Topstation"
import Ettumaaroor from "./pages/Subdistrict/kottayam/Ettumaaroor"
import Illikal from "./pages/Subdistrict/kottayam/Illikal"
import Kumarakam from "./pages/Subdistrict/kottayam/Kumarakam"
import Menutty from "./pages/Subdistrict/kottayam/Menutty"
import Mramala from "./pages/Subdistrict/kottayam/Mramala"
import Vaikom from "./pages/Subdistrict/kottayam/Vaikom"
import Alappybch from "./pages/Subdistrict/alapuza/Alappybch"
import Chettikiulangara from "./pages/Subdistrict/alapuza/Chettikiulangara"
import Houaeboat from "./pages/Subdistrict/alapuza/Houaeboat"
import Koirmusem from "./pages/Subdistrict/alapuza/koirmusem"
import Krishnpuram from "./pages/Subdistrict/alapuza/Krishnpuram"
import Revimusum from "./pages/Subdistrict/alapuza/Revimusum"
import Gavi from "./pages/Subdistrict/pathanamtitta/Gavi"
import Kavyoor from "./pages/Subdistrict/pathanamtitta/Kavyoor"
import Konni from "./pages/Subdistrict/pathanamtitta/Konni"
import Perundhenaruvi from "./pages/Subdistrict/pathanamtitta/Perundhenaruvi"
import Sabarimala from "./pages/Subdistrict/pathanamtitta/Sabarimala"
import Astamudi from "./pages/Subdistrict/kollam/Astamudi"
import Jadayu from "./pages/Subdistrict/kollam/Jadayu"
import Kollambeach from "./pages/Subdistrict/kollam/Kollambeach"
import Sasthamkotta from "./pages/Subdistrict/kollam/Sasthamkotta"
import Stfort from "./pages/Subdistrict/kollam/Stfort"
import Azimala from "./pages/Subdistrict/trivandrum/Azimala"
import Beemapally from "./pages/Subdistrict/trivandrum/Beemapally"
import Kovalambe from "./pages/Subdistrict/trivandrum/Kovalambe"
import Nepier from "./pages/Subdistrict/trivandrum/Nepier"
import Pathmanabha from "./pages/Subdistrict/trivandrum/Pathmanabha"
import Snkumugham from "./pages/Subdistrict/trivandrum/Snkumugham"
import Athiraplly from "./pages/Subdistrict/thrissur/Athiraplly"
import Shendurnt from "./pages/Subdistrict/kollam/Shendurnt"

function app(){

  const localstoragevlue=useSelector((state)=>state.login.loginData)
  console.log('local valur',localstoragevlue);
  
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Loginpage/>
    },
    {
      path:'/sign',
      element:<SignupPage/>
    },{
      path:'/home',
      element:localstoragevlue?. jswtoken ? <Homepage/> :<Loginpage/>
    },{
      path:'/ksd',
      element:localstoragevlue?. jswtoken ? <Kasaragod/>:<Loginpage/>
    },
    {
      path:'/knr',
      element:localstoragevlue?. jswtoken ? <Kannur></Kannur>:<Loginpage/>
    },{
      path:'/waynad',
      element:localstoragevlue?. jswtoken ? <Waynad/> :<Loginpage/>
    },{
      path:'/kozikode',
      element:localstoragevlue?. jswtoken ? <Kozhikode/> :<Loginpage/>
    },{
      path:'/malppuram',
      element:localstoragevlue?. jswtoken ? <Malappuram/> :<Loginpage/>
    },{
      path:'/palakkad',
      element:localstoragevlue?. jswtoken ? <Palakkad/> :<Loginpage/>
    },{
      path:'thrissur',
      element: localstoragevlue?. jswtoken ?<Thrissur/> :<Loginpage/>
    },{
      path:'/kochi',
      element:localstoragevlue?. jswtoken ? <Ernakulam/> :<Loginpage/>
    },{
      path:'idukki',
      element: localstoragevlue?. jswtoken ?<Idukki/>:<Loginpage/>
    },{
      path:'/kottayam',
      element:localstoragevlue?. jswtoken ?<Kottayam/>:<Loginpage/>
    },{
      path:'/alappuza',
      element:localstoragevlue?. jswtoken ?<Alappuza/>:<Loginpage/>
    },{
      path:'pathanmthitta',
      element:localstoragevlue?. jswtoken ?<Pathanamthitta/>:<Loginpage/>
    },{
      path:'/kollam',
      element:localstoragevlue?. jswtoken ?<Kollam/>:<Loginpage/>
     },{
      path:'/trivandrum',
      element:localstoragevlue?. jswtoken ?<Trivandrum/>:<Loginpage/>
     },{
      path:'/top',
      element:localstoragevlue?. jswtoken ?<Topplaces/>:<Loginpage/>
     },{
      path:'/ticket',
      element:localstoragevlue?. jswtoken ?<Ticket/>:<Loginpage/>
     },{
      path:'/about',
      element:localstoragevlue?. jswtoken ?<About/>:<Loginpage/>
     },
     {
      path:'/profile',
      element:localstoragevlue?. jswtoken ?<Profile/>:<Loginpage/>
     },{
      path:'/name',
      element:localstoragevlue?. jswtoken ?<NameUpdt/>:<Loginpage/>
     },
     {
      path:'/email',
      element:localstoragevlue?. jswtoken ?<EmailUpdt/>:<Loginpage/>
     },
     {
      path:'/mobile',
      element:localstoragevlue?. jswtoken ?<MobileUpdt></MobileUpdt>:<Loginpage/>
     },
     {
      path:"/place",
      element:localstoragevlue?. jswtoken ?<PlaceUpdt/>:<Loginpage/>
     },
     {
      path:'/age',
      element:localstoragevlue?. jswtoken ?<AgeUpdt/>:<Loginpage/>
     },{
      path:"/password",
      element:localstoragevlue?. jswtoken ?<PswdUpdt/>:<Loginpage/>
     },{
      path:'/periyar',
      element:localstoragevlue?. jswtoken ?<Periyarnatlpark/>:<Loginpage/>
     },{
      path:'/athirapally',
      element:localstoragevlue?. jswtoken ?<Athirapally/>:<Loginpage/>
     },{
      path:'/pathman',
      element:localstoragevlue?. jswtoken ?<Pathmanabatmpl/>:<Loginpage/>
     },{
      path:'/edaykkl',
      element:localstoragevlue?. jswtoken ?<Edaykklcave/>:<Loginpage/>
     },{
      path:'/vadakk',
      element:localstoragevlue?. jswtoken ?<Thrissurvadakkum/>:<Loginpage/>
     
     },{
      path:'/bakel',
      element:localstoragevlue?. jswtoken ?<Bakelfort/>:<Loginpage/>
     },{
      path:'/waynd',
      element:localstoragevlue?. jswtoken ?<Wyndwlidlife/>:<Loginpage/>
     },{
      path:'/alappy',
      element:localstoragevlue?. jswtoken ?<Alappyboat/>:<Loginpage/>
     },{
      path:'/kovalam',
      element:localstoragevlue?. jswtoken ?<Kovalam/>:<Loginpage/>
     },{
      path:'/munnartea',
      element:localstoragevlue?. jswtoken ?<Munnartea/>:<Loginpage/>
     },{
      path:'/rani',
      element:localstoragevlue?. jswtoken ?<Ranipuram/>:<Loginpage/>
     
     },{
      path:'/bakelfort',
      element:localstoragevlue?. jswtoken ?<Bakelfortksd/>:<Loginpage/>
     
     },{
      path:'/anandhapuram',
      element:localstoragevlue?. jswtoken ?<Anandhapuram/>:<Loginpage/>
     
     },{
      path:'/kappil',
      element:localstoragevlue?. jswtoken ?<Kappil/>:<Loginpage/>
     
     },{
      path:'/chandragiri',
      element:localstoragevlue?. jswtoken ?<Chandragiri/>:<Loginpage/>
     
     
     },{
      path:'/maliq',
      element:localstoragevlue?. jswtoken ?<Maliqdinar/>:<Loginpage/>
     },{
      path:'/ezimala',
      element:localstoragevlue?. jswtoken ?<Ezimala/>:<Loginpage/>
     },{
      path:'/light',
      element:localstoragevlue?. jswtoken ?<Lighhs/>:<Loginpage/>
     },{
      path:'/muzuppil',
      element:localstoragevlue?. jswtoken ?<Muzupland/>:<Loginpage/>
     },{
      path:'/payyambalam',
      element:localstoragevlue?. jswtoken ?<Payyambalam/>:<Loginpage/>
     },{
      path:'/st.angelos',
      element:localstoragevlue?. jswtoken ?<Stangelos/>:<Loginpage/>
     },{
      path:'/thalassery',
      element:localstoragevlue?. jswtoken ?<Thalessey/>:<Loginpage/>
     },{
      path:'/banasura',
      element:localstoragevlue?. jswtoken ?<Banasura/>:<Loginpage/>
     },{
      path:'/edakkal',
      element:localstoragevlue?. jswtoken ?<Edaykkal/>:<Loginpage/>
     },{
      path:'/kurumba',
      element:localstoragevlue?. jswtoken ?<Kurumbala/>:<Loginpage/>
     },{
      path:'/kuruva',
      element:localstoragevlue?. jswtoken ?<Kuruva/>:<Loginpage/>
     },{
      path:'/tomb',
      element:localstoragevlue?. jswtoken ?<Tombofpazassi/>:<Loginpage/>
     },{
      path:'/wildlife',
      element:localstoragevlue?. jswtoken ?<Wildlife/>:<Loginpage/>
     },{
      path:'/kappad',
      element:localstoragevlue?. jswtoken ?<Kappad/>:<Loginpage/>
     },{
      path:'/kozikodebeach',
      element:localstoragevlue?. jswtoken ?<Kozikodbeach/>:<Loginpage/>
     },{
      path:'/mananchira',
      element:localstoragevlue?. jswtoken ?<Manachira/>:<Loginpage/>
     },{
      path:'/pazassi',
      element:localstoragevlue?. jswtoken ?<Pazassi/>:<Loginpage/>
     },{
      path:'/smstreet',
      element:localstoragevlue?. jswtoken ?<Smstreet/>:<Loginpage/>
     },{
      path:'/kadalundi',
      element:localstoragevlue?. jswtoken ?<Kadalundi/>:<Loginpage/>
     },{
      path:'/bharatha',
      element:localstoragevlue?. jswtoken ?<Bharath/>:<Loginpage/>
     },{
      path:'/adayampara',
      element:localstoragevlue?. jswtoken ?<Adayan/>:<Loginpage/>
     },{
      path:'/keralakund',
      element:localstoragevlue?. jswtoken ?<Kerlmkund/>:<Loginpage/>
     },{
      path:'/miniooty',
      element:localstoragevlue?. jswtoken ?<Miniooty/>:<Loginpage/>
     },{
      path:'/rainforest',
      element:localstoragevlue?. jswtoken ?<Rainforest/>:<Loginpage/>
     },{
      path:'/malambuza',
      element:localstoragevlue?. jswtoken ?<Malapuza/>:<Loginpage/>
     },{
      path:'/managaldam',
      element:localstoragevlue?. jswtoken ?<Mnagldam/>:<Loginpage/>
     },{
      path:'/nelliyampathi',
      element:localstoragevlue?. jswtoken ?<Nelliyampthy/>:<Loginpage/>
     },{
      path:'/parambikulam',
      element:localstoragevlue?. jswtoken ?<Parambikulam/>:<Loginpage/>
     },{
      path:'/pkdfort',
      element:localstoragevlue?. jswtoken ?<Plakkadfort/>:<Loginpage/>
     },{
      path:'/silent',
      element:localstoragevlue?. jswtoken ?<Silentvally/>:<Loginpage/>
     },{
      path:'chavakkad',
      element:localstoragevlue?. jswtoken ?<Chavakkd/>:<Loginpage/>
     },{
      path:'/guruvayoor',
      element:localstoragevlue?. jswtoken ?<Guruvyur/>:<Loginpage/>
     },{
      path:'/kala',
      element:localstoragevlue?. jswtoken ?<Klalmdlm/>:<Loginpage/>
     },{
      path:'/pallyathira',
      element:localstoragevlue?. jswtoken ?<Athiraplly/>:<Loginpage/>
     },{
      path:'/shakthan',
      element:localstoragevlue?. jswtoken ?<Shakthan/>:<Loginpage/>
     },{
      path:'/vadakkum',
      element:localstoragevlue?. jswtoken ?<Vadakkum/>:<Loginpage/>
     },{
      path:'/bolgatty',
      element:localstoragevlue?. jswtoken ?<Bolgatty/>:<Loginpage/>
     },{
      path:'/cherai',
      element:localstoragevlue?. jswtoken ?<Cheraibeach/>:<Loginpage/>
     },{
      path:'/chottanikara',
      element:localstoragevlue?. jswtoken ?<Chottanikara/>:<Loginpage/>
     },{
      path:'/fortkochi',
      element:localstoragevlue?. jswtoken ?<Fortkochi/>:<Loginpage/>
     },{
      path:'/mattancheri',
      element:localstoragevlue?. jswtoken ?<Mattancheriplc/>:<Loginpage/>
     },{
      path:'/vascod',
      element:localstoragevlue?. jswtoken ?<Vasco/>:<Loginpage/>
     },{
      path:'/idukkidam',
      element:localstoragevlue?. jswtoken ?<Damidukki/>:<Loginpage/>
     },{
      path:'/periyarr',
      element:localstoragevlue?. jswtoken ?<Periyar/>:<Loginpage/>
     },{
      path:'/ramakkalmed',
      element:localstoragevlue?. jswtoken ?<Ramakklmed/>:<Loginpage/>
     },{
      path:'/pulimeesha',
      element:localstoragevlue?. jswtoken ?<Meeshapuli/>:<Loginpage/>
     },{
      path:'/station',
      element:localstoragevlue?. jswtoken ?<Topstation/>:<Loginpage/>
     },{
      path:'/wildlifee',
      element:localstoragevlue?. jswtoken ?<Wildlife/>:<Loginpage/>
     },{
      path:'/etmanur',
      element:localstoragevlue?. jswtoken ?<Ettumaaroor/>:<Loginpage/>
     },{
      path:'/illikkal',
      element:localstoragevlue?. jswtoken ?<Illikal/>:<Loginpage/>
     },{
      path:'/kumarakum',
      element:localstoragevlue?. jswtoken ?<Kumarakam/>:<Loginpage/>
     },{
      path:'/meenuty',
      element:localstoragevlue?. jswtoken ?<Menutty/>:<Loginpage/>
     },{
      path:'/maramala',
      element:localstoragevlue?. jswtoken ?<Mramala/>:<Loginpage/>
     },{
      path:'/vaikom',
      element:localstoragevlue?. jswtoken ?<Vaikom/>:<Loginpage/>
     },{
      path:'/alappybch',
      element:localstoragevlue?. jswtoken ?<Alappybch/>:<Loginpage/>
     },{
      path:'/chetti',
      element:localstoragevlue?. jswtoken ?<Chettikiulangara/>:<Loginpage/>
     },{
      path:'/houseboat',
      element:localstoragevlue?. jswtoken ?<Houaeboat/>:<Loginpage/>
     },{
      path:'/koirmusem',
      element:localstoragevlue?. jswtoken ?<Koirmusem/>:<Loginpage/>
     },{
      path:'/krishnapuram',
      element:localstoragevlue?. jswtoken ?<Krishnpuram/>:<Loginpage/>
     },{
      path:'/revi',
      element:localstoragevlue?. jswtoken ?<Revimusum/>:<Loginpage/>
     },{
      path:'/gavii',
      element:localstoragevlue?. jswtoken ?<Gavi/>:<Loginpage/>
     },{
      path:'/kavayoor',
      element:localstoragevlue?. jswtoken ?<Kavyoor/>:<Loginpage/>
     },{
      path:'/konnii',
      element:localstoragevlue?. jswtoken ?<Konni/>:<Loginpage/>
     },{
      path:'/perundhen',
      element:localstoragevlue?. jswtoken ?<Perundhenaruvi/>:<Loginpage/>
     },{
      path:'/sabari',
      element:localstoragevlue?. jswtoken ?<Sabarimala/>:<Loginpage/>
     },{
      path:'/astamudii',
      element:localstoragevlue?. jswtoken ?<Astamudi/>:<Loginpage/>
     },{
      path:'/parajadayu',
      element:localstoragevlue?. jswtoken ?<Jadayu/>:<Loginpage/>
     },{
      path:'/beachkollam',
      element:localstoragevlue?. jswtoken ?<Kollambeach/>:<Loginpage/>
     },{
      path:'/sasthamkotta',
      element:localstoragevlue?. jswtoken ?<Sasthamkotta/>:<Loginpage/>
     },{
      path:'/shendum',
      element:localstoragevlue?. jswtoken ?<Shendurnt/>:<Loginpage/>
     },{
      path:'/fortst',
      element:localstoragevlue?. jswtoken ?<Stfort/>:<Loginpage/>
     },{
      path:'/7mala',
      element:localstoragevlue?. jswtoken ?<Azimala/>:<Loginpage/>
     },{
      path:'/beema',
      element:localstoragevlue?. jswtoken ?<Beemapally/>:<Loginpage/>
     },{
      path:'/koovlm',
      element:localstoragevlue?. jswtoken ?<Kovalambe/>:<Loginpage/>
     },{
      path:'/nepier',
      element:localstoragevlue?. jswtoken ?<Nepier/>:<Loginpage/>
     },{
      path:'/pathmanabh',
      element:localstoragevlue?. jswtoken ?<Pathmanabha/>:<Loginpage/>
     },{
      path:'/shank',
      element:localstoragevlue?. jswtoken ?<Snkumugham/>:<Loginpage/>
     }

  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
export default app