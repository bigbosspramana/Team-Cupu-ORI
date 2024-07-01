const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);
checkboxes();

function checkboxes() {
    const triggerBottom = window.innerHeight / 7 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

document.getElementById('tologin').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../LoginPage/login-page.html';
});

document.getElementById('regist').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../Regist Page/regist.html';
});
