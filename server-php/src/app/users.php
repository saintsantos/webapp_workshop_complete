<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->group('/user', function () use ($app) {

  //public function getUsers(Request $request, Response $response) {
  $app->get('/', function(Request $request, Response $response) {
      $this->logger->addInfo("Grabbing all files from the backend");
      $files = $this->db->query("SELECT * from users");
      $result = array();
      foreach( $files as $row) {
        //print_r($row["username"]);
        $file = array(
          'id' => (int)$row["id"],
          'username' => $row["username"]
        );
        array_push($result, $file);
      }
      $json = json_encode($result, JSON_PRETTY_PRINT);
      $this->logger->addInfo("All users sent to frontend");
      return $json;
  });

  // Receive file upload
  $app->post('/', function(Request $request, Response $response) {
    $body = $request->getParsedBody();
    $username = $body["username"];
    $user = $this->db->query("INSERT into users (id, username) values (default, '$username')");
  });

  // Update a file in our table
  $app->get('/{id}', function(Request $request, Response $response) {
    $this->logger->addInfo("Updating audio file");
    $id = $request->getAttribute('route')->getArgument('id');
    $file = $this->db->query("SELECT * from users where id=$id");
    $users = NULL;
    foreach( $file as $row) {
      $user = array(
        'id' => (int)$row["id"],
        'username' =>$row["username"]
      );
      $users = $user;
    }
    $result = json_encode($users, JSON_PRETTY_PRINT);
    return $result;
  });
});

 ?>
