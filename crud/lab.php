<?php include "./database.php";
global $conn;
mysqli_query(
    $conn,
    "INSERT INTO customer (customer_name,contact_name, address, city, postal_code, country) VALUES
    ('nischal', '9823000133', 'Opera', 'Sydney', '144660', 'Australia')") or die(mysqli_error($db) );

mysqli_query(
    $conn,
    "INSERT INTO customer (customer_name,contact_name, address, city, postal_code, country) VALUES 
    ('vivek', '9823000123', 'banasthali', 'Kathmandu', '133660', 'Nepal'), 
    ('Anish', '9080000112', 'machapokhari', 'Kathmandu', '144330', 'Nepal')"
)  or die(mysqli_error($db) );

mysqli_query(
    $conn,
    "INSERT INTO customer (customer_name, contact_name, address, city, postal_code, country) VALUES
    ('kumar', '97265432', 'jughu', 'Delhi', '144330', 'India'),
    ('amit', '97365432', 'jughu', 'Delhi', '144330', 'India'),
    ('sugam', '97165432', 'jughu', 'Delhi', '144330', 'India')"
)  or die(mysqli_error($db) );


mysqli_query(
    $conn,
    "INSERT INTO customer (customer_name, contact_name, address, city, postal_code, country) VALUES
    ('kumar', '98492341', 'minTown', 'Shanghai', '13430', 'China'),
    ('amit', '98292341', 'minTown', 'Shanghai', '13430', 'China'),
    ('asis', '98192341', 'minTown', 'Shanghai', '13430', 'China'),
    ('sugam', '98792341', 'minTown', 'Shanghai', '13430', 'China')"
)  or die(mysqli_error($db) );

mysqli_query($conn, "UPDATE customer SET city='Lalitpur' WHERE city='Kathmandu'")  or die(mysqli_error($db) );

mysqli_query($conn, "UPDATE customer SET city='New York', country='USA' WHERE city='Shanghai' AND country='China'")  or die(mysqli_error($db) );

mysqli_query($conn, "DELETE FROM customer WHERE country='Australia'")  or die(mysqli_error($db) );

mysqli_query($conn, "SELECT * FROM customer WHERE country in ('Nepal','India')")  or die(mysqli_error($db) );

header ("Location: ./index.php");