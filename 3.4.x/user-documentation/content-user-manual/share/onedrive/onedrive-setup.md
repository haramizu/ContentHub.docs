# OneDrive セットアップ

OneDrive for BusinessとOneDrive personalのOneDrive連携を有効にすることができます。

OneDriveを使用して以下の操作を行うことができます。

OneDriveへのファイルのチェックアウト：ファイルがOneDriveにアップロードされ、アセットはSitecore Content Hubにロックされます。

OneDriveからファイルをチェックイン：チェックアウトしたファイルがOneDriveから取得され、Sitecore Content Hubのアセットが新しいファイルで更新されます。

チェックアウトしたファイルを破棄する：チェックアウトしたファイルがOneDriveから削除され、Sitecore Content Hubのアセットがロック解除されます。

OneDriveにダウンロード：ファイルはSitecore Content HubからOneDriveにアップロードされますが、ファイルは追跡されないため、アセットはロックが解除されたままになります。

セットアップ
から選択して、アプリ登録を作成する必要があります。

OneDrive Personal: https://apps.dev.microsoft.com/portal/register-app。

OneDrive for Business: https://portal.azure.com（詳細は「OneDrive for Businessの設定」を参照）。

OneDrive の設定
チェックアウトフォルダ（checkoutsFolder）とダウンロードフォルダ（downloadsFolder）です。これらのフォルダは、チェックアウトしたファイルとダウンロードしたファイルを分けるために使用できます。空のままにしておくと、ファイルはルート アプリ フォルダにアップロードされます。

logLevel. Sitecore Content Hubでは、アクションごとにジョブが作成されます。loglevel が Error に設定されている場合、または空のままにしておくと、失敗したファイルのみを対象にジョブターゲットが作成されます。loglevel が Info に設定されている場合は、各ファイルに対してジョブターゲットが作成されます。

を有効にする必要があります。この設定は、OneDrive 統合を有効にするには true に設定する必要があり、無効にするには false に設定する必要があります。

clientIdとclientSecret：ユーザーがアプリ登録時に受け取る個人コードです。

authorizeUriおよびtokenUri：これらの設定は、OneDrive for Businessのユーザー固有のURIに設定する必要があります。OneDrive personalの場合は、デフォルト値でOKです。

{
  "basic". {
    "apiUri". "https://graph.microsoft.com/".
    "apiVersion". "v1.0",
    "checkoutsFolder" "Checkouts": "チェックアウト
    "downloadsFolder". "Downloads": "ダウンロード
    "logLevel". "エラー"
  },
  "ビジネス" {
    "enabled": true.
    "clientId". "",
    "clientSecret": ""
    "authorizeUri". "https://login.microsoftonline.com/<customkey>/oauth2/authorize"。
    "tokenUri" "https://login.microsoftonline.com/<customkey>/oauth2/token"
  },
  "personal" {
    "enabled": true.
    "clientId". "",
    "clientSecret": ""
    "authorizeUri". "https://login.microsoftonline.com/common/oauth2/v2.0/authorize".
    "tokenUri". "https://login.microsoftonline.com/common/oauth2/v2.0/token"
  }
}
ポータルでアクションを有効にする方法の詳細については、OneDrive の概要を参照してください。

注
Sitecore Content Hubのバージョン3.4.0の場合、CloudDriveの統合設定はシステムが所有するものであり、管理者のアクセスが必要です。更新するには、アカウントマネージャーに連絡する必要があります。バージョン3.4.1からは、この設定はシステム所有ではなくなりました。

OneDrive for Businessの設定
以下の手順で、OneDrive for Business を統合する方法を説明します。

Azureポータルに移動します: https://portal.azure.com。

azureポータル：one_drive_azure_portal.png

ノート
Azure Active Directory (Azure AD) は、Microsoft のクラウドベースの ID およびアクセス管理サービスで、従業員がサインインしてリソースにアクセスするのを支援します。

上部の検索バーを使用して、Azure Active Directoryを検索して選択します。

トップの検索バーを使用して、Azure Active Directoryを検索して選択します。

Azure Active Directoryページの[管理]で、[アプリ登録]を選択します。

Azure Active Directoryに移動し、[App registrations]を選択します。

アプリ登録ページのトップメニューで、+新規登録オプションを選択します。

トップメニューで新規登録を選択すると、ハイライト表示されます：one_drive_azure_portal_azure_new_app_reg.png

アプリケーションの登録画面が表示されたら、アプリケーションの登録情報を入力します。

名前。名前: アプリのユーザーに表示される意味のあるアプリ名を入力します。

サポートされているアカウントの種類。アプリケーションでサポートするアカウントを選択します。

この組織ディレクトリ内のアカウントのみ。この組織ディレクトリ内のアカウントのみ: この組織ディレクトリ内のアカウントのみ: このオプションを選択します。
任意の組織ディレクトリ内のアカウント。すべての企業および教育機関の顧客を対象とする場合は、このオプションを選択します。
任意の組織ディレクトリのアカウントと個人の Microsoft アカウント。最も幅広い顧客を対象とする場合は、このオプションを選択します。
リダイレクト URI (オプション). リダイレクト URI は、OneDrive へのログインに成功した後にリダイレクトされる URL です。Web」または「SPA - Single Page Application」のいずれかを選択します。この例では、［Web］が選択されています。Connect OneDrive for Business を使用してユーザー プロファイルから OneDrive for Business にログインしているため、リダイレクト URI にはプロファイル名も含める必要があります。

必要なアドレスを見つけるには、sitecore content hubのプロフィールアイコン：sitecore_profile_icon.pngアイコンをクリックして、メニューから「プロフィール」を選択します。このページは、後でマニフェストを完成させる際に、新規アプリケーションの登録時やreplyUrlsWithType属性で使用できる正しいRedirect URIです。

find redirect uri : sitecore_profile_page_330.gif

この例では、https://stylelabs.io/en-us/user/myprofile を使用しています。

アプリケーションページの登録：one_drive_azure_portal_azure_reg_app_page.png

必要な情報を入力したら、登録をクリックします。

登録するために必要な詳細をクリックして入力しました：one_drive_azure_portal_azure_reg_app_page_register.png

Azure ADがアプリに固有のアプリケーション（クライアント）IDを割り当てると、自動的にアプリの概要ページに移動します。

アプリケーションの概要ページ: one_drive_azure_portal_azure_created_app.png

Sitecore Content HubのOneDrive統合設定のclientIdフィールドには、アプリケーション（クライアント）IDの値が必要です。

sitecore Content HubのクライアントID設定：setttings_integration_clouddrive_connect_cloud_drive_330.png

管理]メニューの[証明書と秘密]オプションを選択して、クライアントの秘密を生成します。

one_drive_azure_portal_azure_certificates_and_settings.png

証明書と秘密のページで、+新しいクライアントの秘密をクリックします。

azure 証明書と秘密ページ：one_drive_azure_portal_azure_certificates_and_settings_new_client_secret.png

クライアント秘密の追加] モーダルで、テキストボックスにクライアント秘密の説明を入力し、オプションから有効期限（期限切れ）を選択します。

1年以内
2年後
然る事ながら
追加をクリックして続行します。

azureポータル証明書: one_drive_azure_portal_azure_certificates_and_settings_desc_exp.png

アプリケーションの資格情報が更新され、秘密の値がコピーオプションで表示されます。後で取得できないので、この値をコピーして別の場所に保存する必要があります。

作成されたクライアントの秘密: one_drive_azure_portal_azure_certificates_and_settings_created.png

Client secretは、Sitecore Content HubのOneDrive統合設定のclientSecretフィールドに必要な値です。

sitecore Content HubでのOneDriveの統合設定OneDriveの統合：setttings_integration_clouddrive_client_secret_330.png

管理]で[マニフェスト]オプションを選択します。

管理メニューからマニフェストオプションを選択します。

Web ベースのマニフェスト エディタが開き、ポータル内でマニフェストを編集することができます。オプションで、[ダウンロード] を選択してローカルでマニフェストを編集し、[アップロード] を使用してアプリケーションに再適用することもできます。

azure マニフェスト エディタ: one_drive_azure_portal_azure_manifest_editor.png

アプリケーション作成時にRedirect URIを追加しなかった場合は、JSONファイル内のreplyUrlsWithTypeキーを検索し、https://{your_sitecore_content_hub_instance}/en-us/user/myprofileの値を入力します。

replyUrlsWithType属性は、トークンを返すときにAzure ADが宛先として受け入れる登録済みのredirect_uri値のリストを保持します。各URI値は、関連するアプリのタイプ値を含む必要があります。

サポートされているタイプ値は以下の通りです。

ウェブ
インストール済みクライアント
この例では、サポートされているタイプ値Webがタイプ値として選択されています。

    "replyUrlsWithType "として選択されています。



        {
            "url". "https://stylelabs.io/en-us/user/myprofile"
            "type". "ウェブ"
} ], ノート Azure Active Directory アプリ マニフェストの詳細については、Azure Active Directory アプリ マニフェストを参照してください。 マニフェストの編集が完了したら、保存をクリックします。 azureマニフェストエディタの保存ボタン：one_drive_azure_portal_azure_manifest_editor_save.png マニフェスト ページのメニューから [概要] オプションを選択して、概要ページに戻ります。 概要に戻る: one_drive_azure_portal_azure_manifest_editor_overview.png 概要] ページで [エンドポイント] オプションを選択します。 概要ページのエンドポイントが強調表示されています: one_drive_azure_portal_azure_overview_endpoints.png Endpoints] モードが表示され、テナントの認証エンドポイントが表示されます。 使用している認証プロトコルに一致するエンドポイントをアプリケーション (クライアント) ID と一緒に使用して、アプリケーションに固有の認証要求を作成します。 OAuth 2.0 認可エンドポイント (v1) と OAuth 2.0 トークン エンドポイント (v1) をコピーします。 エンドポイントをクリップボードにコピーするには、各エンドポイントの末尾に表示されているエンドポイントコピーアイコン: one_drive_azure_portal_azure_overview_endpoints_copy_icon.pngアイコンをクリックします。 エンドポイントモーダルは概要ページに表示されます: one_drive_azure_portal_azure_overview_endpoints_modal.png OAuth 2.0 認可エンドポイント (v1) をクリップボードにコピーします。 OAuth 2.0 認可エンドポイント v1: one_drive_azure_portal_azure_overview_endpoints_authorization.png Sitecore Content HubのOneDrive統合設定のauthorizeUriフィールドには、OAuth 2.0認証エンドポイント(v1)の値が必要です。 oauth認証エンドポイント：setttings_integration_clouddrive_authorise_uri.png OAuth 2.0トークンエンドポイント(v1)をクリップボードにコピーします。 OAuth 2.0 トークンエンドポイント v1: one_drive_azure_portal_azure_overview_endpoints_token.png Sitecore Content HubのOneDrive統合設定のtokenUriフィールドには、OAuth 2.0トークンエンドポイント(v1)の値が必要です。 onedriveトークンのuri: setttings_integration_clouddrive_token_uri.png authorizeUriとtokenUriの両方が完了したら、he OAuth 2.0トークンエンドポイント(v1)とOAuth 2.0トークンエンドポイント(v1)の設定が完了したら、[保存]をクリックします。 完了した onedrive 統合設定: onedrive_config_completed_save_highlighted_330.png アプリ登録の概要に戻り、左メニューの「APIパーミッション」をクリックして新しいパーミッションを追加します。 新しいパーミッションを追加するページ：one_drive_azure_portal_azure_overview_api_permissions.png 許可を追加するには、+許可を追加をクリックします。 one_drive_azure_portal_azure_overview_add_permissions.png：APIのアクセス許可に表示されているアクセス許可オプションを追加します。 Request API permissions モーダルで、Commonly used Microsoft APIs を下にスクロールし、Supported legacy APIs の下にある Azure Active Directory Graph を選択します。 azure portal active directory graph: one_drive_azure_portal_azure_overview_request_api_permissions.png 委任された権限を選択します。 委任された権限は、Azure Active Directory内のアプリケーションが特定のユーザーに代わってアクションを実行できるようにします。 azure広告で選択した委任された権限: one_drive_azure_portal_azure_overview_request_api_delegated_permissions.png 委任された権限] セクションで、[すべてを展開] をクリックして、すべての権限を表示します。 すべてを展開して表示される委任された権限: one_drive_azure_portal_azure_overview_permissionsi_delegated_permissions.png 必要なAzure Active Directory Graphに必要な委任権限は以下の通りです。 Directory.AccessAsUser.All - サインインユーザーとしてディレクトリにアクセスします。 アプリがサインインしたユーザーと同じようにディレクトリ内の情報にアクセスできるようにします。 User.Read - サインインしてユーザープロファイルを読み取ります。 ユーザーがアプリにサインインし、アプリがサインインしたユーザーのプロファイルを読み取ることができるようにします。 また、サインインしたユーザーの基本的な企業情報をアプリが読み取ることもできます。 Windows Azure Active Directoryの委任権限：one_drive_azure_portal_azure_overview_completed_delegated_permissions.png

パーミッションの追加] をクリックしてパーミッションを保存し、現在保存されているパーミッションが表示される API パーミッションのページに自動的に戻ります。

完了した委任されたパーミッション：one_drive_azure_portal_azure_api_permissions_completed_delegated_permissions.png

次に、SharePointの権限を追加する必要があります。権限の追加] ボタンをクリックします。

Microsoft APIs タブで、下にスクロールして SharePoint オプションを選択します。

SharePoint が強調表示されたリクエスト apis ページ: one_drive_azure_portal_azure_api_sharepoint.png

権限の委譲] オプションを選択します。

SharePoint パーミッションに必要な Request API パーミッションは以下の通りです。

MyFiles.Read - ユーザー ファイルを読み取ります。MyFiles.Read - ユーザー ファイルの読み取り: アプリが現在のユーザーのファイルを読み取れるようにします。
MyFiles.Write - ユーザー ファイルの読み取りと書き込み。このアプリでは、現在のユーザーのファイルの読み取り、作成、更新、および削除が可能です。
Sites.Search.All - ユーザーとして検索クエリを実行します。現在サインインしているユーザーに代わって、アプリが検索クエリを実行し、基本的なサイト情報を読み取ることができます。検索結果は、アプリのパーミッションではなく、ユーザーのパーミッションに基づいて表示されます。
TermStore.ReadWrite.All - 管理されたメタデータを読み書きします。管理されたメタデータの読み取り、作成、更新、削除、およびサインインしたユーザーに代わって基本的なサイト情報を読み取ることができます。
sharepointの委任されたパーミッション: one_drive_azure_portal_azure_overview_sharepoint_api_permissions.png

これらの権限を選択したら、[権限の更新] ボタンをクリックします。パーミッションが含まれています。

api delegated permissions completed: one_drive_azure_portal_azure_api_sharepoint_completed.png

警告
Sites.Search.AllとTermStore.ReadWrite.Allは管理者の同意が必要となりますのでご注意ください。

必要な管理者の同意がない場合、Sitecore Content Hubを接続すると以下のようなエラーが表示されます。

azure needs admin approval: azure_needs_admin_approval.png

そのため、必要な管理者の同意があるかどうか、また、各API/許可のGrantedステータスがあるかどうかをITサポートに確認しておくことをお勧めします。


