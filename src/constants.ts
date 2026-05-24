export const CHATGPT_URL    = "https://chatgpt.com/";
export const CLAUDE_URL     = "https://claude.ai/";
export const DEEPSEEK_URL   = "https://chat.deepseek.com/";
export const PERPLEXITY_URL = "https://www.perplexity.ai/";
export const GEMINI_URL     = "https://gemini.google.com/app";
export const GROK_URL       = "https://grok.com/";
export const COPILOT_URL    = "https://copilot.microsoft.com/";
export const MANUS_URL      = "https://manus.im/";
export const KIMI_URL       = "https://kimi.ai/";

export const SERVICE_URLS = {
	chatgpt:    CHATGPT_URL,
	claude:     CLAUDE_URL,
	deepseek:   DEEPSEEK_URL,
	perplexity: PERPLEXITY_URL,
	gemini:     GEMINI_URL,
	grok:       GROK_URL,
	copilot:    COPILOT_URL,
	manus:      MANUS_URL,
	kimi:       KIMI_URL,
} as const;

export type ServiceKey = keyof typeof SERVICE_URLS;
