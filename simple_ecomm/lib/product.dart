// lib/product.dart
class Product {
  final int id;
  final int categoryId;
  final String productName;
  final String oldPrice;
  final String currentPrice;
  final String qty;
  final String mainImage;
  final String? othersImages;
  final String sizes;
  final String colors;
  final String description;
  final String shortDescription;
  final String isActive;
  final String? createdAt;
  final String? updatedAt;

  Product({
    required this.id,
    required this.categoryId,
    required this.productName,
    required this.oldPrice,
    required this.currentPrice,
    required this.qty,
    required this.mainImage,
    this.othersImages,
    required this.sizes,
    required this.colors,
    required this.description,
    required this.shortDescription,
    required this.isActive,
    this.createdAt,
    this.updatedAt,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'],
      categoryId: json['category_id'],
      productName: json['product_name'],
      oldPrice: json['old_price'],
      currentPrice: json['current_price'],
      qty: json['qty'],
      mainImage: json['main_image'],
      othersImages: json['others_images'],
      sizes: json['sizes'],
      colors: json['colors'],
      description: json['description'],
      shortDescription: json['short_description'],
      isActive: json['is_active'],
      createdAt: json['created_at'],
      updatedAt: json['updated_at'],
    );
  }
  
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'category_id': categoryId,
      'product_name': productName,
      'old_price': oldPrice,
      'current_price': currentPrice,
      'qty': qty,
      'main_image': mainImage,
      'others_images': othersImages,
      'sizes': sizes,
      'colors': colors,
      'description': description,
      'short_description': shortDescription,
      'is_active': isActive,
      'created_at': createdAt,
      'updated_at': updatedAt,
    };
  }
}
