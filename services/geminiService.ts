
import { GoogleGenAI, Type } from "@google/genai";
import type { Suggestion } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGrowthSuggestions = async (profileData: {
  username: string;
  followers: number;
  engagementPercentage: number;
}): Promise<Suggestion[]> => {
  const prompt = `
    You are an expert TikTok growth strategist.
    Analyze the following TikTok profile data:
    - Username: ${profileData.username}
    - Followers: ${profileData.followers}
    - Engagement Rate: ${profileData.engagementPercentage}%

    Provide 5 actionable, creative, and specific suggestions to help this user grow their account. For each suggestion, provide a concise title (max 5 words) and a detailed explanation (2-3 sentences). Focus on practical advice covering content strategy, engagement tactics, and trend utilization.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestions: {
              type: Type.ARRAY,
              description: "A list of 5 growth suggestions.",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: {
                    type: Type.STRING,
                    description: "A short, catchy title for the suggestion.",
                  },
                  suggestion: {
                    type: Type.STRING,
                    description: "A detailed explanation of the suggestion.",
                  },
                },
                required: ["title", "suggestion"],
              },
            },
          },
          required: ["suggestions"],
        },
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result.suggestions as Suggestion[];

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate AI suggestions.");
  }
};
