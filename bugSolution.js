```javascript
// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a sample paragraph.</p>
      <Image src={`/images/my-image.png`} alt="My Image" width={500} height={300} />
    </div>
  );
}
```