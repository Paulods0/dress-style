import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/woman/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(public)/woman/$id"!</div>;
}
