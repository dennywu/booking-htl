<?php
    $hostmysql = "localhost";
    $username = "root";
    $password = "";
    $database = "viona";
    
    $conn = mysql_connect($hostmysql, $username, $password);
    if(!$conn) die ("Can't Connent To Viona DB");
    mysql_select_db($database,$conn) or die ("Database Viona tidak ditemukan");
?>
