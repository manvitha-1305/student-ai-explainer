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
Explain the topic "${topic}" for a student in simple language.

Format the response in clean markdown using:
- a short introduction paragraph
- 3 to 5 bullet points
- a short conclusion

Rules:
- keep it easy to understand
- avoid difficult words
- keep it under 150 words
- do not use very long paragraphs
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