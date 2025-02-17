const env = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDB: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    rwtKey: String(import.meta.env.VITE_RTE_API_KEY),
    suprSend: String(import.meta.env.VITE_SUPRSEND_KEY),
    subscriberId: String(import.meta.env.VITE_SUBSCRIBER_ID),
    distinctId: String(import.meta.env.VITE_DISTINCT_ID)
}

export default env;