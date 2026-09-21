"use server";

import { redirect } from "next/navigation";
import { createAdminSession, verifyAdminPassword } from "@/lib/admin-auth";

export type LoginState = { error?: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (!verifyAdminPassword(password)) {
    return { error: "Incorrect password." };
  }

  await createAdminSession();
  redirect("/admin/dashboard");
}
