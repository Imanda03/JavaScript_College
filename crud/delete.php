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
        $sql = $conn->prepare("DELETE FROM student WHERE id = ?");
        $sql->bind_param(
            'i',
            $student_id
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
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Delete Student</title>
</head>

<body>
    <div class='container'>
        <h1>Delete Student</h1>
        <a href="./index.php">Back to List</a>
        <form action="./delete.php?id=<?= $student_id ?>" method="post">
            <h4>Are you sure you want to delete student <i><?= $student['full_name'] ?></i></h4>
            <small>This action is irreversable.</small>
            <input required type="submit" value="Delete" name="submitBtn" class="btn btn-primary"><br>
        </form>
    </div>
</body>

</html>