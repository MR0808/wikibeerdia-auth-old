'use client';

import { Input } from '../ui/input';
import {
    FaEnvelope,
    FaKey,
    FaUser,
    FaRegEyeSlash,
    FaRegEye
} from 'react-icons/fa';
import { useState } from 'react';
import { Button } from '../ui/button';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
};

const FormInputIcon = ({ label, name, type, defaultValue }: FormInputProps) => {
    return (
        <>
            <Input
                type={type}
                placeholder={label}
                name={name}
                defaultValue={defaultValue}
                className="rounded-full h-14 bg-purple-50 border border-zinc-800 border-opacity-30 focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-opacity-20 focus-visible:ring-offset-2 placeholder-zinc-800 placeholder-opacity-30 px-10"
            />
            <div
                className={`absolute inset-y-0 ${
                    name !== 'lastName' && 'left-0'
                } flex items-center pl-3 pointer-events-none`}
            >
                {name === 'password' ? (
                    <FaKey className="pl-2 size-5 text-zinc-800 text-opacity-60" />
                ) : name === 'email' ? (
                    <FaEnvelope className="pl-2 size-5 text-zinc-800 text-opacity-60" />
                ) : (
                    <FaUser className="pl-2 size-5 text-zinc-800 text-opacity-60" />
                )}
            </div>
        </>
    );
};
export default FormInputIcon;

export const RegisterPasswordInputIcon = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                className="rounded-full h-14 bg-purple-50 border border-zinc-800 border-opacity-30 focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-opacity-20 focus-visible:ring-offset-2 placeholder-zinc-800 placeholder-opacity-30 px-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaKey className="pl-2 size-5 text-zinc-800 text-opacity-60" />
            </div>
            <div
                className="absolute inset-y-0 right-0 flex items-center pl-3"
                tabIndex={-1}
            >
                <Button
                    type="button"
                    variant="link"
                    onClick={() => {
                        setShowPassword((prev) => !prev);
                    }}
                >
                    {showPassword ? (
                        <FaRegEye className="size-5" />
                    ) : (
                        <FaRegEyeSlash className="size-5" />
                    )}
                </Button>
            </div>
        </>
    );
};
