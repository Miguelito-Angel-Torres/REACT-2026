"use client"
import { useState, type ReactNode } from "react";

export default function BlogLayout({
    children,
}: {
    children: ReactNode;
}) {
    // variable de estado se comparte en las tres rutas: layouts
    // template no comparte
    const [input, setInput] = useState("");
    
    return (<>
        <h2>Rutas relativas a la cuenta del Usuario</h2>
        <h3>Explicando la diferencia entre Layouts y Templates</h3>
        {children}
        <input type="text" value = {input} onChange={e => setInput(e.target.value)} />
        </>

    )



}
