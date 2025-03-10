/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => VaulterPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  showInStatusBar: true,
  // Default to show in status bar
  mySetting: "default"
};
var VaulterPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.statusBarItemEl = this.addStatusBarItem();
    this.updateVaulter();
    this.registerEvent(this.app.vault.on("create", this.updateVaulter.bind(this)));
    this.registerEvent(this.app.vault.on("delete", this.updateVaulter.bind(this)));
    this.registerEvent(this.app.vault.on("rename", this.updateVaulter.bind(this)));
    this.addCommand({
      id: "show-vault-stats",
      name: "Show Vault Stats",
      callback: () => {
        new import_obsidian.Notice(`Total Notes: ${this.getNoteCount()}`);
      }
    });
    this.addSettingTab(new VaulterSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  // Function to count markdown files (notes)
  getNoteCount() {
    return this.app.vault.getFiles().filter((file) => file.extension === "md").length;
  }
  // Function to update the status bar with the note count
  updateVaulter() {
    if (this.settings.showInStatusBar) {
      const totalNotes = this.getNoteCount();
      this.statusBarItemEl.setText(`This vault has ${totalNotes} notes`);
    } else {
      this.statusBarItemEl.setText("");
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
};
var VaulterSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Show note count in status bar").setDesc("Toggle whether the note count is displayed in the status bar").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showInStatusBar).onChange(async (value) => {
        this.plugin.settings.showInStatusBar = value;
        await this.plugin.saveSettings();
        this.plugin.updateVaulter();
      })
    );
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5pbnRlcmZhY2UgVmF1bHRlclBsdWdpblNldHRpbmdzIHtcbiAgc2hvd0luU3RhdHVzQmFyOiBib29sZWFuOyAgLy8gU2V0dGluZyB0byBjb250cm9sIHN0YXR1cyBiYXIgdmlzaWJpbGl0eVxuICBteVNldHRpbmc6IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogVmF1bHRlclBsdWdpblNldHRpbmdzID0ge1xuICBzaG93SW5TdGF0dXNCYXI6IHRydWUsICAvLyBEZWZhdWx0IHRvIHNob3cgaW4gc3RhdHVzIGJhclxuICBteVNldHRpbmc6ICdkZWZhdWx0J1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXVsdGVyUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IFZhdWx0ZXJQbHVnaW5TZXR0aW5ncztcbiAgc3RhdHVzQmFySXRlbUVsOiBIVE1MRWxlbWVudDtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIC8vIFRoaXMgYWRkcyBhIHN0YXR1cyBiYXIgaXRlbSB0byB0aGUgYm90dG9tIG9mIHRoZSBhcHAuIERvZXMgbm90IHdvcmsgb24gbW9iaWxlIGFwcHMuXG4gICAgdGhpcy5zdGF0dXNCYXJJdGVtRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcbiAgICB0aGlzLnVwZGF0ZVZhdWx0ZXIoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBmaWxlIGNoYW5nZXMgdG8gdXBkYXRlIHRoZSBzdGF0cyBkeW5hbWljYWxseVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignY3JlYXRlJywgdGhpcy51cGRhdGVWYXVsdGVyLmJpbmQodGhpcykpKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIHRoaXMudXBkYXRlVmF1bHRlci5iaW5kKHRoaXMpKSk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdyZW5hbWUnLCB0aGlzLnVwZGF0ZVZhdWx0ZXIuYmluZCh0aGlzKSkpO1xuXG4gICAgLy8gVGhpcyBhZGRzIGEgc2ltcGxlIGNvbW1hbmQgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGFueXdoZXJlXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2hvdy12YXVsdC1zdGF0cycsXG4gICAgICBuYW1lOiAnU2hvdyBWYXVsdCBTdGF0cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICBuZXcgTm90aWNlKGBUb3RhbCBOb3RlczogJHt0aGlzLmdldE5vdGVDb3VudCgpfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGhpcyBhZGRzIGEgc2V0dGluZ3MgdGFiIHNvIHRoZSB1c2VyIGNhbiBjb25maWd1cmUgdmFyaW91cyBhc3BlY3RzIG9mIHRoZSBwbHVnaW5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFZhdWx0ZXJTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAvLyBJZiB0aGUgcGx1Z2luIGhvb2tzIHVwIGFueSBnbG9iYWwgRE9NIGV2ZW50cyAob24gcGFydHMgb2YgdGhlIGFwcCB0aGF0IGRvZXNuJ3QgYmVsb25nIHRvIHRoaXMgcGx1Z2luKVxuICAgIC8vIFVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGlzIHBsdWdpbiBpcyBkaXNhYmxlZC5cbiAgICB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljaycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHJlZ2lzdGVyaW5nIGludGVydmFscywgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIHBsdWdpbiBpcyBkaXNhYmxlZC5cbiAgICB0aGlzLnJlZ2lzdGVySW50ZXJ2YWwod2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKCdzZXRJbnRlcnZhbCcpLCA1ICogNjAgKiAxMDAwKSk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjb3VudCBtYXJrZG93biBmaWxlcyAobm90ZXMpXG4gIGdldE5vdGVDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcihmaWxlID0+IGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpLmxlbmd0aDtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RhdHVzIGJhciB3aXRoIHRoZSBub3RlIGNvdW50XG4gIHVwZGF0ZVZhdWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd0luU3RhdHVzQmFyKSB7XG4gICAgICBjb25zdCB0b3RhbE5vdGVzID0gdGhpcy5nZXROb3RlQ291bnQoKTtcbiAgICAgIHRoaXMuc3RhdHVzQmFySXRlbUVsLnNldFRleHQoYFRoaXMgdmF1bHQgaGFzICR7dG90YWxOb3Rlc30gbm90ZXNgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0dXNCYXJJdGVtRWwuc2V0VGV4dCgnJyk7ICAvLyBDbGVhciBzdGF0dXMgYmFyIGlmIHNldHRpbmcgaXMgb2ZmXG4gICAgfVxuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuXG5jbGFzcyBWYXVsdGVyU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IFZhdWx0ZXJQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogVmF1bHRlclBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcblxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTaG93IG5vdGUgY291bnQgaW4gc3RhdHVzIGJhcicpXG4gICAgICAuc2V0RGVzYygnVG9nZ2xlIHdoZXRoZXIgdGhlIG5vdGUgY291bnQgaXMgZGlzcGxheWVkIGluIHRoZSBzdGF0dXMgYmFyJylcbiAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IFxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd0luU3RhdHVzQmFyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dJblN0YXR1c0JhciA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi51cGRhdGVWYXVsdGVyKCk7ICAvLyBVcGRhdGUgdGhlIHN0YXR1cyBiYXIgaW1tZWRpYXRl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
