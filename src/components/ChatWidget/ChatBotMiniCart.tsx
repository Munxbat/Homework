import React, { useState, useEffect } from "react";
import { RiRobot2Line } from "react-icons/ri";
import axios from "axios";

interface Product {
  name: string;
  description: string;
  length: string;
  diameter: string;
  quantity: string;
  stock: string;
  category: string;
  supplier: string;
}

interface ChatBotMiniCartProps {
  carts: any[];
}

export default function ChatBotMiniCart({ carts }: ChatBotMiniCartProps) {
  const [cartActive, setCartState] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [step, setStep] = useState<"chat" | "order">("chat");
  const [input, setInput] = useState("");
  const [order, setOrder] = useState({ name: "", email: "", phone: "", quantity: 1 });
  const [products, setProducts] = useState<Product[]>([]);

  // Google Sheets-с бүтээгдэхүүнүүдийг дуудаж авах
  useEffect(() => {
    axios.get("/api/sheets").then((res) => setProducts(res.data));
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `👤: ${input}`]);
    setInput("");

    // Жишээ GPT response simulation
    const lower = input.toLowerCase();
    let botReply = "🤖: Таны асуулт хүлээн авлаа";

    // Хэрэв бүтээгдэхүүний нэртэй холбоотой бол санал болгох
    const matched = products.find((p) => p.name.toLowerCase().includes(lower));
    if (matched) {
      botReply = `🤖: Манай бүтээгдэхүүн: ${matched.name} - ${matched.description}. Үнэ: ${matched.quantity}ш, Нөөц: ${matched.stock}`;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  const handleOrderSubmit = () => {
    setMessages((prev) => [
      ...prev,
      `✅ Захиалга амжилттай илгээгдлээ (${order.quantity}ш)`,
    ]);
    setStep("chat");
    setOrder({ name: "", email: "", phone: "", quantity: 1 });
  };

  return (
    <div className="mini-cart">
      <button
        className="cart-toggle-btn"
        onClick={() => setCartState(!cartActive)}
      >
        {RiRobot2Line({ size: 24 }) as JSX.Element}
        <span className="cart-count">{carts.length}</span>
      </button>

      <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
        <button className="mini-cart-close" onClick={() => setCartState(false)}>
          <i className="ti-close"></i>
        </button>

        {/* Messages */}
        <div className="mini-cart-items overflow-y-auto h-64 p-2 border-b">
          {messages.map((m, i) => (
            <div key={i} className="mb-1 text-sm">{m}</div>
          ))}
        </div>

        {/* Input / Order form */}
        <div className="mini-cart-action mt-2 flex flex-col space-y-1 p-2">
          {step === "chat" ? (
            <div className="flex">
              <input
                type="text"
                className="form-control flex-1 p-2 text-sm border rounded"
                placeholder="Type here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-3 ml-1 rounded"
              >
                Send
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <input
                placeholder="Нэр"
                value={order.name}
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
                className="w-full border p-1 text-sm rounded"
              />
              <input
                placeholder="Имэйл"
                value={order.email}
                onChange={(e) => setOrder({ ...order, email: e.target.value })}
                className="w-full border p-1 text-sm rounded"
              />
              <input
                placeholder="Утас"
                value={order.phone}
                onChange={(e) => setOrder({ ...order, phone: e.target.value })}
                className="w-full border p-1 text-sm rounded"
              />
              <input
                type="number"
                min={1}
                placeholder="Тоо ширхэг"
                value={order.quantity}
                onChange={(e) =>
                  setOrder({ ...order, quantity: Number(e.target.value) })
                }
                className="w-full border p-1 text-sm rounded"
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
      </div>
    </div>
  );
}
