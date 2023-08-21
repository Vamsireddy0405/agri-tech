<?php
@include 'config.php';

session_start();

if (isset($_POST['submit'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = md5($_POST['password']);

    $select = " SELECT * FROM usertable WHERE email = 'email' && password = '$pass' ";

    $result = mysqli_query($conn, $select);

    header("location: index.html");

    // if (mysqli_num_rows($result) > 0) {
    //     header("location: index.html");
    // } else {
    //     $error[] = 'incorrect email or password';
    // }
};
?>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form | Agroacers</title>
    <link rel="stylesheet" href="php.css">
</head>

<body>

    <div class="form-container">
        <form action="" method="post">
            <h3>Login Now</h3>
            <?php
            if (isset($error)) {
                foreach ($error as $error) {
                    echo '<span class="error-msg">' . $error . '</span>';
                };
            };
            ?>
            <input type="email" name="email" required placeholder="Enter Your email">
            <input type="password" name="password" required placeholder="Enter Your password">
            <input type="submit" name="submit" value="login now" class="form-btn">
            <p>don't have an account? <a href="register_form.php">register now</a></p>
        </form>
    </div>

</body>

</html>`