<?php
    include 'connection.php';
    $data = $_POST['data'];
    $custId = InsertCustomer($data["Customer"]);
    $noreservation = uniqid();
    if($custId == null)
    {
        echo "Gagal Create Customer";
        return;
    }
    foreach ($data["Room"] as $res) {
        $grossTotal = $res["price"];
        $qry = "INSERT INTO reservation (typeid, noroom, checkin, checkout, customerid, noreservation,reservationdate, expireddate, totalharga, extrabed, totalperson, totalchild, status) 
            VALUES ('$res[room]','$res[noroom]','$data[FromDate]', '$data[ToDate]', '$custId', '$noreservation',NOW(),
            DATE_ADD(NOW(), INTERVAL 6 HOUR), '$grossTotal', '$data[Extrabed]','$data[TotalPerson]', '$data[TotalChild]','Booking')";
        mysql_query($qry);
    }
    echo json_encode($noreservation);
    
    function InsertCustomer($cust){
        $id = uniqid();
        $qrycust = "INSERT INTO customer (id, title, name, address, city, state, kodepos,telp, email) 
                    values ('$id' ,'$cust[Title]', '$cust[Name]', '$cust[Address]', '$cust[City]', '$cust[State]', '$cust[KodePos]', '$cust[Telp]', '$cust[Email]')";
        $result = mysql_query($qrycust);
        if($result)
            return $id;
        return null;
    }
    /*function CalculateTotalAmount($room){
        $total = 0;
        foreach ($room as $rm){
            $qry = "SELECT price from roomtype where typeid = '$rm[room]'";
            $result = mysql_query($qry);
            while($row = mysql_fetch_array($result)){
                $total += $row['price'];
            }
        }
        return ($total * 12) / 100;
    }*/
    /*function CalculateGrossTotal($data, $room){
        $grossTotal = 0;
        $night = $data["Night"];
        $qry = "SELECT price from roomtype where typeid = '$room[room]'";
        $result = mysql_query($qry);
        while($row = mysql_fetch_array($result)){
            if($data.Extrabed){
                $qry1 = "SELECT price From extrabed limit 1";
                $result1 = mysql_query($qry1);
                $extrabedprice= 0;
                while($row1 = mysql_fetch_array($result1)){
                    $extrabedprice = $row1['price'];
                }
                $a = $row["price"] + $extrabedprice;
                $grossTotal = $a * $night;
            }
            else{
                $grossTotal = $row["price"] * night;
            }
        }
        return $grossTotal;
    }*/
?>