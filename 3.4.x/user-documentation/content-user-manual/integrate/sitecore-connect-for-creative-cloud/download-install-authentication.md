# ダウンロード、インストール、認証

ここでは、Sitecore ConnectTM for Creative CloudTMのダウンロード、インストール、認証方法について説明します。

パッケージの入手
Sitecore Connect for Creative CloudTMパッケージは、WindowsおよびMac OS Xでご利用いただけます。パッケージとライセンスキーをご希望の方は、Sitecore Creative Cloud Connectorチームまでお問い合わせください。

注意事項
メールには必ずクライアント名とDAMライセンスの詳細を記載してください。

ダウンロードとインストール
以下の手順で、パッケージをダウンロードしてインストールする方法を説明します。

パッケージをハードドライブにダウンロードしてインストールします。

Adobe Illustrator、Photoshop、またはInDesignを開きます。Sitecore Connect for Creative CloudTMが拡張機能として利用可能になります。

ウィンドウメニューの拡張機能とsitecoreコンテンツハブがハイライトされたphotoshop：photoshop_sitecore_extension_highlighted.png

ライセンスの有効化
次の手順では、Sitecore ConnectTM for Creative CloudTM 拡張機能を使用するためのライセンスを有効にする方法を説明します。

Adobe InDesignを開きます。

Sitecore Content Hubメニューをクリックし、ライセンス認証をクリックします。

ライセンスを有効化します。CreativeCloudConnect_InDesign_ActivateLicense.png

ライセンスキーを入力し、[OK]をクリックします。

ライセンスキーを入力します。CreativeCloudConnect_InDesign_ActivateLicense_EnterKey.png

ノート
Adobe InDesign、Illustrator、Photoshopのライセンスが有効になりました。

認証
Sitecore Connect for Creative CloudTM 拡張機能が正しく動作するようにするには、以下の手順を実行する必要があります。

注意事項
これらの手順を実行できるのは、スーパーユーザーのみです。

Sitecore Content Hub インスタンス上で、以下の手順を実行します。

管理 > 設定 > 認証に移動します。

Content_Hub_Manage_Settings_Authenticationに進みます。Manage-Settings-Authentication.png

以下のJSONプロパティがまだ存在しない場合は貼り付けます。

"EnableAutologin": true。
"SameSiteCompatibility"。{
   "is_enabled": true.
   "user_agent_patterns". 
     "(Chrome/5|Chrome/6) "となっています。
     "(CPU iPhone OS 12|iPad; CPU OS 12) "となっています。
     "^(?=.*.Macintosh; Intel Mac OS X 10_14\b)(?=.*.*\bVersion/\b)(?=.*\bSafarib).*$"
   ]
 }
認証の設定で、認証_modeをPassiveに設定していることを確認してください。

SAVEをクリックします。

Manage > OAuth Clientsに移動します。

Content_Hub_Manage_OAuthClientsに移動します。Manage_OAuthClients_Window.png

Content_Hub_Edit_Icon: pencil_icon.pngアイコンをクリックして、SiliconConnectorを編集します。

リダイレクトリンクを https://5tlkhjwj6g.execute-api.us-west-1.amazonaws.com/Prod/callback/sitecore に変更します。

Content_Hub_Manage_OAuthClients_SiliconConnectorに変更します。Manage_OAuthClients_SiliconConnector_ChangeRedirectLink.png

SAVEをクリックします。

