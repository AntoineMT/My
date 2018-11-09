<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/liste_user", name="listeUser")
     */
    
    public function ListeUser()
    {
            $em = $this->getDoctrine()->getManager(); 
            $qb = $em->createQueryBuilder();     
            $infosUser = $qb->select('p.Userfirstname, p.Usersecondename, p.Usermail , p.Userlogin , p.Userpassword')
            ->from('AppBundle:User', 'p');
            $infosUser= $qb->getQuery()->getResult();
//            $twig->addExtension(new \Twig_Extension_Debug);
           
        return $this->render('user/ListeUser.html.twig', [
             'INFOS' => $infosUser,
        ]);
    }
}
