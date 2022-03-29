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
    ORDER BY published_at";

    $result = mysqli_query($conn,$sql);

    // var_dump($result);

    if ( $result === false) {
        echo mysqli_error($conn);
    } else {
        $cms_www = mysqli_fetch_all($result,MYSQLI_ASSOC);
    }
    
    
?>
<html>

    <body>
        <?php if(empty($cms_www)):?>
            <p>article not found</p>
            <?php else: ?>
            <ul>
                <?php foreach ($cms_www as $article): ?>
                <li>
                    
                    <h2><?= $article["title"];?></h2> 
                    <p><?= $article["content"];?></p>
                </li>
                <?php endforeach; ?>
            </ul>
            <?php endif; ?>
        </body>
        </html>