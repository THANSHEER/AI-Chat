# Privacy Policy — AI Browser Chat

_Last updated: 2026-05-21_

AI Browser Chat is a local Obsidian plugin. This policy explains exactly what data is and is not collected **by this plugin and its author**.

---

## What AI Browser Chat does NOT do

- **Does not collect any personal data.** No names, email addresses, user IDs, or any identifying information are ever collected.
- **Does not send data to the plugin author's servers.** There are no servers operated by this plugin. There is no backend.
- **Does not contain analytics or telemetry.** There is no tracking, crash reporting, or usage monitoring of any kind.
- **Does not store API keys.** AI Browser Chat uses web sessions only; it never asks for or stores API credentials.
- **Does not read your vault beyond what you explicitly select.** The plugin only reads note content when you click **Add** or **Send selected text**.

---

## What AI Browser Chat does locally

### Session cookies

When you log in to an AI service inside the panel, the session cookie is stored in an Electron partition named `persist:aibrowser-chat` on your local device. This is standard browser session storage — it keeps you logged in across Obsidian restarts. This data never leaves your device via the plugin.

Location of Electron partition data:
- **macOS:** `~/Library/Application Support/obsidian/Partitions/persist_aibrowser-chat/`
- **Windows:** `%APPDATA%\obsidian\Partitions\persist_aibrowser-chat\`
- **Linux:** `~/.config/obsidian/Partitions/persist_aibrowser-chat\`

You can clear this data by removing the folder above, which will log you out of all AI services in the panel.

### Context items

The list of notes and folders you add to the context panel is saved to your vault's plugin data file (`<vault>/.obsidian/plugins/aibrowser-chat/data.json`). This file is local to your vault and is never uploaded or shared by the plugin.

---

## Third-party AI services — important notice

AI Browser Chat is a **browser wrapper**. When you click **Add** or **Send selected text**, your vault content is sent directly to whichever AI service is open in the panel — exactly as if you had typed or pasted it yourself in that service's website.

**The plugin author has no visibility into, and no control over, what these services do with your data.**

The plugin author does not know:
- Whether these services store, log, or retain the content you send
- Whether they use your content to train their AI models
- What their data-retention periods are
- What rights they claim over submitted content

Each service has its own privacy policy and terms of service. You are responsible for reviewing them before sending any content — especially sensitive, confidential, or personal information.

| Service | Privacy Policy | Terms of Service |
|---|---|---|
| ChatGPT (OpenAI) | [openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy) | [openai.com/policies/usage-policies](https://openai.com/policies/usage-policies) |
| Claude (Anthropic) | [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) | [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup) |
| Google Gemini | [policies.google.com/privacy](https://policies.google.com/privacy) | [policies.google.com/terms](https://policies.google.com/terms) |
| Grok (xAI) | [x.ai/legal/privacy-policy](https://x.ai/legal/privacy-policy) | [x.ai/legal/terms-of-service](https://x.ai/legal/terms-of-service) |
| DeepSeek | [deepseek.com/privacy_policy](https://www.deepseek.com/privacy_policy) | [deepseek.com/terms](https://www.deepseek.com/terms) |
| Perplexity AI | [perplexity.ai/privacy](https://www.perplexity.ai/privacy) | [perplexity.ai/tos](https://www.perplexity.ai/tos) |

> **Recommendation:** If you work with confidential or sensitive information, review each service's data-use and opt-out settings before sending vault content through this plugin.

---

## Open source

AI Browser Chat's source code is fully open and auditable on GitHub. Anyone can verify these claims by reading the code.

---

## Contact

For privacy questions or concerns, open an issue on the GitHub repository.
