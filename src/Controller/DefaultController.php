<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class DefaultController extends AbstractController
{
    
    public function indexAction()
    {
        echo('vous etes sur INDEX');
         
        return $this->render('default/index.html.twig');
    }
    
    public function navbarAction()
    {
        return $this->render('default/navbar.html.twig');
    }
}