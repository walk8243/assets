# assets
複数のライブラリをモノレポで管理するサンプル

## workspaceの追加

```sh
npm init -w <name> @walk8243/greet .
```

## `create-app` を作ってみる

https://github.com/uetchy/create-create-app

```sh
npx create-create-app greet
```

ビルドすればcreateできる。

```sh
cd create-greet
npm run build
node ./dist/cli.js <name>
```

親パッケージにインストールすることで、workspaceの追加にも使える。

```sh
npm i create-greet -D
npm init -w greet greet .
```
