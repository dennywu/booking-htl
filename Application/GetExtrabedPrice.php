<?php
    include 'connection.php';
    $qry = "SELECT price From setting limit 1";
    $result = mysql_query($qry);
    $price;
    while($row = mysql_fetch_array($result)){
        $price = $row['price'];
    }
    echo json_encode($price);
?>
