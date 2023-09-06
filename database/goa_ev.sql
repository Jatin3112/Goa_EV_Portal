-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 19, 2023 at 09:07 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `website_testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `goa_ev`
--

CREATE TABLE `goa_ev` (
  `id` int(100) NOT NULL,
  `Application_No` varchar(50) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `number` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `houseNumber` varchar(15) NOT NULL,
  `district` text NOT NULL,
  `city` text NOT NULL,
  `pincode` int(10) NOT NULL,
  `registrationDate` date NOT NULL,
  `registrationNumber` varchar(15) NOT NULL,
  `rtoDetails` varchar(50) NOT NULL,
  `vehicleType` int(1) NOT NULL,
  `wheelerType` text NOT NULL,
  `batteryCapacity` int(10) NOT NULL,
  `aadhaarCard` varchar(100) NOT NULL,
  `residenceProof` varchar(100) NOT NULL,
  `drivingLicence` varchar(100) NOT NULL,
  `vehicleRC` varchar(100) NOT NULL,
  `vehicleInsurance` varchar(100) NOT NULL,
  `taxInvoice` varchar(100) NOT NULL,
  `document1` varchar(200) NOT NULL,
  `document2` varchar(200) NOT NULL,
  `document3` varchar(200) NOT NULL,
  `accountNumber` int(15) NOT NULL,
  `accountHolderName` text NOT NULL,
  `ifscCode` varchar(25) NOT NULL,
  `bankName` text NOT NULL,
  `processingFees` int(10) NOT NULL,
  `branchName` text NOT NULL,
  `totalProcessingFees` int(10) NOT NULL,
  `gst` varchar(10) NOT NULL,
  `registrationNumberSearch` int(15) NOT NULL,
  `aadhaarCardNumber` int(15) NOT NULL,
  `residenceProofNumber` int(15) NOT NULL,
  `drivingLicenceNumber` varchar(20) NOT NULL,
  `taxInvoiceNumber` varchar(20) NOT NULL,
  `vehicleRCNumber` varchar(20) NOT NULL,
  `vehicleInsuranceNumber` varchar(25) NOT NULL,
  `acknowledgement` text NOT NULL,
  `modifiedDate` date NOT NULL DEFAULT current_timestamp(),
  `submittedDate` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` enum('1','2','3','4','5') NOT NULL DEFAULT '1',
  `query` varchar(200) NOT NULL,
  `folderName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--
-- Indexes for table `goa_ev`
--
ALTER TABLE `goa_ev`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `goa_ev`
--
ALTER TABLE `goa_ev`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
