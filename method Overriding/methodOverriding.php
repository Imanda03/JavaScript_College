<!-- Example of overriding -->
<?php
    class robot {
        public function greet(){
            echo "This is before overriding";
        }
    }

    class android extends robot{
        public function greet(){
            echo "This is after overriding";
        }
    }

    $robot = new robot();
    echo $robot->greet();  

    echo "<br>";

    $and = new android();
    echo $and->greet();
?>