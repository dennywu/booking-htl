$(document).ready(function(){
    GetReservations();
});
function GetReservations(){
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/GetAllReservation.php',
        dataType:'json',
        success:function(result){
          if(result.length == 0){
              $("#tblListReservation tbody").append("<tr>"+
                                            "<td colspan='5' align='center'>Tidak Ada Pemesanan</td>"+
                                            "</tr>");
          }
          else{
            for(var i = 0; i< result.length; i++)
            {
                var bgcolor = i % 2 == 0 ? "#FFF" : "#EDEDED";
                $("#tblListReservation tbody").append("<tr bgcolor='"+ bgcolor +"'>"+
                                                "<td><span class='noreservation' data='"+result[i].noreservation+"'>"+ result[i].noreservation +"</span></td>"+
                                                "<td>"+ result[i].customer +"</td>"+
                                                "<td>"+ result[i].checkin.toDefaultFormatDate() +"</td>"+
                                                "<td>"+ result[i].checkout.toDefaultFormatDate() +"</td>"+
                                                "<td>"+ result[i].status +"</td>"+
                                                "</tr>");
            }
            $(".noreservation").click(showDetail);
          }
        }
    });
}

function showDetail(el, ev){
    var noRes = $(this).attr("data");
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/GetReservationById.php?id='+noRes,
        dataType:'json',
        success:function(result){
            $("#tblListReservation").hide();
            $(".ListReservationContainer").append("<div id='detailReservation' style='padding:20px;'></div>");
            $("#detailReservation").append("<table id='tblDetailsRoom' width='99.7%' bgcolor='#FFF' cellpadding='4' border=0; cellspacing='1' style='color:#000;margin:1px;font-size: 12px;'></table>");
                            $("#tblDetailsRoom").append("<tr>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Tanggal Check-In</strong></td>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Tanggal Check-Out</strong></td>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Total Bermalam</strong></td>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Total Kamar</strong></td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td bgcolor='#ece7db' align='center'>"+ result[0].checkin.toDefaultFormatDate() +"</td>"+
                                "<td bgcolor='#ece7db' align='center'>"+ result[0].checkout.toDefaultFormatDate() +"</td>"+
                                "<td bgcolor='#ece7db' align='center'>"+ parseFloat(((new Date(result[0].checkout) - new Date(result[0].checkin))/1000) / (24*60*60)) +" Malam</td>"+
                                "<td bgcolor='#ece7db' align='center'>"+ result.length +"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Nomor Kamar</strong></td>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Type Kamar</strong></td>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Total Orang per Kamar</strong></td>"+
                                "<td bgcolor='#c7b998' align='center'><strong>Total</strong></td>"+
                            "</tr>");
            for(var i = 0;i< result.length; i++){
                $("#tblDetailsRoom").append("<tr>"+
                    "<td bgcolor='#ece7db' align='center'><strong>"+ result[i].noroom +"</strong></td>"+
                    "<td bgcolor='#ece7db' align='center'><strong>"+result[i].roomname+"</strong></td>"+
                    "<td bgcolor='#ece7db' align='center'><strong id='"+ i +"'>"+result[i].totalperson+" Dewasa</strong></td>"+
                    "<td bgcolor='#ece7db' align='center'><strong> Rp. "+ result[i].totalharga.toCurrency(2) +"</strong></td></tr>");
                if(result[i].totalchild > 0)
                    $("#"+i).append("+ "+ result[i].totalchild + " Anak");
                if(result[i].extrabed == "true")
                    $("#"+i).append("+ Ranjang Tambahan");
            }
            $("#tblDetailsRoom").append("<tr>"+
                "<td bgcolor='#c7b998' align='right' colspan='3'><strong>Sub Total</strong></td>"+
                "<td bgcolor='#c7b998' align='center'> Rp. "+ getTotal(result).toCurrency(2) +"</td>"+
                "</tr>");
            $("#tblDetailsRoom").append("<tr>"+
                "<td bgcolor='#c7b998' align='right' colspan='3'><strong>Total Akhir</strong></td>"+
                "<td bgcolor='#c7b998' align='center'>Rp. "+ getTotal(result).toCurrency(2) +"</td>"+
                "</tr>");
            $("#tblDetailsRoom").prepend("<tr><td colspan='4' bgcolor='#c7b998' align='center' style='font-size:18px;padding: 6px;'>"+
                    "<span id='statusArea'>Status: <select id='status'>"+
                        "<option value='Booking'>Booking</option>"+
                        "<option value='Paid'>Paid</option>"+
                        "<option value='Checkin'>Checkin</option>"+
                        "<option value='Checkout'>Checkout</option>"+
                    "</select></span>"+
                    "</td></tr>");
            $("#tblDetailsRoom").prepend("<tr>"+
                "<td colspan='4' bgcolor='#c7b998' align='center' style='font-size:18px;padding: 6px;'>"+
                    "KODE BOOKING : (<span style='font-weight:bold;' id='noReservation'>"+result[0].noreservation+"</span>)"+
                "</td>"+
            "</tr>");
            $("#tblDetailsRoom").prepend("<tr>"+
                "<td colspan='4' bgcolor='#c7b998' align='center' style='font-size:18px;padding: 6px;'>"+
                    "Nama Pelanggan : (<span style='font-weight:bold;'>"+ result[0].customertitle +". " +result[0].customer+"</span>)"+
                "</td>"+
            "</tr>");
            $("#tblDetailsRoom tbody").append("<tr><td colspan='4'><div class='buttons-right'><input type='submit' value='Cetak' id='buttonprint'/></div></td></tr>");
            $("#tblDetailsRoom tbody").append("<tr><td colspan='4'><div class='buttons-right'><input type='submit' value='Hapus' id='buttondelete'/></div></td></tr>");
            $("#status").val(result[0].status);
            $("#buttonprint").click(printBooking);
            $("#buttondelete").click(deleteReservation);
            $("#status").change(changeStatus);
        }
    });        
}
function getTotal(data){
    var total = 0;
    for(var i = 0;i< data.length; i++){
        total += parseFloat(data[i].totalharga);
    }
    return total.toString();
}
function printBooking(){
    var print = $("#detailReservation");
    print.find("#statusArea").hide();
    print.find("#buttonprint").hide();
    print.find("#buttondelete").hide();
    print.jqprint();
    print.find("#statusArea").show();
    print.find("#buttonprint").show();
    print.find("#buttondelete").show();
}
function changeStatus(){
    var statusChanged = $(this).val();
    var noReservation = $("#noReservation").text().trim();
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/UpdateStatus.php?id='+noReservation+'&&status='+statusChanged,
        dataType:'json',
        success:function(result){
            if(result){
                alert("Status berhasil dirubah ke "+ statusChanged);
            }
        }
    });
}
function deleteReservation(){
    var r=confirm("Apakah anda yakin akan menghapus data reservasi ini ?");
    if(r){
        var id = $("#noReservation").text();
        $.ajax({
            type:'GET',
            url:'/viona/Application/DeleteReservation.php?id='+id,
            dataType:'json',
            success:function(result){
                if(result)
                    location.reload(true);
            }
        });
    }
}