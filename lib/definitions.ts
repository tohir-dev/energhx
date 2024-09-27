import z from "zod";
// you can also destructure the items import {string, object, z} from 'zod'


const invalid_type_error = "Invalid type provided for this field";
const required_error = "This field cannot be blank";

export const SignUpFormSchema = z.object({
  firstName: z
    .string({ invalid_type_error, required_error })
    .min(1, "Value is too short"),
  lastName: z
    .string({ invalid_type_error, required_error })
    .min(1, "Value is too short"),
  email: z
    .string({ invalid_type_error, required_error })
    .email("Please provide a valid email")
    .min(1, "Value is too short"),
  password: z
    .string({ invalid_type_error, required_error })
    .min(6, "Password is too short"),
});

