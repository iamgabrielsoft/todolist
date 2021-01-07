 

const storedUsername = []; //stored username 
const storedPassword = [];  //stored password

var session = sessionStorage;


//div tag for each section 
const login = document.getElementById('login'); 
const register = document.getElementById('register');


//login and Register Tab
const loginTab = document.getElementById('lt'); 
const regTab = document.getElementById('rt');


//Tags 
const Registerusername = document.getElementById('re');
const Registerpassword = document.getElementById('rp'); 
const Confirmpassword = document.getElementById('rrp'); 

//login divs 
const loginUsername = document.getElementById('re'); 
const loginPassword = document.getElementById('sp')

//forgot div 
const forgotLink = document.getElementById('fe')

var error = document.getElementById('error')
var exist = document.querySelector('.exist')
var loginError = document.querySelector('.loginerror')
var welcomeText = document.querySelector('.welcome')


const regTabFunc = () => {
    register.style.visibility = 'visible'; 
    login.style.visibility = 'hidden'; 

    regTab.style.backgroundColor = "rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    
}

        
const loginFunc = () => {
    register.style.visibility = 'hidden'; 
    login.style.visibility = 'visible'; 
    //forgotPassword.style.visibility = 'hidden'; 

    regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor = "rgb(12, 132, 189)";
}


const forgotTabFunc = () => {
    register.style.visibility = 'hidden'; 
    login.style.visibility = 'hidden'; 
    forgotPassword.style.visibility = 'visible'; 

    regTab.style.visibility = "rgba(11, 177, 224, 0.82)"; 
    loginTab.style.visibility = "rgba(11, 177, 224, 0.82)";
}


function registerLog() {

    if(Registerusername.value == ''){
        error.textContent = 'Empty Username!'
        Registerusername.focus()
        
    }

    else if(Registerpassword.value == ""){
        error.textContent = 'Password Empty!'
        Registerpassword.focus()
        return;
    }

    else if (Confirmpassword.value ==  ""){
        error.textContent = 'Confirm Your Password!'
        Confirmpassword.focus()
        return ;
    }

    else if (Registerpassword.value != Confirmpassword.value ){
       exist.textContent = 'Password Not Matched!'
       Registerpassword.focus(); 
       return;

    }

    else if(storedUsername.indexOf(Registerusername.value) && storedPassword.indexOf(Registerpassword.value) == -1){
        storedUsername.push(Registerusername.value);
        storedPassword.push(Registerpassword.value);
        
        exist.style.visibility = 'hidden'; 
        error.style.visibility = 'hidden'
        welcomeText.textContent = `Welcome ${Registerusername.value} Login Now!`

    }
    else{

        welcomeText.textContent = `User ${Registerusername.value} Already Exist!`
        return;
    }
}


const loginLog = () => { 

    if(storedUsername.length && storedPassword.length > 0){
        for(let i = 0; i <storedUsername.length && storedPassword.length; i++){

            if(loginUsername.value == storedUsername[i] && loginPassword.value == storedPassword[i]){

                    
                location.href = './app.html'
                session.setItem('username', loginUsername.value)
                session.setItem('password', loginPassword.value)
                loginUsername.value == " "; 
                loginPassword.value == " "

            }else {

                loginError.textContent = 'InComplete Field OR No Account' 
                loginPassword.focus(); 

            }
        }
        
    }else {

    }
}