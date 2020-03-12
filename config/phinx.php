<?php
$pdo = require 'pdo.php';
$migrationPath = './table';
return [
    'paths' => [
        'migrations' => $migrationPath,
    ],
    'foreign_keys' => false,
    'default_migration_prefix' => 'db_change_',
    'mark_generated_migration' => true,
    'migration_base_class' => \Phinx\Migration\AbstractMigration::class,
    'environments' => [
        'default_database' => 'local',
        'local' => [
            'name' => $pdo->query(
                'select database()'
                )->fetchColumn(),
                'connection' => $pdo,
            ]
        ]
    ];
