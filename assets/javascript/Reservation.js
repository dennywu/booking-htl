var RESERVATION = {};

$(document).ready(function(){
    setDatePicker();
});
function setDatePicker(){
    var dates = $("#fromDate, #toDate").datepicker({dateFormat: 'yy-mm-dd',
                    defaultDate: "+1w",
                    changeMonth: true,
                    gotoCurrent: true,
                    numberOfMonths: 1,
                    onSelect: function (selectedDate) {
                        var option = this.id == "fromDate" ? "minDate" : "maxDate",
					instance = $(this).data("datepicker"),
					date = $.datepicker.parseDate(
						instance.settings.dateFormat ||
						$.datepicker._defaults.dateFormat,
						selectedDate, instance.settings);                        
                        dates.not(this).datepicker("option", option, date);
                    }
                });
}
function checkDate(){
    var data = new Object();
    data.fromDate = $("#fromDate").val();
    data.toDate = $("#toDate").val();
    data.totalPerson = $("#guest").val();
    data.totalChild = $("#child").val();
    if(data.fromDate == "" || data.toDate == ""){
        $("#errorMessage").text("tanggal checkin dan checkout harus diisi").show();
        setTimeout(function(){
            $("#errorMessage").empty().hide();
        }, 5000)
        return;
    }
    if($("#extrabed:checked").length > 0)
        data.extrabed = true;
    else
        data.extrabed = false;
    
    var dari = new Date(data.fromDate);
    var sampai = new Date(data.toDate);
    var diff = ((sampai - dari)/1000) / (24*60*60);
    
    RESERVATION.FromDate = data.fromDate;
    RESERVATION.ToDate = data.toDate;
    RESERVATION.Night = parseFloat(diff);
    RESERVATION.TotalPerson = data.totalPerson;
    RESERVATION.TotalChild = data.totalChild;
    RESERVATION.Extrabed = data.extrabed;
    if(RESERVATION.Extrabed)
        {
            $.ajax({
                type:'GET',
                url:'/viona/Application/GetExtrabedPrice.php',
                dataType:'json',
                async:false,
                success:function(price){
                    RESERVATION.ExtrabedPrice = price;
                }
            });
        }
    
    $.ajax({
        type:'POST',
        url:'/viona/Application/Reservation.php',
        data : {'data':data},
        dataType: 'json',
        beforeSend: function(){
            var elementLoading = new ElementLoading();
            elementLoading.show("Harap Tunggu");
        },
        success:function(data){
                showRoom(data);
        }
    });
    return;
}
function showRoom(data){
    createLeftDescription();
    $("#selectDate").empty();
    $("#selectDate").append("<table id='tblDetailRoom' width='99.7%' bgcolor='#c7b998' cellpadding='1' cellspacing='0' style='color:#000;margin:1px;'></table>");
    for(var i = 0; i<data.length; i++)
    {
        createDetailRoom(data[i]);
    }
    $("#selectDate").append("<div class='buttons-right'><input type='submit' value='SELANJUTNYA' id='buttonSelectRoom''/></div>");
    $("#loadingElementContainer").remove();
    $("#buttonSelectRoom").click(selectRoom);
}
function createDetailRoom(data){
    var night= RESERVATION.Night;
    var total = (night * data.Price).toString();
    $("#tblDetailRoom").append("<tr><td style='width:100%;'><b>"+ data.Name +"</b></td></tr>");
    $("#tblDetailRoom").append("<tr><td><table width='100%' cellpadding='2px' cellspacing='2px' id='detail_"+data.TypeId+"'>"+
        "<tr>"+
            "<td bgcolor='#ece7db' width='30%' style='padding: 5px 5px 5px 5px;'><strong>Jumlah Orang dan Kamar</strong></td>"+
            "<td bgcolor='#ece7db' width='20%' style='padding: 5px 5px 5px 5px;'><span id='totalPerson_"+ data.TypeId +"'>"+ RESERVATION.TotalPerson +" Orang</span></td>"+
            "<td bgcolor='#ece7db' width='40%' style='padding: 5px 5px 5px 5px;'><strong>Kamar yang tersedia</strong></td>"+
            "<td bgcolor='#ece7db' width='10%' style='padding: 5px 5px 5px 5px;'>"+
                "<div id='selectTotalKamar_"+ data.TypeId +"'></div>"+
            "</td>"+
        "</tr>"+
        "</table></td></tr>");
    if(data.Available == 0){
        $("#selectTotalKamar_"+data.TypeId).text("Penuh").css('color','red').css('font-weight','bold');
    }
    else{
        $("#selectTotalKamar_"+data.TypeId).append("<select id='available"+ data.TypeId +"' price='"+ data.Price +"' name='"+ data.Name +"' typeid='"+ data.TypeId +"' class='room'><select>");
        $("#available"+data.TypeId).append("<option value='0'>0</option>");
        for(var i = 0; i<data.Available; i++)
            $("#available"+data.TypeId).append("<option value="+ (i+1) +">"+ (i+1) +"</option>");
    }
    
    if(RESERVATION.TotalChild > 0)
        $("#totalPerson_"+data.TypeId).append("+ "+ RESERVATION.TotalChild + " Anak");
    
    if(RESERVATION.Extrabed){
        var total = (parseFloat(night) * parseFloat(parseFloat(data.Price) + parseFloat(RESERVATION.ExtrabedPrice))).toString();
        $("#detail_"+data.TypeId).append("<tr>"+
            "<td bgcolor='#ece7db' style='padding: 5px 5px 5px 5px;'><strong>Harga Tambahan Ranjang</strong></td>"+
            "<td bgcolor='#ece7db' colspan='3' style='padding: 5px 5px 5px 5px;'>Rp. "+ RESERVATION.ExtrabedPrice.toCurrency(2) +"</td>"+
        "</tr>");
        $("#detail_"+data.TypeId).append("<tr>"+
            "<td bgcolor='#ece7db' style='padding: 5px 5px 5px 5px;'><strong>Total Harga dan Kamar</strong></td>"+
            "<td bgcolor='#ece7db' style='padding: 5px 5px 5px 5px;'> Rp."+ data.Price.toCurrency(2)  +"</td>"+
            "<td bgcolor='#ece7db' colspan='2' style='padding: 5px 5px 5px 5px;'>"+ night +" Hari X (Rp. "+ data.Price.toCurrency(2) +" + Rp. "+ RESERVATION.ExtrabedPrice.toCurrency(2) +") = Rp. "+ total.toCurrency(2) +"</span></td>"+
        "</tr>");
    }
    else{
        var total = (night * data.Price).toString();
        $("#detail_"+data.TypeId).append("<tr>"+
            "<td bgcolor='#ece7db' style='padding: 5px 5px 5px 5px;'><strong>Total Harga dan Kamar</strong></td>"+
            "<td bgcolor='#ece7db' style='padding: 5px 5px 5px 5px;'> Rp."+ data.Price.toCurrency(2)  +"</td>"+
            "<td bgcolor='#ece7db' colspan='2' style='padding: 5px 5px 5px 5px;'>"+ night +" hari X Rp "+ data.Price.toCurrency(2) +" = Rp. "+ total.toCurrency(2) +"</td>"+
        "</tr>");
    }
}
function createLeftDescription(){
    $("#layout-nav").empty();
    $("#layout-nav").append("<div style='margin-top: 42px;'>"+
        "<table bgcolor='#c7b998' cellpadding='1' cellspacing='0' width='100%' style='color:#000;'>"+
            "<tr><td>Tanggal Check-In :</td></tr>"+
            "<tr><td bgcolor='#ece7db'><span style='padding-left:20px;'>"+ RESERVATION.FromDate +"</span></td></tr>"+
            "<tr><td>Tanggal Check-Out :</td></tr>"+
            "<tr><td bgcolor='#ece7db'><span style='padding-left:20px;'>"+ RESERVATION.ToDate +"</span></td></tr>"+
            "<tr><td>Total Bermalam :</td></tr>"+
            "<tr><td bgcolor='#ece7db'><span style='padding-left:20px;'>"+ RESERVATION.Night +" Malam</span></td></tr>"+
            "<tr><td>Total Orang per Kamar :</td></tr>"+
            "<tr><td bgcolor='#ece7db'><span style='padding-left:20px;'>"+ RESERVATION.TotalPerson +" Dewasa</span></td></tr>"+
        "</table>"+
        "</div>");
    if(RESERVATION.TotalChild > 0)
        $("#layout-nav div table").append("<tr><td>Total Anak per Kamar :</td></tr>"+
          "<tr><td bgcolor='#ece7db'><span style='padding-left:20px;'>"+ RESERVATION.TotalChild +" Orang</span></td></tr>");
    if(RESERVATION.Extrabed) 
        $("#layout-nav div table").append("<tr><td>Tambahan Ranjang :</td></tr>"+
          "<tr><td bgcolor='#ece7db'><span style='padding-left:20px;'>Ya</span></td></tr>");
}