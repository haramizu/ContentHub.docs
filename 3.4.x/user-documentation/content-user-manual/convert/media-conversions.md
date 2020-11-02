# メディアコンバージョン

コンテンツモジュールは、プレビューやファイルの代替レンダリングの作成をサポートするために、最高のメディア変換とトランスコーディングエンジンを統合しています。以下の変換マトリックスには、可能な変換の概要が記載されています。

## 変換マトリックス

以下に記載されているエンジンにマッチする必要なライセンスのリストは、ライセンスのドキュメントに記載されています。

| Images 	| Png 	| Jpg 	| Tif 	| Pdf 	| Mp3 	| Flv 	| Mp4 	| WebM 	|
|-	|-	|-	|-	|-	|-	|-	|-	|-	|
| Jpg 	| ImageMagick 	| - 	| ImageMagick 	| - 	| - 	| - 	| - 	| - 	|
| Png 	| - 	| ImageMagick 	| ImageMagick 	| - 	| - 	| - 	| - 	| - 	|
| Raw* 	| * 	| * 	| * 	| - 	| - 	| - 	| - 	| - 	|

| Layouts 	| Png 	| Jpg 	| Tif 	| Pdf 	| Mp3 	| Flv 	| Mp4 	| WebM 	|
|-	|-	|-	|-	|-	|-	|-	|-	|-	|
| Tif 	| ImageMagick 	| ImageMagick 	| - 	| ImageMagick 	| - 	| - 	| - 	| - 	|
| Psd 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| - 	| - 	| - 	| - 	|
| AI 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| - 	| - 	| - 	| - 	|
| Eps 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| - 	| - 	| - 	| - 	|
| Pdf 	| ImageMagick 	| ImageMagick 	| ImageMagick 	| - 	| - 	| - 	| - 	| - 	|

| Documents 	| Png 	| Jpg 	| Tif 	| Pdf 	| Mp3 	| Flv 	| Mp4 	| WebM 	|
|-	|-	|-	|-	|-	|-	|-	|-	|-	|
| Doc 	| - 	| - 	| - 	| Aspose 	| - 	| - 	| - 	| - 	|
| Docx 	| - 	| - 	| - 	| Aspose 	| - 	| - 	| - 	| - 	|
| Ppt 	| - 	| - 	| - 	| Aspose 	| - 	| - 	| - 	| - 	|
| Pptx 	| - 	| - 	| - 	| Aspose 	| - 	| - 	| - 	| - 	|

| Audio 	| Png 	| Jpg 	| Tif 	| Pdf 	| Mp3 	| Flv 	| Mp4 	| WebM 	|
|-	|-	|-	|-	|-	|-	|-	|-	|-	|
| Mp3 	| - 	| - 	| - 	| - 	| FFmpeg 	| - 	| - 	| - 	|
| Wav 	| - 	| - 	| - 	| - 	| FFmpeg 	| - 	| - 	| - 	|

| Video 	| Png 	| Jpg 	| Tif 	| Pdf 	| Mp3 	| Flv 	| Mp4 	| WebM 	|
|-	|-	|-	|-	|-	|-	|-	|-	|-	|
| Mpg 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	| FFmpeg 	|
| Mov 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	| FFmpeg 	|
| Mpeg 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	| FFmpeg 	|
| Mp4 	| - 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	|
| Wmv 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	| FFmpeg 	|
| Avi 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	| FFmpeg 	|
| Flv 	| - 	| - 	| - 	| - 	| - 	| - 	| FFmpeg 	| FFmpeg 	|

> [!Note]
> *RAW：このファイルタイプの内容は、使用するカメラによって異なります。RAWファイルのサポートについては、お客様固有のファイルを検証した上で評価する必要があります。

## ファイルタイプの特徴

すべてのデスティネーションファイルタイプがすべての機能をサポートしているわけではありません。機能を利用できるかどうかによって、特定の処理オプションや保存先ファイル タイプを選択する際のインタラクションが変化します。詳細については、http://en.wikipedia.org/wiki/Comparison_of_graphics_file_formats を参照してください。

| Format/ Raster - vector 	| Color depth 	| Transparency 	| Layers 	| Multi-page 	| Metadata 	|
|-	|-	|-	|-	|-	|-	|
| AI / Both 	| 1,8,24, and 32 (possiblywithmultiplepalettes) 	| Yes 	| Yes 	| No 	| Yes 	|
| BMP / Raster 	| 1, 4, 8, 16, 24 and 32 	| Yes; 8b per-pixel alpha channel for ARGB 	| No 	| No 	| Yes 	|
| EPS / Both 	| Devise specific 	| Yes 	| Yes 	| Yes 	| Yes 	|
| GIF / Raster 	| 1, 2, 3, 4, 5, 6, 7, and 8 	| Yes; 1b plane-only mask using color index 	| Yes 	| Yes 	| Yes 	|
| JPEG / Raster 	| 8-bit (greyscale), 12-bit, and 24-bit 	| No 	| No 	| No 	| Yes 	|
| JPEG / Raster 2000 	| 8 and 16 (greyscale) with possibly color up to 48-bit 	| Yes 	| No 	| No 	| Yes 	|
| PNG / Raster 	| 1, 2, 4, 8, 16, 24, 32, 48, and 64 No support for CMYK 	| Yes; 8b, 16b per-pixel alpha channel; 8b for indexed 	| No 	| No 	| Yes 	|
| PSD / Both 	| 1, 2, 4, 8, 16, 24, 32, 48, and 64 	| Yes; 8b, 16b per-pixel alpha channel 	| Yes 	| No 	| Yes 	|
| SVG / Vector[9] 	| 24 and 32 	| Yes 	| Yes 	| Yes (1.2 draft)[10] 	| Yes 	|
| TGA / Raster 	| 1, 2, 4, 8, 16, 24, and 32 	| Yes 	| No 	| No 	|  	|
| TIFF / Both 	| 1, 2, 4, 8, 16, 24, and 32 	| Yes 	| Yes 	| Yes 	| Yes 	|