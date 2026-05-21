# Settings Reference

Open **Settings → AI Browser Chat** in Obsidian.

---

## AI services

| Setting | Default | Description |
|---|---|---|
| Enable ChatGPT | On | Show ChatGPT in the service dropdown |
| Enable Claude | On | Show Claude in the service dropdown |
| Enable DeepSeek | On | Show DeepSeek in the service dropdown |
| Enable Perplexity | On | Show Perplexity in the service dropdown |
| Enable Gemini | On | Show Google Gemini in the service dropdown |
| Enable Grok | On | Show Grok (xAI) in the service dropdown |

---

## Sidebar

| Setting | Default | Description |
|---|---|---|
| Theme | Auto | Force Light or Dark on the plugin chrome, or follow Obsidian's theme |
| Default service | ChatGPT | Which AI service opens when the sidebar first loads |
| Open sidebar on startup | On | Restore the sidebar automatically when Obsidian loads |

---

## Browser

| Setting | Default | Description |
|---|---|---|
| Auto-refresh interval | 60 min | Silently reload the AI page after this many minutes of inactivity. Set to 0 to disable. |

---

## Vault context

| Setting | Default | Description |
|---|---|---|
| Auto-clear context after send | Off | Remove all context items automatically after clicking **Add** |
| Context prefix | _(empty)_ | Text prepended to every context send, e.g. a prompt instruction |
| Max context length | 50,000 chars | Character cap; content beyond this is truncated with a notice |
| Send selected text to AI | On | Enable the command that injects editor-selected text into the active AI service |

---

## Commands

These appear in the command palette (`Cmd/Ctrl+P`). All can be assigned hotkeys in **Settings → Hotkeys**.

| Command | Action |
|---|---|
| Open | Open or focus the sidebar panel |
| Toggle sidebar | Open the panel if closed, close it if open |
| Open ChatGPT | Switch to ChatGPT and open the panel |
| Open Claude | Switch to Claude and open the panel |
| Open DeepSeek | Switch to DeepSeek and open the panel |
| Open Perplexity | Switch to Perplexity and open the panel |
| Open Gemini | Switch to Gemini and open the panel |
| Open Grok | Switch to Grok and open the panel |
| Send selected text to AI | Inject the current editor selection into the active chat |
