<?php
    $errorInfo = [];

    if(isset($_POST['userName']) && isset($_POST['userLastname']) && isset($_POST['userEmail']) && isset($_POST['userDateBirth']) &&
    !empty($_POST['userName']) && !empty($_POST['userLastname']) && !empty($_POST['userEmail']) && !empty($_POST['userDateBirth'])){
        $userName = $_POST['userName'];
        $userLastname = $_POST['userLastname'];
        $userEmail = $_POST['userEmail'];
        $userDateBirth = $_POST['userDateBirth'];
        $userMainImg = $_POST['userMainImg'];

        $userName = htmlspecialchars($userName);
        $userLastname = htmlspecialchars($userLastname);
        $userEmail = htmlspecialchars($userEmail);
        $userDateBirth = htmlspecialchars($userDateBirth);
        $userMainImg = htmlspecialchars($userMainImg);

        $newName = $userName.$userLastname;


        if(isset($_FILES['userMainImg'])){
            $allowedExtensions = ["jpeg", "jpg", "png", "webp"];
            $temp = explode(".", $_FILES['userMainImg']['name']);
            $fileExtension = strtolower(end($temp));
        
            // Sprawdź, czy rozszerzenie pliku jest dozwolone
            if(in_array($fileExtension, $allowedExtensions)){
                // Generuj unikalną nazwę pliku
                $newFileName = $userName.$userLastname . uniqid() . "." . $fileExtension;
        
                if(move_uploaded_file($_FILES['userMainImg']['tmp_name'], "images/" . $newFileName)){
                    
                } else {
                    $errorInfo[] = "Wystąpił błąd podczas przesyłania pliku";
                }
            } else {
                $errorInfo[] = "Niedozwolone rozszerzenie pliku";
            }
        }

        if(empty($errorInfo)){
            $conn = new mysqli("localhost","root","","portfolio_generator");

            if ($conn->connect_error) {
                die("Błąd połączenia z bazą danych. Przepraszamy za problemy");
            }

            $stmt = $conn->prepare("INSERT INTO `usermaindata`(`name`, `lastname`, `email`, `birthDate`, `mainImg`) VALUES ('$userName','$userLastname','$userEmail','$userDateBirth','$userMainImg')");
            $stmt->bind_param('sssss', $userName, $userLastname, $userEmail, $userDateBirth, $userMainImg);

            if($stmt->execute()){
                
            } else {
                echo "jakis blad chuj wie o co chodzi";
            }

            $stmt->close();
            $conn->close();
        }
    } else {
        $errorInfo[] = "Wypełnij wszystkie pola!";
    }
?>
    
    <div class="main__background"></div>

    <div class="main__form-wrapper">
        <h2>Wprowadź dane</h2>

        <form class="main__form" method="POST" enctype="multipart/form-data">
            <span class="main__form-row1">
                <input class="main__form-input" type="text" name="userName" id="nameInput" placeholder="Imię">
                <input class="main__form-input" type="text" name="userLastname" id="lastnameInput" placeholder="Nazwisko">
            </span>
            <span class="main__form-row2">
                <input class="main__form-input" type="email" name="userEmail" id="emailInput" placeholder="Email">
                <span class="main__form-date">
                    <span class="main__form-date-text">Data urodzenia</span> 
                        <input class="main__form-input main__form-inputDate" type="date" name="userDateBirth" id="dateBirthInput">
                </span>
            </span>
                <input type="file" name="userMainImg" id="mainImgInput">

                <input class="main__form-submit" type="submit" value="Przejdź dalej">
        </form>
            <?php
            if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($errorInfo) && count($errorInfo) > 0) {
                foreach ($errorInfo as $error) {
                    echo "<span class='error__input__text'>$error</span>";
                }
            }
            ?>
    </div>



    <script src="startscript.js"></script>