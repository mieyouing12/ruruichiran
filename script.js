const initialRules = {
    "introduction-rules": [
        { id: "1.1", description: "<b>ようこそ！Paradox City (パラシティ)へ</b>\n\n「一人ひとりがロスサントス市民になりきり、\n住民同士の交流や様々な職業に就きながら楽しんでください！」" },
        { id: "1.2", description: "<b>当サーバーについて</b>\n\n当サーバーはストグラ様の「究極再現」を目標として運営をしています。ですが、全てを究極に再現するのは難しいということを、予めご理解いただけますと幸いです。" },
        { id: "1.3", description: "<b>究極再現の定義</b>\n\nルールの部分の再現については、致しかねます。究極再現とは、システムの部分であったり、雰囲気の部分です。\nパラドックスシティと、ストグラ様はそれぞれ別だと思ってください。" }
    ],
    "ban-rules": [
        { id: "2.1", description: "18歳以下でのサーバー参加" },
        { id: "2.2", description: "バグやシステムの穴について遊ぶのを禁止" },
        { id: "2.3", description: "現実のお金を使いゲーム内のアイテムを売買するの(リアルマネートレード)を禁止" },
        { id: "2.4", description: "チートツール、荒らし行為、その他運営が不適切と判断した場合、BAN" },
        { id: "2.5", description: "BAN基準は公開しておりません、運営の判断になります。" },
        { id: "2.6", description: "Fuzzy's Family などのチート販売＆killFXの配布サーバーに入った場でサーバーに参加するのを禁止する。" },
        { id: "2.7", description: "killFXやtracersなど撃ち合いで有利になるmodを使用するのを禁止する。" },
        { id: "2.8", description: "クロスヘアの禁止。(使用してるのが発覚した場合最悪BAN対応になります。)" },
        { id: "2.9", description: "Hキーツール、荒らし行為、その他運営が不適切だと判断したもの全て使用禁止です。" },
        { id: "2.10", description: "ほかの街でBANされているのにサーバーに参加する行為" },
        { id: "2.11", description: "補填部屋を悪用し利益を得た場合即BANとする。" },
        { id: "2.12", description: "死んだ状態でx運行やエモートなどでの移動を禁止。" },
        { id: "2.13", description: "ストーリーもななく殺害する行為RDMを禁止" }
    ],
    "server-rules": [
        { id: "3.1", description: "<b>【配信者ルール】</b>\n当サーバーで遊ぶには他投稿者の生放送や動画、切り抜きにおいて、他視点からの映り込みで映像に登場することに了承しなければいけません。\n\n配信中・外問わず””Twitch利用規約””に則した行いをする必要があります。\nLGBT、宗教、政治、人種、病気等への配慮が必要です。\n\n全てのサーバールールは、全員が一定の楽しさの水準で遊ぶために存在します。\nルールに書いてないことならなんでもやっていいわけではありません。" },
        { id: "3.2", description: "<b>【ロールプレイ】</b>\n\n全てのプレイヤーはサーバー上で1人の『キャラクター』としてリアルな生活を行う必要があります。\nロールプレイとは、「ゲーム内で起きた事象に関して現実の自分が感じたかの様に振る舞うこと」です。" },
        { id: "3.3", description: "<b>【 キャラメイク 】	</b>\n\nキャラクターには、ロスサントスに来るまでのストーリー・目的が必要です。\n人間として街にいてもおかしくない名前や年齢、出身地を設定する事を推奨します。\n\nキャラクターの名前は既存の活動者の名前を使用することは禁止されています。\n自分が活動者の場合は、そのままでは無い方が良いです。\nキャラが行った行動と活動者の心理について、別々に話すことができるからです。\n全く別の名前にしたり、自分の活動者名を少し変えたりするプレイヤーが多いです。" },
        { id: "3.4", description: "<b>【初心者マーク】</b>\n\nサーバーに参加した最初の頃は『初心者マーク』が名前の上に表示されます。\n\n初心者マークは自分がゲームに慣れるまで付けることができます。\n最低3回目のログインまでは初心者マークを外さないようにしてください。\n\n5日目のログインまで、警察、救急隊になることはできません。\n警察と救急隊はゲームの中でも核になる職業の為、初心者にはオススメできません。\n7日目のログインまでは強盗や犯罪ミッションをしてはいけません。\n初日から強盗をすると、GTAオンラインのようなプレイスタイルになってしまう方が多い為、禁止しています。\n※一日の始まりの定義は0時とする\n※こちらは2キャラ目以降には適用されません。" },
        { id: "3.5", description: "<b>【1アカウントでの複数キャラクター 】</b>\n\n1プレイヤーが作成できるキャラクターは原則1体までですが、明確な2キャラ目のロールプレイ内容があれば許可をします。許可なしで作成した場合はBAN対象となります。\n\n同じプレイヤーの他キャラクター同士でアイテムや金銭の受け渡しは禁止\n\nキャラクターごとの記憶を引きついではならない" },
        { id: "3.6", description: "<b>【 ランダムデスマッチ・ビークルランダムデスマッチの禁止 】</b>\n\nロールプレイ無く唐突に誰かを轢き殺したり、銃や近接武器で相手を殺害してはいけません。" },
        { id: "3.7", description: "<b>【 意図的なログアウトやリスポーンの禁止 】</b>\n\n逮捕や死亡/ダウンを防ぐ為に意図的なログアウトやリスポーンを行ってはいけません。\nバグによるトラブルやダウンが発生した場合はこの限りに含まれません。" },
        { id: "3.8", description: "<b>【 バグ（グリッチ）やチートの悪用の禁止 】</b>\n\nサーバーの設定ミスやシステムのバグを利用して金銭を稼いだり、有利を勝ち取る行為は固く禁止されています。\nもちろんチート・ハックも禁止。\n\n例\n※壁越しにトランクを開いてアイテムを使う\n※床をすり抜けるバグを使って警察から逃げる\n※インベントリにてアイテムでスロットを埋めて必要なもの以外を取得しないようにする\n※運営が意図しない速度をバグなどを利用して故意に出す行為\n※グリッチローリングや瞬間移動する打ち方を禁止\n上記の例以外にも運営でバグの悪用や意図していない挙動の悪用と判断した場合はBANなどの対応をします。" },
        { id: "3.9", description: "<b>【 パワーゲーミングの禁止 】</b>\n\nRP中に現実を無視しゲーム的に動く事をパワーゲーミングといいます。\nパワーゲーミングはRP中に気づかずに行ってしまう可能性が有るため十分に注意する必要があります。\n\n例\n・ダウン中にラジオを使う\n・手錠をつけられているのにも関わらず、ラジオや通話を使用する\n・人質がいるのにもかかわらず、人質ごと銃撃を加える\n・一度ダウンし傷ついた体で同じ戦線に復帰する\n・ゲームの仕様を利用して、心なきを倒さずに大型ミッションを成功させる(サーマルミッションを含む)\n・本来の使用用途ではないアイテム（スケボー等）を使って落下ダメージを回避する\n・エモートをロールプレイ以外の『有利な状況』につながる為に使用する\n・その他モーションがキャンセルされるエモートなどを利用してダウン中に移動する行為\n・キーバインドを変更しモーションがキャンセルされるバグを使ってパンチを連続で出す行為\n・テーザーが当たりしびれたのにもかかわらず、スライディングなどでモーションキャンセルする行為\n・システムを悪用して、本来の状況から脱出しようとする行為\n・『カバン（bag)』に違法なアイテムを詰めて、隠すのに使う行為\n・トランクの中にミッションで手に入れたアイテムをいれて、利確をして、それを後で転送をする行為の禁止\n・ジョブについていないと使えないアイテムを出勤状態以外での使用禁止\n\n上記の例以外にも、『現実的にそれおかしすぎない？』という行動はパワーゲーミングに該当します。" },
        { id: "3.010", description: "<b>【 恐怖が欠如したプレイングの禁止 】	</b>\n\nお互いに命を持った人間としてゲーム内で責任と恐怖を感じる必要があります。\n現実で自分がされたら怖がるであろうシーンでは、それを反映する必要があります。" },
        { id: "3.011", description: "<b>【 十分に親しい間柄以外での、本人、肉親、知人になりすます行為の禁止 】</b>	\n\nやるのであればラインをしっかり見極め、相手が不快にならないように行なってください" },
        { id: "3.012", description: "<b>【 メタ行為、ゴースティング行為の禁止 】</b>\n\nキャラクターが知ることができる要素だけを使用してストーリーを作る必要があります。\n現実のSNS等で知ってしまった情報をキャラクターに持ち込んではいけません。\n他のキャラクターで知った情報を別のキャラクターでも知ったこととして使用してはいけません。\nサーバー内の他住民とゲーム外の通話ツールを繋げながら（LineやSkype、Discord等）連携を行ってはいけません。\nAFKキックから逃れるためにエモートを活用してはいけません。\n\nゲーム内でサーバールールについて喧嘩をしたり、メタ的な言い争いをしてはいけません\n例：「今のお前はサーバールール違反だ。」「ランダムデスマッチになるからやめよう」「BANされるぞ」等\n例（リアルのX等で）：Aさん『○○にいるけどここ奇麗だなぁ』 →Bさん『おっAさんINしてるの 今からいくわー』 → Bさん『ついたよー』などのやり取り\n\n一部の配信サイトでは、コメント等を投稿していなくても配信サイトに居るか居ないかわかるサイトもございます。\n無音にしたまま消し忘れ・開いたままにしていると実際に配信を見ていなくても見ているように見えてしまします。\nストグラをプレイ中、他者の配信視聴履歴がありますと罰則（BAN）の対象になる可能性がございますので十分にご注意ください。\n\n\n禁止例\nコメントなどの外部サイトからの情報を含め人間関係に影響を与えるプレイを行う\n請求書やインベントリ受け渡し欄を利用して身分を隠そうとした相手の名前を知ろうとする行為\n他のボイスチャットツールを連携の為に使用する行為\n配信外で他キャラクターの配信を観ながら、自キャラクターでプレイを行なう行為" },
        { id: "3.013", description: "<b>【 ダウン状態について 】</b>\n\nHPが0になったら体が横になります。これをダウン状態と呼びます。\nこの状態では苦しみながら会話を行う必要があります。\n\nダウン状態で蘇生された場合。\n→ 全ての記憶を保ったままプレイを続行する事ができます。\n\nリスポーンを選択した場合。\n→ 死亡する原因となった記憶を全てなくしてプレイを行わなければなりません。\n友達、乗り物、家、隠し場所などは覚えていますが恨みや妬みという感情は無いので復讐を行なう事はできません。\n\nダウン中にラジオチャットで”言葉”を発する事を禁止。通知を出すことは可。\nダウン中に痛がる演技・助けてほしいというRPとして成り立つ以外のボイスチャットを事を禁止。\nスーパーシャウトで過剰に痛がり、大声を上げて他プレイヤーのRPを妨げる行為を禁止\n但し、状況的に日常会話などをしても問題ないとする場合は例外とする。\nダウン中のダメ例\n・2階に2人いる！ナイスナイス！アサルト持ってる！7239にいる！など\n大丈夫な例\n・苦しみながら「来ちゃダメ」「逃げろ」等\n・連行されながら「くそー」等" },
        { id: "3.014", description: "<b>【 蘇生後 】	</b>\n\nあなたは怪我の直後だと言うことを念頭に置いてプレイを行わなければありません。\n松葉杖が付いているときは、運転してはいけない。助手席に乗るのは可能" },
        { id: "3.015", description: "<b>【 リスポーンと罪 】	</b>\n\n他のプレイヤーに担がれている、拘束されている間はリスポーンを選択してはいけません。\nリスポーンを選択した場合でもあなたが直前に行っていた犯罪の罪状は残ります。" },
        { id: "3.016", description: "<b>【 警察 】</b>\n\n別タブの 警察用ルール を参照すること。" },
        { id: "3.017", description: "<b>【 音声によるプレイヤーの識別 】</b>	\n\nプレイヤーは顔や服、タトゥー、髪型、動作等を通してそのキャラクターが誰なのかを識別できます。\nしかし、ボイスチェンジャーの有無にかかわらず声で相手が誰なのかを特定することはできません。" },
        { id: "3.018", description: "<b>【 救急隊 】</b>\n\n別タブの 救急隊用ルール を参照すること。" },
        { id: "3.019", description: "<b>【 犯罪 】	</b>\n\n犯罪者は一度拘束された後は、警察側に明らかな落ち度がない限り素直に捕まらなければなりません。\n発砲及び殺害は最終手段である必要があります。\n\n<b>【人質について】</b>\n人質は、自分が『脅されておらず、危険ではない』と感じている場合は逃げて良い\n※例えば一人で強盗を人質ありで始めた犯人が、人質を放置してお金を回収し始めたら逃げてもいいです\nプレイヤーを人質に取る際、拘束が嫌な場合は『夢の世界で予定がある』等と言い断ることができます。" },
        { id: "3.020", description: "<b>【 強盗 】</b>\n\n犯罪者用ルールを参照すること" },
        { id: "3.021", description: "<b>【 著作権に触れる映像や音声を再生する行為の禁止 】</b>	\n\nケータイ・ラジカセ・テレビ。\nあらゆる媒体で著作権に触れる可能性がある音声や映像を再生する行為を禁止します。" },
        { id: "3.022", description: "<b>【 恋愛RP / 男女の交流について 】	</b>\n\n異性/同性にかからわず性的な話題に対して配慮を行う必要があります。\n相手が性的に嫌がる行為を行った場合、明確なルール違反とします。" },
        { id: "3.023", description: "<b>【 職業の限定について 】	</b>\n\nギャングに属している者は、メカニック、カーディーラー、救急隊、闇医者、警察、弁護士、裁判官、不動産屋になってはいけません。" },
        { id: "3.024", description: "<b>【 エモートの悪用の禁止 】	</b>\n\n戦闘を有利に進めるためにエモートを使用することを禁止します。\n例：物陰に隠れるために /e sleep を使う" },
        { id: "3.025", description: "【 仕事中（ on Duty ) 状態での強盗の禁止 】	\n\n勤務中状態で犯罪を行うことを禁止します。\n特にメカニックは勤務中だと自身の車を簡単に直せてしまいます。そのためメカニック関係のツールを所持した状態で犯罪を行う事を禁止します。" },
        { id: "3.026", description: "<b>【 初心者マークの悪用の禁止 】</b>\n\n初心者マークをつけている間はあらゆる罰金30万円以上の犯罪をしてはいけません。" },
        { id: "3.027", description: "<b>【 「多くの人に視聴される状況で炎上しうる行為」の禁止 】</b>	\n\n貴方が配信をしていて100人に見られていると仮定した場合、倫理的に言うべきではない言動や行動をしてはいけません。" },
        { id: "3.029", description: "<b>【 職について 】	</b>\n\nすべてのキャラクターは、メインの職業の他にサブ職業1つに就くことができます。\n白市民パスを持っているプレイヤーに限り、3つまで職業に就くことができる。\n\nギャングに所属することは１つの職業枠に含まれる。\n\nディーラーのスタッフになることは１つの職業枠に含まれる。\n\n白市民パスを持っているプレイヤー（持つ予定のプレイヤー）以外はコンビニを運営してはいけません。\nコンビニの運営は、職業枠には含まれない。" },
        { id: "3.030", description: "<b>【白市民パスについて】</b>\n\n街に来て１ヵ月を過ぎている人、そして犯罪を１回もしていない人にだけしかとることはできない。\n\nもしその後犯罪をした場合、一度白市民パスは剥奪され、犯罪をした日から30日間犯罪をしなかったら再度取ることが可能になる。" }
    ],
    "police-rules": [
        { id: "4.1", description: "<b>全ランクの職員は汚職を行ってはならない。</b>\n\n※汚職とは、警察の情報を過剰に敵対組織に漏らすこと。軽強盗罪以上の犯罪に加担すること。その他、敵対組織に有利に働くことである。\n※交渉の末に金品を一部渡す事等は司法取引になり、汚職ではない。\n\nウェポンロッカーにある銃器やアイテムを持ち出して販売してはいけない。\n\nお互いの犯罪を見逃してはいけません。" },
        { id: "4.2", description: "<b>【 運転や車両について】</b>\nすべてのパトカーには『パトランプ』をつけること（すべてのプレイヤーが警察車両だと分かるようにすること）\n※覆面パトカーは禁止\n※パトカー以外を公務に使うことを禁止\n\n道交法を違反する際はサイレンをつけて走行すること\n緊急時以外で速度違反を行わないように留意すること\n※他の警察が速度違反をしていた場合はしっかり切符を切ること\n\n犯罪に対応する際はランプを付けて走行すること\n\n準重強盗以下の犯罪はお互いにニトロ禁止　（誤って使用してしまった場合はお互いに許す）" },
        { id: "4.3", description: "<b>【 強盗やミッションついて】</b>\n大型ミッションに行く際は、ある程度揃えた部隊服を着ること\n\n防弾性能がついている被り物を着用することを禁止する。\n\n既に大型ミッション（重強盗罪）で発砲や殺害を行っていることが明らかな場合は警告無しで対象の犯罪者を制圧目的で銃撃しても良い。\nすべての重強盗ミッションにおいては、警察は先打ちして良い。" },
        { id: "4.4", description: "<b>【 強盗 / ミッションにおける車両ルール】</b>\n\n\"全ての犯罪において オフロード車とバイクの横付け使用を全面禁止。（乗り換えでの使用も不可）\"\n但し、パシフィックヘイストとユニオンヘイストにおいては、バイク可とする。（オフロードは不可）\n\n重強盗罪の以外で『ニトロ』の使用を禁止\n但し、犯罪者と警察でニトロ使用可の取り決めを行うことは良いとする。\n\n\n重強盗における逃走に使う車両は自家用車で良く、カスタムを行って良い（エンジン含む）\n\n準重強盗以下における逃走に使う車両は窃盗車を使う必要があるが、カスタムは行っても良い\n※購入したボートやヘリも使ってはならない。\n\nミッション実行時以外では上記のルールは適用されない。\n( オフロードカーやバイク、ニトロなどを使用して良い )" },
        { id: "4.5", description: "<b>【犯罪対応全般】	</b>\n\n犯罪者が発砲や投降していない場合手錠をする前にテーザーで無力化しなければならない\n\n大型強盗が起きた際付近にいる人には絶対に一度警告を入れてから発砲などをすること\n\n※重強盗は除く\n※サーマル、パレトは除く\n※ただし市民および心なき市民を殺害・攻撃しているのを目撃している場合発砲して構わない\n\n護送などをしている人を牢屋や壁を貫通させて入れてはならない" },
        { id: "4.6", description: "<b>【ブースティングの対応】</b>\n犯人が心なき市民を殺害をしているのを目視した場合は犯人に対しての発砲を許可する\n\n警察が出せるヘリは1台までとし、ヘリは地上部隊が合流したタイミングで追跡\n\nAとSランクは罰金のみ重強盗罪適用とする。\n※他ミッションのように先撃ちなどは許可されない。" }
    ],
    "kyuukyuu-rules": [
        { id: "5.1", description: "<b>【 救急隊全般 】</b>\n\n職員は汚職を行ってはいけません。\n\n救急隊は副医院長以上の上官が判断すれば、事件現場がまだ落ち着いてない状態でも病院まで運んで救助しても良い。\n但し、発砲や過剰な攻撃などは行ってはいけない。\n\n救急隊は手錠を使用してはいけません。\n\n私的な理由で救急車/救急ヘリを使用してはいけません。" }
    ],
    "fudousan-rules": [
        { id: "6.1", description: "<b>【不動産全般】</b>\n\n過去１ヶ月の間に犯罪の経験がある方は不動産になることはできない\n\n建物の外見をみて、入らなそうな内装を入れないようにしてください\n\n１人が購入できる最大物件は「３つ」までとする。※パトロン者は特別ルールを参照" },
        { id: "6.2", description: "<b>【値段】</b>\n\n値段は市が決めた金額で請求すること\n\n<b>土地代</b>\n・１０００番代　１０００万円\n・２０００番代　１２００万円\n・３０００番代　１３００万円\n・４０００番代　１４００万円\n・５０００番代　１５００万円\n・６０００番代　６０００万円\n・７０００番代　５０００万円\n・８０００番代　４５００万円\n・９０００番代　４０００万円\n・１００００番代　３５００万円\n\n<b>内装金額</b>\n<a href=\"https://docs.google.com/spreadsheets/d/10nhFLwiuEmEnAAOhGr-cDdAPNRhaETvrp58lezDi7S0/edit?usp=sharing\">こちらを参照</a>\n駐車所　一律５００万円" }
    ],
    "mechanic-rules": [
        { id: "7.1", description: "<b>【メカニック全般】</b>\n\n今のところ特に何もなし" }
    ],
    "insyokuten-rules": [
        { id: "8.1", description: "<b>【飲食店全般】</b>\n\n特になし。それぞれの店舗で決めてください" }
    ],
    "criminal-rules": [
        { id: "9.1", description: "<b>【犯罪全般】</b>\n\n発砲及び殺害は最終手段である必要があります。人を殺すことに重みを感じてください。\nまた、手錠や鎮静剤などの暴行罪にあたる行為も、重強盗中以外は対話などのRPがない状態で行うことを禁止します。\n\n配信せずに犯罪行為を行う時も、ロールプレイを意識して行う必要があります。\n\n犯罪関連を行う/対応する際は録画や生放送を推奨し、もし相手から理不尽な行為が行われた場合は、\n録画の提出があった方を優先的に対応し相手は相応の罰が与えられる可能性があります。\n\n勤務状態（onDuty）で強盗やミッションを行うことを禁止します。\n犯罪者は、救急隊、警察、裁判官、各種ディーラーに就職できません。\n\n犯罪やミッションを行う際は、受注後にミッション受注者を含めて現場に向かわなければならない。\n※予め心なきが”スポーン”するであろう場所に待機する行為を禁止\n\n警察から銃も武器もあらゆるものを奪ってはいけません。\n\nあらゆるマイクが使えない（RPができない）状況での犯罪行為の禁止\n\nアジトなどのハウジングなどに、逃げ込む際は、警察車両に追われている状況でアジトに入ってはいけない。\n※ヘリは対象外とする\n\n警察から追われる場合アジトなどのハウジングに逃げ込む前に、いかなる状況であっても最低5分はチェイスを行うこと。　\nチェイスが始まって5分後にはアジトなどのハウジングに入ることができる\n\n初心者マークがついているプレイヤーに対して犯罪を勧めたり、犯罪組織への加入を勧めてはいけません。\n当然、人質を含め犯罪に関与させる行為も禁止。\n\n犯罪が収束するまでスケボーを使用する事を禁止。\n\n2時以降の犯罪行為を禁止\n※花採取も含め\n\n重強盗以上の犯罪では、服装と車両の色をそろえて行うこと。\n※ブースティングは除く\n\n人質を取って犯罪をする際は偽名でもいいので、名前を必ず頭の上に表示させるようにすること" },
        { id: "9.2", description: "<b>【強盗 / ミッション】</b>\nギャングはチーム内で管理し、24時間（5時更新）ごとに3回までしか重強盗に値する犯罪を行ってはいけません。\n※ブースティングは含まれない\n\n店舗や施設などに対して、連続して強盗をする場合は、逃走完了もしくは罰金を切られてから30分以上間を空ける必要がある。\n※ブースティングA帯以上に関しては、受注から30分以上間を空ける形でよい。\n\n合同で大型犯罪をする際は、複数の大型を同時に行ってはいけない。\n\n犯罪をチームで行う時はある程度、服装と乗り物の色を統一しなければならない\n※完全に一致させる必要はないが、誰が見ても同一メンバーとわかる状態にすること。\n※警察官が出来る限り『市民を撃つ』事を避ける為の対策\n\n防弾性能がついている被り物を着用することを禁止\n\n警察が”目視”していたり”わかっている状態”でガレージに薬物や盗難物が入った車両を隠し、警察からの指示に従わずガレージから出さない行為はパワープレイ\n（実際のガレージは駐車している車両はすべて見えており、並んでいるからです。）\n\n警察職員や救急隊員は人質に取ることはできない。\n\n全ての犯罪は、サーバーの再起動時間30分前までに『終わるように』行う必要があり、30分前と後からはいかなる強盗/ミッションも開始してはならない。\n\n大型ミッションの権利の取り合いは、基本的にサイコロなどの血を流さない方法で決めること。\n\n犯罪者は原則として大型犯罪の受注（及び準備開始から）から発生までを1時間以内に行う必要がある。\n\n重強盗に限らず、犯罪を意図して被らせる行為を禁止" },
        { id: "9.3", description: "<b>【特定の強盗 / ミッションにおいてのルール】</b>\n\n銀行強盗\n罰金額を想定し必ず収益が見込める様に、捕まる前提で犯罪をする行為を禁止　\n\n納品が発生する大型は、一度アジトに帰ってから安全に納品する(大型の逃走中に納品してはいけない)" },
        { id: "9.4", description: "<b>【人質ついて】</b>	\n\n人質を取った場合でも金品や犯罪者の開放を要求することはできません。\n\n強盗やミッションで人質を取る際には、人質を近くで管理して居なければ成り立たないものとする。\n\nダウンしているプレイヤー、初心者マークのついている住民は人質にならないものとする。\n\n重強盗以上に当てはまる犯罪やミッションについては、人質をとってはならない。\nその他、人質禁止の犯罪においても禁止とする。\n\n同じチームメンバーを人質の”てい””として扱ってはならない。\n\n心なし（NPC）の人質をとった場合は警察への要望は１つのみ\n心あり（プレイヤー）の人質を取った場合は要望を２つまで聞いてもらえる。" },
        { id: "9.5", description: "<b>【強盗 / ミッションにおける車両ルール】</b>\n\n\"全ての犯罪において オフロード車とバイクの使用を全面禁止。\n但し、パシフィックヘイストとユニオンヘイストにおいては、バイク可とする。（オフロードは不可）\n\n重強盗罪の以外で『ニトロ』の使用を禁止\n但し、犯罪者と警察でニトロ使用可の取り決めを行うことは良いとする。\n※パレト,軍事物資 は除く\n\n防弾や武器のついた車両の使用を禁止\n\n重強盗における逃走に使う車両は自家用車で良く、カスタムを行って良い\n\n準重強盗以下における逃走に使う車両は窃盗車を使う必要があるが、カスタムは行っても良い\n※購入したボートやヘリも使ってはならない。\n※犯罪関係については制限を設けない\n※パレト,軍事物資 は除く\n\nギャングがアジトやハウジング等に逃げ込む場合は、最低5分はチェイスを行うこと。　\nチェイスが始まって5分後には入ることができる\n\nミッション実行時以外では上記のルールは適用されない。\n( オフロードカーやバイク、ニトロなどを使用して良い。 )" },
        { id: "9.6", description: "<b>【受注犯罪について】</b>\n\n・飛行場襲撃\n飛行機に向かってロケラン＆アタックを極力控えること\n飛行場のスタートするときは、参加者全員、ゲート入り口前からスタートするようにすること\n\n・客船強盗\n客船強盗をスタートするときは全員船尾からスタートすること、先に屋上などに配置するのは禁止" },
        { id: "9.7", description: "<b>【歪み＆補填について】</b>\n\n歪みで受け取れなった場合、その場に１ヵ所3分間待機すること。\nそして、その待機している時間を記録する動画を提出すると補填対象となる。" }
    ],
    "gang-rules": [
        { id: "10.1", description: "<b>【ギャング全般】</b>\n\nギャングに属している者は、救急隊、闇医者、警察、各種ディーラーに就職できません。\n\n犯罪者はメカニックに就くことができるが、免許を持っていない場合そのメカニックには廃業のリスクが発生します。\n\nどの様な職業についた場合でもギャングメンバーに対して平等に仕事を行う必要があります。\n\n白市民パスを持っているプレイヤー（持つ予定のプレイヤー）以外はコンビニを運営してはいけません。\n\nギャングのボスと仕事の社長を兼任して良いが、仕事に対しては平等に行う必要があります。\n\n敵対ギャング同士でも、見かけ次第発砲を行う行為はランダムデスマッチに該当します。" },
        { id: "10.2", description: "<b>【設立条件】</b>\n\n設立金１億円（上昇の可能性あり）\n最低メンバー３人以上\nボスは街に来て１週間以上たっていること（時間計算）" },
        { id: "10.3", description: "<b>【カラー関係】</b>\n重強盗以上の犯罪を行う時は各カラーにあった服装でそろえて行うこと\n\n<b>【合同】</b>\nどちらかのカラーの服装でそろえること\n\n<b>【傭兵】</b>\nギャングの服装にそろえさせて行うこと" },
        { id: "10.4", description: "<b>【島取について】</b>\n\n島取時間は２０時から２２時までの２時間とする\n時間外で島取行為を行った場合はギャング解釈対象とする\n\n使用可能武器はピストルのみ\n\nギャングの服装でそろえて行うこと\n\n意図的な個人医の殺害を禁止\n\n修理中と後、ガソリンを給油している最中と終わった後の殺害を禁止\n\nヘリブレードを禁止\n\nポイントを上げるときはスプレーを使わずNPCへの薬の販売を行うこと\nNPCを島に連れていきそこで売る行為を禁止" },
        { id: "10.5", description: "<b>【横取りについて】</b>\n\n横取りは必ず３人で行うこと\n服装と車両の色をそろえて行うこと\nヘリの使用は禁止" }
    ],
    "related-rules": [
        { id: "11.1", description: "<b>【全般】</b>\n\n闇医者の最終目的は怪我で歩けない場合やダウンしている犯罪者の逃亡を成功させることである\n\n闇医者は救急隊との差を明確にするため、白市民に対しては暴利であるべきである\n\n闇医者は逃走補助の為、現場に介入する際”仮に補助の現場を抑えられていなくても\n”逃走補助を目的として現場に介入している認識をもつべきである" },
        { id: "11.2", description: "<b>【基本ルール】</b>	\n\n犯罪現場に対して近づいた際に撃たれても自己責任となる\n\n個人医は一切の攻撃を行ってはならない\n\n個人医はギャングへの所属をしてはならない\n\n個人医として犯罪現場に向かうときは白い服を着用しなければならない\n\nクリニックは警察にばれないように努めなければならない" },
        { id: "11.3", description: "<b>【闇医者ルール】</b>\n\n\n【トグルロープ担架の使用方法】\n■使用可\n・ダウンした救助対象者への使用\n・歪みやスタックによる復帰不可場所でのダウンや動けなくなったものへの救助\n\n■使用不可\n・壁越しのロープ担架での救助\n・運転している人間へのロープ担架使用による運転の強制停止\n・ロープ担架を使用したダウン者以外の相手への行動停止\n・生きている人間が救助対象を護送してる際のロープ担架での護送解除＆救助\n・乗り物が止められない場所などの場合を除き、乗り物に乗っている状態での使用\n\n【鎮静剤の使用方法】\n■使用可\n・自身が指名手配や違法薬物の採取場所、生成場所での現行犯逮捕に対する抵抗\n・暴れている白市民の鎮静化（ネタとしてのみ）\n\n■使用不可\n・ミッションや抗争・強盗における逃走補助が付く現場での使用\n\n■使用上の注意\n・使用可の状況にて鎮静剤を使用したとしても銃を撃つ、殴り殺すなどの行為は禁止\n・鎮静剤使用後に手錠をかけ行動を抑制することは可能\n\n【手錠に関して】\n・すべての状況において使用可能\n\n【逃げ込みクリニックについて】\n・闇医者が逃げ込んでも良い逃げ込みクリニックは個人では1つまで全体では制限なしまで登録可能\n※事前に不動産に登録しなければ逃げ込んではならない\n※クリニックと同じ使い方してよい\n※犯罪で警察に追われている際に逃げ込んでよい拠点は闇医者全体で登録した3つの逃げ込みクリニックのみとする\n\n・警察に追われていてクリニックに逃げ込む場合は、追われ始めてから最低5分はチェイスを行うこと。　\n・チェイスが始まって5分後には事前申請済みの逃げ込みクリニックに入る事ができる\n※ただし航空機に乗っている状態で警察に追われている場合、警察のヘリを巻かなければ逃げ込みクリニックに入ってはならない。\n\n・逃げ込む際は警察車両に追われている状況で、逃げ込みクリニックに入ってはならない" },
        { id: "11.4", description: "<b>【値段について】</b>\n・蘇生100万円\n・治療50万円" }
    ],
    "tokubetu-rules": [
        { id: "12.1", description: "<b>【上限のあるもの一覧】</b>\n不動産→１人「３軒」のみ\n【市長結婚しよう！】プランにて制限解除可能\n※１キャラで１人とする（２キャラ目には適応されない）\n\nハイドアウト→１人「２つ」まで\n【市長結婚しよう！】プランにて制限解除可能\n※２キャラ目にも適応される" }
    ]
};

const initialMissions = [
    { 
        grade: "軽強盗罪",
        fine: "罰金500,000円",
        crimes: [
            { name: "空き巣", police: 2 }
        ]
    },
    { 
        grade: "強盗罪",
        fine: "罰金1,000,000円",
        crimes: [
            { name: "ブースティングB以下", police: 1 },
            { name: "コンビニ強盗", police: 2 }
        ]
    },
    { 
        grade: "準重強盗罪",
        fine: "罰金2,000,000円",
        crimes: [
            { name: "Fleeca銀行強盗", police: 4 },
            { name: "宝石店強盗", police: 4 },
            { name: "サーマルミッション (人質利用禁止)", police: 4 },
            { name: "パレト銀行強盗 (人質利用禁止)", police: 4 }
        ]
    },
    { 
        grade: "重強盗罪",
        fine: "罰金3,000,000円\n(人質利用禁止)",
        crimes: [
            { name: "ブースティングA以上", police: 3 },
            { name: "金庫強盗", police: 5 },
            { name: "BOBCAT強盗", police: 5 },
            { name: "オイルリグ強盗", police: 6 },
            { name: "飛行場襲撃強盗", police: 6 },
            { name: "豪華客船強盗", police: 7 },
            { name: "アーティファクト", police: 8 },
            { name: "ユニオンヘイスト", police: 10 },
            { name: "パシフィック銀行強盗", police: 11 }
        ]
    }
];

// Initial navigation items
const initialNavItems = [
    { id: "introduction-rules", name: "はじめに", prefix: "1" },
    { id: "ban-rules", name: "BANルール", prefix: "2" },
    { id: "server-rules", name: "サーバールール", prefix: "3" },
    { id: "police-rules", name: "警察用ルール", prefix: "4" },
    { id: "kyuukyuu-rules", name: "救急隊用ルール", prefix: "5" },
    { id: "fudousan-rules", name: "不動産用ルール", prefix: "6" },
    { id: "mechanic-rules", name: "メカニック用ルール", prefix: "7" },
    { id: "insyokuten-rules", name: "飲食店用ルール", prefix: "8" },
    { id: "criminal-rules", name: "犯罪者用ルール", prefix: "9" },
    { id: "gang-rules", name: "ギャングルール", prefix: "10" },
    { id: "related-rules", name: "闇医者用ルール", prefix: "11" },
    { id: "tokubetu-rules", name: "特別ルール", prefix: "12" },
    { id: "mission-list", name: "ミッションリスト", prefix: "13" }
];

// DOM Elements
const userIcon = document.getElementById('userIcon');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const cancelLoginBtn = document.getElementById('cancelLoginBtn');
const rulesTableBody = document.getElementById('rulesTableBody');
const actionsHeader = document.getElementById('actionsHeader');
const adminActions = document.getElementById('adminActions');
const addRuleContainer = document.getElementById('addRuleContainer');
const newRuleId = document.getElementById('newRuleId');
const newRuleDescription = document.getElementById('newRuleDescription');
const addRuleBtn = document.getElementById('addRuleBtn');
const editModal = document.getElementById('editModal');
const editRuleId = document.getElementById('editRuleId');
const editRuleDescription = document.getElementById('editRuleDescription');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const saveEditBtn = document.getElementById('saveEditBtn');
const showHtmlBtn = document.getElementById('showHtmlBtn');
const htmlOutputContainer = document.getElementById('htmlOutputContainer');
const rulesTableContainer = document.getElementById('rulesTableContainer');
const missionTableContainer = document.getElementById('missionTableContainer');
const missionTableBody = document.getElementById('missionTableBody');
const missionActionsHeader = document.getElementById('missionActionsHeader');
const missionAdminControls = document.getElementById('missionAdminControls');
const htmlOutput = document.getElementById('htmlOutput');
const copyHtmlBtn = document.getElementById('copyHtmlBtn');
const backToTableBtn = document.getElementById('backToTableBtn');
const navContainer = document.getElementById('navContainer');
const navManagement = document.getElementById('navManagement');
const navItemsList = document.getElementById('navItemsList');
const addNavBtn = document.getElementById('addNavBtn');
const navModal = document.getElementById('navModal');
const navItemName = document.getElementById('navItemName');
const navItemId = document.getElementById('navItemId');
const navItemPrefix = document.getElementById('navItemPrefix');
const cancelNavBtn = document.getElementById('cancelNavBtn');
const saveNavBtn = document.getElementById('saveNavBtn');
const editNavModal = document.getElementById('editNavModal');
const editNavItemName = document.getElementById('editNavItemName');
const editNavItemId = document.getElementById('editNavItemId');
const editNavItemPrefix = document.getElementById('editNavItemPrefix');
const cancelEditNavBtn = document.getElementById('cancelEditNavBtn');
const saveEditNavBtn = document.getElementById('saveEditNavBtn');

// Mission editing DOM elements
const crimeGradeSelect = document.getElementById('crimeGradeSelect');
const newGradeName = document.getElementById('newGradeName');
const newGradeFine = document.getElementById('newGradeFine');
const addGradeBtn = document.getElementById('addGradeBtn');
const newCrimeName = document.getElementById('newCrimeName');
const newPoliceCount = document.getElementById('newPoliceCount');
const newCrimeNote = document.getElementById('newCrimeNote');
const addCrimeBtn = document.getElementById('addCrimeBtn');
const editGradeModal = document.getElementById('editGradeModal');
const editGradeName = document.getElementById('editGradeName');
const editGradeFine = document.getElementById('editGradeFine');
const cancelEditGradeBtn = document.getElementById('cancelEditGradeBtn');
const saveEditGradeBtn = document.getElementById('saveEditGradeBtn');
const editCrimeModal = document.getElementById('editCrimeModal');
const editCrimeGradeSelect = document.getElementById('editCrimeGradeSelect');
const editCrimeName = document.getElementById('editCrimeName');
const editPoliceCount = document.getElementById('editPoliceCount');
const editCrimeNote = document.getElementById('editCrimeNote');
const cancelEditCrimeBtn = document.getElementById('cancelEditCrimeBtn');
const saveEditCrimeBtn = document.getElementById('saveEditCrimeBtn');
const loadingOverlay = document.getElementById('loadingOverlay');

// State
let rules = {};
let missions = [];
let navItems = [];
let isLoggedIn = false;
let currentEditId = null;
let currentEditNavId = null;
let activeTabId = "server-rules"; // Default active tab
let currentEditGradeIndex = null;
let currentEditCrimeData = null;

// Show and hide loading overlay functions
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// データを常に初期定数から読み込む
async function loadDataFromInitialConstants() {
    showLoading();
    
    try {
        // 常に初期定数から読み込む（LocalStorageは使用しない）
        rules = JSON.parse(JSON.stringify(initialRules)); // Deep copy
        missions = JSON.parse(JSON.stringify(initialMissions)); // Deep copy
        navItems = JSON.parse(JSON.stringify(initialNavItems)); // Deep copy
        
        // Set default active tab
        if (navItems.length > 0) {
            activeTabId = navItems[0].id;
        }
        
        // Ensure each nav item has a prefix
        navItems = navItems.map(item => {
            if (!item.prefix) {
                item.prefix = generateRandomPrefix();
            }
            return item;
        });
        
        // Ensure all tabs have a rules array
        navItems.forEach(item => {
            if (!rules[item.id]) {
                rules[item.id] = [];
            }
        });
        
        // Reset login state
        isLoggedIn = false;
    } catch (error) {
        console.error("Error loading initial data:", error);
        alert("初期データの読み込み中にエラーが発生しました。");
    } finally {
        hideLoading();
    }
}

// この関数は何もしない（LocalStorageに保存しない）
async function saveDataToLocalStorage() {
    // 意図的に空にする - データを永続化しない
    return;
}

// Get the active tab's rules
function getActiveTabRules() {
    return rules[activeTabId] || [];
}

// Get the active tab's prefix
function getActiveTabPrefix() {
    const activeTab = navItems.find(item => item.id === activeTabId);
    if (activeTab && activeTab.prefix) {
        return activeTab.prefix;
    }
    // Default to SR if no prefix found
    return "SR";
}

// Generate a random 2-digit prefix if not exists
function generateRandomPrefix() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 2; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate the next rule ID based on the active tab
function generateNextRuleId() {
    const prefix = getActiveTabPrefix();
    
    // Get rules for the active tab
    const tabRules = getActiveTabRules();
    
    // Find the highest number
    let maxNumber = 0;
    tabRules.forEach(rule => {
        const numberPart = rule.id.split("-")[1];
        const number = parseInt(numberPart, 10);
        if (!isNaN(number) && number > maxNumber) {
            maxNumber = number;
        }
    });
    
    // Generate the next number
    const nextNumber = maxNumber + 1;
    
    // Format it with leading zeros (001, 002, etc.)
    return `${prefix}-${String(nextNumber).padStart(3, "0")}`;
}

// Initialize the application
async function init() {
    // Load data from initial constants instead of localStorage
    await loadDataFromInitialConstants();
    
    // Render the navigation items
    renderNavItems();
    
    // Check if we should show missions or rules
    if (activeTabId === 'mission-list') {
        rulesTableContainer.style.display = 'none';
        missionTableContainer.style.display = 'block';
        renderMissionTable();
    } else {
        rulesTableContainer.style.display = 'block';
        missionTableContainer.style.display = 'none';
        renderRulesTable();
    }
    
    // Set up event listeners
    setupEventListeners();
    setupMissionEditFormListeners();
}

// Render the navigation items
function renderNavItems() {
    navContainer.innerHTML = '';
    
    navItems.forEach(item => {
        const button = document.createElement('button');
        button.className = 'nav-item';
        if (item.id === activeTabId) {
            button.classList.add('active');
        }
        button.setAttribute('data-tab', item.id);
        button.textContent = item.name;
        
        button.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
            activeTabId = item.id;
            
            // Toggle mission table vs rules table
            if (activeTabId === 'mission-list') {
                rulesTableContainer.style.display = 'none';
                missionTableContainer.style.display = 'block';
                renderMissionTable();
                if (isLoggedIn) {
                    adminActions.style.display = 'block'; // Show the admin actions for missions too
                    addRuleContainer.style.display = 'none';
                    missionAdminControls.style.display = 'block';
                    missionActionsHeader.style.display = 'table-cell';
                }
            } else {
                rulesTableContainer.style.display = 'block';
                missionTableContainer.style.display = 'none';
                renderRulesTable();
                if (isLoggedIn) {
                    adminActions.style.display = 'block';
                    addRuleContainer.style.display = 'block';
                    const nextId = generateNextRuleId();
                    newRuleId.value = nextId;
                    newRuleId.placeholder = `例: ${nextId}`;
                }
            }
        });
        
        navContainer.appendChild(button);
    });
    
    // Render the navigation items management UI
    if (isLoggedIn) {
        renderNavManagement();
    }
}

// Render the navigation management UI
function renderNavManagement() {
    navItemsList.innerHTML = '';
    
    navItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'nav-item-card';
        card.innerHTML = `
            <div class="nav-item-card-content">
                <div class="nav-item-card-title">${item.name}</div>
                <div class="nav-item-card-id">${item.id} (プレフィックス: ${item.prefix || '未設定'})</div>
            </div>
            <div class="nav-item-card-actions">
                <button class="action-btn edit-nav" data-id="${item.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-nav" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        navItemsList.appendChild(card);
    });
    
    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.action-btn.edit-nav').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            handleEditNavItem(id);
        });
    });
    
    document.querySelectorAll('.action-btn.delete-nav').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            handleDeleteNavItem(id);
        });
    });
}

// Render the rules table
function renderRulesTable() {
    rulesTableBody.innerHTML = '';
    
    // Get the rules for the active tab
    const activeRules = getActiveTabRules();
    
    if (activeRules.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = isLoggedIn ? 3 : 2;
        td.textContent = 'このタブにはまだルールがありません。';
        td.style.textAlign = 'center';
        td.style.padding = '2rem';
        tr.appendChild(td);
        rulesTableBody.appendChild(tr);
        return;
    }
    
    activeRules.forEach((rule, index) => {
        const tr = document.createElement('tr');
        
        // ID Cell
        const tdId = document.createElement('td');
        tdId.textContent = rule.id;
        tr.appendChild(tdId);
        
        // Description Cell
        const tdDescription = document.createElement('td');
        // Replace newlines with <br> tags to preserve formatting
        tdDescription.innerHTML = rule.description.replace(/\n/g, '<br>');
        tr.appendChild(tdDescription);
        
        // Actions Cell (only visible when logged in)
        const tdActions = document.createElement('td');
        tdActions.classList.add('action-buttons');
        tdActions.innerHTML = `
            <button class="action-btn edit" data-id="${rule.id}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete" data-id="${rule.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        if (isLoggedIn) {
            tdActions.style.display = 'flex';
        } else {
            tdActions.style.display = 'none';
        }
        
        tr.appendChild(tdActions);
        
        rulesTableBody.appendChild(tr);
    });
    
    // Update action buttons event listeners
    setupActionButtonListeners();
}

// Setup action button listeners (edit and delete)
function setupActionButtonListeners() {
    // Edit buttons
    document.querySelectorAll('.action-btn.edit').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            handleEditRule(id);
        });
    });
    
    // Delete buttons
    document.querySelectorAll('.action-btn.delete').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            handleDeleteRule(id);
        });
    });
}

// Handle edit rule
function handleEditRule(id) {
    const activeRules = getActiveTabRules();
    const rule = activeRules.find(r => r.id === id);
    
    if (rule) {
        currentEditId = id;
        editRuleId.value = rule.id;
        editRuleDescription.value = rule.description;
        editModal.style.display = 'flex';
    }
}

// Save edited rule
function saveEditedRule() {
    if (!currentEditId) return;
    
    const newDescription = editRuleDescription.value;
    
    // Get the current tab's rules
    const activeRules = getActiveTabRules();
    
    // Update the rule
    const updatedRules = activeRules.map(rule => {
        if (rule.id === currentEditId) {
            return { ...rule, description: newDescription };
        }
        return rule;
    });
    
    // Update the rules object
    rules[activeTabId] = updatedRules;
    
    // Reset and close modal
    editModal.style.display = 'none';
    currentEditId = null;
    
    // Re-render the table
    renderRulesTable();
}

// Handle delete rule
function handleDeleteRule(id) {
    if (confirm('このルールを削除してもよろしいですか？')) {
        // Get the current tab's rules
        const activeRules = getActiveTabRules();
        
        // Remove the rule
        const updatedRules = activeRules.filter(rule => rule.id !== id);
        
        // Update the rules object
        rules[activeTabId] = updatedRules;
        
        // Re-render the table
        renderRulesTable();
    }
}

// Add new rule
function addNewRule() {
    const id = newRuleId.value.trim() || generateNextRuleId();
    const description = newRuleDescription.value.trim();
    
    if (description === '') {
        alert('ルールの説明を入力してください。');
        return;
    }
    
    // Get the current tab's rules
    const activeRules = getActiveTabRules();
    
    // Check if ID already exists
    if (activeRules.some(rule => rule.id === id)) {
        alert('この管理IDは既に使用されています。別のIDを使用してください。');
        return;
    }
    
    // Add the new rule
    const updatedRules = [...activeRules, { id, description }];
    
    // Update the rules object
    rules[activeTabId] = updatedRules;
    
    // Clear the form
    newRuleId.value = generateNextRuleId();
    newRuleDescription.value = '';
    
    // Re-render the table
    renderRulesTable();
}

// Handle adding a new navigation item
function addNewNavItem() {
    const name = navItemName.value.trim();
    const id = navItemId.value.trim();
    let prefix = navItemPrefix.value.trim().toUpperCase();
    
    if (name === '' || id === '') {
        alert('表示名と内部IDを入力してください。');
        return;
    }
    
    // Check if ID already exists
    if (navItems.some(item => item.id === id)) {
        alert('この内部IDは既に使用されています。別のIDを使用してください。');
        return;
    }
    
    // Generate random prefix if not provided
    if (prefix === '') {
        prefix = generateRandomPrefix();
    } else if (prefix.length !== 2) {
        alert('プレフィックスは2文字で入力してください。');
        return;
    }
    
    // Check if prefix already exists
    if (navItems.some(item => item.prefix === prefix)) {
        alert('このプレフィックスは既に使用されています。別のプレフィックスを使用してください。');
        return;
    }
    
    // Add the new navigation item
    navItems.push({ id, name, prefix });
    
    // Initialize rules array for this navigation
    if (!rules[id]) {
        rules[id] = [];
    }
    
    // Close modal and clear form
    navModal.style.display = 'none';
    navItemName.value = '';
    navItemId.value = '';
    navItemPrefix.value = '';
    
    // Re-render navigation
    renderNavItems();
}

// Handle editing a navigation item
function handleEditNavItem(id) {
    const navItem = navItems.find(item => item.id === id);
    
    if (navItem) {
        currentEditNavId = id;
        editNavItemName.value = navItem.name;
        editNavItemId.value = navItem.id;
        editNavItemPrefix.value = navItem.prefix || '';
        editNavModal.style.display = 'flex';
    }
}

// Save edited navigation item
function saveEditedNavItem() {
    if (!currentEditNavId) return;
    
    const newName = editNavItemName.value.trim();
    let newPrefix = editNavItemPrefix.value.trim().toUpperCase();
    
    if (newName === '') {
        alert('表示名を入力してください。');
        return;
    }
    
    // Validate prefix
    if (newPrefix === '') {
        newPrefix = generateRandomPrefix();
    } else if (newPrefix.length !== 2) {
        alert('プレフィックスは2文字で入力してください。');
        return;
    }
    
    // Check if the prefix is already used by other nav items
    const currentItem = navItems.find(item => item.id === currentEditNavId);
    if (newPrefix !== currentItem.prefix && navItems.some(item => item.prefix === newPrefix)) {
        alert('このプレフィックスは既に使用されています。別のプレフィックスを使用してください。');
        return;
    }
    
    // Update the navigation item
    navItems = navItems.map(item => {
        if (item.id === currentEditNavId) {
            return { ...item, name: newName, prefix: newPrefix };
        }
        return item;
    });
    
    // Reset and close modal
    editNavModal.style.display = 'none';
    currentEditNavId = null;
    
    // Re-render navigation
    renderNavItems();
    
    // Update rule ID if active tab's prefix changed
    if (isLoggedIn && activeTabId !== 'mission-list') {
        const nextId = generateNextRuleId();
        newRuleId.value = nextId;
        newRuleId.placeholder = `例: ${nextId}`;
    }
}

// Handle deleting a navigation item
function handleDeleteNavItem(id) {
    // Check if it's the last navigation item
    if (navItems.length <= 1) {
        alert('最低1つのナビゲーション項目が必要です。');
        return;
    }
    
    if (confirm('このナビゲーション項目を削除してもよろしいですか？関連するルールも全て削除されます。')) {
        // Remove the navigation item
        navItems = navItems.filter(item => item.id !== id);
        
        // Remove the rules for this nav item
        delete rules[id];
        
        // If the deleted item was the active tab, switch to the first available tab
        if (id === activeTabId && navItems.length > 0) {
            activeTabId = navItems[0].id;
        }
        
        // Re-render navigation and rules
        renderNavItems();
        if (activeTabId === 'mission-list') {
            renderMissionTable();
        } else {
            renderRulesTable();
        }
    }
}

// Render the mission table
function renderMissionTable() {
    missionTableBody.innerHTML = '';
    
    // Show/hide admin controls based on login state
    if (isLoggedIn) {
        missionActionsHeader.style.display = 'table-cell';
        missionAdminControls.style.display = 'block';
        
        // Update crime grade select options
        updateGradeSelectOptions();
    } else {
        missionActionsHeader.style.display = 'none';
        missionAdminControls.style.display = 'none';
    }
    
    missions.forEach((gradeGroup, gradeIndex) => {
        // First row of group has the crime grade in rowspan
        const rowCount = gradeGroup.crimes.length;
        
        gradeGroup.crimes.forEach((crime, crimeIndex) => {
            const tr = document.createElement('tr');
            tr.classList.add('crime-row-relative');
            
            // Only add the grade cell on the first row of each group
            if (crimeIndex === 0) {
                const tdGrade = document.createElement('td');
                tdGrade.rowSpan = rowCount;
                tdGrade.innerHTML = `${gradeGroup.grade}<br>${gradeGroup.fine}`;
                
                // Add edit/delete buttons for grade if admin
                if (isLoggedIn) {
                    tdGrade.innerHTML += `
                        <div class="grade-actions">
                            <button class="action-btn edit-grade" data-index="${gradeIndex}">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn delete-grade" data-index="${gradeIndex}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                }
                
                tr.appendChild(tdGrade);
            }
            
            // Crime name cell
            const tdName = document.createElement('td');
            tdName.textContent = crime.name;
            tr.appendChild(tdName);
            
            // Required police count cell
            const tdPolice = document.createElement('td');
            if (crime.note) {
                tdPolice.innerHTML = `${crime.police} ${crime.note}`;
            } else {
                tdPolice.textContent = crime.police;
            }
            tr.appendChild(tdPolice);
            
            // Actions cell (if admin)
            if (isLoggedIn) {
                const tdActions = document.createElement('td');
                tdActions.className = 'mission-action-buttons';
                tdActions.innerHTML = `
                    <button class="action-btn edit-crime" data-grade="${gradeIndex}" data-crime="${crimeIndex}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-crime" data-grade="${gradeIndex}" data-crime="${crimeIndex}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                tr.appendChild(tdActions);
            }
            
            missionTableBody.appendChild(tr);
        });
    });
    
    // Add event listeners for mission edit buttons
    if (isLoggedIn) {
        setupMissionEditListeners();
    }
}

// Update grade select options in the forms
function updateGradeSelectOptions() {
    // Clear existing options
    crimeGradeSelect.innerHTML = '';
    editCrimeGradeSelect.innerHTML = '';
    
    // Add options for each grade
    missions.forEach((grade, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = grade.grade;
        crimeGradeSelect.appendChild(option);
        
        const editOption = document.createElement('option');
        editOption.value = index;
        editOption.textContent = grade.grade;
        editCrimeGradeSelect.appendChild(editOption);
    });
}

// Setup mission edit listeners
function setupMissionEditListeners() {
    // Edit grade buttons
    document.querySelectorAll('.edit-grade').forEach(button => {
        button.addEventListener('click', function() {
            const gradeIndex = parseInt(this.getAttribute('data-index'));
            const grade = missions[gradeIndex];
            
            currentEditGradeIndex = gradeIndex;
            editGradeName.value = grade.grade;
            editGradeFine.value = grade.fine;
            
            editGradeModal.style.display = 'flex';
        });
    });
    
    // Delete grade buttons
    document.querySelectorAll('.delete-grade').forEach(button => {
        button.addEventListener('click', function() {
            const gradeIndex = parseInt(this.getAttribute('data-index'));
            if (confirm(`このグレード「${missions[gradeIndex].grade}」とそのすべての犯罪を削除してもよろしいですか？`)) {
                missions.splice(gradeIndex, 1);
                renderMissionTable();
            }
        });
    });
    
    // Edit crime buttons
    document.querySelectorAll('.edit-crime').forEach(button => {
        button.addEventListener('click', function() {
            const gradeIndex = parseInt(this.getAttribute('data-grade'));
            const crimeIndex = parseInt(this.getAttribute('data-crime'));
            
            const crime = missions[gradeIndex].crimes[crimeIndex];
            currentEditCrimeData = { gradeIndex, crimeIndex };
            
            editCrimeGradeSelect.value = gradeIndex;
            editCrimeName.value = crime.name;
            editPoliceCount.value = crime.police;
            editCrimeNote.value = crime.note || '';
            
            editCrimeModal.style.display = 'flex';
        });
    });
    
    // Delete crime buttons
    document.querySelectorAll('.delete-crime').forEach(button => {
        button.addEventListener('click', function() {
            const gradeIndex = parseInt(this.getAttribute('data-grade'));
            const crimeIndex = parseInt(this.getAttribute('data-crime'));
            
            if (confirm(`この犯罪「${missions[gradeIndex].crimes[crimeIndex].name}」を削除してもよろしいですか？`)) {
                missions[gradeIndex].crimes.splice(crimeIndex, 1);
                
                // If no crimes left in this grade, ask if want to remove the grade too
                if (missions[gradeIndex].crimes.length === 0) {
                    if (confirm(`このグレード「${missions[gradeIndex].grade}」には犯罪がなくなりました。グレードも削除しますか？`)) {
                        missions.splice(gradeIndex, 1);
                    }
                }
                
                renderMissionTable();
            }
        });
    });
}

// Setup listeners for the mission form interactions
function setupMissionEditFormListeners() {
    // Add new grade
    addGradeBtn.addEventListener('click', function() {
        const gradeName = newGradeName.value.trim();
        const gradeFine = newGradeFine.value.trim();
        
        if (gradeName === '' || gradeFine === '') {
            alert('グレード名と罰金を入力してください。');
            return;
        }
        
        // Add new grade to missions
        missions.push({
            grade: gradeName,
            fine: gradeFine,
            crimes: []
        });
        
        // Clear form
        newGradeName.value = '';
        newGradeFine.value = '';
        
        // Update UI
        renderMissionTable();
    });
    
    // Add new crime
    addCrimeBtn.addEventListener('click', function() {
        const gradeIndex = crimeGradeSelect.value;
        const crimeName = newCrimeName.value.trim();
        const policeCount = newPoliceCount.value.trim();
        const crimeNote = newCrimeNote.value.trim();
        
        if (gradeIndex === '' || crimeName === '' || policeCount === '') {
            alert('グレード、犯罪名、必要警察数を入力してください。');
            return;
        }
        
        // Create new crime object
        const newCrime = {
            name: crimeName,
            police: parseInt(policeCount)
        };
        
        // Add note if provided
        if (crimeNote) {
            newCrime.note = crimeNote;
        }
        
        // Add to selected grade
        missions[gradeIndex].crimes.push(newCrime);
        
        // Clear form
        newCrimeName.value = '';
        newPoliceCount.value = '';
        newCrimeNote.value = '';
        
        // Update UI
        renderMissionTable();
    });
    
    // Edit grade modal controls
    cancelEditGradeBtn.addEventListener('click', function() {
        editGradeModal.style.display = 'none';
        currentEditGradeIndex = null;
    });
    
    saveEditGradeBtn.addEventListener('click', function() {
        if (currentEditGradeIndex === null) return;
        
        const gradeName = editGradeName.value.trim();
        const gradeFine = editGradeFine.value.trim();
        
        if (gradeName === '' || gradeFine === '') {
            alert('グレード名と罰金を入力してください。');
            return;
        }
        
        // Update grade
        missions[currentEditGradeIndex].grade = gradeName;
        missions[currentEditGradeIndex].fine = gradeFine;
        
        // Close modal
        editGradeModal.style.display = 'none';
        currentEditGradeIndex = null;
        
        // Update UI
        renderMissionTable();
    });
    
    // Edit crime modal controls
    cancelEditCrimeBtn.addEventListener('click', function() {
        editCrimeModal.style.display = 'none';
        currentEditCrimeData = null;
    });
    
    saveEditCrimeBtn.addEventListener('click', function() {
        if (!currentEditCrimeData) return;
        
        const newGradeIndex = parseInt(editCrimeGradeSelect.value);
        const crimeName = editCrimeName.value.trim();
        const policeCount = editPoliceCount.value.trim();
        const crimeNote = editCrimeNote.value.trim();
        
        if (crimeName === '' || policeCount === '') {
            alert('犯罪名と必要警察数を入力してください。');
            return;
        }
        
        // Create updated crime object
        const updatedCrime = {
            name: crimeName,
            police: parseInt(policeCount)
        };
        
        // Add note if provided
        if (crimeNote) {
            updatedCrime.note = crimeNote;
        }
        
        const { gradeIndex, crimeIndex } = currentEditCrimeData;
        
        // If moving to a different grade
        if (newGradeIndex !== gradeIndex) {
            // Add to new grade
            missions[newGradeIndex].crimes.push(updatedCrime);
            // Remove from old grade
            missions[gradeIndex].crimes.splice(crimeIndex, 1);
            
            // If no crimes left in old grade, ask if want to remove it
            if (missions[gradeIndex].crimes.length === 0) {
                if (confirm(`このグレード「${missions[gradeIndex].grade}」には犯罪がなくなりました。グレードも削除しますか？`)) {
                    missions.splice(gradeIndex, 1);
                }
            }
        } else {
            // Just update in place
            missions[gradeIndex].crimes[crimeIndex] = updatedCrime;
        }
        
        // Close modal
        editCrimeModal.style.display = 'none';
        currentEditCrimeData = null;
        
        // Update UI
        renderMissionTable();
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === editGradeModal) {
            editGradeModal.style.display = 'none';
            currentEditGradeIndex = null;
        }
        if (e.target === editCrimeModal) {
            editCrimeModal.style.display = 'none';
            currentEditCrimeData = null;
        }
    });
}

// Handle login
function handleLogin(silent = false) {
    // If silent login, skip the username/password check
    if (!silent) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple authentication (dummy)
        if (username !== 'aim' || password !== '123123123') {
            alert('ログイン情報が正しくありません。');
            return;
        }
        
        loginModal.style.display = 'none';
        
        // Reset form
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    
    isLoggedIn = true;
    
    // Update UI for admin mode
    actionsHeader.style.display = 'table-cell';
    
    // Show appropriate admin controls based on active tab
    if (activeTabId === 'mission-list') {
        adminActions.style.display = 'none';
        addRuleContainer.style.display = 'none';
        missionAdminControls.style.display = 'block';
        missionActionsHeader.style.display = 'table-cell';
        renderMissionTable(); // Re-render to show admin controls
    } else {
        adminActions.style.display = 'block';
        addRuleContainer.style.display = 'block';
        
        // Set the next rule ID based on active tab
        const nextId = generateNextRuleId();
        newRuleId.value = nextId;
        newRuleId.placeholder = `例: ${nextId}`;
    }
    
    navManagement.style.display = 'block';
    document.querySelectorAll('.action-buttons').forEach(el => {
        el.style.display = 'flex';
    });
    
    // Update user icon
    userIcon.innerHTML = '<i class="fas fa-user"></i> ログアウト';
    userIcon.classList.add('logged-in');
    
    // Render navigation management
    renderNavManagement();
}

// Handle logout
function handleLogout() {
    isLoggedIn = false;
    
    // Update UI for normal mode
    actionsHeader.style.display = 'none';
    adminActions.style.display = 'none';
    addRuleContainer.style.display = 'none';
    navManagement.style.display = 'none';
    missionActionsHeader.style.display = 'none';
    missionAdminControls.style.display = 'none';
    
    document.querySelectorAll('.action-buttons').forEach(el => {
        el.style.display = 'none';
    });
    
    // Reset user icon
    userIcon.innerHTML = '<i class="fas fa-user"></i>';
    userIcon.classList.remove('logged-in');
    
    // Re-render tables to remove admin controls
    if (activeTabId === 'mission-list') {
        renderMissionTable();
    }
    
    // Reset the application to initial state
    loadDataFromInitialConstants().then(() => {
        renderNavItems();
        
        if (activeTabId === 'mission-list') {
            renderMissionTable();
        } else {
            renderRulesTable();
        }
    });
}

// Setup all event listeners
function setupEventListeners() {
    // User icon click - show login modal
    userIcon.addEventListener('click', function() {
        if (isLoggedIn) {
            handleLogout();
        } else {
            loginModal.style.display = 'flex';
        }
    });
    
    // Login form submit
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
    
    // Cancel login button
    cancelLoginBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });
    
    // Add rule button
    addRuleBtn.addEventListener('click', function() {
        addNewRule();
    });
    
    // Cancel edit button
    cancelEditBtn.addEventListener('click', function() {
        editModal.style.display = 'none';
        currentEditId = null;
    });
    
    // Save edit button
    saveEditBtn.addEventListener('click', function() {
        saveEditedRule();
    });
    
    // Show HTML button
    showHtmlBtn.addEventListener('click', function() {
        generateHtmlOutput();
    });
    
    // Copy HTML button
    copyHtmlBtn.addEventListener('click', function() {
        copyHtmlToClipboard();
    });
    
    // Back to table button
    backToTableBtn.addEventListener('click', function() {
        htmlOutputContainer.style.display = 'none';
        
        if (activeTabId === 'mission-list') {
            missionTableContainer.style.display = 'block';
        } else {
            rulesTableContainer.style.display = 'block';
        }
    });
    
    // Add navigation button
    addNavBtn.addEventListener('click', function() {
        navItemName.value = '';
        navItemId.value = '';
        navItemPrefix.value = '';
        navModal.style.display = 'flex';
    });
    
    // Cancel add navigation button
    cancelNavBtn.addEventListener('click', function() {
        navModal.style.display = 'none';
    });
    
    // Save navigation button
    saveNavBtn.addEventListener('click', function() {
        addNewNavItem();
    });
    
    // Cancel edit navigation button
    cancelEditNavBtn.addEventListener('click', function() {
        editNavModal.style.display = 'none';
        currentEditNavId = null;
    });
    
    // Save edit navigation button
    saveEditNavBtn.addEventListener('click', function() {
        saveEditedNavItem();
    });
    
    // When tab changes, save it to local storage
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-item')) {
            activeTabId = e.target.getAttribute('data-tab');
            // Tab change is handled in the click event of each button
        }
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === editModal) {
            editModal.style.display = 'none';
        }
        if (e.target === navModal) {
            navModal.style.display = 'none';
        }
        if (e.target === editNavModal) {
            editNavModal.style.display = 'none';
        }
    });
}

// Generate rules or missions output in JavaScript format
function generateHtmlOutput() {
    let jsOutput = '';
    
    if (activeTabId === 'mission-list') {
        // Generate JavaScript representation of missions
        jsOutput = 'const initialMissions = [\n';
        
        missions.forEach((gradeGroup, gradeIndex) => {
            jsOutput += `    { \n`;
            jsOutput += `        grade: "${escapeJsString(gradeGroup.grade)}",\n`;
            jsOutput += `        fine: "${escapeJsString(gradeGroup.fine)}",\n`;
            jsOutput += `        crimes: [\n`;
            
            gradeGroup.crimes.forEach((crime, crimeIndex) => {
                jsOutput += `            { name: "${escapeJsString(crime.name)}", police: ${crime.police}`;
                
                if (crime.note) {
                    jsOutput += `, note: "${escapeJsString(crime.note)}"`;
                }
                
                jsOutput += ` }`;
                
                // Add comma if not the last item
                if (crimeIndex < gradeGroup.crimes.length - 1) {
                    jsOutput += ',';
                }
                
                jsOutput += '\n';
            });
            
            jsOutput += `        ]\n`;
            jsOutput += `    }`;
            
            // Add comma if not the last item
            if (gradeIndex < missions.length - 1) {
                jsOutput += ',';
            }
            
            jsOutput += '\n';
        });
        
        jsOutput += '];';
    } else {
        // Generate JavaScript representation of all rules
        jsOutput = 'const initialRules = {\n';
        
        // Loop through all navigation items to get all rule sets
        navItems.forEach(navItem => {
            const navId = navItem.id;
            const navRules = rules[navId] || [];
            
            // Skip mission-list as it's handled differently
            if (navId === 'mission-list') return;
            
            jsOutput += `    "${navId}": [\n`;
            
            if (navRules.length === 0) {
                jsOutput += '        // No rules defined for this section\n';
            } else {
                navRules.forEach((rule, index) => {
                    // Format the rule description with proper escaping
                    jsOutput += `        { id: "${rule.id}", description: "${escapeJsString(rule.description)}" }`;
                    
                    // Add comma if not the last item
                    if (index < navRules.length - 1) {
                        jsOutput += ',';
                    }
                    
                    jsOutput += '\n';
                });
            }
            
            jsOutput += '    ]';
            
            // Add comma if this is not the last navigation item
            const lastNonMissionNavIndex = navItems.filter(item => item.id !== 'mission-list').length - 1;
            const currentNonMissionNavIndex = navItems.filter(item => item.id !== 'mission-list' && item.id <= navId).length - 1;
            
            if (currentNonMissionNavIndex < lastNonMissionNavIndex) {
                jsOutput += ',';
            }
            
            jsOutput += '\n';
        });
        
        jsOutput += '};';
    }
    
    // Display the JavaScript output
    htmlOutput.value = jsOutput;
    rulesTableContainer.style.display = 'none';
    missionTableContainer.style.display = 'none';
    htmlOutputContainer.style.display = 'block';
}

// Helper function to escape strings for JavaScript
function escapeJsString(str) {
    if (!str) return '';
    return str
        .replace(/\\/g, '\\\\')  // Escape backslashes
        .replace(/"/g, '\\"')    // Escape quotes
        .replace(/\n/g, '\\n');  // Handle newlines
}

// Copy HTML to clipboard
function copyHtmlToClipboard() {
    htmlOutput.select();
    document.execCommand('copy');
    alert('HTMLがクリップボードにコピーされました！');
}

// リセットボタンの機能も修正
function addResetButton() {
    const resetButton = document.createElement('button');
    resetButton.className = 'btn btn-blue';
    resetButton.innerHTML = '<i class="fas fa-redo"></i> 元に戻す';
    resetButton.style.position = 'fixed';
    resetButton.style.bottom = '20px';
    resetButton.style.right = '20px';
    resetButton.style.zIndex = '999';
    
    resetButton.addEventListener('click', function() {
        if (confirm('全ての変更をリセットしますか？')) {
            loadDataFromInitialConstants().then(() => {
                renderNavItems();
                
                if (activeTabId === 'mission-list') {
                    renderMissionTable();
                } else {
                    renderRulesTable();
                }
                
                // Reset login state
                if (isLoggedIn) {
                    handleLogout();
                }
            });
        }
    });
    
    document.body.appendChild(resetButton);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    addResetButton(); // Add a reset button for demo purposes
});
