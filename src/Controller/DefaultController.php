<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class DefaultController
{
    
    public function indexAction()
    {
        echo('vous etes sur INDEX');
         
        return $this->render('default/index.html.twig', [
        ]);
    }
}