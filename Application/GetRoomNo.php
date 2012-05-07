<?php
    include 'connection.php';
    $data = $_GET['data'];
    $fromDate = $data['fromDate'];
    $toDate = $data['toDate'];
    $typeId = $data['typeId'];
    $totalRoom = $data['total'];
    
    $qry = "SELECT `name`,`typeid` FROM `rooms` where rooms.name not in 
            (select noroom from reservation where status not like 'close' and 
            (checkin between '$fromDate' and '$toDate' or
            checkout between '$fromDate' and '$toDate')) and typeid = '$typeId' limit $totalRoom";
    
    $result = mysql_query($qry);
    $rooms = array();
    while($row = mysql_fetch_array($result)){
        $room = $row['name'];
        array_push($rooms, $room);
    }
    echo json_encode($rooms);
?>
