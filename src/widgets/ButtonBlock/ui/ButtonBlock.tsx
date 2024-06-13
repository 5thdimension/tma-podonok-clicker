import { Button } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const ButtonBlock: FC = () => {
    const navigate = useNavigate();
    return (
        <>

            <div style={{
                height: 3,
                background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(186,184,34,1) 67%, rgba(255,255,255,1) 100%)"
            }}>

            </div>

            <div style={{
                background: "white",
                textAlign: "center",
            }}>
                <Button
                    onClick={() =>
                        navigate("/game")
                    }
                > 1
                </Button>
                <Button
                    style={{
                        margin: 5
                    }}
                    onClick={() =>
                        navigate("/quest")
                    }
                > 2 </Button>
                <Button
                    style={{
                        margin: 5
                    }}
                    onClick={() =>
                        navigate("/shop")
                    }
                >
                    3
                </Button>
                <Button
                    style={{
                        margin: 5
                    }}
                >
                    4
                </Button>
            </div >
        </>
    );
}