<script>
  const licenseTextEN = `
MIT License

Copyright (c) 2025 VersaLog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`;

  const licenseTextJP = `
MITライセンス

Copyright (c) 2025 VersaLog

本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、
ソフトウェアを無制限に扱うことを無償で許可します。これには、
使用・複製・改変・結合・掲載・頒布・サブライセンス・販売などの権利が含まれます。
また、ソフトウェアを提供された他者にも同様の権利を与えることができます。

上記の著作権表示および本許諾表示は、ソフトウェアのすべての複製または
重要な部分に記載されるものとします。

本ソフトウェアは「現状のまま」で提供され、明示・黙示を問わず、
商品性・特定目的への適合性・権利非侵害などの保証は一切行いません。
いかなる場合も、著作者または著作権者は、契約行為・不法行為・その他の理由による
損害賠償請求、またはその他の責任を負わないものとします。
`;
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16 space-y-10">
  <h1 class="text-4xl font-bold mb-4 text-center">📜 MIT License</h1>

  <div class="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
    <div class="bg-gray-900 p-6 rounded-xl shadow-lg overflow-x-auto">
      <h2 class="text-xl font-semibold mb-2 text-blue-400">English (Original)</h2>
      <pre class="text-gray-300 text-sm whitespace-pre-wrap">{licenseTextEN}</pre>
    </div>

    <div class="bg-gray-900 p-6 rounded-xl shadow-lg overflow-x-auto">
      <h2 class="text-xl font-semibold mb-2 text-green-400">日本語訳（参考）</h2>
      <pre class="text-gray-300 text-sm whitespace-pre-wrap">{licenseTextJP}</pre>
    </div>
  </div>

  <a href="/" class="mt-8 text-blue-400 hover:text-blue-300 transition">← ホームに戻る</a>
</div>
