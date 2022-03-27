<?php
    $num = 5;
    $count = 0;
    for ($i=1; $i <= $num ; $i++) { 
        if ($num %$i == 0) {
            $count++;
        }
    }
    if ($count == 2) {
        echo "The given number is prime";
    }
    else{
        echo "The given number is composite";
    }
?>