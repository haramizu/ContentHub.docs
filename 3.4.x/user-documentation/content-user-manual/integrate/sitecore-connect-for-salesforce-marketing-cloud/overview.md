# Sitecore Connect™ for Salesforce Marketing Cloud

業界最高のコンテンツ管理ソリューションとして広く認知されているSitecore Content Hubが、業界最高のデジタルマーケティングクラウドプロバイダーとして認知されているSalesforce Marketing Cloudとの統合により、エンドツーエンドの完全なコンテンツマーケティングソリューションを提供することになりました。今回のSitecore Content HubとSalesforce Marketing Cloudの統合により、両ソリューションはさらに優れたものになります。

salesforce sitecoreのメリット：sitecore_salesforce.png

Salesforce Marketing CloudにSitecore Content Hubを追加することで、より高いレベルのセキュリティが設定されます。Sitecore Content Hubにより、すべてのアセットが一元化されたリポジトリで保護されることが保証されます。顧客は、Sitecore Content Hubから承認され、サインオフされたアセットを使用して、Salesforce Marketing CloudでEメールやその他のマーケティングコンテンツをカスタマイズできるようになります。この機能は、顧客のエンゲージメントを向上させるだけでなく、「Time to Market」（製品が考案されてから販売されるまでの時間）を短縮することにもつながります。

Connectorの目的
マーケターはSalesforce Marketing Cloudにログインして、メールなどのマーケティングコンテンツを作成することができるようになります。しかし、この統合により、Salesforce Marketing Cloudで作成したコンテンツにSitecore Content Hubから承認されたAssetsを含めることができるようになります。

salesforce integration : subtitled_salesforce.gif

ユーザーは、Salesforce Marketing Cloud で作成プロセスを開始し、[コンテンツの追加] タブに到達したら、Sitecore Content Hub にログインします。ユーザーは、コンテンツに最適なアセットを選択し、パブリックリンクを使用して、承認されたアセットを作成中のコンテンツに挿入します。これにより、Sitecore Content Hub のすべての機能が利用できるようになり、この機能が Salesforce Marketing Cloud で利用できるようになります。

利用可能性
Sitecore Content Hub Salesforce Marketing Cloud連携パッケージは、Salesforce App Exchangeから利用可能になります。

スコープ
Sitecore Connectを利用したSitecore Content Hub Salesforce Marketing Cloud連携の対象範囲は、現在のところSitecore Content HubのアセットをSalesforce Marketing Cloud Email Appに含めるのみとなっています。このアプリはContent Builderの一部です。Sitecore Salesforce Connectのスコープとは、CORS構成のエンドポイントがSalesforce Content Builderでのメール作成にのみ有効であることを意味します。ただし、これらのエンドポイントは、Salesforce コンテンツ Builder 内の他のアプリに対して拡張可能な場合があります。

コネクタの使用
セットアップが完了すると、Sitecore Content Hub インスタンスと Salesforce Marketing Cloud インスタンスの両方にアクセスできるユーザーが現れます。

ユーザーがログインした後、Email Studioタブに移動し、メニューからEmailオプションを選択します。

ログイン後、Eメールスタジオメニューを選択し、Eメールオプションを選択します: email_studio_email.png

メールページで、トップメニューの「コンテンツ」タブを選択します。

メールページで、トップメニューの「コンテンツ」タブを選択 : content_email.png

続いて、コンテンツ ビルダが開きます。ウィンドウの右上には「作成」オプションがあります。

コンテンツ ビルダーが続いて開きます：content_content_builder.png

作成ボタンのドロップダウンで、[メールメッセージ]オプションを選択します。

ボタンの作成 : create_button.png

電子メールメッセージには、さまざまなオプションが用意されています。表示されるオプションは、ユーザーが新しい電子メールの詳細なレイアウトを選択することができる基本テンプレートの選択です。必要に応じて、希望のレイアウトをクリックして、右下の「選択」をクリックします。

新しい電子メールの詳細レイアウト : basic_layout_email.png

または、Emptyレイアウトを選択することができます。このEmptyテンプレートレイアウトでは、メール作成の詳細を省略した空のテンプレートを選択することができます。

SalesforceのEメール用の空のレイアウト : create_email_empty_layout.png

テーマ付きレイアウトでは、テーマ付きレイアウトを選択することができます。

Salesforce のテーマ別レイアウト : theme_layout.png

保存されたオプションでは、システム固有の他の3つの選択肢と比較して、組織固有に作成されたテンプレートを選択できます。

どのオプションを選択しても、ユーザーは[選択]をクリックして、電子メール プロパティの定義の次のステージに進みます。

電子メール プロパティの定義
すべての場合のオプションで、ユーザーは作成される電子メールのプロパティを定義する必要があります。

名前: これは必須フィールドです。
説明: これはオプションのフィールドです。
場所: これは必須の自動入力フィールドで、コンテンツビルダーの値が含まれています。
キャンペーン：これはオプションのフィールドです。
共有：これにより、ユーザーが所属するビジネスユニットと電子メールを共有することができます。
ターゲット言語: デフォルトはプライマリ言語ですが、ドロップダウンから異なるユニコード言語エンコーディングを使用することができます。
必要に応じて完了したら、次をクリックして電子メールのコンテンツを作成します。

define email properties : define_email_properties.png

Salesforce Marketing Cloud Emailにアセットを追加する
メールの作成」ページで、「カスタムコンテンツブロック」までスクロールして、先ほど作成した「Sitecore Content Hub Connector」をドラッグして、テンプレートの必要なセクションにドロップします。

ドラッグ＆ドロップ sitecore コンテンツハブパッケージ : drag_drop_block.gif

ユーザーがまだSitecore Content Hubで認証されていない場合は、ログインモーダルが開きます。

カスタムコンテンツブロックに表示されるsitecoreログイン：sitecore_connect_login_salesforce.png

これが起こらない場合は、ユーザーはSitecore Content HubのIFrameに表示されているリンクをクリックする必要があります。その後、ユーザーがSitecore Content Hubの資格情報を使用してログインすると、ログインモーダルが自動的に閉じられ、Sitecore Content HubのIFrameがリロードされます。

sitecore Content Hubのログインリンク : salesforce_login.gif

Sitecore Content Hubにログインすると、Salesforce Connect専用のランディングページの下に2つのサブページがあります。デフォルトでは、M.Salesforce.MC.Everyoneユーザーグループは、Approved assetsページへのアクセス、パブリックリンクの作成と選択、Asset detailページへのアクセスが可能です。ユーザが M.Salesforce.MC.Editors ユーザグループにも所属している場合は、Pending approval ページにアクセスして、まだ承認されていないアセットを選択して使用したり、新しいアセットをアップロードしたりすることができます。また、このページから直接アセットを公開することもできます。

2つのサブページ 承認済みアセットと承認保留ページ : approved_asset_and_pending_approval_pages_shown.png

承認済みアセット：このページには承認済みのアセットが表示されます。

承認済みアセットのページ
sitecore専用ランディングページ承認済みアセット：sitecore_dedicated_landing_page.png
salesforce サブページの承認済みアセットページ : approved_assets_salesforce_page.png
承認待ち：このページには、まだ審査が完了しておらず承認を受けていないアセットが表示されます。

進行中のアセットページには、アセットをアップロードするための作成コンポーネントをアップロードする機能が含まれています。

保留中の承認ページ
sitecore専用ランディングページ : sitecore_dedicated_landing_page_in_progress_assets.png
セールスフォースの進行中のサブページ : in_progress_page_salesforce.png
ノート
Salesforce コネクタは、以下の画像ファイルタイプのみをサポートしています。BMP、gif、jpeg、jpg、png、SVG。その他のファイルタイプは、ユーザが挿入することはできません。

進行中」ページと「承認済みアセット」ページの両方で、ユーザはパブリックリンクを作成して、Salesforce Marketing Cloud 内の電子メールコンテンツに希望のアセットを挿入することができます。既存のパブリックリンクがある場合、アセットプレビューに曲線の矢印が表示されます。ユーザーがこの矢印をクリックすると、パブリックリンクモードが開き、挿入するレンディションを選択できます。この矢印をクリックすると、パブリックリンクモードが開き、挿入するためのレンディションを選択することができます。

パブリック画像の作成 : create_public_link.gif

ユーザーは、Sitecore Content Hubのパブリックリンクの変換・変換機能を利用することもできます。パブリックリンクの詳細については、パブリックリンクを参照してください。

新しいパブリックリンクが作成されるか、既存のパブリックリンクが選択されると

公開リンクを挿入 : insert_public_link.gif

アセットが挿入されたら、終了するには、ユーザーは[編集完了]をクリックする必要があります。

