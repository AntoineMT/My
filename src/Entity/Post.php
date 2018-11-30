<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * Post
 *
 * @ORM\Table(name="post")
 * @ORM\Entity
 */
class Post
{
    /**
     * @var int
     *
     * @ORM\Column(name="ID", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="string", length=255, nullable=false)
     */
    private $img;

    /**
     * @var string|null
     *
     * @ORM\Column(name="desc", type="text", length=0, nullable=true)
     */
    private $desc;

    /**
     * @var int|null
     *
     * @ORM\Column(name="commentId", type="integer", nullable=true)
     */
    private $commentid;

    public function getId(): int
    {
        return $this->id;
    }

    public function getImg(): string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getDesc(): string
    {
        return $this->desc;
    }

    public function setDesc(string $desc): self
    {
        $this->desc = $desc;

        return $this;
    }

    public function getCommentid(): int
    {
        return $this->commentid;
    }

    public function setCommentid(int $commentid): self
    {
        $this->commentid = $commentid;

        return $this;
    }


}
