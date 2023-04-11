export default function routerHandler(req, res) {

    // deleting the JWT cookies and redirect to the /auth to log again
  res.writeHead(302, {
    Location: "/Auth",
    "Set-Cookie": [
      "sessionId=;path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "token=; path=/api; expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "sessionId=;path=/api; expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "token=; path=/api; expires=Thu, 01 Jan 1970 00:00:00 GMT",
    ],
  });
  res.end();
}
