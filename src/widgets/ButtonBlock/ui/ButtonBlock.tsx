import { FC } from "react";
import { useNavigate } from "react-router-dom";

import firstIconD from "../../../../assets/icons/Frame 21.svg"
import secondIconL from "../../../../assets/icons/Frame 23.png"
import thirdIconL from "../../../../assets/icons/Frame 22.png"
import fourthIconL from "../../../../assets/icons/Frame 24.png"



export const ButtonBlock: FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{}}>

            <div style={{
                background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(186,184,34,1) 67%, rgba(255,255,255,1) 100%)"
            }}>

            </div>

            <div style={{
                background: "white",
                textAlign: "center",
            }}>
                <img src={firstIconD} alt="" style={{
                    margin: 5
                }}
                    onClick={() =>
                        navigate("/game")

                    } />
                <img src={secondIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() =>
                        navigate("/quest")
                    } />
                <img src={thirdIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() =>
                        navigate("/shop")
                    } />
                <img src={fourthIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() =>
                        navigate("/game")
                    } />
            </div >
        </div>
    );
}