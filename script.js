// Initial rules data - organized by navigation ID
const initialRules = {
    "server-rules": [
        { id: "SR-001", description: "<b>【配信者ルール】</b>\n当サーバーで遊ぶには他投稿者の生放送や動画、切り抜きにおいて、他視点からの映り込みで映像に登場することに了承しなければいけません。\n\n配信中・外問わず""Twitch利用規約""に則した行いをする必要があります。\nLGBT、宗教、政治、人種、病気等への配慮が必要です。\n\n全てのサーバールールは、全員が一定の楽しさの水準で遊ぶために存在します。\nルールに書いてないことならなんでもやっていいわけではありません。" },
        { id: "SR-002", description: "<b>【ロールプレイ】</b>\n\n全てのプレイヤーはサーバー上で1人の『キャラクター』としてリアルな生活を行う必要があります。\nロールプレイとは、「ゲーム内で起きた事象に関して現実の自分が感じたかの様に振る舞うこと」です。" },
        { id: "SR-003", description: "<b>【 キャラメイク 】	</b>\n\nキャラクターには、ロスサントスに来るまでのストーリー・目的が必要です。\n人間として街にいてもおかしくない名前や年齢、出身地を設定する事を推奨します。\n\nキャラクターの名前は既存の活動者の名前を使用することは禁止されています。\n自分が活動者の場合は、そのままでは無い方が良いです。\nキャラが行った行動と活動者の心理について、別々に話すことができるからです。\n全く別の名前にしたり、自分の活動者名を少し変えたりするプレイヤーが多いです。" },
        { id: "SR-004", description: "<b>【初心者マーク】</b>\n\nサーバーに参加した最初の頃は『初心者マーク』が名前の上に表示されます。\n\n初心者マークは自分がゲームに慣れるまで付けることができます。\n最低3回目のログインまでは初心者マークを外さないようにしてください。\n\n5日目のログインまで、警察、救急隊になることはできません。\n警察と救急隊はゲームの中でも核になる職業の為、初心者にはオススメできません。\n7日目のログインまでは強盗や犯罪ミッションをしてはいけません。\n初日から強盗をすると、GTAオンラインのようなプレイスタイルになってしまう方が多い為、禁止しています。\n※一日の始まりの定義は0時とする\n※こちらは2キャラ目以降には適用されません。" },
        { id: "SR-005", description: "<b>【1アカウントでの複数キャラクター 】</b>\n\n1プレイヤーが作成できるキャラクターは原則1体までですが、明確な2キャラ目のロールプレイ内容があれば許可をします。許可なしで作成した場合はBAN対象となります。\n\n同じプレイヤーの他キャラクター同士でアイテムや金銭の受け渡しは禁止\n\n世界瞑想までキャラクターを切り替えてはならない\n\nキャラクターごとの記憶を引きついではならない" },
        { id: "SR-006", description: "<b>【 ランダムデスマッチ・ビークルランダムデスマッチの禁止 】</b>\n\nロールプレイ無く唐突に誰かを轢き殺したり、銃や近接武器で相手を殺害してはいけません。" },
        { id: "SR-007", description: "<b>【 意図的なログアウトやリスポーンの禁止 】</b>\n\n逮捕や死亡/ダウンを防ぐ為に意図的なログアウトやリスポーンを行ってはいけません。\nバグによるトラブルやダウンが発生した場合はこの限りに含まれません。" },
        { id: "SR-008", description: "<b>【 バグ（グリッチ）やチートの悪用の禁止 】</b>\n\nサーバーの設定ミスやシステムのバグを利用して金銭を稼いだり、有利を勝ち取る行為は固く禁止されています。\nもちろんチート・ハックも禁止。\n\n例\n※壁越しにトランクを開いてアイテムを使う\n※床をすり抜けるバグを使って警察から逃げる\n※インベントリにてアイテムでスロットを埋めて必要なもの以外を取得しないようにする\n※運営が意図しない速度をバグなどを利用して故意に出す行為\n※グリッチローリングや瞬間移動する打ち方を禁止\n上記の例以外にも運営でバグの悪用や意図していない挙動の悪用と判断した場合はBANなどの対応をします。" },
        { id: "SR-009", description: "<b>【 パワーゲーミングの禁止 】</b>\n\nRP中に現実を無視しゲーム的に動く事をパワーゲーミングといいます。\nパワーゲーミングはRP中に気づかずに行ってしまう可能性が有るため十分に注意する必要があります。\n\n例\n・ダウン中にラジオを使う\n・手錠をつけられているのにもかかわらず、ラジオや通話を使用する\n・人質がいるのにもかかわらず、人質ごと銃撃を加える\n・一度ダウンし傷ついた体で同じ戦線に復帰する\n・ゲームの仕様を利用して、心なきを倒さずに大型ミッションを成功させる(サーマルミッションを含む)\n・本来の使用用途ではないアイテム（スケボー等）を使って落下ダメージを回避する\n・エモートをロールプレイ以外の『有利な状況』につながる為に使用する\n・その他モーションがキャンセルされるエモートなどを利用してダウン中に移動する行為\n・キーバインドを変更しモーションがキャンセルされるバグを使ってパンチを連続で出す行為\n・テーザーが当たりしびれたのにもかかわらず、スライディングなどでモーションキャンセルする行為やしびれが解除された後に全力で走って逃走する行為\n・システムを悪用して、本来の状況から脱出しようとする行為\n・『カバン（bag)』に違法なアイテムを詰めて、隠すのに使う行為\n・トランクの中にミッションで手に入れたアイテムをいれて、利確をして、それを後で転送をする行為の禁止\n・ジョブについていないと使えないアイテムを出勤状態以外での使用禁止\n\n上記の例以外にも、『現実的にそれおかしすぎない？』という行動はパワーゲーミングに該当します。" },
        { id: "SR-010", description: "<b>【 恐怖が欠如したプレイングの禁止 】	</b>\n\nお互いに命を持った人間としてゲーム内で責任と恐怖を感じる必要があります。\n現実で自分がされたら怖がるであろうシーンでは、それを反映する必要があります。" },
        { id: "SR-011", description: "<b>【 十分に親しい間柄以外での、本人、肉親、知人になりすます行為の禁止 】</b>	\n\nやるのであればラインをしっかり見極め、相手が不快にならないように行なってください" },
        { id: "SR-012", description: "<b>【 メタ行為、ゴースティング行為の禁止 】</b>\n\nキャラクターが知ることができる要素だけを使用してストーリーを作る必要があります。\n現実のSNS等で知ってしまった情報をキャラクターに持ち込んではいけません。\n他のキャラクターで知った情報を別のキャラクターでも知ったこととして使用してはいけません。\nサーバー内の他住民とゲーム外の通話ツールを繋げながら（LineやSkype、Discord等）連携を行ってはいけません。\nAFKキックから逃れるためにエモートを活用してはいけません。\n\nゲーム内でサーバールールについて喧嘩をしたり、メタ的な言い争いをしてはいけません\n例：「今のお前はサーバールール違反だ。」「ランダムデスマッチになるからやめよう」「BANされるぞ」等\n例（リアルのX等で）：Aさん『○○にいるけどここ奇麗だなぁ』 →Bさん『おっAさんINしてるの 今からいくわー』 → Bさん『ついたよー』などのやり取り\n\n一部の配信サイトでは、コメント等を投稿していなくても配信サイトに居るか居ないかわかるサイトもございます。\n無音にしたまま消し忘れ・開いたままにしていると実際に配信を見ていなくても見ているように見えてしまします。\nストグラをプレイ中、他者の配信視聴履歴がありますと罰則（BAN）の対象になる可能性がございますので十分にご注意ください。\n\n\n禁止例\nコメントなどの外部サイトからの情報を含め人間関係に影響を与えるプレイを行う\n請求書やインベントリ受け渡し欄を利用して身分を隠そうとした相手の名前を知ろうとする行為\n他のボイスチャットツールを連携の為に使用する行為\n配信外で他キャラクターの配信を観ながら、自キャラクターでプレイを行なう行為" },
        { id: "SR-013", description: "<b>【 ダウン状態について 】</b>\n\nHPが0になったら体が横になります。これをダウン状態と呼びます。\nこの状態では苦しみながら会話を行う必要があります。\n\nダウン状態で蘇生された場合。\n→ 全ての記憶を保ったままプレイを続行する事ができます。\n\nリスポーンを選択した場合。\n→ 死亡する原因となった記憶を全てなくしてプレイを行わなければなりません。\n友達、乗り物、家、隠し場所などは覚えていますが恨みや妬みという感情は無いので復讐を行なう事はできません。\n\nダウン中にラジオチャットで"言葉"を発する事を禁止。通知を出すことは可。\nダウン中に痛がる演技・助けてほしいというRPとして成り立つ以外のボイスチャットを事を禁止。\nスーパーシャウトで過剰に痛がり、大声を上げて他プレイヤーのRPを妨げる行為を禁止\n但し、状況的に日常会話などをしても問題ないとする場合は例外とする。\nダウン中のダメ例\n・2階に2人いる！ナイスナイス！アサルト持ってる！7239にいる！など\n大丈夫な例\n・苦しみながら「来ちゃダメ」「逃げろ」等\n・連行されながら「くそー」等" },
        { id: "SR-014", description: "<b>【 蘇生後 】	</b>\n\nあなたは怪我の直後だと言うことを念頭に置いてプレイを行わなければありません。\n松葉杖が付いているときは、運転してはいけない。助手席に乗るのは可能" },
        { id: "SR-015", description: "<b>【 リスポーンと罪 】	</b>\n\n他のプレイヤーに担がれている、拘束されている間はリスポーンを選択してはいけません。\nリスポーンを選択した場合でもあなたが直前に行っていた犯罪の罪状は残ります。" },
        { id: "SR-016", description: "<b>【 警察 】</b>\n\n別タブの 警察用ルール を参照すること。" },
        { id: "SR-017", description: "<b>【 音声によるプレイヤーの識別 】</b>	\n\nプレイヤーは顔や服、タトゥー、髪型、動作等を通してそのキャラクターが誰なのかを識別できます。\nしかし、ボイスチェンジャーの有無にかかわらず声で相手が誰なのかを特定することはできません。" },
        { id: "SR-018", description: "<b>【 救急隊 】	</b>\n\n職員は汚職を行ってはいけません。\n\n救急隊は副委員長以上の上官が判断すれば、事件現場がまだ落ち着いてない状態でも病院まで運んで救助しても良い。\n但し、発砲や過剰な攻撃などは行ってはいけない。\n\n救急隊は手錠を使用してはいけません。\n\n私的な理由で救急車/救急ヘリを使用してはいけません。" },
        { id: "SR-019", description: "<b>【 犯罪 】	</b>\n\n犯罪者は一度拘束された後は、警察側に明らかな落ち度がない限り素直に捕まらなければなりません。\n発砲及び殺害は最終手段である必要があります。\n\n<b>【人質について】</b>\n人質は、自分が『脅されておらず、危険ではない』と感じている場合は逃げて良い\n※例えば一人で強盗を人質ありで始めた犯人が、人質を放置してお金を回収し始めたら逃げてもいいです\nプレイヤーを人質に取る際、拘束が嫌な場合は『夢の世界で予定がある』等と言い断ることができます。" },
        { id: "SR-020", description: "<b>【 強盗 】</b>\n\n犯罪者用ルールを参照すること" },
        { id: "SR-021", description: "<b>【 著作権に触れる映像や音声を再生する行為の禁止 】</b>	\n\nケータイ・ラジカセ・テレビ。\nあらゆる媒体で著作権に触れる可能性がある音声や映像を再生する行為を禁止します。" },
        { id: "SR-022", description: "<b>【 恋愛RP / 男女の交流について 】	</b>\n\n異性/同性にかからわず性的な話題に対して配慮を行う必要があります。\n相手が性的に嫌がる行為を行った場合、明確なルール違反とします。" },
        { id: "SR-023", description: "<b>【 職業の限定について 】	</b>\n\nギャングに属している者は、メカニック、カーディーラー、救急隊、闇医者、警察、弁護士、裁判官、不動産屋になってはいけません。" },
        { id: "SR-024", description: "<b>【 エモートの悪用の禁止 】	</b>\n\n戦闘を有利に進めるためにエモートを使用することを禁止します。\n例：物陰に隠れるために /e sleep を使う" },
        { id: "SR-025", description: "【 仕事中（ on Duty ) 状態での強盗の禁止 】	\n\n勤務中状態で犯罪を行うことを禁止します。\n特にメカニックは勤務中だと自身の車を簡単に直せてしまいます。そのためメカニック関係のツールを所持した状態で犯罪を行う事を禁止します。" },
        { id: "SR-026", description: "<b>【 初心者マークの悪用の禁止 】</b>\n\n初心者マークをつけている間はあらゆる罰金30万円以上の犯罪をしてはいけません。" },
        { id: "SR-027", description: "<b>【 「多くの人に視聴される状況で炎上しうる行為」の禁止 】</b>	\n\n貴方が配信をしていて100人に見られていると仮定した場合、倫理的に言うべきではない言動や行動をしてはいけません。" },
        { id: "SR-029", description: "<b>【 職について 】	</b>\n\nすべてのキャラクターは、メインの職業の他にサブ職業1つに就くことができます。\n白市民パスを持っているプレイヤーに限り、3つまで職業に就くことができる。\n\nギャングに所属することは１つの職業枠に含まれる。\n\nディーラーのスタッフになることは１つの職業枠に含まれる。\n\n白市民パスを持っているプレイヤー（持つ予定のプレイヤー）以外はコンビニを運営してはいけません。\nコンビニの運営は、職業枠には含まれない。" }
    ],
    "police-rules": [
        { id: "PR-001", description: "警察官は法律を遵守し、常に公平に行動する必要があります。" },
        { id: "PR-002", description: "パトロール中は定期的に無線チェックインを行ってください。" }
    ],
    "criminal-rules": [
        { id: "CR-001", description: "犯罪行為を行う前に、適切なロールプレイをしてください。" },
        { id: "CR-002", description: "他のプレイヤーを長時間拘束することは禁止されています。" }
    ],
    "related-rules": [
        { id: "RR-001", description: "関係者は全ての取引を記録する必要があります。" }
    ]
};

// Initial missions data
const initialMissions = [
    { 
        grade: "軽強盗罪",
        fine: "罰金500,000円",
        crimes: [
            { name: "ハッキング行為", police: 1 },
            { name: "空き巣", police: 3 }
        ]
    },
    { 
        grade: "強盗罪",
        fine: "罰金1,000,000円",
        crimes: [
            { name: "マネーロンダリング", police: 0 },
            { name: "ブースティングB以下", police: 1 },
            { name: "ATM強盗", police: 2, note: "(テスト期間中)" },
            { name: "コンビニ強盗", police: 3, note: "(テスト期間中)" },
            { name: "高級車強奪ミッション", police: 4 }
        ]
    },
    { 
        grade: "準重強盗罪",
        fine: "罰金2,000,000円",
        crimes: [
            { name: "Fleeca銀行強盗", police: 4 },
            { name: "航空機ハッキング強盗 (人質利用禁止)", police: 4 },
            { name: "宝石店強盗", police: 4 },
            { name: "サーマルミッション (人質利用禁止)", police: 4, note: "(テスト期間中)" },
            { name: "パレト銀行強盗(テスト期間中)", police: 4 }
        ]
    },
    { 
        grade: "重強盗罪",
        fine: "罰金3,000,000円\n(人質利用禁止)",
        crimes: [
            { name: "ブースティングA以上", police: 4 },
            { name: "金庫強盗", police: 5 },
            { name: "BOBCAT強盗", police: 5 },
            { name: "オイルリグ強盗", police: 6, note: "(テスト期間中)" },
            { name: "飛行場襲撃強盗", police: 7 },
            { name: "豪華客船強盗", police: 8, note: "(テスト期間中)" },
            { name: "工場襲撃 (プレリリース)", police: 8 },
            { name: "アーティファクト", police: 9 },
            { name: "ユニオンヘイスト", police: 10 },
            { name: "パシフィック銀行強盗", police: 11 },
            { name: "ダイヤモンドカジノ強盗", police: 11 },
            { name: "パレト銀行強盗", police: 4 }
        ]
    }
];

// Initial navigation items
const initialNavItems = [
    { id: "server-rules", name: "サーバールール", prefix: "SR" },
    { id: "police-rules", name: "警察用ルール", prefix: "PR" },
    { id: "criminal-rules", name: "犯罪者用ルール", prefix: "CR" },
    { id: "related-rules", name: "関係者用ルール", prefix: "RR" },
    { id: "mission-list", name: "ミッションリスト", prefix: "ML" }
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
let missions = initialMissions;
let navItems = [];
let isLoggedIn = false;
let currentEditId = null;
let currentEditNavId = null;
let activeTabId = "server-rules"; // Default active tab
let currentEditGradeIndex = null;
let currentEditCrimeData = null;

// Local storage keys
const STORAGE_KEY = 'paradoxCity';
const RULES_KEY = `${STORAGE_KEY}_rules`;
const MISSIONS_KEY = `${STORAGE_KEY}_missions`;
const NAV_ITEMS_KEY = `${STORAGE_KEY}_navItems`;
const ACTIVE_TAB_KEY = `${STORAGE_KEY}_activeTabId`;
const LOGIN_KEY = `${STORAGE_KEY}_isLoggedIn`;

// Show and hide loading overlay functions
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// Load data from local storage
async function loadDataFromLocalStorage() {
    showLoading();
    
    try {
        // Load rules
        const storedRules = localStorage.getItem(RULES_KEY);
        if (storedRules) {
            rules = JSON.parse(storedRules);
        } else {
            // 初期化時のみinitialRulesからルールをロード
            rules = JSON.parse(JSON.stringify(initialRules));
        }
        
        // Load missions
        const storedMissions = localStorage.getItem(MISSIONS_KEY);
        if (storedMissions) {
            missions = JSON.parse(storedMissions);
        } else {
            // 初期化時のみinitialMissionsからミッションをロード
            missions = JSON.parse(JSON.stringify(initialMissions));
        }
        
        // Load navigation items
        const storedNavItems = localStorage.getItem(NAV_ITEMS_KEY);
        if (storedNavItems) {
            navItems = JSON.parse(storedNavItems);
        } else {
            // 初期化時のみinitialNavItemsからナビゲーションアイテムをロード
            navItems = JSON.parse(JSON.stringify(initialNavItems));
        }
        
        // Load active tab
        const storedActiveTabId = localStorage.getItem(ACTIVE_TAB_KEY);
        if (storedActiveTabId && navItems.some(item => item.id === storedActiveTabId)) {
            activeTabId = storedActiveTabId;
        } else if (navItems.length > 0) {
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
        
        // Load login state
        const storedLoginState = localStorage.getItem(LOGIN_KEY);
        if (storedLoginState === 'true') {
            handleLogin(true); // Silent login
        }
    } catch (error) {
        console.error("Error loading data from local storage:", error);
        // Fallback to initial data
        rules = JSON.parse(JSON.stringify(initialRules));
        missions = JSON.parse(JSON.stringify(initialMissions));
        navItems = JSON.parse(JSON.stringify(initialNavItems));
        
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
        
        alert("データの読み込み中にエラーが発生しました。初期データを使用します。");
    } finally {
        hideLoading();
    }
}

// Save data to local storage
async function saveDataToLocalStorage() {
    showLoading();
    
    try {
        localStorage.setItem(RULES_KEY, JSON.stringify(rules));
        localStorage.setItem(MISSIONS_KEY, JSON.stringify(missions));
        localStorage.setItem(NAV_ITEMS_KEY, JSON.stringify(navItems));
        localStorage.setItem(ACTIVE_TAB_KEY, activeTabId);
        localStorage.setItem(LOGIN_KEY, isLoggedIn);
    } catch (error) {
        console.error("Error saving data to local storage:", error);
        alert("データの保存中にエラーが発生しました。");
    } finally {
        hideLoading();
    }
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
    // Load data from local storage
    await loadDataFromLocalStorage();
    
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
            
            // Save active tab to local storage
            saveDataToLocalStorage();
            
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
    
    // Save to local storage
    saveDataToLocalStorage();
    
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
        
        // Save to local storage
        saveDataToLocalStorage();
        
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
    
    // Save to local storage
    saveDataToLocalStorage();
    
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
    
    // Save to local storage
    saveDataToLocalStorage();
    
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
    
    // Save to local storage
    saveDataToLocalStorage();
    
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
        
        // Save to local storage
        saveDataToLocalStorage();
        
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
                
                // Save to local storage
                saveDataToLocalStorage();
                
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
                
                // Save to local storage
                saveDataToLocalStorage();
                
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
        
        // Save to local storage
        saveDataToLocalStorage();
        
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
        
        // Save to local storage
        saveDataToLocalStorage();
        
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
        
        // Save to local storage
        saveDataToLocalStorage();
        
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
        
        // Save to local storage
        saveDataToLocalStorage();
        
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
        if (username !== 'admin' || password !== 'admin123') {
            alert('ログイン情報が正しくありません。試用アカウント: admin/admin123');
            return;
        }
        
        loginModal.style.display = 'none';
        
        // Reset form
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    
    isLoggedIn = true;
    
    // Save login state to local storage
    saveDataToLocalStorage();
    
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
    
    // Save logout state to local storage
    saveDataToLocalStorage();
    
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
}

// Setup all event listeners
function setupEventListeners() {
    // リセットボタンを追加
    const adminActions = document.getElementById('adminActions');
    if (adminActions) {
        const resetButton = document.createElement('button');
        resetButton.id = 'resetDataBtn';
        resetButton.className = 'btn btn-red';
        resetButton.innerHTML = '<i class="fas fa-sync-alt"></i> リセット';
        resetButton.style.marginLeft = '8px';
        adminActions.appendChild(resetButton);
        
        // イベントリスナーを追加
        resetButton.addEventListener('click', resetToInitialData);
    }
    
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

// データをリセットする関数
function resetToInitialData() {
    if (confirm('現在のデータを初期データにリセットしますか？この操作は元に戻せません。')) {
        // 現在のタブのデータのみをリセット
        if (activeTabId === 'mission-list') {
            // ミッションデータをリセット
            missions = JSON.parse(JSON.stringify(initialMissions));
            localStorage.setItem(MISSIONS_KEY, JSON.stringify(missions));
            renderMissionTable();
        } else {
            // 現在のタブのルールだけをリセット
            rules[activeTabId] = JSON.parse(JSON.stringify(initialRules[activeTabId] || []));
            localStorage.setItem(RULES_KEY, JSON.stringify(rules));
            renderRulesTable();
        }
        
        alert('データを初期状態にリセットしました。');
    }
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

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
