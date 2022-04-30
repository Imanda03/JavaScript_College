<?php
include "database.php";
global $conn;
$sql = $conn->prepare("SELECT * FROM student");
$sql->execute();
$result = $sql->get_result();
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Students List</title>
</head>

<body>
    <h1>Students List</h1>
    <a href="./insert.php">Create New Student</a>
    <table border='1'>
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Level</th>
                <th>Faculty</th>
            </tr>
        </thead>
        <tbody>
            <?php
            while ($row = $result->fetch_assoc()) {
            ?>
                <tr>
                    <td> <?= $row['full_name'] ?> </td>
                    <td> <?= $row['address'] ?> </td>
                    <td> <?= $row['phone'] ?> </td>
                    <td> <?= $row['email'] ?> </td>
                    <td> <?= $row['gender'] ?> </td>
                    <td> <?= $row['level'] ?> </td>
                    <td> <?= $row['faculty'] ?> </td>
                    <td><a href="./update.php?id=<?= $row['id'] ?>">edit</a> | <a href="./delete.php?id=<?= $row['id'] ?>">delete</a></td>
                </tr>
            <?php
            };
            ?>
        </tbody>
    </table>


    <?php
    $sql->close();
    ?>
</body>

</html>