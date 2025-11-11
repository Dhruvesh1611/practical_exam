// app/hotels/[hotelId]/page.js

import Link from "next/link";

export default function HotelDetails({ params }) {
  const { hotelId } = params;

  return (
    <div style={{ padding: 20 }}>
      <h1>Hotel Details</h1>
      <p>Showing details for hotel ID: {hotelId}</p>
      <Link href="/hotels" style={{ color: "blue" }}>← Back to Hotels</Link>
    </div>
  );
}
