import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import firstIconD from "../../../../assets/icons/Frame 21.svg"
import secondIconL from "../../../../assets/icons/Frame 23l.svg"
import thirdIconL from "../../../../assets/icons/Frame 22l.svg"
import fourthIconL from "../../../../assets/icons/Frame 24.svg"

import firstIconL from "../../../../assets/icons/Frame 21l.svg"
import secondIconD from "../../../../assets/icons/Frame 23d.svg"
import thirdIconD from "../../../../assets/icons/Frame 22d.svg"


export const ButtonBlock: FC = () => {
    const [ligter, setLighter] = useState(0);
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
                <img src={ligter == 1 ? firstIconD : firstIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() => {
                        navigate("/game")
                        setLighter(1)
                        console.log(ligter)
                    }
                    } />
                <img src={ligter == 2 ? secondIconD : secondIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() => {
                        navigate("/quest")
                        setLighter(2)
                        console.log(ligter)
                    }
                    } />
                <img src={ligter == 3 ? thirdIconD : thirdIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() => {
                        navigate("/shop")
                        setLighter(3)
                        console.log(ligter)
                    }
                    } />
                <img src={fourthIconL} alt="" style={{
                    margin: 5
                }}
                    onClick={() =>
                        navigate("/")
                    } />
            </div >
        </div>
    );
}