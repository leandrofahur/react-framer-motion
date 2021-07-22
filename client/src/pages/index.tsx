import { Button } from '../components/Button';
import { Input } from '../components/Input';

import { FiAlertCircle } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <h1>Next.js App</h1>
      <div style={{ width: '50%' }}>
        <Input type="text">
          <FiAlertCircle />
        </Input>
        <Button background="#de5753">
          <FiAlertCircle />
          Click Me!
        </Button>
      </div>
    </>
  );
}
