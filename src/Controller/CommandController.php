<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CommandController extends Controller
{
  public function list()
  {
    return $this->render('commands.html.twig');
  }

  public function uptime()
  {
    exec('uptime -p', $output, $result);
    $output = implode("\n", $output);
    $output = substr($output, 2);
    return new Response($output);
  }
}
