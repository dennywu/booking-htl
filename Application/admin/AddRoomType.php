<?php
    include '../connection.php';
    $data = $_POST['data'];
    
    $qry = "INSERT INTO roomtype (typeid, name, total, price) 
            VALUES ('$data[typeid]','$data[typename]','$data[total]', '$data[price]')";
    $result = mysql_query($qry);
    echo json_encode($result);
?>