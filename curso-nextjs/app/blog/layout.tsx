import type { ReactNode } from "react";

export default function BlogLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <header>Cabecera del Blog</header>
            <main>
                <section>{children}</section>
                <aside>
                    <form>
                        <input type="search" placeholder="Buscar..." />
                        <input type="submit" value="Buscar" />
                    </form>
                </aside>
            </main>
            <footer>Pie del Blog</footer>
        </>
    );
}



