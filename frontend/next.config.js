/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: "AIzaSyBjfyGCiZw2t2JoAVtHTqJMeqfYf9PskJs",
    authDomain: "medicine-management-sys.firebaseapp.com",
    projectId: "medicine-management-sys",
    storageBucket: "medicine-management-sys.appspot.com",
    messagingSenderId: "278817666215",
    appId: "1:278817666215:web:48ac7e20098ba25b1b1782",
    // URI: "mongodb+srv://jashpatel6566:viral6566@cluster0.gniwyiq.mongodb.net/?retryWrites=true&w=majority",
    URI: "mongodb://localhost:27017/Medicine-Management-system",
    DB: "http://localhost:3000/api"
  }
}

module.exports = nextConfig
