"use server"

import { SignUpFormSchema } from "@/lib/definitions";

export async function signup(formData:FormData) {
    // 1. Validate fields
const validationResult = SignUpFormSchema.safeParse({
  firstName: formData.get("first-name"),
  lastName: formData.get("last-name"),
  email: formData.get("email"),
  password: formData.get("password"),
});

    if (!validationResult.success)
    { return { errors: validationResult.error.flatten().fieldErrors } }
    const {firstName, lastName, email,password} = validationResult.data

    // 2. Create user
    // 3. Create session
    
}