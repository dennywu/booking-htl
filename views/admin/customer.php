<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/viona/css/headerAndContainer.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/roomadmin.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/ModalDialog.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/editRoomType.css" />
        <script src="/viona/assets/javascript/plugin/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="/viona/assets/javascript/DateFormat.js"></script>
        <script src="/viona/assets/javascript/PrintDocument.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/ModalDialog.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/LoadingElement.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/ListCustomer.js" type="text/javascript"></script>
    </head>
    <body>
        <?php
            session_start();
            if($_SESSION["admin"] == null || $_SESSION["admin"] == "")
            {
                header("Location:/viona/login.php");
            }else{
                include_once "header.php";
        ?>
            <div class="container-adminpage">
		<table width="100%" cellpadding="0" border="0">
                    <tr>
                        <td valign="top" class="bodyListReservation">
                            <div class="ListRoomTypeContainer">
                            <div id="titlediv">Pelanggan</div>
                            <table id="tblListRoomType">
                                <thead>
                                    <tr>
                                        <td>Nama</td>
                                        <td>Alamat</td>
                                        <td>Kota</td>
                                        <td>Negara</td>
                                        <td>Kode Pos</td>
                                        <td>No. Telp</td>
                                        <td>Email</td>
                                    </tr>
                                <thead>
                                <tbody>
                                </tbody>
                            </table>
                            </div>
                        </td>
                        <td>
                            <div>
                            </div>
                        </td>
                    </tr>
		</table>
            </div>
        <?php
            }
        ?>
    </body>
</html>