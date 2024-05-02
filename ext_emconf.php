<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'T3-View',
    'description' => 'Frontend-Package for TYPO3 v11',
    'category' => 'templates',
    'author' => 'Pawel Flak',
    'author_email' => 'Flakpaw@gmail.com',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '11.0.0-11.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
