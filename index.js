```javascript
// pages/about.js

export default function About() {
  // Simulate an error
  throw new Error('Something went wrong!');
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// error.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong: {error.message}</p>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary errorComponent={MyErrorBoundary}>
      {children}
    </ErrorBoundary>
  );
}
```
```javascript
// app.js
import './globals.css'
import CustomErrorBoundary from './error';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomErrorBoundary>{children}</CustomErrorBoundary>
      </body>
    </html>
  )
}
```