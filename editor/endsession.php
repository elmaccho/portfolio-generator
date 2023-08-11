<?php
    session_start();
    session_destroy();

    header('Location: ../startindex.php');
    exit();
?>