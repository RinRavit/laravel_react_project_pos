<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Order;
// use App\Models\Product;

// class OrderController extends Controller
// {
//     // public function store(Request $request)
//     // {
//     //     $request->validate([
//     //         'user_id' => 'required|exists:users,id',
//     //         'order_items' => 'required|json',
//     //         'total' => 'required|numeric',
//     //         'payment_method' => 'required|string',
//     //         'currency' => 'required|string',
//     //     ]);

//     //     $order = Order::create($request->all());

//     //     return response()->json(['message' => 'Order placed successfully', 'order' => $order], 201);
//     // }
//     public function store(Request $request)
// {
//     $orderData = $request->validate([
//         'user_id' => 'required|integer',
//         'order_items' => 'required|string',
//         'total' => 'required|numeric',
//         'payment_method' => 'required|string',
//         'currency' => 'required|string',
//     ]);

//     $order = Order::create($orderData);

//     $orderItems = json_decode($orderData['order_items'], true);

//     foreach ($orderItems as $item) {
//         $product = Product::find($item['id']);
//         if ($product) {
//             $product->stock -= $item['quantity'];
//             $product->save();
//         }
//     }

//     return response()->json(['order' => $order], 201);
// }


// }


// order today
// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Order;
// use App\Models\Product;
// use Carbon\Carbon;

// class OrderController extends Controller
// {
//     public function store(Request $request)
//     {
//         $orderData = $request->validate([
//             'user_id' => 'required|integer',
//             'order_items' => 'required|string',
//             'total' => 'required|numeric',
//             'payment_method' => 'required|string',
//             'currency' => 'required|string',
//         ]);

//         $order = Order::create($orderData);

//         $orderItems = json_decode($orderData['order_items'], true);

//         foreach ($orderItems as $item) {
//             $product = Product::find($item['id']);
//             if ($product) {
//                 $product->stock -= $item['quantity'];
//                 $product->save();
//             }
//         }

//         return response()->json(['order' => $order], 201);
//     }

//     public function getTodaySales()
//     {
//         $todaySales = Order::whereDate('created_at', Carbon::today())->sum('total');
//         return response()->json(['totalSales' => $todaySales], 200);
//     }
// }

// order yesterday


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $orderData = $request->validate([
            'user_id' => 'required|integer',
            'order_items' => 'required|string',
            'total' => 'required|numeric',
            'payment_method' => 'required|string',
            'currency' => 'required|string',
        ]);

        $order = Order::create($orderData);

        $orderItems = json_decode($orderData['order_items'], true);

        foreach ($orderItems as $item) {
            $product = Product::find($item['id']);
            if ($product) {
                $product->stock -= $item['quantity'];
                $product->save();
            }
        }

        return response()->json(['order' => $order], 201);
    }
    // Total sell today
    public function getTodaySales()
    {
        $todaySales = Order::whereDate('created_at', Carbon::today())->sum('total');
        return response()->json(['totalSales' => $todaySales], 200);
    }
    // Totall sell yeasterday
    public function getYesterdaySales()
    {
        $yesterdaySales = Order::whereDate('created_at', Carbon::yesterday())->sum('total');
        return response()->json(['totalSales' => $yesterdaySales], 200);
    }
    // Revenue
    public function todayRevenue()
{
    $todayRevenue = Order::whereDate('created_at', today())
        ->get()
        ->flatMap(function ($order) {
            return collect(json_decode($order->order_items, true));
        })
        ->sum(function ($item) {
            $product = Product::find($item['id']);
            return ($product->selling_price - $product->purchase_price) * $item['quantity'];
        });

    return response()->json(['totalRevenue' => $todayRevenue]);
}
public function index()
{
    // Eager load the user relationship to get the user's name
    $orders = Order::with('user')->get();
    return response()->json($orders);
}


}
