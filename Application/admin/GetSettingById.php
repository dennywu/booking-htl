<?php
    include '../connection.php';
    $id = $_GET["id"];
    $qry = "SELECT * from setting where id='$id'";
    $result = mysql_query($qry);
    $setting;
    while($row = mysql_fetch_array($result)){
        $setting = $row;
    }
    
    echo json_encode($setting);
?>
