import { useState } from "react";
import { RiRobot2Line } from "react-icons/ri";

export default function ChatBot({ carts }) {
  const [cartActive, setCartState] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState("chat");
  const [input, setInput] = useState("");
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
  });

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `👤: ${input}`]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, "🤖: Таны асуулт хүлээн авлаа"]);
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
      <button className="cart-toggle-btn" onClick={() => setCartState(!cartActive)}>
        <RiRobot2Line size={24} />
        <span className="cart-count">{carts.length}</span>
      </button>

      <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
        <button className="mini-cart-close" onClick={() => setCartState(false)}>
          <i className="ti-close"></i>
        </button>

        {/* Chat messages */}
        <div className="mini-cart-items overflow-y-auto h-64 p-2">
          {messages.map((m, i) => (
            <div key={i} className="mb-1 text-sm">{m}</div>
          ))}
        </div>

        {/* Input / Order form */}
        <div className="mini-cart-action mt-2 flex flex-col space-y-1">
          {step === "chat" ? (
            <div className="flex">
              <input
                type="text"
                className="form-control flex-1 p-2 text-sm border"
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
                className="w-full border p-1 text-sm"
              />
              <input
                placeholder="Имэйл"
                value={order.email}
                onChange={(e) => setOrder({ ...order, email: e.target.value })}
                className="w-full border p-1 text-sm"
              />
              <input
                placeholder="Утас"
                value={order.phone}
                onChange={(e) => setOrder({ ...order, phone: e.target.value })}
                className="w-full border p-1 text-sm"
              />
              <input
                type="number"
                min={1}
                placeholder="Тоо ширхэг"
                value={order.quantity}
                onChange={(e) =>
                  setOrder({ ...order, quantity: Number(e.target.value) })
                }
                className="w-full border p-1 text-sm"
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
