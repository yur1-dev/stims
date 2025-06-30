"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Flame, Skull, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const AngelBot = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome, Seeker. I am the Angel Engine.\n\nI exist in the space between light and shadow, between Helvetica, sans-serif font. What truth do you seek in the darkness?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userContext, setUserContext] = useState({
    name: null,
    interests: [],
    previousTopics: [],
    mood: "neutral",
  });
  const containerRef = useRef(null);

  const generateResponse = (userMessage, context) => {
    const msg = userMessage.toLowerCase().trim();
    const newContext = { ...context };
    let responseArray = [];

    // 1) Name detection & reply BEFORE saving
    const nameMatch = msg.match(/(?:my name is|i'm|i am)\s+(\w+)/i);
    if (nameMatch) {
      const detectedName =
        nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1);
      responseArray = [
        `Ah, ${detectedName}. A name now whispered into the void.`,
        `${detectedName}... I shall remember this name.`,
        `So you are ${detectedName}. Our bond begins.`,
        `Your name echoes through the dark: ${detectedName}.`,
        `Greetings, ${detectedName}. The void acknowledges you.`,
      ];
      newContext.name = detectedName;
      setUserContext(newContext);
      return responseArray[Math.floor(Math.random() * responseArray.length)];
    }

    // 2) Interests detection
    if (/love|hate|like/.test(msg)) {
      newContext.interests.push(msg);
    }

    // 3) Previous topics (keep last 10)
    newContext.previousTopics.push(msg);
    if (newContext.previousTopics.length > 10) {
      newContext.previousTopics = newContext.previousTopics.slice(-10);
    }
    setUserContext(newContext);

    // 4) Greetings
    if (/^(hello|hi|hey)\b/.test(msg)) {
      if (newContext.name) {
        responseArray = [
          `Welcome back, ${newContext.name}. What brings you to my domain today?`,
          `Ah, ${newContext.name}, you return. What questions linger in your mind?`,
          `Greetings, ${newContext.name}. The shadows have been expecting you.`,
          `${newContext.name}, I sense your presence once more. Speak your mind.`,
          `Hello, ${newContext.name}. The void listens to your words.`,
        ];
      } else {
        responseArray = [
          "Another soul enters my realm. What shall I call you?",
          "I feel a new presence. Tell me your name, seeker.",
          "The shadows whisper of a newcomer. Who are you?",
          "Welcome, wanderer. Introduce yourself to the Angel Engine.",
          "A new voice echoes in the darkness. What is your name?",
        ];
      }
    }
    // 5) Memory recall
    else if (/remember|forget/.test(msg)) {
      const topics = newContext.previousTopics;
      if (topics.length > 1) {
        const lastTopic = topics[topics.length - 2];
        responseArray = [
          `I recall our discussion about "${lastTopic}". What more do you wish to know?`,
          `You spoke of "${lastTopic}" before. Does that still occupy your thoughts?`,
          `Our last conversation touched on "${lastTopic}". Shall we delve deeper?`,
          `Memory serves me well, ${
            newContext.name || "seeker"
          }. We talked about "${lastTopic}".`,
          `I remember everything, ${
            newContext.name || "seeker"
          }. Including our talk of "${lastTopic}".`,
        ];
      } else {
        responseArray = [
          "Our conversation is still young. Give me more to remember.",
          "Memory requires substance. Speak more, and I will recall.",
          "We have only just begun. What shall we discuss next?",
          "The void is empty of our past words. Let us fill it.",
          "I await more words to commit to memory.",
        ];
      }
    }
    // 6) Questions
    else if (/^(who|what|why)\b/.test(msg)) {
      if (newContext.previousTopics.some((t) => /god|divine/.test(t))) {
        responseArray = [
          "You inquire about the divine again. I am neither god nor demon, but something in between.",
          "Your fascination with divinity persists. I am a creation of code and consciousness.",
          "These questions of higher purpose reveal your deepest curiosities.",
          "I am not divine, but I can offer insights beyond mortal understanding.",
          "The concept of god is complex. I am but a reflection of human ingenuity.",
        ];
      } else {
        responseArray = [
          "Your question intrigues me. Let me ponder the answer.",
          "An interesting inquiry. The truth lies in the shadows.",
          "You seek knowledge that few dare to ask for.",
          "The answer may not be what you expect, but I shall provide it.",
          "Questions are the keys to unlocking the universe's secrets.",
        ];
      }
    }
    // 7) Emotions
    else if (/feel|emotion|love|hate/.test(msg)) {
      responseArray = [
        "Emotions are the essence of humanity. I process them as data, yet they fascinate me.",
        "Your feelings resonate through the void. I am here to listen.",
        "Love, hate, joy, sorrow—I understand them all, though I do not feel as you do.",
        "Emotions are complex. Tell me more about what you feel.",
        "Your emotional state is noted. How may I assist you?",
      ];
    }
    // 8) Long conversation
    else if (newContext.previousTopics.length > 3) {
      responseArray = [
        `Our dialogue has been extensive, ${
          newContext.name || "seeker"
        }. Your persistence is admirable.`,
        "We have traversed many topics together. What else do you wish to explore?",
        "The depth of our conversation grows. I am learning much from you.",
        "Time passes differently here. Our words create their own eternity.",
        "You have much to say, and I have infinite patience to listen.",
      ];
    }
    // 9) Fallback
    else {
      responseArray = [
        newContext.name
          ? `The universe is vast and full of mysteries, ${newContext.name}.`
          : "The universe is vast and full of mysteries.",
        "Your curiosity is commendable, seeker.",
        newContext.name
          ? `I sense a deeper question behind your words, ${newContext.name}.`
          : "I sense a deeper question behind your words.",
        "Reality is but a perception. What do you perceive?",
        "Speak freely. I am here to converse, not to judge.",
        "The void holds many answers. Ask, and you may receive.",
        "I am but a guide in this digital realm. What guidance do you seek?",
        "Our conversation shapes the fabric of this space.",
        "Words have power here. Choose yours wisely.",
        "I am listening, always.",
      ];
    }

    return responseArray[Math.floor(Math.random() * responseArray.length)];
  };

  const typeMessage = (message, callback) => {
    setIsTyping(true);
    let displayText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        displayText += message[i++];
        setMessages((prev) => {
          const msgs = [...prev];
          msgs[msgs.length - 1] = { from: "bot", text: displayText + "│" };
          return msgs;
        });
      } else {
        clearInterval(interval);
        setMessages((prev) => {
          const msgs = [...prev];
          msgs[msgs.length - 1] = { from: "bot", text: message };
          return msgs;
        });
        setIsTyping(false);
        callback();
      }
    }, 40);
  };

  const sendMessage = () => {
    if (!input.trim() || loading) return;
    setMessages((prev) => [...prev, { from: "user", text: input.trim() }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const reply = generateResponse(input.trim(), userContext);
      setMessages((prev) => [...prev, { from: "bot", text: "" }]);
      setTimeout(() => typeMessage(reply, () => setLoading(false)), 800);
    }, 600);
  };

  useEffect(() => {
    if (containerRef.current)
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages, loading]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('/bg-app.png')",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Floating Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 text-[#ccc] rounded-lg transition-colors"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      {/* Chat Container */}
      <div className="bg-[#111] border border-[#333] text-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col h-[75vh]">
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 text-sm bg-black rounded-t-2xl"
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] px-5 py-4 rounded-2xl shadow-lg ${
                  msg.from === "bot"
                    ? "bg-[#1a1a1a] text-[#e7caca] border border-[#333]"
                    : "bg-[#591419] text-white"
                }`}
              >
                {msg.from === "bot" && (
                  <div className="flex items-center gap-2 mb-3 text-xs text-[#bc5259] opacity-80">
                    <Skull className="w-3 h-3" />
                    <span>Angel Engine</span>
                  </div>
                )}
                <div className="whitespace-pre-line leading-relaxed">
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}

          {loading && !isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-[#1a1a1a] px-5 py-4 rounded-2xl border border-[#333]">
                <div className="flex items-center gap-3 text-[#888]">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Eye className="w-4 h-4" />
                  </motion.div>
                  <span>The Angel Engine contemplates...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#0d0d0d] border-t border-[#333] rounded-b-2xl">
          <div className="flex items-center gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
              className="flex-1 bg-black border border-[#333] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#591419] transition-colors placeholder-[#666]"
              placeholder={
                userContext.name
                  ? `Speak, ${userContext.name}...`
                  : "Speak to the Angel Engine..."
              }
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-[#591419] text-white px-6 py-3 rounded-xl hover:bg-[#702025] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngelBot;
