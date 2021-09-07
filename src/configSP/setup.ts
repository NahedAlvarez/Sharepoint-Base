import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSP = async () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient("https://devfvg.sharepoint.com/sites/Nahed", "4793b113-ca1d-48c9-8f0d-5beb140d64c5", "uO+VVM0a9lVu6VwRk0ihEQ+0kIr95PrCefOkXgQd7cE=");
            },
        },
    });
}
