<?php
    function CalculateGrossTotal($data, $room){
        $grossTotal = 0;
        $night = $data["Night"];
        //$interval = $fromdate->diff($todate);
        //$night = $interval->d;
        //$night = date_diff($data["FromDate"], $data["ToDate"]);
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
?>
