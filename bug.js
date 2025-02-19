```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a sample paragraph.</p>
      {/* Incorrect usage of dynamic import  */}
      <img src={`/images/my-image.png`} alt="My Image" />
    </div>
  );
}
```