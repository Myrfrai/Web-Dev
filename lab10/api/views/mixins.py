from rest_framework import mixins, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


class ProductListAPIView(mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class ProductDetailAPIView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, product_id):
        return self.retrieve(request)

    def put(self, request, product_id):
        return self.update(request)

    def delete(self, request, product_id):
        return self.destroy(request)


class CategoryListAPIView(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class CategoryDetailAPIView(mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin,
                            generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

    def get(self, request, category_id):
        return self.retrieve(request)

    def put(self, request, category_id):
        return self.update(request)

    def delete(self, request, category_id):
        return self.destroy(request)


class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)