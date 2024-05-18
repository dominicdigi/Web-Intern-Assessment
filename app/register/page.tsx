'use client'
import { useState } from "react";
import Header from "../components/header";
import LCInput from "../components/LCInput";
import LCButton from "../components/LCButton";

export default function Register() {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
     <main>
         <Header />
         <div className="flex flex-col items-center mt-4">
            <h1 className="text-3xl">Join The Community</h1>
            <div className="flex flex-col w-[300px]">
               <LCInput type="text" className="mt-4" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e?.target?.value)}/>
               <LCInput type="text" className="mt-2" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e?.target?.value)}/>
               <LCInput type="text" className="mt-2" placeholder="Username" value={username} onChange={(e) => setUsername(e?.target?.value)}/>
               <LCInput type="email" className="mt-2" placeholder="Email" value={email} onChange={(e) => setEmail(e?.target?.value)}/>
               <LCInput type="password" className="mt-2" placeholder="Password" value={password} onChange={(e) => setPassword(e?.target?.value)}/>
               <LCButton text="Create Account" className="mt-4"/>
            </div>
         </div>
     </main>
   );
  }
  