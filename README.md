# Next.js 15 Client-Side Navigation Error

This repository demonstrates a common error encountered in Next.js 15 applications involving client-side navigation and error handling.  The `about.js` page intentionally throws an error, causing the application to crash when navigating to it.

## Problem

When navigating from the home page (`pages/index.js`) to the about page (`pages/about.js`) using a `<Link>` component, the application crashes due to the unhandled error thrown in `about.js`.  This results in a poor user experience.

## Solution

The solution involves using `next/error` to handle this error gracefully. This creates a custom error boundary to catch errors during client-side navigation and display a user-friendly message instead of a full crash.