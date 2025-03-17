<?php

    namespace lib;

    class Route{

        public static $routes = [];

        public static function get($uri, $callback){
            $uri = trim($uri,'/');
            self::$routes['GET'][$uri] = $callback;
        }

        public static function post($uri, $callback){
            $uri = trim($uri,'/');
            self::$routes['POST'][$uri] = $callback;
        }

        public static function put($uri, $callback){
            $uri = trim($uri,'/');
            self::$routes['PUT'][$uri] = $callback;
        }

        public static function dispatch(){
            //con esto tomo la uri ingresada por el navegador
            $uri = $_SERVER['REQUEST_URI'];

            //con esto elimino los / de la uri
            $uri = trim($uri,'/');

            //recorro la matriz buscando la ruta guardada que coincinda
            //con la uri ingresada utilizando $SERVER parar recuperar el
            //metodo y buscar en la fila correspondiente
            $method = $_SERVER['REQUEST_METHOD'];

            foreach (self::$routes[$method] as $route => $callback) {

                //Si la ruta tiene parametros que comienzan con ':' los reemplazo
                //por una expresion regular que coincida con cualquier cadena
                if(strpos($route,':')!==false){
                    $route = preg_replace('#:[a-zA-Z]+#','([a-zA-Z0-9]+)',$route);
                }

                //Si la ruta coincide con la uri ingresada creo un array con los
                //parametros que se pasaran a la funcion callback
                if(preg_match("#^$route$#", $uri, $matches)){
                    $params = array_slice($matches, 1);

                    if(is_callable($callback)){
                        $respone = $callback(...$params);   
                    }else{
                        $controller = new $callback[0];
                        $respone = $controller->{$callback[1]}(...$params);
                    }
                
                    //Si la respuesta es un array o un objeto lo convierto a json

                    if(is_array($respone) || is_object($respone)){
                        header('Content-Type: application/json');
                        echo json_encode($respone);
                    return;
                }
                echo $respone;
                return;
            }
            }
            //Si la busqueda no coincide con ninguna ruta...
            echo '404 NOT FOUND <br> No se encontro la página que busca';
        }
    }

?>