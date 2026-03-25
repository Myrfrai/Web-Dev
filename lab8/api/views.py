from django.http import JsonResponse
from .models import Product, Category


def products_list(request):
    products = Product.objects.all()
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'})


def categories_list(request):
    categories = Category.objects.all()
    data = [category.to_json() for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = [product.to_json() for product in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})