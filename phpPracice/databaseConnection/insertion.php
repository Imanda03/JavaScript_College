<?php 
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        require "connection.php";

        $sql = "INSERT INTO cms_www (title, content, published_at)
                VALUES ('" . $_POST['title'] ."' , '" . $_POST['content'] . "', '" . $_POST['published_at'] ."')
        
            ";

            $result = mysqli_query($conn,$sql);

            if($result === false){
                echo mysqli_error($conn);
            }
            else{
                $id = mysqli_insert_id($conn);
                echo "Inserted recorded id: ".$id;
            }
    }
?>