// src/components/AuthInitializer.tsx

"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks";
import { initializeAuthListener } from "@/store/features/userSlice";

const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAuthListener());
  }, [dispatch]);

  return null;
};

export default AuthInitializer;
