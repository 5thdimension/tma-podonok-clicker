import { PropsWithChildrens } from "@/app/types/global";

export function Character({ children }: PropsWithChildrens) {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "50vh",
                    display: "inline-block",
                    position: "relative",
                }}>
                {children}
            </div >
        </>
    )
}