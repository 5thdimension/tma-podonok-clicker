import { PropsWithChildrens } from "@/app/types/global";

export function Character({ children }: PropsWithChildrens) {
    return (
        <>
            <div
                style={{
                    width: 800,
                    height: 500,
                    display: "inline-block",
                    position: "relative",
                }}>
                {children}
            </div >
        </>
    )
}