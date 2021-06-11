<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use App\Http\Resources\SubCategoryResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subcategories = SubCategory::paginate(10);
        return SubCategoryResource::collection($subcategories);
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
                'category_id'    => 'required',
                'name'    => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $subcategory = new SubCategory();
        $subcategory->name = $request->name;
        $subcategory->category_id = $request->category_id;
        $subcategory->save();
        return response(new SubCategoryResource($subcategory), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function show(SubCategory $subCategory)
    {
         return new SubCategoryResource($subCategory);
    }

     /**
     * Display the collection of resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function searchSubCategory(Request $request)
    {
       $keyword= $request->keyword;

       $results=SubCategory::where('name', 'like', '%' .$keyword.'%')->get();

       return SubCategoryResource::collection($results);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $subCategory)
    {
        $subCategory=SubCategory::findOrFail($subCategory);
       if ($request->has('name')) {
            $subCategory->name = $request->name;
        }
        if ($request->has('category_id')) {
            $subCategory->category_id = $request->category_id;
        }
        $subCategory->save();

         return response(new SubCategoryResource($subCategory), Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($subCategory)
    {
        $subCategory=SubCategory::findOrFail($subCategory);
         $subCategory->delete();

        return response()->json(['success' => true, 'message' => 'Deleted successfully'], 204);
    }
}
