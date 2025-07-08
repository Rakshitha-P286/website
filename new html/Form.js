<!DOCTYPE html>
<html lang="english">
<head>
    <title>Form !💗</title>
    <style>
        body {
            margin: 0;
            background-image: url(https://www.bing.com/th/id/OIP.6FicvPKMj_y3eiehSspdugHaEo?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2 );
            background-repeat: no-repeat;
            background-size: 100%;
        }

        div {
            border-radius: 100px;
            background-color: rgba(3, 3, 3, 0.1);
            width: 40%;
            box-shadow: 10px 10px rgb(0, 0, 0);
            margin-top: 5%;
            margin-left: 50%;
            font-size: xx-large;
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ::placeholder {
            font-size: larger;
            color: rgb(162, 21, 21);
        }

        input {
            width: 300px;
            height: 40px;
            border: 3px solid black;
            border-radius: 30px;
        }

        button {
            width: 150px;
            height: 40px;
            border: white 3px solid;
            border-radius: 30px;
            background-color: black;
            color: white;
            font-size: large;
        }

        td {
            padding-bottom: 30px;
            padding-left: 30px;
        }

        #errorMsg {
            color: red;
            font-size: large;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div>
        <h1>Login here</h1>

        <form id="loginForm">
            <table>
                <tr>
                    <td><label for="na">Name</label></td>
                    <td><input type="text" placeholder="Enter name here" id="na"></td>
                </tr>
                <tr>
                    <td><label for="nu">Number</label></td>
                    <td><input type="text" placeholder="Enter your phone number" id="nu"></td>
                </tr>
                <tr>
                    <td><label for="em">Email</label></td>
                    <td><input type="email" placeholder="Enter your email" id="em"></td>
                </tr>
                <tr>
                    <td><label for="pa">Password</label></td>
                    <td><input type="password" placeholder="Enter your password" id="pa"></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <button type="submit">Login</button>
                    </td>
                </tr>
            </table>
            <p id="errorMsg"></p>
        </form>
    </div>

    <script>
        const form = document.getElementById("loginForm");
        const errorMsg = document.getElementById("errorMsg");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("na").value.trim();
            const number = document.getElementById("nu").value.trim();
            const email = document.getElementById("em").value.trim();
            const password = document.getElementById("pa").value.trim();

            if (name === "" || number === "" || email === "" || password === "") {
                errorMsg.textContent = "⚠️ Please fill all the fields before logging in!";
            } else {
                errorMsg.textContent = "";
                // Redirect to next page
                window.location.href = "new html.html";
            }
        });
    </script>
</body>
</html>
