import React from "react";

const LoginBox=()=>{
function validateEmail(email) 
{
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
    const out=document.getElementById("out");
    const out_pass=document.getElementById("out_pass");
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
    if(validateEmail(email.value) && validatePassword(password.value)){
        fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/Login`,{
            method: 'Post',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify({ 
                email:document.getElementById("email").value,
                password:document.getElementById("password").value  
            })
        })
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
            let cookie= data.token;
            if(data.status=== 200){
                // window.location.href = "/pages/User/user.html";
                localStorage.setItem('currentUser', JSON.stringify(data))
                if (data.data.isAdmin===true){
                  document.cookie = `token=${cookie}; max-age=3600; path=/;SameSite=Lax`;
                  window.location.href = "/blog";
                }
                else{
                  document.cookie = `token=${cookie}; max-age=3600; path=/;SameSite=Lax`;
                  window.location.href = "/blog";
                }
          
              }
              else if(data.status ===401){
                out.innerHTML="Not registered, go to signup?"
                out_pass.innerHTML="Invalid Credential !!"
              }
        })
        .catch((error)=>{
            console.log(error);
        }) 
    }
    

}
return(
<main>
<div className="Login_box">
    <div className="login_title">
        <p>Login</p>
    </div>
    <div className="login_inputs">
        <input type="email" placeholder="Email" name="email" id="email" />
        <span id="out"></span>
        <input type="password" placeholder="Password" name="" id="password"/>
        <span id="out_pass"></span>
    </div>
    <div className="login_submit">
        <button onClick={validate} id="send"> Submit</button>
        <a href=" http://localhost:3000/signup">Sign Up</a>
    </div>
</div>
</main>
)

}
export { LoginBox};