<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\SubCategoryResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::paginate(10);
        return CategoryResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name'    => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $category = new Category();
        $category->name = $request->name;
        $category->save();
        return response(new CategoryResource($category), Response::HTTP_CREATED);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
         return new CategoryResource($category);
    }

    /**
     * Display the collection of resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function searchCategory(Request $request)
    {
       $keyword= $request->keyword;

       $results=Category::where('name', 'like', '%' .$keyword.'%')->get();

       return CategoryResource::collection($results);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function getsubcategory(Request $request)
    {
        $category=Category::find($request->cat_id);
        return SubCategoryResource::collection($category->subcategoris);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        if ($request->has('name')) {
            $category->name = $request->name;
        }
        $category->save();

         return response(new CategoryResource($category), Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
       //$product = Products::where('id', $id)->first();

        $category->delete();

        return response()->json(['success' => true, 'message' => 'Deleted successfully'], 204);
    }
}
