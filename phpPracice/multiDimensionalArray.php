<?php
    $article = [
       ["title" => "first post", "content" => "This is the first"],
       ["title" => "second post", "content" => "This is the second"]
    ];

    var_dump($article);
    var_dump($article[1]["title"]);
?>