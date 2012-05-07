<?php
    include '../connection.php';
    $data = $_POST["data"];    
    $qry = "update setting set price = '$data[price]' where id = '$data[id]'";
    $result = mysql_query($qry);
    echo json_encode($result);
?>
