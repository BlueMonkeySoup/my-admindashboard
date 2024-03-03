import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <Link href="/login">
        <button>go to login</button>
      </Link>
      <Link href="/dashboard">
        <button>go to dashboard</button>
      </Link>
    </div>
  );
}
