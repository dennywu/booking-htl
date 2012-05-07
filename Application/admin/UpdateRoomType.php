<?php
    include '../connection.php';
    $data = $_POST["data"];    
    $qry = "update roomtype set name = '$data[typename]', total = '$data[total]', price = '$data[price]' where typeid = '$data[typeid]'";
    $result = mysql_query($qry);
    echo json_encode($result);
?>
