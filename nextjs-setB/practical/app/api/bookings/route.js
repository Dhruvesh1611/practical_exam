// app/api/bookings/route.js
import { NextResponse } from "next/server";

// Sample data
const bookings = [
  { id: 1, name: "John Doe", hotel: "Hotel Sunrise", city: "Goa" },
  { id: 2, name: "Alice Smith", hotel: "Sea View Resort", city: "Mumbai" },
  { id: 3, name: "Ravi Kumar", hotel: "Mountain View Inn", city: "Manali" },
];

// Handle GET request to /api/bookings
export async function GET() {
  return NextResponse.json(bookings);
}
