<?php

namespace app\Models;
use app\Models\Conection;

    class Noticias extends Conection{
        protected $table = 'noticias';
        protected $id = 'id_noticia';

        //metodos que a mi parecer corresponden a la tabla noticias
        //y no servirian como metodos reflexivos
        function findCategory($categoria){
            $sql = "SELECT * FROM $this->table WHERE categoria = '$categoria'";
            return $this->query($sql)->get();
        }
    }
    
    

?>