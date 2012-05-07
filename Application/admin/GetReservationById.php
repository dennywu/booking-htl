<?php
    include '../connection.php';
    $id = $_GET["id"];
    $qry = "SELECT *, (select name from customer where id = reservation.customerid) as customer,
            (select name from roomtype where typeid = reservation.typeid) as roomname,
            (select title from customer where id = reservation.customerid) as customertitle
            FROM reservation where noreservation = '$id'";
    $result = mysql_query($qry);
    $detailReservation = array();
    while($row = mysql_fetch_array($result)){
        array_push($detailReservation, $row);
    }
    
    echo json_encode($detailReservation);
?>
