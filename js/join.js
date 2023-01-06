// 유효성 검사
form = document.getElementById('form');
const userId = document.getElementById('userId');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const emailAccount = document.getElementById('account');
const phone = document.getElementById('mobile');


form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector('.error');

  errorDisplay.innerText = message;
  inputBox.classList.add('error');
  inputBox.classList.remove('success')
}

const setSuccess = element => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector('.error');

  errorDisplay.innerText = '';
  inputBox.classList.add('success');
  inputBox.classList.remove('error');
};

const isValidId = userId => {
  const regId = /^[a-zA-z0-9]{4,12}$/; // 영문대소문자+숫자 조합(4~12자리)
  return regId.test(userId);
}

const isValidPw = password => {
  const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/; // 영문대소문자+숫자+특수 조합(8~12자리)
  return regPw.test(password);
}

const isValidEmail = email => {
  const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regMail.test(String(email).toLowerCase());
}


const isValidPhone = phone => {
  const regPhone = /^[0-9]+/g; // 숫자만
  return regPhone.test(phone);
};

//이메일 옵션 선택후 주소 자동 완성
function changeEmail() {

  //지금 골라진 옵션의 순서와 값 구하기
  const idx = emailAccount.options.selectedIndex;
  let val = emailAccount.options[idx].value;

  email.value += val;
  
}

const validateInputs = () => {
  const userIdValue = userId.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  

  if(userIdValue === '') {
      setError(userId, '아이디를 입력하세요.');
  } else if(!isValidId(userIdValue)) {
    setError(userId, '아이디는 영문과 숫자로 이루어진 4~12자리로 입력해야합니다.')
  } else {
      setSuccess(userId);
  }


  if(passwordValue === '') {
      setError(password, '비밀번호를 입력하세요.');
  } else if (!isValidPw(passwordValue)) {
      setError(password, '비밀번호는 영문과 숫자, 특수문자로 이루어진 8~12자리로 입력해야합니다.')
  } else {
    setSuccess(password);
  }


  if(password2Value === '') {
      setError(password2, '비밀번호를 확인하세요.');
  } else if (password2Value !== passwordValue) {
      setError(password2, "비밀번호가 일치하지 않습니다.");
  } else {
      setSuccess(password2);
  }


  if(emailValue === '') {
    setError(email, '이메일 주소를 입력하세요.');
  } else if (!isValidEmail(emailValue)) {
      setError(email, '가능한 이메일 형식이 아닙니다.');
  } else {
      setSuccess(email);
  }


  if(phoneValue === '') {
    setError(phone, '휴대폰 번호를 입력하세요.');
  } else if (!isValidPhone(phoneValue)) {
      setError(phone, '휴대폰 번호는 숫자만 입력할 수 있습니다.');
  } else {
      setSuccess(phone);
  }

};
