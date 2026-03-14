import { NextResponse } from "next/server";
import { ai } from "@/lib/aiClient";

export async function POST(request: Request) {
  try {
    const { topic } = await request.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Please enter a topic to continue." },
        { status: 400 }
      );
    }

const prompt = `
Explain the topic "${topic}" in simple language for a student.

Rules:
- Use plain text only
- No markdown
- No bold symbols
- No bullet symbols
- Keep it short and clear
- Write in 2 to 4 small paragraphs
`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      explanation: response.text,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate explanation." },
      { status: 500 }
    );
  }
}