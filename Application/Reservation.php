<?php
    include 'connection.php';
    include 'Room.php';
    $data = $_POST['data'];
    $fromDate = $data['fromDate'];
    $toDate = $data['toDate'];
    
    $qry = "SELECT `price`,`name`,`typeid`,
            roomtype.total - ifnull((select count(typeid) from reservation where typeid=roomtype.typeid and status not like 'close' and 
            (checkin between '$fromDate' and '$toDate' or
            checkout between '$fromDate' and '$toDate')),0)  as available
            FROM `roomtype` ";
    $result = mysql_query($qry);
    $rooms = array();
    while($row = mysql_fetch_array($result)){
        $room = new Room($row['available'],$row['price'], $row['name'], $row['typeid']);
        array_push($rooms, $room);
    }
    echo json_encode($rooms);
?>