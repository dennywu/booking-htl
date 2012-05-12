<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/viona/css/indexAdmin.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/headerAndContainer.css" />
        <script src="/viona/assets/javascript/plugin/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="/viona/assets/javascript/ListReservation.js"></script>
        <script type="text/javascript" src="/viona/assets/javascript/DateFormat.js"></script>
        <script src="/viona/assets/javascript/PrintDocument.js" type="text/javascript"></script>
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
                include_once "header.php";
        ?>
            <div class="container-adminpage">
		<table width="100%" cellpadding="0" border="0">
                    <tr>
                        <td valign="top" class="bodyListReservation">
                            <div class="ListReservationContainer">
                            <div id="titlediv">Daftar Reservasi</div>
                            <table id="tblListReservation">
                                <thead>
                                    <tr>
                                        <td>No Reservasi</td>
                                        <td>Nama Pelanggan</td>
                                        <td>Tanggal Checkin</td>
                                        <td>Tanggal Checkout</td>
                                        <td>Status</td>
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