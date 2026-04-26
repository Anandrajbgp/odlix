"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, ExternalLink } from "lucide-react";
import Link from "next/link";

const tools = [
  { name: "Canva Pro", category: "Design", description: "Create stunning graphics and social media posts", link: "#" },
  { name: "Notion", category: "Productivity", description: "All-in-one workspace for notes and planning", link: "#" },
  { name: "Google Analytics", category: "Marketing", description: "Track website traffic and user behavior", link: "#" },
  { name: "Grammarly", category: "Writing", description: "AI-powered writing assistant", link: "#" },
  { name: "TubeBuddy", category: "YouTube", description: "YouTube channel management and optimization", link: "#" },
  { name: "Ahrefs", category: "SEO", description: "SEO tools and backlink analysis", link: "#" },
];

export default function ToolsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Tools</h1>
        <p className="text-muted-foreground">Recommended tools for your journey</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{tool.name}</CardTitle>
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">{tool.category}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <Link href={tool.link} target="_blank">
                <Button variant="outline" size="sm" className="w-full">
                  Open Tool <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

