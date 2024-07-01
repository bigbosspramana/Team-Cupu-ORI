document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', async function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        try {
            const loginResponse = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const loginResult = await loginResponse.json();

            if (!loginResponse.ok || loginResult.message === "Email Already Exist") {
                console.error(loginResult);
                throw new Error(loginResult.message || 'Failed to login');
            } else {
                alert('Login successful');
                console.log('Your Access Token: ' + loginResult.accessToken);
                document.cookie = `access_token=${loginResult.accessToken}; path=/;`;
                console.log('Login Data:', { email, userType: loginResult.userType });
                document.getElementById('loginForm').reset();

                // Redirect based on userType
                switch (loginResult.userType) {
                    case 'Admin':
                        window.location.href = '../Admin/admin.html';
                        break;
                    case 'WISATAWAN':
                        window.location.href = '../Wisatawan/HomePage(Login)/homePage.html';
                        break;
                    case 'VENDOR':
                        window.location.href = '../Vendor/HomePage(Login)/homePage.html';
                        break;
                    default:
                        alert('Invalid user type');
                        break;
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed!');
        }
    });
});
