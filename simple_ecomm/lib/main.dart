import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:simple_ecomm/checkout_screen.dart';
import 'api_service.dart';
import 'product.dart';
import 'cart_item.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'E-commerce App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LoginScreen(),
    );
  }
}

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final ApiService apiService = ApiService();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  String? errorMessage;

  void _login() async {
    try {
      await apiService.login(emailController.text, passwordController.text);
      if (mounted) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => ProductListScreen(apiService: apiService),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          errorMessage = e.toString();
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: emailController,
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            TextField(
              controller: passwordController,
              obscureText: true,
              decoration: const InputDecoration(labelText: 'Password'),
            ),
            const SizedBox(height: 20),
            ElevatedButton(onPressed: _login, child: const Text('Login')),
            if (errorMessage != null) ...[
              const SizedBox(height: 20),
              Text(errorMessage!, style: const TextStyle(color: Colors.red)),
            ],
            const SizedBox(height: 20),
            TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) =>
                        RegisterScreen(apiService: apiService),
                  ),
                );
              },
              child: const Text('Don\'t have an account? Sign up here'),
            ),
          ],
        ),
      ),
    );
  }
}

class RegisterScreen extends StatefulWidget {
  final ApiService apiService;

  const RegisterScreen({Key? key, required this.apiService}) : super(key: key);

  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  String? errorMessage;

  void _register() async {
    try {
      await widget.apiService.register(
        nameController.text,
        emailController.text,
        passwordController.text,
      );
      if (mounted) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) =>
                ProductListScreen(apiService: widget.apiService),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          errorMessage = e.toString();
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Register')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: nameController,
              decoration: const InputDecoration(labelText: 'Name'),
            ),
            TextField(
              controller: emailController,
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            TextField(
              controller: passwordController,
              obscureText: true,
              decoration: const InputDecoration(labelText: 'Password'),
            ),
            const SizedBox(height: 20),
            ElevatedButton(onPressed: _register, child: const Text('Register')),
            if (errorMessage != null) ...[
              const SizedBox(height: 20),
              Text(errorMessage!, style: const TextStyle(color: Colors.red)),
            ],
          ],
        ),
      ),
    );
  }
}

class ProductDisplay extends StatefulWidget {
  final Product product;

  const ProductDisplay({Key? key, required this.product}) : super(key: key);

  @override
  _ProductDisplayState createState() => _ProductDisplayState();
}

class _ProductDisplayState extends State<ProductDisplay> {
  final ApiService apiService = ApiService();
  int quantity = 1;
  String? selectedSize;

  void _addCartItem() async {
    if (selectedSize == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Please Select Any Size')),
      );
      return;
    }

    try {
      await apiService.addToCart(widget.product.id, quantity, selectedSize!);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Item added to cart successfully')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to add to cart: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.product.productName),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => CartScreen(apiService: apiService),
                ),
              );
            },
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(widget.product.mainImage),
            SizedBox(height: 10),
            Text(widget.product.productName, style: TextStyle(fontSize: 24)),
            SizedBox(height: 10),
            Row(
              children: [
                for (int i = 0; i < 5; i++)
                  Icon(
                    i < 4 ? Icons.star : Icons.star_border,
                    color: Colors.amber,
                  ),
                Text('(122)')
              ],
            ),
            SizedBox(height: 10),
            Text('Old Price: \$${widget.product.oldPrice}',
                style: TextStyle(
                  decoration: TextDecoration.lineThrough,
                )),
            Text('New Price: \$${widget.product.currentPrice}',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
            SizedBox(height: 10),
            Text(widget.product.description),
            SizedBox(height: 10),
            DropdownButton<int>(
              value: quantity,
              onChanged: (value) {
                setState(() {
                  quantity = value!;
                });
              },
              items: List.generate(5, (index) => index + 1)
                  .map((e) => DropdownMenuItem(
                        value: e,
                        child: Text(e.toString()),
                      ))
                  .toList(),
            ),
            DropdownButton<String>(
              hint: Text('Select Size'),
              value: selectedSize,
              onChanged: (value) {
                setState(() {
                  selectedSize = value;
                });
              },
              items: widget.product.sizes
                  .split(',')
                  .map((size) => DropdownMenuItem(
                        value: size,
                        child: Text(size.toUpperCase()),
                      ))
                  .toList(),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _addCartItem,
              child: Text('ADD TO CART'),
            ),
          ],
        ),
      ),
    );
  }
}

class ProductListScreen extends StatefulWidget {
  final ApiService apiService;

  const ProductListScreen({Key? key, required this.apiService}) : super(key: key);

  @override
  _ProductListScreenState createState() => _ProductListScreenState();
}

class _ProductListScreenState extends State<ProductListScreen> {
  late Future<List<Product>> futureProducts;

  @override
  void initState() {
    super.initState();
    futureProducts = widget.apiService.fetchProducts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Product List'),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => CartScreen(apiService: widget.apiService),
                ),
              );
            },
          ),
        ],
      ),
      body: FutureBuilder<List<Product>>(
        future: futureProducts,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (snapshot.data == null || snapshot.data!.isEmpty) {
            return const Center(child: Text('No products available'));
          } else {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                final product = snapshot.data![index];
                return ListTile(
                  title: Text(product.productName),
                  subtitle: Text('\$${product.currentPrice}'),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => ProductDisplay(product: product),
                      ),
                    );
                  },
                );
              },
            );
          }
        },
      ),
    );
  }
}
// lib/main.dart (within CartScreen)
class CartScreen extends StatefulWidget {
  final ApiService apiService;

  const CartScreen({Key? key, required this.apiService}) : super(key: key);

  @override
  _CartScreenState createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  late Future<List<CartItem>> futureCartItems;
  double totalCartPrice = 0;

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

void handleDecrement(int cartItemId) async {
  print('Decrementing quantity for item ID: $cartItemId');
  try {
    await widget.apiService.updateCartItemQuantity(cartItemId, 'dec');
    setState(() {
      futureCartItems = widget.apiService.fetchCart();
    });
  } catch (e) {
    print('Error during decrement: $e');
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Failed to update quantity: $e')),
    );
  }
}

void handleIncrement(int cartItemId) async {
  print('Incrementing quantity for item ID: $cartItemId');
  try {
    await widget.apiService.updateCartItemQuantity(cartItemId, 'inc');
    setState(() {
      futureCartItems = widget.apiService.fetchCart();
    });
  } catch (e) {
    print('Error during increment: $e');
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Failed to update quantity: $e')),
    );
  }
}


  void deleteCartItem(int cartItemId) async {
    await widget.apiService.deleteCartItem(cartItemId);
    setState(() {
      futureCartItems = widget.apiService.fetchCart();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cart'),
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
            return Column(
              children: [
                Expanded(
                  child: ListView.builder(
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      final cartItem = snapshot.data![index];
                      return ListTile(
                        title: Text(cartItem.product.productName),
                        subtitle: Text('Quantity: ${cartItem.quantity}'),
                        leading: Image.network(
                          cartItem.product.mainImage,
                          width: 30,
                          height: 30,
                        ),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(
                              icon: const Icon(Icons.remove),
                              onPressed: () => handleDecrement(cartItem.id),
                            ),
                            Text('${cartItem.quantity}'),
                            IconButton(
                              icon: const Icon(Icons.add),
                              onPressed: () => handleIncrement(cartItem.id),
                            ),
                            IconButton(
                              icon: const Icon(Icons.delete),
                              onPressed: () => deleteCartItem(cartItem.id),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text('SubTotal'),
                          Text('\$$totalCartPrice'),
                        ],
                      ),
                      const SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: const [
                          Text('Shipping Fee'),
                          Text('Free'),
                        ],
                      ),
                      const SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text('Total', style: TextStyle(fontWeight: FontWeight.bold)),
                          Text('\$$totalCartPrice', style: const TextStyle(fontWeight: FontWeight.bold)),
                        ],
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () { Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => CheckoutScreen(apiService: widget.apiService),
                            ),
                          );
                        },
                        child: const Text('PROCEED TO CHECKOUT'),
                      ),
                    ],
                  ),
                ),
              ],
            );
          }
        },
      ),
    );
  }
}

