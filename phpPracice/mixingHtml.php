<?php
    $articles = [
       ["title" => "first post", 
       "content" => "This is the first post"],

       ["title" => "second post",
        "content" => "This is the second post"],

        ["title" => "Read this",
        "content" => "You must read this now"]
    ];

?>

<html>
    <head>
        <title>My blog</title>
    </head>
    <body>
        <header>
            <h1>My blog</h1>
        </header>
        <main>
            <ul>
                <?php
                    foreach($articles as $article): ?>
                <li>
                    <article>
                        <h2>
                            <?= $article["title"]; ?>
                        </h2>
                        <p>
                            <?= $article["content"];  ?>
                        </p>
                    </article>
                </li>
                <?php endforeach;?>
            </ul>
        </main>
            
            </body>
</html>