"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Lock, Camera, Save, LogOut } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) throw new Error("Not authenticated");
        const data = await res.json();
        setUser(data.user);
      } catch {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [router]);

  async function handleProfileUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
    };

    try {
      const res = await fetch("/api/auth/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setMessage("Profile updated successfully");
        setUser((prev) => prev ? { ...prev, ...body } : null);
      } else {
        setMessage("Failed to update profile");
      }
    } catch {
      setMessage("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handlePasswordChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const body = {
      currentPassword: formData.get("currentPassword") as string,
      newPassword: formData.get("newPassword") as string,
    };

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setMessage("Password changed successfully");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to change password");
      }
    } catch {
      setMessage("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-homepage-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your account settings</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="text-red-500 hover:text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg text-sm ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
          </div>
        )}

        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-homepage-primary to-homepage-secondary text-white">
                {user.name?.charAt(0) || user.email?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-homepage-primary text-white flex items-center justify-center shadow-lg hover:bg-homepage-primary/90">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-muted-foreground capitalize">{user.role.toLowerCase()} Account</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="name" name="name" defaultValue={user.name} className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" name="email" type="email" defaultValue={user.email} className="pl-10" disabled />
                    </div>
                    <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" name="phone" type="tel" defaultValue={user.phone || ""} className="pl-10" />
                    </div>
                  </div>
                  <Button type="submit" disabled={saving} className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
                    <Save className="mr-2 h-4 w-4" />
                    {saving ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" name="currentPassword" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" name="newPassword" type="password" minLength={8} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" minLength={8} required />
                  </div>
                  <Button type="submit" disabled={saving} className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
                    <Lock className="mr-2 h-4 w-4" />
                    {saving ? "Updating..." : "Update Password"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

