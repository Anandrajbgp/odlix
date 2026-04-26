"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "917372891228";
  const message = "Hi Odlix team! I have a question about your platform.";

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-72 rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-border overflow-hidden"
          >
            <div className="bg-green-500 p-4 text-white">
              <h3 className="font-semibold">Odlix Support</h3>
              <p className="text-sm text-white/80">Typically replies in minutes</p>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                Have questions? Chat with us on WhatsApp for instant support.
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-green-500 hover:bg-green-600 text-white py-2.5 text-sm font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="WhatsApp chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
