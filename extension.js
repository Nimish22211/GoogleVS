// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const SidebarProvider = require('./Sidebarprovider.js');
const mainPage = require('./Main.js');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let panel;
	context.subscriptions.push(
		vscode.commands.registerCommand('googlevs.google', () => {
			panel = vscode.window.createWebviewPanel(
				'googlevs',
				'Google VS',
				vscode.ViewColumn.One,
				{
					enableScripts: true
				}
			)
			// vscode.window.showInformationMessage('Hello World from googlevs');
			mainPage(context.extensionUri, panel);
		})
	);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			'googlevs-sidebar',
			SidebarProvider(context)
		)
	)
}


// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
