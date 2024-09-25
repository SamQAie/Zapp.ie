import { Configuration, PopupRequest } from "@azure/msal-browser";
const AADclientid = process.env.REACT_APP_AAD_CLIENT_ID as string;
const TenantId = process.env.REACT_APP_TENANT_ID as string;
console.log(AADclientid);

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: AADclientid,
        authority: `https://login.microsoftonline.com/${TenantId}`,
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    system: {
        allowNativeBroker: false // Disables WAM Broker
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};