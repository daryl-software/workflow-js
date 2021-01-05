import { ActionProvider, ComparatorProvider, TypeProvider } from './Providers';
export default class Loader {
    private static typeProviderConfig;
    private static actionProviderConfig;
    private static comparatorProviderConfig;
    getTypeProviderConfig(): TypeProvider;
    getComparatorProviderConfig(): ComparatorProvider;
    getActionProviderConfig(): ActionProvider;
}
