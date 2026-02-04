import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/client-area/profile')({
  component: ProfilePage,
});

function ProfilePage() {
  return <div>Hello "/(public)/client-area/profile"!</div>;
}
