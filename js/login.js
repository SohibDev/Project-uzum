const emailInput = findElement('#email')
const passwordInput = findElement('#password')
const submitBtn = findElement('#submit-btn')
const errMessage = findElement('#error-message')

BASE_URL = 'https://reqres.in/api/';

submitBtn.addEventListener('click', () => {
	errMessage.textContent = '';
	passwordInput.className = 'form-control form-control-lg';
	emailInput.className = 'form-control form-control-lg';

	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!emailInput.value.match(mailformat)) {
		emailInput.className += ' error-active';
		errMessage.textContent = "email noto'g'ri formatda";
		return;
	}

	if (!(passwordInput.value.trim().length > 5)) {
		passwordInput.className += ' error-active';
		errMessage.textContent =
			"parol minimum 5 ta harfdan iborat bo'lishi kerak";
		return;
	}

	fetch('https://reqres.in/api/register', {
		method: 'post',
		body: JSON.stringify({
			email: emailInput.value,
			password: passwordInput.value,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => {
            const token = res.token;
            localStorage.setItem('token', token)
            window.location.href = 'file:///C:/Users/user/Desktop/Front-end/Uzum1/Uzum/index.html'
			if (res.error) {
				throw new Error(res.error);
			}
})
.catch((err) => {
    errMessage.textContent = 'bunday foydalanuvchi yo\'q';
    console.log(err);
})
})