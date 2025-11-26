import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/woman/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(public)/woman"!</div>;
}
