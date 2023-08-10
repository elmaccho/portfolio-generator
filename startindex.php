<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="startstyle.css">
</head>
<body>
    <header>
        <div class="header__title">
            <span class="header__title-row1">
                Stwórz swoje portfolio
            </span>
            <span class="header__title-row2">
                w kilka minut!
            </span>
        </div>
    </header>
    <main>
        <?php
            error_reporting(0);

            if($_GET['page']){
                $allowed_page = array("forminput");

                $page = filter_var($_GET['page'], FILTER_SANITIZE_STRING);

                if(!empty($page)){
                    if(!in_array($page, $allowed_page)){
                        include("404.php");
                    } else {
                        if(is_file($page.".php")){
                            include($page.".php");
                        } else{
                            echo "strona nie istnieje";
                        }
                    }
                }
            } else {
                echo "
                    <a href='?page=forminput' class='startupBtn'>Kliknij aby zacząć</a>
                ";
            }
        ?>
        
    </main>

    <!-- <script src="startscript.js"></script> -->
</body>
</html>