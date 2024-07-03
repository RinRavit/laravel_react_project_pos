<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Carbon\Carbon;

class ListOrderController extends Controller
{
    public function index()
    {
        // Get today's date
        $today = Carbon::today();

        // Get orders created today and eager load the user relationship to get the user's name
        $orders = Order::with('user')->whereDate('created_at', $today)->get();
        
        return response()->json($orders);
    }
}
