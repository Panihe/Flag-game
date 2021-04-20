-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2021 a las 20:52:55
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `world`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`ID`, `Name`) VALUES
(1, 'África'),
(2, 'América'),
(3, 'Asia'),
(4, 'Europa'),
(5, 'Oceanía');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flags`
--

CREATE TABLE `flags` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `category_id` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `flags`
--

INSERT INTO `flags` (`ID`, `Name`, `Image`, `category_id`) VALUES
(1, 'Angola', '', 1),
(2, 'Argelia', '', 1),
(3, 'Benín', '', 1),
(4, 'Botsuana', '', 1),
(5, 'Burkina Faso', '', 1),
(6, 'Burundi', '', 1),
(7, 'Cabo Verde', '', 1),
(8, 'Camerún', '', 1),
(9, 'Chad', '', 1),
(10, 'Comoras', '', 1),
(11, 'Costa de Marfil', '', 1),
(12, 'Egipto', '', 1),
(13, 'Eritrea', '', 1),
(14, 'Esuatini', '', 1),
(15, 'Gabón', '', 1),
(16, 'Gambia', '', 1),
(17, 'Ghana', '', 1),
(18, 'Guinea', '', 1),
(19, 'Guinea Ecuatorial', '', 1),
(20, 'Guinea Bisáu', '', 1),
(21, 'Kenia', '', 1),
(22, 'Lesoto', '', 1),
(23, 'Liberia', '', 1),
(24, 'Libia', '', 1),
(25, 'Madagascar', '', 1),
(26, 'Malaui', '', 1),
(27, 'Mali', '', 1),
(28, 'Marruecos', '', 1),
(29, 'Mauricio', '', 1),
(30, 'Mauritania', '', 1),
(31, 'Mozambique', '', 1),
(32, 'Namibia', '', 1),
(33, 'Níger', '', 1),
(34, 'Nigeria', '', 1),
(35, 'República Centroafricana', '', 1),
(36, 'República del Congo', '', 1),
(37, 'RD Congo', '', 1),
(38, 'Ruanda', '', 1),
(39, 'Sahara Occidental', '', 1),
(40, 'Santo Tomé y Príncipe', '', 1),
(41, 'Senegal', '', 1),
(42, 'Seychelles', '', 1),
(43, 'Sierra Leona', '', 1),
(44, 'Somalia', '', 1),
(45, 'Somalilandia', '', 1),
(46, 'Sudáfrica', '', 1),
(47, 'Sudán', '', 1),
(48, 'Sudán del Sur', '', 1),
(49, 'Tanzania', '', 1),
(50, 'Togo', '', 1),
(51, 'Túnez', '', 1),
(52, 'Uganda', '', 1),
(53, 'Yibuti', '', 1),
(54, 'Zambia', '', 1),
(55, 'Zimbaue', '', 1),
(56, 'Antigua y Barbuda', '', 2),
(57, 'Argentina', '', 2),
(58, 'Bahamas', '', 2),
(59, 'Barbados', '', 2),
(60, 'Belice', '', 2),
(61, 'Bolivia', '', 2),
(62, 'Brasil', '', 2),
(63, 'Canadá', '', 2),
(64, 'Chile', '', 2),
(65, 'Colombia', '', 2),
(66, 'Costa Rica', '', 2),
(67, 'Cuba', '', 2),
(68, 'Dominica', '', 2),
(69, 'Ecuador', '', 2),
(70, 'El Salvador', '', 2),
(71, 'Estados Unidos', '', 2),
(72, 'Granada', '', 2),
(73, 'Guatemala', '', 2),
(74, 'Guyana', '', 2),
(75, 'Haití', '', 2),
(76, 'Honduras', '', 2),
(77, 'Jamaica', '', 2),
(78, 'México', '', 2),
(79, 'Nicaragua', '', 2),
(80, 'Panamá', '', 2),
(81, 'Paraguay', '', 2),
(82, 'Perú', '', 2),
(83, 'República Dominicana', '', 2),
(84, 'San Cristobal y Nieves', '', 2),
(85, 'San Vicente y las Granadinas', '', 2),
(86, 'Santa Lucía', '', 2),
(87, 'Surinam', '', 2),
(88, 'Triniddad y Tobago', '', 2),
(89, 'Uruguay', '', 2),
(90, 'Venezuela', '', 2),
(91, 'Afganistán', '', 3),
(92, 'Arabia Saudí', '', 3),
(93, 'Armenia', '', 3),
(94, 'Azerbaiyán', '', 3),
(95, 'Bangladés', '', 3),
(96, 'Baréin', '', 3),
(97, 'Brunéi', '', 3),
(98, 'Bután', '', 3),
(99, 'Camboya', '', 3),
(100, 'Catar', '', 3),
(101, 'China', '', 3),
(102, 'Chipre', '', 3),
(103, 'Corea de Norte', '', 3),
(104, 'Corea del Sur', '', 3),
(105, 'Egipto', '', 3),
(106, 'Emiratos Árabes Unidos', '', 3),
(107, 'Filipinas', '', 3),
(108, 'Georgia', '', 3),
(109, 'India', '', 3),
(110, 'Indonesia', '', 3),
(111, 'Irak/Iraq', '', 3),
(112, 'Irán', '', 3),
(113, 'Israel', '', 3),
(114, 'Japón', '', 3),
(115, 'Jordania', '', 3),
(116, 'Kazajistán', '', 3),
(117, 'Kirguistán', '', 3),
(118, 'kuwait', '', 3),
(119, 'Laos', '', 3),
(120, 'Libano', '', 3),
(121, 'Malasia', '', 3),
(122, 'Maldivas', '', 3),
(123, 'Mongolia', '', 3),
(124, 'Myanmar', '', 3),
(125, 'Nepal', '', 3),
(126, 'Omán', '', 3),
(127, 'Pakistán', '', 3),
(128, 'Palestina', '', 3),
(129, 'Rusia', '', 3),
(130, 'Singapur', '', 3),
(131, 'Siria', '', 3),
(132, 'Sri Lanka', '', 3),
(133, 'Tailandia', '', 3),
(134, 'Taiwán', '', 3),
(135, 'Tayikistán', '', 3),
(136, 'Timor', '', 3),
(137, 'Turkmenistán', '', 3),
(138, 'Turquía', '', 3),
(139, 'Uzbekistán', '', 3),
(140, 'Vietnam', '', 3),
(141, 'Yemen', '', 3),
(142, 'Abania', '', 4),
(143, 'Alemania', '', 4),
(144, 'Andorra', '', 4),
(145, 'Armenia', '', 4),
(146, 'Austria', '', 4),
(147, 'Azerbaiyán', '', 4),
(148, 'Bélgica', '', 4),
(149, 'Bielorrusia', '', 4),
(150, 'Bosnia y Herzegovina', '', 4),
(151, 'Bulgaría', '', 4),
(152, 'Chipre', '', 4),
(153, 'Ciudad del Vaticano', '', 4),
(154, 'Croacia', '', 4),
(155, 'Dinamarca', '', 4),
(156, 'Eslovaquia', '', 4),
(157, 'Eslovenia', '', 4),
(158, 'España', '', 4),
(159, 'Estonia', '', 4),
(160, 'Finlandia', '', 4),
(161, 'Francia', '', 4),
(162, 'Georgia', '', 4),
(163, 'Grecia', '', 4),
(164, 'Hungría', '', 4),
(165, 'Irlanda', '', 4),
(166, 'Islandia', '', 4),
(167, 'Italia', '', 4),
(168, 'Kazajistán', '', 4),
(169, 'Letonia', '', 4),
(170, 'Liechtenstein', '', 4),
(171, 'Lituania', '', 4),
(172, 'Luxemburgo', '', 4),
(173, 'Macedonia', '', 4),
(174, 'Malta', '', 4),
(175, 'Moldavia', '', 4),
(176, 'Mónaco', '', 4),
(177, 'Montenegro', '', 4),
(178, 'Noruega', '', 4),
(179, 'Países Bajos', '', 4),
(180, 'Polonia', '', 4),
(181, 'Portugal', '', 4),
(182, 'Reino Unido', '', 4),
(183, 'República Checa', '', 4),
(184, 'Rumania', '', 4),
(185, 'Rusia', '', 4),
(186, 'San Marino', '', 4),
(187, 'Serbia', '', 4),
(188, 'Suecia', '', 4),
(189, 'Suiza', '', 4),
(190, 'Turquía', '', 4),
(191, 'Ucrania', '', 4),
(192, 'Australia', '', 5),
(193, 'Fiyi', '', 5),
(194, 'Islas Marshall', '', 5),
(195, 'Islas Solomón', '', 5),
(196, 'Kiribati', '', 5),
(197, 'Micronesia', '', 5),
(198, 'Nauru', '', 5),
(199, 'Nueva Zelanda', '', 5),
(200, 'Palaos', '', 5),
(201, 'Papúa Nueva Guinea', '', 5),
(202, 'Samoa', '', 5),
(203, 'Tonga', '', 5),
(204, 'Tuvalu', '', 5),
(205, 'Vanuatu', '', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `flags`
--
ALTER TABLE `flags`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `flags`
--
ALTER TABLE `flags`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `flags`
--
ALTER TABLE `flags`
  ADD CONSTRAINT `flags_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
