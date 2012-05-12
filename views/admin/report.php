<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/viona/css/headerAndContainer.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/roomadmin.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/ModalDialog.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/editRoomType.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/report.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/jquery-ui.css" />
        <script src="/viona/assets/javascript/plugin/jquery.min.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/plugin/jquery.quicksearch.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/jquery-ui.js" type="text/javascript"></script>
        <script type="text/javascript" src="/viona/assets/javascript/DateFormat.js"></script>
        <script type="text/javascript" src="/viona/assets/javascript/Report.js"></script>
        <script type="text/javascript" src="/viona/assets/javascript/DetailReservasi.js"></script>
        <script type="text/javascript" src="/viona/assets/javascript/DetailPerHari.js"></script>
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
                include_once "header.php";
        ?>
            <div class="container-adminpage">
            </div>
        <?php
            }
        ?>
    </body>
</html>