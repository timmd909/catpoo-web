<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class CommandController
{
  public function list()
  {
    return new Response('Available commands will be displayed here eventually');
  }

  public function command($command)
  {
    return new Response('Executing command: ' . $command);
  }

}
