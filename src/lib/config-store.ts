import {EXTENSION_ID} from './const';

export default class ConfigStore {
    private readonly workspace: any;

    constructor(workspace: any) {
        this.workspace = workspace;
    }

    get preComparisonTextNormalizationRules() {
        return this.get('preComparisonTextNormalizationRules');
    }

    private get(configName) {
        const extensionConfig = this.workspace.getConfiguration(EXTENSION_ID);
        return extensionConfig.get(configName);
    }
}
