<?php
include "database.php";
if (isset($_GET['id'])) {
    global $conn;
    $student_id = $_GET['id'];
    $get_sql = $conn->prepare("SELECT * FROM student WHERE id=?");
    $get_sql->bind_param('i', $student_id);
    $get_sql->execute();
    $res = $get_sql->get_result();
    $student = null;
    $get_sql->close();
    if ($res->num_rows  > 0) {
        while ($row = $res->fetch_assoc()) {
            $student = $row;
        }
    } else {
        Header("Location: ./index.php");
        exit();
    }
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
        $sql = $conn->prepare("UPDATE student SET full_name = ?, address = ?, phone = ?, email = ?, gender = ?, level=?, faculty= ? WHERE id = ?");
        $sql->bind_param(
            'sssssss',
            $full_name,
            $address,
            $phone,
            $email,
            $gender,
            $level,
            $faculty,
        );
        $sql->execute();
        if ($sql->affected_rows > 0) {
            header("Location: ./index.php");
        }
        $sql->close();
        exit();
    }
} else {
    Header("Location: ./index.php");
    exit();
}
?>
<!doctype html>
<html lang="en">

<head>
    <title>Update Student</title>
</head>

<body>
    <div class='container'>
        <h1>Update Student</h1>
        <a href="./index.php">Back to List</a>
        <form action="./update.php" method="post">
            <label for="full_name">Name:</label>
            <input required type="text" id="full_name" name="full_name" value="<?= $student['full_name'] ?>"><br>

            <label for="address">Address:</label>
            <input required type="text" id="address" name="address" value="<?= $student['address'] ?>"> <br>

            <label for=" email">Email:</label>
            <input required type="email" id="email" name="email" value="<?= $student['email'] ?>"> <br>

            <label for=" phone">Phone:</label>
            <input required type="number" id="phone" name="phone" value="<?= $student['phone'] ?>"> <br>

            <label for=" gender">Gender:</label>
            <input type="radio" name="gender" id="gender" value="male">Male</input>
            <input type="radio" name="gender" id="gender" value="female">Female</input><br>

            <label for="level">Level:</label>
            <input type="checkbox" <?php $student['faculty'] == "SEE/SLC" ? "checked" : "" ?> name="level[]" id="level" value="SEE/SLC">SEE/SLC</input>
            <input type="checkbox" <?php $student['faculty'] == "+2" ? "checked" : "" ?> name="level[]" id="level" value="+2">+2</input>
            <input type="checkbox" <?php $student['faculty'] == "Bachelors" ? "checked" : "" ?> name="level[]" id="level" value="Bachelors">Bachelors</input>
            <input type="checkbox" <?php $student['faculty'] == "Masters" ? "checked" : "" ?> name="level[]" id="level" value="Masters">Masters</input><br>

            <label for="faculty">Faculty:</label>
            <select name="faculty" id="faculty">
                <option value="BCA" <?php $student['faculty'] == "BCA" ? "checked" : "" ?>>BCA</option>
                <option value="BBM" <?php $student['faculty'] == "BBM" ? "checked" : "" ?>>BBM</option>
                <option value="BBS" <?php $student['faculty'] == "BBS" ? "checked" : "" ?>>BBS</option>
                <option value="BIT" <?php $student['faculty'] == "BIT" ? "checked" : "" ?>>BIT</option>
            </select><br>


            <input required type="submit" value="Submit" name="submitBtn" class="btn btn-primary"><br>


        </form>
    </div>
</body>

</html>