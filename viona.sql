-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 19, 2012 at 10:32 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `viona`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `kodepos` varchar(255) NOT NULL,
  `telp` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `title`, `name`, `address`, `city`, `state`, `kodepos`, `telp`, `email`) VALUES
('4fa8d2c39a5eb', 'mr', 'kl', 'k', 'lk', 'kl', 'kl', 'kl', 'kl'),
('4fa8d2d6cc191', 'mr', 'ol;l', 'lk', 'm', 'kl', 'm', 'kml', 'kml'),
('4facfcfbc4a13', 'mr', 'denny', 'test', 'ddfgdkml', 'kml', 'mkl', 'kml', 'kml'),
('4facfd3709c9f', 'mr', 'dfgiu', 'dfgd', 'in', 'hi', 'ni', 'n', 'in'),
('4facfd56c7fc7', 'mr', 'ji', 'kl', 'km', 'lkm', 'lm', 'lkm', 'lm'),
('4facfd8c42367', 'mr', 'dfgdkj', 'nml', 'nl', 'nm', 'lm', 'lm', 'l'),
('4facfedd50f88', 'mr', 'test', 'test', 'kl', 'km', 'lmk', 'lm', 'l'),
('4fad01073d9d5', 'mr', 'denny', 'jknkj', 'nkj', 'nk', 'jn', 'kjn', 'denny@inforsys.co.id'),
('4fad017c3a6b2', 'mr', 'asakl', 'sdf', 'kl', 'k', 'lk', 'lk', 'denny@inforsys.co.id'),
('4fad01cca36b7', 'mr', 'kl', 'kl', 'lk', 'lk', 'l', 'kl', 'denny@inforsys.co.id'),
('4fad0319a94be', 'mr', 'kl', 'l', 'lk', 'lk', 'lk', 'lk', 'kl'),
('4fad03d2179dd', 'mr', 'kll', 'l', 'kl', 'klk', 'lk', 'lk', 'l'),
('4fad04399acc3', 'mr', 'po', 'po', 'po', 'p', 'op', 'o', 'po'),
('4fad04ce885fa', 'mr', 'jj', 'kj', 'jk', 'kj', 'j', 'kjk', 'jk'),
('4fad05013a915', 'mr', 'jkj', 'k', 'kj', 'jk', 'jk', 'kj', 'jk'),
('4fad05a426663', 'mr', 'jkjk', 'jk', 'kj', 'kj', 'kj', 'kj', 'kj'),
('4fae782393c9e', 'mr', 'po', 'po', 'po', 'po', 'po', 'po', 'po'),
('4fae7af220809', 'mr', 'lo', 'l', 'ol', 'o', 'l', 'o', 'l'),
('4fae7b5670e0c', 'mr', 'kllk', 'kl', 'kll', 'kkl', 'kl', 'lk', 'kl'),
('4fae7d31b1c85', 'mr', 'kll', 'kkl', 'kl', 'kl', 'kl', 'kl', 'kl'),
('4fae7e01a8410', 'mr', 'lk', 'l', 'lk', 'lk', 'lk', 'lk', 'lk'),
('4fae7e78a945c', 'mr', 'lk', 'lk', 'lk', 'lk', 'lk', 'lk', 'lk'),
('4fae7ea9e37fa', 'mr', 'l', 'l', 'l', 'l', 'l', 'l', 'l'),
('4fae7efedc846', 'mr', 'lk', 'lk', 'lk', 'lk', 'lk', 'kl', 'lk'),
('4fae7f37e487d', 'mr', 'lk', 'lk', 'lk', 'kl', 'kl', 'kl', 'kl'),
('4fae7fa792d7d', 'mr', 'm', 'mn', 'nm', 'nm', 'nm', 'nm', 'nm'),
('4fae80c70c8ed', 'mr', 'mn', 'mn', 'mn', 'mn', 'mn', 'nm', 'nm'),
('4fae8139c93cc', 'mr', 'lk', 'l', 'k', 'l', 'k', 'l', 'k'),
('4fae818b00268', 'mr', 'lk', 'lk', 'lk', 'lk', 'lk', 'lk', 'kl'),
('4fae81bef40db', 'mr', 'po', 'po', 'po', 'po', 'po', 'po', 'po'),
('4fae82159fdf9', 'mr', 'lk', 'lk', 'lk', 'kl', 'kl', 'kl', 'kl'),
('4fae82699f247', 'mr', 'kllklk', 'kl', 'klkl', 'klk', 'lkl', 'kl', 'kl');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` varchar(255) NOT NULL,
  `noroom` varchar(255) NOT NULL,
  `checkin` datetime NOT NULL,
  `checkout` datetime NOT NULL,
  `customerid` varchar(255) NOT NULL,
  `noreservation` varchar(255) NOT NULL,
  `reservationdate` datetime NOT NULL,
  `expireddate` datetime NOT NULL,
  `totalharga` decimal(10,0) NOT NULL,
  `extrabed` varchar(255) NOT NULL,
  `totalperson` int(11) NOT NULL,
  `totalchild` decimal(10,0) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=47 ;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `typeid`, `noroom`, `checkin`, `checkout`, `customerid`, `noreservation`, `reservationdate`, `expireddate`, `totalharga`, `extrabed`, `totalperson`, `totalchild`, `status`) VALUES
(1, '001', 'TWN01', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 150000, 'true', 1, 0, 'Booking'),
(2, '001', 'TWN02', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 150000, 'true', 1, 0, 'Booking'),
(3, '002', 'STD01', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 200000, 'true', 1, 0, 'Booking'),
(4, '003', 'SPR01', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 250000, 'true', 1, 0, 'Booking'),
(5, '003', 'SPR02', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 250000, 'true', 1, 0, 'Booking'),
(6, '004', 'DLX01', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 300000, 'true', 1, 0, 'Booking'),
(7, '004', 'DLX02', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fa8d2c39a5eb', '4fa8d2c3a5999', '2012-05-08 15:01:07', '2012-05-08 21:01:07', 300000, 'true', 1, 0, 'Booking'),
(8, '001', 'TWN01', '2012-05-09 00:00:00', '2012-05-10 00:00:00', '4fa8d2d6cc191', '4fa8d2d6dd02b', '2012-05-08 15:01:26', '2012-05-08 21:01:26', 150000, 'true', 1, 0, 'Booking'),
(9, '001', 'TWN02', '2012-05-09 00:00:00', '2012-05-10 00:00:00', '4fa8d2d6cc191', '4fa8d2d6dd02b', '2012-05-08 15:01:26', '2012-05-08 21:01:26', 150000, 'true', 1, 0, 'Booking'),
(10, '002', 'STD01', '2012-05-09 00:00:00', '2012-05-10 00:00:00', '4fa8d2d6cc191', '4fa8d2d6dd02b', '2012-05-08 15:01:26', '2012-05-08 21:01:26', 200000, 'true', 1, 0, 'Booking'),
(11, '002', 'STD02', '2012-05-09 00:00:00', '2012-05-10 00:00:00', '4fa8d2d6cc191', '4fa8d2d6dd02b', '2012-05-08 15:01:26', '2012-05-08 21:01:26', 200000, 'true', 1, 0, 'Booking'),
(12, '003', 'SPR01', '2012-05-09 00:00:00', '2012-05-10 00:00:00', '4fa8d2d6cc191', '4fa8d2d6dd02b', '2012-05-08 15:01:27', '2012-05-08 21:01:27', 250000, 'true', 1, 0, 'Booking'),
(13, '003', 'SPR02', '2012-05-09 00:00:00', '2012-05-10 00:00:00', '4fa8d2d6cc191', '4fa8d2d6dd02b', '2012-05-08 15:01:27', '2012-05-08 21:01:27', 250000, 'true', 1, 0, 'Booking'),
(14, '001', 'TWN03', '2012-05-04 00:00:00', '2012-05-19 00:00:00', '4facfcfbc4a13', '4facfcfbe5453', '2012-05-11 18:50:19', '2012-05-12 00:50:19', 2250000, 'true', 1, 0, 'Booking'),
(15, '001', 'TWN04', '2012-05-04 00:00:00', '2012-05-19 00:00:00', '4facfcfbc4a13', '4facfcfbe5453', '2012-05-11 18:50:19', '2012-05-12 00:50:19', 2250000, 'true', 1, 0, 'Booking'),
(16, '001', 'TWN05', '2012-05-04 00:00:00', '2012-05-05 00:00:00', '4facfd3709c9f', '4facfd37168d6', '2012-05-11 18:51:19', '2012-05-12 00:51:19', 150000, 'true', 1, 0, 'Booking'),
(17, '002', 'STD03', '2012-05-03 00:00:00', '2012-05-12 00:00:00', '4facfd56c7fc7', '4facfd56d6b16', '2012-05-11 18:51:50', '2012-05-12 00:51:50', 1800000, 'true', 1, 0, 'Booking'),
(18, '001', 'TWN03', '2012-05-10 00:00:00', '2012-05-12 00:00:00', '4facfd8c42367', '4facfd8c4ef30', '2012-05-11 18:52:44', '2012-05-12 00:52:44', 300000, 'true', 1, 0, 'Booking'),
(19, '001', 'TWN01', '2012-05-18 00:00:00', '2012-05-19 00:00:00', '4facfedd50f88', '4facfedd5fa49', '2012-05-11 18:58:21', '2012-05-12 00:58:21', 150000, 'true', 1, 0, 'Booking'),
(20, '002', 'STD02', '2012-05-03 00:00:00', '2012-05-05 00:00:00', '4fad01073d9d5', '4fad01074681a', '2012-05-11 19:07:35', '2012-05-12 01:07:35', 400000, 'true', 1, 0, 'Booking'),
(21, '001', 'TWN04', '2012-05-10 00:00:00', '2012-05-12 00:00:00', '4fad017c3a6b2', '4fad017c49af7', '2012-05-11 19:09:32', '2012-05-12 01:09:32', 300000, 'true', 1, 0, 'Booking'),
(22, '001', 'TWN03', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fad01cca36b7', '4fad01ccb4217', '2012-05-11 19:10:52', '2012-05-12 01:10:52', 150000, 'true', 1, 0, 'Booking'),
(23, '001', 'TWN04', '2012-05-05 00:00:00', '2012-05-06 00:00:00', '4fad01cca36b7', '4fad01ccb4217', '2012-05-11 19:10:52', '2012-05-12 01:10:52', 150000, 'true', 1, 0, 'Booking'),
(24, '002', 'STD03', '2012-05-04 00:00:00', '2012-05-05 00:00:00', '4fad0319a94be', '4fad0319b90f7', '2012-05-11 19:16:25', '2012-05-12 01:16:25', 200000, 'true', 1, 0, 'Booking'),
(25, '002', 'STD04', '2012-05-04 00:00:00', '2012-05-06 00:00:00', '4fad03d2179dd', '4fad03d22833b', '2012-05-11 19:19:30', '2012-05-12 01:19:30', 400000, 'true', 1, 0, 'Booking'),
(26, '002', 'STD05', '2012-05-04 00:00:00', '2012-05-06 00:00:00', '4fad04399acc3', '4fad04399f73a', '2012-05-11 19:21:13', '2012-05-12 01:21:13', 400000, 'true', 1, 0, 'Booking'),
(27, '003', 'SPR03', '2012-05-04 00:00:00', '2012-05-05 00:00:00', '4fad04ce885fa', '4fad04ce994b8', '2012-05-11 19:23:42', '2012-05-12 01:23:42', 250000, 'true', 1, 0, 'Booking'),
(28, '003', 'SPR01', '2012-05-11 00:00:00', '2012-05-14 00:00:00', '4fad05013a915', '4fad05014a5f3', '2012-05-11 19:24:33', '2012-05-12 01:24:33', 750000, 'true', 1, 0, 'Booking'),
(29, '004', 'DLX03', '2012-05-03 00:00:00', '2012-05-12 00:00:00', '4fad05a426663', '4fad05a435f0a', '2012-05-11 19:27:16', '2012-05-12 01:27:16', 2700000, 'true', 1, 0, 'Booking'),
(30, '001', 'TWN02', '2012-05-18 00:00:00', '2012-05-19 00:00:00', '4fae782393c9e', '4fae7823a5459', '2012-05-12 21:48:03', '2012-05-13 03:48:03', 150000, 'true', 1, 0, 'Booking'),
(31, '003', 'SPR04', '2012-05-04 00:00:00', '2012-05-06 00:00:00', '4fae7af220809', '4fae7af22e8a7', '2012-05-12 22:00:02', '2012-05-13 04:00:02', 500000, 'true', 1, 0, 'Booking'),
(32, '002', 'STD03', '2012-05-10 00:00:00', '2012-05-11 00:00:00', '4fae7b5670e0c', '4fae7b567708b', '2012-05-12 22:01:42', '2012-05-13 04:01:42', 200000, 'true', 1, 0, 'Booking'),
(33, '002', 'STD04', '2012-05-10 00:00:00', '2012-05-11 00:00:00', '4fae7b5670e0c', '4fae7b567708b', '2012-05-12 22:01:42', '2012-05-13 04:01:42', 200000, 'true', 1, 0, 'Booking'),
(34, '003', 'SPR05', '2012-05-04 00:00:00', '2012-05-05 00:00:00', '4fae7d31b1c85', '4fae7d31c3225', '2012-05-12 22:09:37', '2012-05-13 04:09:37', 150000, 'false', 1, 0, 'Booking'),
(35, '001', 'TWN03', '2012-05-17 00:00:00', '2012-05-18 00:00:00', '4fae7e01a8410', '4fae7e01b9b09', '2012-05-12 22:13:05', '2012-05-13 04:13:05', 150000, 'true', 1, 0, 'Booking'),
(36, '001', 'TWN01', '2012-05-25 00:00:00', '2012-05-26 00:00:00', '4fae7e78a945c', '4fae7e78b9030', '2012-05-12 22:15:04', '2012-05-13 04:15:04', 150000, 'true', 1, 0, 'Booking'),
(37, '001', 'TWN02', '2012-05-25 00:00:00', '2012-05-26 00:00:00', '4fae7ea9e37fa', '4fae7ea9f3fdf', '2012-05-12 22:15:53', '2012-05-13 04:15:53', 150000, 'true', 1, 0, 'Booking'),
(38, '001', 'TWN03', '2012-05-25 00:00:00', '2012-05-26 00:00:00', '4fae7efedc846', '4fae7efeef511', '2012-05-12 22:17:18', '2012-05-13 04:17:18', 50000, 'false', 1, 0, 'Booking'),
(39, '001', 'TWN04', '2012-05-17 00:00:00', '2012-05-18 00:00:00', '4fae7f37e487d', '4fae7f380070b', '2012-05-12 22:18:16', '2012-05-13 04:18:16', 50000, 'false', 1, 0, 'Booking'),
(40, '001', 'TWN04', '2012-05-25 00:00:00', '2012-05-26 00:00:00', '4fae7fa792d7d', '4fae7fa7a2568', '2012-05-12 22:20:07', '2012-05-13 04:20:07', 50000, 'false', 1, 0, 'Booking'),
(41, '002', 'STD01', '2012-05-18 00:00:00', '2012-05-19 00:00:00', '4fae80c70c8ed', '4fae80c71a519', '2012-05-12 22:24:55', '2012-05-13 04:24:55', 100000, 'false', 1, 0, 'Booking'),
(42, '001', 'TWN05', '2012-05-25 00:00:00', '2012-05-26 00:00:00', '4fae8139c93cc', '4fae8139d7cc2', '2012-05-12 22:26:49', '2012-05-13 04:26:49', 50000, 'false', 1, 0, 'Booking'),
(43, '004', 'DLX03', '2012-05-04 00:00:00', '2012-05-05 00:00:00', '4fae818b00268', '4fae818b10762', '2012-05-12 22:28:11', '2012-05-13 04:28:11', 300000, 'true', 1, 0, 'Booking'),
(44, '002', 'STD02', '2012-05-18 00:00:00', '2012-05-19 00:00:00', '4fae81bef40db', '4fae81bf0dc14', '2012-05-12 22:29:03', '2012-05-13 04:29:03', 100000, 'false', 1, 0, 'Booking'),
(45, '001', '', '2012-05-26 00:00:00', '2012-05-27 00:00:00', '4fae82159fdf9', '4fae8215b014b', '2012-05-12 22:30:29', '2012-05-13 04:30:29', 150000, 'true', 1, 0, 'Booking'),
(46, '002', 'STD03', '2012-05-18 00:00:00', '2012-05-19 00:00:00', '4fae82699f247', '4fae8269af1d9', '2012-05-12 22:31:53', '2012-05-13 04:31:53', 200000, 'true', 1, 0, 'Booking');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `typeid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `name`, `typeid`) VALUES
(2, 'DLX01', '004'),
(3, 'DLX02', '004'),
(4, 'DLX03', '004'),
(5, 'DLX04', '004'),
(6, 'TWN01', '001'),
(7, 'TWN02', '001'),
(8, 'TWN03', '001'),
(9, 'TWN04', '001'),
(10, 'TWN05', '001'),
(11, 'STD01', '002'),
(12, 'STD02', '002'),
(13, 'STD03', '002'),
(14, 'STD04', '002'),
(15, 'STD05', '002'),
(16, 'SPR01', '003'),
(17, 'SPR02', '003'),
(18, 'SPR03', '003'),
(19, 'SPR04', '003'),
(20, 'SPR05', '003');

-- --------------------------------------------------------

--
-- Table structure for table `roomtype`
--

CREATE TABLE IF NOT EXISTS `roomtype` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `typeid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `roomtype`
--

INSERT INTO `roomtype` (`id`, `typeid`, `name`, `total`, `price`) VALUES
(4, '001', 'Twin Room', 6, 50000),
(5, '002', 'Standard Room', 5, 100000),
(6, '003', 'Superior Room', 5, 150000),
(7, '004', 'Deluxe Room', 5, 200000),
(14, '005', 'gak tau', 0, 100000);

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE IF NOT EXISTS `setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `name`, `price`) VALUES
(1, 'ExtraBed', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'viona', 'viona123');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
