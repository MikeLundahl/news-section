<?php

namespace Mbl\NewsSection\controllers;

use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class NewsEngineController implements RequestHandlerInterface
{

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $url = 'https://godotengine.org/rss.json';
        $response = file_get_contents($url);
        $data = json_decode($response, true);

        if ($response === false) {
            throw new \Exception('Failed to fetch news from Godot Engine');
        }


        return new JsonResponse($data);
    }
}
