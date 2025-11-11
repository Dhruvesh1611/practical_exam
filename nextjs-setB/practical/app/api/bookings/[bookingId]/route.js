// app/api/bookings/[bookingId]/route.js
import { NextResponse } from "next/server";

// Same sample data (in real case you’d use a DB)
const bookings = [
  { id: 1, name: "John Doe", hotel: "Hotel Sunrise", city: "Goa" },
  { id: 2, name: "Alice Smith", hotel: "Sea View Resort", city: "Mumbai" },
  { id: 3, name: "Ravi Kumar", hotel: "Mountain View Inn", city: "Manali" },
];

// Handle GET request to /api/bookings/[bookingId]
export async function GET(request, { params }) {
  const { bookingId } = params;
  const booking = bookings.find(b => b.id === parseInt(bookingId));

  if (!booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  return NextResponse.json(booking);
}

// Handle DELETE request to /api/bookings/[bookingId]
export async function DELETE(request, { params }) {
  const { bookingId } = params;
  return NextResponse.json({ message: `Booking ${bookingId} deleted successfully` });
}
