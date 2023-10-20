document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    if(email =='abc@gmail.com' && password == 'aaaaaa'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})

// input field থেকে কিছু পেতে .value use করতে হবে
// window.location.href = 'location name';