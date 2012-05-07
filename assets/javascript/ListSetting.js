$(document).ready(function(){
    showSetting();
});
function showSetting(){
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/GetAllSetting.php',
        dataType:'json',
        success:function(result){
            for(var i = 0; i< result.length; i++)
            {
                var bgcolor = i % 2 == 0 ? "#FFF" : "#EDEDED";
                $("#tblListRoomType tbody").append("<tr bgcolor='"+ bgcolor +"'>"+
                                                "<td><span class='noreservation'>"+ result[i].name +"</span></td>"+
                                                "<td>"+ result[i].price.toCurrency(2) +"</td>"+
                                                "<td><span class='edit' data="+ result[i].id +">Edit</span></td>"+
                                                "</tr>");
            }
            $(".edit").click(editDialog);
        }
    });
}
function editDialog(){
    var id = $(this).attr("data");
    var editDialog = ModalDialog.Show();
    $('.Detail').load('/viona/views/admin/editSetting.html');
    setDataToDialog(id);
}
function closeDialogEditRoomType(){
      $('.ModalDialog').remove();
}
function setDataToDialog(id){
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/GetSettingById.php?id='+id,
        dataType:'json',
        success:function(result){
            $(".TitleHeaderDialogEditBilling").text(result.name);
            $("#settingname").text(result.name);
            $("#settingId").val(result.id);
            $("#settingNameValue").val(result.price);
            $("#desc").text("Mengubah harga 'ExtraBed'");
        }
    });
}
function updateSetting(ev){
    var data = {};
    data.id = $("#settingId").val();
    data.price = $("#settingNameValue").val();
    $.ajax({
        type:"POST",
        url:"/viona/Application/admin/UpdateSetting.php",
        data:{'data':data},
        dataType:'json',
        asycn:false,
        success:function(result){
            if(result)
                location.reload(true);
        }
    });
}