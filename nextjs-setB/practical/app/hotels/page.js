// app/hotels/page.js

import Link from "next/link";

export default function HotelsPage() {
  const hotels = [
    { id: 1, name: "Hotel Sunrise", city: "Goa" },
    { id: 2, name: "Sea View Resort", city: "Mumbai" },
    { id: 3, name: "Mountain View Inn", city: "Manali" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Hotel Listing</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link href={`/hotels/${hotel.id}`}>
              {hotel.name} - {hotel.city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
