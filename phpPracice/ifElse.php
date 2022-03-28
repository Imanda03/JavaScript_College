<?php
    $time = 20;
    if ( $time <12 ) {
        echo "Good Morning";
    }
    else if ( $time <18 ) {
        echo "Good Afternoon";
    }
    elseif( $time < 27){
        echo "Good Evening";
    }
    else {
        echo "Good Night";
    }
?>