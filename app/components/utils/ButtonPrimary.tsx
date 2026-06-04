"use client";

type ButtonPrimaryProps = {
    text: string;
    action?: () => void;
};

const ButtonPrimary = ({ text, action }: ButtonPrimaryProps) => {
    return <button className="btn-primary" onClick={action}>{text}</button>;
};

export default ButtonPrimary;