<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home', ['title' => '']);
});

Route::get('/about', function () {
    return view('about', ['title' => 'ABOUT']);
});

Route::get('/blog', function () {
    return view('blog', ['title' => 'BLOG']);
});

Route::get('/contact', function () {
    return view('contact', ['title' => 'CONTACT']);
});


