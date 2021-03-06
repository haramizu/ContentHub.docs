# Adobe Photoshop

Adobe Photoshopはグラフィックエディタです。デザイナー、ウェブ開発者、グラフィックアーティスト、写真家、クリエイティブな専門家には欠かせないツールです。画像編集、レタッチ、イメージコンポジションの作成、ウェブサイトのモックアップ、エフェクトの追加などに使用されます。

Sitecore Connect for Creative CloudTMパッケージをダウンロードしてインストールすると、Sitecore Content Hub拡張機能が利用できます。ダウンロードとインストールの詳細については、ダウンロード、インストール、認証を参照してください。

Sitecore Content Hub 拡張機能
拡張機能を有効にするには

Adobe Photoshopを開きます。
ウィンドウメニューをクリックします。
拡張機能を選択し、次にSitecore Content Hubを選択します。

photoshop sitecore conten hub extension: photoshop_window_menu_extensions_sitecore.png

Sitecore Content Hubモーダルが開いたら、Content HubのURLを入力してLoginをクリックします。

sitecore url sitecore content hub extension url: photoshop_url_modal.png

デフォルトのブラウザで新しいログインウィンドウが開きます。まだSitecore Content Hubインスタンスにログインしていない場合は、今すぐログインしてください。

sitecore photoshopログイン： photoshop_sitecore_login.png

ノート
すでに Sitecore Content Hub インスタンスにログインしている場合は、直接 Authorization ページに移動します（下記参照）。

ログイン後、[Grant]をクリックしてContent Hubへのアクセスを許可します。

権限付与ページ: silicon_connector.png

認証が完了すると、このようなメッセージが表示されます。

認証プロセスの完了: authorization_process_complete.png

Adobe Photoshopに戻ると、AssetsタブでSitecore Content Hubモーダルが開きます。

photoshopは、サイトコアコンテンツハブモーダルで開きます： photoshop_sitecore_modal.png

Sitecore Content Hub モーダル
Sitecore Content Hub モーダルには4つのタブがあります。

アセットタブ
ASSETSタブには、Sitecore DAMで承認されたアセットが表示されます。このタブには以下の機能があります。

全文検索
アセットタイプとアセットメディアのファセット検索（データがある場合のみファセットが表示されますのでご注意ください
ページ数
1ページあたりに表示されるアセット数
作成された日付と修正された日付のソートを、ソートの方向を逆にするオプションで行うことができます。

photoshop_sitecore_modal_assets_tab.png: photoshop_sitecore_modal_assets_tab.png

ASSETS]タブでは、各アセットのサムネイルに以下のアイコンが表示されます。

illustrator siteecore illustratorに配置するアイコン： illustrator_sitecore_place_icon.png Photoshopドキュメントにアセットを配置します。
illustrator siteecoreチェックインアイコン： illustrator_sitecore_checkin_icon.png アセットをPhotoshopにチェックアウトします（アセットは新しいPhotoshopドキュメントで開きます）。
illustrator sitecoreチェックインアイコン： illustrator_check_in_icon.png 以前にチェックアウトしたアセットをContent Hubにチェックインします。
illustrator_sitecore破棄アイコン： illustrator_sitecore_discard_checkout.png チェックアウトしたアセットを破棄します。
アセットをクリックしてプレビューを見ることもできます。プレビューは新しいウィンドウで開きます。

photoshop_sitecore_modal_assets_tab_asset_preview.png： photoshop_sitecore_modal_assets_tab_asset_preview.png

ジョブタブ
ジョブとは、チームや部署が独立して特定のコンテンツをめぐって共同作業を行うための一つの空間です。ジョブの詳細については、ジョブを参照してください。

JOBSタブには、ログインしたユーザーが割り当てられているすべてのジョブが表示されます。

illustrator sitecore modal jobs tab: photoshop_sitecore_modal_jobsl_tab.png

JOBS] タブから、以下のことができます。

Photoshop ドキュメント内のジョブに含まれるアセットを使用します。
アセットをチェックしてみましょう。

アセットを表示しているイラストレーターのジョブタブ： photoshop_sitecore_modal_review_jobs_tab.png

ノート
このタブからは、ジョブを開いたり、完了したりすることはできません。

承認待ちタブ
PENDING APPROVAL] タブには、以下のアセットが表示されます。

作成されたが承認のためにまだ提出されていない：これらのアセットには「新規」ラベルが付いています。
承認申請中：これらのアセットにはIN REVIEWラベルが付いています。

photoshopのサイトコアモーダルの承認保留タブ： photoshop_sitecore_modal_pending_approval_tab.png

承認保留中] タブでは、各アセットのサムネイルに以下のアイコンが表示されます。

illustrator siteecore illustratorに配置するアイコン： illustrator_sitecore_place_icon.png Photoshopドキュメントにアセットを配置します。
illustrator siteecoreチェックインアイコン： illustrator_sitecore_checkin_icon.png アセットをPhotoshopにチェックアウトします（アセットは新しいPhotoshopドキュメントで開きます）。
illustrator sitecoreチェックインアイコン： illustrator_check_in_icon.png 以前にチェックアウトしたアセットをContent Hubにチェックインします。
illustrator siteecore破棄アイコン： illustrator_sitecore_discard_checkout.png チェックアウトしたアセットを破棄します。
submit for approval icon: submit_for_approval_icon.png アセットを承認のために送信します（このアイコンが表示されていない場合、アセットはすでに承認のために送信されています）。
チェックアウトタブ
CHECKOUTSタブには、Photoshopにチェックアウトしたアセットが表示されます。

sitecoreモーダルに表示されているチェックアウトタブ：photoshop_sitecore_modal_checkout.png

ノート
チェックアウトされたアセットはシステムにロックされているので、作業中は誰も修正することができません。
アセットがこのタブに表示されるのは、ファイル形式がAdobe Photoshopでサポートされている場合のみです：Adobe Photoshopでサポートされているファイル形式を参照してください。
Sitecore Content Hubからアセットを挿入する
Sitecore Content HubのアセットをAdobe Photoshopドキュメントに挿入するには、以下の手順に従います。

配置アイコンをクリックします。イラストレーターのsitecore配置アセットアイコン： illustrator_sitecore_place_asset_icon.png

アセットがダウンロードされ、Photoshopドキュメントに挿入されます。

アセットをPhotoshopドキュメントに挿入するには、場所のアイコンを使用してください。

アセットは、埋め込まれたオブジェクトとしてAdobe Photoshopドキュメントに含まれています。

必要に応じてオブジェクトを操作したり、変換したりするために、Photoshopの組み込みオプションを使用することができます。
詳細については、『Adobe Photoshop ユーザーガイド』を参照してください。
Adobe PhotoshopドキュメントをSitecore Content Hubにチェックインする
Photoshopドキュメントが新しい場合は、最初に保存する必要があります。

注意
最初にPhotoshopドキュメントを保存すると、ファイル名を選択することができます。そうしないと、Content Hubは元のファイル名（例：untitled-x.psd）でチェックインします。

Sitecore Content Hubのモーダルで。

メニューのindesign sitecoreメニュー：indesign_sitecore_asset_check_in_menu.pngアイコンをクリックします。

アクティブドキュメントのチェックインを選択します。

photoshop_sitecore_modal_check_in_active_document.png：ハイライト表示されたsitecoreモーダルのアクティブドキュメントメニューオプションにチェックを入れます。

最初にドキュメントを保存していない場合

Content Hubは、保存してチェックインするかどうかを尋ねてきます。
確認をクリックします。
: photoshop_sitecore_modal_new_asset_save_warning.png

ドキュメントに以前にチェックインしたバージョンがない場合。

Content Hubは、新しいアセットとしてアップロードするかどうかを尋ねてきます。
確認をクリックします。
photoshopで表示される新しいアセットとして既存のアセットをアップロードしないメッセージ： photoshop_sitecore_modal_no_assets_upload_new_asset.png

チェックインしたAdobe Photoshopドキュメントは、Content Hubインスタンスの[作成]ページにアセットとして表示されるようになりました。

このページから、任意のアセットとしてドキュメントを提出してレビューを受けることができます。
作成ページの詳細については、「作成」を参照してください。
レビュープロセスの詳細については、「レビュー」を参照してください。
ドキュメントにすでにチェックイン済みのバージョンがある場合は、既存のアセットの新しいバージョンとして保存され、自動的にマスターバージョンとして設定されます（公開リンクは変わりません）。

注意事項
新しいバージョンとしてAdobe Photoshopのドキュメントがアップロードされているので、レビューのプロセスを経ることはありません。

Sitecore Content HubアセットをAdobe Photoshopにチェックアウトする
Content HubからPhotoshopにアセットをチェックアウトするには

Sitecore Content Hubモーダルで、アセット（.psdドキュメント）を検索します。

チェックアウトのイラストレーターシテコアチェックインアイコン：illustrator_sitecore_checkin_icon.pngアイコンをクリックします。

photoshop_sitecore_modal_asset_check_out.png: photoshop_sitecore_modal_asset_check_out.png

アセットがダウンロードされ、新しいPhotoshopドキュメントで開かれます。

アセットのダウンロード方法：Photoshop_sitecore_modal_asset_check_out_downloading.png

illustrator sitecoreの破棄アイコン：illustrator_sitecore_discard_checkout.pngアイコンをクリックすることで、いつでもチェックアウトを破棄することができます。

adobe Photoshopでハイライトされた破棄とチェックインのアイコン：photoshop_sitecore_modal_asset_check_out_checkin_discard_highlighted.png

ノート
アセットはContent Hubにロックされているため、作業中は誰も変更を加えることができません。

Adobe PhotoshopからSitecore Content Hubにアセットをチェックインする
チェックアウトしたアセットに変更を加えた場合。

チェックインイラストレーターサイトコアチェックインアイコン：illustrator_sitecore_checkin_icon.pngアイコンをクリックして、コンテンツハブにチェックインしてください。

アセットがContent Hubにアップロードされます。

photoshopでドキュメントをサイトコアダムにチェックイン：photoshop_sitecore_modal_asset_check_in_uploading.png

アセットの新しいバージョンが作成され、マスターバージョンとして設定されます（公開リンクはそのままです）。

アセットのバージョンは、Photoshopからの新しいチェックインバージョンを表示しています：Photoshop_sitecore_modal_asset_version_check_in.png

チェックインが完了したら、Adobe Photoshopのドキュメントを閉じることができます。

注意事項
Adobe Photoshopのドキュメントは新バージョンとしてアップロードされているので、審査には通りません。

