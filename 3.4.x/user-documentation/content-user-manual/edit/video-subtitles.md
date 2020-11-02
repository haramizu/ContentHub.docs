# ビデオ字幕

**Sitecore DAM** では、動画アセットに字幕を追加することができます。この機能は、ビデオ詳細ページで**.srt**または**.sub**ファイルをアップロードすることで可能になります。**SubRip**字幕ファイル（**SRT**）は、字幕情報を含むプレーンテキストファイルです。

> [!Video https://mss-p-003-delivery.stylelabs.cloud/api/public/content/7c9c0641f3e0440c9d4581d514787ea1?v=70d735a1]

字幕テキストの横に開始時間と停止時間が含まれているため、動画内の正確なタイミングでテキストが表示されることを保証します。

```
1
00:00:01,200 --> 00:00:03,000
Drinking with friends on summer evenings,

2
00:00:03,500 --> 00:00:08,500
creating and capturing simple memories

3
00:00:09,500 --> 00:00:14,500
that will last a lifetime.
```

## SRTの書式設定

以下の書式でテキストを追加します。

| テキストの書式設定 	| 概要 	|
|-	|-	|
| 番号付け 	| Text fragments are numbered sequentially starting at 1 	|
| 時間形式 	| `時:分:秒,ミリ秒` (小数点以下の区切り文字にはカンマを使用) 	|
| ラインブレイク 	| ラインブレイクは`CR+LF`ペアで使われることが多いです。 	|

SRTファイルは拡張子.srtと名付けられ、フォーマットされたプレーンテキストが含まれています。

## HTMLタグ

.srtファイルに含まれるほとんどのHTMLタグは無視されます。以下のHTMLタグは.srtファイルで使用できます。

* 太字 - `<b>...</b>` または `{b}...{/b}`
* イタリック体 - `<i>...</i>` または `{i}...{/i}`
* 下線 - `<u>...</u>` または `{u}...{/u}`
* フォントの色 - `<font color="色名または#code">...</font>`

これらのタグは組み合わせることができます。この例では、.srtファイルは次のようになります。

```
1
00:00:01,600 --> 00:00:08,200
<font color="red"><b>This is a Bold paragraph<i> using Italics</i><u> and Underline…</u></b></font>
```

この.srtファイルは以下の出力を与えます。

![htmlタグを使用してフォーマットされたsrtファイル](../../../images/user-documentation/content-user-manual/edit/subrip_file_with_html_files.png)

## 字幕ファイルのアップロード

ビデオアセットの詳細ページには、**ビデオ字幕** という名前の領域があります。**ファイルアップロード**ボタンをクリックします。

![](../../../images/user-documentation/content-user-manual/edit/upload_button.png)

新しいモーダルが開き、ファイルを選択することができます。アップロードを開始するには、**Select files** をクリックし、字幕ファイルの場所に移動します。

![サブタイトルファイルのアップロード](../../../images/user-documentation/content-user-manual/edit/select_subtitles_file.png)

アップロードが完了したら、完了ボタン <img src="../../../images/user-documentation/content-user-manual/edit/subtitles_upload_complete_done_button.png" width="30" /> をクリックします。

![字幕ファイルのアップロードが完了しました](../../../images/user-documentation/content-user-manual/edit/subtitles_upload_complete.png)

字幕ファイルをアップロードしたら、字幕表示に使用するクローズドキャプションラベルの言語を選択する必要があります。

アップロードされた字幕ファイルを編集するには、鉛筆アイコン <img src="../../../images/user-documentation/content-user-manual/edit/pencil_icon_video_subtitles.png" width="30" />の編集機能をクリックしてください。

![字幕ファイルを編集](../../../images/user-documentation/content-user-manual/edit/edit_subtitles_shown_by_pencil_icon.png)

ドロップダウンリストから字幕の言語を選択してください。

![ドロップダウンリストから字幕の言語を選択](../../../images/user-documentation/content-user-manual/edit/select_subtitles_language.png)

必要な言語が選択されたら、保存ボタン![](../../../images/user-documentation/content-user-manual/edit/video_subtitle_language_save.png)ボタンをクリックします。

![字幕の言語を入力します](../../../images/user-documentation/content-user-manual/edit/save_subtitle_language.png)

言語が指定されていない場合、言語はデフォルトで **en-US** として読み込まれます。

これで字幕ファイルが使用できるようになりました。

![完成した字幕ファイル](../../../images/user-documentation/content-user-manual/edit/completed_subtitle_language_on_uplad.png)

オプションがあります。

* ![](../../../images/user-documentation/content-user-manual/edit/download_button_on_subtitle_file.png) 字幕ファイルをダウンロードします。
* ![](../../../images/user-documentation/content-user-manual/edit/edit_pencil_icon.png) 字幕ファイルを編集します。
* ![](../../../images/user-documentation/content-user-manual/edit/delete_subtitle_file.png) 字幕ファイルを削除します。

## 字幕ファイルの表示

ビデオアセットにオーバーレイされた字幕ファイルを表示するには、ビデオアセットのサムネイル上の再生ボタンをクリックします。

![動画アセットのサムネイル上の再生ボタン](../../../images/user-documentation/content-user-manual/edit/play_button_video_asset.png)

開いたメディアプレーヤーのモーダルには、右下に表示されているクローズドキャプションボタンのクローズドキャプションボタン ![](../../../images/user-documentation/content-user-manual/edit/closed_caption_button.png)があります。このボタンには、利用可能な言語のリストが表示されます。

![クローズドキャプションオプション](../../../images/user-documentation/content-user-manual/edit/closed_option_in_media_player.png)

言語をクリックすると、**.srt** ファイルまたは **.sub** ファイルに含まれるテキストを使用して字幕が表示されます。

![](../../../images/user-documentation/content-user-manual/edit/language_selection_displays_subtitles.png)

## 字幕のフォーマット

字幕の出力をカスタムCSSで変更することができます。この変更はすべての字幕に対して行われ、個々の字幕に対しては行われません。

スーパーユーザーは、**管理メニュー**の下にある**ページ管理**セクションの**アセット詳細（ビデオ）**ページに移動します。

![管理の下にあるページオプション](../../../images/user-documentation/content-user-manual/edit/video_subtitles_pages_under_manage.png)

**ページ**で、**アセット詳細（動画）**ページを検索して選択します。

![アセットの詳細（動画）ページの検索](../../../images/user-documentation/content-user-manual/edit/video_subtitles_search_asset_detail_video.png)

**アセット詳細（動画）**ページで、**CSS**タブを選択します。

![CSS タブを表示する](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_css_tab.png)

CSSを編集するには、CSSタブの編集ボタン <img src="../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_css_edit_button.png" width="30" />ボタンをクリックします。

![アセット詳細ページのCSSタブに表示される編集オプション](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_css_edit.png)

**Custom CSS**テキストフィールドに必要なCSSを追加します。

次の例は、*.mejs_aption-layer MediaElement.js* ライブラリを変更しています。

```
.mejs__captions-layer {
    color: yellow;
    font-size: 3vw;
    line-height: 20px;
    text-align: center;
}
```

この行は**カスタムCSS**の欄に追加されています。

![カスタムCSS](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_added.png)

### 字幕色

カスタム CSS で使用される CSS カラー オプションには、必要な色を選択するためのカラー パレットが含まれています。パレットを表示するには、ユーザーは色の値の上にカーソルを置きます。または、HTMLに含まれる140の色名の中から色の名前を挿入することもできます。色の一覧は、[HTMLの色](https://www.w3schools.com/colors/colors_names.asp)を参照してください。

![](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_color_palette.png)

### 字幕のフォントサイズ

フォントサイズは **vw** の任意の値を指定します。**vw** の値はビューポート、つまりブラウザのウィンドウサイズに相当します。例えば、ビューポートの幅が50cmの場合、1vw = 0.5cmとなります。

### 字幕の行の高さ

線の高さの値は、テキストの行間の垂直方向の距離です。ウェブ上では、1行のテキストの上と下のスペースが等しくなっています。ラインハイトの値はピクセル単位で、pxの測定値を使用しています。行の高さは通常、フォントサイズよりも約20%大きくなります。例えば、フォントサイズが14pxの場合、line-heightは約16.8pxになります。**vw**に大きな値を使用している場合は、行の高さを調整する必要があるかもしれません。

### 字幕のテキストアライメント

text-alignプロパティは、テキストの水平方向の整列を設定するために使用されます。テキストを整列させることができます。

* **Left**: テキストを左に揃えます。
* **Right**: テキストを右に揃えます。テキストを右に揃えます。
* **Center**: テキストを中央に配置します。テキストを中央揃えにします。

完了したら、保存ボタン <img src="../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_save_button.png" width="50" />ボタンをクリックして、変更内容を保存します。

![カスタムCSSの保存](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_save.png)

これで、このカスタムCSSがSitecore DAMにアップロードされたすべての字幕に反映されるようになりました。

![カスタム CSS スタイリングを表示しているビデオ字幕](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_reflected_in_video.png)

以下の表は、Sitecore DAMで字幕に反映されるカスタムCSSで作成したフォントの色を変更したものです。

| カラー 	| 字幕の色 	|
|-	|-	|
| ![フォントの色が赤](../../../images/user-documentation/content-user-manual/edit/video_subtitles_color_red.png) 	| ![赤で表示される字幕](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_color_red.png) 	|
| ![フォントの色が黄色](../../../images/user-documentation/content-user-manual/edit/video_subtitles_color_yellow.png) 	| ![黄色で表示される字幕](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_color_yellow.png) 	|
| ![フォントの色が青](../../../images/user-documentation/content-user-manual/edit/video_subtitles_color_blue.png)  	| ![青く表示された字幕](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_color_blue.png) |
 
以下の表は、Sitecore DAMで字幕に反映されるカスタムCSSのフォントサイズの変更点です。

| フォントサイズ 	| 字幕サイズ 	|
|-	|-	|
| ![フォントサイズ1vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_font_size1.png) 	| ![字幕サイズ1vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_size_1.png) 	|
| ![font-size 2vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_font_size2.png) 	| ![字幕サイズ2 vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_size_2.png) |
| ![font-size 3vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_font_size3.png) 	| ![字幕サイズ3 vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_size_3.png) |
| ![font-size 4vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_font_size4.png) 	| ![字幕サイズ4 vw](../../../images/user-documentation/content-user-manual/edit/video_subtitles_asset_detail_video_custom_css_size_4.png) |

以下の表は、Sitecore DAM で字幕に反映されるカスタムCSSの行の高さサイズに変更を加えたものです。

| フォントを使用した行の高さ 5vw  	| 行の高さがある字幕 	|
|-	|-	|
| ![28pxの行の高さ](../../../images/user-documentation/content-user-manual/edit/video_subtitles_line_height_28px_setting.png) 	| ![28pxの字幕表示の行の高さ](../../../images/user-documentation/content-user-manual/edit/video_subtitles_color_line_height_28.png) |
| ![行の高さ56px](../../../images/user-documentation/content-user-manual/edit/video_subtitles_line_height_128px_setting.png)  	| ![行の高さ128pxの字幕表示](../../../images/user-documentation/content-user-manual/edit/video_subtitles_color_line_height_128.png) |

以下の表は、Sitecore DAMで字幕に反映されるCustom CSSのtext-alignmentの変更点です。

| カスタムCSSのテキストアライメント 	| 字幕にテキストアライメントを反映させる 	|
|-	|-	|
| ![text align center](../../../images/user-documentation/content-user-manual/edit/text_aling_center.png) 	| ![subtitles with center alignment](../../../images/user-documentation/content-user-manual/edit/subtitles_center_align.png) 	|
| ![text align left](../../../images/user-documentation/content-user-manual/edit/text_align_left.png) 	| ![subtitles with left alignment](../../../images/user-documentation/content-user-manual/edit/subtitles_left_align.png) 	|
| ![text align right](../../../images/user-documentation/content-user-manual/edit/text_align_right.png) 	| ![右揃えの字幕](../../../images/user-documentation/content-user-manual/edit/subtitles_right_align.png) 	|


> [!Note]
> アセット詳細（動画）ページのカスタムCSSを編集した場合、CSSの変更内容を表示する前にアセット詳細（動画）ページを更新する必要があります。
