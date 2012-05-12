<?php
    include '../connection.php';
    $dari = $_POST["dari"];
    $sampai = $_POST['sampai'];
    $status = $_POST["status"];
    
    $qry = "select noreservation,
            (select name from customer where id = reservation.customerid) as customer,
            checkin,checkout,sum(totalharga) as total 
            from reservation where status = '$status' and 
                 reservationdate between '$dari' and '$sampai' 
            group by noreservation";
    $result = mysql_query($qry);
    $reservations = array();
    while($row = mysql_fetch_array($result)){
        array_push($reservations, $row);
    }
    
    echo json_encode($reservations);
?>
