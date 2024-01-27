import type { JSX } from "react";
import Link from "next/link";

/**
 * Handles any 404 errors.
 * @returns An error page.
 */
export default function Error(): JSX.Element {
    return (
        <>
            <h2>Error 404 - Page not found</h2>
            <p>Click <Link href="/">here</Link> to go to the homepage.</p>
        </>
    );
}
