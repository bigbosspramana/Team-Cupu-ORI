document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log("Email:", email);
        console.log("Password:", password);
    });
});