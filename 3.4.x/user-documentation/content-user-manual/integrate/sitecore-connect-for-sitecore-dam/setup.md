# コネクターセットアップ

Sitecore Connect™ for Sitecore DAM™では、以下の記事で詳しく説明しているように、Sitecore DAM™とSitecoreインスタンスの両方で構成を行う必要があります。

Sitecore DAM™の構成
この設定は、Sitecore DAM™のバージョン3.3.0以上のインスタンスに適用されます。

CORS構成
Sitecore DAM™ の CORS は、Sitecore インスタンスからのトラフィックの着信を許可するように設定する必要があります。

Manage（メインメニュー項目）に移動します。

Settings 項目をクリックします。

Settings] ページで、[PortalConfiguration] メニュー項目をクリックします。

PortalConfiguration メニュー項目の CORSConfiguration をクリックします。

Sitecore インスタンスの URL を URL のリストに追加します（例：https://www.sitecore.instance.com）。

変更を保存します。

受信トラフィックを許可するためのCORS設定

ポータルの設定
リダイレクト設定は、Sitecore インスタンスが Sitecore DAM™ にアクセス/表示できるようにするために、Sitecore DAM™ の PortalConfiguration 内で設定する必要があります。

Manage（メインメニュー項目）に移動します。

Settings 項目をクリックします。

Sitecore DAMでの設定 

Settings ページで PortalConfiguration メニュー項目をクリックします。

Sitecore DAMのPortalConfiguration

PortalConfiguration] メニュー項目の [Authentication] をクリックします。

ExternalAuthenticationProviders] の下で、すべての SSO プロバイダの authentication_mode を "Passive" に変更します。

"sitecore": "sitecore" に変更します。[
   {
     "authentication_mode" "Passive".
     "client_id" "<クライアントID>"
     "client_secret": "<ClientSecret>"です。
     "email_claim_type" "<ClaimTypeOverride>"です。
     "external_user_creation_url". "https://www.registerme.com".
     "identity_server_url" "<URL>"です。
     "is_enabled": true.
     "messages" {
       "signIn". "translationKey".
       "signInDescription" "translationKey".
       "signInTitle". "translationKey"
     },
     "プロバイダ名". "Sitecore",
     "username_claim_type" "<ClaimTypeOverride>"
   }
 ]
ノート
SSO が設定されていない場合は、基本認証が使用され、その場合は認証モードがデフォルトで「パッシブ」に設定されているため、このステップをスキップすることができます。

警告
Content Hub のバージョン 3.4.0 以降、ログイン画面のメッセージ設定で提供される翻訳キーは、接頭辞 T_ を付けずに提供する必要があります。例えば、"signIn" "T_translationKey "は "signIn". "translationKey" となります。

Sitecoreの設定
以下の設定は、Sitecoreの9.1.0、9.1.1、9.2.0、9.3.0バージョンのインスタンスに適用する必要があります。

パッケージのインストール
Sitecore Connect™ for Sitecore DAM™パッケージをSitecoreインスタンスにインストールする必要があります。スケーリングされたセットアップ（複数のSitecoreインスタンス）では、ユーザーはSitecore DAM™インストールパッケージから環境内のすべてのSitecoreインスタンスにファイルをコピーする必要があります。このパッケージは https://dev.sitecore.net/ から取得できます。

対応するURL(例: https://www.sitecore.instance.com)に移動して、Sitecore インスタンスにログインします。

Launchpad上で、コントロールパネルをクリックします。

Sitecore インスタンスのデスクトップ

管理] セクションで [パッケージのインストール] をクリックします。

パッケージをインストールする

ファイルのアップロードダイアログで、Sitecore Connect™ for Sitecore DAM™ zip パッケージを選択します。

sitecore connect for sitecore damをインストールします。

パッケージのインストールダイアログで、Sitecore Connect™ for Sitecore DAM™ パッケージを選択し、Next をクリックします。

パッケージをインストールする

パッケージ情報を確認し、[インストール]をクリックします。

次のメッセージが表示されたら、インストールをクリックします。

クリックして拡大表示

上書き］を選択すると、既存のアイテムをパッケージから新しいアイテムに置き換えることができます。既存のアイテムを保持したい場合は、インストールを進める前にバックアップしてください。

パケットがインストールされると、ウィザードにはチェックボックスのリストが表示されます - Restart the Sitecore Client (デフォルトではチェックされています) と Restart the Sitecore Server。

パッケージがインストールされました

パッケージ構成
パッケージが正常にインストールされた後、以下の手順を完了し、必要な情報を提供することで、Sitecore Connect™ for Sitecore DAM™を設定する必要があります。

コンテンツエディタのコンテンツツリーで、Sitecore > System > Modulesに進みます。

DAMフォルダを開きます。Configを拡張して、DAMコネクタに進みます。

Modulesの下のDAMからDAMフォルダを選択する

Dataセクションで、DAMインスタンスに関する情報をSitecore Connect™ for Sitecore DAM™パラメータに入力します。

Sitecore Plugin for Sitecore Content Hubのパラメータを記入します。

ノート
Content Hubのバージョン3.2.1より、コネクタページのURLが「/en-us/sitecore-plugin/approved-assets」から「/en-us/sitecore-dam-connect/approved-assets」に変更されました。
コネクタを使用しているユーザーアカウントは、Sitecore DAM™ のコネクタページに対して「読み取り」アクセス権を持っている必要があります。
変更を保存します。

Sitecoreのバージョン9.3を使用している場合は、ルートフォルダ（wwwroot）にある "web.config "ファイルを開き、Content-HubインスタンスのURL（例：content-hub-url.stylelabs.com）とその他の配信ホスト名（例：content-hub-url-delivery.stylelabs.cloud）を "Content-Security-Policy "タグのソースとして以下のように追加してください。

<add name="Content-Security-Policy" value="default-src 'self' 'unsafe-inline' 'unsafe-eval' https://apps.sitecore.net; img-src 'self' data https://content-hub-url.stylelabs.com/ https://content-hub-url-delivery.stylelabs.cloud/ https://content-hub-url.stylelabs.com/; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' 'unsafe-inline' https://fonts.gstatic.com; upgrade-insecure-requests; block-all-mixed-content; child-src 'self' https://content-hub-url-delivery.stylelabs.cloud/ https://content-hub-url.stylelabs.com/ https://content-hub-url-delivery.stylelabs.cloud/; connect-src 'self' https://content-hub-url-delivery.stylelabs.cloud/ https://content-hub-url-delivery.stylelabs.cloud/; />" />
警告
Content Hubでは、AssetExtensionDataConfigurationSetting設定を使用して、パブリックリンク用に異なる配信ホスト名を設定することができます。この場合、設定したホスト名をソースとして、Content-Security-Policyパラメータのimg-src、child-src、connect-srcプロパティに追加するようにしてください。

Sitecore Connect™ for Sitecore DAM™は、リッチテキストエディタで［Insert from Sitecore DAM™］アイコンのsitecore damアイコンを経由して利用できるようになりました。

リッチテキストエディタ

