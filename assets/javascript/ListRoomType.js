$(document).ready(function(){
    showRoomType();
    $("#addRoomType").click(showDialogAddRoomType);
});
function showDialogAddRoomType(){
    var addDialog = ModalDialog.Show();
    $('.Detail').load('/viona/views/admin/addRoomType.html');
}
function showRoomType(){
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/GetAllRoomType.php',
        dataType:'json',
        success:function(result){
            for(var i = 0; i< result.length; i++)
            {
                var bgcolor = i % 2 == 0 ? "#FFF" : "#EDEDED";
                $("#tblListRoomType tbody").append("<tr bgcolor='"+ bgcolor +"'>"+
                                                "<td><span class='noreservation'>"+ result[i].typeid +"</span></td>"+
                                                "<td>"+ result[i].name +"</td>"+
                                                "<td>"+ result[i].total +"</td>"+
                                                "<td>"+ result[i].price.toCurrency(2) +"</td>"+
                                                "<td><span class='edit' data="+ result[i].typeid +">Edit</span></td>"+
                                                "</tr>");
            }
            $(".edit").click(editDialog);
        }
    });
}
function editDialog(){
    var id = $(this).attr("data");
    var editDialog = ModalDialog.Show();
    $('.Detail').load('/viona/views/admin/editRoomType.html');
    setDataToDialog(id);
}
function closeDialogEditRoomType(){
      $('.ModalDialog').remove();
}
function setDataToDialog(id){
    $.ajax({
        type:'GET',
        url:'/viona/Application/admin/GetRoomTypeById.php?id='+id,
        dataType:'json',
        success:function(result){
            $("#TypeId").text(result.typeid);
            $("#TypeName").val(result.name);
            $("#TotalRoom").val(result.total);
            $("#Harga").val(result.price);
        }
    });
}
function updateRoomType(ev){
    var data = {};
    data.typeid = $("#TypeId").text();
    data.typename = $("#TypeName").val();
    data.total = $("#TotalRoom").val();
    data.price = $("#Harga").val();
    $.ajax({
        type:"POST",
        url:"/viona/Application/admin/UpdateRoomType.php",
        data:{'data':data},
        dataType:'json',
        asycn:false,
        success:function(result){
            if(result)
                location.reload(true);
        }
    });
}
function addRoomType(){
    var data = {};
    data.typeid = $("#TypeId").val();
    data.typename = $("#TypeName").val();
    data.total = $("#TotalRoom").val();
    data.price = $("#Harga").val();
    $.ajax({
        type:"POST",
        url:"/viona/Application/admin/AddRoomType.php",
        data:{'data':data},
        dataType:'json',
        asycn:false,
        success:function(result){
            if(result)
                location.reload(true);
        }
    });
}