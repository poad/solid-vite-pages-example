import { RouteDefinition, useRoutes } from '@solidjs/router';
import { type JSX } from 'solid-js/jsx-runtime';

import routes from '~solid-pages';

export default function (): JSX.Element {
  const Routes = useRoutes(routes as RouteDefinition[]);

  return <Routes />;
}
