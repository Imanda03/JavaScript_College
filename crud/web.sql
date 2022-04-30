-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2021 at 01:42 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(6) UNSIGNED NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `contact_name` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `postal_code` varchar(30) NOT NULL,
  `country` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `contact_name`, `address`, `city`, `postal_code`, `country`) VALUES
(2, 'vivek', '9823000123', 'banasthali', 'Lalitpur', '133660', 'Nepal'),
(4, 'kumar', '97265432', 'jughu', 'Delhi', '144330', 'India'),
(5, 'amit', '97365432', 'jughu', 'Delhi', '144330', 'India'),
(6, 'sugam', '97165432', 'jughu', 'Delhi', '144330', 'India'),
(7, 'kumar', '98492341', 'minTown', 'New York', '13430', 'USA'),
(8, 'amit', '98292341', 'minTown', 'New York', '13430', 'USA'),
(9, 'asis', '98192341', 'minTown', 'New York', '13430', 'USA'),
(10, 'sugam', '98792341', 'minTown', 'New York', '13430', 'USA'),
(11, 'vivek heka edited', '9823000123', 'banasthali', 'Lalitpur', '133660', 'Nepal and America');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
