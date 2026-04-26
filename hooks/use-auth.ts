"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) throw new Error("Not authenticated");
        const data = await res.json();
        setState({ user: data.user, loading: false, error: null });
      } catch (err) {
        setState({ user: null, loading: false, error: (err as Error).message });
      }
    }
    fetchUser();
  }, []);

  return state;
}

