<?php 
    $db_host = "localhost";
    $db_name = "cms";
    $db_user = "cms_www";
    $db_password = "ri3FX4]Z(1I04Ovi";

    $conn = mysqli_connect($db_host,$db_user,$db_password,$db_name);

    if (mysqli_connect_error()) {
        echo mysqli_connect_error();
        exit;
    } 
    else
    echo "Conencted...";

    $sql = " SELECT *
    FROM cms_www
    WHERE id = " . $_GET['id'];

    $result = mysqli_query($conn,$sql);

    // var_dump($result);

    if ( $result === false) {
        echo mysqli_error($conn);
    } else {
        $cms_www = mysqli_fetch_assoc($result);
    }
    
    
?>
<html>

    <body>
        <?php if($cms_www === NULL):?>
            <p>article not found</p>
            <?php else: ?>
                    
                    <h2> <?= $cms_www["title"];?>  </h2> 
                    <p><?= $cms_www["content"];?></p> 
            <?php endif; ?>
        </body>
        </html>