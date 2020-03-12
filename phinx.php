<?php
require_once __DIR__.'/vendor/autoload.php';
$db=require_once __DIR__.'/src/Model.php';
use Demolidor\Model;
use Dotenv\Dotenv;

Dotenv::createImmutable(__DIR__)->load();

$Model=new Model($_ENV);
$pdo = $Model->db->pdo;
$migrationPath = $_ENV['SITE_ROOT'].'/table';
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
