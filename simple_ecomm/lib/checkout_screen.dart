// lib/checkout_screen.dart
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:simple_ecomm/api_service.dart';
import 'package:simple_ecomm/cart_item.dart';
import 'package:simple_ecomm/checkout.dart';

class CheckoutScreen extends StatefulWidget {
  final ApiService apiService;

  const CheckoutScreen({Key? key, required this.apiService}) : super(key: key);

  @override
  _CheckoutScreenState createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  final _formKey = GlobalKey<FormState>();
  final _storage = FlutterSecureStorage();
  late Future<List<CartItem>> futureCartItems;
  double totalCartPrice = 0;

  final TextEditingController firstNameController = TextEditingController();
  final TextEditingController lastNameController = TextEditingController();
  final TextEditingController phoneController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController addressController = TextEditingController();
  final TextEditingController cityController = TextEditingController();
  final TextEditingController stateController = TextEditingController();
  final TextEditingController zipcodeController = TextEditingController();

  @override
  void initState() {
    super.initState();
    futureCartItems = widget.apiService.fetchCart();
  }

  void updateTotalPrice(List<CartItem> cartItems) {
    totalCartPrice = 0;
    for (var item in cartItems) {
      totalCartPrice += double.parse(item.product.currentPrice) * item.quantity;
    }
  }

  void submitOrder() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    final checkout = Checkout(
      firstName: firstNameController.text,
      lastName: lastNameController.text,
      phone: phoneController.text,
      email: emailController.text,
      address: addressController.text,
      city: cityController.text,
      state: stateController.text,
      zipcode: zipcodeController.text,
    );

    try {
      final cartItems = await widget.apiService.fetchCart();
      final productIds = cartItems.map((item) => item.product.id).toList();
      final response = await widget.apiService.checkout(checkout, productIds);

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(response['message'])),
      );

      if (response['status'] == 201) {
        Navigator.pushReplacementNamed(context, '/order-confirmation');
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to place order: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Checkout'),
      ),
      body: FutureBuilder<List<CartItem>>(
        future: futureCartItems,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (snapshot.data == null || snapshot.data!.isEmpty) {
            return const Center(child: Text('No items in cart'));
          } else {
            updateTotalPrice(snapshot.data!);
            return SingleChildScrollView(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        TextFormField(
                          controller: firstNameController,
                          decoration: const InputDecoration(labelText: 'First Name'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your first name';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: lastNameController,
                          decoration: const InputDecoration(labelText: 'Last Name'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your last name';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: phoneController,
                          decoration: const InputDecoration(labelText: 'Phone Number'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your phone number';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: emailController,
                          decoration: const InputDecoration(labelText: 'Email Address'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your email address';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: addressController,
                          decoration: const InputDecoration(labelText: 'Full Address'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your address';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: cityController,
                          decoration: const InputDecoration(labelText: 'City'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your city';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: stateController,
                          decoration: const InputDecoration(labelText: 'State'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your state';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: zipcodeController,
                          decoration: const InputDecoration(labelText: 'Zip Code'),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter your zip code';
                            }
                            return null;
                          },
                        ),
                        const SizedBox(height: 20),
                        ElevatedButton(
                          onPressed: submitOrder,
                          child: const Text('Place Order'),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 20),
                  Table(
                    border: TableBorder.all(),
                    children: [
                      TableRow(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('Product', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('Price', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('Qty', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('Size', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('Total', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                        ],
                      ),
                      for (var item in snapshot.data!)
                        TableRow(
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(item.product.productName),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(item.product.currentPrice),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(item.quantity.toString()),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(item.size),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text((double.parse(item.product.currentPrice) * item.quantity).toString()),
                            ),
                          ],
                        ),
                      TableRow(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('Total Price', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text(''),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text(''),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text(''),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text('\$$totalCartPrice', style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            );
          }
        },
      ),
    );
  }
}
