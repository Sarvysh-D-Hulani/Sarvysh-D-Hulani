/**
 * Step 2 of the Decap CMS GitHub OAuth flow.
 * Exchanges the ?code for an access token, then hands it back to the
 * CMS window via postMessage.
 * Requires env vars: OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET.
 */
function renderResult(status, content) {
  return `<!doctype html><html><head><meta charset="utf-8" /></head><body>
<script>
  (function () {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:${status}:${JSON.stringify(content)}',
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body></html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const code = req.query.code;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (!clientId || !clientSecret) {
    res.status(500).send('Missing OAUTH_CLIENT_ID / OAUTH_CLIENT_SECRET environment variables.');
    return;
  }

  if (!code) {
    res.status(400).send('Missing authorization code.');
    return;
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error || !data.access_token) {
      res.status(200).send(renderResult('error', { message: data.error_description || data.error || 'No access token returned' }));
      return;
    }

    res.status(200).send(
      renderResult('success', {
        token: data.access_token,
        provider: 'github',
      })
    );
  } catch (err) {
    res.status(200).send(renderResult('error', { message: err.message || 'OAuth exchange failed' }));
  }
}
