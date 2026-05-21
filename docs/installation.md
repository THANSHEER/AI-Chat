# Installation

## Requirements

| Requirement | Details |
|---|---|
| Obsidian | ≥ 1.7.2 |
| Platform | macOS, Windows, or Linux desktop only |
| Node.js (dev only) | ≥ 22 |

> **Desktop only** — the plugin uses Electron's `<webview>` tag, which is unavailable in Obsidian mobile.

---

## Community plugin store (once listed)

1. Open **Settings → Community plugins → Browse**.
2. Search for **AI Browser Chat** and click **Install**, then **Enable**.

---

## Manual install

1. Go to the [latest release](../../releases/latest) and download `main.js`, `manifest.json`, and `styles.css`.
2. Create the folder `<vault>/.obsidian/plugins/aibrowser-chat/` and copy the three files into it.
3. In Obsidian go to **Settings → Community plugins → Installed plugins** and toggle **AI Browser Chat** on.

---

## BRAT (beta / pre-release)

1. Install the [BRAT](https://github.com/TfTHacker/obsidian42-brat) community plugin.
2. Open BRAT settings → **Add Beta Plugin** → enter this repository's URL.
3. Enable **AI Browser Chat** in **Settings → Community plugins**.

---

## Enabling the sidebar

After installation:

- Click the **chat bubble icon** in the left ribbon, or
- Run **AI Browser Chat: Open** from the command palette (`Cmd/Ctrl+P`), or
- Assign a hotkey to **AI Browser Chat: Toggle sidebar** in **Settings → Hotkeys**.
