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
     }
    

  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
export default app