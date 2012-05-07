<?php
    include '../connection.php';
    $qry = "SELECT * from roomtype";
    $result = mysql_query($qry);
    $types = array();
    while($row = mysql_fetch_array($result)){
        array_push($types, $row);
    }
    
    echo json_encode($types);
?>
