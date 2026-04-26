"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Platform configuration</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5" /> General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Platform Name</Label>
            <Input defaultValue="Odlix" />
          </div>
          <div>
            <Label>Support Email</Label>
            <Input defaultValue="team.odlix@gmail.com" />
          </div>
          <div>
            <Label>Support Phone</Label>
            <Input defaultValue="+91 7372891228" />
          </div>
          <Button className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

