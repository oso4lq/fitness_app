export default function WorkoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div data-tid="layout">
            {children}
        </div>
    );
}