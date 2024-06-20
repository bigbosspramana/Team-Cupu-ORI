document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', async function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        try {
            // Fetch role from the server based on email
            const roleResponse = await fetch(`http://localhost:8080/getRoleByEmail?email=${email}`);
            const roleResult = await roleResponse.json();

            if (!roleResponse.ok) {
                throw new Error(roleResult.message || 'Gagal mengambil role');
            }

            var userType = roleResult.role;

            // Now proceed with login
            const loginResponse = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, userType }) // Kirim role bersama email dan password
            });

            const loginResult = await loginResponse.json();

            if (!loginResponse.ok || loginResult.message === "Email Already Exist") {
                console.log(loginResult);
                throw new Error(loginResult.message || 'Gagal melakukan login');
            } else {
                alert('Login Berhasil');
                console.log('Akses Tokenmu: ' + loginResult.access_token);
                document.cookie = `access_token=${loginResult.access_token}; path=/;`;
                console.log('Data Login:', { email, password, userType });
                document.getElementById('loginForm').reset();
                // Redirect ke homePage.html setelah token disimpan di cookie
                window.location.href = 'homePage.html';
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login gagal!');
        }
        console.log("Email:", email);
        console.log("Password:", password);
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 54cde649e4dafc1254df685c73645ad2da78b060
