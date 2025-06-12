import config from "../config";
import { Client, Account, ID, Storage, Databases, Query } from "appwrite";

const client = new Client();
client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
const databases = new Databases(client);
const bucket = new Storage(client);

async function createPost({ title, slug, content, image, status, userId }) {
  try {
    const post = await databases.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
      {
        title: title,
        content: content,
        userId: userId,
        image: image,
        status: status,
      }
    );
    return post;
  } catch (error) {
    throw error;
  }
}

async function updatePost(slug, { title, content, image, status }) {
  try {
    const post = await databases.updateDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
      {
        title: title,
        content: content,

        image: image,
        status: status,
      }
    );
    return post;
  } catch (error) {
    throw error;
  }
}

async function deletePost(slug) {
  try {
    await databases.deleteDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug
    );
    return true;
  } catch (error) {
    throw error;
  }
}

async function getPost(slug) {
  try {
    const post = await databases.getDocument(config.appwriteDatabaseId, slug);
    return post;
  } catch (error) {
    return false;
  }
}

async function getPosts(query = [Query.equal("status", "active")]) {
  try {
    const posts = await databases.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      query
    );
    return posts;
  } catch (error) {
    throw error;
  }
}

async function uploadFile(file) {
  try {
    const response = await bucket.createFile(
      config.appwriteBucketId,
      ID.unique(),
      file
    );
    return response;
  } catch (error) {
    throw error;
  }
}

async function deleteFile(fileId) {
  try {
    await bucket.deleteFile(config.appwriteBucketId, fileId);
    return true;
  } catch (error) {
    throw error;
  }
}

async function getFilePreview(fileId) {
  try {
    const response = await bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export const appwriteScrvice = {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  uploadFile,
  deleteFile,
  getFilePreview,
};
