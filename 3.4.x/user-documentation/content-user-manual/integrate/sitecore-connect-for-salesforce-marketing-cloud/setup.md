# コネクターセットアップ

Sitecore connect™ for Salesforce Marketing Cloudでは、次のセクションで詳細を説明するように、Sitecore Content HubとSalesforce Marketing Cloudの両方のインスタンスで構成が必要です。

Sitecore Content Hubの構成
以下の設定は、Sitecore Content Hubの3.2.1バージョン以上のインスタンスに適用する必要があります。

Sitecore Content Hub Connect - CORSの構成
管理者は、SuperUserアカウントを使用してSitecore Content Hubインスタンスにログインする必要があります。

スーパーユーザーアカウントを使用してSitecore Content Hubにログインします: login_sitecore.png

上部メニューに表示される [管理] で [設定] を選択します。設定] ページで [ポータル構成] に移動し、[CORS 構成] を選択します。

ログインしたら、「管理」をクリックして「設定」に移動します。

ノート
Cross-Origin Resource Sharing (CORS) は、追加の HTTP ヘッダを使用して、あるオリジンで実行されている Web アプリケーションが別のオリジンから選択したリソースにアクセスできるようにブラウザに指示するメカニズムです。

CORSConfiguration では、Salesforce Marketing Cloud に必要なエンドポイントをすべて追加する必要があります。URL ラベルの付いたボックスにエンドポイントを入力し、[追加] をクリックします。必要なエンドポイントがすべて追加されたら、[保存] を選択します。

CORSConfiguration でのエンドポイントの追加 : cors_configuration_add_enpoints.gif

この例では、Salesforce_Marketing_Endpoint は、デモユーザの専用の Salesforce Marketing Cloud Endpoint です。

注釈
特定のインスタンスが、CORS 構成インスタンスで Salesforce_Marketing_Endpoint が例として使用されている場所に置き換わることを確認してください。

https://mc.USER-INSTANCE.exacttarget.com
https://content-builder.USER-INSTANCE.marketingcloudapps.com Salesforce Marketing Cloud の Content Builder に必要です。
https://email-app.USER-INSTANCE.marketingcloudapps.com は、Salesforce Marketing Cloud のメールアプリに必要です。
つまり、メールのマーケティングコンテンツを作成するために、この例では以下のエンドポイントが作成されています。

https://mc.Salesforce_Marketing_Endpoint.exacttarget.com
https://content-builder.Salesforce_Marketing_Endpoint.marketingcloudapps.com Salesforce Marketing Cloud の Content Builder に必要です。
https://email-app.Salesforce_Marketing_Endpoint.marketingcloudapps.com Salesforce Marketing Cloud のメールアプリに必須。
CORS 構成にリストされている salesforce エンドポイント : salesforce_endpoints_in_cors_config.png

ノート
Sitecore Salesforce Connect のスコープは、CORS 構成のエンドポイントが Salesforce Content Builder でのメール作成にのみ有効であることを意味します。ただし、Sitecore Connect は、Salesforce Content Builder 内の他のアプリに対しても拡張可能な場合があります。そのため、コンテンツの種類によって必要なエンドポイントが異なる場合がありますので、ご注意ください。

Salesforce Marketing Cloud の構成
Sitecore Content Hub と Salesforce Marketing Cloud を統合するには、カスタムコンテンツブロックを使用してパッケージを作成する必要があります。そして、このカスタムコンテンツブロックをコンテンツビルダー内で使用することができます。

セールスフォースのカスタムコンテンツブロックとして表示される sitecore コンテンツハブ : salesforce_custom_content_block_sitecore.png

パッケージの作成
カスタムコンテンツブロックを作成するには、パッケージを設定する必要があります。この設定は、Salesforce Marketing Cloud の管理者権限を持つユーザーのみが行うことができます。

salesforce admin login : salesforce_admin_login.png

クラウドダッシュボードが開き、管理者ユーザーは右上のユーザーのプロフィールアイコンの下にあるドロップダウンメニューから「設定」を選択します。

salesforce クラウドダッシュボードを開いて、セットアップを開始しました。

セットアップ」ページで、「プラットフォームツール」に移動し、「アプリ」オプションを拡張します。最後に [Installed Packages] を選択する前に

salesforce のセットアップページ : salesforce_app_setup.png

インストール済みパッケージページには、すでにインストールされているすべてのパッケージが表示されますが、管理者ユーザが新しいパッケージをインストールすることもできます。

インストール済みパッケージページで、[新規: salesforce_installed_packages_page.png] をクリックします。

右上の隅で、新規ボタンをクリックします。新しいモーダルが開きます。ユーザーは保存する前に名前と簡単な説明を指定します。

新しいパッケージ詳細フォーム : new_package_details.png

パッケージの詳細が保存されると、新しいウィンドウが開き、ユーザはコンポーネントの追加ボタンをクリックしてコンポーネントを追加します。

パッケージの詳細を salesforce にインストール : install_package_details.png

コンポーネントの追加] モーダルが表示されます。ユーザーは、カスタムコンテンツブロックを選択し、次へをクリックします。

コンポーネントの追加モーダルが表示されます : add_component_modal.png

次に必要なステップは、カスタムコンテンツブロックのプロパティを設定することです。

名前はプロパティの必須フィールドです;この例では、Sitecore Content Hubが使用されています。

説明は必須フィールドではありません。この例では、このブロックコンポーネントをドラッグ＆ドロップしてメールにアセットを追加するという説明が記載されています。

エンドポイントのURLは必須です。ユーザーは、Sitecore Content HubインスタンスのURLをベース言語で入力し、salesforce-plugin/salesforce-approved-assetsの後に入力する必要があります。この例では、完了したURLは

https://Your_Sitecore_Content_Hub_Endpoint.com/en-us/salesforce-plugin/salesforce-approved-assets

この URL は、統合のために利用可能であると指定されたアセットへのエンドポイントアクセスを提供します。

注
デフォルトでは、Salesforce-plugin ページの下には 2 つのサブページがあります。In Progress Assets とは、最終的に DAM リポジトリに追加されるまでに承認プロセスを通過していないアセットのことで、Approved Assets とは、承認されて DAM に移行されたアセットのことです。

カスタムコンテンツブロックのプロパティを設定する : set_custom_content_block_properties.png

アクセスの設定は以下のようになります。ここで管理者は、Salesforce Marketing Cloud に既にアクセスしており、Sitecore Content Hub からアセットを含むコンテンツを作成するためにパッケージを利用する必要がある組織のユーザーを指定することができます。必要なユーザーをすべてリストアップしたら、[保存] をクリックします。

salesforce access to package : access_section_salesforce_sitecore_package.png

ノート
先ほどのように、ここにリストアップされているユーザーも、Sitecore Content Hubに直接アクセスできるようにしておく必要があります。

ユーザーのアクセス権が設定されると、リストされたユーザーは、コンテンツビルダーのメールアプリに移動することができます。メールアプリのカスタムセクションにSitecore Connectパッケージが含まれていることがわかります。

コンテンツビルダのSalesforceメールアプリでSitecore Connectが利用可能であることを示す: salesforce_email_app_showing_sitecore_integration.png

ノート
Salesforce コネクタは、以下の画像ファイルタイプのみをサポートしています。BMP、gif、jpeg、jpg、png、SVG。その他のファイルタイプは、ユーザが挿入することはできません。

