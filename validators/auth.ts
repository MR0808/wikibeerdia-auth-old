import { z } from 'zod';

export const registerSchema = z.object({
    firstName: z
        .string({ required_error: 'First name is required' })
        .min(1, { message: 'First name is required' }),
    lastName: z
        .string({ required_error: 'Last name is required' })
        .min(1, { message: 'Last name is required' }),
    email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email' }),
    password: z
        .string({ required_error: 'Password is required' })
        .min(8, { message: 'Password is required' })
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email' }),
    password: z
        .string({ required_error: 'Password is required' })
        .min(1, { message: 'Password is required' }),
    callbackUrl: z.string().optional()
});

export const verifyEmailSchema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email' })
});
