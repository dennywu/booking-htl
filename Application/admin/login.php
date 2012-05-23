<?php
    include '../connection.php';
    
    $username = $_POST["Username"];
    $pass = $_POST["Password"];
    $qry = "SELECT * FROM user where username = '$username' and password = '$pass'";
    $result = mysql_query($qry);
    
    if($row = mysql_fetch_array($result)){
        session_start();
        $_SESSION["admin"] = $row["username"];
        header("Location:/viona/views/admin/index.php");
    }
    else
    {
        header("Location:/viona/login.php");
    }
?>
