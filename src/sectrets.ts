import { SecretClient } from '@azure/keyvault-secrets';
import { useIdentityPlugin, DefaultAzureCredential } from '@azure/identity';
// import { useIdentityPlugin, VisualStudioCodeCredential } from '@azure/identity';
import { vsCodePlugin } from "@azure/identity-vscode";
import { KEY_VAULT_NAME, SECRET_NAME } from './consts.js';

useIdentityPlugin(vsCodePlugin);

export const testSecrets = async () => {
  // If you're using MSI, DefaultAzureCredential should "just work".
  // Otherwise, DefaultAzureCredential expects the following three environment variables:
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application

  // console.log("secrets------------");

  const credential = new DefaultAzureCredential();

  // const credential = new VisualStudioCodeCredential();

  if(!KEY_VAULT_NAME) throw new Error("KEY_VAULT_NAME is empty");
  const url = "https://" + KEY_VAULT_NAME + ".vault.azure.net";

  const client = new SecretClient(url, credential);

  // Create a secret
  // The secret can be a string of any kind. For example,
  // a multiline text block such as an RSA private key with newline characters,
  // or a stringified JSON object, like `JSON.stringify({ mySecret: 'MySecretValue'})`.
  // const uniqueString = new Date().getTime();
  // const secretName = `secret${uniqueString}`;
  // const result = await client.setSecret(secretName, "MySecretValue");
  // console.log("result: ", result);

  // // Read the secret we created
  // const secret = await client.getSecret(secretName);
  // console.log("secret: ", secret);

  const secret2 = await client.getSecret(SECRET_NAME);
  // console.log("API TOKEN: ", secret2);

  // Update the secret with different attributes
  // const updatedSecret = await client.updateSecretProperties(secretName, result.properties.version, {
  //   enabled: false
  // });
  // console.log("updated secret: ", updatedSecret);

  // Delete the secret immediately without ability to restore or purge.
  // await client.beginDeleteSecret(secretName);

  return getSecretValue(secret2);
}

const getSecretValue = (secret) => {
  const secVal = secret ? secret.value : '';
  return secVal;
}
