<?php
    include '../connection.php';
    $qry = "SELECT * from setting";
    $result = mysql_query($qry);
    $setting = array();
    while($row = mysql_fetch_array($result)){
        array_push($setting, $row);
    }
    
    echo json_encode($setting);
?>
