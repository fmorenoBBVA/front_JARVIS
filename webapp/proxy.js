import { execSync } from "node:child_process";

// Get the token and cache it for 30 minutes
const getToken = (function () {
  let token = null;
  let cacheTime = 0;
  const lifeTime = 1800000; // 30 minutes

  return function () {
    if (new Date().getTime() > cacheTime + lifeTime) {
      // Get token with gcloud
      const response = execSync("gcloud auth print-access-token");
      // Delete the line break of the final
      token = response.toString().trim();
      cacheTime = new Date().getTime();
    }
    return token;
  };
})();

export const proxyConfiguration = {
  "/api": {
    target: "https://",
    changeOrigin: true,
    //rewrite: (path) => path.replace(RegExp("/api/"), "/"),
    configure: (proxy) => {
      console.log("proxyyyyyy")
      proxy.on("proxyReq", function (proxyReq) {
        const token = getToken();
        // put the header of Authorization
        console.log(token.toString())
        proxyReq.setHeader("Authorization", "Bearer " + token.toString());
        proxyReq.setHeader("Access-Control-Allow-Origin", "*");
      });
    },
  },
};
