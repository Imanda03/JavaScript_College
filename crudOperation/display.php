

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display</title>
</head>
<body>

    <div class="container2">
        <div class="main2">
            <h1 class="display">Display Data Table</h1>

            <div class="show">
                <table class="table" cellspacing="5" border="2">
                    
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                    <?php

                        include 'connection.php';

                        $q = "select * from crudtable";

                        $query = mysqli_query($con,$q);

                        while($result = mysqli_fetch_array($query)){

                    ?>
                    <tr>
                        <td><?php echo $result['id'] ?></td>
                        <td><?php echo $result['username'] ?></td>
                        <td><?php echo $result['password'] ?>sword</td>
                        <td> <button> <a href="delete.php?id= <?php echo $result['id'] ?>">delete </a> </button></td>
                        <td><button> <a href="update.php?id= <?php echo $result['id'] ?>"> update  </a></button></td>
                    </tr>
                    <?php } ?>
                </table>
            </div>
        </div>
    </div>
    
</body>
</html>