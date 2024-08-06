import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  maxRetries: 0,
});

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

export async function GET(request: NextRequest) {
  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Say this is a test" }],
      stream: true,
    });
    //   for await (const chunk of stream) {
    //     process.stdout.write(chunk.choices[0]?.delta?.content || "");
    //   }

    const greeting = "Hello World!!";
    const json = {
      greeting,
      stream,
    };

    return NextResponse.json(json);
  } catch (err: any) {
    return NextResponse.json({ error: "error" });
  }
}
//
