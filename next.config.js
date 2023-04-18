/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  env: {
    API_KEY_PHONE_VALIDATION: '7230638109d743dfb8b4e33a20caf71d',
    URL_API_PHONE_VALIDATION:
      'https://phonevalidation.abstractapi.com/v1/?api_key=',
  },
}

module.exports = nextConfig
