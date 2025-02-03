import { Suspense } from 'react';
import { SignUp } from '@clerk/nextjs';
export default function SignUpPage() {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
