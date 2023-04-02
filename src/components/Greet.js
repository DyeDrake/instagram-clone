import React from 'react'
import iglogo from '../loginpics/igtextpic.jpg'
import fblogo from '../loginpics/fblogo.png'
import appstore from '../loginpics/appstore.png'
import playstore from '../loginpics/placestorelogo.webp'
import '../App.css';
//function Greet(){
//    return <div>hello vishwas</div>
//}
const Greet = () => (
    
<div className='loginpage'>
     <center>
    <div className='entryfield' >
    <img src={iglogo} id='ig' alt='' width='100px' height='45px'  />   <br/>
     <input type="text" placeholder='username'/> <br/>
     <input type="password" placeholder='password' /><br/>
     <input type="button" value='login'  id='login'/><br/>
     <p>-------OR--------</p><br/>
     <img src={fblogo} alt='' height='15px' width='15px'   /> <a href='www.fb.com'>Log in with Facabook</a> <br/>
     <a href='www.reset.com'>Forgotten your password?</a><br/>
     </div>

     <div className='createnew'>
      <p>dont have an account? <a href='index.signup'> sign up</a></p>
     </div>

     <div className='getapp'>
        

      
      <p>get the app</p><br/>
    <img src={appstore} alt='' width='75' height='27'  />
    <img src={playstore} alt='' width='75' height='30'  />
      
     </div>
     </center>

</div>



)

export default  Greet