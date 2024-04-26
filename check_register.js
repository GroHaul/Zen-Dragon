let form = document.getElementById("register-form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let username = document.getElementById("username")
    let gender = document.getElementById("gender")
    let firstName = document.getElementById("first-name")
    let secondName = document.getElementById("second-name")
    let address = document.getElementById("address")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirmPw = document.getElementById("confirm-password")
    let errorText = document.getElementById("error-txt")
    let ATAC = document.getElementById("A-TAC")

    errorText.innerText = ""

    if(username.value.length == 0){
        errorText.innerText = "[Username must be filled]"
    }
    else if(username.value.length < 5 || username.value.indexOf(' ') >= 0){
        errorText.innerText = "[Username must at least 5 characters]"
    }
    else if(gender.value == "CYG"){
        errorText.innerText = "[Please choose your gender]"
    }
    else if(firstName.value.length == 0 || secondName.value.length == 0){
        errorText.innerText = "[Name must be filled]"
    }
    else if(address.value.length == 0){
        errorText.innerText = "[Address must be filled]"
    }
    else if(!email.value.endsWith("@email.com")){
        errorText.innerText = "[Email must ends with \"@email.com\"]"
    }
    else if(!validatePassword(password.value)){
        errorText.innerText = "[Password must at least contains 1 uppercase,\n1 lowercase, and 1 number]"
    }
    else if(password.value.length < 6 || username.value.indexOf(' ') >= 0){
        errorText.innerText = "[Password must at least 6 characters]"
    }
    else if(confirmPw.value != password.value  || username.value.indexOf(' ') >= 0){
        errorText.innerText = "[Confirm Password must match with the Password]"
    }
    else if(!ATAC.checked){
        errorText.innerText = "[You must agree with Terms and Conditions]"
    }
    else{
        alert("Account Registered Successfully!!")
        window.location.href = "https://youtu.be/WIRK_pGdIdA?si=6gvV-klLRmude3si"
    }
})

function validatePassword(input){
    let containDigits = false
    let containCapital = false
    let containLowercase = false

    for(let i=0;i<input.length;i++){
        const c = input[i];
        if(c >= '0' && c <='9'){
            containDigits = true
        }
        if(c >= 'A' && c <= 'Z'){
            containCapital = true
        }
        if(c >= 'a' && c <= 'z'){
            containLowercase = true
        }
    }
    return containDigits && containCapital && containLowercase
}