import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Next.js Hotel App</h1>
      <Link href="/hotels" style={{ color: "blue" }}>View Hotels</Link>
    </div>
  );
}
