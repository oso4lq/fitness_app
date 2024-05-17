import styles from "./page.module.css";

export default function CourseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}
