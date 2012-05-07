function selectRoom(){
    var elementLoading = new ElementLoading();
    elementLoading.show("Harap Tunggu");
    RESERVATION.Room = [];
    var room = $(".room");
    $("#selectdatebutton").removeClass().addClass("pending");
    $("#selectroombutton").removeClass().addClass("current");
    var isSelected = false;
    for(var i = 0; i< room.length; i++)
    {
        if(room[i].value > 0){
            var data = new Object();
            data.fromDate = RESERVATION.FromDate;
            data.toDate = RESERVATION.ToDate;
            data.typeId = room[i].getAttribute("typeid");
            data.total = room[i].value;
            $.ajax({
                type: 'GET',
                url: '/viona/Application/GetRoomNo.php',
                data: {"data":data},
                dataType: "json",
                async:false,
                success:function(result){
                    for(var e = 0; e < room[i].value; e++){
                        var grosstotal = (RESERVATION.Extrabed == true) ? ((parseFloat(room[i].getAttribute("price")) + parseFloat(RESERVATION.ExtrabedPrice))*RESERVATION.Night) : parseFloat(room[i].getAttribute("price")) * RESERVATION.Night;
                        RESERVATION.Room.push(
                        {
                            'room' : room[i].getAttribute("typeid"),
                            'name' : room[i].getAttribute("name"),
                            'price': grosstotal,
                            'noroom': result[e]
                        });
                    }
                }
            });
            isSelected = true;
        }
    }
    if(!isSelected){
        $("#loadingElementContainer").remove();
        return alert("Silahkan Pilih Kamar Terlebih Dahulu");
    }
    showCustomerInputData();
    showInputDetailCustomer();
    $("#buttonbooking").click(booking);
    $("#loadingElementContainer").remove();
}
function showCustomerInputData(){
    var totalKamar = getTotalKamar();
    var subtotal = getSubTotal().toString();
    var totalAkhir = subtotal;
    $("#selectDate").empty();
    $("#selectDate").append("<table id='tblDetailsRoom' width='99.7%' bgcolor='#FFF' cellpadding='4' border=0; cellspacing='1' style='color:#000;margin:1px;'></table>");
    $("#tblDetailsRoom").append("<tr>"+
        "<td bgcolor='#c7b998' align='center'><strong>Tanggal Check-In</strong></td>"+
        "<td bgcolor='#c7b998' align='center'><strong>Tanggal Check-Out</strong></td>"+
        "<td bgcolor='#c7b998' align='center'><strong>Total Bermalam</strong></td>"+
        "<td bgcolor='#c7b998' align='center'><strong>Total Kamar</strong></td>"+
    "</tr>"+
    "<tr>"+
        "<td bgcolor='#ece7db' align='center'>"+ RESERVATION.FromDate +"</td>"+
        "<td bgcolor='#ece7db' align='center'>"+ RESERVATION.ToDate +"</td>"+
        "<td bgcolor='#ece7db' align='center'>"+ RESERVATION.Night +" Malam</td>"+
        "<td bgcolor='#ece7db' align='center'>"+ totalKamar +"</td>"+
    "</tr>"+
    "<tr>"+
        "<td bgcolor='#c7b998' align='center'><strong>Nomor Kamar</strong></td>"+
        "<td bgcolor='#c7b998' align='center'><strong>Type Kamar</strong></td>"+
        "<td bgcolor='#c7b998' align='center'><strong>Total Orang per Kamar</strong></td>"+
        "<td bgcolor='#c7b998' align='center'><strong>Total</strong></td>"+
    "</tr>");
    for(var i = 0;i< RESERVATION.Room.length; i++){
        $("#tblDetailsRoom").append("<tr>"+
            "<td bgcolor='#ece7db' align='center'><strong>"+ RESERVATION.Room[i].noroom +"</strong></td>"+
            "<td bgcolor='#ece7db' align='center'><strong>"+RESERVATION.Room[i].name+"</strong></td>"+
            "<td bgcolor='#ece7db' align='center'><strong id='"+ i +"'>"+RESERVATION.TotalPerson+" Dewasa</strong></td>"+
            "<td bgcolor='#ece7db' align='center'><strong> Rp. "+ RESERVATION.Room[i].price.toString().toCurrency(2) +"</strong></td></tr>");
        if(RESERVATION.TotalChild > 0)
            $("#"+i).append("+ "+ RESERVATION.TotalChild + " Anak");
        if(RESERVATION.Extrabed)
            $("#"+i).append("+ Ranjang Tambahan");
    }
    $("#tblDetailsRoom").append("<tr>"+
        "<td bgcolor='#c7b998' align='right' colspan='3'><strong>Sub Total</strong></td>"+
        "<td bgcolor='#c7b998' align='center'> Rp. "+ subtotal.toCurrency(2) +"</td>"+
        "</tr>");
    $("#tblDetailsRoom").append("<tr>"+
        "<td bgcolor='#c7b998' align='right' colspan='3'><strong>Total Akhir</strong></td>"+
        "<td bgcolor='#c7b998' align='center'>Rp. "+ totalAkhir.toCurrency(2) +"</td>"+
        "</tr>");
}
function getTotalKamar(){
    var total = RESERVATION.Room.length;
    return total;
}
function getSubTotal(){
    var subtotal=0;
    for(var i = 0;i< RESERVATION.Room.length; i++){
            subtotal += parseInt(RESERVATION.Room[i].price);
    }
    return subtotal;
}
function showInputDetailCustomer(){
    $("#selectDate").append("<div id='inputdetailcustomer' style='margin-top:30px;'></div>");
    $("#inputdetailcustomer").load('/viona/views/reservation/inputDetailCustomer.html');
}