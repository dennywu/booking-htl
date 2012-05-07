<?php
    include '../connection.php';
    $qry = "SELECT * from customer";
    $result = mysql_query($qry);
    $customers = array();
    while($row = mysql_fetch_array($result)){
        array_push($customers, $row);
    }
    
    echo json_encode($customers);
?>
