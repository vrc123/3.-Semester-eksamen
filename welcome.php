<?php
    // Starts a session 
    session_start();

    // Checks if you are already logged in and links to "game.php"
    if(isset($_SESSION['username'])) {
        header("Location: game.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="welcome_container">
        <div class="welcome_heading">
            <h1>User registration completed</h1>
        </div>
        <div class="welcome_link_text">
            <p>Do you want to play? <a href="index.php">Login here</a>.</p>
        </div>
    </div>
</body>
</html>