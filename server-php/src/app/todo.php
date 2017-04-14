<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->group('/todo', function () use ($app) {

  // Get the entire week
  $app->get('/', function(Request $request, Response $response) {
    $this->logger->addInfo("Grabbing all events from a singe day");
    $tasklist = $this->db->query("SELECT * from tasks");
    $tasks = array();
    foreach($tasklist as $row) {
      $task = array(
        'id' => (int)$row["id"],
        'task' => $row["task"],
        'created_by' => (int)$row["created_by"]
      );
      array_push($tasks, $task);
    }
    $json = json_encode($tasks, JSON_PRETTY_PRINT);
    $this->logger->addInfo("Tasks grabbed!");
    return $json;

  });

  // Add a task
  $app->post('/{id}', function(Request $request, Response $response) {
    //We gonna get the fill shit from the JSON object
    $id = $request->getAttribute('route')->getArgument('id');
    $this->logger->addInfo("Adding a task");
    $body = $request->getParsedBody();
    $task = $body["task"];
    //print_r($timeDay);
    $add = $this->db->query("INSERT into tasks (id, task, created_by) values (default, '$task', $id)");

  });

  // Update a task
  $app->put('/{id}', function(Request $request, Response $response) {
    // Get the shit to update the event from the JSON object
    $id = $request->getAttribute('route')->getArgument('id');
    $this->logger->addInfo("Updating event id=$id");
    $body = $request->getParsedBody();
    $timeDay = $body["timeDay"];
    $file_id = $body["file_id"];
    $day = $body["day"];
    $events = $this->db->query("UPDATE events set timeDay='$timeDay', file_id=$file_id, day='$day' where id=$id");
  });

  // Grab tasks from a specific user
  $app->get('/{id}', function(Request $request, Response $response) {
    // Get the shit to update the event from the JSON object
    $id = $request->getAttribute('route')->getArgument('id');
    $this->logger->addInfo("Updating event id=$id");
    $tasklist = $this->db->query("SELECT * from tasks where id=$id");
    $tasks = array();
    foreach($tasklist as $row) {
      $task = array(
        'id' => (int)$row["id"],
        'task' => $row["task"],
        'created_by' => (int)$row["created_by"]
      );
      array_push($tasks, $task);
    }
    $json = json_encode($tasks, JSON_PRETTY_PRINT);
    $this->logger->addInfo("Tasks grabbed!");
    return $json;
  });

  // Get active tasks
  $app->get('/{id}/active', function(Request $request, Response $response) {
    // Get the shit to update the event from the JSON object
    $id = $request->getAttribute('route')->getArgument('id');
    $this->logger->addInfo("Updating event id=$id");
    $tasklist = $this->db->query("SELECT * from tasks where id=$id and status='active'");
    $tasks = array();
    foreach($tasklist as $row) {
      $task = array(
        'id' => (int)$row["id"],
        'task' => $row["task"],
        'created_by' => (int)$row["created_by"]
      );
      array_push($tasks, $task);
    }
    $json = json_encode($tasks, JSON_PRETTY_PRINT);
    $this->logger->addInfo("Tasks grabbed!");
    return $json;
  });





});

 ?>
