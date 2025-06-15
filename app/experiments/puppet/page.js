
"use client";
import { useState } from "react";
import PasswordProtection from "../../components/PasswordProtection";

export default function Puppet() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="flex flex-col items-center px-20 pt-40">
            <h1 className="text-4xl font-bold">Puppet Experiment</h1>
            <p className="mt-4 text-lg">Welcome to the Puppet experiment page!</p>
        </div>
    );
}