import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'SOAR | Settings' }, { name: 'description', content: 'Manage your account' }];
}

export default function Settings() {
  return <div>settings</div>;
}
