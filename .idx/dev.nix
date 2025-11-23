{
  pkgs,
  ...
}: {
  # Enable previews and set up the environment
  idx.extensions = [
    "angular.ng-template"
    "ms-vscode.vscode-typescript-next"
    "bradlc.vscode-tailwindcss"
    "esbenp.prettier-vscode"
    "ms-playwright.playwright"
  ];

  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = ["npm" "run" "start"];
        manager = "web";
        env = {
          PORT = "$PORT";
        };
      };
    };
  };

  # Workspace lifecycle hooks
  idx.workspace.onCreate = {
    npm-install = "npm install";
  };

  # Environment packages
  packages = [
    pkgs.nodejs_20
    pkgs.npm
    pkgs.git
  ];

  # Environment variables
  env = {
    NODE_ENV = "development";
  };
}