"use client";

import { useRouter } from "next/navigation";


export default function Login(){
    const router = useRouter();

    const handleClick = () => {
        router.push("/productos");
    }


    return <>
        <h1>Login</h1>
        <button onClick={handleClick}>Regresar al Home</button>
    
    </>
}

