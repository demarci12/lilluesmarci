"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { revalidatePath } from "next/cache";

export type RsvpFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitRsvp(
  _prev: RsvpFormState,
  formData: FormData
): Promise<RsvpFormState> {
  const fullName = String(formData.get("full_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const attending = formData.get("attending") === "yes";
  const guestCount = Number(formData.get("guest_count") ?? 1);
  const dietaryRestrictions = String(
    formData.get("dietary_restrictions") ?? ""
  ).trim();
  const message = String(formData.get("message") ?? "").trim();

  const plusOneNames = formData.getAll("plus_one_name").map(String).filter(Boolean);
  const plusOnes = plusOneNames.map((name) => ({ name }));

  if (!fullName) {
    return { status: "error", message: "Please enter your name." };
  }
  if (!email && !phone) {
    return { status: "error", message: "Please provide an email or phone number." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("rsvps").insert({
    full_name: fullName,
    email: email || null,
    phone: phone || null,
    attending,
    guest_count: attending ? Math.max(1, guestCount) : 0,
    plus_ones: attending ? plusOnes : [],
    dietary_restrictions: dietaryRestrictions || null,
    message: message || null,
  });

  if (error) {
    return { status: "error", message: "Something went wrong, please try again." };
  }

  return { status: "success" };
}

export type RsvpRow = {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  attending: boolean;
  guest_count: number;
  plus_ones: { name: string }[];
  dietary_restrictions: string | null;
  message: string | null;
  status: "pending" | "confirmed" | "declined";
  created_at: string;
};

export async function listRsvps(): Promise<RsvpRow[]> {
  if (!(await isAdminAuthenticated())) throw new Error("Unauthorized");

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data as RsvpRow[];
}

export async function updateRsvpStatus(
  id: string,
  status: RsvpRow["status"]
) {
  if (!(await isAdminAuthenticated())) throw new Error("Unauthorized");

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("rsvps")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/dashboard");
}
