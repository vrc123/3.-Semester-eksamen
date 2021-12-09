<?php
    // Starts a session 
    session_start();

    // Checks if you are not logged in and links to "index.php"
    if(!isset($_SESSION['username'])) {
        header("Location: index.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="game_container">
    <div class="game">
        <div class="heading">
            <?php echo "<h1>Hello " . $_SESSION['username'] . "</h1>"; ?>
        </div>
        <p id="message"></p>
        <canvas width="360" height="360"></canvas>
        <div class="game_link_text">
            <p>Done playing the game? <a href="logout.php">Logout here</a>.</p>
        </div>
    </div>

    <script src="javascript/game.js"></script>
</body>
</html>