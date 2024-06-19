-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 19 juin 2024 à 18:04
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecom-v2`
--

-- --------------------------------------------------------

--
-- Structure de la table `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE IF NOT EXISTS `carts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `product_qty` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `product_size` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `product_id`, `product_qty`, `product_size`, `created_at`, `updated_at`) VALUES
(1, '2', '2', '3', 'm', '2024-06-03 20:52:32', '2024-06-03 20:52:42'),
(2, '3', '2', '1', 'xxl', '2024-06-03 21:04:45', '2024-06-03 21:04:45'),
(3, '19', '1', '1', '80', '2024-06-17 15:30:56', '2024-06-17 15:30:56'),
(4, '19', '2', '1', 'xl', '2024-06-17 15:37:50', '2024-06-17 15:37:50'),
(5, '29', '1', '1', '80', '2024-06-19 10:00:54', '2024-06-19 10:00:54'),
(6, '30', '1', '1', 'M', '2024-06-19 10:07:01', '2024-06-19 10:07:01'),
(7, '31', '1', '1', '80', '2024-06-19 10:10:15', '2024-06-19 10:10:15'),
(8, '36', '1', '2', '80', '2024-06-19 11:24:08', '2024-06-19 11:24:08'),
(9, '36', '2', '5', 'm', '2024-06-19 11:24:44', '2024-06-19 11:24:44'),
(10, '37', '1', '4', '80', '2024-06-19 11:34:47', '2024-06-19 11:34:47'),
(11, '38', '1', '2', '80', '2024-06-19 11:39:33', '2024-06-19 11:39:33'),
(12, '38', '2', '5', 'xxl', '2024-06-19 11:41:11', '2024-06-19 11:41:11'),
(13, '39', '1', '2', '80', '2024-06-19 11:45:49', '2024-06-19 11:45:49'),
(14, '40', '1', '1', '80', '2024-06-19 11:52:46', '2024-06-19 11:52:46'),
(15, '41', '2', '2', 'xl', '2024-06-19 11:58:06', '2024-06-19 11:58:06'),
(16, '42', '2', '2', 'm', '2024-06-19 12:02:02', '2024-06-19 12:02:02'),
(18, '43', '2', '3', 'm', '2024-06-19 12:05:54', '2024-06-19 12:05:54'),
(19, '43', '1', '2', '80', '2024-06-19 12:07:42', '2024-06-19 12:07:42'),
(20, '48', '1', '4', '80', '2024-06-19 12:43:31', '2024-06-19 12:43:37');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `active` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'YES',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Smartphone', 'YES', NULL, NULL),
(3, 'Divers', 'YES', '2024-06-03 20:47:13', '2024-06-03 20:47:13');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `connection` text COLLATE utf8mb4_general_ci NOT NULL,
  `queue` text COLLATE utf8mb4_general_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `logo`
--

DROP TABLE IF EXISTS `logo`;
CREATE TABLE IF NOT EXISTS `logo` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `logo`
--

INSERT INTO `logo` (`id`, `logo`, `created_at`, `updated_at`) VALUES
(1, '0', '2024-06-03 16:52:15', '2024-06-03 16:52:15');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_30_042232_create_categories_table', 1),
(6, '2024_03_30_042353_create_products_table', 1),
(7, '2024_04_21_124242_create_logo_table', 1),
(8, '2024_04_27_121201_create_carts_table', 1),
(9, '2024_04_30_211234_create_orders_table', 1),
(10, '2024_04_30_211748_create_orderitems_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `orderitems`
--

DROP TABLE IF EXISTS `orderitems`;
CREATE TABLE IF NOT EXISTS `orderitems` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `qty` int NOT NULL,
  `price` int NOT NULL,
  `size` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `zipcode` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `payment_id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payment_mode` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_general_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'Personal Access Token', '9a23f3cc7be40f7dd3c7e6a3e88333d3cadd9a28a4ee43add3268951d1d1dba9', '[\"*\"]', NULL, NULL, '2024-06-03 18:04:20', '2024-06-03 18:04:20'),
(51, 'App\\Models\\User', 23, 'api', 'e54f833e7c9cb2212c60e5f6d7594abcbca00b354f37bbefe2032db78a23593d', '[\"customer\"]', '2024-06-19 08:46:10', NULL, '2024-06-19 08:45:45', '2024-06-19 08:46:10'),
(50, 'App\\Models\\User', 22, 'api', '533c88cecbfe335bc1f79dc2d8c6e8fd7de4f5f559c59344ad85e9c45025e27f', '[\"customer\"]', NULL, NULL, '2024-06-19 08:42:16', '2024-06-19 08:42:16'),
(49, 'App\\Models\\User', 21, 'api', '4ab6ee95703a0d4c0f2688789d802ff73d411d53fd08b7819d02d72c68f5dc66', '[\"customer\"]', NULL, NULL, '2024-06-19 08:36:21', '2024-06-19 08:36:21'),
(48, 'App\\Models\\User', 20, 'api', '5b8d0d14e9b7b79221e37bfd94f0beef2709737b2e2c45d0612b9527a303d739', '[\"customer\"]', '2024-06-17 14:49:02', NULL, '2024-06-17 14:48:11', '2024-06-17 14:49:02'),
(47, 'App\\Models\\User', 19, 'api', 'c4a748a1a6565dc466f922cca1bef4526b28748469f0c77dc7882a09a1a63319', '[\"customer\"]', '2024-06-17 15:52:31', NULL, '2024-06-17 14:43:32', '2024-06-17 15:52:31'),
(44, 'App\\Models\\User', 16, 'api', '9f7fb91fac78f7f6963ccc333e65d99276ff2aa9622ef3e6e4d17d9cc0003643', '[\"customer\"]', '2024-06-17 14:25:09', NULL, '2024-06-15 11:54:18', '2024-06-17 14:25:09'),
(43, 'App\\Models\\User', 15, 'api', 'b57e539633d0e62e8f10b3185670582bf799767e8869c283a6e0b347f2f411bc', '[\"customer\"]', NULL, NULL, '2024-06-15 11:44:45', '2024-06-15 11:44:45'),
(42, 'App\\Models\\User', 14, 'api', '5def5abc0f93b8290f7c085968deb5562597cb1ae9e0408b8f570ffa99052256', '[\"customer\"]', NULL, NULL, '2024-06-15 10:53:01', '2024-06-15 10:53:01'),
(46, 'App\\Models\\User', 18, 'api', '883649eef9ae524b90e6c82c6eef9e7b1d0cc3015f6df7a4ed940742d4cfb508', '[\"customer\"]', '2024-06-17 14:32:45', NULL, '2024-06-17 14:31:58', '2024-06-17 14:32:45'),
(45, 'App\\Models\\User', 17, 'api', 'e09426908ae76f4cfb6fe0c926a93cec87821c364979da5fe1012b5c9171a6c6', '[\"customer\"]', NULL, NULL, '2024-06-17 14:28:13', '2024-06-17 14:28:13'),
(39, 'App\\Models\\User', 12, 'api', '51c6c34b6140e4475d0a356194aa6edd12019bbff9cb1a3ab3e0a55a5038ded8', '[\"customer\"]', NULL, NULL, '2024-06-14 23:17:54', '2024-06-14 23:17:54'),
(38, 'App\\Models\\User', 11, 'api', 'bba7d7d9c0a14baa826a89ef6193e561343684afdf4f9f29ad53eff30a713d07', '[\"customer\"]', NULL, NULL, '2024-06-14 23:12:44', '2024-06-14 23:12:44'),
(37, 'App\\Models\\User', 10, 'api', '98d3f7c6f002f50b86e3383b6023ba4cd46c4c97508e0d2cd5bbeb6b33bdd6e4', '[\"customer\"]', NULL, NULL, '2024-06-14 23:06:29', '2024-06-14 23:06:29'),
(36, 'App\\Models\\User', 9, 'api', '443f614e5de6e5b27b1df21fc92f4d85132c94adf58ad0d4f93cf3f04111e2ab', '[\"customer\"]', NULL, NULL, '2024-06-14 23:02:49', '2024-06-14 23:02:49'),
(35, 'App\\Models\\User', 8, 'api', 'daff97f7eee1d6add4dec5a706142768a8c422f01447dce2184a5eda47583020', '[\"customer\"]', NULL, NULL, '2024-06-14 23:00:21', '2024-06-14 23:00:21'),
(34, 'App\\Models\\User', 7, 'api', 'b7b3721f0915039e61c7fad67b45cd8bc3503f3d4ce43c7befe0e3e3cff65009', '[\"customer\"]', NULL, NULL, '2024-06-14 22:55:47', '2024-06-14 22:55:47'),
(33, 'App\\Models\\User', 6, 'api', 'd84fa3b9ff63d93d111b69243198be8d6ddc0f9e0eb9d50d291a13d960cad2c3', '[\"customer\"]', NULL, NULL, '2024-06-14 22:53:16', '2024-06-14 22:53:16'),
(30, 'App\\Models\\User', 5, 'api', 'c757b365deb959fb144c49e2c3c34ec718ef0add5cef1378a1621354b0d7c48e', '[\"customer\"]', NULL, NULL, '2024-06-11 09:41:30', '2024-06-11 09:41:30'),
(29, 'App\\Models\\User', 4, 'api', 'a14014a0450a537b78549374ad8ce5d5c1bafd6d17d529d87e3aeac6d1175a23', '[\"customer\"]', NULL, NULL, '2024-06-06 16:33:22', '2024-06-06 16:33:22'),
(25, 'App\\Models\\User', 2, 'api', 'd55d73ee52e5b67db9c3eea374cae3525b70efe86aee2c20d783c80dd5f49a9a', '[\"admin\"]', '2024-06-03 20:55:59', NULL, '2024-06-03 20:51:56', '2024-06-03 20:55:59'),
(52, 'App\\Models\\User', 24, 'api', 'e7ba32821c7b06d1c744aadd2aaf6b9ff3c5b655e070167035ada42276256481', '[\"customer\"]', NULL, NULL, '2024-06-19 09:11:45', '2024-06-19 09:11:45'),
(53, 'App\\Models\\User', 25, 'api', 'a924a1ce1cec1188617f564d9387eb4afa9bcc034db23ba72ab52015f41851a5', '[\"customer\"]', NULL, NULL, '2024-06-19 09:12:15', '2024-06-19 09:12:15'),
(54, 'App\\Models\\User', 26, 'api', '3c6dd0b99408259101123795df2aecf9bc9d7367c40ac2d4f0dffd6cf52dbe23', '[\"customer\"]', NULL, NULL, '2024-06-19 09:19:32', '2024-06-19 09:19:32'),
(55, 'App\\Models\\User', 27, 'api', '2eecff8352b1b27dde1680814b7c85d22bb7adc9af40f11c1cf8aa2d0cef4277', '[\"customer\"]', NULL, NULL, '2024-06-19 09:48:20', '2024-06-19 09:48:20'),
(56, 'App\\Models\\User', 28, 'api', '9f43bd8203178949baa51f1e2b2f8dcc40f4986395908ce8b111d9d0269a642a', '[\"customer\"]', NULL, NULL, '2024-06-19 09:50:52', '2024-06-19 09:50:52'),
(57, 'App\\Models\\User', 29, 'api', 'bc7dec4749f7ca19fa203dd302ef2c8b0c0e06b95de942cd7d02c9c57923f424', '[\"customer\"]', '2024-06-19 10:00:54', NULL, '2024-06-19 10:00:46', '2024-06-19 10:00:54'),
(58, 'App\\Models\\User', 30, 'api', '44fd668433c662ae9c79fdd5145e460c7cd1d2e0b7295a70f1cf0208f025a685', '[\"customer\"]', '2024-06-19 11:26:28', NULL, '2024-06-19 10:05:13', '2024-06-19 11:26:28'),
(59, 'App\\Models\\User', 31, 'api', '855b84bc6753803e81b514f51fe468512eb50e17dfb9561c96e73daf0c4f481b', '[\"customer\"]', '2024-06-19 10:10:20', NULL, '2024-06-19 10:10:07', '2024-06-19 10:10:20'),
(60, 'App\\Models\\User', 32, 'api', 'ec6e4746b4fe9b84a23d017870e806a4088aba23afe3a3c191707c1281c28760', '[\"customer\"]', '2024-06-19 10:14:19', NULL, '2024-06-19 10:13:24', '2024-06-19 10:14:19'),
(61, 'App\\Models\\User', 33, 'api', '54c9a9cc62319b136bd6e799e8b5df0d31fac5bd204e5873a0a64805ac056a36', '[\"customer\"]', '2024-06-19 10:19:21', NULL, '2024-06-19 10:18:00', '2024-06-19 10:19:21'),
(62, 'App\\Models\\User', 34, 'api', '39ebe09146cdaa811a1e6ecaa8efd82fc8d72f5a58b7efd80993879702dc4f10', '[\"customer\"]', '2024-06-19 10:23:42', NULL, '2024-06-19 10:22:09', '2024-06-19 10:23:42'),
(63, 'App\\Models\\User', 35, 'api', 'f83e636dcf5acd00e52d09324680b6d062aa68adc5396224f0298c97c775a7c1', '[\"customer\"]', '2024-06-19 10:31:57', NULL, '2024-06-19 10:31:48', '2024-06-19 10:31:57'),
(64, 'App\\Models\\User', 36, 'api', '7f3aa50a2415904b1766b6328e2fa08012a8ec3335033be8de4805eb66df119c', '[\"customer\"]', '2024-06-19 11:25:55', NULL, '2024-06-19 11:24:02', '2024-06-19 11:25:55'),
(65, 'App\\Models\\User', 37, 'api', '6dba08bb04a0061631047a1747e6e009215930ada28674b5baf68d88999b918d', '[\"customer\"]', '2024-06-19 11:34:57', NULL, '2024-06-19 11:34:40', '2024-06-19 11:34:57'),
(66, 'App\\Models\\User', 38, 'api', '43dd1176310c2dc6faf2b27aa995c289dcee715d321f06d04fac6d7de02c2f6d', '[\"customer\"]', '2024-06-19 11:41:13', NULL, '2024-06-19 11:39:25', '2024-06-19 11:41:13'),
(67, 'App\\Models\\User', 39, 'api', 'efd25f0f2643de35b34a40536d8ea1b5245afc00b90f0f312ee5134133c7ee90', '[\"customer\"]', '2024-06-19 11:45:52', NULL, '2024-06-19 11:45:39', '2024-06-19 11:45:52'),
(68, 'App\\Models\\User', 40, 'api', '0f13d5f6e92127ecd799ac10e75cc7959a847431b024d4049af7508e8f092da3', '[\"customer\"]', '2024-06-19 11:53:34', NULL, '2024-06-19 11:52:40', '2024-06-19 11:53:34'),
(69, 'App\\Models\\User', 41, 'api', 'f589bf49a85e6888d36fdf1eb26fb2a0673ac6ec0dc11e952e5c815541685bad', '[\"customer\"]', '2024-06-19 11:58:10', NULL, '2024-06-19 11:57:55', '2024-06-19 11:58:10'),
(70, 'App\\Models\\User', 42, 'api', '9b4da427c166533c0536dad048264a98ce0e8a6f07cbfb567238da95e4af3cfb', '[\"customer\"]', '2024-06-19 12:02:05', NULL, '2024-06-19 12:01:46', '2024-06-19 12:02:05'),
(71, 'App\\Models\\User', 43, 'api', '6f0dfa147c08edee301ed69f1d7b8f3e2e626b17cfa66d7a517911727fe2f87e', '[\"customer\"]', '2024-06-19 12:07:44', NULL, '2024-06-19 12:05:01', '2024-06-19 12:07:44'),
(72, 'App\\Models\\User', 44, 'api', '4c0edf442e080f30a6503b46c7bae2a29e572628ccc7cb9ef4e1d2ea36fcf4d0', '[\"customer\"]', NULL, NULL, '2024-06-19 12:12:05', '2024-06-19 12:12:05'),
(73, 'App\\Models\\User', 45, 'api', 'e79a109e7e822e194bc97ef77748f3406b2d3e674b83203d9d2498a5d6c70609', '[\"customer\"]', '2024-06-19 12:28:19', NULL, '2024-06-19 12:27:48', '2024-06-19 12:28:19'),
(74, 'App\\Models\\User', 46, 'api', '8bb85cb2a9109eb2e1510dfa54069321f9b4c11adc6d7a9390c727b8532e0870', '[\"customer\"]', NULL, NULL, '2024-06-19 12:37:31', '2024-06-19 12:37:31'),
(75, 'App\\Models\\User', 47, 'api', '13e916fe87fea4ffb147154fdbd63fef12d5312ecddbc2be8632e0d4f7c1ac53', '[\"customer\"]', NULL, NULL, '2024-06-19 12:42:08', '2024-06-19 12:42:08'),
(76, 'App\\Models\\User', 48, 'api', 'ccaa4b58d7deb7f9d57ab82989c9b33132726327123d95a32e52b310e7720b17', '[\"customer\"]', '2024-06-19 12:44:43', NULL, '2024-06-19 12:43:23', '2024-06-19 12:44:43');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` bigint UNSIGNED NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `old_price` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `current_price` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `qty` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `main_image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `others_images` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `sizes` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `colors` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `category_id`, `product_name`, `old_price`, `current_price`, `qty`, `main_image`, `others_images`, `sizes`, `colors`, `description`, `short_description`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'iphone 13', '130000', '115000', '5', 'http://192.168.1.4:8000/uploads/mainimage/Samsung-Galaxy-S20-tabiblib-sang.flutterflow.app (5).png', '', '80', 'GOLD ', 'BEST PHONE IPHONE', 'BEST PHONE WITH BEST PRICE FOR BENAMOUR', 'YES', NULL, NULL),
(2, 1, 'iphone 12', '9000', '4500', '5', 'http://192.168.1.4:8000/uploads/mainimage/Samsung-Galaxy-S20-tabiblib-sang.flutterflow.app (5).png', 'http://192.168.1.6:8000/uploads/mainimage/Samsung-Galaxy-S20-tabiblib-sang.flutterflow.app (5).png', 'xl,m,xxl,l', 'red,blue', '<h1>ddd wah</h1>', 'bonjour je m\'appele ali et je suis un developpeur', 'YES', '2024-06-03 20:45:52', '2024-06-03 20:45:52');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Nom de l\'utilisateur', 'utilisateur@example.com', NULL, '$2y$10$KVb4Yp./l4Y8cLe983mepedXeTGiBU33t9PCKbj.lnijLKEZMl08S', NULL, '2024-06-03 17:01:54', '2024-06-03 17:01:54'),
(2, 'John Doe', 'johndoe@example.com', NULL, '$2y$10$YUBq/PgdKcdvOByJnFj2r.jApm0R3Q4xwsy1CrScDeyQMKuyu0Czy', NULL, '2024-06-03 18:04:20', '2024-06-03 18:04:20'),
(3, 'ali ali', 'ali@gmail.com', NULL, '$2y$10$ctPVwUUbwX22nc94IgqygOnf3sewNY4qr/cIpsCK2cocvJGTxAlrq', NULL, '2024-06-03 19:04:42', '2024-06-03 19:04:42'),
(4, 'bah', 'ali1@gmail.com', NULL, '$2y$10$RaVlVwnjoOk6Ou1kiwnUO.XbOHeUWAEuL59CeacdctLwjM4SSI4wa', NULL, '2024-06-06 16:33:22', '2024-06-06 16:33:22'),
(5, 'barh', 'ali1e@gmail.com', NULL, '$2y$10$p06QQClpm4aHl1SQIFONKey3fPhAmVjMMqyTqRJ8mMConNVgGwS8q', NULL, '2024-06-11 09:41:30', '2024-06-11 09:41:30'),
(6, 'ali', 'alli@gmail.com', NULL, '$2y$10$baV3gbFISj8KzpHDw0mfdObyH5lcUYq1RKHoGnfNpDKPfn4cdFCCi', NULL, '2024-06-14 22:53:16', '2024-06-14 22:53:16'),
(7, 'mohamed', 'mohamed@gmail.com', NULL, '$2y$10$waBYfsAmmMg/B8w5UxdW2eKYFp20v1jss/ObF.xlL53frwa2gmHd6', NULL, '2024-06-14 22:55:47', '2024-06-14 22:55:47'),
(8, 'mohmed', 'haithemm@gmail.com', NULL, '$2y$10$Pmt8fQhwDCcxuEnO.G.CFudS1FGBs9T3HZb8qfoehlGEywe9WwmAi', NULL, '2024-06-14 23:00:21', '2024-06-14 23:00:21'),
(9, 'barh', 'ali1es@gmail.com', NULL, '$2y$10$BZAm2QbEb3oy1/4Swr.OdusQXaQMl4pGnrmMDHxN42bYWd5D.mMtK', NULL, '2024-06-14 23:02:49', '2024-06-14 23:02:49'),
(10, 'mohamedd', 'alilo@gmail.com', NULL, '$2y$10$NpzTOYdfr3Y8dinY5uzXCepNGf3hbN4hObVEnvgPnRjeScCLYkX/m', NULL, '2024-06-14 23:06:29', '2024-06-14 23:06:29'),
(11, 'lion', 'lolo@gmail.com', NULL, '$2y$10$JY91eMbDYQIqAHZGQ6UF1eAY00Cj0IwRzdBtepJiibZg1JsYyfqbq', NULL, '2024-06-14 23:12:44', '2024-06-14 23:12:44'),
(12, 'alll', 'alilou@gmail.com', NULL, '$2y$10$lxs8h0TwSCKNcdm14Knv1.U37/63MFcdw03ugDVKD4TwM69kdxD1u', NULL, '2024-06-14 23:17:54', '2024-06-14 23:17:54'),
(13, 'haithem', 'haithem@gmail.com', NULL, '$2y$10$GTlVG/w7BaPeS.dDn4aVAu1RNH.kRzJYkRTzJ/bHbGKB4nhXiM8wu', NULL, '2024-06-15 10:42:27', '2024-06-15 10:42:27'),
(14, 'haha', 'haha@gmail.com', NULL, '$2y$10$wbMxxhL/e4LkOs9KOkYjwOJ3RwtpJf6s31gt3NxK5TPeSH3MO3mbi', NULL, '2024-06-15 10:53:01', '2024-06-15 10:53:01'),
(15, 'mo', 'kokolo@gmail.com', NULL, '$2y$10$LX2zAw9jFK/ptQyH71oPY.nohDbZynvZMzcZfXfFXifSLy5JQ8e4e', NULL, '2024-06-15 11:44:45', '2024-06-15 11:44:45'),
(16, 'trest', 'test@gmail.com', NULL, '$2y$10$j.qLi.vR/m6kEt5Tv6M8deLTEtg6YZ55WUuF9.csgIc4xlVEMdNZe', NULL, '2024-06-15 11:54:18', '2024-06-15 11:54:18'),
(17, 'foofo', 'mohamedkor@gmail.com', NULL, '$2y$10$VlW6QhGvvSBwYx7gn3oJTeIU.KyRIvpG2L3U9X6udRkgUn7yp905C', NULL, '2024-06-17 14:28:13', '2024-06-17 14:28:13'),
(18, 'dede', 'dede@gmail.com', NULL, '$2y$10$gQMapre7wY5RnNFbGZxEFOJmRI5b9lAkLSjBGhlbHalgVuo5iE4IO', NULL, '2024-06-17 14:31:58', '2024-06-17 14:31:58'),
(19, 'pisko', 'pisko@gmail.com', NULL, '$2y$10$kbJNGjKbgu8LXrrsRJZG1Ol/xoNwzMNyUoUB8kRRKkY8xnqfjbfqW', NULL, '2024-06-17 14:43:32', '2024-06-17 14:43:32'),
(20, 'moko', 'alih@gmail.com', NULL, '$2y$10$XwRT7sXRp31LD2f/BTo2ye/OtONKFiRKmSBLQFJdNPZQVFPEiTbHq', NULL, '2024-06-17 14:48:11', '2024-06-17 14:48:11'),
(21, 'koko', 'gogog@gmail.com', NULL, '$2y$10$RQWeY/LvvTzhGfIQwNxGNObFLgtjT/i2jzWJtpHEF5aSFO06mDciu', NULL, '2024-06-19 08:36:21', '2024-06-19 08:36:21'),
(22, 'lolo', 'lolol@gmail.com', NULL, '$2y$10$L6TOp7iduwHntAwnZ2lBJeJfMwgx./GCdVX5j6ZUD/qxzzWZwUbvG', NULL, '2024-06-19 08:42:16', '2024-06-19 08:42:16'),
(23, 'dzdz', 'dzdz@gmail.com', NULL, '$2y$10$nqJcX0PctnEUlnDppguHieArYDa6fmpbPvHIk2QXPn3qQ8.wvrrlS', NULL, '2024-06-19 08:45:45', '2024-06-19 08:45:45'),
(24, 'dodo', 'dodo@gmail.com', NULL, '$2y$10$LuhcztCaz7AwxCcW7hE76.jXEMKTj6asGyLt3EKOSgejVWcS/Rypu', NULL, '2024-06-19 09:11:45', '2024-06-19 09:11:45'),
(25, 'dodo', 'dvodo@gmail.com', NULL, '$2y$10$oWKQC3kw58QwVUEAy2xBeucrlhirmxi6rewuHPNMBD8BRoDU4DX2K', NULL, '2024-06-19 09:12:15', '2024-06-19 09:12:15'),
(26, 'asas', 'assa@gmail.com', NULL, '$2y$10$yTLcro8T3NLwrtO9iZD6DOsGGHAzMiW0gFscV9zZ6vV0fUoSp0EQ2', NULL, '2024-06-19 09:19:31', '2024-06-19 09:19:31'),
(27, 'kokolo', 'doko@gmail.com', NULL, '$2y$10$Ks7c8ByicEbSN8zCXEifq.Z721Ez71G8hj3BvezdxhAWjcR/hWsy2', NULL, '2024-06-19 09:48:20', '2024-06-19 09:48:20'),
(28, 'koko', 'koko@gmail.com', NULL, '$2y$10$PfpyMmcGhi8Jz4x0QxftLu55qRj0dhsFrmtqZPg0BhCrsYWp2UGwG', NULL, '2024-06-19 09:50:52', '2024-06-19 09:50:52'),
(29, 'cc', 'ccdcdcd@gmail.com', NULL, '$2y$10$6ewEDfsp0cki6YeFWfUz../bgF.fjC1H7ofBlu8nFtSbwWs/57u6W', NULL, '2024-06-19 10:00:46', '2024-06-19 10:00:46'),
(30, 'koko', 'aldih@gmail.com', NULL, '$2y$10$tOXdCZQJgSF/Qh0dmhpdhOMPWXKwqJbRwn57BiNwBawqDvC8J6ZM.', NULL, '2024-06-19 10:05:13', '2024-06-19 10:05:13'),
(31, 'pesko', 'zekosk@gmzi.com', NULL, '$2y$10$qNCeGy5NTBVcxYlij.w1ceoXf1Nhw3Hjl4Gbh09VpDQwXy8YE9tLm', NULL, '2024-06-19 10:10:07', '2024-06-19 10:10:07'),
(32, 'koqs,o', 'ookqsoko@gmail.com', NULL, '$2y$10$z3dk7R8PiNfbStZHMCqiI.VEyIpFwzieeDQ0AcbiRgaLXgJ0680RK', NULL, '2024-06-19 10:13:24', '2024-06-19 10:13:24'),
(33, 'mozeosjoi', 'msdklmj@gmail.com', NULL, '$2y$10$tQ/IU4zXPLSK.vDHJklAz.gTNMx6dugaPLRjjKEVw2.WnEaXSZjFy', NULL, '2024-06-19 10:18:00', '2024-06-19 10:18:00'),
(34, 'hfdrhf', 'ehsdg1@gmail.com', NULL, '$2y$10$TRkXFLDC7sbJ7X1NbF05S.SCSkh0eXhp9h277UATTJETWrlLPtRqW', NULL, '2024-06-19 10:22:09', '2024-06-19 10:22:09'),
(35, 'kors', 'kpdsjfidjgl@gmail.com', NULL, '$2y$10$av0pQ2Kh1iS98BnRP/vgiuMJJ2bF/d/Btw0yxu/s39UCxYnez9H5m', NULL, '2024-06-19 10:31:48', '2024-06-19 10:31:48'),
(36, 'sqoko', 'okqoswk@gmaol.com', NULL, '$2y$10$nswPdH5qx0huQnDi4o1PHePpyJawy1zfXyip569GPR2fOLvwe/o3.', NULL, '2024-06-19 11:24:02', '2024-06-19 11:24:02'),
(37, 'knknk', 'kjkjkj@gmail.com', NULL, '$2y$10$JgJD3nEsKHdfFHEgK6WDzuMlsy8QzU9T1GVBsSKRAHjgMoZ9lYzhK', NULL, '2024-06-19 11:34:40', '2024-06-19 11:34:40'),
(38, 'koko', 'kokok@gmail.com', NULL, '$2y$10$wsqDVf4LX.szHhn5OERZMuV/kDYCoQWzdvfEueIGXvplMyE8TJ/Qu', NULL, '2024-06-19 11:39:25', '2024-06-19 11:39:25'),
(39, 'dxbxdv', 'fxbxdx@gmail.cm', NULL, '$2y$10$iSGXjWNH17S5aiVENecXru21Rn1uQffvJQSZhPe26sG0oTp6QA9ge', NULL, '2024-06-19 11:45:39', '2024-06-19 11:45:39'),
(40, 'scsscscscsc', 'cscsc@gmail.com', NULL, '$2y$10$Pv.WDU4By6J8ykEjmJwsTesuyAuyozB0.IJ1L1qxz.CdLPN0znZ7q', NULL, '2024-06-19 11:52:40', '2024-06-19 11:52:40'),
(41, 'fdfsdfr', 'redgf@gmail.com', NULL, '$2y$10$74rcNYVqyd7jnBKDyhwboeBcFv3pyt74.tNxn/NbvuyabBYfYcf/a', NULL, '2024-06-19 11:57:55', '2024-06-19 11:57:55'),
(42, 'gdndbdv', 'fdbdsd@gmail.com', NULL, '$2y$10$OejAn.0tSo49xi4RIGE7DeefyjYqG7HqQLDEjE4zrDJWZNQrVhqJy', NULL, '2024-06-19 12:01:46', '2024-06-19 12:01:46'),
(43, 'fdfsd', 'dvcdscs@gmail.com', NULL, '$2y$10$gHsjUl.eGF6T972YyFMueem6aesnLCXOUhLD2jXBfw9jS73mCB.YW', NULL, '2024-06-19 12:05:01', '2024-06-19 12:05:01'),
(44, 'oqkosko', 'kqskl@mail.com', NULL, '$2y$10$o28LGANKvJKHVjyUmuEPpe17w1LEtSv3JlGiNzasMOkjTr5g/twE.', NULL, '2024-06-19 12:12:05', '2024-06-19 12:12:05'),
(45, 'koezoko', 'kazodk@gmail.com', NULL, '$2y$10$sApfgqpM2YXi2bn3pIvUueaHB9vHgw2luEQDQpjNu6QvAwtQtI1q6', NULL, '2024-06-19 12:27:48', '2024-06-19 12:27:48'),
(46, 'dqfkjkjk', 'jkjkjk@gmail.com', NULL, '$2y$10$b6hFv8aZZ5hdIFsgPB/paeKSuKPHhuxJ0DFWkL5RnhGnqspbpv6zm', NULL, '2024-06-19 12:37:31', '2024-06-19 12:37:31'),
(47, 'jijijij', 'jijijji@gmail.com', NULL, '$2y$10$aR8LPCMOo9HradV7l6cO6e5pvvjmFIlngZMnE4ksveKDXezKPvmyG', NULL, '2024-06-19 12:42:08', '2024-06-19 12:42:08'),
(48, 'jjijij', 'jijiji@gmail.com', NULL, '$2y$10$9J2fW/2XglNnWS8LadAe6uF217MCsPISoJefdkAanrw7mi3QaF6vm', NULL, '2024-06-19 12:43:23', '2024-06-19 12:43:23');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
