function booking(){
    var cust = {};
    cust.Title = $("#cust-title").val();
    cust.Name = $("#cust-name").val();
    cust.Address = $("#cust-address").val();
    cust.City = $("#cust-city").val();
    cust.State = $("#cust-state").val();
    cust.KodePos = $("#cust-kodepos").val();
    cust.Telp = $("#cust-telp").val();
    cust.Email = $("#cust-email").val();
    
    if(cust.Name == ""||cust.Address=="" || cust.City == ""|| cust.State == "" || cust.Telp == "" || cust.Email == "")
        return alert("silahkan isi data anda dengan lengkap");
    RESERVATION.Customer = cust;
    RESERVATION.Keterangan = $("cust-keterangan").val();
    $.ajax({
        type:'POST',
        url:'/viona/Application/Booking.php',
        data: {'data':RESERVATION},
        dataType:'json',
        beforeSend: function(){
            var elementLoading = new ElementLoading();
            elementLoading.show("Sedang Proses");
        },
        success:function(result){
            $("#selectdatebutton").removeClass().addClass("pending");
            $("#selectroombutton").removeClass().addClass("pending");
            $("#booked").removeClass().addClass("current");
            $("#loadingElementContainer").remove();
            console.log(result);
            $("#inputdetailcustomer").remove();
            $("#layout-nav div table").hide();
            $("#tblDetailsRoom").prepend("<tr>"+
                "<td colspan='4' bgcolor='#c7b998' align='center' style='font-size:18px;padding: 6px;'>"+
                    "KODE BOOKING : (<span style='font-weight:bold;'>"+result+"</span>)"+
                "</td>"+
            "</tr>");
            $("#tblDetailsRoom").prepend("<tr>"+
                "<td colspan='4' bgcolor='#c7b998' align='center' style='font-size:18px;padding: 6px;'>"+
                    "Nama Pelanggan : (<span style='font-weight:bold;'>"+ RESERVATION.Customer.Title +" " +RESERVATION.Customer.Name+"</span>)"+
                "</td>"+
            "</tr>");
            $("#tblDetailsRoom tbody").append("<tr><td colspan='4'>Cara pembayaran penyewaan hotel <strong>Viona Duta Samudra</strong> bisa menggunakan Paypal dan transfer. <br/>"+
                "Klik tombol pembayaran jika menggunakan Paypal. Jika menggunakan cara transfer, silahkan transfer tunai ke rekening:<br/>"+
                "5270984977 a/n Viona Duta Samudra. <br/>Segara konfirmasi jika terah melakukan pembayaran."+
                "Untuk informasi lebih lanjut, hubungi : <br/><br/>"+
                "<strong>Viona Duta Samudra</strong><br/>"+
                "Telp :  (0778) 23459 <br/>"+
                "Alamat : Komplek Ruko Saudara Hasta Mandiri No. 1C, Bengkong Indah, Batam<br/>"+
                "</td></tr>");
            $("#tblDetailsRoom tbody").append("<tr><td colspan='4'><div class='buttons-right'><input type='submit' value='Cetak' id='buttonprint''/></div></td></tr>");
            $("#tblDetailsRoom tbody").append("<tr><td colspan='4'><div id='payment'></div></td></tr>");
            $("#buttonprint").click(printBooking);
            $("#payment").load("/viona/views/reservation/payment.html");
            setDataPayment(result);
        },
        error:function(a,b,c){
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }); 
}
function printBooking(){
    var print = $("#selectDate");
    print.jqprint();
}
function setDataPayment(no){
            window.setTimeout(function(){
            $("#first_name").val(RESERVATION.Customer.Name);
            $("#payer_email").val(RESERVATION.Customer.Email);
            $("#itemname").val("Hotel Viona (kode booking:" + no);
            $("#item_number").val(no);
            $("#totalpayment").val($("#totalAkhir").val());
            },1000);
}