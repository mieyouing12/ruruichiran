// Firebase Configuration - 既存の設定をそのまま使用
const firebaseConfig = {
    apiKey: "AIzaSyDCxMq0KwaFRhF2XqGON_0NcZ0OSBMdBfA",
    authDomain: "paradox-city-rules.firebaseapp.com",
    databaseURL: "https://paradox-city-rules-default-rtdb.firebaseio.com",
    projectId: "paradox-city-rules",
    storageBucket: "paradox-city-rules.appspot.com",
    messagingSenderId: "458284435175",
    appId: "1:458284435175:web:0a7b2e036a5e9f41f7d8ca"
};

// 変数の定義は維持し、初期化を関数に移動
let database;
let rootRef;
const loadingOverlay = document.getElementById('loadingOverlay');

// Firebase初期化機能を分離
function initializeFirebase() {
    try {
        // Firebase SDKの初期化
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        
        // オフラインでも動作するようにデータの永続化を設定
        database.setPersistence(firebase.database.Persistence.LOCAL)
            .catch(error => {
                console.error("オフライン永続化設定エラー:", error);
                // 永続化の設定に失敗しても処理は継続
            });
        
        rootRef = database.ref('paradoxCity');
        return true;
    } catch (error) {
        console.error("Firebase初期化エラー:", error);
        alert("Firebaseの初期化に失敗しました。初期データを使用します。");
        hideLoading();
        return false;
    }
}

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

// Track local updates
let lastLocalUpdate = Date.now();

// Functions for Firebase data management
// ローディング関連の関数を改善
function showLoading() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }
}

function hideLoading() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

// 初期化処理を呼び出す部分を修正
document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
        
        // Firebase接続状態のモニタリングを開始
        monitorFirebaseConnection();
    } catch (error) {
        console.error("スタートアップエラー:", error);
        hideLoading();
        alert("アプリケーションの起動中にエラーが発生しました。ページを再読み込みしてください。");
    }
});

// Firebase接続状態のモニタリングを追加
function monitorFirebaseConnection() {
    if (!firebase || !firebase.database) return;
    
    const connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", (snap) => {
        if (snap.val() === true) {
            console.log("Firebase接続: オンライン");
        } else {
            console.log("Firebase接続: オフライン");
            // オフライン時の処理をここに追加可能
        }
    });
}

// Firebase からデータを読み込む関数
async function loadDataFromFirebase() {
    showLoading();
    
    // タイムアウト処理を追加（10秒後）
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("データ読み込みがタイムアウトしました")), 10000);
    });
    
    try {
        // タイムアウトとデータ取得を競争させる
        const snapshot = await Promise.race([
            rootRef.once('value'),
            timeoutPromise
        ]);
        
        const data = snapshot.val() || {};
        
        // 既存の処理を維持
        // Load rules or use initial data
        rules = data.rules || initialRules;
        
        // Load missions or use initial data
        missions = data.missions || initialMissions;
        
        // Load navigation items or use initial data
        navItems = data.navItems || initialNavItems;
        
        // Get active tab from data or default to first tab
        if (data.activeTabId && navItems.some(item => item.id === data.activeTabId)) {
            activeTabId = data.activeTabId;
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
        if (data.isLoggedIn === true) {
            handleLogin(true); // Silent login
        }
    } catch (error) {
        console.error("Firebaseからのデータ読み込みエラー:", error);
        
        // 既存のフォールバック処理を維持
        rules = initialRules;
        missions = initialMissions;
        navItems = initialNavItems;
        
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
        // ローディング画面を必ず非表示にする
        hideLoading();
    }
}

// Firebaseにデータを保存する関数
async function saveDataToFirebase() {
    showLoading();
    
    // タイムアウト処理を追加（8秒後）
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("データ保存がタイムアウトしました")), 8000);
    });
    
    try {
        // タイムアウトとデータ保存を競争させる
        await Promise.race([
            rootRef.set({
                rules: rules,
                missions: missions,
                navItems: navItems,
                activeTabId: activeTabId,
                isLoggedIn: isLoggedIn,
                lastUpdated: firebase.database.ServerValue.TIMESTAMP
            }),
            timeoutPromise
        ]);
    } catch (error) {
        console.error("Firebaseへのデータ保存エラー:", error);
        alert("データの保存中にエラーが発生しました。後でもう一度お試しください。");
    } finally {
        // ローディング画面を必ず非表示にする
        hideLoading();
    }
}

// リアルタイム更新のリスナーをセットアップする関数
function setupRealtimeListeners() {
    // 既存のリスナーを一旦解除（重複防止）
    rootRef.off('value');
    
    // エラーハンドリングを追加したリスナー設定
    rootRef.on('value', 
        (snapshot) => {
            try {
                const data = snapshot.val() || {};
                
                // 既存の処理を維持
                // Only update if the data is newer than our current data
                if (data.lastUpdated && data.lastUpdated > lastLocalUpdate) {
                    // Update local data
                    rules = data.rules || initialRules;
                    missions = data.missions || initialMissions;
                    navItems = data.navItems || initialNavItems;
                    
                    // Check if we need to switch active tab
                    if (data.activeTabId && activeTabId !== data.activeTabId) {
                        activeTabId = data.activeTabId;
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
                    
                    // Update UI
                    renderNavItems();
                    if (activeTabId === 'mission-list') {
                        renderMissionTable();
                    } else {
                        renderRulesTable();
                    }
                    
                    lastLocalUpdate = data.lastUpdated;
                }
            } catch (error) {
                console.error("リアルタイムデータ処理エラー:", error);
                // エラーがあっても処理は継続、UIは更新しない
            }
        }, 
        (error) => {
            // リスナー設定エラー時の処理
            console.error("Firebaseリスナーエラー:", error);
            alert("データの監視中にエラーが発生しました。一部の機能が制限される可能性があります。");
            // エラーがあっても処理は継続
        }
    );
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

// アプリケーションを初期化する関数
async function init() {
    showLoading();
    
    try {
        // Firebase初期化
        if (!initializeFirebase()) {
            // Firebase初期化に失敗した場合、初期データで続行
            console.log("初期データを使用して起動します");
            rules = initialRules;
            missions = initialMissions;
            navItems = initialNavItems;
            
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
            
            // 初期化を続行
            renderNavItems();
            if (activeTabId === 'mission-list') {
                rulesTableContainer.style.display = 'none';
                missionTableContainer.style.display = 'block';
                renderMissionTable();
            } else {
                rulesTableContainer.style.display = 'block';
                missionTableContainer.style.display = 'none';
                renderRulesTable();
            }
            
            setupEventListeners();
            setupMissionEditFormListeners();
            return;
        }
        
        // Firebaseからデータを読み込む
        await loadDataFromFirebase();
        
        // リアルタイムリスナーをセットアップ
        setupRealtimeListeners();
        
        // ナビゲーション項目を描画
        renderNavItems();
        
        // アクティブタブによってテーブル表示を切り替え
        if (activeTabId === 'mission-list') {
            rulesTableContainer.style.display = 'none';
            missionTableContainer.style.display = 'block';
            renderMissionTable();
        } else {
            rulesTableContainer.style.display = 'block';
            missionTableContainer.style.display = 'none';
            renderRulesTable();
        }
        
        // イベントリスナーをセットアップ
        setupEventListeners();
        setupMissionEditFormListeners();
        
    } catch (error) {
        console.error("アプリケーション初期化エラー:", error);
        alert("アプリケーションの初期化中にエラーが発生しました。ページを再読み込みしてください。");
        hideLoading();
    }
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
            
            // Save active tab to Firebase
            lastLocalUpdate = Date.now();
            saveDataToFirebase();
            
            // Toggle mission table vs rules table
            if (activeTabId === 'mission-list') {
                rulesTableContainer.style.display = 'none';
                missionTableContainer.style.display = 'block';
                renderMissionTable();
                if (isLoggedIn) {
                    adminActions.style.display = 'none';
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
    
    // Save to Firebase
    lastLocalUpdate = Date.now();
    saveDataToFirebase();
    
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
        
        // Save to Firebase
        lastLocalUpdate = Date.now();
        saveDataToFirebase();
        
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
    
    // Save to Firebase
    lastLocalUpdate = Date.now();
    saveDataToFirebase();
    
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
    
    // Save to Firebase
    lastLocalUpdate = Date.now();
    saveDataToFirebase();
    
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
    
    // Save to Firebase
    lastLocalUpdate = Date.now();
    saveDataToFirebase();
    
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
        
        // Save to Firebase
        lastLocalUpdate = Date.now();
        saveDataToFirebase();
        
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
                
                // Save to Firebase
                lastLocalUpdate = Date.now();
                saveDataToFirebase();
                
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
                
                // Save to Firebase
                lastLocalUpdate = Date.now();
                saveDataToFirebase();
                
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
        
        // Save to Firebase
        lastLocalUpdate = Date.now();
        saveDataToFirebase();
        
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
        
        // Save to Firebase
        lastLocalUpdate = Date.now();
        saveDataToFirebase();
        
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
        
        // Save to Firebase
        lastLocalUpdate = Date.now();
        saveDataToFirebase();
        
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
        
        // Save to Firebase
        lastLocalUpdate = Date.now();
        saveDataToFirebase();
        
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
    
    // Save login state to Firebase
    lastLocalUpdate = Date.now();
    saveDataToFirebase();
    
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
    
    // Save logout state to Firebase
    lastLocalUpdate = Date.now();
    saveDataToFirebase();
    
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
    
    // When tab changes, save it to Firebase
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

// Generate HTML output
function generateHtmlOutput() {
    let html = '';
    
    if (activeTabId === 'mission-list') {
        // Generate HTML for mission table
        html = `<div class="mission-container">
  <div class="mission-table-wrapper">
    <table class="mission-table">
      <thead>
        <tr>
          <th class="crime-grade">犯罪グレード</th>
          <th class="crime-name">犯罪名</th>
          <th class="police-count">必要警察</th>
        </tr>
      </thead>
      <tbody>`;

        missions.forEach(gradeGroup => {
            const rowCount = gradeGroup.crimes.length;
            
            gradeGroup.crimes.forEach((crime, index) => {
                html += '\n        <tr>';
                
                // Only add the grade cell on the first row of each group
                if (index === 0) {
                    html += `\n          <td rowspan="${rowCount}">${gradeGroup.grade}<br>${gradeGroup.fine}</td>`;
                }
                
                // Crime name and police count
                html += `\n          <td>${crime.name}</td>`;
                
                if (crime.note) {
                    html += `\n          <td>${crime.police} ${crime.note}</td>`;
                } else {
                    html += `\n          <td>${crime.police}</td>`;
                }
                
                html += '\n        </tr>';
            });
        });

        html += `\n      </tbody>
    </table>
  </div>
  <div class="mission-description">
    <h3>ブラックマネーについて</h3>
    <p>『ブラックマネー』はインベントリにアイテムとして入ります。<br>
    所持していたら警察に押収されます。</p>
    <p>街の何処かにいる、マネーロンダリングのおじさんと交渉することで、<br>
    ブラックマネーを現金に変更するミッションを受けることができます。</p>
    <p>最低100万以上でのマネーロンダリングをおこなうこと。</p>
  </div>
</div>`;
    } else {
        // Generate HTML for rules table
        const activeRules = getActiveTabRules();
        
        html = `<table class="min-w-full border-collapse">
  <thead>
    <tr class="bg-black text-white">
      <th class="border px-4 py-2">管理ID</th>
      <th class="border px-4 py-2">ルールの説明</th>
    </tr>
  </thead>
  <tbody>`;

        if (activeRules.length === 0) {
            html += `\n    <tr class="bg-white">
      <td class="border px-4 py-2 text-center" colspan="2">このタブにはまだルールがありません。</td>
    </tr>`;
        } else {
            activeRules.forEach((rule, index) => {
                // Replace newlines with <br> for HTML output
                const formattedDescription = rule.description.replace(/\n/g, '<br>');
                
                html += `\n    <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}">
      <td class="border px-4 py-2">${rule.id}</td>
      <td class="border px-4 py-2">${formattedDescription}</td>
    </tr>`;
            });
        }

        html += `\n  </tbody>
</table>`;
    }

    // Display the HTML output
    htmlOutput.value = html;
    rulesTableContainer.style.display = 'none';
    missionTableContainer.style.display = 'none';
    htmlOutputContainer.style.display = 'block';
}

// Copy HTML to clipboard
function copyHtmlToClipboard() {
    htmlOutput.select();
    document.execCommand('copy');
    alert('HTMLがクリップボードにコピーされました！');
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Special error handling for Firebase operations
window.addEventListener('error', function(e) {
  console.error('Firebase error:', e.message);
  hideLoading();
  alert('データの同期中にエラーが発生しました。ページを再読み込みしてください。');
});

// Automatically clean up Firebase listeners when the page is closed or refreshed
window.addEventListener('beforeunload', function() {
  // Detach all Firebase listeners
  rootRef.off();
});

// オフライン状態検出のイベントリスナー
window.addEventListener('offline', () => {
    console.log("ブラウザがオフラインになりました");
    alert("インターネット接続が切断されました。一部の機能が制限される可能性があります。");
});

window.addEventListener('online', () => {
    console.log("ブラウザがオンラインに戻りました");
    // オンラインに戻った時の処理（必要に応じて再接続など）
});
