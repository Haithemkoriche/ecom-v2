// lib/cart_item.dart
import 'package:simple_ecomm/product.dart';

class CartItem {
  final int id;
  final int userId;
  final int productId;
  final int quantity;
  final String size;
  final Product product;

  CartItem({
    required this.id,
    required this.userId,
    required this.productId,
    required this.quantity,
    required this.size,
    required this.product,
  });

  factory CartItem.fromJson(Map<String, dynamic> json) {
    return CartItem(
      id: json['id'],
      userId: int.parse(json['user_id']),
      productId: int.parse(json['product_id']),
      quantity: int.parse(json['product_qty']),
      size: json['product_size'],
      product: Product.fromJson(json['product']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'product_id': productId,
      'product_qty': quantity,
      'product_size': size,
      'product': product.toJson(),
    };
  }
}
