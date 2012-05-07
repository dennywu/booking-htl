<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="/viona/css/site.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/reservation.css" />
        <script src="/viona/assets/javascript/plugin/jquery.min.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/jquery-ui.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/Reservation.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/LoadingElement.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/CurrencyRounding.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="/viona/css/LoadingElement.css" />
        <script src="/viona/assets/javascript/jquery-ui.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/Reservation.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/ReservationSelectRoom.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/Booking.js" type="text/javascript"></script>
        <script src="/viona/assets/javascript/PrintDocument.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="/viona/css/reservation.css" />
        <link rel="stylesheet" type="text/css" href="/viona/css/jquery-ui.css" />
        <title>Reservasi::Viona Duta Samudra</title>
    </head>
    <body>
        <div class="container" id="page">
            <div class="mainContainer">
                <div class="headerContainer">
                    <?php include('views/site/navigation.php'); ?>
                </div>
            <div class="bodyContain">
                <div class="reservationContain">
                    <div style="margin-left:10px;margin-bottom:10px;font-size:12px;text-indent: 40px;">
                        Dengan pemesanan hotel Batam di Viona Tour & Travel, Bengkong, Anda dapat menjelajahi keindahan dan kegembiraan kota Batam. Viona Tour & Travel menawarkan akses tak tertandingi untuk bisnis kota terbaik, belanja dan tujuan budaya. 
                        Gunakan alat pemesanan hotel di Batam untuk memeriksa tingkat ketersediaan & online, 
                        atau menggunakan "Pemesanan dengan Telpon" layanan untuk membahas pemesanan hotel Anda secara langsung dengan perwakilan Viona Tour & Travel.
                    </div>
                    <div id="page-container">
                        <div id="hotel-title-area">Viona Tour & Travel, PT</div>
                        <div id="layout-container">
                            <div id="layout-nav">
                                <div class="msg-reservations">
                                </div>
                            </div>
                            <div id="layout-body-container">
                                <div id="progress-bar">
                                    <ul>
                                        <li class="current" id="selectdatebutton">
                                            <div>1</div>
                                            Pilih tanggal, kamar dan harga
                                        </li>
                                        <li class="pending" id="selectroombutton">
                                            <div>2</div>
                                            Masukkan informasi anda
                                        </li>
                                        <li class="pending" id="booked">
                                            <div>3</div>
                                            Hasil Reservasi
                                        </li>
                                    </ul>
                                </div>
                                <div id="layout-body">
                                    <div class="reservation-body-container clearFloat" id="selectDate" class="form">
                                        <div class="column-one">
                                            <div style="height: 10px;padding-bottom: 5px;display: none;color:Red;" id="errorMessage"></div>
                                            <h3>Masukkan Tanggal</h3>
                                            <div style="height: 10px;"></div>
                                            <div class="selectdate">
                                                <label for="checkInDate">Tanggal Masuk (dd-mm-yyyy)</label>
                                                <input type="text" id="fromDate" name="fromDate"/>
                                            </div>
                                            <div class="selectdate target">
                                                <label for="checkInDate">Tanggal Keluar (dd-mm-yyyy)</label>
                                                <input type="text" id="toDate" name="toDate"/>
                                            </div>
                                            <div class="selectguest">
                                                <label for="numberOfRoom">Jumlah Tamu per Kamar</label>
                                                <select id="guest">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                            <div class="selectroom">
                                                <label for="guest">Jumlah Anak per Kamar</label>
                                                <select id="child">
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                            <div class="selectextrabed clear" style="margin-top: 10px;">
                                                <input type="checkbox" id="extrabed" name="extrabed" value="false"/>
                                                <label for="extraBed" style="margin-left: 5px;">Perlu tambah ranjang?</label>
                                            </div>

                                        </div>
                                        <div class="buttons-right">
                                            <input type="submit" value="SELANJUTNYA" onclick="checkDate()" id="buttonSelectDate"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="clear"></div>
                
            <div id="footer">
                <?php include('views/site/footer.php'); ?>
            </div><!-- footer -->
            </div>
        </div><!-- page -->
    </body>
</html>
