import { LocaleMessageObject } from 'vue-i18n';
const msgs: LocaleMessageObject = {
  general: {
    close: "Chiudi",
    submit: "Invia",
    save: "Salva",
    comment: "Commenta",
    change: "Cambia",
    donate: "Dona",
    continue: "Continua",
    create: "Crea",
    delete: "Elimina",
    or: "Oppure",
    reset: 'Reset',
    edit: "Modifica",
    required: "Richiesto",
    add: "Aggiungi",
    name: "Nome",
    link: 'Link',
    send: "Invia",
    home: 'Home',
    message: "Messaggio",
    refresh: "Ricarica",
    confirm: "Conferma",
    error: {
      invalidUrl: "Formato URL invalido"
    }
  },
  hangar: {
    projectSearch: {
      query: "Cercando in {0} progetti, fatti con orgoglio dalla community...",
      relevanceSort: "Ordina per importanza",
      noProjects: "Non ci sono progetti. 😢",
      noProjectsFound: "Trovati 0 progetti. 😢"
    },
    subtitle: "Una repository di pacchetti di minecraft",
    sponsoredBy: "Sponsorizzato da"
  },
  pages: {
    staffTitle: "Personale",
    authorsTitle: "Autori",
    headers: {
      username: 'Username',
      roles: "Ruoli",
      joined: "Entrato",
      projects: "Progetti"
    }
  },
  nav: {
    login: "Entra",
    signup: "Registrati",
    user: {
      notifications: "Notifiche",
      flags: "Segnalazioni",
      projectApprovals: "Approvazioni progetti",
      versionApprovals: "Approvazioni versioni",
      stats: "Statistiche",
      health: "Vita di Hangar",
      log: "Log Azioni Utente",
      platformVersions: "Versions Piattaforme",
      logout: "Esci",
      error: {
        loginFailed: "Autenticazione Fallita",
        invalidUsername: "Username Invalido",
        hangarAuth: "Non riesco a connettermi ad HangarAuth",
        loginDisabled: "Il login non è attualmente disponibile, prova più tardi",
        fakeUserEnabled: "Gli utenti falsi sono abilitati. {0} è quindi disabilitato"
      }
    },
    createNew: "Crea nuovo...",
    new: {
      project: "Nuovo Progetto",
      organization: "Nuova Organizzazione"
    },
    hangar: {
      home: "Home",
      forums: "Forum",
      code: "Codice",
      docs: "Documentazione",
      javadocs: 'JavaDocs',
      hangar: 'Hangar (Plugins)',
      downloads: "Download",
      community: 'Community'
    }
  },
  project: {
    stargazers: 'Stargazers',
    noStargazers: "Non ci sono stargazers in questo progetto 😢",
    watchers: "Osservatori",
    noWatchers: "Non ci sono watchers in questo progetto 😢",
    members: "Membri",
    category: {
      info: "Categoria: {0}",
      admin_tools: "Strumenti Amministrazione",
      chat: 'Chat',
      dev_tools: "Strumenti Sviluppo",
      economy: "Economia",
      gameplay: "Gioco",
      games: "Giochi",
      protection: "Protezione",
      role_playing: "Gioco di Ruolo",
      world_management: "Gestione Mondo",
      misc: "Altro"
    },
    actions: {
      unwatch: "Non seguire",
      watch: "Segui",
      flag: "Segnala",
      star: "Stella",
      unstar: 'Unstar',
      adminActions: "Azioni Admin",
      flagHistory: "Segnalazioni ({0})",
      staffNotes: "Note dello staff ({0})",
      userActionLogs: "Log Azioni Utente",
      forum: 'Forum'
    },
    flag: {
      flagProject: "Segnalare {0}?",
      flagSend: "Segnalato con successp, grazie dell aiuto per rendere la community un posto migliore!",
      flagSent: "Segnalazione inviata",
      flags: {
        inappropriateContent: "Contenuto inappropriato",
        impersonation: "Impersonificazione o Inganno",
        spam: 'Spam',
        malIntent: "Intenti Pericolosi",
        other: "Altro"
      },
      error: {
        alreadyOpen: "Puoi avere solamente 1 segnalazione aperta su un progetto",
        alreadyResolved: "Questa segnalazione è già risolta"
      }
    },
    tabs: {
      docs: "Documentazione",
      versions: "Versioni",
      discuss: "Discuti",
      settings: "Impostazioni",
      homepage: "Home",
      issues: "Problemi",
      source: "Fonte",
      support: "Supporto"
    },
    new: {
      step1: {
        title: "Accordo per gli utenti",
        text: "Un progetto contiene i tuoi downloads e la documentazione per il tuo plugin.<br>Prima di continuare, perfavore guarda le <a href=\"#\">Linee Guida di Hangar.</a>",
        continue: "Accetta",
        back: "Annulla"
      },
      step2: {
        title: "Impostazioni Base",
        continue: "Continua",
        back: "Torna Indietro",
        userSelect: "Crea come...",
        projectName: "Nome progetto",
        projectSummary: "Riassunto progetto",
        projectCategory: "Categoria progetto"
      },
      step3: {
        title: "Impostazioni Aggiuntive",
        continue: "Continua",
        back: "Torna Indietro",
        optional: "Opzionale",
        links: "Collegamenti",
        homepage: "Home",
        issues: "Tracker Problemi",
        source: "Codice Sorgente",
        support: "Supporto Esterno",
        license: "Licenza",
        type: "Tipo",
        customName: "Nome",
        url: 'URL',
        seo: 'SEO',
        keywords: "Parole chiave"
      },
      step4: {
        title: "Importa da Spigot",
        continue: "Continua",
        back: "Indietro",
        optional: "Opzionale",
        convert: "Converti",
        saveAsHomePage: "Salva come pagina home",
        convertLabels: {
          bbCode: "Incolla il tuo BBCode qui",
          output: "Output Markdown"
        },
        preview: "Anteprima",
        tutorial: "Come prendere il BBCode",
        tutorialInstructions: {
          line1: "Per prendere il BBCode dal tuo progetto Spigot, esegui le seguenti azioni:",
          line2: "1. Vai nel tuo progetto e clicca su \"Edit Resource\".",
          line3: "2. Clicca nel simbolo della chiave inglese nell'editor della descrizione.",
          line4: "3. Copia e incolla il nuovo contenuto nella textbox qui sopra, fai le modifiche che vuoi e premi salva!"
        }
      },
      step5: {
        title: "Terminando",
        text: "Creando..."
      },
      error: {
        create: "C'è stato un errore nella creazione del progetto",
        nameExists: "Un progetto con questo nome esiste già",
        slugExists: "Un progetto con questa slug esiste già",
        invalidName: "Questo nome contiene un carattere invalido",
        tooLongName: "Il nome del progetto è troppo lungo",
        tooLongDesc: "La descrizione del progetto è troppo lunga",
        tooManyKeywords: "Il progetto contiene troppe parole chiave",
        noCategory: "Il progetto deve avere una categoria",
        noDescription: "Il progetto deve avere una descrizione"
      }
    },
    sendForApproval: "Invia per l'approvazione",
    info: {
      title: "Informazioni",
      publishDate: "Pubblicato il {0}",
      views: "0 visualizzazioni | {0} visualizzazione | {0} visualizzazioni",
      totalDownloads: "0 downloads totali | {0} download totale | {0} downloads totali",
      stars: "0 stelle | {0} stella | {0} stelle",
      watchers: "0 osservatori <unk> {0} osservatori <unk> {0}"
    },
    promotedVersions: "Versioni Promosse",
    license: {
      link: "Concesso in licenza "
    },
    error: {
      star: "Impossibile cambiare la stella",
      watch: "Impossibile cambiare la visualizzazione"
    },
    settings: {
      title: "Impostazioni",
      category: "Categoria",
      categorySub: "Dai una delle 10 categorie al tuo progetto. Mettendo una categoria appropriata faciliti il tuo progetto ad essere trovato.",
      keywords: "Parole chiave",
      keywordsSub: "Queste sono parole speciali che faranno trovare il tuo progetto quando qualcuno le cercherà.",
      homepage: "Home",
      homepageSub: "Una homepage personalizzata aiuta il tuo progetto a sembrare più ufficiale e ti fornisce un luogo per dare più informazioni sul tuo progetto.",
      issues: "Tracker Problemi",
      issuesSub: "Con un tracker problemi aiuti gli utenti ad avere supporto più facilmente e ti fornisce un modo più semplice per tracciare i bug.",
      source: "Codice Sorgente",
      sourceSub: "Supporta la comunità di developers rendendo il tuo progetto open source!",
      support: "Support esterno",
      supportSub: "Un luogo esterno dove puoi offrire supporto ai tuoi utenti. Può essere un forum, un server Discord o qualcos altro.",
      license: "Licenza",
      licenseSub: "Cosa possono fare(e non fare) le persone con il tuo progetto?",
      forum: "Crea un post nel forum",
      forumSub: "Imposta se un evento come un nuovo rilascio deve creare automaticamente un post nel forum",
      description: "Descrizione",
      descriptionSub: "Una piccola descrizione del tuo progetto",
      icon: "Icona",
      iconSub: "Carica una immagine che rappresenti il tuo progetto.",
      iconUpload: "Carica",
      iconReset: "Reimposta Icona",
      apiKey: "Chiavi API",
      apiKeySub: "Genera un'unica deployment key per abilitare il build deployment da Gradle",
      apiKeyGenerate: "Genera",
      rename: "Rinomina",
      renameSub: "Cambiando il nome dedl tuo progetto potresti avere conseguenze non desiderate. Noi non creeremo nessun reindirizzamento.",
      delete: "Elimina",
      deleteSub: "Una volta eliminato un progetto, esso non potrà essere recuperato.",
      hardDelete: "Eliminazione Rigida",
      hardDeleteSub: "Una volta eliminato un progetto, non potrà essere recuperato. Questa volta seriamente...",
      save: "Salva cambiamenti",
      optional: "(opzionale)",
      licenseCustom: "Nome Personalizzato",
      licenseType: "Tipo",
      licenseUrl: 'URL',
      donation: {
        enable: "Abilita",
        enableSub: "Abilita le donazioni per il tuo progetto",
        email: 'Email',
        emailSub: "L' email dell'account paypal, essa riceverà le donazioni",
        defaultAmount: "Importo Predefinito",
        defaultAmountSub: "L' importo pre-selezionato",
        oneTimeAmounts: "Importo Singolo",
        oneTimeAmountsSub: "Lista delle opzioni che vuoi dare agli utenti per una donazione singola. Gli utenti possono comunque utilizzare un importo personalizzato",
        monthlyAmounts: "Importo Mensile",
        monthlyAmountsSub: "Lista delle opzioni che vuoi dare agli utenti per una donazione mensile. Gli utenti possono comunque utilizzare un importo personalizzato"
      },
      error: {
        invalidFile: "{0} non è un tipo di file valido",
        noFile: "Nessun file è stato inviato",
        members: {
          invalidUser: "{0} non è un utente valido",
          alreadyInvited: "{0} è già stato invitato nel progetto",
          notMember: "{0} non è un membro del progetto, non puoi modificare il suo ruolo",
          invalidRole: "{0} non può essere aggiunto/rimosso dal progetto"
        }
      },
      success: {
        changedIcon: "Icona progetto cambiata con successo",
        resetIcon: "Icona progetto reimpostata con successo",
        rename: "Progetto rinominato a {0}",
        softDelete: "Progetto eliminato",
        hardDelete: "Progetto completamente eliminato"
      },
      tabs: {
        general: "Generale",
        optional: "Opzioni",
        management: "Gestione",
        donation: "Donazioni"
      }
    },
    discuss: {
      login: 'Log in',
      toReply: "per rispondere alla discussione",
      noTopic: "Non ci sono discussioni per questo progetto",
      send: "Risposta inviata!"
    }
  },
  page: {
    plural: "Pagine",
    new: {
      title: "Crea una nuova pagina",
      error: {
        minLength: "Il contenuto della pagina è troppo corto",
        maxLength: "Il contenuto della pagina è troppo lungo",
        duplicateName: "Una pagina con quel nome esiste già",
        invalidName: "Nome invalido",
        name: {
          maxLength: "Il nome della pagina è troppo lungo",
          minLength: "Il nome della pagina è troppo corto",
          invalidChars: "Nome invalido"
        },
        save: "Impossibile salvare la pagina"
      },
      name: "Nome Pagina",
      parent: "Pagina Genitore (opzionale)"
    },
    delete: {
      title: "Eliminare la pagina?",
      text: "Sei sicuro di voler eliminare questa pagina? L'azione non può essere annullata."
    }
  },
  version: {
    new: {
      title: "Crea versione...",
      upload: "Carica File",
      uploadNew: "Carica una nuova Versione",
      url: "Inserisci URL",
      form: {
        versionString: "Versione",
        fileName: "Nome file",
        fileSize: "Dimensione file",
        externalUrl: "URL esterno",
        hangarProject: "Progetto Hangar",
        channel: "Canale",
        addChannel: "Aggiungi Canale",
        unstable: "Non stabile",
        recommended: "Consigliato",
        forumPost: "Post Forum",
        release: {
          bulletin: "Bollettino Rilascio",
          desc: "Cosa c'è di nuovo in questo rilascio?"
        },
        platforms: "Piattaforme",
        dependencies: "Dipendenze"
      },
      error: {
        metaNotFound: "Impossibile caricare i metadati dal file caricato",
        jarNotFound: "Impossibile aprire il jar",
        fileExtension: "Estensione file non corretta",
        unexpected: "Errore inaspettato",
        invalidVersionString: "Versione invalida",
        duplicateNameAndPlatform: "Una versione con questo nome e versioni compatibili esiste già",
        invalidNumOfPlatforms: "Numero delle piattaforme errato",
        duplicate: "Una versione con questo file esiste già",
        noFile: "Impossibile trovare il file caricato",
        mismatchedFileSize: "Il peso dei file non corrisponde",
        hashMismatch: "Gli hash dei file non corrispondono",
        invalidPlatformVersion: "Versione MC invalida per la piattaforma specificata",
        fileIOError: "Errore File IO",
        unknown: "Errore sconosciuto",
        incomplete: "File del plugin mancante {0}",
        noDescription: "Deve avere una descrizione",
        invalidPluginDependencyNamespace: "Una dipendenza dichiarata ha un nome invalido",
        invalidName: "Nome versione invalido",
        channel: {
          noName: "Un nome del canale deve essere specificato",
          noColor: "Un colore del canale deve essere specificato"
        }
      }
    },
    edit: {
      platformVersions: "Modifica Versioni Piattaforme: {0}",
      pluginDeps: "Modifica Dipendenze: {0}",
      error: {
        noPlatformVersions: "Devi fornire almeno una valida versione di piattaforma",
        invalidVersionForPlatform: "{0} non è una versione valida per {1}",
        invalidProjectNamespace: "{0} non è un nome di versione valido"
      }
    },
    page: {
      subheader: "{0} ha rilasciato questa versione il {1}",
      dependencies: "Dipendenze",
      platform: "Piattaforma",
      required: "(richiesto)",
      adminMsg: "{0} ha approvato questa versione il {1}",
      reviewLogs: "Logs review",
      reviewStart: "Inizia review",
      setRecommended: "Imposta come Consigliato",
      setRecommendedTooltip: "Imposta questa versione come consigliata per la piattaforma {0} ",
      delete: "Elimina",
      hardDelete: "Elimina (permanentemente)",
      restore: "Recupera",
      download: "Scarica",
      downloadExternal: "Download Esternamente",
      adminActions: "Azioni admin",
      recommended: "Versione consigliata",
      partiallyApproved: "Approvato parzialmente",
      approved: "Approvato",
      userAdminLogs: "Logs Utenti",
      unsafeWarning: "Questa versione non è stata controllata da un moderatore e potrebbe essere pericolosa",
      downloadUrlCopied: "Copiato!",
      confirmation: {
        title: "Attenzione - {0} {1} da {2}",
        alert: "Questa versione non è stata controllata da un moderatore e potrebbe essere pericolosa.",
        disclaimer: "Disclaimer: Noi non ci assumiamo nessuna responsabilità per alcun danno per il tuo server o sistema che potrebbero essere causati ignorando questo avvertimento.",
        agree: "Scarica a mio rischio",
        deny: "Vai indietro"
      }
    },
    channels: "Canali",
    editChannels: "Modifica Canali",
    platforms: "Piattaforme",
    error: {
      onlyOnePublic: "Hai solo una versione pubblica rimasta"
    },
    success: {
      softDelete: "Hai eliminato questa versione",
      hardDelete: "Hai eliminato completamente questa versione",
      restore: "Hai recuperato questa versione",
      recommended: "Hai impostato questa versione come consigliata per la piattaforma {0}"
    }
  },
  channel: {
    modal: {
      titleNew: "Aggiungi un nuovo canale",
      titleEdit: "Modifica canale",
      name: "Nome Canale",
      color: "Colore Canale",
      reviewQueue: "Escludi dalla lista di controllo per la moderazione?",
      error: {
        invalidName: "Nome canale invalido",
        maxChannels: "Questo progetto ha superato il massimo di canali: {0}",
        duplicateColor: "Esiste già un progetto con questo colore",
        duplicateName: "Esiste già un progetto con questo nome",
        tooLongName: "Il nome del canale è troppo lungo",
        cannotDelete: "Non puoi eliminare questo canale"
      }
    },
    manage: {
      title: "Canali Rilascio",
      subtitle: "I canali di rilascio rappresentano lo stato di rilascio di un plugin. Un progetto può avere fino a cinque canali di rilascio.",
      channelName: "Nome Canale",
      versionCount: "Versioni",
      reviewed: "Controllato",
      edit: "Modifica",
      trash: "Cestina",
      editButton: "Modifica",
      deleteButton: "Elimina",
      add: "Aggiungi Canale"
    }
  },
  organization: {
    new: {
      title: "Crea una nuova Organizzazione",
      text: "Le organizzazioni consentono agli utenti di un gruppo di fornire una collaborazione più stretta tra loro all'interno dei tuoi progetti su Hangar.",
      name: "Nome Organizzazione",
      error: {
        duplicateName: "Un' organizzazione o un utente con questo nome esiste già",
        invalidName: "Nome organizzazione invalido",
        tooManyOrgs: "Puoi creare un massimo di {0} organizzazioni",
        notEnabled: "Le organizzazioni non sono abilitate!",
        jsonError: "Errore nel caricamento della risposta JSON dal server di autenticazione",
        hangarAuthValidationError: "Errore: {0}",
        unknownError: "Errore sconosciuto"
      }
    },
    settings: {
      members: {
        invalidUser: "{0} non è un utente valido",
        alreadyInvited: "{0} è già stato invitato all'organizzazione",
        notMember: "{0} non è un membro dell'organizzazione, non puoi modificare il suo ruolo",
        invalidRole: "{0} non può essere aggiunto/rimosso dall'organizzazione"
      }
    }
  },
  form: {
    memberList: {
      addUser: "Aggiungi Utente...",
      create: "Crea",
      editUser: "Modifica Utente",
      invitedAs: "(Invitato da {0})"
    }
  },
  notifications: {
    title: "Notifiche",
    invites: "Inviti",
    invited: "Sei stato invitato ad entrare in {0}",
    inviteAccepted: "Hai accettato l'invito ad {0}",
    readAll: "Segna tutto come letto",
    unread: "Segna come non letto",
    read: "Leggi",
    all: "Tutto",
    invite: {
      all: "Tutto",
      projects: "Progetti",
      organizations: "Organizzazioni",
      btns: {
        accept: "Accetta",
        decline: "Rifiuta",
        unaccept: "Annulla"
      },
      msgs: {
        accept: "Sei entrato in {0}",
        decline: "Hai rifiutato l'invito a {0}",
        unaccept: "Sei uscito da {0}"
      }
    },
    empty: {
      unread: "Non hai nuove notifiche.",
      read: "Non hai notifiche lette.",
      all: "Non hai notifiche.",
      invites: "Non hai inviti"
    },
    project: {
      reviewed: "{0} {1} è stato controllato e approvato",
      reviewedPartial: "{0} {1} è stato controllato e approvato parzialmente",
      newVersion: "Una nuova versione è stata rilasciata per {0}: {1}",
      invite: "Sei stato invitato ad entrare nel gruppo {0} per il progetto {1}",
      inviteRescinded: "Il tuo invito per il gruppo {0} nel progetto {1} è stato annullato",
      removed: "Sei stato rimosso dal gruppo {0} nel progetto {1}",
      roleChanged: "Sei stato aggiunto al gruppo {0} nel progetto {1}"
    },
    organization: {
      invite: "Sei stato invitato ad entrare nel gruppo {0} nell'organizzazione {1}",
      inviteRescinded: "Il tuo invito per entrare nel gruppo {0} nell'organizzazione {1} è stato annullato",
      removed: "Sei stato rimosso dal gruppo {0} nell'organizzazione {1}",
      roleChanged: "Sei stato aggiunto nel gruppo {0} nell'organizzazione {1}"
    }
  },
  visibility: {
    notice: {
      new: "Questo progetto è nuovo, e non potrà essere visualizzato agli altri finché non verrà caricata una versione. Se non verrà caricata nessuna versione il progetto verrà eliminato",
      needsChanges: "Questo progetto richiede modifiche",
      needsApproval: "Hai inviato il progetto per la revisione",
      softDelete: "Progetto eliminato da {0}"
    },
    name: {
      new: "Nuovo",
      public: "Publico",
      needsChanges: "Richiede Modifiche",
      needsApproval: "Richiede Approvazione",
      softDelete: "Elimina (Soft)"
    },
    changes: {
      version: {
        reviewed: "per le modifiche richieste"
      }
    },
    modal: {
      activatorBtn: "Azioni Visibilità",
      title: "Modifica visibilità di {0}",
      reason: "Motivo delle modifiche",
      success: "Hai impostato la visibilità di {0} a {1}"
    }
  },
  author: {
    watching: "Visualizzando",
    stars: "Stelle",
    orgs: "Organizzazioni",
    viewOnForums: "Visualizza sul forum ",
    taglineLabel: "Tagline Utente",
    editTagline: "Modifica Tagline",
    memberSince: "Membro da {0}",
    numProjects: "Nessun progetto | {0} progetto | {0} progetti",
    addTagline: "Aggiungi una tagline",
    noOrgs: "{0} non fa parte di nessuna organizzazione. 😢",
    noWatching: "{0} non sta guardando nessun progetto. 😢",
    noStarred: "{0} non ha stellato nessun progetto. 😢",
    tooltips: {
      settings: "Impostazioni Utente",
      lock: "Blocca Account",
      unlock: "Sblocca Account",
      apiKeys: "Chiavi API",
      activity: "Attività Utente",
      admin: "Modifica Utente"
    },
    lock: {
      confirmLock: "Bloccare l'account di {0}?",
      confirmUnlock: "Sbloccare l'account di {0}?",
      successLock: "Account di {0} bloccato con successo",
      successUnlock: "Account di {0} sbloccato con successo"
    },
    org: {
      editAvatar: "Modifica avatar"
    },
    error: {
      invalidTagline: "Tagline invalida",
      invalidUsername: "Username invalido"
    }
  },
  linkout: {
    title: "Avvertenza Link Esterno",
    text: "Hai cliccato per un link esterno a \"{0}\". Se non vuoi visualizzare quella pagina, vai indietro. Altrimenti continua.",
    abort: "Torna indietro",
    continue: "Continua"
  },
  flags: {
    header: "Segnalazioni per",
    noFlags: "Nessuna segnalazione trovata",
    resolved: "Sì, da {0} il {1}",
    notResolved: 'No'
  },
  notes: {
    header: "Note per",
    noNotes: "Nessuna nota trovata",
    addNote: "Aggiungi nota",
    notes: "Note",
    placeholder: "Aggiungi una nota..."
  },
  stats: {
    title: "Statistiche",
    plugins: "Plugin",
    reviews: "Revisioni",
    uploads: "Caricamenti",
    downloads: "Download",
    totalDownloads: "Downloads Totali",
    unsafeDownloads: "Downloads Non Sicuri",
    flags: "Segnalazioni",
    openedFlags: "Segnalazioni Aperte",
    closedFlags: "Segnalazioni Chiuse"
  },
  health: {
    title: "Report Vitale Hangar",
    noTopicProject: "Nessuna discussion trovata",
    erroredJobs: "Processi falliti",
    jobText: "Tipo job: {0}, Tipo Errore: {1}, Accaduto: {2}",
    staleProjects: "Progetti in stallo",
    notPublicProjects: "Projects nascosti",
    noPlatform: "Nessuna piattaforma trovata",
    missingFileProjects: "File non trovato",
    empty: "Vuoto! Tutto perfetto!"
  },
  reviews: {
    headline: "{0} ha rilasciato questa versione il {1}",
    title: "Logs revisioni",
    projectPage: "Pagina Progetto",
    downloadFile: "Scarica File",
    startReview: "Inizia Revisione",
    stopReview: "Termina Revisione",
    approve: "Approva",
    approvePartial: "Approva Parzialmente",
    notUnderReview: "Questa versione non è sotto revisione",
    reviewMessage: "Messaggio Revisione",
    addMessage: "Aggiungi Messaggio",
    reopenReview: "Apri Revisione",
    undoApproval: "Cancella Approvazione",
    hideClosed: "Nascondi tutte le revisioni terminate",
    error: {
      noReviewStarted: "Non ci sono revisioni non finite per aggiungere un messaggio",
      notCorrectUser: "Non sei l'utente che ha iniziato la revisione.",
      cannotReopen: "Impossibile aprire questa revisione",
      onlyOneReview: "Non puoi avere più di una revisione",
      badUndo: "Puoi cancellare l'approvazione solo dopo averla approvata"
    },
    presets: {
      message: '{msg}',
      start: "{name} ha iniziato una revisione",
      stop: "{name} ha terminato la revisione: {msg}",
      reopen: "{name} ha riaperto una revisione",
      approve: "{name} ha approvato questa versione",
      approvePartial: "{name} ha approvato questa versione parzialmente",
      undoApproval: "{name} ha cancellato la sua approvazione",
      reviewTitle: "Revisione di {name}"
    },
    state: {
      ongoing: "In corso",
      stopped: "Fermata",
      approved: "Approvata",
      partiallyApproved: "Approvata Parzialmente",
      lastUpdate: "Ultimo Aggiornamento: {0}"
    }
  },
  apiKeys: {
    title: "Chiavi API",
    createNew: "Crea nuova chiave",
    existing: "Chiavi esistenti",
    name: "Nome",
    key: "Chiave",
    keyIdentifier: "Identificatore Chiave",
    permissions: "Permessi",
    delete: "Elimina",
    deleteKey: "Elimina Chiave",
    createKey: "Crea Chiave",
    noKeys: "Non ci sono chiavi. Creane una cliccando in alto a destra",
    success: {
      delete: "Hai eliminato la chiave {0}",
      create: "Hai creato la chiave {0}"
    },
    error: {
      notEnoughPerms: "Non ci sono abbastanza permessi per crearla",
      duplicateName: "Nome chiave duplicato"
    }
  },
  apiDocs: {
    title: "Documentazione API"
  },
  platformVersions: {
    title: "Configura Versioni Piattaforme",
    platform: "Piattaforma",
    versions: "Versioni",
    addVersion: "Aggiungi Versione",
    saveChanges: "Salva Modifiche",
    success: "Versioni piattaforme aggiornate"
  },
  flagReview: {
    title: "Segnalazioni",
    noFlags: "Non ci sono segnalazioni.",
    msgUser: "Messaggia utente",
    msgProjectOwner: "Messaggia proprietario",
    markResolved: "Imposta come risolto",
    line1: "{0} ha segnalato {1} su {2}",
    line2: "Motivo: {0}",
    line3: "Commento: {0}"
  },
  userActivity: {
    title: "Attività di {0}",
    reviews: "Revisioni",
    flags: "Segnalazioni",
    reviewApproved: "Revisione Approvata",
    flagResolved: "Segnalazione Risolta",
    error: {
      isOrg: "Impossibile mostrare l'attività di un'organizzazione"
    }
  },
  userAdmin: {
    title: "Modifica Utente",
    organizations: "Organizzazioni",
    organization: "Organizzazione",
    projects: "Progetti",
    project: "Progetto",
    owner: "Proprietario",
    role: "Ruolo",
    accepted: "Accettato",
    sidebar: "Altra Amministrazione",
    hangarAuth: "Profilo HangarAuth",
    forum: "Profilo Forum"
  },
  userActionLog: {
    title: "Log Azioni Utente",
    user: "Utente",
    address: "Indirizzo IP",
    time: "Tempo",
    action: "Azione",
    context: "Contesto",
    oldState: "Vecchio Stato",
    newState: "Nuovo Stato",
    markdownView: "Visualizza in Markdown",
    diffView: "Visualizza Differenze",
    types: {
      ProjectVisibilityChanged: "La visibilità del progetto è stata modificata",
      ProjectRename: "Il progetto è stato rinominato",
      ProjectFlagged: "Il progetto è stato segnalato",
      ProjectSettingsChanged: "Le impostazioni del progetto sono state modificate",
      ProjectIconChanged: "L'icona del progetto è stata modificata",
      ProjectFlagResolved: "La segnalazione è stata risolta",
      ProjectChannelCreated: "Un canale del progetto è stato creato",
      ProjectChannelEdited: "Un canale del progetto è stato modificato",
      ProjectChannelDeleted: "Un canale del progetto è stato eliminato",
      ProjectInvitesSent: "Gli inviti del progetto sono stati inviati",
      ProjectInviteDeclined: "Un invito al progetto è stato rifiutato",
      ProjectInviteUnaccepted: "Un invito al progetto non è stato accettato",
      ProjectMemberAdded: "Un membro del progetto è stato aggiunto",
      ProjectMembersRemoved: "I membri del progetto sono stati rimossi",
      ProjectMemberRolesChanged: "I ruoli dei membri del progetto sono stati modificati",
      ProjectPageCreated: "Una pagina del progetto è stata creata",
      ProjectPageDeleted: "Una pagina del progetto è stata eliminata",
      ProjectPageEdited: "Una pagina del progetto è stata modificata",
      VersionVisibilityChanged: "La visibilità della versione è stata modificata",
      VersionDeleted: "La versione è stata eliminata",
      VersionCreated: "Una nuova versione è stata creata",
      VersionDescriptionEdited: "La descrizione della versione è stata modificata",
      VersionReviewStateChanged: "Lo stato della revisione della versione è stata modificata",
      VersionPluginDependencyAdded: "Una dipendenza è stata aggiunta",
      VersionPluginDependencyEdited: "Una dipendenza è stata modificata",
      VersionPluginDependencyRemoved: "Una dipendenza è stata rimossa",
      VersionPlatformDependencyAdded: "Una dipendenza alla piattaforma è stata aggiunta",
      VersionPlatformDependencyRemoved: "Una dipendenza alla piattaforma è stata rimossa",
      UserTaglineChanged: "La tagline dell'utente è stata modificata",
      UserLocked: "Questo utente è bloccato",
      UserUnlocked: "Questo utente è sbloccato",
      UserApikeyCreated: "Una apikey è stata creata",
      UserApikeyDeleted: "Una apikey è stata eliminata",
      OrganizationInvitesSent: "Gli inviti all'organizzazione sono stati inviati",
      OrganizationInviteDeclined: "Un invito all'organizzazione è stato rifiutato",
      OrganizationInviteUnaccepted: "Un invito all'organizzazione non è stato accettato",
      OrganizationMemberAdded: "Un membro è stato aggiunto all'organizzazione",
      OrganizationMembersRemoved: "Un membro è stato rimosso dall'organizzazione",
      OrganizationMemberRolesChanged: "I ruoli dei membri dell'organizzazione sono stati aggiornati"
    }
  },
  versionApproval: {
    title: "Approvazione Versioni",
    inReview: "In revisione",
    approvalQueue: "Attesa Approvazione",
    queuedBy: "In fila da",
    status: "Stato",
    project: "Progetto",
    date: "Data",
    version: "Versione",
    started: "Iniziato: {0}",
    ended: "Terminato: {0}",
    statuses: {
      ongoing: "{0} in corso",
      stopped: "{0} terminati",
      approved: "{0} approvati"
    }
  },
  projectApproval: {
    title: "Approvazioni Progetti",
    sendForApproval: "Hai inviato il tuo progetto in approvazione",
    noProjects: "Nessun progetto",
    needsApproval: "Richiede Approvazione",
    awaitingChanges: "Attende Modifiche",
    description: "{0} ha richiesto modifiche ad {1}"
  },
  donate: {
    title: "Dona a {}",
    monthly: "Mensilmente",
    oneTime: "Una volta",
    selectAmount: "Seleziona un importo o inseriscine uno",
    legal: "Donando a {0} acconsenti a Y e che i tacos sono deliziosi",
    cta: "Dona",
    submit: "Dona {0}"
  },
  lang: {
    button: "Cambia Lingua",
    title: "Cambia Lingua",
    available: "Lingue Disponibili",
    hangarAuth: "Questa opzione cambia solamente la lingua del tuo browser corrente ( con un cookie ). Clicca qui per cambiare la tua lingua su paper auth per tutti i servizi di paper"
  },
  validation: {
    required: "{0} è richiesto",
    maxLength: "La lunghezza massima è di {0}",
    minLength: "La lunghezza minima è di {0}",
    invalidFormat: "{0} è invalido",
    invalidUrl: "Formato URL invalido"
  },
  prompts: {
    confirm: "Fallo!",
    changeAvatar: {
      title: "Cambia il tuo avatar!",
      message: "Benvenuto nella tua nuova organizzazione! Inizia cambiando il suo avatar cliccando su di esso."
    }
  },
  error: {
    userLocked: "Il tuo account è bloccato.",
    401: "Devi essere loggato per poter effettuare questa azione",
    403: "Non hai il permesso",
    404: "404 Non trovato",
    unknown: "Erorre sconosciuto"
  }
};
export default msgs;