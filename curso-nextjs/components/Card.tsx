import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
    const cardStyle = {
        border: "thin solid red",
        margin: "1rem auto",
        padding: "1rem"
    };

    return <div style={cardStyle}>
        <h1>Desde la Card</h1>
        {children}</div>;
};

export default Card;