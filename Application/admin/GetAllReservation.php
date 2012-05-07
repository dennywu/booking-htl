<?php
    include '../connection.php';
    $qry = "SELECT DISTINCT(noreservation), checkin, checkout, status, 
            (select name from customer where reservation.customerid = id) as customer
            from reservation";
    $result = mysql_query($qry);
    $reservations = array();
    while($row = mysql_fetch_array($result)){
        array_push($reservations, $row);
    }
    
    echo json_encode($reservations);
?>
