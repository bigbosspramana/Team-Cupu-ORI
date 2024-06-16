document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log("Email:", email);
        console.log("Password:", password);
    });
});

var loginText = document.getElementById('regist');

loginText.addEventListener('click', function() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    setTimeout(function() {
        window.location.href = '...'
    })
})

var loginText = document.getElementById('masuk');

loginText.addEventListener('click', function() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    setTimeout(function() {
        window.location.href = '../HomePage/homePage.html'
    })
})

var loginText = document.getElementById('lupaPassword');

loginText.addEventListener('click', function() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    setTimeout(function() {
        window.location.href = '...'
    })
})

const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Ganti ikon saat password terlihat atau tersembunyi
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});