<?php
    $articles = ["first post","second post",'third post'];
    foreach($articles as $article){
        echo $article . ",";
    }
    foreach($article as $index => $article){
        echo $index . "_" . $article . ",";
    }
?>