# Cloudspark Monorepo

## Workspace Application Commands

**_See scripts in root `package.json`_**

Start `frontend` dev server
`npm run dev --workspace frontend`

Build `hosting-service`
`npm run build --workspace hosting-service`

## Workspace Utility Commands

Create workspace `workspace-a`
`npm init -w workspace-a`
Create workspace `a` in the `./packages` folder
`npm init -w ./packages/a`

Install the `abbrev` package in workspace `a`
`npm install abbrev -w a`

Install scoped packages

```bash
npm init -y --scope @fantastic -w packages/core
npm init -y --scope @fantastic -w packages/web
npm init -y --scope @fantastic -w packages/cli
```

Run the `test` command in workspace `a`
`npm run test --workspace=a`

Run the `test` command in workspace `a` and workspace `b`
`npm run test --workspace=a --workspace=b`

Run the `test` command in all workspaces (Commands will be run in each workspace in the order they appear in the root package.json)
`npm run test --workspaces`

Run the `test` command in all workspaces if it exists
`npm run test --workspaces --if-present`
