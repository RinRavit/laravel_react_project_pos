<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ListOrderController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users', UserController::class);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Categroy
Route::apiResource('categories', CategoryController::class);

// Product
Route::apiResource('products', ProductController::class);

// Order
Route::post('/orders', [OrderController::class, 'store']);
//Totall price today
Route::get('/orders/today-sales', [OrderController::class, 'getTodaySales']);
// Totall price yesterday
Route::get('/orders/yesterday-sales', [OrderController::class, 'getYesterdaySales']);
// Totall revenue
Route::get('/orders/today-revenue', [OrderController::class, 'todayRevenue']);
// Totall Expense
Route::get('/orders/total-expense', [OrderController::class, 'totalExpense']);
Route::get('/orders/revenue-costs', [OrderController::class, 'getRevenueAndCosts']);
Route::get('/orders', [OrderController::class, 'index']); // To fetch all orders


Route::get('/orders/today', [ListOrderController::class, 'index']);
