var loginText = document.getElementById('tologin');

loginText.addEventListener('click', function() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    setTimeout(function() {
        window.location.href = '../LoginPage/login-page.html'
    })
})