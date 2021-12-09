<?php
    // Includes the file "config.php"
    include 'config.php';

    // Starts a session 
    session_start();
    
    // Checks if you are already logged in and links to "game.php"
    if(isset($_SESSION['username'])) {
        header("Location: game.php");
    }

    // Sign up button
    if(isset($_POST['signup']))
    {
        // user data
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = md5($_POST['password']);
        $cpassword = md5($_POST['cpassword']);
        
        // Stores errors
        $errors = array();

        // Validates First name
        if(strlen($firstname) < 2)
        {
            $errors['firstname_length'] = "<p>The first name must be at least 2 charecters long!</p>";
        }
        if(!ctype_alpha($firstname))
        {
            $errors['firstname_letter'] = "<p>The first name must only consist of letters!</p>";
        }

        // Validates Last name
        if(strlen($lastname) < 2)
        {
            $errors['lastname_length'] = "<p>The last name must be at least 2 charecters long!</p>";
        }
        if(!ctype_alpha($lastname))
        {
            $errors['lastname_letter'] = "<p>The last name must only consist of letters!</p>";
        }

        // Validates User name
        if(strlen($username) < 6)
        {
            $errors['username_length_short'] = "<p>The user name must be at least 6 charecters long!</p>";
        }
        if(strlen($username) > 10)
        {
            $errors['username_length_long'] = "<p>The user name must be a maximum of 10 charecters long!</p>";
        }

        // Checks if User name already exists
        $sql_u = "SELECT * FROM users WHERE username='$username'";
        $result_u = $conn->query($sql_u);
        if($result_u->num_rows > 0)
        {
            $errors['username_exist'] = "<p>User name already exists!</p>";
        }
        
        // Validates Email
        if((!strpos($email, '@')) || (!strpos($email, '.')))
        {
            $errors['email_valid'] = "<p>The email is not a valid email!</p>";
        }

        // Checks if Email already exists
        $sql_e = "SELECT * FROM users WHERE email='$email'";
        $result_e = $conn->query($sql_e);
        if($result_e->num_rows > 0)
        {
            $errors['email_exist'] = "<p>Email already exists!</p>";
        }
      
        // Validates Password
        if(strlen($_POST['password']) < 8)
        {
            $errors['password_length'] = "<p>The password must be at least 8 charecters long!</p>";
        }
        
        // Validates Confirm Password
        if($password != $cpassword)
        {
            $errors['cpassword_match'] = "<p>The passwords you entered did not match!</p>";
        }

        // Inserts userdate into the database table "users"
        if (count($errors)==0)
        {
            $sql = "INSERT INTO users (firstname, lastname, username, email, password) VALUES ('$firstname', '$lastname', '$username', '$email', '$password')";
            $result = $conn->query($sql);
            if($result)
            {
                // Links to "welcome.php"
                header("Location: welcome.php");
            }
            else 
            {
                echo "<script>alert('Something went wrong!')</script>";
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="signup_container">
    <form class="signup_form" action="signup.php" method="post">
        <div class="form_heading">
            <h1>Sign up</h1>
        </div>
        <label for="firstname">First name:</label>
        <input type="text" name="firstname" value="<?php echo $firstname; ?>" required>
        <div class="warning">
            <?php 
                echo $errors['firstname_length'];
                echo $errors['firstname_letter'];
            ?>
        </div>
        <label for="lastname">Last name:</label>
        <input type="text" name="lastname" value="<?php echo $lastname; ?>" required>
        <div class="warning">
            <?php
                echo $errors['lastname_length'];
                echo $errors['lastname_letter'];
            ?>
        </div>
        <label for="username">User name:</label>
        <input type="text" name="username" value="<?php echo $username; ?>" required>
        <div class="warning">
            <?php
                echo $errors['username_length_short'];
                echo $errors['username_length_long'];
                echo $errors['username_exist'];
            ?>
        </div>
        <label for="email">Email:</label>
        <input type="text" name="email" value="<?php echo $email; ?>" required>
        <div class="warning">
            <?php 
                echo $errors['email_valid'];
                echo $errors['email_exist'];
            ?>
        </div>
        <label for="password">Password:</label>
        <input type="password" name="password" value="<?php echo $_POST['password']; ?>" required>
        <div class="warning">
            <?php echo $errors['password_length']; ?>
        </div>
        <label for="cpassword">Confirm Password:</label>
        <input type="password" name="cpassword" value="<?php echo $_POST['cpassword']; ?>" required>
        <div class="warning">
            <?php echo $errors['cpassword_match']; ?>
        </div>
        <div class="submit_button">
            <input type="submit" name="signup" value="Sign up">
        </div>
        <div class="form_link_text">
            <p>Already have an account? <a href="index.php">Login here</a>.</p>
        </div>
    </form>
</body>
</html>