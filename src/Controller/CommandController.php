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
    exec(sprintf('catpoo_controller rotate %d', $d), $output, $result);
    return new Response(implode("\n", $output));
  }

  public function translate($x, $y)
  {
    error_log("translate($x, $y)");
    exec(sprintf('catpoo_controller translate %d %d', $x, $y), $output, $result);
    return new Response(implode("\n", $output));
  }

  public function reset()
  {
    error_log("reset()");
    exec('catpoo_controller reset', $output, $result);
    return new Response(implode("\n", $output));
  }
}
