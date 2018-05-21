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

  public function rotate($d)
  {
    error_log("rotate($d)");
    $output = shell_exec(sprintf('catpoo_controller rotate %d', $d));
    return new Response($output);
  }

  public function translate($x, $y)
  {
    error_log("translate($x, $y)");
    $output = shell_exec(sprintf('catpoo_controller translate %d %d', $x, $y));
    return new Response($output);
  }

  public function reset()
  {
    error_log("reset()");
    $output = shell_exec('/usr/local/bin/catpoo_controller reset');
    return new Response($output);
  }

  public function restartMotion()
  {
    error_log("restartMotion()");
    $output = shell_exec('sudo /usr/local/sbin/restart-motion-service');
    return new Response("Motion Service Restarting\n$output");
  }
}
