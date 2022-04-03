<?php 
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        require "connection.php"

        $sql_"INSERT INTO cns_www(title,content,published); 
            VALUES( '" .$_POST['tirle'] . "'
            '".$_POST['content'] . "'
            '".$_POST['published_at'] . "')";

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