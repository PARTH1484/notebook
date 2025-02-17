import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  { id: 1, name: "Refined Soyabean Oil - Solo", price: 100, image: "https://i.imgur.com/ofvBReo.jpg", stock: "In Stock" },
  { id: 2, name: "Refined Soyabean Oil - Combo", price: 195, image: "https://i.imgur.com/qiqFJeO.jpg", stock: "In Stock" },
  { id: 3, name: "Saras Ghee (1L)", price: 650, image: "https://i.imgur.com/LqlBYxX.jpg", stock: "In Stock" },
  { id: 4, name: "Pure Cow Ghee (1kg)", price: 750, image: "https://i.imgur.com/LqlBYxX.jpg", stock: "In Stock" },
  { id: 5, name: "Premium Almonds (1kg)", price: 900, image: "https://i.imgur.com/90VWVXx.jpg", stock: "In Stock" },
  { id: 6, name: "Harpic Cleaner", price: 105, image: "https://i.imgur.com/HHW49m2.jpg", stock: "In Stock" },
  { id: 7, name: "Bartan Baar Big Pack", price: 60, image: "https://i.imgur.com/2Et4UAD.jpg", stock: "In Stock" },
  { id: 8, name: "Bikaneri Bhujia - Solo", price: 100, image: "https://i.imgur.com/jAeCKhu.jpg", stock: "In Stock" },
  { id: 9, name: "Bikaneri Bhujia - Combo", price: 190, image: "https://i.imgur.com/jAeCKhu.jpg", stock: "In Stock" },
  { id: 10, name: "Tasty Nuts - Solo", price: 100, image: "https://i.imgur.com/pS21gC3.jpg", stock: "In Stock" },
  { id: 11, name: "Tasty Nuts - Combo", price: 190, image: "https://i.imgur.com/pS21gC3.jpg", stock: "In Stock" }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };

  const handleConfirmOrder = () => {
    const orderDetails = `Order placed successfully!\nProduct: ${selectedProduct.name}\nPrice: ₹${selectedProduct.price}\nQuantity: ${quantity}\nAddress: ${address}\nMobile: ${mobile}\n\nPlease send the screenshot of your payment to confirm the order or choose Cash on Delivery (COD). Payment number: 7568094525.`;
    alert(orderDetails);
    window.open(`https://wa.me/917568094525?text=${encodeURIComponent(orderDetails)}`, "_blank");
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">Bilasi Ram Mohanlal Jagetiya</h1>
      {!selectedProduct ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="p-4 bg-white shadow-lg rounded-lg text-black">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <CardContent>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold text-green-600">₹{product.price}</p>
                <p className="text-sm text-gray-600">{product.stock}</p>
                <Button className="mt-2 w-full bg-blue-500 text-white" onClick={() => handleBuyNow(product)}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-10 p-4 bg-white shadow-lg rounded-lg text-black">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-40 h-40 object-cover rounded-lg" />
          <p className="text-xl font-semibold mt-2">{selectedProduct.name}</p>
          <p className="text-lg font-bold text-green-600">₹{selectedProduct.price}</p>
          <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 mt-2 border rounded-lg"/>
          <input type="text" placeholder="Enter Your Address" className="w-full p-2 mt-2 border rounded-lg"
            value={address} onChange={(e) => setAddress(e.target.value)}/>
          <input type="text" placeholder="Enter Your Mobile Number" className="w-full p-2 mt-2 border rounded-lg"
            value={mobile} onChange={(e) => setMobile(e.target.value)}/>
          <Button className="mt-4 w-full bg-green-500 text-white" onClick={handleConfirmOrder}>
            Confirm Order
          </Button>
        </div>
      )}
    </div>
  );
}
