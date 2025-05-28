# assets
複数のライブラリをモノレポで管理するサンプル

## `create-app` を作ってみる。

https://github.com/uetchy/create-create-app

```sh
npx create-create-app greet
```

後は以下でworkspaceの追加ができそう。

```sh
node ./create-greet/dist/cli.js greet
npm init -w greet
```

initが実行された結果、不要なものも追加されてそうなので、もう少し整理が必要そう。

一先ず、以下のコマンド一発で作れるようになった。

```sh
npm run create-workspace xyz
```
