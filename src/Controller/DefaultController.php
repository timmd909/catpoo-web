<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
  public function index()
  {
    return $this->render('index.html.twig');
  }

  private function ipAddress($interface)
  {
    $output = shell_exec("ip address show $interface | grep -oP 'inet (\d+\.)+\d+' | sed 's/inet//g'");
    return $output;
  }

  public function info()
  {
    $data = [
      'nics' => [
        ['device' => 'eth0',    'ipAddress' => $this->ipAddress('eth0')],
        ['device' => 'wlan0',   'ipAddress' => $this->ipAddress('wlan0')],
        ['device' => 'wlan1',   'ipAddress' => $this->ipAddress('wlan1')],
      ],
    ];
    return $this->render('partial/info.html.twig', $data);
  }

}
