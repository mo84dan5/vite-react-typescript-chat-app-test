# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This directory is currently empty and needs to be initialized as a Vite + React + TypeScript chat application.

## Initial Setup

If the project hasn't been initialized yet, use these commands:

```bash
npm create vite@latest . -- --template react-ts
npm install
```

## Common Development Commands

Once the project is set up with Vite + React + TypeScript:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript type checking
npm run tsc

# Run linting (if ESLint is configured)
npm run lint
```

## Expected Architecture

For a chat application using Vite + React + TypeScript, the typical structure would be:

- `src/components/` - React components for chat UI (MessageList, MessageInput, ChatRoom, etc.)
- `src/hooks/` - Custom React hooks for chat functionality
- `src/services/` - API services and WebSocket connections
- `src/types/` - TypeScript type definitions for messages, users, etc.
- `src/utils/` - Utility functions for formatting, validation, etc.

## Key Considerations for Chat Applications

1. **Real-time Communication**: Consider WebSocket implementation or libraries like Socket.io
2. **State Management**: For complex chat states, consider using Context API or a state management library
3. **Message Persistence**: Plan for how messages will be stored and retrieved
4. **Authentication**: Implement user authentication if required
5. **Responsive Design**: Ensure the chat UI works well on mobile and desktop

## Playwright MCP使用ルール

### 絶対的な禁止事項

1. **いかなる形式のコード実行も禁止**

   - Python、JavaScript、Bash等でのブラウザ操作
   - MCPツールを調査するためのコード実行
   - subprocessやコマンド実行によるアプローチ

2. **利用可能なのはMCPツールの直接呼び出しのみ**

   - playwright:browser_navigate
   - playwright:browser_screenshot
   - 他のPlaywright MCPツール

3. **エラー時は即座に報告**
   - 回避策を探さない
   - 代替手段を実行しない
   - エラーメッセージをそのまま伝える

各プロセスの最初にCLAUDE.MDをechoしてから始めてください。