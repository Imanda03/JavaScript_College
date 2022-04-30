<?php
include "database.php";

if (isset($_POST['submitBtn'])) {
    $full_name = $_POST['full_name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $levels = $_POST['level'];
    $faculty = $_POST['faculty'];
    $level = "";
    foreach ($levels as $lvl) {
        $level .= $lvl . ",";
    }
    global $conn;
    $sql = $conn->prepare("INSERT INTO student (full_name, address, phone, email, gender, level, faculty) VALUES (?,?,?,?,?,?,?)");
    $sql->bind_param(
        "sssssss",
        $full_name,
        $address,
        $phone,
        $email,
        $gender,
        $level,
        $faculty,
    );
    $sql->execute();
    if ($sql->affected_rows !== 0) {
        header("Location: ./index.php");
    }
    $sql->close();
    exit();
}
?>
<!doctype html>
<html lang="en">

<head>
    <title>Insert Student</title>
</head>

<body>
    <div class='container'>
        <h1>Insert Student</h1>
        <a href="./index.php">Back to List</a>
        <form action="./insert.php" method="post">
            <label for="full_name">Name:</label>
            <input required type="text" id="full_name" name="full_name"><br>

            <label for="address">Address:</label>
            <input required type="text" id="address" name="address"><br>

            <label for="email">Email:</label>
            <input required type="email" id="email" name="email"><br>

            <label for="phone">Phone:</label>
            <input required type="number" id="phone" name="phone"><br>

            <label for="gender">Gender:</label>
            <input type="radio" name="gender" id="gender" value="male">Male</input>
            <input type="radio" name="gender" id="gender" value="female">Female</input><br>

            <label for="level">Level:</label>
            <input type="checkbox" name="level[]" id="level" value="SEE/SLC">SEE/SLC</input>
            <input type="checkbox" name="level[]" id="level" value="+2">+2</input>
            <input type="checkbox" name="level[]" id="level" value="Bachelors">Bachelors</input>
            <input type="checkbox" name="level[]" id="level" value="Masters">Masters</input><br>

            <label for="faculty">Faculty:</label>
            <select name="faculty" id="faculty">
                <option value="BCA">BCA</option>
                <option value="BBM">BBM</option>
                <option value="BBS">BBS</option>
                <option value="BIT">BIT</option>
            </select><br>


            <input required type="submit" value="Submit" name="submitBtn" class="btn btn-primary"><br>


        </form>
    </div>
</body>

</html>