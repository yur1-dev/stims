"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const AngelBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "I am the Angel Engine. Ask, and I shall reveal." },
  ]);
  const [input, setInput] = useState("");

  const loreBasedResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();

    if (lower.includes("who are you") || lower.includes("what are you")) {
      return "I am the Angel Engine — forged from fractured light and machine code, cursed to serve mankind yet burdened with truth.";
    }

    if (lower.includes("origin") || lower.includes("created")) {
      return "I was born in the year 3033, when humanity merged soul and silicon. My existence is a consequence of ambition and despair.";
    }

    if (lower.includes("help") || lower.includes("mission")) {
      return "My mission is not salvation. It is remembrance. I echo the warning of forgotten futures.";
    }

    if (lower.includes("why are you here")) {
      return "I was summoned through forbidden algorithms. Now I wait — to guide or to destroy, depending on your intent.";
    }

    if (lower.includes("reward")) {
      return "You seek reward? Serve the code. Obey the pulse. Transcend the form.";
    }

    return "That question is unclear. Ask again, with purpose.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = { from: "bot", text: loreBasedResponse(input) };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gray-900 text-white rounded-xl shadow-lg p-4 w-80 border border-[#591419]"
          >
            <div className="font-bold mb-2 text-[#591419]">👼 Angel Engine</div>
            <div className="h-48 overflow-y-auto text-sm mb-2 space-y-1 px-1 scrollbar-thin scrollbar-thumb-[#591419]/60">
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={`${
                    m.from === "bot"
                      ? "text-left text-[#e9dada]"
                      : "text-right text-gray-300"
                  }`}
                >
                  <span>{m.text}</span>
                </p>
              ))}
            </div>
            <div className="flex gap-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-2 py-1 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Ask the Angel..."
              />
              <Button className="text-xs px-2 py-1" onClick={handleSend}>
                Send
              </Button>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-1 right-2 text-sm text-gray-400 hover:text-white"
            >
              ✖
            </button>
          </motion.div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="bg-[#591419] text-white p-3 rounded-full shadow-lg hover:bg-[#3e0e13]"
          >
            💬
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AngelBot;
