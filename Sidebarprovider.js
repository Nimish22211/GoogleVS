const sidebar = require('./sidebar');

const SidebarProvider = (context) => {
    return {
        resolveWebviewView: (webviewView) => {
            sidebar(webviewView, context);
        },
    };
};

module.exports = SidebarProvider;