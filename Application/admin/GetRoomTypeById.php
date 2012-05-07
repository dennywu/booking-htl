<?php
    include '../connection.php';
    $id = $_GET["id"];
    $qry = "SELECT * from roomtype where typeid='$id'";
    $result = mysql_query($qry);
    $roomtype;
    while($row = mysql_fetch_array($result)){
        $roomtype = $row;
    }
    
    echo json_encode($roomtype);
?>
