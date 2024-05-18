'use client'
import { useState } from "react";
import Header from "../components/header";
import LCInput from "../components/LCInput";
import LCButton from "../components/LCButton";

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    return (
     <main>
        <Header />
        <div className="flex flex-col items-center mt-4">
            <h1 className="text-3xl">Welcome Back</h1>
            <div className="flex flex-col w-[300px] mt-2">
               <LCInput type="email" className="mt-2" placeholder="Email" value={email} onChange={(e) => setEmail(e?.target?.value)}/>
               <LCInput type="password" className="mt-2" placeholder="Password" value={password} onChange={(e) => setPassword(e?.target?.value)}/>
               <LCButton text="Login" className="mt-4"/>
            </div>
         </div>
     </main>
    );
  }
  