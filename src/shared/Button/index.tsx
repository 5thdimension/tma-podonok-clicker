import { AllHTMLAttributes } from "react";

interface ButtonProps extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'size'> {
}

export const Button = (props: ButtonProps) => {
    return (
        <Button>
            {props.children}
        </Button>
    )
}