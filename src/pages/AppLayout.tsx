import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div
      className={styles.app}
      data-testid='layout'
      style={{ border: '1px solid red' }}
    >
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
