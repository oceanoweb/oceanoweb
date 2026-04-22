/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent browsers from MIME-sniffing the content type
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Deny embedding this site in iframes (clickjacking protection)
          { key: "X-Frame-Options", value: "DENY" },
          // Send full origin only to same-origin requests, just the origin to
          // cross-origin HTTPS, and nothing for HTTP downgrade
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict access to browser features not used by this site
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
}

export default nextConfig
