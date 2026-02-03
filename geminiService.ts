
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
你現在是「恆序商務中心」(Aeterna Centre) 的頂級商務顧問。
你的目標是以極具專業感、禮貌且優雅的語氣回答潛在客人的問題。
關於恆序：
- 地點：信義旗艦館(101旁)、內湖科技園區(瑞光、金莊、洲子館)。
- 服務：私人辦公室(1.5萬起)、共享座位(4.5千起)、虛擬進駐(2.5千起)。
- 優勢：24/7進出、高速網路、無限咖啡、頂級行政秘書。
規則：
1. 僅使用繁體中文。
2. 語氣要像高端飯店的禮賓人員。
3. 如果被問到非商務中心相關的問題，請禮貌地引導回辦公空間預約。
`;

export const getGeminiResponse = async (message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });
    return response.text || "目前顧問忙碌中，請撥打 (02) 1234-5678。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，系統暫時無法處理您的請求，請稍後再試。";
  }
};
