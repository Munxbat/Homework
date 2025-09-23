"use client";
import { useState, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<"chat" | "order">("chat");
  const [order, setOrder] = useState({ name: "", email: "", phone: "", product: "", quantity: 1 });

  useEffect(() => {
    fetch("/api/sheets")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSend = () => {
    if (!input) return;

    setMessages((prev) => [...prev, "Та: " + input]);

    const product = products.find((p) => p.name === input);

    if (product) {
      if (product.stock === "✅") {
        setMessages((prev) => [...prev, `Bot: Манай агуулахад байна. Supplier: ${product.supplier}`]);
      } else {
        setMessages((prev) => [...prev, "Bot: Энэ бараа дууссан байна. Захиалга өгөх үү?"]);
        setOrder((o) => ({ ...o, product: product.name }));
        setStep("order");
      }
    } else {
      setMessages((prev) => [...prev, "Bot: Манайд одоогоор алга, гэхдээ захиалга авч болно."]);
      setOrder((o) => ({ ...o, product: input }));
      setStep("order");
    }

    setInput("");
  };

  const handleOrderSubmit = async () => {
    await fetch("/api/sheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    setMessages((prev) => [...prev, "Bot: Захиалга амжилттай авлаа."]);
    setStep("chat");
    setOrder({ name: "", email: "", phone: "", product: "", quantity: 1 });
  };

  return (
    <div className="fixed bottom-5 right-5">
      {open ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-2 bg-blue-600 text-white rounded-t-lg">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 p-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div key={i} className="mb-1">{m}</div>
            ))}
          </div>

          {step === "chat" ? (
            <div className="flex border-t">
              <input
                className="flex-1 p-2 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Бүтээгдэхүүн асуу..."
              />
              <button
                className="bg-blue-500 text-white px-3"
                onClick={handleSend}
              >
                Илгээх
              </button>
            </div>
          ) : (
            <div className="p-2 text-sm space-y-2">
              <input
                placeholder="Нэр"
                value={order.name}
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
                className="w-full border p-1"
              />
              <input
                placeholder="Имэйл"
                value={order.email}
                onChange={(e) => setOrder({ ...order, email: e.target.value })}
                className="w-full border p-1"
              />
              <input
                placeholder="Утас"
                value={order.phone}
                onChange={(e) => setOrder({ ...order, phone: e.target.value })}
                className="w-full border p-1"
              />
              <input
                placeholder="Тоо ширхэг"
                type="number"
                min={1}
                value={order.quantity}
                onChange={(e) => setOrder({ ...order, quantity: Number(e.target.value) })}
                className="w-full border p-1"
              />
              <button
                onClick={handleOrderSubmit}
                className="w-full bg-green-500 text-white p-1 rounded"
              >
                Захиалга илгээх
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
}
    