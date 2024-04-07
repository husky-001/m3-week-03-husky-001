const myform = document.getElementById('myForm');

myform.addEventListener('submit', function (event) {
    event.preventDefault();

    const currentText = message.textContent;//使用者
    const UsernameLength = Username.value.length;
    const UsernameValue = Username.value;
    //eamil部分
    const email = Email.value;
    const passwordValue = Password.value;
    //密碼
    const passwordlength = Password.value.length;
    const confirm_password = Confirm_password.value;
    const confirm_length = Confirm_password.value.length;
    
    //嘗試函式化邊框跟文字
    function inputColor(element , text) {
        element.classList.add('error');
        element.classList.remove('sucess');
        text.classList.remove('green-text');
    };
    function textColor(element , text) {
        element.classList.remove('error');
        element.classList.add('sucess');
        text.classList.add('green-text');
    };

    if (UsernameLength < 5 || UsernameLength > 10 || !/[a-zA-Z]/.test(UsernameValue)) {
        // Username.classList.add('error');
        inputColor(Username , message);
        console.log(message.textContent = '使用者名稱長度需大於5或小於10以及至少一位英文'
        );
    } else {
        // Username.classList.add('sucess');
        // message.classList.add('green-text');
        textColor(Username , message);
        console.log(message.textContent = '格式允許');
    }

    //信箱
    if (!/^\S+@\S+\.\S+$/ || !/gmail/.test(email)) {
        // Email.classList.add('error');
        // Email.classList.remove('sucess');
        inputColor(Email , emailMessage);
        console.log(emailMessage.textContent = '請輸入gmail信箱');
    } else {
        // Email.classList.add('sucess');
        // emailMessage.classList.add('green-text');
        textColor(Email , emailMessage);
        console.log(emailMessage.textContent = '格式允許');
    }
    //密碼
    if (passwordlength < 6) {
        // Password.classList.add('error');
        inputColor(Password , passwordMessage);
        console.log(passwordMessage.textContent = '密碼長度需大於6位數');
    } else {
        // passwordMessage.classList.add('green-text');
        // Password.classList.add('sucess');
        textColor(Password , passwordMessage);
        console.log(passwordMessage.textContent = '長度符合');
    }
    //密碼確認
    if (confirm_password !== passwordValue) {
        // Confirm_password.classList.add('error');
        inputColor(Confirm_password ,passwordCheck );
        console.log(passwordCheck.textContent = '密碼不相符');
    } else if (confirm_length == 0 || confirm_length < 6) {
        // Confirm_password.classList.add('error');
        inputColor(Confirm_password ,passwordCheck );
        console.log(passwordCheck.textContent = '密碼不可為空或小於6位數');
    } else {
        // Confirm_password.classList.add('sucess');
        // passwordCheck.classList.add('green-text');
        textColor(Confirm_password , passwordCheck);
        console.log(passwordCheck.textContent = '密碼確認正確');
    }
});
