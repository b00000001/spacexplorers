import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/login">
          <a>Login/Logout</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        |{' '}
        <Link href="/api/users">
          <a>Users API</a>
        </Link>{' '}
        |{' '}
        <Link href="/resources">
          <a>Resources</a>
        </Link>{' '}
        |{' '}
      </nav>
      {!loading && session && (
        <div>
          <p>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </p>
          <p>
            <Link href="/api/profile">
              <a>Profile API</a>
            </Link>
          </p>
          <p>
            <Link href="/api/logout">
              <a>Logout API</a>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
