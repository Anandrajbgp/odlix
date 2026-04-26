"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Share2 } from "lucide-react";
import { useState } from "react";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const platforms = [
  { name: "Instagram", Icon: InstagramIcon, placeholder: "@username" },
  { name: "YouTube", Icon: YoutubeIcon, placeholder: "@channelname" },
  { name: "Twitter/X", Icon: TwitterIcon, placeholder: "@username" },
  { name: "LinkedIn", Icon: LinkedinIcon, placeholder: "linkedin.com/in/username" },
  { name: "Facebook", Icon: FacebookIcon, placeholder: "facebook.com/username" },
  { name: "Website", Icon: Globe, placeholder: "https://yourwebsite.com" },
];

export default function SocialPage() {
  const [handles, setHandles] = useState<Record<string, string>>({});

  function updateHandle(name: string, value: string) {
    setHandles((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Share2 className="h-6 w-6" />
          Social Media
        </h1>
        <p className="text-muted-foreground">Connect your social profiles</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Social Handles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platforms.map((platform) => {
              const IconComponent = platform.Icon;
              return (
                <div key={platform.name} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium">{platform.name}</label>
                    <Input
                      placeholder={platform.placeholder}
                      value={handles[platform.name] || ""}
                      onChange={(e) => updateHandle(platform.name, e.target.value)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Button className="mt-6 w-full bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
            Save Social Profiles
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

