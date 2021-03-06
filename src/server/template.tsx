const root = (component: any, initialState: object) =>
  `<!doctype html>
        <html>
        <head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script>window._PRELOADED_STATE = ${JSON.stringify({
            initialState,
          })}</script>
          <link rel="stylesheet" type="text/css" href="/app.css" />
          <title>Cabify Checkout Challenge</title>
        </head>
        <body>
        <div id="app">${component}</div>
        <script src="/app.js"></script>
      </body>
      </html>`;

export default root;
