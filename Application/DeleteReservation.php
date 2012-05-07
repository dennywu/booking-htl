<?php
    include 'connection.php';
    $id = $_GET['id'];
    $qry = "delete from reservation where noreservation = '$id'";
    $result = mysql_query($qry);
    echo json_encode($result);
?>
