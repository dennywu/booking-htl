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
?>