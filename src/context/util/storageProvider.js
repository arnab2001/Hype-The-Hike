import { StorageProvider } from "@arcana/storage/dist/standalone/storage.umd";
import { AuthProvider } from "@arcana/auth";

let auth;
let storageProvider;

export async function getWalletInstance() {
  if (!auth) {
    auth = new AuthProvider("2248");

    await auth.init({ appMode: 2, position: "right" });
  }
  return auth.provider;
}

export default async function getStorageProvider(provider) {
  if (!storageProvider) {
    storageProvider = new StorageProvider({
      appId: "2248",
      provider,
    });
  }

  return storageProvider;
}
