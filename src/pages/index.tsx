import { Link } from '@solidjs/router';
import { type JSX } from 'solid-js/jsx-runtime';
import styles from './index.module.css';

export default function (): JSX.Element {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          <Link href="/about">about</Link>
        </p>
        <p>
          <Link href="/test/hoge">test</Link>
        </p>
      </header>
    </div>
  );
}
