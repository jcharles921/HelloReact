import React from 'react'
import './signup.css'
export const Signupbox = () => {
    function validateEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function validatePassword(password){
        var re=/^(?=.*\d)(?=.*[a-z]).{3,15}$/;
        return re.test(password);
    }
function validate(){
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const confirmpass=document.getElementById("confirmpass");
    const userN=document.getElementById("userN");
    const out=document.getElementById("out");
    const out_pass=document.getElementById("out_pass");
    const out_conf=document.getElementById("out_conf");
    const out_user=document.getElementById("out_user");
    if(validateEmail(email.value)){
        out.innerHTML="";
    }
    else{
        out.innerHTML="Email is not valid";
    }
    if(validatePassword(password.value)){
        out_pass.innerHTML="";
    }
    else{
        out_pass.innerHTML="Password is not valid";
    }
    if(password.value===confirmpass.value){
        out_conf.innerHTML="";
    }
    else{
        out_conf.innerHTML="Password is not matching";
    }
    if(userN.value.length>0){
        out_user.innerHTML="";
    }
    else{
        out_user.innerHTML="Username is not valid";
    }
    if(validateEmail(email.value) && validatePassword(password.value) && password.value===confirmpass.value && userN.value.length>0){
        const request={
            username:userN.value,
            email:email.value,
            password:password.value
        }
        console.log(request);
        fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/Signup`,{
                method: 'POST',
                headers:{
                            'Content-Type':'application/json',
                        },
                body:JSON.stringify(request),
        
            }
      )
            .then((response)=> response.json())
            .then((data)=>{
                console.log(data);
                window.location.href = "/blog";
            }
            )
            .catch((error)=>{
                console.log(error);
    
            }) 
    }

}
  return (
    <main>
        <div className="Login_box">
            <div className="login_title">
                <p>Sign Up</p>
            </div>
            <div className="login_inputs">
                <input type="text" placeholder="Username" id="userN"/>
                <span id="out_user"></span>
                <input type="email" placeholder="Email" name="" id="email"/>
                <span id="out"></span>
                <input type="password" style={{marginTop:"8px"}} placeholder="Password" name="" id="password"/>
                <span id="out_pass"></span>
                <input type="password" placeholder="Confirm Password" name="" id="confirmpass"/>
                <span id="out_conf"></span>
            </div>
            <div className="login_submit">
                <button onClick={validate}  id="send"> Submit</button>
            </div>
        </div>
    </main>
  )
  
}
export default Signupbox;