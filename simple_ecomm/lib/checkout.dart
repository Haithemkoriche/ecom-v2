// lib/checkout.dart
class Checkout {
  final String firstName;
  final String lastName;
  final String phone;
  final String email;
  final String address;
  final String city;
  final String state;
  final String zipcode;

  Checkout({
    required this.firstName,
    required this.lastName,
    required this.phone,
    required this.email,
    required this.address,
    required this.city,
    required this.state,
    required this.zipcode,
  });

  Map<String, dynamic> toJson() {
    return {
      'first_name': firstName,
      'last_name': lastName,
      'phone': phone,
      'email': email,
      'address': address,
      'city': city,
      'state': state,
      'zipcode': zipcode,
    };
  }
}
