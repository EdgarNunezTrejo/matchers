import { z } from 'zod';

const registerSchema = z.object({
    name: z.string().min(3, "Name is required"),
    lastName: z.string().min(3, "Last Name is required"),
    email: z.string().min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
    match: z.string().optional(),
    terms: z.boolean().refine((value) => value === true, { message: "You need to accept the Terms of Service to create an account" })
});

type RegisterValues = z.infer<typeof registerSchema>;

export {
    registerSchema,
    RegisterValues
};
