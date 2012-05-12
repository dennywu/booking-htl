<div class="wrapper">
            <div id="nav-a">
            <div id="header">
                <div class="container">
                    <div class="logo">
                        <img src="/viona/images/Home/logo-organization.png" class="LogoOrganization" height="35px" style="padding-top:1px;"/>
                    </div>
                    <div class="organization">
                        Viona Duta Samudra Tour & Travel, PT
                    </div>
                    <ul class="top-nav">
                        <li class="home">
                            <img src="/viona/images/userlogo.png" style="margin-right:10px;"/>
                        </li>
                        <li class="home">
                            <a href="" id='login'>
                                <?php 
                                    echo $_SESSION["admin"]; 
                                ?>
                            </a>
                        </li>
                        <ul id='setting'>
                            <li>
                                <a href='/viona/Application/admin/logout.php' title='Keluar'>
                                <span class='iconlogout'>Keluar</span>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div id="tabs">
                <div class="containertabs">
                     <ul class="ultabs">
                            <li id="HomeLink">
                                    <a href='/viona/views/admin/index.php'><span>Daftar Reservasi</span></a>
                            </li>
                            <li id="KamarLink">
                                    <a href='/viona/views/admin/room.php'><span>Kamar</span></a>
                            </li>
                            <li id="CustomerLink">
                                    <a href='/viona/views/admin/customer.php'><span>Pelanggan</span></a>
                            </li>
                            <li id="ReportLink">
                                    <a href='/viona/views/admin/report.php'><span>Laporan</span></a>
                            </li>
                            <li id="SettingLink">
                                    <a href='/viona/views/admin/setting.php'><span>Pengaturan</span></a>
                            </li>
                    </ul>   
                </div>
            </div>