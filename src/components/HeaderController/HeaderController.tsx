"use client";

import { usePathname } from 'next/navigation';
import { Header } from "@/components/Header";

const HeaderController = () => {
    const pathname = usePathname();

    // List of paths where the header should be hidden
    const hideHeaderPaths = ['/ADD_YOUR_LINK'];

    const showHeader = !hideHeaderPaths.includes(pathname);

    return showHeader ? <Header /> : null;
};

export default HeaderController;
