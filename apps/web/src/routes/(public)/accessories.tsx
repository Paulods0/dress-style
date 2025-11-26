import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/accessories')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(public)/accessories"!</div>;
}
