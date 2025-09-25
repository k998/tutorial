import Link from "next/link";

export default function HooksLayout({ children }:
    { children: React.ReactNode }
) {
    return (
        <div>
            <h1 style={{ color: "745372", fontSize: "30px" }}>React Hooks Explained</h1>
            <div>
                {" "}
                <Link href={"hooks/state"}> State</Link>
                <Link href={"hooks/effects"}> Effects</Link>
                <Link href={"hooks/context"}> Context</Link>
                <Link href={"hooks/callback"}> Callback</Link>

                {children}
            </div>
        </div>
    )
}