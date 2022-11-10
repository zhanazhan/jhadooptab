import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the hadooptab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'hadooptab:plugin',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension hadooptab is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('hadooptab settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for hadooptab.', reason);
        });
    }
  }
};

export default plugin;
