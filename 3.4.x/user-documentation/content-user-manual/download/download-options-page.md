# オプションのダウンロード

ダウンロード オプション ページでは、ユーザーは、アセットのレンディションをダウンロードする前に、選択したアセット ファイルにさまざまな変換を適用することができます。

ユーザーは、アセットを選択してから、ダウンロード ダウンロード アイコン：download_button.png 操作を選択すると、ダウンロード オプション ページに移動し、アセット操作ツールバーに表示されます。

ダウンロード アイコンがメニューに表示されます： download_button_shown.png

ダウンロードオプションページには、アセットメディアによってグループ化された選択されたアセットが表示されます。このグループ化はデフォルトで実行されます。

ダウンロード操作： download_options_page.png

アセットメディア］ドロップダウンメニューから、選択したアセットのメディアに基づいたフィルタが表示されます。この例では、4種類のアセットメディアが表示されています。

画像
ベクター
書類の提出先
動画
アセットメディアのドロップダウンメニュー：download_options_asset_media.png

ドロップダウンメニューからアセットメディアタイプを選択すると、選択されたアセットがフィルタリングされ、追加レンダリングオプションも同様にフィルタリングされます。

結果セットのフィルタリング対象 : asset_media_image_selected.png

ファイルの種類
各アセットメディアタイプには、アセットメディアグループに含まれているファイルタイプを表示するクエスチョンマークアイコン（question_mark_icon.png）があります。次の例では、Image Assetメディアグループは、bmp、gif、jpeg、jpg、tga、raw、srw、raf、orf、nerf、cr2、erf、dng、webp、dr、jfif、jp2、bpg、dpx、crwのファイル拡張子に対応しています。

表示されているアセットメディアのグループ化: asset_media_type.png

一方、Asset media type of Documents は以下のファイル拡張子を扱います：docx, xlsx, pptx, rtf, txt, doc, ppt, xls, pdf, eml, and msg。

documents asset: asset_media_type_documents.png

また、Asset media type of Videosは、次のファイル拡張子を扱います：avi, flv, mov, mpeg, wmv, mp4, webm, m4v。

video asset media: asset_media_type_video.png

ベクターのアセットメディアタイプは、次のファイル拡張子を扱います: ai, eps, psb, tif, tiff, png, svg。

ベクターアセットメディアタイプ: vector_asset_media_type.png

アセットメディアタイプ 対応ファイルタイプ
ドキュメントのメディアタイプはdoc、docx、eml、msg、pdf、ppt、pptx、rtf、txtです。
画像メディアタイプ bmp, bpg, cr2, crw, dng, dpx, dr, erf, gif, jfif, jp2, jpeg, jpg, nef, orf, raf, raw, srw, tga
ベクターメディアの種類 ai, eps, png, psb, svg, tif, tiff
動画メディアの種類 avi、flv、mp4、m4v、mov、mpeg、webm、wmv
ダウンロード名フィールドでは、ユーザーがダウンロードにカスタム名を指定することができます。

ダウンロード名フィールド: download_name.png

識別可能な名前を指定することで、特定のダウンロードを簡単に見つけることができます。名前を指定しない場合、デフォルトではファイル名はDownload {Mmm dd}となります。

ダウンロードページ： downloads_page_showing_download.png

選択したアセットの追加レンディションオプションには、アセットメディアタイプのみが表示されます。

複数のアセットメディアタイプが表示される 単一のアセットメディアタイプが表示される
表示されるメディアの種類: asset_media_type_hide_irrelevant.png 非表示のメディアの種類: asset_media_type_hide_irrelevant_hidden.png
Additional renditionオプションで表示される各Asset media type groupingのアセット数のカウント表示があります。

に表示されている各アセットメディアタイプグループのアセット数のカウント表示があります：asset_media_type_count_displayed.png

アセットメディアタイプごとにカウントインジケーターが表示されます。

アセットメディアタイプcount: asset_media_type_count.png

追加のレンディションオプション
デフォルトでは、すべてのアセットは元の形式でダウンロードされます。のメディアタイプについては

画像
ベクター
書類の提出先
動画
ユーザーは特定のレンディションを選択することができます。

オリジナル。
メディア。
メタデータ。
カスタム。
ユーザーは複数のレンディションを選択できます。

ユーザーは特定のレンディションを選択できます：select_specific_renditions.png

メタデータレンダリング
metadata renditionを選択すると、JSONファイルを含むZIPパッケージを出力します。

metadata rendition: metadata_rendition.png

JSONファイルには、選択したアセットに添付されているすべてのメタデータが含まれています。

{
  "ExifTool:ExifToolVersion". "10.80",
  "File:FileName" "milo-mcdowell-2198.jpg",
  "File:FileSize" "246929",
  "File:FileModifyDate" "2020:06:02 20:51:28+00:00",
  "File:FileAccessDate" "2020:06:02 20:51:28+00:00",
  "File:FileInodeChangeDate". "2020:06:02 20:51:28+00:00",
  "File:FilePermissions" "644",
  "File:FileType" "JPEG "です。
  "File:FileTypeExtension" "JPG "です。
  "File:MIMEType" "image/jpeg".
  "File:ImageWidth" "1920",
  "File:ImageHeight" "1280",
  "File:EncodingProcess" "0",
  "File:BitsPerSample". "8",
  "File:ColorComponents" "3",
  "File:YCbCrSubSampling". "2 2",
  "JFIF:JFIFVersion" "1 1",
  "JFIF:ResolutionUnit" "1",
  "JFIF:XResolution" "72",
  "JFIF:YResolution" "72",
  "ICC_Profile:ProfileCMMType" "Lino".
  "ICC_Profile:ProfileVersion". "528",
  "ICC_Profile:ProfileClass" "mntr".
  "ICC_Profile:ColorSpaceData". "RGB ".
  "ICC_Profile:ProfileConnectionSpace". "XYZ ".
  "ICC_Profile:ProfileDateTime". "1998:02:09 06:49:00",
  "ICC_Profile:ProfileFileSignature". "acsp": "ICC_Profile:ProfileFileSignature": "acsp
  "ICC_Profile:PrimaryPlatform". "MSFT": "MSFT" です。
  "ICC_Profile:CMMFlags". "0",
  "ICC_Profile:DeviceManufacturer". "IEC ".
  "ICC_Profile:DeviceModel". "sRGB".
  "ICC_Profile:DeviceAttributes". "0 0",
  "ICC_Profile:RenderingIntent". "0",
  "ICC_Profile:ConnectionSpaceIlluminant"。"0.9642 1 0.82491",
  "ICC_Profile:ProfileCreator"。"HP ".
  "ICC_Profile:ProfileID". "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
  "ICC_Profile:ProfileCopyright" "Copyright (c) 1998 Hewlett-Packard Company".
  "ICC_Profile:ProfileDescription". "sRGB IEC61966-2.1".
  "ICC_Profile:MediaWhitePoint". "0.95045 1 1.08905",
  "ICC_Profile:MediaBlackPoint". "0 0 0",
  "ICC_Profile:RedMatrixColumn". "0.43607 0.22249 0.01392",
  "ICC_Profile:GreenMatrixColumn". "0.38515 0.71687 0.09708",
  "ICC_Profile:BlueMatrixColumn". "0.14307 0.06061 0.7141",
  "ICC_Profile:DeviceMfgDesc"。"IEC http://www.iec.ch".
  "ICC_Profile:DeviceModelDesc" "IEC 61966-2.1 デフォルトRGB色空間 - sRGB"
  "ICC_Profile:ViewingCondDesc". "IEC61966-2.1における参照表示条件"
  "ICC_Profile:ViewingCondIlluminant". "19.6445 20.3718 16.8089",
  "ICC_Profile:ViewingCondSurround". "3.92889 4.07439 3.36179",
  "ICC_Profile:ViewingCondIlluminantType". "1",
  "ICC_Profile:Luminance". "76.03647 80 87.12462",
  "ICC_Profile:MeasurementObserver". "1",
  "ICC_Profile:MeasurementBacking". "0 0 0",
  "ICC_Profile:MeasurementGeometry". "0",
  "ICC_Profile:MeasurementFlare". "0.00999",
  "ICC_Profile:MeasurementIlluminant". "2",
  "ICC_Profile:Technology" "CRT ".
  "ICC_Profile:RedTRC". "(2060バイトのバイナリデータ、-bオプションを使用して抽出)"
  "ICC_Profile:GreenTRC". "(2060バイトのバイナリデータ、-bオプションを使用して抽出)"
  "ICC_Profile:BlueTRC". "(2060バイトのバイナリデータ、-bオプションを使用して抽出)"
  "Composite:ImageSize" "1920x1280",
  "コンポジット:メガピクセル" "2.4576"
}
カスタム・レンディション
カスタムレンディションはアセットメディアの種類に特化したもので、ユーザーがアセットをダウンロードするためのレンディションをカスタマイズすることができます。

カスタムレンディション: custom_rendition.png

画像とベクターのレンディションには、以下のプロパティが含まれています。

フォーマット: フォーマットは、ダウンロードするファイル形式を指定します。

カスタムレンディションのファイル形式：custom_rendition_file.png

カラープロファイル: 画像やベクターのカスタムダウンロードを実行する際には、2つのカラープロファイルが用意されています。

sRGB

シーエムワイケー

Sitecore Content Hubは、アプリケーション内で新しいカラープロファイルをアップロードして有効にする機能も提供しています。スーパーユーザーは、[ファイルのアップロード]ボタンをクリックしてカラープロファイルをアップロードすることで、カラープロファイル管理ページ(管理メニューの下)にカラープロファイルを追加することができます。受け入れられるカラープロファイルのファイルタイプは、.icc と .icm です。

カラープロファイル：custom_rendition_color_profile.png

カラープロファイルを選択するオプションは、画像形式のアセット、または画像形式でダウンロードされたアセットでのみ利用可能です。

トリミング: トリミングには3つのオプションがあります。

トリミングしない

中央にクロップ

スマートクロップ

トリミングオプション：custom_rendition_crop.png

トリミングオプションは、ラスター画像形式と非専有のベクター画像形式でのみ利用可能です。ただし、幅または高さを変更することで、ダウンロードしたアセットの寸法を変更することは可能です。アスペクト比はロックされます。

ベクタークロップオプション: custom_rendition_vector.png

トリミングしないでください オプションはリサイズ可能なレンダリングを提供しますが、アスペクト比はロックされています: 高さが変更されると、対応する変更が幅に行われ、その逆も同様です。以下の手順では、切り抜き禁止オプションを利用するために必要な手順を説明します。

Crop プロパティでは、Don't crop を選択します。

寸法プロパティでは、[リサイズしない] か [幅と高さをカスタム] を選択します。

カスタム幅と高さを選択すると、幅または高さを変更して、ダウンロードしたアセットのサイズを変更できます。一方の寸法が変更されると、他方の寸法はロックされた比率に合わせて調整されます。

幅と高さの測定値を変更することができます。測定値の選択は

ピクセル (デフォルト)

インチ

センチ

ミリメートル

寸法を使用してリサイズをクロップしない: custom_download_options.png

以下の表は、2つの出力寸法の違いを示しています。

寸法 オリジナルレンダリング
オリジナル - 出力寸法 6000 x 4000 px オリジナルアセット
トリミングしないでください - 出力寸法 3000 x 2000 px トリミングしないでください 公開リンク
中央にクロップ はアスペクト比をロック解除した状態でサイズを変更できるレンディションを提供します。このオプションは、クロップボックスを画像の中央に配置します。

中心にクロップを選択します。
幅と高さはカスタム幅とカスタム高さ、またはプリセット値のいずれかを選択します。
中心にクロップするオプション：custom_download__crop_to_center_options.png

ディメンショングループ値
Facebook Facebookカバー写真、Facebookイベント画像、Facebookハイライト画像、Facebook共有画像。
Instagram インスタグラム インスタグラムフォト、インスタグラムストーリーズ。
LinkedIn LinkedInバナー画像、LinkedIn企業カバー画像、LinkedIn企業写真、LinkedInヒーロー写真、LinkedIn個人背景画像、LinkedIn共有画像、LinkedIn共有リンク。
Twitter Twitterヘッダーフォト、Twitterインストリームフォト。
YouTube YouTubeチャンネルカバーアート、YouTubeチャンネルプロフィール画像。
|寸法｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング｜オリジナルレンダリング
|------|--------|
|**オリジナル** - 出力寸法 3088 x 4624 px|![オリジナルアセット](https://mss-p-003-delivery.stylelabs.cloud/api/public/content/6AaA3oRdFwy7Dhj7Pr3E1nFOw?v=c59c85cf)|!
|**Crop to center** - 出力寸法 1000 x 2000 px|![crop to center public link](https://mss-p-003-delivery.stylelabs.cloud/api/public/content/gNaYoYqEU9YC9xDxE2ujO6uYc?v=adb9b867)|!
スマートクロップは、画像の内容をインテリジェントに検査し、画像の最も重要な部分に自動的に焦点を当ててクロップする機能です。スマートクロップは、画像のエッジ、肌色、飽和色の領域を自動的に検索し、最も重要な特徴の上にクロップボックスを配置しようとします。幅と高さの値は、クロップされた領域の寸法を指定します。

スマートクロップ: custom_download__smart_crop_options.png

次の表は、スマートクロップオプションを使用した場合の出力サンプルを示しています。

寸法 オリジナルレンダリング
オリジナル - 出力寸法 5000 x 7502 px オリジナルアセット
スマートクロップ - 出力寸法 1000 x 600 px スマートクロップ公開リンク
Resolution (DPI): このプロパティはレンダリングの解像度を指定します。DPI (dots per inch) はダウンロードされたアセットの出力を参照します。

Filename ： このプロパティは、ダウンロードしたアセットのファイル名を指定します。アセットプロパティを変数として使用するには、中括弧の間にプロパティ名を記述します。

アセット・プロパティを使用したファイル名： filename_asset_property.png

そして、このファイル名は、ダウンロードしたzipファイルの中のファイルに割り当てられます。

ファイル名 割り当てられたアセットプロパティ： filename_filenamed_asset_property.png

ファイル名が複数のダウンロードされたアセットに使用されている場合は、ファイル名の最後に数字が含まれます。この例では、ファイル名は test で、3 つのアセットに使用されています。

複数ダウンロードした場合、ファイル名の最後に番号が表示されます：multiple_downloads_with_filename_including_number.png

変換
以下の処理オプションを定義することができます。

画像プリセット。

オリジナル。
媒体。
メタデータ
カスタム。
sRGB/CMYK/カスタムカラープロファイル。
72/150/300 DPI。
JPG/ PNG/ TIF.
比例的にフレームを埋める/比例的にフレームにフィットします。
ベクタープリセット。

オリジナル。
媒体。
その他の実装固有のレンディション。レンディションは、メディア処理（［管理］の下）で設定できます。レンディションリンクは、ここに表示するには、使用目的の領域でオプションUIを選択している必要があります。
カスタム。
sRGB/CMYK/カスタムカラープロファイル。
72/150/300 DPI。
JPG/ PDF/ PNG/ TIF。
フレームを比例して塗りつぶす/フレームを比例してフィットします。
ドキュメントプリセット。

オリジナル。
媒体。
その他の実装固有のレンディション。レンディションは、[メディア処理]（[管理] の下）で設定できます。レンディション リンクは、ここに表示するには、使用目的の領域でオプション UI を選択している必要があります。
カスタム
Mp3
オーディオプリセット。

オリジナル。
その他の実装固有のレンディション。レンディションは、メディア処理（［管理］の下）で設定することができます。レンディションリンクは、ここに表示するには、使用目的の領域でUIオプションを選択している必要があります。
カスタム
Mp3。
ビデオプリセット。

オリジナル。
その他の実装固有のレンディション。レンディションは、[メディア処理]（[管理] の下）で設定できます。ここに表示するには、レンディション リンクの使用目的領域で UI オプションが選択されている必要があります。
カスタム
Mp4.
WebM.
個別のダウンロードオプション
個別のダウンロード・オプションは、個別のダウンロード・オプション・アイコンから利用できます。44_Individual_download_options_icon.pngiconで利用でき、このアイコンを使用して、ユーザーは個々のアセットのダウンロードオプションをカスタマイズすることができます。

個別ダウンロードオプション：44_Individual_download_options.png

ドロップダウンメニューから利用可能なレンディションを選択することができます。

オリジナル

中型

メタデータ

カスタム

マルチセレクトオプションですのでご注意ください。

ドロップダウンメニューからのレンディション選択：44_Individual_download_options_modal.png

ダウンロードオプションを選択した後、保存ボタン： individual_download_options_save_button_cropped.pngボタンをクリックしてください。

保存ボタンをクリックして選択したダウンロードオプション: individual_download_options_save_button.png

ダウンロードオプションのページで、次のボタン：download_options_next_button.pngボタンをクリックすると、ダウンロードの順番が作成されます。

次のボタン ダウンロードオプション: download_options_next_button_shown.png

ダウンロード注文を確認すると、ユーザーはダウンロードジョブが作成されたダウンロードページに自動的にリダイレクトされます。ダウンロード注文が完了すると、ダウンロードリンクがアクティブになります。ステータスが「準備完了」に変更され、ユーザーは要求されたファイルを含むパッケージをダウンロードすることができます。ダウンロード注文は、デフォルトでは7日間利用可能なままです。

ダウンロードページ： downloads_page_showing_download.png

ダウンロードオプションのセキュリティ
ダウンロードした ZIP ファイルに含まれる各アセットのレンディションのパーミッション チェックがあります。

この例では、demo_user は Images と Vectors の両方のアセットのオリジナルとミディアムのレンディションをダウンロードしたいと考えています。

demo_user_download_preview.png: demo_user_download_preview.png

しかし、demo_userは必要なDownloadPreview権限を持っていません。ユーザーは、個別のダウンロード オプションを使用して、どのレンディションをダウンロードする権限を持っているかを表示することができます。この例では、demo_user は DownloadPreview パーミッションによって管理されている (または保護されている) Medium レンディションが利用できないことを確認しています。

Individual download options missing preview: individual_download_options_missing_preview.png

ダウンロードした ZIP パッケージを開くと、パーミッションが不十分なため、期待されていた 8 つのファイル（アセットごとに 2 つのレンディション）ではなく、5 つのファイルしか含まれていませんでした。アセットの他に、パッケージには.txt形式の追加レポートファイルが含まれています。

ダウンロードしたZIPには、以下のZIPファイルが含まれています：demo_download_txt_included.png

レポート ファイルを開くと、許可が不十分なためにダウンロードに失敗したアセット レンディションを確認することができます。

以下のアセット・レンディションは、許可が不十分なためダウンロードに失敗しました。

+----------+---------------------------+------------------+
| アセットID｜アセット名｜レンディション｜アセットID｜アセットID｜アセット名｜レンディション｜アセットID｜アセットID｜アセット名
+----------+---------------------------+------------------+
| 28634｜ワッフルとバックのフィズ｜プレビュー_ダウンロード
| 28966｜28966｜実りあるロゴ（黒）｜プレビュー_ダウンロード
| 28631｜青空にオレンジの木｜プレビュー_ダウンロード
| 28816｜実りあるプレゼンテーション｜プレビューダウンロード
+----------+---------------------------+------------------+
以下の表は、各レンディションと必要な許可をマップしたものです。

レンディションの許可
オリジナルダウンロードオリジナル
中型ダウンロードプレビュー
メタデータ順序
カスタムダウンロードオリジナル

