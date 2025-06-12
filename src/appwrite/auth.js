import config from "../config";
import { Client, Account, ID } from "appwrite";

const client = new Client();

client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
const account = new Account();

export async function createAccount(email, password, name) {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      console.log("User account created successfully:", userAccount);
      return await login({ email, password });
    } else {
      return userAccount;
    }
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }) {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw error;
  }
}

async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error) {
    throw error;
  }
}

async function logout() {
  try {
    return await account.deleteSession();
  } catch (error) {
    throw error;
  }
}

export default {
  createAccount,
  login,
  getCurrentUser,
  logout,
};
