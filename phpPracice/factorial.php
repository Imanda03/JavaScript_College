<?php
    $num = 6;
    $fact = 1;

    for ($i=$num; $i >= 1 ; $i--) { 
        $fact = $fact * $i;
    }
    echo "The factorial is". $fact ;
?>