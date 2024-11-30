-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2024 at 02:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travso-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `bkt_lists`
--

CREATE TABLE `bkt_lists` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `list_name` varchar(255) NOT NULL,
  `is_default` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bucket_list`
--

CREATE TABLE `bucket_list` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bucket_list`
--

INSERT INTO `bucket_list` (`id`, `post_id`, `user_id`, `created_at`) VALUES
(1, 1, 26, '2024-11-26 06:39:04'),
(2, 4, 26, '2024-11-26 06:39:04');

-- --------------------------------------------------------

--
-- Table structure for table `buddies`
--

CREATE TABLE `buddies` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `buddies_id` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buddies`
--

INSERT INTO `buddies` (`id`, `user_id`, `buddies_id`, `created_at`) VALUES
(1, 27, 19, '2024-11-25 10:58:02'),
(2, 27, 23, '2024-11-25 10:58:02');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `user_id`, `content`, `created_at`) VALUES
(1, 1, 13, 'Nice.', '2024-11-25 07:27:15'),
(2, 1, 26, 'Wounderfull', '2024-11-25 07:27:15'),
(4, 4, 11, 'Where are you?', '2024-11-26 07:46:22'),
(5, 1, 27, 'hello my first comment', '2024-11-27 11:32:14'),
(6, 1, 27, 'hello my 2nd comment', '2024-11-27 11:33:57'),
(7, 1, 27, 'hello comment', '2024-11-27 11:36:00'),
(8, 4, 27, 'dsdhjh', '2024-11-27 11:37:35'),
(9, 1, 27, 'new comment', '2024-11-27 11:41:33'),
(10, 1, 27, 'new comment 2', '2024-11-27 11:42:35'),
(11, 1, 27, 'nikhil bhai ki comment', '2024-11-27 11:43:53'),
(12, 1, 27, 'dhsdjhjhj', '2024-11-27 12:12:14'),
(13, 1, 27, 'chhdw', '2024-11-27 12:39:54'),
(14, 1, 27, 'hello', '2024-11-28 10:58:59'),
(15, 4, 27, 'hello', '2024-11-28 12:17:09'),
(16, 4, 27, 'second time hello', '2024-11-28 12:18:49'),
(17, 4, 27, '😅', '2024-11-28 12:29:26'),
(18, 4, 27, 'hello bhai kya haalchaal😀', '2024-11-28 12:30:23'),
(19, 1, 27, '😂', '2024-11-28 12:56:11'),
(20, 4, 27, 'testing comment', '2024-11-28 13:30:58'),
(21, 4, 27, 'rishabh thank you bhaiya', '2024-11-28 13:33:42'),
(22, 1, 27, 'hello', '2024-11-29 06:03:27'),
(23, 1, 27, 'hii', '2024-11-29 06:05:02'),
(24, 1, 27, 'test comment 15', '2024-11-29 06:05:43'),
(25, 4, 27, 'hello', '2024-11-29 06:17:34'),
(26, 4, 27, 'kkk', '2024-11-29 06:18:20'),
(27, 4, 27, 'hello', '2024-11-29 06:18:27'),
(28, 1, 27, 'new comment', '2024-11-29 09:52:31'),
(29, 1, 27, 'test again', '2024-11-29 09:55:33'),
(30, 1, 27, 'nikhil testing', '2024-11-29 09:57:04');

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL,
  `followee_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`id`, `follower_id`, `followee_id`, `created_at`) VALUES
(1, 27, 11, '2024-11-25 06:57:18'),
(2, 11, 27, '2024-11-25 06:57:18'),
(3, 13, 27, '2024-11-25 07:03:42'),
(4, 27, 19, '2024-11-25 07:03:42');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `post_id`, `user_id`, `created_at`) VALUES
(1, 1, 26, '2024-11-25 07:13:42'),
(2, 1, 13, '2024-11-25 07:13:42'),
(3, 1, 19, '2024-11-25 07:14:05'),
(5, 4, 28, '2024-11-26 05:15:51'),
(25, 5, 27, '2024-11-28 12:38:43'),
(37, 4, 27, '2024-11-29 06:35:01');

-- --------------------------------------------------------

--
-- Table structure for table `list_posts`
--

CREATE TABLE `list_posts` (
  `id` int(11) NOT NULL,
  `list_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `saved_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_public` tinyint(1) DEFAULT 1,
  `description` text DEFAULT NULL,
  `buddies_id` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`buddies_id`)),
  `tag_id` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tag_id`)),
  `location_id` int(11) DEFAULT NULL,
  `media_url` varchar(255) NOT NULL,
  `status` enum('active','inactive','deleted') DEFAULT 'active',
  `block_post` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `is_public`, `description`, `buddies_id`, `tag_id`, `location_id`, `media_url`, `status`, `block_post`, `created_at`, `updated_at`) VALUES
(1, 27, 1, 'Post description 1', '2', '2', 1, 'https://images.unsplash.com/photo-1521575107034-e0fa0b594529?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvc3R8ZW58MHx8MHx8fDA%3D', 'active', 0, '2024-11-25 06:29:48', '2024-11-26 12:29:46'),
(2, 27, 0, 'Post description 2', '1', '3', 2, 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'inactive', 0, '2024-11-25 06:29:48', '2024-11-26 12:31:25'),
(3, 27, 1, 'Post description 3', '1', '1', 3, 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg', 'deleted', 1, '2024-11-25 06:29:48', '2024-11-26 12:32:45'),
(4, 27, 1, 'Post description 4', '3', '2', 1, 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/866759932dc5358cee86f6552d1250f2/inside-bubble-spheres.jpg', 'active', 1, '2024-11-25 06:29:48', '2024-11-26 12:36:04'),
(5, 27, 0, 'Post description 5', '1', '4', 2, 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg', 'active', 0, '2024-11-25 06:29:48', '2024-11-26 12:32:51');

-- --------------------------------------------------------

--
-- Table structure for table `recent_search`
--

CREATE TABLE `recent_search` (
  `id` int(11) NOT NULL,
  `user_id` int(10) NOT NULL,
  `searched_id` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recent_search`
--

INSERT INTO `recent_search` (`id`, `user_id`, `searched_id`, `created_at`, `updated_at`) VALUES
(1, 42, 27, '2024-11-30 10:14:58', '2024-11-30 10:14:58');

-- --------------------------------------------------------

--
-- Table structure for table `shared_post`
--

CREATE TABLE `shared_post` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shared_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shared_post`
--

INSERT INTO `shared_post` (`id`, `post_id`, `user_id`, `shared_at`) VALUES
(1, 1, 26, '2024-11-26 06:23:29'),
(2, 1, 13, '2024-11-26 06:24:46'),
(3, 4, 28, '2024-11-26 06:24:46');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(2, '#love_travel'),
(4, '#nature_love'),
(3, '#new_post'),
(1, '#travso');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_number` varchar(15) NOT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `isOtpVerified` tinyint(1) NOT NULL DEFAULT 0,
  `is_influencer` tinyint(1) NOT NULL DEFAULT 0,
  `user_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `smlink1` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_logged_in` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `first_name`, `last_name`, `gender`, `dob`, `state`, `city`, `email`, `mobile_number`, `otp`, `isOtpVerified`, `is_influencer`, `user_name`, `description`, `password`, `is_active`, `user_type`, `smlink1`, `profile_image`, `cover_image`, `created_at`, `is_logged_in`) VALUES
(9, 'krishna', NULL, NULL, 'male', '1990-11-15', 'Madhya Pradesh', 'Indore', 'kk14@kk.com', '1234567892', '7619', 1, 0, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, '2024-11-26 11:37:50', 0),
(11, 'Krishna', NULL, NULL, 'male', '2024-11-01', 'Madhya Pradesh', 'Indore', 'krishnakant0795@gmail.com', '9977195275', '8884', 0, 0, 'Krishna002', 'Test Account Description', '$2b$10$OW4ZCAzq3XiY2n/Yb1TSBu1zY1EOyO.yiUIHkMzpu.xC3b0LLhqiC', 1, 'traveler', 'https://www.instagram.com/krishnakant7947/profilecard/?igsh=MXhieDRyZjhmdHhpZQ==', NULL, NULL, '2024-11-26 11:37:50', 0),
(13, 'Rishabh', NULL, NULL, 'male', '2024-11-01', 'Madhya Pradesh', 'Indore', 'rishabh@rishabh.com', '8720096457', '3198', 0, 0, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, '2024-11-26 11:37:50', 0),
(19, 'krishna', NULL, NULL, 'male', '1995-03-07', 'Madhya Pradesh', 'Indore', 'kk19@kk.com', '9977194285', '1466', 0, 0, 'Krish003', NULL, NULL, 1, 'traveler', NULL, NULL, NULL, '2024-11-26 11:37:50', 0),
(23, 'Krishna005', NULL, NULL, 'male', '2007-02-25', 'Madhya Pradesh', 'Indore', 'kktest@kk.com', '1212121212', '3725', 0, 0, NULL, NULL, NULL, 1, 'traveler', NULL, NULL, NULL, '2024-11-26 11:37:50', 0),
(26, 'Nikhil Sir', NULL, NULL, 'male', '2006-02-26', 'Madhya Pradesh', 'Indore', 'nikhil02.1998@gmail.com', '7415872603', '0640', 0, 0, NULL, NULL, NULL, 1, 'traveler', NULL, NULL, NULL, '2024-11-26 11:37:50', 0),
(27, 'Krishna Kant Malviy', 'Krishna Kant', 'Malviy', 'male', '2006-02-08', 'Madhya Pradesh', 'Indore', 'learncoding299@gmail.com', '9755895314', '0325', 0, 0, 'Krishna005', 'Test Description', '$2b$10$OW4ZCAzq3XiY2n/Yb1TSBu1zY1EOyO.yiUIHkMzpu.xC3b0LLhqiC', 1, 'traveler', NULL, 'http://localhost:3000/uploads/profile_img/profile_1732942866301.jpeg', 'http://localhost:3000/uploads/cover_img/profile_1732942875410.jpeg', '2024-11-26 11:37:50', 0),
(28, 'Pankaj', NULL, NULL, 'male', '2007-02-26', 'Madhya Pradesh', 'Indore', 'sales@reettechit.com', '9022993526', '4331', 0, 0, 'Pankaj Sir', 'Test Description', '$2b$10$wqVUTH6NMAKjQgvXCe6Lmu332quK9pPiiHPtz4K8ZLa6tcXpdKpD2', 1, 'traveler', NULL, NULL, NULL, '2024-11-26 11:37:50', 0),
(30, 'Test', NULL, NULL, 'male', '2007-02-27', 'Madhya Pradesh', 'Indore', 'test@test.com', '1212121211', '5133', 0, 0, NULL, NULL, NULL, 1, 'traveler', NULL, NULL, NULL, '2024-11-27 01:54:23', 0),
(31, 'bdh', NULL, NULL, 'female', '2004-02-28', 'Andhra Pradesh', 'Ādoni', 'emai@email.com', '9340169945', '1929', 0, 0, NULL, NULL, NULL, 1, 'traveler', NULL, NULL, NULL, '2024-11-27 12:19:35', 0),
(32, 'Prashant', NULL, NULL, 'male', '2003-01-28', 'Madhya Pradesh', 'Indore', 'prashant@prashant.com', '9340169981', '7723', 0, 0, NULL, NULL, NULL, NULL, 'traveler', NULL, NULL, NULL, '2024-11-28 13:52:29', 0),
(33, 'hhh', NULL, NULL, 'male', '2005-01-29', 'Madhya Pradesh', 'Indore', 'ss@ss.com', '1212121213', '9578', 0, 0, NULL, NULL, NULL, NULL, 'traveler', NULL, NULL, NULL, '2024-11-29 10:23:17', 0),
(34, 'sd', NULL, NULL, 'male', '1998-02-28', 'Andhra Pradesh', 'Ādoni', 'dsd@sd.com', '1234567890', '7315', 0, 0, NULL, NULL, NULL, NULL, 'traveler', NULL, NULL, NULL, '2024-11-29 12:22:56', 0),
(35, 'sd', NULL, NULL, 'male', '2008-01-29', 'Andhra Pradesh', 'Ādoni', 'kk@ll.com', '1234567898', '7639', 0, 0, NULL, NULL, NULL, NULL, 'traveler', NULL, NULL, NULL, '2024-11-29 13:05:44', 0),
(36, 'sd', NULL, NULL, 'male', '2007-03-29', 'Andhra Pradesh', 'Addanki', 'kk@kk.com', '1212454572', '4903', 0, 0, 'test001', 'Test description', '$2b$10$RO2fWhAGEnZX49Cq6pR1.uJjrLsZm.wYD0Ftvfe/RfYPgeTt8BHGe', NULL, 'traveler', NULL, NULL, NULL, '2024-11-29 13:09:12', 0),
(41, 'Test Account1', 'Test', 'Account1', 'male', '2008-02-29', 'Madhya Pradesh', 'Harda', 'test1@test.com', '1233211231', '4918', 0, 0, 'test1', 'Test Description  Test 1', '$2b$10$3G1LH/D8IwgmJKsI4SWWWuFaksMjm3Bpl4ZMVY7LkgPXwkz2vA5KK', NULL, 'traveler', NULL, 'http://localhost:3000/uploads/profile_img/profile_1732948983049.jpeg', 'http://localhost:3000/uploads/cover_img/profile_1732951028576.jpeg', '2024-11-30 06:28:10', 0),
(42, 'Test Account2', 'Test', 'Account2', 'male', '2008-02-29', 'Madhya Pradesh', 'Indore', 'test2@test.com', '1234563215', '6859', 0, 0, 'test2', 'Test Description new', '$2b$10$CJXPEs91RUyfX9f3D5LCk.idHaJM1tVKw8OEf4vqXEemxSkz.5GQe', NULL, 'traveler', NULL, 'http://localhost:3000/uploads/profile_img/profile_1732969808487.jpeg', 'http://localhost:3000/uploads/cover_img/profile_1732969898721.webp', '2024-11-30 09:29:51', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bkt_lists`
--
ALTER TABLE `bkt_lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `bucket_list`
--
ALTER TABLE `bucket_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `buddies`
--
ALTER TABLE `buddies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `follower_id` (`follower_id`),
  ADD KEY `followee_id` (`followee_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `list_posts`
--
ALTER TABLE `list_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_id` (`list_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `recent_search`
--
ALTER TABLE `recent_search`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shared_post`
--
ALTER TABLE `shared_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bkt_lists`
--
ALTER TABLE `bkt_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bucket_list`
--
ALTER TABLE `bucket_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `buddies`
--
ALTER TABLE `buddies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `list_posts`
--
ALTER TABLE `list_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `recent_search`
--
ALTER TABLE `recent_search`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shared_post`
--
ALTER TABLE `shared_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bkt_lists`
--
ALTER TABLE `bkt_lists`
  ADD CONSTRAINT `bkt_lists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `list_posts`
--
ALTER TABLE `list_posts`
  ADD CONSTRAINT `list_posts_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `bkt_lists` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `list_posts_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
