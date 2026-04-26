"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "Hello! I'm your Odlix AI Assistant. How can I help you today?\n\nI can help with:\n• Course recommendations\n• Package information\n• Platform navigation\n• General support",
    timestamp: new Date(),
  },
];

const quickReplies = [
  "What packages do you offer?",
  "How do I start learning?",
  "Tell me about affiliate program",
];

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  function generateResponse(userMsg: string): string {
    const lower = userMsg.toLowerCase();
    if (lower.includes("package") || lower.includes("price") || lower.includes("plan")) {
      return "We offer 4 packages:\n\n1. **Beginner (₹999)** – 8 skills, earn ₹8-10k/month\n2. **Pro (₹2,499)** – 15 skills, earn ₹25-30k/month\n3. **Expert (₹4,999)** – 23 skills, earn ₹80k-1L+/month\n4. **Life Mastery** – Unlock after completing any package\n\nWould you like to know more about any specific package?";
    }
    if (lower.includes("affiliate") || lower.includes("refer") || lower.includes("earn")) {
      return "Our affiliate program offers excellent commissions:\n\n• **Beginner**: Direct 54% | Level 2: 12%\n• **Pro**: Direct 56% | Level 2: 14%\n• **Expert**: Direct 58% | Level 2: 17%\n\nExtra benefits include weekly payouts, festival bonuses, domestic trips every 6 months, and leaderboards.";
    }
    if (lower.includes("course") || lower.includes("learn") || lower.includes("skill")) {
      return "We have 200+ courses across categories like:\n\n• Spoken English & Communication\n• Graphic Design & Video Editing\n• Stock Market & Trading\n• YouTube & Social Media Marketing\n• AI Tools & Data Analytics\n\nVisit /learning/courses to browse all courses.";
    }
    if (lower.includes("contact") || lower.includes("support") || lower.includes("help")) {
      return "You can reach us through:\n\n• **Email**: team.odlix@gmail.com\n• **WhatsApp**: +91 7372891228\n• **Help Center**: Visit our Support page\n\nOur team typically replies within minutes during business hours.";
    }
    return "Thanks for your message! For detailed assistance, please contact our support team at team.odlix@gmail.com or WhatsApp +91 7372891228.\n\nIs there anything else I can help you with?";
  }

  async function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: msg,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateResponse(msg),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 800);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-popover shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-homepage-primary to-homepage-secondary p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Odlix AI Assistant</h3>
                  <p className="text-xs text-white/70">Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-homepage-primary/10 text-homepage-primary"
                        : "bg-homepage-secondary/10 text-homepage-secondary"
                    }`}
                  >
                    {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-xl px-3 py-2 text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-homepage-primary text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="h-7 w-7 rounded-full bg-homepage-secondary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-homepage-secondary" />
                  </div>
                  <div className="bg-muted rounded-xl px-3 py-2">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="text-xs bg-accent hover:bg-accent/80 text-accent-foreground rounded-full px-3 py-1.5 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border shrink-0">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="text-sm"
                />
                <Button size="icon" onClick={() => handleSend()} disabled={!input.trim() || loading} className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white shadow-lg flex items-center justify-center"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}

