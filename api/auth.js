import { randomBytes } from 'crypto';

/**
 * Step 1 of the Decap CMS GitHub OAuth flow.
 * Redirects the CMS popup to GitHub's authorize screen.
 * Requires env vars: OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET.
 */
export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
    res.status(500).send('Missing OAUTH_CLIENT_ID environment variable.');
    return;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const redirectUri = `${proto}://${host}/api/callback`;
  const state = randomBytes(16).toString('hex');

  const authorizeUrl =
    'https://github.com/login/oauth/authorize?' +
    new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'repo,user',
      state,
    }).toString();

  res.writeHead(302, { Location: authorizeUrl });
  res.end();
}
