-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2023 at 02:30 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giaydongthinh_2341320`
--

-- --------------------------------------------------------

--
-- Table structure for table `table_address`
--

CREATE TABLE `table_address` (
  `id` int(11) NOT NULL,
  `ngaytao` varchar(255) DEFAULT NULL,
  `macdinh` int(11) DEFAULT 0,
  `userID` varchar(255) DEFAULT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `dienthoai` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cityID` int(11) DEFAULT NULL,
  `distID` int(11) DEFAULT NULL,
  `wardID` int(11) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `loaidc` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `table_address`
--

INSERT INTO `table_address` (`id`, `ngaytao`, `macdinh`, `userID`, `ten`, `dienthoai`, `email`, `cityID`, `distID`, `wardID`, `diachi`, `loaidc`) VALUES
(1, '1603356919', 0, '21', 'Phạm Quang Tuyên', '0960356968', 'phamtuyen.nina@gmail.com', 12, 0, 0, 'tyutyutyut', 0),
(2, '1603357739', 0, '25', 'Nguyễn Thị Bích Trâm', '0901458067', 'lethikimtuyen1994@gmail.com', 50, 0, 0, '226/65/14 nguyễn văn lương', 0),
(3, '1603421275', 0, '25', 'Nguyễn Thị Bích Trâm', '0901458067', 'lethikimtuyen1994@gmail.com', 1, 0, 0, 'dcv', 1),
(4, '1604900150', 0, '30', 'Kim Tuyến Lê', '0935557350', 'lekimtuyen.nina@gmail.com', 50, 0, 0, '226/65/14 Nguyễn Văn Lượng', 0),
(5, '1604992731', 0, '34', 'Mộng Huyền', '0935557350', 'monghuyen.nina@gmail.com', 50, 0, 0, 'test', 0),
(6, '1605674513', 1, '39', 'Phạm Quang Tuyên', '0932401108', 'phamtuyen.nina@gmail.com', 3, 0, 0, 'gfrgdfgdfgdfgd', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `table_address`
--
ALTER TABLE `table_address`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `table_address`
--
ALTER TABLE `table_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
