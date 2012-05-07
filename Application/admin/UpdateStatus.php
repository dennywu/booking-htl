<?php
    include '../connection.php';
    $id = $_GET["id"];
    $status = $_GET["status"];
    $qry = "update reservation set status = '$status' where noreservation = '$id'";
    $result = mysql_query($qry);
    echo json_encode($result);
?>
