-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 14, 2024 at 10:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hellowitsme`
--

-- --------------------------------------------------------

--
-- Table structure for table `piu`
--

CREATE TABLE `piu` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `piu`
--

INSERT INTO `piu` (`id`, `email`, `password`) VALUES
(1, NULL, '0.0'),
(2, NULL, '0.0');

-- --------------------------------------------------------

--
-- Table structure for table `piupiu`
--

CREATE TABLE `piupiu` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `piupiupiu`
--

CREATE TABLE `piupiupiu` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tokenvend`
--

CREATE TABLE `tokenvend` (
  `id` int(11) NOT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `is_logged_out` bit(1) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tokenvend`
--

INSERT INTO `tokenvend` (`id`, `access_token`, `is_logged_out`, `refresh_token`, `user_id`) VALUES
(1, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4MjczNDQ0LCJleHAiOjE3MTgzNTk4NDR9._mdVSvvyBqehLfcikpf5S3lPbZV6TQndY5u6ZMjXo_f7J_vUebzUxbIyLEnwlmnI', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4MjczNDQ0LCJleHAiOjE3MTg4NzgyNDR9._O5zuL7CyvaPJ_mBjhCYEkXsD1jQTf7ClIQ8B2dN-_huHjlQTqlcpPTGVK6GME-A', 1),
(2, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4MjczOTQ5LCJleHAiOjE3MTgzNjAzNDl9.pAX7k2o7oDkrzg0WKQJGEUHkgjfL7W1jTbpa-o-DLMGlRbOAYc6H3laP1OySxH4W', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4MjczOTQ5LCJleHAiOjE3MTg4Nzg3NDl9.QsnOdr8WWW1POMeWGg6OH3zMNgLA91QEkUBi-Zw4wNI4xnAISOSckrf3iSY3JrnU', 1),
(3, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc0MDM3LCJleHAiOjE3MTgzNjA0Mzd9.qAuC4JkXd9JiZXv04IC7Jen2WqUbZmon-k1vnUUj1Kw0zbZicRsiu4x1AYk_7I4z', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc0MDM3LCJleHAiOjE3MTg4Nzg4Mzd9.zZkRWvXr9KwyJsjxw5Kxao3yWQxLj3RsBRgcLVr-S5jkQi4JHkmd5qpzZnHO5-qb', 1),
(4, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0NUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3NDQzOSwiZXhwIjoxNzE4MzYwODM5fQ.2OZfc_Ka1KNa4lHw_1vS26G-1oO68MiL1fJl28VfCC25PzdIVq5ksR69KFqjeJij', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0NUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3NDQzOSwiZXhwIjoxNzE4ODc5MjM5fQ.gzW6HBpO_6GzEao85Vz0iZt6Nwxb7H48ZKo_ojjrM74_y6pnlJhtDLw3oBBBbqV_', 2),
(5, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0NUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3NDQ4NCwiZXhwIjoxNzE4MzYwODg0fQ.oXDd66eyFTnY6f0G2TtZsTzzMqtCsfJyoD72frnB8hkm8vGm72oMLoxPzFblOrJ3', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0NUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3NDQ4NCwiZXhwIjoxNzE4ODc5Mjg0fQ.gD62E3IyEZaFWUp2fEt__loFul3X8Y4gY-iBBG0F2mHSN_TXfoG-hb1KDbNvDazH', 2),
(6, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1Mjk5LCJleHAiOjE3MTgyNzUyOTl9.8RxbCqNeAlYOwuT9660eAyDPppv_VB2c7w3bHoCL30vxSfVJUulbwbyMJ6PTR4uS', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1Mjk5LCJleHAiOjE3MTgyNzUyOTl9.8RxbCqNeAlYOwuT9660eAyDPppv_VB2c7w3bHoCL30vxSfVJUulbwbyMJ6PTR4uS', 3),
(7, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY0LCJleHAiOjE3MTgyNzUzNjR9.GSUfkl4AGrADQ0GKZgLcPUTJiR28CFKO2NEkwKw6DhHJabbQJdYxv9l5GzulC5mt', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY0LCJleHAiOjE3MTgyNzUzNjR9.GSUfkl4AGrADQ0GKZgLcPUTJiR28CFKO2NEkwKw6DhHJabbQJdYxv9l5GzulC5mt', 3),
(8, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY2LCJleHAiOjE3MTgyNzUzNjZ9.Bi4LAfpqzdXL5RvhFI2Uyp1Hf6w279iXO3j4x3RGiw-Jbt9ikF7GdGxu6uzppTAm', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY2LCJleHAiOjE3MTgyNzUzNjZ9.Bi4LAfpqzdXL5RvhFI2Uyp1Hf6w279iXO3j4x3RGiw-Jbt9ikF7GdGxu6uzppTAm', 3),
(9, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY3LCJleHAiOjE3MTgyNzUzNjd9.0tsglVSb_z3SdBt0IrrAcWW6TC32iDI_o9PcF4ZPuwqHzDmrjSez2-B6cJ2Av6ql', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY3LCJleHAiOjE3MTgyNzUzNjd9.0tsglVSb_z3SdBt0IrrAcWW6TC32iDI_o9PcF4ZPuwqHzDmrjSez2-B6cJ2Av6ql', 3),
(10, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY4LCJleHAiOjE3MTgyNzUzNjh9.GhryAv0hnly6xpLqwMpmcahd5HMRroe7zrVYkL-vw1uYgkc5xbJJMC7P_t6ZkkSN', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MzY4LCJleHAiOjE3MTgyNzUzNjh9.GhryAv0hnly6xpLqwMpmcahd5HMRroe7zrVYkL-vw1uYgkc5xbJJMC7P_t6ZkkSN', 3),
(11, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1Mzc3LCJleHAiOjE3MTgyNzUzNzd9.0VLpA3HSLoz1p7qJULT0_c_Yjg7p_yqPqAPlVfOqjiLEWoTzP6YzP9z9zn_7OR1c', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1Mzc3LCJleHAiOjE3MTgyNzUzNzd9.0VLpA3HSLoz1p7qJULT0_c_Yjg7p_yqPqAPlVfOqjiLEWoTzP6YzP9z9zn_7OR1c', 3),
(12, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4Mzg2LCJleHAiOjE3MTgyNzgzODZ9.evgE92wgvV_Mzkdmw3dTV3zwu_jUIA24Rs1fU1xDipVH-tbvq8Q0_ILc3rTWy6I6', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4Mzg2LCJleHAiOjE3MTgyNzgzODZ9.evgE92wgvV_Mzkdmw3dTV3zwu_jUIA24Rs1fU1xDipVH-tbvq8Q0_ILc3rTWy6I6', 3),
(13, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4Mzg5LCJleHAiOjE3MTgyNzgzODl9.EJ3R8grUvEfiqyBmdmHnyl6N9ZKx-CCbg1tHfbwU2eYrVS5W_AP6lQV0HHpV2jc8', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4Mzg5LCJleHAiOjE3MTgyNzgzODl9.EJ3R8grUvEfiqyBmdmHnyl6N9ZKx-CCbg1tHfbwU2eYrVS5W_AP6lQV0HHpV2jc8', 3),
(14, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4MzkxLCJleHAiOjE3MTgyNzgzOTF9.6wMAvIY0uBfzDpH3H-X_H3VPTYm1k8zXsv6-lp6VJlcUvUuaUpydy2M1wY4paPeM', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4MzkxLCJleHAiOjE3MTgyNzgzOTF9.6wMAvIY0uBfzDpH3H-X_H3VPTYm1k8zXsv6-lp6VJlcUvUuaUpydy2M1wY4paPeM', 3),
(15, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4MzkyLCJleHAiOjE3MTgyNzgzOTJ9.dCuouO0k7Xw1QE4zxNK7shL2chLkPTndN5E3AU6s83KNGJiFVwzhukGV-DsVnLGy', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0OTA1QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc4MzkyLCJleHAiOjE3MTgyNzgzOTJ9.dCuouO0k7Xw1QE4zxNK7shL2chLkPTndN5E3AU6s83KNGJiFVwzhukGV-DsVnLGy', 3),
(16, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODQ2MywiZXhwIjoxNzE4Mjc4NDYzfQ.-GgdAOpOCYnDGKlo_ZxvKpAeI7pmBRfiF43zTB3HjLWp_eMWWHFBo5-4WSLteIp7', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODQ2MywiZXhwIjoxNzE4Mjc4NDYzfQ.-GgdAOpOCYnDGKlo_ZxvKpAeI7pmBRfiF43zTB3HjLWp_eMWWHFBo5-4WSLteIp7', 4),
(17, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk0MiwiZXhwIjoxNzE4Mjc4OTQyfQ.Oppn_Hkwayl82tTVt08-LdDMMjs5dNfy8VfLsmrpnwuIw67xYBUWR1lqmt1hqpaQ', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk0MiwiZXhwIjoxNzE4Mjc4OTQyfQ.Oppn_Hkwayl82tTVt08-LdDMMjs5dNfy8VfLsmrpnwuIw67xYBUWR1lqmt1hqpaQ', 4),
(18, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1MywiZXhwIjoxNzE4Mjc4OTUzfQ.0UuDBe4hVYWbxhjkN-RsTnlkrxryO9uVdH0ZlvUsEbt5-es2lJR9dJMS31_pN4_I', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1MywiZXhwIjoxNzE4Mjc4OTUzfQ.0UuDBe4hVYWbxhjkN-RsTnlkrxryO9uVdH0ZlvUsEbt5-es2lJR9dJMS31_pN4_I', 4),
(19, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1NCwiZXhwIjoxNzE4Mjc4OTU0fQ.lZDtlviDgM4drgyXuI2FnhsnyYx1aeYZ9UHQAXU6qDOOncsZyirEUqzQo9pag3am', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1NCwiZXhwIjoxNzE4Mjc4OTU0fQ.lZDtlviDgM4drgyXuI2FnhsnyYx1aeYZ9UHQAXU6qDOOncsZyirEUqzQo9pag3am', 4),
(20, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1NCwiZXhwIjoxNzE4Mjc4OTU0fQ.lZDtlviDgM4drgyXuI2FnhsnyYx1aeYZ9UHQAXU6qDOOncsZyirEUqzQo9pag3am', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1NCwiZXhwIjoxNzE4Mjc4OTU0fQ.lZDtlviDgM4drgyXuI2FnhsnyYx1aeYZ9UHQAXU6qDOOncsZyirEUqzQo9pag3am', 4),
(21, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1OSwiZXhwIjoxNzE4Mjc4OTU5fQ.IMF3_85TYrJ43yS0gUq6-fXbo51d_USRMUlMBKFON_-YSweqvcfLiBKkgrPJiLdD', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk1OSwiZXhwIjoxNzE4Mjc4OTU5fQ.IMF3_85TYrJ43yS0gUq6-fXbo51d_USRMUlMBKFON_-YSweqvcfLiBKkgrPJiLdD', 4),
(22, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MCwiZXhwIjoxNzE4Mjc4OTYwfQ.G5EpUajnaoex78yHYmFrxSmx-C1LxHi-DBwSrkAhhVxvvTloI7h_OIb9wEKQh54-', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MCwiZXhwIjoxNzE4Mjc4OTYwfQ.G5EpUajnaoex78yHYmFrxSmx-C1LxHi-DBwSrkAhhVxvvTloI7h_OIb9wEKQh54-', 4),
(23, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MCwiZXhwIjoxNzE4Mjc4OTYwfQ.G5EpUajnaoex78yHYmFrxSmx-C1LxHi-DBwSrkAhhVxvvTloI7h_OIb9wEKQh54-', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MCwiZXhwIjoxNzE4Mjc4OTYwfQ.G5EpUajnaoex78yHYmFrxSmx-C1LxHi-DBwSrkAhhVxvvTloI7h_OIb9wEKQh54-', 4),
(24, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MSwiZXhwIjoxNzE4Mjc4OTYxfQ.vUV8D0agt0540Egqs28Zly7aIyaKPUfla2g5Jw8S_4Vw6kj0M-WzIOXxaoAPuASU', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MSwiZXhwIjoxNzE4Mjc4OTYxfQ.vUV8D0agt0540Egqs28Zly7aIyaKPUfla2g5Jw8S_4Vw6kj0M-WzIOXxaoAPuASU', 4),
(25, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MSwiZXhwIjoxNzE4Mjc4OTYxfQ.vUV8D0agt0540Egqs28Zly7aIyaKPUfla2g5Jw8S_4Vw6kj0M-WzIOXxaoAPuASU', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MSwiZXhwIjoxNzE4Mjc4OTYxfQ.vUV8D0agt0540Egqs28Zly7aIyaKPUfla2g5Jw8S_4Vw6kj0M-WzIOXxaoAPuASU', 4),
(26, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MiwiZXhwIjoxNzE4Mjc4OTYyfQ.PvXAvALE62umGzMV59cZpGhWKSlz6UfYluw8mqFoaXRFaPWEYeGt9DW_mNgvGRfJ', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MiwiZXhwIjoxNzE4Mjc4OTYyfQ.PvXAvALE62umGzMV59cZpGhWKSlz6UfYluw8mqFoaXRFaPWEYeGt9DW_mNgvGRfJ', 4),
(27, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MiwiZXhwIjoxNzE4Mjc4OTYyfQ.PvXAvALE62umGzMV59cZpGhWKSlz6UfYluw8mqFoaXRFaPWEYeGt9DW_mNgvGRfJ', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MiwiZXhwIjoxNzE4Mjc4OTYyfQ.PvXAvALE62umGzMV59cZpGhWKSlz6UfYluw8mqFoaXRFaPWEYeGt9DW_mNgvGRfJ', 4),
(28, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MywiZXhwIjoxNzE4Mjc4OTYzfQ.PcPgA1H5K2rrJO7tgB-YdKgJgarEEPgAxadqFn5Ew9loVEmynLqDgTvWUQ0q5Ges', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2MywiZXhwIjoxNzE4Mjc4OTYzfQ.PcPgA1H5K2rrJO7tgB-YdKgJgarEEPgAxadqFn5Ew9loVEmynLqDgTvWUQ0q5Ges', 4),
(29, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NCwiZXhwIjoxNzE4Mjc4OTY0fQ.F-h9PSZdT7GnkRoKOn3oWNbaaGjlX-gMPIq-9Ry-F9dOTQsouqwzUo31ixusiz74', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NCwiZXhwIjoxNzE4Mjc4OTY0fQ.F-h9PSZdT7GnkRoKOn3oWNbaaGjlX-gMPIq-9Ry-F9dOTQsouqwzUo31ixusiz74', 4),
(30, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NCwiZXhwIjoxNzE4Mjc4OTY0fQ.F-h9PSZdT7GnkRoKOn3oWNbaaGjlX-gMPIq-9Ry-F9dOTQsouqwzUo31ixusiz74', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NCwiZXhwIjoxNzE4Mjc4OTY0fQ.F-h9PSZdT7GnkRoKOn3oWNbaaGjlX-gMPIq-9Ry-F9dOTQsouqwzUo31ixusiz74', 4),
(31, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NSwiZXhwIjoxNzE4Mjc4OTY1fQ.TNFiVxU72nPdIYYvPqOw4_YA7eMVJu0MRA42VY_3D3By9PHY8iz5F1_XJs-rQJiF', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NSwiZXhwIjoxNzE4Mjc4OTY1fQ.TNFiVxU72nPdIYYvPqOw4_YA7eMVJu0MRA42VY_3D3By9PHY8iz5F1_XJs-rQJiF', 4),
(32, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NSwiZXhwIjoxNzE4Mjc4OTY1fQ.TNFiVxU72nPdIYYvPqOw4_YA7eMVJu0MRA42VY_3D3By9PHY8iz5F1_XJs-rQJiF', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NSwiZXhwIjoxNzE4Mjc4OTY1fQ.TNFiVxU72nPdIYYvPqOw4_YA7eMVJu0MRA42VY_3D3By9PHY8iz5F1_XJs-rQJiF', 4),
(33, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NiwiZXhwIjoxNzE4Mjc4OTY2fQ._TJPx5BqcT0Qg-vdULjcU54VDg7nPbnLj1I0iAVhdKs7uD3vdOCpmQcxka1aVVy3', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NiwiZXhwIjoxNzE4Mjc4OTY2fQ._TJPx5BqcT0Qg-vdULjcU54VDg7nPbnLj1I0iAVhdKs7uD3vdOCpmQcxka1aVVy3', 4),
(34, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NiwiZXhwIjoxNzE4Mjc4OTY2fQ._TJPx5BqcT0Qg-vdULjcU54VDg7nPbnLj1I0iAVhdKs7uD3vdOCpmQcxka1aVVy3', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NiwiZXhwIjoxNzE4Mjc4OTY2fQ._TJPx5BqcT0Qg-vdULjcU54VDg7nPbnLj1I0iAVhdKs7uD3vdOCpmQcxka1aVVy3', 4),
(35, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NywiZXhwIjoxNzE4Mjc4OTY3fQ.Pl2gSXrp6in2T1c589tlffCC0vQ6cquddL5HGckhTh7UCt9mBEVsalezRkThfc9g', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2NywiZXhwIjoxNzE4Mjc4OTY3fQ.Pl2gSXrp6in2T1c589tlffCC0vQ6cquddL5HGckhTh7UCt9mBEVsalezRkThfc9g', 4),
(36, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2OCwiZXhwIjoxNzE4Mjc4OTY4fQ.laCyW37Po3_G9-vbV9UvYAg5cTKPhUDwyojBTUlPt5q44ytIjd5cZWM6HWwkoZnl', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2OCwiZXhwIjoxNzE4Mjc4OTY4fQ.laCyW37Po3_G9-vbV9UvYAg5cTKPhUDwyojBTUlPt5q44ytIjd5cZWM6HWwkoZnl', 4),
(37, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2OSwiZXhwIjoxNzE4Mjc4OTY5fQ.piHh3JmGDIGxSX7v2n_MBJ7qzmhSx9SIRC4sX781SQDZxGVqc5uwWGjL66BiBljD', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3ODk2OSwiZXhwIjoxNzE4Mjc4OTY5fQ.piHh3JmGDIGxSX7v2n_MBJ7qzmhSx9SIRC4sX781SQDZxGVqc5uwWGjL66BiBljD', 4),
(38, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI4MTc3OCwiZXhwIjoxNzE4MzY4MTc4fQ.O8CKK_flvo8hXM8diYQ3ZzOLbYy67UyimrhvIwkdpizheYc_FBVeykd3nzRKw1ZD', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI4MTc3OCwiZXhwIjoxNzE4ODg2NTc4fQ.XhW1rYFKYq6FIcLzmYx_Binp-MX3vbo9ACiPcdfuFz5Y4qAj97zscYprr5N0Y48G', 5),
(39, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0N0BleGFtcGxlLmNvbSIsImlhdCI6MTcxODI5NDUzOCwiZXhwIjoxNzE4MzgwOTM4fQ.vLMimXO8uKpJyOzlO7GIXW7G0XBIGeqQGv7FJHluGAzv0lYYpl9839o3hZjiNSZk', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0N0BleGFtcGxlLmNvbSIsImlhdCI6MTcxODI5NDUzOCwiZXhwIjoxNzE4ODk5MzM4fQ.aftnE7brzJiKoigLDU_mKNgBMkC1F4IR2WEx3Oqirjgwjy1gdLEcqOhygRYrYzN_', 6),
(40, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjk0Nzk2LCJleHAiOjE3MTgyOTQ3OTZ9.CnHcRFE-KogFMJthXf6zLdKYlvGDu9TbnssQL_nEtGslblqotyPYcNS3Q6swlTY_', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjk0Nzk2LCJleHAiOjE3MTgyOTQ3OTZ9.CnHcRFE-KogFMJthXf6zLdKYlvGDu9TbnssQL_nEtGslblqotyPYcNS3Q6swlTY_', 1),
(41, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjk0ODI4LCJleHAiOjE3MTgyOTQ4Mjh9.YpqiscsKnBwNijeE1kkHEvN5A2bpjGoOpC5K8pPi1mAZycGFJ0bBN4dJUnse5JHk', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjk0ODI4LCJleHAiOjE3MTgyOTQ4Mjh9.YpqiscsKnBwNijeE1kkHEvN5A2bpjGoOpC5K8pPi1mAZycGFJ0bBN4dJUnse5JHk', 7),
(42, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjk3NDg5LCJleHAiOjE3MTgzODM4ODl9.Eoj2a8TRlDWUMoNeAUo7MardgitHL22b3R6qrTr2WTpmlWWW-JxP_xVSTW_LIU_W', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTM0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjk3NDg5LCJleHAiOjE3MTg5MDIyODl9.mf6b_Pop5TmyIWmaBwzqDeU5vdKlHC7aoADuWha9OocEgd0xvCObSNQzamWvwBJz', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tokenwisat`
--

CREATE TABLE `tokenwisat` (
  `id` int(11) NOT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `is_logged_out` bit(1) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tokenwisat`
--

INSERT INTO `tokenwisat` (`id`, `access_token`, `is_logged_out`, `refresh_token`, `user_id`) VALUES
(1, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyNzQ3MzUsImV4cCI6MTcxODM2MTEzNX0.HrmVWt2FGYr6WmqSsdfOkg1peNvDbf-BX5ZQ9jtwD_yYJBvc5IsLJyuGZeDpthlc', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyNzQ3MzUsImV4cCI6MTcxODg3OTUzNX0.Q7LuYg43PHQhM8EkXrmq0JoXF8XUtvXSY7Uo3etBOsSq02H6fv74wLamN99bxQ4P', 1),
(2, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTEyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MTQwLCJleHAiOjE3MTgyNzUxNDB9.whEKzzUTEUjvW-0xEphF1mH1Ta-jjQUFgtBZZiMuGoc0eul_yTFo4_hmzOZhzo_Q', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYTEyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4Mjc1MTQwLCJleHAiOjE3MTgyNzUxNDB9.whEKzzUTEUjvW-0xEphF1mH1Ta-jjQUFgtBZZiMuGoc0eul_yTFo4_hmzOZhzo_Q', 2),
(3, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3OTM4MCwiZXhwIjoxNzE4Mjc5MzgwfQ.bImd8WAKnmJxPfiAEkNPl8mgU-0-D6wTajKCM-6WQhWCjT3IT9CV-DyI1LGF8BUy', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpbmRyYUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODI3OTM4MCwiZXhwIjoxNzE4Mjc5MzgwfQ.bImd8WAKnmJxPfiAEkNPl8mgU-0-D6wTajKCM-6WQhWCjT3IT9CV-DyI1LGF8BUy', 3),
(4, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4MjgxNjQyLCJleHAiOjE3MTgzNjgwNDJ9.Wj5yd-J4LSFh4fRFOC0XMgSaeFUspc5lmPRBj1KwfGj9WfySDKD3gYflvDT1C5tO', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4MjgxNjQyLCJleHAiOjE3MTg4ODY0NDJ9.Y3vMv1ARqlzGJRkI8D5viGHjxSI6HpgKQ6FC71hKXSgTxcq_Eig4wOMZOJuFobzV', 4),
(5, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyOTUwMzEsImV4cCI6MTcxODI5NTAzMX0.zxS4cemf4QCjn4SCsNrTLwvrVe0cw1tLsISNphGRxEQsPlxoNrck6wNGokFXoKS4', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyOTUwMzEsImV4cCI6MTcxODI5NTAzMX0.zxS4cemf4QCjn4SCsNrTLwvrVe0cw1tLsISNphGRxEQsPlxoNrck6wNGokFXoKS4', 5),
(6, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyOTUwOTEsImV4cCI6MTcxODI5NTA5MX0.5zs1oLI0CDoQqclxSeNKxebMFUWfzrp7nmAl60YhQ-rRoqZcbUgduBXDIg1iTlK0', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyOTUwOTEsImV4cCI6MTcxODI5NTA5MX0.5zs1oLI0CDoQqclxSeNKxebMFUWfzrp7nmAl60YhQ-rRoqZcbUgduBXDIg1iTlK0', 5),
(7, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyOTc1MjUsImV4cCI6MTcxODM4MzkyNX0.oOe3aogWWtKKVybWW_kUWzGuohahcL2yMySn_OybV1eKd3gfCB3zuLTkX0ehjXoK', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgyOTc1MjUsImV4cCI6MTcxODkwMjMyNX0.92kaQYHFLBepU5NrT9_U1FwkErqZ4cFpSCVy5nzGQg6RTsrht2d6EfFaMREXuHfm', 5),
(8, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzMjk1NTAsImV4cCI6MTcxODQxNTk1MH0.mM2mhvSU84VDvpTWOioBsvH1-X1k6nnfoG2t-sPf75N1JeXwuQcQ4VLNYSYdyz75', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzMjk1NTAsImV4cCI6MTcxODkzNDM1MH0.nos1A9uKx5Ww9FTFVNA2rwiOvUzfAss2xT6iUv5RkuPeHI3-FUpyYyYb3rZ7Xpsp', 5),
(9, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzMzIwNzQsImV4cCI6MTcxODQxODQ3NH0.nRgwzEJXnnMrGbUzX_YWGF9FSB2YL_ShJSpPmHaL-neizdvsIPfsXcxIQ2F16aNG', b'0', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzMzIwNzQsImV4cCI6MTcxODkzNjg3NH0.ZOGjJZ4nPxV1kqw4ryl4hO8yZWOFvu_5Iy0I2Ho9-HwVm0p5fdYveDQUHHqtybxT', 5),
(10, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzNTA2MjYsImV4cCI6MTcxODQzNzAyNn0.mscg2JDHMiIiwqY0buuHBWQx5OPmScXjNRne7cFlzUU_BVN_EZucftCRQSDFE8DE', b'1', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzNTA2MjYsImV4cCI6MTcxODk1NTQyNn0.W4zNmEpnmH_b6hSpYAJtJ3gpDTgRuUiq346IMfIxacyf2ilR3o2Vu9htBpd5bfYC', 5),
(11, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzNTEwODAsImV4cCI6MTcxODQzNzQ4MH0.5hpkoIJanoD-vcxm2Q1duGowGjxQ3XCcY-Ugvakm8Y_Ii7evxLgbofkmjEe_k1pB', b'1', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzNTEwODAsImV4cCI6MTcxODk1NTg4MH0.Op_Xy0qcPmogka8zAMA_Saz6fbRm9D5jTVUGmR9NbML-YUyqezY2S-Fqj0ybcCqm', 5),
(12, 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzNTE4MzAsImV4cCI6MTcxODQzODIzMH0.bRu-CJyetJnOV5YLS29-0CEEIMU1Ob9cCB2HXhJ8CM7XuAacqb4sMadpj2vAvErw', b'1', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZGl0MDk4OTBAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgzNTE4MzAsImV4cCI6MTcxODk1NjYzMH0.4CIl9rTLfOex06EFXCFokuYW0xcl4lEt2U0NMQsL2qOXdR5Nsn9ufA4lG3qezJxt', 5);

-- --------------------------------------------------------

--
-- Table structure for table `user_vendor`
--

CREATE TABLE `user_vendor` (
  `id` int(11) NOT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `confirm_password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `id_vendor` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `nama_vendor` varchar(255) DEFAULT NULL,
  `nomor_telepon` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('VENDOR','WISATAWAN') DEFAULT NULL,
  `tiktok` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_vendor`
--

INSERT INTO `user_vendor` (`id`, `alamat`, `confirm_password`, `email`, `facebook`, `id_vendor`, `instagram`, `nama_vendor`, `nomor_telepon`, `password`, `role`, `tiktok`) VALUES
(1, 'Jl. Vendor No. 123', NULL, 'indra34@example.com', 'VendorShopPage', 'c907c115-6974-4f52-ad37-9a337a3e630d', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$YCPXb34MYsg7TE4CH.sk2.0mKYOKfe38GNP3phn0ZUw9sdYvaYmm.', 'VENDOR', '@vendor_tiktok'),
(2, 'Jl. Vendor No. 123', NULL, 'indra345@example.com', 'VendorShopPage', 'd28956ce-e849-4c66-8a85-3ff2d9b3d275', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$fc6.y0WNfyYSeFyHfnQzDePavs4htLtJ22pSW/Tu7Lsa5ZFNs7dkq', 'VENDOR', '@vendor_tiktok'),
(3, 'Jl. Vendor No. 123', NULL, 'indra34905@example.com', 'VendorShopPage', '62cf91b2-7c5a-4d01-916e-55de535e0b4d', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$GRLoTftVmyQn5crroRhQgumsOS4x.ei5qejGeoQRuw0fuxwqDb8hK', 'VENDOR', '@vendor_tiktok'),
(4, 'Jl. Vendor No. 123', NULL, 'indra@example.com', 'VendorShopPage', '9d2c60fb-4852-42a7-a369-3857d9ceb24c', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$mVHLmhMNLZ7a06pmEX1EJeTmONEWgZrvkGxYhZmbLfN/.DVLQNpCe', 'VENDOR', '@vendor_tiktok'),
(5, 'Jl. Vendor No. 123', NULL, 'Adit1@example.com', 'VendorShopPage', 'e0015559-757f-4ada-b92a-540b771b9485', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$tEMypjWVe0/E94sBFXm2Letvg3w5O3aITj7BCqnZdTmeFH5RicyPm', 'VENDOR', '@vendor_tiktok'),
(6, 'Jl. Vendor No. 123', NULL, 'indra347@example.com', 'VendorShopPage', '4ccb5730-c578-45d8-940d-a7ee5d4f4e5f', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$rW2ShxY.bhhuoPOFD5uaDuaFQz9jx2QQ6uMOYn8Ia2yhnIgUsVFly', 'VENDOR', '@vendor_tiktok'),
(7, 'Jl. Vendor No. 123', NULL, 'Adit@example.com', 'VendorShopPage', 'd828a21d-33dc-4093-a6f7-f4110beadd45', '@vendor_shop', 'Vendor Shop', '08123456789', '$2a$10$dJU424dKN2wRqDqKbtLJkOEh4x6DMmeYy66JMsq/fFCkkIjhfSsZC', 'VENDOR', '@vendor_tiktok');

-- --------------------------------------------------------

--
-- Table structure for table `user_wisat`
--

CREATE TABLE `user_wisat` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_wisatawan` varchar(255) DEFAULT NULL,
  `jenis_kelamin` enum('LAKI_LAKI','PEREMPUAN') DEFAULT NULL,
  `konfirmasi_password` varchar(255) DEFAULT NULL,
  `kota` enum('Bali','Balikpapan','Bandung','Banjarmasin','Batam','Bogor','Denpasar','Jakarta','Lombok','Makassar','Malang','Manado','Manokwari','Medan','Padang','Palembang','Pontianak','Semarang','Solo','Surabaya','Yogyakarta') DEFAULT NULL,
  `nama_lengkap` varchar(255) DEFAULT NULL,
  `nomor_telepon` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('VENDOR','WISATAWAN') DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_wisat`
--

INSERT INTO `user_wisat` (`id`, `email`, `id_wisatawan`, `jenis_kelamin`, `konfirmasi_password`, `kota`, `nama_lengkap`, `nomor_telepon`, `password`, `role`, `tanggal_lahir`) VALUES
(1, 'indra1@example.com', '00bf11e3-ce8f-443d-94f2-525071ec8f18', 'LAKI_LAKI', NULL, 'Jakarta', 'John Doe', '08123456789', '$2a$10$.nRbQawE3RvqUu6YTAInm.BPpv9bFxJbeVrPamUwOUWrDaCAmHa3y', 'WISATAWAN', '1990-01-01'),
(2, 'indra12@example.com', '6ac8e8e6-bfc9-4466-ad13-ab558cf77172', 'LAKI_LAKI', NULL, 'Jakarta', 'John Doe', '08123456789', '$2a$10$hYetBwfopWP59P1RXZwlJeBG4SBCojGytcKUTEbZ23lG7i3PVgdwu', 'WISATAWAN', '1990-01-01'),
(3, 'indra@example.com', 'b9cdb45b-a7f2-4b43-a83f-d555ef5351f9', 'LAKI_LAKI', NULL, 'Jakarta', 'John Doe', '08123456789', '$2a$10$mvlwIIY2a5x1/gcs1Dtj2u.gltC.mMpO47W1nPf6po7GwD0C9VTnm', 'WISATAWAN', '1990-01-01'),
(4, 'Adit@example.com', '1449a0da-c1a2-485b-97f7-a63cfdb9a713', 'LAKI_LAKI', NULL, 'Jakarta', 'John Doe', '08123456789', '$2a$10$U9Z1jKBU4bhVXbOfHGswN.wBPP.AgOrhqtAz34/74G8qWReh7LQPa', 'WISATAWAN', '1990-01-01'),
(5, 'Adit09890@example.com', '53ca9199-a259-4a9c-a24c-564f30c46b35', 'LAKI_LAKI', NULL, 'Jakarta', 'John Doe', '08123456789', '$2a$10$z9mHb/LKBwJfj6rXN3adMe5IaUgjOq6qco3I3e4FrHd8.3gOT5LMC', 'WISATAWAN', '1990-01-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `piu`
--
ALTER TABLE `piu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `piupiu`
--
ALTER TABLE `piupiu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `piupiupiu`
--
ALTER TABLE `piupiupiu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokenvend`
--
ALTER TABLE `tokenvend`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrdjwpad99bstuv8dij7n6acor` (`user_id`);

--
-- Indexes for table `tokenwisat`
--
ALTER TABLE `tokenwisat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKtnfkj63844rmntb14d11g91mj` (`user_id`);

--
-- Indexes for table `user_vendor`
--
ALTER TABLE `user_vendor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_wisat`
--
ALTER TABLE `user_wisat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `piu`
--
ALTER TABLE `piu`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `piupiu`
--
ALTER TABLE `piupiu`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `piupiupiu`
--
ALTER TABLE `piupiupiu`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tokenvend`
--
ALTER TABLE `tokenvend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `tokenwisat`
--
ALTER TABLE `tokenwisat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_vendor`
--
ALTER TABLE `user_vendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_wisat`
--
ALTER TABLE `user_wisat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tokenvend`
--
ALTER TABLE `tokenvend`
  ADD CONSTRAINT `FKrdjwpad99bstuv8dij7n6acor` FOREIGN KEY (`user_id`) REFERENCES `user_vendor` (`id`);

--
-- Constraints for table `tokenwisat`
--
ALTER TABLE `tokenwisat`
  ADD CONSTRAINT `FKtnfkj63844rmntb14d11g91mj` FOREIGN KEY (`user_id`) REFERENCES `user_wisat` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
