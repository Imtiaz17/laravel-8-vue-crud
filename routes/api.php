<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(
    [
        'middleware' => 'api',
        'namespace'  => 'App\Http\Controllers',
        'prefix'     => 'auth',
    ],
    function ($router) {
        Route::post('login', 'AuthController@login');
        Route::post('me', 'AuthController@me');
        Route::post('register', 'AuthController@register');
        Route::post('logout', 'AuthController@logout');
    }
);
Route::group(
    [
        'middleware' => 'api',
        'namespace'  => 'App\Http\Controllers',
    ],
    function ($router) {
        Route::resource('product','ProductController');
        Route::resource('category','CategoryController');
        Route::resource('subcategory','SubCategoryController');
        Route::get('getsubcategory','CategoryController@getsubcategory');
        Route::get('search-category','CategoryController@searchCategory');
        Route::get('search-subcategory','SubCategoryController@searchSubCategory');
        Route::get('search-product','ProductController@searchProduct');
    }
);
