import { App, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface VaulterPluginSettings {
  showInStatusBar: boolean;
}

const DEFAULT_SETTINGS: VaulterPluginSettings = {
  showInStatusBar: true
};

export default class VaulterPlugin extends Plugin {
  settings: VaulterPluginSettings;
  statusBarItemEl: HTMLElement;

  async onload() {
    await this.loadSettings();

    this.statusBarItemEl = this.addStatusBarItem();
    this.updateVaulter();

    this.registerEvent(this.app.vault.on('create', this.updateVaulter.bind(this)));
    this.registerEvent(this.app.vault.on('delete', this.updateVaulter.bind(this)));
    this.registerEvent(this.app.vault.on('rename', this.updateVaulter.bind(this)));

    this.addCommand({
      id: 'show-vault-stats',
      name: 'Show vault stats',
      callback: () => {
        new Notice(`Total notes: ${this.getNoteCount()}`);
      }
    });

    this.addSettingTab(new VaulterSettingTab(this.app, this));
  }

  getNoteCount(): number {
    return this.app.vault.getMarkdownFiles().length
  }

  updateVaulter() {
    if (this.settings.showInStatusBar) {
      const totalNotes = this.getNoteCount();
      this.statusBarItemEl.setText(`This vault has ${totalNotes} notes`);
    } else {
      this.statusBarItemEl.setText('');
    }
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class VaulterSettingTab extends PluginSettingTab {
  plugin: VaulterPlugin;

  constructor(app: App, plugin: VaulterPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName('Show note count in status bar')
      .setDesc('Toggle whether the note count is displayed in the status bar')
      .addToggle(toggle => 
        toggle
          .setValue(this.plugin.settings.showInStatusBar)
          .onChange(async (value) => {
            this.plugin.settings.showInStatusBar = value;
            await this.plugin.saveSettings();
            this.plugin.updateVaulter();
          })
      );
  }
}
