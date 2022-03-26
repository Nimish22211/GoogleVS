const vscode = require('vscode');


const sidebar = function (webviewView, context) {
    const stylesResetUri = webviewView.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, 'media', 'reset.css')
    );
    const stylesMainUri = webviewView.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, 'media', 'vscode.css')
    );
    const sidebarUri = webviewView.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, 'media', 'sidebar.css')
    );
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link href="${stylesResetUri}" rel="stylesheet" />
              <link href="${stylesMainUri}" rel="stylesheet" />
              <link href="${sidebarUri}" rel="stylesheet" />
    </head>
    <body >
    <script async src="https://cse.google.com/cse.js?cx=1d245b82c3f7dc3b1"></script>
<div class="gcse-search" ></div>
    <div>

        <h2>Search Google</h2>
    </div>
    </body>
    </html>
    `
    webviewView.webview.options = {
        enableScripts: true
    }
    webviewView.webview.html = html;
}

module.exports = sidebar;   