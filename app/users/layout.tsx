export default function UserLayout({ children }:
    { children: React.ReactNode }
) {
    return (
        <div>
            <h1 style={{ color: "745372", fontSize: "30px" }}>User Page</h1>
            {children}
        </div>
    )
}