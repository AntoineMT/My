<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;


class DefaultController extends AbstractController
{
    
    public function indexAction()
    {
        
            $em = $this->getDoctrine()->getManager(); 
            $qb = $em->createQueryBuilder();     
            $infos = $qb->select('p.id, p.img, p.desc')
            ->from('App:Post', 'p');
            $infos= $qb->getQuery()->getResult();
//            var_dump($infosUser);die('eee');
        
              return $this->render('default/index.html.twig', [
                'POST' => $infos,
        ]);
        
        
    }
    
    public function navbarAction()
    {
        return $this->render('default/navbar.html.twig');
    }
}