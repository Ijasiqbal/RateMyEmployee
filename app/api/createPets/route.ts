// app/api/pets/route.js
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, breed } = await request.json();

    // Here you can handle the data, e.g., save it to a database
    console.log(`Received pet data: Name: ${name}, Breed: ${breed}`);

    // Respond with a success message
    return NextResponse.json({ message: 'Pet created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create pet' }, { status: 500 });
  }
}
