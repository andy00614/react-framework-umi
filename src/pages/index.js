import styles from './index.css';
import Redirect from 'umi/redirect';

export default function() {
  return (
    <div>
      <Redirect to="/search" />;
    </div>
  );
}
