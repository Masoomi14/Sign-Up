

let showIndex = 1;


function manageLeftBAr(arg) {



    if (arg == "name") {

        document.getElementById("login").style.display = "none";
        document.getElementById("email-section").style.display = "none";
        document.getElementById("password-section").style.display = "none";

        document.getElementById("info").style.display = "flex";

    } else if (arg == "email") {

        document.getElementById("login").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("password-section").style.display = "none";
        
        document.getElementById("email-section").style.display = "flex";
        
    } else if (arg == "password") {
        
        document.getElementById("login").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("email-section").style.display = "none";
        
        document.getElementById("password-section").style.display = "flex";

    } 
        

}


// Function to change the content of t2


const firstInput = document.querySelector('#infoInput');
const secondInput = document.querySelector('#nameSign');


firstInput.addEventListener('input', () => {
  secondInput.value = firstInput.value;
});

secondInput.addEventListener('input', () => {
  firstInput.value = secondInput.value;
});


// choose one of input man and woman

const man =   document.querySelector('#man');
const woman = document.querySelector('#woman');

man.addEventListener('input', () => {
    
    if (man.checked == true) {

        woman.checked = false;
    
    }
  
});

   
woman.addEventListener('input', () => {
    
if (woman.checked == true) {

    man.checked = false;
        
}

});


// bind email and show email


const emailInput = document.querySelector('#emailInput');
const showEmail = document.querySelector('#emailSign');


emailInput.addEventListener('input', () => {
    showEmail.value = emailInput.value;
});

showEmail.addEventListener('input', () => {
    emailInput.value = showEmail.value;
});




// cheack email for security

const password      = document.querySelector('#passwordSign');

const bigChar       = document.querySelector('#bigChar');
const smallChar     = document.querySelector('#smallChar');
const SpecialChar    = document.querySelector('#specialChar');
const number        = document.querySelector('#number');
const lengthEight   = document.querySelector('#eightChar');


password.addEventListener('input', () => {

    let pas = password.value;

    console.log(pas.length);

    if ( pas.length >= 8) {
        
        lengthEight.checked = true;

    } else if (pas.length <= 7) {

        lengthEight.checked = false;

    } 


    // number char

    var regexNumber = /\d+/g;

    if ( pas.match(regexNumber) == null ) {
        
        number.checked = false;

    } else {
        
        number.checked = true;

    }



    // small char

    var regexSmallChar = /[a-z]/g;


    if ( pas.match(regexSmallChar) == null ) {
        
        smallChar.checked = false;

    } else {
        
        smallChar.checked = true;

    }



    // big char

    var regexBigChar = /[A-Z]/g;

    if ( pas.match(regexBigChar) == null ) {
        
        bigChar.checked = false;

    } else {
        
        bigChar.checked = true;

    }    


    // special char

    var regexSpecialChar = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

    if ( pas.match(regexSpecialChar) == null ) {
        
        SpecialChar.checked = false;
        console.log("SpecialChar ff", SpecialChar.value);

    } else {
        
        SpecialChar.checked = true;
        console.log("SpecialChar tt", SpecialChar.value);
    }    


    console.log(pas);

    
});


// animation for change between log and sign 


const directToRegister = document.getElementById("logbtn");

directToRegister.addEventListener('click', () => {

    document.getElementById("login").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";

    document.getElementById("signForm").style.display = "none";
    document.getElementById("directToSignUp").style.display = "flex";

    
});

function log() {
    document.getElementById("login").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("email-section").style.display = "none";
    document.getElementById("password-section").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";

    document.getElementById("signForm").style.display = "none";
    document.getElementById("directToSignUp").style.display = "flex";
}

const directTologin = document.getElementById("direct-sign");

directTologin.addEventListener('click', () => {
   
    document.getElementById("login").style.display = "flex";
    document.getElementById("loginForm").style.display = "none";

    document.getElementById("signForm").style.display = "flex";
    document.getElementById("directToSignUp").style.display = "none";

    
});