---
theme: seriph
title: カスタムテーマテストスライド
info: |
  ## カスタムテーマの設定確認用スライド
  
  このスライドは、カスタムテーマの設定が正しく反映されているかを確認するためのものです。
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# カスタムテーマテスト

設定確認用スライド

<div class="mt-8 text-sm opacity-60">
右下にページ番号が表示されていることを確認してください
</div>

<!--
タイトルスライドの確認ポイント：
- h1がスライドの中央に配置されている
- フォントがKosugi Maruになっている
- ページ番号が右下に表示されている（1 / 総ページ数）
-->

---
layout: default
class: text-center
---

# 第1章：タイトルページの確認

<div class="mt-12 text-lg">
このスライドで確認できる項目：
</div>

<div class="mt-4 text-left">
- ✅ h1タイトルが表示されている<br>
- ✅ フォントが「Kosugi Maru」になっている<br>
- ✅ ページ番号が右下に表示されている<br>
- ✅ 背景色とテキストカラーが正しい
</div>

---
layout: default
class: text-center
---

## 第2章：章タイトルの確認

<div class="mt-12 text-lg">
このスライドで確認できる項目：
</div>

<div class="mt-4 text-left">
- ✅ h2章タイトルが表示されている<br>
- ✅ フォントが「Kosugi Maru」になっている<br>
- ✅ ページ番号が正しく更新されている<br>
- ✅ アクセントカラーが適用されている
</div>

---
layout: default
---

# カラーテーマの確認

## ライトモード / ダークモード

<div class="mt-8 text-left space-y-4">
<div>
<strong>ライトモード時の色：</strong><br>
- 背景色: <span class="px-2 py-1 rounded" style="background-color: #FFF5F0; color: #7E5D54;">#FFF5F0</span><br>
- テキストカラー: <span class="px-2 py-1 rounded" style="background-color: #7E5D54; color: #FFF5F0;">#7E5D54</span><br>
- アクセントカラー: <span class="px-2 py-1 rounded" style="background-color: #D6D474; color: #7E5D54;">#D6D474</span>
</div>

<div>
<strong>ダークモード時の色：</strong><br>
- 背景色: <span class="px-2 py-1 rounded" style="background-color: #03031B; color: #DEDBFF;">#03031B</span><br>
- テキストカラー: <span class="px-2 py-1 rounded" style="background-color: #DEDBFF; color: #03031B;">#DEDBFF</span><br>
- アクセントカラー: <span class="px-2 py-1 rounded" style="background-color: #2C2E47; color: #DEDBFF;">#2C2E47</span>
</div>
</div>

<div class="mt-8 text-sm opacity-70">
💡 ダークモードに切り替えて色の変化を確認してください（ショートカット: D キー）
</div>

---
layout: default
---

# フォントの確認

## Kosugi Maru フォントの使用

<div class="mt-8 text-left space-y-4">
<div class="text-xl">
このテキストは「Kosugi Maru」フォントで表示されています。<br>
丸ゴシック体で読みやすいフォントです。
</div>

<div class="text-lg mt-4">
日本語の文字：あいうえお、かきくけこ、さしすせそ<br>
アルファベット：ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
数字：0123456789<br>
記号：!?@#$%^&*()
</div>
</div>

<div class="mt-8 text-sm opacity-70">
✅ フォントが正しく読み込まれていることを確認してください
</div>

---
layout: default
---

# アクセントカラーの確認

## リンクと強調表示

<div class="mt-8 text-left space-y-4">
<div>
<strong>アクセントカラーの適用：</strong>
</div>

<div>
- リンク: [こちらをクリックしてください](#)<br>
- <strong>太字テキスト</strong>（アクセントカラー）<br>
- <code>インラインコード</code>（アクセントカラー背景）
</div>

<div class="mt-4">
<code class="text-base px-4 py-2 block">
const example = "コードブロック内のスタイル";
</code>
</div>
</div>

<div class="mt-8 text-sm opacity-70">
✅ リンク、太字、コードにアクセントカラーが適用されていることを確認
</div>

---
layout: two-cols
layoutClass: gap-8
---

# 2カラムレイアウトの確認

左側のコンテンツ

- リストアイテム1
- リストアイテム2
- リストアイテム3

**太字テキスト**

`インラインコード`

::right::

右側のコンテンツ

1. 番号付きリスト1
2. 番号付きリスト2
3. 番号付きリスト3

[リンクテキスト](#)

<div class="text-sm opacity-70 mt-4">
✅ 2カラムレイアウトでh1/h2が通常表示になっていることを確認<br>
✅ ページ番号が表示されていることを確認
</div>


---
layout: default
---

# コードブロックの確認

## シンタックスハイライト

<div class="mt-6">

```typescript
// TypeScriptコードの例
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "テストユーザー",
  email: "test@example.com"
};

console.log(user);
```

</div>

<div class="mt-6 text-sm opacity-70">
✅ コードブロックの背景色とテキストカラーが正しいことを確認<br>
✅ フォントが読みやすいことを確認
</div>

---
layout: default
---

# 表の確認

## テーブルレイアウト

<div class="mt-6">

| 項目 | ライトモード | ダークモード |
|------|-------------|-------------|
| 背景色 | #FFF5F0 | #03031B |
| テキスト | #7E5D54 | #DEDBFF |
| アクセント | #D6D474 | #2C2E47 |

</div>

<div class="mt-8 text-sm opacity-70">
✅ 表のテキストが読みやすいことを確認<br>
✅ 境界線が見やすいことを確認
</div>

---
layout: default
---

# リストの確認

## 箇条書きと番号付きリスト

<div class="mt-6 text-left">

**箇条書きリスト：**
- アイテム1
- アイテム2
  - ネストされたアイテム1
  - ネストされたアイテム2
- アイテム3

**番号付きリスト：**
1. 最初の項目
2. 2番目の項目
3. 3番目の項目

</div>

<div class="mt-8 text-sm opacity-70">
✅ リストアイテムが適切に表示されていることを確認
</div>

---
layout: image-right
image: https://via.placeholder.com/400x300/03031B/DEDBFF?text=Sample+Image
---

# 画像右配置レイアウト

左側にテキストコンテンツが表示されます

- リストアイテム1
- リストアイテム2
- リストアイテム3

[リンクの例](#)

<div class="mt-4 text-sm opacity-70">
✅ 画像右配置レイアウトが正しく動作していることを確認<br>
✅ h1が通常表示になっていることを確認
</div>


---
layout: center
class: text-center
---

# Center レイアウト

中央配置のテスト

<div class="mt-12 text-lg">
このレイアウトではコンテンツが中央に配置されます
</div>

<div class="mt-8 text-sm opacity-70">
✅ 中央配置が正しく機能していることを確認
</div>


---
layout: default
---

# まとめ

## 確認すべき項目チェックリスト

<div class="mt-8 text-left space-y-2">
- [ ] h1タイトルがスライド中央に配置されている<br>
- [ ] h2章タイトルがスライド中央に配置されている<br>
- [ ] ページ番号が右下に表示されている<br>
- [ ] フォントが「Kosugi Maru」になっている<br>
- [ ] ライトモード時の色が正しい<br>
- [ ] ダークモード時の色が正しい<br>
- [ ] アクセントカラーがリンクや強調に適用されている<br>
- [ ] コードブロックが読みやすい<br>
- [ ] 表が適切に表示されている<br>
- [ ] リストが正しく表示されている<br>
- [ ] 各種レイアウトが正しく動作している
</div>

---
layout: default
class: text-center
---

# ありがとうございました

設定確認用テンプレートスライド

<div class="mt-12 text-sm opacity-60">
このスライドでカスタムテーマの設定を確認できました
</div>
