<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$config['db']['host'] = 'localhost';
$config['db']['user'] = 'root';
$config['db']['pass'] = 'new-password';
$config['db']['dbname'] = 'todo';


$app = new \Slim\App(["settings" => $config]);

require '../app/dependencies.php';
require '../app/users.php';
require '../app/todo.php';

//sheader("Access-Control-Allow-Origin: *");
//header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');


$app->get('/hi', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello!");
    $this->logger->addInfo("Sanity check!");

    return $response;
});

$app->run();
