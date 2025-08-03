# Vaulter Plugin for Obsidian

**Vaulter** is an Obsidian plugin that displays vault statistics, such as the total number of notes in your vault. It offers an option to toggle the display of these statistics in the status bar for easy access.

## Features

- Note count: shows the total number of Markdown notes in your vault.
- Status bar integration: toggle the visibility of the note count in the status bar.
- Real-time updates: the note count updates dynamically when files are created, renamed, or deleted in the vault.
- Customizable settings: configure whether or not to display the note count in the status bar via the plugin's settings.

## Installation

1. Download the latest release from the [GitHub Releases page](https://github.com/chitvs/vaulter/releases).
2. Copy the `main.js`, and `manifest.json` files to your vault's `.obsidian/plugins/vaulter/` directory.
3. Enable the plugin in Obsidian by going to **Settings > Community Plugins** and turning on **Vaulter**.

## Usage

Once installed, you can:

- See the total number of notes displayed in the status bar.
- Toggle the visibility of the note count in the status bar via the plugin settings (Settings > Vaulter).
- Use the command "Show vault stats" to display the note count in a notice popup.

> [!NOTE]
> This plugin is intended for use with Obsidian Desktop. Mobile support is not currently available.

### Plugin settings

You can configure the plugin through the Settings panel:

1. **Show note count in status bar**: toggle whether the note count is displayed in the status bar.
   - If enabled, the status bar will show a message like `This vault has X notes`.
   - If disabled, the status bar message will be hidden.

## Development

### Prerequisites

- **Node.js**: ensure you have at least Node.js v16 or later installed.
- **Obsidian API**: the plugin uses the latest Obsidian API, so be sure to have the required dependencies.

### Local development setup

1. Clone this repository to your local machine.
2. Navigate to the plugin folder (`.obsidian/plugins/vaulter/`).
3. Install dependencies by running:

   ```bash
   npm install
   ```

4. Start development mode with:

   ```bash
   npm run dev
   ```

5. Reload Obsidian to load the latest changes to the plugin.

### Contributing

Feel free to open an issue or a pull request if you'd like to contribute to the plugin. Contributions are welcome!

## License

This plugin is licensed under the MIT License. See the `LICENSE` file for more details.

## API documentation

For more information on the Obsidian Plugin API, check out the [official documentation](https://github.com/obsidianmd/obsidian-api).
