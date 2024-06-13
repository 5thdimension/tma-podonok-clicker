import { PropsWithChildrens } from "@/app/types/global"


export const UpScreen = ({ children }: PropsWithChildrens) => {
    return (
        <>
            <div className="экран верхний (счет, лого)"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "15%",
                    textAlign: "center"
                }}>
                {children}
            </div>
        </>
    )
}