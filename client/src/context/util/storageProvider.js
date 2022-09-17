import { StorageProvider } from "@arcana/storage/dist/standalone/storage.umd";
import { AuthProvider, AppMode } from "@arcana/auth";

let auth;
let storageProvider;

export async function getWalletInstance() {
  if (!auth) {
    auth = new AuthProvider("2246");
    await auth.init({ appMode: 2, position: "right" });
  }
  return auth.provider;
}

export default async function getStorageProvider(provider) {
  if (!storageProvider) {
    storageProvider = new StorageProvider({
      appId: "2246",
      provider,
    });
  }

  return storageProvider;
}
