var template = function (initStateObj) {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="helper-bootstrap.css">
            <script>window.APP_INITIAL_STATE = `+JSON.stringify(initStateObj)+`;</script>
            <title>TEAM EIGHT</title>
        </head>

        <body>
            <div id="root"></div>
        </body>

        <script src="bundle.js"></script>
    </html>
  `;
};

module.exports = template;
