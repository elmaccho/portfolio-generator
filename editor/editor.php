<?php
    session_start();

    if(!isset($_SESSION['email'])){
        header('Location: ../startindex.php?page=forminput');
    }

    $userNameE = $_SESSION['name'];
    $userLastnameE = $_SESSION['lastname'];
    $userEmailE = $_SESSION['email'];
    $userDateBirthE = $_SESSION['birthDate'];
    $userMainImgE = $_SESSION['mainImg'];

    echo var_dump($userMainImgE);

    echo $userNameE;
    echo $userLastnameE;
    echo $userEmailE;
    echo $userDateBirthE;
    echo "
        <img src='../images/$userMainImgE' alt=''>
    ";

?>


<a href="./endsession.php">Zakończ sesje</a>