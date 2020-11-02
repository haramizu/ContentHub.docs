# 検索の保存

テクノロジーのパーソナライゼーションがますます進む中、ユーザーはアプリケーションを使用する際に、よりパーソナライズされた体験を求めています。**デフォルトの保存検索**機能を導入することで、**Sitecore Content Hub** のユーザーは、ユーザー体験をパーソナライズすることができます。この機能により、ユーザーがSitecore Content Hubの定義されたページに移動すると、保存された検索が自動的に有効になります。この自動的に有効化された検索により、ユーザーが抱えるいくつかの問題が解決されます。

以下のドキュメントでは、この機能を説明する3つのユースケース例を紹介します。

## ユースケース1

ユーザーは、必要なアセットを見つけるのに苦労するかもしれません。デフォルトの保存検索では、ユーザーは必要なアセットのみを見ることができます。この場合、ユーザーはFruitfulで全文検索を使用して公開保存検索を作成しています。公開保存検索は、地球儀で表示される地球儀アイコンの公開検索アイコンで識別することができます <img src="../../../images/user-documentation/content-user-manual/search/globe_icon.png" />

![ユーザーの保存検索 fruitful ブランド](../../../images/user-documentation/content-user-manual/search/fruitful_brand_saved_search.png)

> [!Note]
> 保存された検索が作成されると、デフォルトでは非公開になります。そのため、保存された検索が作成されると、その作成者のみが閲覧できるようになります。
> つまり、Make publicオプションしか利用できないということです。
> ![make publicが唯一利用可能なオプションです](../../../images/user-documentation/content-user-manual/search/saved_search_make_public_option.png)
> **公開する** を選択すると、**非公開にする** オプションが利用可能になります。

ユーザーは、![](../../../images/user-documentation/content-user-manual/search/more_actions_icon_saved_searches.png) をクリックして、使用可能なオプションを表示します。

ユーザーは **公開する** オプションを選択します。

次に、ユーザーは **標準に設定** を選択します。この選択は、次回以降、ユーザーがログインしたときに、この保存された検索の内容が表示されることを意味します。

![ユーザーは、その他のオプションを使用して検索をデフォルトに設定します](../../../images/user-documentation/content-user-manual/search/set_as_my_default_saved_search.png)

ユーザーはこのSaved検索をパブリックとして設定しているため、すべてのユーザーがこの検索を利用してデフォルトとして設定することができます。

デフォルトに設定されているSaved検索は、星形のアイコン <img src="../../../images/user-documentation/content-user-manual/search/my_default_icon.png" />で識別できます。

![私のデフォルトアイコンは、保存された検索に表示されます](../../../images/user-documentation/content-user-manual/search/saved_search_set_as_default.png)

### ユースケース動画

[!Video https://mss-p-003-delivery.stylelabs.cloud/api/public/content/fecc8960f98843e4b0cc5f801ca069f4?v=d16cc8d4]

## ユースケース2

事前にフィルタリングされたページに着地するためには、ユーザーのチームが必要です。この例では、**Powerful**の全文検索から返されたアセット。この保存された検索は**public**に設定されています。

![パワフル全文検索の保存検索](../../../images/user-documentation/content-user-manual/search/powerful_public_saved_search.png)

スーパーユーザーは**管理**ページに移動し、**エンティティ**を検索します。

![管理ページでエンティティを検索](../../../images/user-documentation/content-user-manual/search/saved_search_entities.png)

**エンティティ**ページで、**M.SavedSearch**を検索します。

![保存された検索検索エンティティ](../../../images/user-documentation/content-user-manual/search/saved_search_search_for_entity.png)

必要な保存された検索で**詳細を表示**をクリックします。

![表示の詳細](../../../images/user-documentation/content-user-manual/search/saved_search_saved_search_entities.png)

**エンティティ詳細ページ**の編集アイコン編集アイコン<img src="../../../images/user-documentation/content-user-manual/search/saved_search_entity_edit.png" />をクリックすると、保存されている検索を変更することができます。

![編集アイコンをクリック](../../../images/user-documentation/content-user-manual/search/saved_search_click_on_edit.png)

**Powerful - Public**検索を見るために必要なチームのメンバーであるユーザーは、保存された検索エンティティに追加する必要があります。スーパーユーザーは、ユーザーフィールドのプラスアイコンをクリックして**ユーザー**を追加 <img src="../../../images/user-documentation/content-user-manual/search/saved_search_add_user_icon.png" /> をクリックして、ユーザーリストから必要なユーザーを選択します。

![ユーザーを含む検索エンティティの保存](../../../images/user-documentation/content-user-manual/search/saved_searches_entity_user_added.png)

さて、このセーブされた検索は、選択されたすべてのユーザーのためのアセットページのデフォルトのセーブされた検索です。

![この保存された検索は、アセットページのデフォルトのランディングページ](../../../images/user-documentation/content-user-manual/search/saved_search_user_asset_page.png)

これは**アセットページのデフォルトの保存**検索ですが、ユーザーはフィルターをクリアすることで他のアセットにアクセスすることができます。

![ユーザーはフィルターをクリアするだけで、他のアセットにアクセスすることができます](../../../images/user-documentation/content-user-manual/search/saved_search_user_asset_page_clear_filter.png)

また、ユーザーは、アセットを表示する際のデフォルトの保存検索として、自分の個人的な保存検索を設定することができます。保存検索を作成した後、ユーザーは**私のデフォルトオプションとして設定**を選択します。

![ユーザーはデフォルトのオプションとして選択します](../../../images/user-documentation/content-user-manual/search/saved_search_personal_page.png)

### ユースケース動画

[!Video https://mss-p-003-delivery.stylelabs.cloud/api/public/content/3028e17ddc624056b0d8bdcc6fc32db6?v=bf2f627c]

## ユースケース3

保存された検索をシステムのデフォルトとして設定することもできます。スーパーユーザーは、保存された**検索を公開**するオプションを選択することで、保存された検索を公開に設定します。

![](../../../images/user-documentation/content-user-manual/search/saved_search_makes_public.png)

**アクセス**が**公開**に設定されると、**エンティティの詳細**ページに**システムのデフォルト**フィールドが表示されます。このフィールドはアクティブにトグルされています。

![](../../../images/user-documentation/content-user-manual/search/saved_search_entity_set_as_default.png)

これで、任意のユーザーがログインしてアセットページに移動すると、保存された検索がデフォルトで表示されるようになりました。

![](../../../images/user-documentation/content-user-manual/search/saved_search_set_to_default_all_users.png)

### ユースケース動画

[!Video https://mss-p-003-delivery.stylelabs.cloud/api/public/content/3028e17ddc624056b0d8bdcc6fc32db6?v=bf2f627c]

## マイ検索ページ

ユーザーページのメニューからマイサーチのページに移動して、保存された検索を編集することができます。

![マイサーチにデフォルトの検索操作アイコンが表示されるようになりました](../../../images/user-documentation/content-user-manual/search/completed_my_searches.png)

以下のアイコンが利用できます。

| 名前 	| アイコン 	| アクション 	|
|-	|-	|-	|
| 通知をオンにする 	| ![](../../../images/user-documentation/content-user-manual/search/notifications_icon.png) 	| 保存された検索結果内で変更が発生した場合（例：アセットのメタデータが変更され、保存された検索条件に影響を与える）、ユーザーは通知を受け取ります。	|
| 通知をオフにする 	| ![](../../../images/user-documentation/content-user-manual/search/notification_off_icon.png) 	|  保存された検索結果内で変更が発生した場合（例：アセットのメタデータが変更され、保存された検索条件に影響を与える）、ユーザーは通知を受け取りません。	|
| パブリックにする	| ![](../../../images/user-documentation/content-user-manual/search/make_public_icon.png) 	| 保存された検索結果は、すべてのユーザーが閲覧できるようになります。	|
| プライベートにする 	| ![](../../../images/user-documentation/content-user-manual/search/make_private.png) 	| 保存された検索は非表示になり、検索者とすべてのスーパーユーザーのみが利用できるようになります。スーパーユーザーは、エンティティマネージャを介して他のユーザーの非公開保存検索を見ることができます。	|
| クイック編集	| ![](../../../images/user-documentation/content-user-manual/search/quick_edit.png) 	| A保存された検索のメタデータを編集できます。 	|
| ユーザーの標準に設定	| ![](../../../images/user-documentation/content-user-manual/search/set_as_default.png)	| 保存された検索を、現在のユーザーのデフォルトの保存検索として設定します。 	|
| ユーザーの標準から削除 	| ![](../../../images/user-documentation/content-user-manual/search/remove_as_user_default.png) 	| 保存された検索を、現在のユーザーのデフォルトの保存された検索として解除します。	|
