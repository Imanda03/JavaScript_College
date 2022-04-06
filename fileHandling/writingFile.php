<?php
    $file = "example.txt";

    if($handle = fopen($file,'w')){
        fwrite($handle,"I Love to code.");
        fclose($handle);
    }
    else
    echo "error aayo"
?>