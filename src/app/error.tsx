"use client";

import type { ReactNode } from "react";

/**
 * Handles any 500 errors.
 * @returns An error page.
 */
export default function Error({ error, reset }: { error: Error; reset: () => void; }): ReactNode {
    // eslint-disable-next-line no-console
    console.error(error);

    return (
        <>
            <h2>Error 500 - Internal server error</h2>
            <p>Click <a onClick={reset}>here</a> to try again.</p>
        </>
    );
}
