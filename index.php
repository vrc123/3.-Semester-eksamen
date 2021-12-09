<?php
    // Includes the file "config.php"
    include 'config.php';

    // Starts a session 
    session_start();
    
    // Checks if you are already logged in and links to "game.php"
    if(isset($_SESSION['username'])) {
        header("Location: game.php");
    }

    // Login button
    if(isset($_POST['login']))
    {
        // User data
        $username = $_POST['username'];
        $password = md5($_POST['password']);

        // Checks if Username and password already exists
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);
        if($result->num_rows > 0)
        {
            //Saves the user name as a session variable
            $row = $result->fetch_assoc();
            $_SESSION['username'] = $row['username'];
            
            // Links to "game.php"
            header("Location: game.php");
        }
        else
        {
            echo "<script>alert('User name or Password is wrong!')</script>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form class="login_form" action="index.php" method="post">
        <div class="form_heading">
            <h1>Login</h1>
        </div>
        <label for="username">User name:</label>
        <input class="input" type="text" name="username" value="<?php echo $username; ?>" required>
        <label for="password">Password:</label>
        <input class="input" type="password" name="password" value="<?php echo $_POST['password']; ?>" required>
        <div class="submit_button">
            <input type="submit" name="login" value="Login">
        </div>
        <div class="form_link_text">
            <p>Don't have an account? <a href="signup.php">Sign up here</a>.</p>
        </div>
    </form>
</body>
</html>