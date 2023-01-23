import React from "react";

interface ButtonProps{
    type: 'primary' | 'secondary' | 'tertiary' | 'outline_grey' | 'disabled' | 'ghost' | 'product';
    width?: string;
    border?: string;
    onClick?: () => void;
    children?: string;
}

const Button: React.FC<ButtonProps> = ({
    width,
    type,
    children,
    onClick
}) => {
    return(
        <button className={'btn-' + type} onClick={onClick} style={{
            width
        }}>
            {children}
        </button>
    );
}

export default Button;