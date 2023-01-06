// 유효성 검사
const form = document.getElementById('form');
const userId = document.getElementById('userId');
const password = document.getElementById('password');

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

const validateInputs = () => {
  const userIdValue = userId.value.trim();
  const passwordValue = password.value.trim();
  

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

};



