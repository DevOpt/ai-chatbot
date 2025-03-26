export const DEFAULT_CHAT_MODEL: string = 'grok-2';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'grok-2',
    name: 'Grok 2',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'High-intelligence model',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
