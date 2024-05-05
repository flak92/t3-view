<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('t3view', 'Configuration/TypoScript/', 'AWS EC2 t3view-Package');
