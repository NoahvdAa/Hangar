import { LocaleMessageObject } from 'vue-i18n';
const msgs: LocaleMessageObject = {
  general: {
    close: "關閉",
    submit: "提交",
    save: "儲存",
    comment: "評論",
    change: "更改",
    donate: "贊助",
    continue: "繼續",
    create: "新建",
    delete: "刪除",
    or: "或",
    reset: "重置",
    edit: "編輯",
    required: "必填項",
    add: "新增",
    name: "名稱",
    link: "連結",
    send: "傳送",
    home: "首頁",
    message: "訊息",
    refresh: "重新載入",
    confirm: "確認",
    error: {
      invalidUrl: "無效的 URL 格式"
    }
  },
  hangar: {
    projectSearch: {
      query: "在 {0} 筆專案中搜索，自豪地由社區提供…",
      relevanceSort: "依照關聯性排序",
      noProjects: "這裡沒有任何專案。 😢",
      noProjectsFound: "已找到 0 筆專案。 😢"
    },
    subtitle: "一個 Minecraft 套件庫",
    sponsoredBy: "由以下組織支援："
  },
  pages: {
    staffTitle: "工作人員",
    authorsTitle: "作者",
    headers: {
      username: "使用者名稱",
      roles: "角色",
      joined: "已參與",
      projects: "專案"
    }
  },
  nav: {
    login: "登入",
    signup: "註冊",
    user: {
      notifications: "通知",
      flags: "檢舉",
      projectApprovals: "通過專案審核",
      versionApprovals: "通過版本審核",
      stats: "統計",
      health: "Hangar 健康",
      log: "使用者行為日誌",
      platformVersions: "平台版本",
      logout: "登出",
      error: {
        loginFailed: "身份驗證失敗",
        invalidUsername: 'Invalid Username',
        hangarAuth: "無法連接至 HangarAuth",
        loginDisabled: "暫時無法登入，請稍後再試",
        fakeUserEnabled: "虛擬使用者模式已啟用。因此 {0} 已關閉"
      }
    },
    createNew: "建立新的…",
    new: {
      project: "新的專案",
      organization: "新的組織"
    },
    hangar: {
      home: "首頁",
      forums: "論壇",
      code: "源碼",
      docs: "文件",
      javadocs: 'JavaDocs',
      hangar: "Hangar (插件)",
      downloads: "下載",
      community: "社群"
    }
  },
  project: {
    stargazers: "收藏者",
    noStargazers: "目前還沒有人收藏這個專案。😢",
    watchers: "訂閲者",
    noWatchers: "目前還沒有人訂閲這個專案。😢",
    members: "成員",
    category: {
      info: "類別：{0}",
      admin_tools: "管理員工具",
      chat: "聊天",
      dev_tools: "開發者工具",
      economy: "經濟",
      gameplay: "遊戲玩法",
      games: "小遊戲",
      protection: "保護",
      role_playing: "角色扮演",
      world_management: "世界管理",
      misc: "雜項"
    },
    actions: {
      unwatch: "取消訂閱",
      watch: "訂閱",
      flag: "檢舉",
      star: "收藏",
      unstar: "取消收藏",
      adminActions: "管理員操作",
      flagHistory: "檢舉歷史 ({0})",
      staffNotes: "工作人員註記 ({0})",
      userActionLogs: "使用者行為日誌",
      forum: "論壇"
    },
    flag: {
      flagProject: "確定要檢舉 {0}？",
      flagSend: "檢舉成功，感謝您讓社群變得更好！",
      flagSent: "檢舉已送出並等待複查中",
      flags: {
        inappropriateContent: "不相關內容",
        impersonation: "冒充與欺騙",
        spam: "垃圾訊息",
        malIntent: "惡意內容",
        other: "其他"
      },
      error: {
        alreadyOpen: "您已經在該專案擁有 1 筆未被處理的檢舉",
        alreadyResolved: "這筆檢舉已被處理"
      }
    },
    tabs: {
      docs: "文件",
      versions: "歷史版本",
      discuss: "討論",
      settings: "設定",
      homepage: "首頁",
      issues: "問題回報",
      source: "源碼",
      support: "尋求幫助"
    },
    new: {
      step1: {
        title: "使用者協定",
        text: "一個專案將包含可下載檔案與文件。<br>在開始前，請先閲讀 <a href=\"#\">Hangar 提交準則。</a>",
        continue: "同意",
        back: "退出"
      },
      step2: {
        title: "基礎設定",
        continue: "繼續",
        back: "返回",
        userSelect: "新增為…",
        projectName: "專案名稱",
        projectSummary: "專案簡介",
        projectCategory: "專案類別"
      },
      step3: {
        title: "其他設定",
        continue: "繼續",
        back: "返回",
        optional: "選填項",
        links: "連結",
        homepage: "首頁",
        issues: "問題追蹤器",
        source: "源碼",
        support: "額外支援",
        license: "許可證",
        type: "類別",
        customName: "名稱",
        url: 'URL',
        seo: 'SEO',
        keywords: "關鍵字"
      },
      step4: {
        title: "從 Spigot 匯入",
        continue: "繼續",
        back: "返回",
        optional: "選填項",
        convert: "轉換",
        saveAsHomePage: "儲存為首頁",
        convertLabels: {
          bbCode: "在此貼上您的 BBCode",
          output: "Markdown 輸出"
        },
        preview: "預覽",
        tutorial: "如何取得 BBCode",
        tutorialInstructions: {
          line1: "要取得您在Spigot上專案的 BBCode，您需要以下步驟：",
          line2: "1. 到您專案首頁並點選「編輯資源」。",
          line3: "2. 點選「描述編輯器」中的扳手圖案。",
          line4: "3. 複製並貼上新的內容到上方的轉換器文字方塊，依照您的喜好修改輸出結果，然後點選儲存！"
        }
      },
      step5: {
        title: "正在幫您處理最後的工作",
        text: "建立中…"
      },
      error: {
        create: "建立專案時遇到錯誤",
        nameExists: "相同的專案名稱已然存在",
        slugExists: "相同的專案簡稱已然存在",
        invalidName: "這個名稱包含無效字元",
        tooLongName: "專案名稱過長",
        tooLongDesc: "專案介紹過長",
        tooManyKeywords: "專案的關鍵字過多",
        noCategory: "專案必須屬於一個類別",
        noDescription: "專案必須有一段介紹"
      }
    },
    sendForApproval: "發送並等待審核",
    info: {
      title: "資訊",
      publishDate: "發布於 {0}",
      views: "0 瀏覽量 | {0} 瀏覽量 | {0} 瀏覽量",
      totalDownloads: "0 總下載數 | {0} 總下載數 | {0} 總下載數",
      stars: "0 收藏 | {0} 收藏 | {0} 收藏",
      watchers: "0 訂閱 | {0} 訂閱 | {0} 訂閱"
    },
    promotedVersions: "最新版本",
    license: {
      link: "發行於許可證 "
    },
    error: {
      star: "無法切換收藏狀態",
      watch: "無法切換訂閱狀態"
    },
    settings: {
      title: "設定",
      category: "類別",
      categorySub: "將專案分到 10 個現存類別中的一個。對專案進行適當的分類可以讓人們更容易找到。",
      keywords: "關鍵字",
      keywordsSub: "若是有人搜尋時加入了這些特殊的字，將會回傳您的專案。",
      homepage: "首頁",
      homepageSub: "為您的專案建立一個自定義首頁可讓您的專案看起來更美觀、更正式，同時也能提供另一個集中專案相關資訊的地方。",
      issues: "問題追蹤器",
      issuesSub: "提供問題跟蹤器可以幫助您的使用者更簡單地獲得支援，並為您提供輕鬆追蹤問題狀態的方式。",
      source: "源碼",
      sourceSub: "透過開源專案來支援開發人員社群！",
      support: "外部支援",
      supportSub: "您可以為使用者提供支援的外部場所。可以是一個論壇，一個 Discord 伺服器，或者其他。",
      license: "許可證",
      licenseSub: "規範人們能對您的專案做什麼 (或不能做什麼)？",
      forum: "在論壇發文",
      forumSub: "設定當事件發生時（如新版本發佈）是否應自動在論壇上發文",
      description: "介紹",
      descriptionSub: "對您的專案作出簡明的介紹",
      icon: "圖示",
      iconSub: "上傳一個能代表您的專案的圖片。",
      iconUpload: "上傳",
      iconReset: "重設圖示",
      apiKey: "API 金鑰",
      apiKeySub: "產生唯一的部署金鑰，以便從 Gradle 部署",
      apiKeyGenerate: "產生",
      rename: "重新命名",
      renameSub: "更改專案名稱可能會產生不在預期之內的結果。我們不會為您原來的連結設定任何自動轉向。",
      delete: "刪除",
      deleteSub: "刪除專案後，將無法恢復。",
      hardDelete: "徹底刪除",
      hardDeleteSub: "刪除專案後，將無法恢復。這次是真的…",
      save: "儲存修改",
      optional: "(選填項)",
      licenseCustom: "自定義名稱",
      licenseType: "類別",
      licenseUrl: 'URL',
      donation: {
        enable: "啟用",
        enableSub: "啟用此專案的贊助表單",
        email: "郵件",
        emailSub: "Paypal 帳戶的電子郵件地址，此該帳戶將接收贊助的款項",
        defaultAmount: "預設金額",
        defaultAmountSub: "預設的贊助金額",
        oneTimeAmounts: "單次金額",
        oneTimeAmountsSub: "您希望為使用者提供一次性贊助的選項清單。使用者仍然可以自定金額",
        monthlyAmounts: "每月金額",
        monthlyAmountsSub: "您希望為使用者提供的每月贊助選項清單。使用者仍然可以自定金額"
      },
      error: {
        invalidFile: "{0} 不是一個有效的檔案類型",
        noFile: "尚未提交檔案",
        members: {
          invalidUser: "{0} 不是一個有效的使用者",
          alreadyInvited: "{0} 已經被邀請到專案中了",
          notMember: "{0} 不是該專案成員，因此無法編輯他們在專案中所扮演的角色",
          invalidRole: "{0} 無法從專案中被新增/移除"
        }
      },
      success: {
        changedIcon: "成功修改專案的圖示",
        resetIcon: "成功重設專案的圖示",
        rename: "成功將專案重新命名為 {0}",
        softDelete: "您已經刪除了這個專案",
        hardDelete: "您已經徹底刪除這個專案"
      },
      tabs: {
        general: "一般",
        optional: "可選項",
        management: "管理",
        donation: "贊助"
      }
    },
    discuss: {
      login: "登入",
      toReply: "來回應此評論",
      noTopic: "目前還沒有針對該專案的評論",
      send: "已發表回覆！"
    }
  },
  page: {
    plural: "頁面",
    new: {
      title: "建立一個新頁面",
      error: {
        minLength: "頁面內容太少了",
        maxLength: "頁面內容太多了",
        duplicateName: "相同名稱的頁面已然存在",
        invalidName: 'Invalid name',
        name: {
          maxLength: "頁面名稱過長",
          minLength: "頁面名稱過短",
          invalidChars: "頁面名稱包含無效字元"
        },
        save: "無法儲存頁面"
      },
      name: "頁面名稱",
      parent: "母頁面 (選填)"
    },
    delete: {
      title: "確定刪除頁面？",
      text: "您確定要刪除此頁面？這將無法復原。"
    }
  },
  version: {
    new: {
      title: "發佈版本…",
      upload: "上傳檔案",
      uploadNew: "上傳新版本",
      url: "輸入一個 URL",
      form: {
        versionString: "版本",
        fileName: "檔案名稱",
        fileSize: "檔案大小",
        externalUrl: "外部 URL",
        hangarProject: "Hangar 專案",
        channel: "通道",
        addChannel: "新增通道",
        unstable: "不穩定",
        recommended: "推薦",
        forumPost: "論壇發文",
        release: {
          bulletin: "發佈公告",
          desc: "此版本的新功能？"
        },
        platforms: "平台",
        dependencies: "插件相依關係"
      },
      error: {
        metaNotFound: "無法從上傳的檔案中載入後設資料",
        jarNotFound: "無法打開 jar 檔案",
        fileExtension: "不正確的副檔名",
        unexpected: "發生未預期錯誤",
        invalidVersionString: "無效的版本字元串",
        duplicateNameAndPlatform: "一個相同名稱的版本和兼容的平台已然存在",
        invalidNumOfPlatforms: "無效的平台序號",
        duplicate: "一個擁有相同檔案的版本已然存在",
        noFile: "無法找到上傳的檔案",
        mismatchedFileSize: "檔案大小不符合",
        hashMismatch: "檔案雜湊值不符合",
        invalidPlatformVersion: "指定的平台並不支援該 MC 版本",
        fileIOError: "檔案 IO 出錯",
        unknown: "一個未知錯誤已然發生",
        incomplete: "插件檔案缺少 {0}",
        noDescription: "必須提供描述",
        invalidPluginDependencyNamespace: "聲明的插件相依關係含有無效的專案命名空間",
        invalidName: 'Invalid version name',
        channel: {
          noName: "必須指定一個通道名稱",
          noColor: "必須指定一個通道顏色"
        }
      }
    },
    edit: {
      platformVersions: "編輯平台版本: {0}",
      pluginDeps: "編輯插件相依關係: {0}",
      error: {
        noPlatformVersions: "必須至少提供一個有效的平台版本",
        invalidVersionForPlatform: "{0} 於 {1} 是一個無效的版本",
        invalidProjectNamespace: "{0} 不是一個有效的專案命名空間"
      }
    },
    page: {
      subheader: "{0} 發佈此版本於 {1}",
      dependencies: "相依關係",
      platform: "平台",
      required: "(必填項)",
      adminMsg: "{0} 通過了 {1} 的審核",
      reviewLogs: "審核日誌",
      reviewStart: "開始審核",
      setRecommended: "設定為推薦",
      setRecommendedTooltip: "在平台 {0} 上設為推薦版本",
      delete: "刪除",
      hardDelete: "刪除 (永久)",
      restore: "恢復",
      download: "下載",
      downloadExternal: "外部下載",
      adminActions: "管理員操作",
      recommended: "推薦的版本",
      partiallyApproved: "部分核准",
      approved: "核准",
      userAdminLogs: "使用者管理日誌",
      unsafeWarning: "此版本尚未由我們的審核人員審核，可能無法被安全地下載。",
      downloadUrlCopied: "已複製！",
      confirmation: {
        title: "警告 - {0} {1} 由 {2}",
        alert: "此版本尚未由我們的審核人員審核，可能無法被安全地使用。",
        disclaimer: "免責聲明：如果您選擇忽視此警告，我們對您的伺服器或系統的任何損害概不負責。",
        agree: "下載並自擔風險",
        deny: "返回"
      }
    },
    channels: "通道",
    editChannels: "編輯通道",
    platforms: "平台",
    error: {
      onlyOnePublic: "您目前只存在有 1 個公開版本"
    },
    success: {
      softDelete: "您已經刪除了這個版本",
      hardDelete: "您已經徹底刪除這個版本",
      restore: "您恢復了這個版本",
      recommended: "您將該版本標記為在平台 {0} 上的推薦版本"
    }
  },
  channel: {
    modal: {
      titleNew: "新增新通道",
      titleEdit: "編輯通道",
      name: "通道名稱",
      color: "通道顏色",
      reviewQueue: "從審核佇列中排除通道？",
      error: {
        invalidName: "無效的通道名稱",
        maxChannels: "這個專案已經達到了通道數上限：{0}",
        duplicateColor: "這個專案已經有另一個使用此顏色的通道",
        duplicateName: "這個專案已經有另一個使用此名稱的通道",
        tooLongName: "通道名稱過長",
        cannotDelete: "您無法刪除這個通道"
      }
    },
    manage: {
      title: "發行通道",
      subtitle: "發佈通道表示插件發佈的狀態。一個專案最多可以有五個發佈通道。",
      channelName: "通道名稱",
      versionCount: "版本數",
      reviewed: "審核通過的",
      edit: "編輯",
      trash: "垃圾箱",
      editButton: "編輯",
      deleteButton: "刪除",
      add: "新增通道"
    }
  },
  organization: {
    new: {
      title: "建立一個新的組織",
      text: "組織允許您將使用者分組，以便在 Hangar 上的專案中為他們提供更緊密的協作關係。",
      name: "組織名稱",
      error: {
        duplicateName: "已經有使用該名稱的組織/使用者。",
        invalidName: "無效的組織名稱",
        tooManyOrgs: "您最多只能建立 {0} 個組織",
        notEnabled: "組織功能尚未啟用！",
        jsonError: "剖析 HangarAuth 的 JSON 回應時出錯",
        hangarAuthValidationError: "身份驗證錯誤：{0}",
        unknownError: "在建立組織時遇到了未知錯誤"
      }
    },
    settings: {
      members: {
        invalidUser: "{0} 不是一個有效的使用者",
        alreadyInvited: "{0} 已經被邀請到組織當中了",
        notMember: "{0} 並不是該組織中的成員，因此您不能編輯其角色。",
        invalidRole: "無法從組織中新增/移除 {0}"
      }
    }
  },
  form: {
    memberList: {
      addUser: "新增使用者…",
      create: "建立",
      editUser: "編輯使用者",
      invitedAs: "(邀請來擔任 {0})"
    }
  },
  notifications: {
    title: "通知",
    invites: "邀請",
    invited: "您已被邀請至 {0}",
    inviteAccepted: "您接受了來自 {0} 的邀請",
    readAll: "標記所有訊息為已讀",
    unread: "未讀",
    read: "已讀",
    all: "全部",
    invite: {
      all: "全部",
      projects: "專案",
      organizations: "組織",
      btns: {
        accept: "接受",
        decline: "謝絶",
        unaccept: "不接受"
      },
      msgs: {
        accept: "您已加入 {0}",
        decline: "您謝絶加入 {0}",
        unaccept: "您離開了 {0}"
      }
    },
    empty: {
      unread: "您還沒有未讀通知哦。",
      read: "您有未讀通知。",
      all: "您還沒有收到過通知。",
      invites: "您還沒有收到過邀請"
    },
    project: {
      reviewed: "{0} {1} 已被審核並核准",
      reviewedPartial: "{0} {1} 已被審核並部分核准",
      newVersion: "專案 {0} 有新的發行版：{1}",
      invite: "您被邀請於專案 {1} 的小組 {0}",
      inviteRescinded: "邀請您至專案 {1} 的小組 {0} 的請求已撤銷",
      removed: "您已被移出專案 {1} 的小組 {0}",
      roleChanged: "您於專案 {1} 中被新增到 {0} 小組"
    },
    organization: {
      invite: "您被邀請至組織 {1} 的小組 {0}",
      inviteRescinded: "邀請您至組織 {1} 的小組 {0} 的請求已撤銷",
      removed: "您已被移出組織 {1} 的小組 {0}",
      roleChanged: "您於組織 {1} 中被新增到 {0} 小組"
    }
  },
  visibility: {
    notice: {
      new: "此專案是全新的，因此在上傳版本之前不會顯示給其他人。如果在較長時間內未有版本被發行，則專案將被刪除。",
      needsChanges: "此專案需要進行更改",
      needsApproval: "您已將專案提交審核",
      softDelete: "專案被 {0} 刪除"
    },
    name: {
      new: "新增",
      public: "公共",
      needsChanges: "需要更改",
      needsApproval: "需要審核",
      softDelete: "刪除"
    },
    changes: {
      version: {
        reviewed: "由於審核通過"
      }
    },
    modal: {
      activatorBtn: "可見度操作",
      title: "更改了 {0} 的可見度",
      reason: "更改的原因",
      success: "您更改了 {0} 的可見度為 {1}"
    }
  },
  author: {
    watching: "訂閱的內容",
    stars: "收藏夾",
    orgs: "組織",
    viewOnForums: "在論壇上查看 ",
    taglineLabel: "使用者標語",
    editTagline: "編輯標語",
    memberSince: "註冊於 {0}",
    numProjects: "無專案 | {0} 個專案 | {0} 個專案",
    addTagline: "新增一個標語",
    noOrgs: "{0} 不屬於任何一個組織。 😢",
    noWatching: "{0} 還沒有收藏過任何專案。 😢",
    noStarred: "{0} 還沒關注任何專案。 😢",
    tooltips: {
      settings: "使用者設定",
      lock: "鎖定帳號",
      unlock: "解鎖帳號",
      apiKeys: "API 金鑰",
      activity: "使用者活動",
      admin: "使用者管理"
    },
    lock: {
      confirmLock: "確定要鎖定 {0} 的帳號？",
      confirmUnlock: "確定要解鎖 {0} 的帳號？",
      successLock: "成功鎖定 {0} 的帳號",
      successUnlock: "成功解鎖 {0} 的帳號"
    },
    org: {
      editAvatar: "編輯頭像"
    },
    error: {
      invalidTagline: "無效的標語",
      invalidUsername: 'Invalid username'
    }
  },
  linkout: {
    title: "外部鏈結警告",
    text: "您剛剛點選了前往 \"{0}\" 的鏈結。如果您不打算訪問此鏈結，請返回，否則，請繼續。",
    abort: "返回",
    continue: "繼續"
  },
  flags: {
    header: "檢舉資訊於",
    noFlags: "找不到任何檢舉",
    resolved: "是，由 {0} 於 {1}",
    notResolved: "否"
  },
  notes: {
    header: "筆記於",
    noNotes: "找不到任何筆記",
    addNote: "新增筆記",
    notes: "筆記",
    placeholder: "新增一個筆記…"
  },
  stats: {
    title: "統計",
    plugins: "插件數",
    reviews: "審核數",
    uploads: "上傳數",
    downloads: "下載數",
    totalDownloads: "總下載數",
    unsafeDownloads: "不安全的下載數",
    flags: "檢舉數",
    openedFlags: "未處理的檢舉",
    closedFlags: "已處理的檢舉"
  },
  health: {
    title: "Hangar 健康報告",
    noTopicProject: "遺失討論主題",
    erroredJobs: "失敗的任務",
    jobText: "任務類型：{0}，錯誤類型：{1}，發生於：{2}",
    staleProjects: "陳舊的專案",
    notPublicProjects: "隱藏的專案",
    noPlatform: "未偵測到平台",
    missingFileProjects: "遺失的檔案",
    empty: "空空！一切正常！"
  },
  reviews: {
    headline: "{0} 於 {1} 發行此版本",
    title: "審核日誌",
    projectPage: "專案頁面",
    downloadFile: "下載檔案",
    startReview: "開始審核",
    stopReview: "停止審核",
    approve: "核准",
    approvePartial: "部分核准",
    notUnderReview: "這個版本尚未請求審核",
    reviewMessage: "審核訊息",
    addMessage: "新增訊息",
    reopenReview: "重新開始審核",
    undoApproval: "撤銷核准",
    hideClosed: "隱藏所有已完成的審核",
    error: {
      noReviewStarted: "沒有尚未完成的審核可新增訊息",
      notCorrectUser: "您不是審核此專案的使用者",
      cannotReopen: "無法重新開始此審核",
      onlyOneReview: "對於一個版本不能有超過 1 次的審核",
      badUndo: "只有在核准後才能撤銷核准"
    },
    presets: {
      message: '{msg}',
      start: "{name} 開始了審核",
      stop: "{name} 停止了這次審核: {msg}",
      reopen: "{name} 重開了審核",
      approve: "{name} 核准了此版本",
      approvePartial: "{name} 部分核准了此版本",
      undoApproval: "{name} 撤銷了他們的核准",
      reviewTitle: "{name} 的審核"
    },
    state: {
      ongoing: "進行中",
      stopped: "已停止",
      approved: "已核准",
      partiallyApproved: "已部分核准",
      lastUpdate: "最後更新於：{0}"
    }
  },
  apiKeys: {
    title: "API 金鑰",
    createNew: "建立新的金鑰",
    existing: "現存金鑰",
    name: "名稱",
    key: "金鑰",
    keyIdentifier: "金鑰標識",
    permissions: "權限",
    delete: "刪除",
    deleteKey: "刪除金鑰",
    createKey: "建立金鑰",
    noKeys: "目前還沒有 API 金鑰，您可以透過右側按鈕來建立",
    success: {
      delete: "您刪除了金鑰：{0}",
      create: "您建立了金鑰：{0}"
    },
    error: {
      notEnoughPerms: "沒有足夠的權限來建立此金鑰",
      duplicateName: "金鑰名稱已存在"
    }
  },
  apiDocs: {
    title: "API 使用文件"
  },
  platformVersions: {
    title: "配置平台版本",
    platform: "平台",
    versions: "版本",
    addVersion: "新增版本",
    saveChanges: "儲存更改",
    success: "平台版本已更新"
  },
  flagReview: {
    title: "審閲檢舉",
    noFlags: "這裡還沒有檢舉資訊需要被您審閲。",
    msgUser: "傳送訊息給給使用者",
    msgProjectOwner: "傳送訊息給專案所有者",
    markResolved: "標記為已解決",
    line1: "{0} 於 {2} 檢舉 {1}",
    line2: "理由：{0}",
    line3: "註解：{0}"
  },
  userActivity: {
    title: "{0} 的動態",
    reviews: "審閲數",
    flags: "檢舉數",
    reviewApproved: "已通過的審核",
    flagResolved: "已解決的檢舉",
    error: {
      isOrg: "無法顯示組織的動態"
    }
  },
  userAdmin: {
    title: "編輯使用者",
    organizations: "組織",
    organization: "組織",
    projects: "專案",
    project: "專案",
    owner: "所有者",
    role: "角色",
    accepted: "接受",
    sidebar: "其他管理",
    hangarAuth: "HangarAuth 使用者資訊",
    forum: "論壇使用者資訊"
  },
  userActionLog: {
    title: "使用者行為日誌",
    user: "使用者",
    address: "IP 位址",
    time: "時間",
    action: "行為",
    context: "內容",
    oldState: "舊狀態",
    newState: "新狀態",
    markdownView: "Markdown 預覽",
    diffView: "Diff 預覽",
    types: {
      ProjectVisibilityChanged: "專案可見性狀態被更改",
      ProjectRename: "專案被重命名",
      ProjectFlagged: "專案被檢舉",
      ProjectSettingsChanged: "專案設定被更改",
      ProjectIconChanged: "專案圖示被更改",
      ProjectFlagResolved: "檢舉被解決",
      ProjectChannelCreated: "專案通道被建立",
      ProjectChannelEdited: "專案通道被編輯",
      ProjectChannelDeleted: "專案通道被刪除",
      ProjectInvitesSent: "專案協助邀請函被發送",
      ProjectInviteDeclined: "專案協助邀請函被謝絶",
      ProjectInviteUnaccepted: "專案協助邀請函未被接受",
      ProjectMemberAdded: "專案成員被新增",
      ProjectMembersRemoved: "專案成員被移除",
      ProjectMemberRolesChanged: "專案成員角色更新",
      ProjectPageCreated: "專案頁面被建立",
      ProjectPageDeleted: "專案頁面被刪除",
      ProjectPageEdited: "專案頁面被編輯",
      VersionVisibilityChanged: "版本可見性狀態被更改",
      VersionDeleted: "版本被刪除",
      VersionCreated: "一個新版本被上傳",
      VersionDescriptionEdited: "版本描述被編輯",
      VersionReviewStateChanged: "版本審核狀態被更改",
      VersionPluginDependencyAdded: "插件依賴項被新增",
      VersionPluginDependencyEdited: "插件依賴項被編輯",
      VersionPluginDependencyRemoved: "插件依賴項被移除",
      VersionPlatformDependencyAdded: "平台依賴項被新增",
      VersionPlatformDependencyRemoved: "平台依賴項被移除",
      UserTaglineChanged: "使用者標語被更新",
      UserLocked: "這個使用者已被鎖定",
      UserUnlocked: "這個使用者未被鎖定",
      UserApikeyCreated: "一個 API 金鑰被建立",
      UserApikeyDeleted: "一個 api 金鑰被刪除",
      OrganizationInvitesSent: "組織邀請函被發送",
      OrganizationInviteDeclined: "組織邀請函被謝絶",
      OrganizationInviteUnaccepted: "組織邀請函未被接受",
      OrganizationMemberAdded: "組織成員被新增",
      OrganizationMembersRemoved: "組織成員被移除",
      OrganizationMemberRolesChanged: "組織成員的角色被更改"
    }
  },
  versionApproval: {
    title: "版本審核",
    inReview: "審核中",
    approvalQueue: "審核佇列",
    queuedBy: "按以下方式排序",
    status: "狀態",
    project: "專案",
    date: "日期",
    version: "版本",
    started: "開始於：{0}",
    ended: "結束於：{0}",
    statuses: {
      ongoing: "{0} 個審核中",
      stopped: "{0} 個停止審核",
      approved: "{0} 個被核准"
    }
  },
  projectApproval: {
    title: "專案審核",
    sendForApproval: "您已提交專案審核",
    noProjects: "無專案",
    needsApproval: "待核准",
    awaitingChanges: "等待修改",
    description: "{0} 要求修改 {1}"
  },
  donate: {
    title: "贊助給 {}",
    monthly: "月度訂閲",
    oneTime: "一次性",
    selectAmount: "在上方選擇金額或在下方輸入金額",
    legal: "透過贊助 {0} ，您同意墨西哥夾餅很好吃",
    cta: "贊助",
    submit: "按 {0} 贊助"
  },
  lang: {
    button: 'Switch Language',
    title: 'Switch Language',
    available: 'Available Language',
    hangarAuth: 'This only change the locale for your current browser (as a cookie). Click here to change your lang on paper auth for all paper services'
  },
  validation: {
    required: "{0} 是必填的",
    maxLength: "最長不能超過 {0}",
    minLength: "最短不能少於 {0}",
    invalidFormat: "{0} 無效",
    invalidUrl: "無效的 URL 格式"
  },
  prompts: {
    confirm: "了解了！",
    changeAvatar: {
      title: "修改您的頭像！",
      message: "歡迎來到您的新組織！就從點選頭像並修改頭像開始吧。"
    }
  },
  error: {
    userLocked: "您的帳號已被鎖定。",
    401: "您必須先登入",
    403: "您沒有權限",
    404: "404 未找到",
    unknown: "發生未知錯誤"
  }
};
export default msgs;