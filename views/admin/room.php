<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/viona/css/headerAndContainer.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/roomadmin.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/ModalDialog.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/editRoomType.css" />
        <script src="/viona/assets/javascript/plugin/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="/viona/assets/javascript/ListRoomType.js"></script>
        <script type="text/javascript" src="/viona/assets/javascript/DateFormat.js"></script>
        <script src="/viona/assets/javascript/PrintDocument.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/ModalDialog.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/LoadingElement.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/CurrencyRounding.js" type="text/javascript"></script>
    </head>
    <body>
        <?php
            session_start();
            if($_SESSION["admin"] == null || $_SESSION["admin"] == "")
            {
                header("Location:/viona/login.php");
            }else{
                include_once "/header.php";
        ?>
            <div class="container-adminpage">
		<table width="100%" cellpadding="0" border="0">
                    <tr>
                        <td valign="top" class="bodyListReservation">
                            <div class="ListRoomTypeContainer">
                            <div id="titlediv">Kamar</div>
                            <table id="tblListRoomType">
                                <thead>
                                    <tr>
                                        <td>Kode Type Kamar</td>
                                        <td>Nama Type Kamar</td>
                                        <td>Jumlah Kamar</td>
                                        <td>Harga Per Type Kamar</td>
                                        <td></td>
                                    </tr>
                                <thead>
                                <tbody>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="5">
                                            <input type="button" id="addRoomType" value="Tambah Tipe Kamar"/>
                                        </td>
                                    </tr>
                                </tfoot>
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