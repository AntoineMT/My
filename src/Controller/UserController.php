<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    
    public function index()
    {
        return $this->render('user/index.html.twig', [
        ]);
    }
    
     /**
     * @Route("/user/liste_user", name="listeUser")
     */
    
    public function ListeUser()
    {
        
            $em = $this->getDoctrine()->getManager(); 
            $qb = $em->createQueryBuilder();     
            $infosUser = $qb->select('p.firstname, p.secondename, p.mail , p.login , p.password')
            ->from('App:User', 'p');
            
            $infosUser= $qb->getQuery()->getResult();
//            var_dump($infosUser);die('eee');
           
                return $this->render('user/liste-user.html.twig', [
                'INFOS' => $infosUser,
        ]);
    }
}
