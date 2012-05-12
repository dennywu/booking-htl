<?php
    include '../connection.php';
    $dari = $_POST["dari"];
    $sampai = $_POST['sampai'];
    
    $qry = "select CAST(reservationdate AS DATE)as reservationdate,sum(totalharga) as total 
            from reservation where 
                 reservationdate between '$dari' and '$sampai' 
            group by CAST(reservationdate AS DATE)";
    $result = mysql_query($qry);
    $reservations = array();
    while($row = mysql_fetch_array($result)){
        array_push($reservations, $row);
    }
    
    echo json_encode($reservations);
?>
