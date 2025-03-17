<?php

use lib\Route;
use app\Controllers\HomeController;
use app\Models\Noticias;

Route::get('/',[ HomeController::class, 'index']
);

Route::get('/noticias', [ Noticias::class, 'all']);

Route::get('/noticiasultima', [ Noticias::class, 'last']);

Route::get('/noticiaId/:id', [ Noticias::class, 'find']);

Route::post('/noticiaInsert', [ Noticias::class, 'insert']);

Route::put('/noticiaUpdate/:id', [ Noticias::class, 'update']);

//ejemplo de pasaje de parametros
Route::get('/contact/:slug', function($slug){
    return ['title'=>$slug,'content'=> "Pagina de Contacto"];
});

Route::dispatch();


?>