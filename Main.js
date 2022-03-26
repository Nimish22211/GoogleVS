const vscode = require('vscode');

const mainPage = (extensionUri, panel) => {
    const stylesResetUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(extensionUri, 'media', 'reset.css')
    )
    const stylesVscodeUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(extensionUri, 'media', 'vscode.css')
    )
    const stylesMainUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(extensionUri, 'media', 'main.css')
    )
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${stylesMainUri}" rel='stylesheet' />
        <link href="${stylesVscodeUri}" rel='stylesheet' />
        <link href="${stylesResetUri}" rel='stylesheet' />
    <title>Google VS</title>
    </head>
    <body >
    <h1 class="title">Google VS</h1>
    <p class="description">Search that bug in Google VS</p>
       
        <script async src="https://cse.google.com/cse.js?cx=1d245b82c3f7dc3b1"></script>
<div class="gcse-search" ></div>
    </body> 
    </html>
    `
    panel.webview.html = html;
}

module.exports = mainPage;