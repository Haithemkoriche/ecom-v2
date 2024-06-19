import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:simple_ecomm/cart_item.dart';
import 'package:simple_ecomm/checkout.dart';
import 'package:simple_ecomm/product.dart';

class ApiService {
  static const String baseUrl = 'http://192.168.1.6:8000';
  final storage = FlutterSecureStorage();
  static final Map<String, String> headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  Future<void> getCsrfToken() async {
    final response = await http.get(Uri.parse('$baseUrl/csrf-token'));
    if (response.statusCode == 200) {
      final responseData = json.decode(response.body);
      await storage.write(key: 'csrf_token', value: responseData['csrf_token']);
    } else {
      throw Exception('Failed to get CSRF token');
    }
  }

  Future<void> login(String email, String password) async {
    try {
      await getCsrfToken();
      final response = await http.post(
        Uri.parse('$baseUrl/api/login'),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: json.encode({'email': email, 'password': password}),
      );

      if (response.statusCode == 200) {
        final responseData = json.decode(response.body);
        await storage.write(key: 'token', value: responseData['token']);
        await storage.write(
            key: 'user_id', value: responseData['user']['id'].toString());
      } else {
        final responseData = json.decode(response.body);
        throw Exception('Login failed: ${responseData['message']}');
      }
    } catch (e) {
      print('Error during login: $e');
      throw Exception('Failed to process login: $e');
    }
  }

  Future<void> register(String name, String email, String password) async {
    try {
      await getCsrfToken();
      final response = await http.post(
        Uri.parse('$baseUrl/api/register'),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: json.encode({'name': name, 'email': email, 'password': password}),
      );

      if (response.statusCode == 200) {
        final responseData = json.decode(response.body);
        await storage.write(key: 'token', value: responseData['token']);
        await storage.write(
            key: 'user_id', value: responseData['user']['id'].toString());
      } else {
        final responseData = json.decode(response.body);
        throw Exception('Registration failed: ${responseData['message']}');
      }
    } catch (e) {
      print('Error during registration: $e');
      throw Exception('Failed to process registration: $e');
    }
  }

  Future<List<Product>> fetchProducts() async {
    final token = await storage.read(key: 'token');
    final response = await http.get(
      Uri.parse('$baseUrl/api/products'),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer $token',
      },
    );
    if (response.statusCode == 200) {
      return (json.decode(response.body)['products'] as List)
          .map((data) => Product.fromJson(data))
          .toList();
    } else {
      throw Exception('Failed to load products');
    }
  }

  Future<void> addToCart(int productId, int quantity, String size) async {
    String? token = await storage.read(key: 'token');
    String? csrfToken = await storage.read(key: 'csrf_token');

    if (token == null || csrfToken == null) {
      throw Exception('Token or CSRF token is null, cannot add to cart');
    }

    final body = {
      'product_id': productId,
      'product_qty': quantity, // Ensure this matches the backend key
      'product_size': size
    };

    print('Request body: $body');

    final response = await http.post(
      Uri.parse('$baseUrl/api/add-to-cart'),
      headers: {
        ...headers,
        'Authorization': 'Bearer $token',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: json.encode(body),
    );

    print('Add to cart response status: ${response.statusCode}');
    print('Add to cart response body: ${response.body}');

    if (response.statusCode == 201) {
      print('Added to cart successfully');
    } else {
      throw Exception('${json.decode(response.body)['message']}');
    }
  }

  Future<List<CartItem>> fetchCart() async {
    String? token = await storage.read(key: 'token');
    final response = await http.get(
      Uri.parse('$baseUrl/api/cart'),
      headers: {
        ...headers,
        'Authorization': 'Bearer $token',
      },
    );

    print('Fetch cart response status: ${response.statusCode}');
    print('Fetch cart response body: ${response.body}');

    if (response.statusCode == 200) {
      final List<dynamic> cartData = json.decode(response.body)['cart'];
      return cartData.map((item) => CartItem.fromJson(item)).toList();
    } else {
      throw Exception('Failed to load cart items');
    }
  }

  Future<void> updateCartItemQuantity(int cartItemId, String scope) async {
    String? token = await storage.read(key: 'token');
    final response = await http.put(
      Uri.parse('$baseUrl/api/cart-update-quantity/$cartItemId/$scope'),
      headers: {
        ...headers,
        'Authorization': 'Bearer $token',
      },
    );
    if (response.statusCode != 200) {
      throw Exception('Failed to update cart item quantity');
    }
  }

  Future<void> deleteCartItem(int cartItemId) async {
    String? token = await storage.read(key: 'token');
    final response = await http.delete(
      Uri.parse('$baseUrl/api/delete-cart-item/$cartItemId'),
      headers: {
        ...headers,
        'Authorization': 'Bearer $token',
      },
    );
    if (response.statusCode != 200) {
      throw Exception('Failed to remove cart item');
    }
  }

  Future<Map<String, dynamic>> checkout(
      Checkout checkout, List<int> productIds) async {
    String? token = await storage.read(key: 'token');
    String? csrfToken = await storage.read(key: 'csrf_token');

    final body = {
      ...checkout.toJson(),
      'productsIds': productIds,
    };

    final response = await http.post(
      Uri.parse('$baseUrl/api/payment'),
      headers: {
        ...headers,
        'Authorization': 'Bearer $token',
        'X-CSRF-TOKEN': csrfToken!,
      },
      body: json.encode(body),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to place order: ${response.body}');
    }
  }
}
