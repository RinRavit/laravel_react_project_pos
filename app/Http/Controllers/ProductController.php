<?php

// namespace App\Http\Controllers;

// use App\Models\Category;
// use App\Models\Product;
// use Illuminate\Http\Request;

// class ProductController extends Controller
// {
//     public function index()
//     {
//         return Product::with('category')->get();
//     }

//     public function store(Request $request)
// {
//     $request->validate([
//         'code' => 'required|unique:products,code',
//         'name' => 'required',
//         'category_id' => 'required|exists:categories,id',
//         'brand' => 'required',
//         'purchase_price' => 'required|numeric',
//         'selling_price' => 'required|numeric',
//         'discount' => 'nullable|numeric',
//         'stock' => 'required|integer',
//     ]);

//     $product = Product::create($request->all());

//     return response()->json($product, 201);
// }

//     public function update(Request $request, Product $product)
//     {
//         $request->validate([
//             'code' => 'required|unique:products,code,' . $product->id,
//             'name' => 'required',
//             'category_id' => 'required|exists:categories,id',
//             'brand' => 'required',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'required|integer',
//         ]);

//         $product->update($request->all());

//         return response()->json($product);
//     }

//     public function destroy(Product $product)
//     {
//         $product->delete();

//         return response()->json(null, 204);
//     }
// }



// namespace App\Http\Controllers;

// use App\Models\Category;
// use App\Models\Product;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Storage;

// class ProductController extends Controller
// {
//     public function index()
//     {
//         return Product::with('category')->get();
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             'code' => 'required|unique:products,code',
//             'name' => 'required',
//             'category_id' => 'required|exists:categories,id',
//             'brand' => 'required',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'required|integer',
//             'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//         ]);

//         if ($request->hasFile('image')) {
//             $imagePath = $request->file('image')->store('images', 'public');
//         } else {
//             $imagePath = null;
//         }

//         $product = Product::create([
//             'code' => $request->code,
//             'name' => $request->name,
//             'category_id' => $request->category_id,
//             'brand' => $request->brand,
//             'purchase_price' => $request->purchase_price,
//             'selling_price' => $request->selling_price,
//             'discount' => $request->discount,
//             'stock' => $request->stock,
//             'image' => $imagePath,
//         ]);

//         return response()->json($product, 201);
//     }

//     public function show(Product $product)
//     {
//         return $product->load('category');
//     }

//     public function update(Request $request, Product $product)
//     {
//         $request->validate([
//             'code' => 'required|unique:products,code,' . $product->id,
//             'name' => 'required',
//             'category_id' => 'required|exists:categories,id',
//             'brand' => 'required',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'required|integer',
//             'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//         ]);

//         if ($request->hasFile('image')) {
//             // Delete old image
//             if ($product->image) {
//                 Storage::disk('public')->delete($product->image);
//             }
//             // Store new image
//             $imagePath = $request->file('image')->store('images', 'public');
//         } else {
//             $imagePath = $product->image;
//         }

//         $product->update([
//             'code' => $request->code,
//             'name' => $request->name,
//             'category_id' => $request->category_id,
//             'brand' => $request->brand,
//             'purchase_price' => $request->purchase_price,
//             'selling_price' => $request->selling_price,
//             'discount' => $request->discount,
//             'stock' => $request->stock,
//             'image' => $imagePath,
//         ]);

//         return response()->json($product);
//     }

//     public function destroy(Product $product)
//     {
//         if ($product->image) {
//             Storage::disk('public')->delete($product->image);
//         }

//         $product->delete();

//         return response()->json(null, 204);
//     }
// }


// code run
// namespace App\Http\Controllers;

// use App\Models\Category;
// use App\Models\Product;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Storage;

// class ProductController extends Controller
// {
//     public function index()
//     {
//         return Product::with('category')->get();
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             // 'code' => 'required|unique:products,code',
//             'code' => 'required|string|max:255|unique:products,code',
//             // 'name' => 'required',
//             'name' => 'required|string|max:255',
//             'category_id' => 'required|exists:categories,id',
//             // 'brand' => 'required',
//             'brand' => 'nullable|string|max:255',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'required|integer',
//             // 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//             'image' => 'nullable|image|max:2048',
//         ]);

//         $data = $request->all();

//         if ($request->hasFile('image')) {
//             $path = $request->file('image')->store('images', 'public');
//             $data['image'] = $path;
//         }

//         // $product = Product::create($data);

//         // return response()->json($product, 201);
//         Product::create($data);

//         return response()->json(['message' => 'Product created successfully']);
//     }

//     public function show(Product $product)
//     {
//         return $product->load('category');
//     }

//     // public function update(Request $request, Product $product)
//     // {
//     //     $request->validate([
//     //         'code' => 'required|unique:products,code,' . $product->id,
//     //         'name' => 'required',
//     //         'category_id' => 'required|exists:categories,id',
//     //         'brand' => 'required',
//     //         'purchase_price' => 'required|numeric',
//     //         'selling_price' => 'required|numeric',
//     //         'discount' => 'nullable|numeric',
//     //         'stock' => 'required|integer',
//     //         'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//     //     ]);

//     //     $data = $request->all();

//     //     if ($request->hasFile('image')) {
//     //         // Delete old image if exists
//     //         if ($product->image) {
//     //             Storage::disk('public')->delete($product->image);
//     //         }
//     //         $path = $request->file('image')->store('images', 'public');
//     //         $data['image'] = $path;
//     //     }

//     //     $product->update($data);

//     //     return response()->json($product);
//     // }
//     public function update(Request $request, Product $product)
// {
//     // 
//     $data = $request->validate([
//         'name' => 'required|string|max:255',
//         'category_id' => 'required|exists:categories,id',
//         'brand' => 'nullable|string|max:255',
//         'purchase_price' => 'required|numeric',
//         'selling_price' => 'required|numeric',
//         'discount' => 'nullable|numeric',
//         'stock' => 'nullable|integer',
//         'image' => 'nullable|image|max:2048',
//         'code' => 'required|string|max:255|unique:products,code,' . $product->id
//     ]);

//     if ($request->hasFile('image')) {
//         if ($product->image) {
//             Storage::disk('public')->delete($product->image);
//         }
//         $path = $request->file('image')->store('images', 'public');
//         $data['image'] = $path;
//     }

//     $product->update($data);

//     return response()->json($product);
// }


//     public function destroy(Product $product)
//     {
//         // Delete image if exists
//         if ($product->image) {
//             Storage::disk('public')->delete($product->image);
//         }

//         $product->delete();

//         return response()->json(null, 204);
//     }
// }




// app/Http/Controllers/ProductController.php

// namespace App\Http\Controllers;

// use App\Models\Product;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Storage;

// class ProductController extends Controller
// {
//     public function index()
//     {
//         return Product::with('category')->get();
//     }

//     public function store(Request $request)
//     {
//         $data = $request->validate([
//             'name' => 'required|string|max:255',
//             'category_id' => 'required|exists:categories,id',
//             'brand' => 'nullable|string|max:255',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'nullable|integer',
//             'image' => 'nullable|image|max:2048',
//             'code' => 'required|string|max:255|unique:products,code'
//         ]);

//         if ($request->hasFile('image')) {
//             $data['image'] = $request->file('image')->store('images', 'public');
//         }

//         Product::create($data);

//         return response()->json(['message' => 'Product created successfully']);
//     }

//     public function show(Product $product)
//     {
//         return $product->load('category');
//     }

//     public function update(Request $request, Product $product)
//     {
//         $data = $request->validate([
//             'name' => 'required|string|max:255',
//             'category_id' => 'required|exists:categories,id',
//             'brand' => 'nullable|string|max:255',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'nullable|integer',
//             'image' => 'nullable|image|max:2048',
//             'code' => 'required|string|max:255|unique:products,code,' . $product->id
//         ]);

//         if ($request->hasFile('image')) {
//             if ($product->image) {
//                 Storage::disk('public')->delete($product->image);
//             }
//             $data['image'] = $request->file('image')->store('images', 'public');
//         }

//         $product->update($data);

//         return response()->json(['message' => 'Product updated successfully']);
//     }

//     public function destroy(Product $product)
//     {
//         if ($product->image) {
//             Storage::disk('public')->delete($product->image);
//         }
//         $product->delete();

//         return response()->json(['message' => 'Product deleted successfully']);
//     }
// }
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        return Product::with('category')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'brand' => 'nullable|string|max:255',
            'purchase_price' => 'required|numeric',
            'selling_price' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'stock' => 'nullable|integer',
            'image' => 'nullable|image|max:2048',
            'code' => 'required|string|max:255|unique:products,code'
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images', 'public');
        }

        Product::create($data);

        return response()->json(['message' => 'Product created successfully']);
    }

    public function show(Product $product)
    {
        return $product->load('category');
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'brand' => 'nullable|string|max:255',
            'purchase_price' => 'required|numeric',
            'selling_price' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'stock' => 'nullable|integer',
            'image' => 'nullable|image|max:2048',
            'code' => 'required|string|max:255|unique:products,code,' . $product->id
        ]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $data['image'] = $request->file('image')->store('images', 'public');
        }

        $product->update($data);

        return response()->json(['message' => 'Product updated successfully']);
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}

// ProductController.php

// namespace App\Http\Controllers;

// use App\Models\Category;
// use App\Models\Product;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Storage;

// class ProductController extends Controller
// {
//     public function index()
//     {
//         return Product::with('category')->get();
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             'code' => 'required|unique:products,code',
//             'name' => 'required',
//             'category_id' => 'required|exists:categories,id',
//             'brand' => 'required',
//             'purchase_price' => 'required|numeric',
//             'selling_price' => 'required|numeric',
//             'discount' => 'nullable|numeric',
//             'stock' => 'required|integer',
//             'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//         ]);

//         $data = $request->all();

//         if ($request->hasFile('image')) {
//             $path = $request->file('image')->store('images', 'public');
//             $data['image'] = $path;
//         }

//         $product = Product::create($data);

//         return response()->json($product, 201);
//     }

//     public function show(Product $product)
//     {
//         return $product->load('category');
//     }

//     public function update(Request $request, Product $product)
// {
//     $request->validate([
//         'code' => 'required|unique:products,code,' . $product->id,
//         'name' => 'required',
//         'category_id' => 'required|exists:categories,id',
//         'brand' => 'required',
//         'purchase_price' => 'required|numeric',
//         'selling_price' => 'required|numeric',
//         'discount' => 'nullable|numeric',
//         'stock' => 'required|integer',
//         'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//     ]);

//     $data = $request->all();

//     if ($request->hasFile('image')) {
//         // Delete old image if exists
//         if ($product->image) {
//             Storage::disk('public')->delete($product->image);
//         }
//         $path = $request->file('image')->store('images', 'public');
//         $data['image'] = $path;
//     }

//     $product->update($data);

//     return response()->json($product);
// }


//     public function destroy(Product $product)
//     {
//         // Delete image if exists
//         if ($product->image) {
//             Storage::disk('public')->delete($product->image);
//         }

//         $product->delete();

//         return response()->json(null, 204);
//     }
// }
