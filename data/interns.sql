-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2020 at 09:04 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interns`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(20) NOT NULL,
  `ten` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ho` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lop` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `msv` int(100) NOT NULL,
  `sdt` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `ten`, `ho`, `lop`, `msv`, `sdt`, `email`) VALUES
(1, 'TUẤN', 'ĐỖ ĐỨC ANH', '58th2', 1651061081, '0964276191', 'tuandda62@wru.vn'),
(2, 'MINH', 'NGUYỄN CÔNG MINH', '58th2', 1651061082, '0964276192', 'minhnc62@wru.vn'),
(3, 'THI', 'NGUYỄN VĂN', '58th2', 1651061083, '0964276193', 'thinv62@wru.vn'),
(4, 'TẤN', 'NGUYỄN DANH', '58th2', 1651061087, '0964276198', 'tannd62@wru.vn'),
(5, 'TOÀN', 'TÔ TIẾN', '58th2', 1651061084, '0964276194', 'toantt62@wru.vn'),
(6, 'HOÀNG', 'NGUYỄN TIẾN', '58th1', 1651061085, '0964276195', 'hoangnt62@wru.vn'),
(7, 'QUÝ', 'NGUYỄN ĐÌNH', '58th2', 1651061086, '0964276196', 'quynd@wru.vn'),
(8, 'THUYÊN', 'VŨ VĂN', '58th2', 1651062151, '0964276197', 'thuyenvv62@wru.vn'),
(9, 'QUỲNH', 'NGUYỄN DUY', '58th1', 1651062222, '0964276676', 'quynd@wru.vn'),
(10, 'THÁI', 'VĂN BÁ', '58th1', 1651062267, '0964276193', 'thaivb62@wru.vn'),
(11, 'LỘC', 'NGUYỄN THÀNH', '58th1', 2147483647, '0964276197', 'locnt62@wru.vn'),
(12, 'VÂN ANH', 'NGUYỄN THỊ', '58th2', 1651062158, '0964276195', 'vant62@wru.vn');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
