// モック応答生成関数
// 将来的にLLM APIに置き換え可能
export const generateMockResponse = async (_userMessage: string): Promise<string> => {
  // 応答のバリエーション
  const responses = [
    "foo bar",
    "なるほど、興味深いですね。",
    "それについてもう少し詳しく教えてください。",
    "了解しました！",
    "素晴らしいアイデアですね。",
    "確認させていただきます。",
    "ありがとうございます。",
    "そうですね、私もそう思います。",
    "面白い視点ですね。",
    "承知いたしました。"
  ];

  // ランダムな遅延を追加（0.5秒から2秒）
  const delay = Math.random() * 1500 + 500;
  await new Promise(resolve => setTimeout(resolve, delay));

  // ランダムな応答を返す
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

// 将来的にLLM APIを使用する場合の例
// export const generateLLMResponse = async (userMessage: string): Promise<string> => {
//   const response = await fetch('/api/llm', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message: userMessage })
//   });
//   const data = await response.json();
//   return data.reply;
// };