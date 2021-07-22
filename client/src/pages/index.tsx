import { Button } from '../components/Button';
import { FiAlertCircle } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <h1>Next.js App</h1>
      <Button background="#de5753">
        <FiAlertCircle />
        Click Me!
      </Button>
    </>
  );
}
