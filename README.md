# front

**ブランチ命名規則**  
- ```feature/#(Issuesの番号)_(内容)```  
例：```feature/#1_tab_bar```
- 日本語禁止

developブランチに移動してから以下を実行．  
作成&移動コマンド：```git checkout -b feature/#(Issuesの番号)_(内容)```

<hr>

**開発について**  
- [React Nativeの基本文法](https://zenn.dev/yutama_kotaro/articles/7a0d1d771d2ca3)についてはこちら  
- 開発方法についてはデモ画面や各ファイル等を参照しながら理解してね．
![transition](https://github.com/sometaroka/front/assets/114457271/94785495-78db-495a-a0eb-4b0fe9fb14ba)

- ```MainScreen.jsx```にコンポーネントを追加することでタブ遷移を追加できます．  
- 画面コンポーネントディレクトリ  
```front/react_native/components/Screen```  
- 遷移コンポーネント ディレクトリ  
```front/react_native/components/ScreenTransition```  
画面と遷移を同じファイルに載せてもらってもいいです．  
上記のフォルダにて画面ごとにフォルダを作ってファイルを作成してください．  
**画面ごとに分けて管理しやすいようにするため．**
- ファイル名は日本語禁止，1文字目は大文字，単語を連結する場合は空白なし，大文字で繋げる．  
例：```DemoScreenNest.js```

<hr>

<details><summary> よく使う Git コマンド </summary>

| Command                                                                    |                        動作                        |
| :------------------------------------------------------------------------- | :------------------------------------------------: |
| <span style="color: #ffa3d1; ">git clone **URL** </span>                   |         既存のプロジェクトをローカルに保存         |
| <span style="color: #d1a3ff; ">git init </span>                            |    現在のディレクトリをローカルリポジトリにする    |
| <span style="color: #d1a3ff; ">git add . </span>                           |  ルートディレクトリの中身を全てインデックスに登録  |
| <span style="color: #d1a3ff; ">git commit -m '**コミット名**' </span>      |   インデックスに登録された内容をリポジトリに記録   |
| <span style="color: #d1a3ff; ">git push origin **ブランチ名** </span>      | リモートリポジトリにローカルリポジトリの変更を保存 |
| <span style="color: #a3d1ff; ">git fetch </span>                           |         ブランチの更新を取得し，差分を比較         |
| <span style="color: #a3d1ff; ">git pull (git fetch + git merge) </span>    |        更新をローカルに取り入れて反映させる        |
| <span style="color: #a3ffff; ">git merge **ブランチ名** </span>            |         現在のブランチを他のブランチに統合         |
| <span style="color: #a3ffd1; ">git checkout -b **ブランチ名** </span>      |            ブランチを作成してそこへ移動            |
| <span style="color: #a3ffd1; ">git checkout(switch) **ブランチ名** </span> |                   ブランチへ移動                   |
| <span style="color: #a3ffd1; ">git checkout(switch) - </span>              |                 前のブランチへ移動                 |
| <span style="color: #ffffa3; ">git status </span>                          |         現在どのような状態か色々確認できる         |
| <span style="color: #ffffa3; ">git log </span>                             |         コミットの履歴を表示する(q で終了)         |
| <span style="color: #ffffa3; ">git diff </span>                            |                 コードの差分を表示                 |
| <span style="color: #ffffa3; ">git show </span>                            | 様々な種類のオブジェクト（タグ/コミット等）を表示  |
| <span style="color: #ffd1a3; ">git remote -v </span>                       |           現在のリモートリポジトリの確認           |
| <span style="color: #ffd1a3; ">git branch </span>                          |                現在のブランチの確認                |
| <span style="color: #ffd1a3; ">git branch -r </span>                       |            現在のリモートブランチの確認            |

</details>

[環境構築](https://fresh-rhodium-639.notion.site/efe628f3b49449e082670e253c0a165f)はこちら
