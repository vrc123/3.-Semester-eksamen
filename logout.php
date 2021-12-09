<?php
    // Starts a session
    session_start();

    // Destroy the session
    session_destroy();

    // Links to "index.php"
    header("Location: index.php");
?>