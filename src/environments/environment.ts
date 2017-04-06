// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  urlToApi: "https://sapesapi.al.senai.br/api/",
  urlToOauthToken: "https://sapesapi.al.senai.br/oauth/token",
  urlToNotionManual: "https://www.notion.so/MANUAL-DO-SISTEMA-96d289598fb649dd89835d191a15396b"
  // urlToApi: "http://10.83.3.191/api/",
  // urlToOauthToken: "http://10.83.3.191/oauth/token"
};