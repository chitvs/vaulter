import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface VaulterPluginSettings {
  showInStatusBar: boolean;  // Setting to control status bar visibility
  mySetting: string;
}

const DEFAULT_SETTINGS: VaulterPluginSettings = {
  showInStatusBar: true,  // Default to show in status bar
  mySetting: 'default'
}

export default class VaulterPlugin extends Plugin {
  settings: VaulterPluginSettings;
  statusBarItemEl: HTMLElement;

  async onload() {
    await this.loadSettings();

    // This adds a status bar item to the bottom of the app. Does not work on mobile apps.
    this.statusBarItemEl = this.addStatusBarItem();
    this.updateVaulter();

    // Register an event listener for file changes to update the stats dynamically
    this.registerEvent(this.app.vault.on('create', this.updateVaulter.bind(this)));
    this.registerEvent(this.app.vault.on('delete', this.updateVaulter.bind(this)));
    this.registerEvent(this.app.vault.on('rename', this.updateVaulter.bind(this)));

    // This adds a simple command that can be triggered anywhere
    this.addCommand({
      id: 'show-vault-stats',
      name: 'Show Vault Stats',
      callback: () => {
        new Notice(`Total Notes: ${this.getNoteCount()}`);
      }
    });

    // This adds a settings tab so the user can configure various aspects of the plugin
    this.addSettingTab(new VaulterSettingTab(this.app, this));

    // If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
    // Using this function will automatically remove the event listener when this plugin is disabled.
    this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
      console.log('click', evt);
    });

    // When registering intervals, this function will automatically clear the interval when the plugin is disabled.
    this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
  }

  // Function to count markdown files (notes)
  getNoteCount(): number {
    return this.app.vault.getFiles().filter(file => file.extension === "md").length;
  }

  // Function to update the status bar with the note count
  updateVaulter() {
    if (this.settings.showInStatusBar) {
      const totalNotes = this.getNoteCount();
      this.statusBarItemEl.setText(`This vault has ${totalNotes} notes`);
    } else {
      this.statusBarItemEl.setText('');  // Clear status bar if setting is off
    }
  }

  onunload() {
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
            this.plugin.updateVaulter();  // Update the status bar immediately
          })
      );
  }
}