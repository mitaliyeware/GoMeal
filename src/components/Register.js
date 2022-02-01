import React,{useState,useEffect} from 'react'
import validator from 'validator';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'

function Register() {
    const [user, setUser]=useState({fname:"", lname:"", contact:"", mail:"", psd:"",addr:""})
    const [msg,setMsg] = useState('');
    const history =useHistory();
    useEffect(()=>{
        //console.log("register rendered");
         if(msg.includes("Success")){
            setTimeout(()=>{ history.push('/login');setMsg(''); },1000);            
         }
},[msg,history])
    
    const changeMe=(e)=>{
        const {name , value} = e.target ;
         setUser({
             ...user, [name]:value
         })
    }
    const success ={padding:"10px 15px", border:"1px solid green", color:"green"}
    const fail ={padding:"10px 15px", border:"1px solid red", color:"red"}
    /*const App = () => {
        const [emailError, setEmailError] = useState('')
      const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email :)')
        } else {
          setEmailError('Enter valid Email!')
        }
      }
    }*/
    const registerMe=(e)=>{

        e.preventDefault();
        //api post to server
        axios.post('https://my-json-yumito-server.herokuapp.com/users',user)
        .then(res =>{
            setMsg("Registered Successfully");
           //redirect to login page
        })
        .catch((e)=>{
            setMsg("Something went wrong. Please try again later");
        })
    }
    /*//<label htmlFor="gender" className="form-label m-2 h5">Gender</label>
<input type="radio" value="Male" name="gender" /> Male
<input type="radio" value="Female" name="gender" /> Female
<input type="radio" value="Other" name="gender" /> Other
</div>
*/

    return (
        <form className="form1" onSubmit={registerMe}>
                    <h2>Register Form</h2><br/>
                    <div className="d-flex flex-column">
                    <div className="form-group">
                    

                    <div className="form-group">
             <label htmlFor="firstname" className="form-label m-2 h5">First Name</label>
            <input type="firstname" name="fname" placeholder="First Name" className="form-control" value={user.fname} onChange={changeMe} required/></div>
            <div className="form-group">
             <label htmlFor="lastname" className="form-label m-2 h5">Last Name</label>
            <input type="lastname" name="lname" placeholder="Last Name" className="form-control" value={user.lname} onChange={changeMe} required/></div>
            <div className="form-group">
             <label htmlFor="contact" className="form-label m-2 h5">Contact Number</label>
            <input type="contact" name="contact" placeholder="Contact Number" className="form-control" value={user.contact} onChange={changeMe} required/></div>
             <div className="form-group">
             <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="mail" placeholder="Email" className="form-control" value={user.mail} onChange={changeMe} required/></div>
             <div className="form-group">
             <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="psd" placeholder="Password" className="form-control" value={user.psd} onChange={changeMe} required/></div>
            <label htmlFor="address" className="form-label m-2 h5">Address</label>
                 <textarea type="text" name="addr" placeholder="Address" className="form-control" value={user.addr} onChange={changeMe} required/></div>
                <button className="btn btn-primary my-3 h4">Sign Up</button>
                <div className="h5 text-center" style={msg==='' ? {} : (msg.includes("Success") ? success :fail)}>{msg}</div>
                <hr/>
                 <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
                 </div>
                 
           </form>
    
    )
    
}

//{(e) => this.App.validateEmail(e)}
export default React.memo(Register)
