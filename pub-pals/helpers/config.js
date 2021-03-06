module.exports = config = {
  // Config for OAuth2 
  PUBPALS_CLIENT_ID: 'APP-B9T4095P7U7W76X5',
  PUBPALS_CLIENT_SECRET: 'f6677b74-8f3f-4204-ad7d-55e449eac609',
  PUBPALS_CODE_CALLBACK_URI: 'https://localhost:8443/authorization-code-callback',
  DOIDUDES_CLIENT_ID: 'APP-OP444XZBA4ZS2JRH',
  DOIDUDES_CODE_CALLBACK_URI: 'https://localhost:9443/authorization-code-callback',
  AUTHORIZE_URI: 'https://sandbox.orcid.org/oauth/authorize',
  TOKEN_EXCHANGE_URI: 'https://api.sandbox.orcid.org/oauth/token',

  LETSENCRYPT_ISSUES_EMAIL: 'double-orcid-auth-node@mailinator.com', // Where to email when certificates expire.
  AUTO_SNI_DEBUG: true, // Add console messages and uses staging LetsEncrypt server. (Disable in production)
  DOMAINS: [["localhost","www.localhost"]], // List of accepted domain names. (You can use nested arrays to register bundles with LE).
  PORT_HTTP: 8080, // Optionally override the default http port.
  PORT_HTTPS: 8443 // Optionally override the default https port.
}

// Environment variables overrides
for (key in config)
	if (process.env[key] != undefined)
		config[key] = process.env[key];
