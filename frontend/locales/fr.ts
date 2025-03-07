import { LocaleMessageObject } from 'vue-i18n';
const msgs: LocaleMessageObject = {
  general: {
    close: "Fermer",
    submit: "Soumettre",
    save: "Sauvegarder",
    comment: "Commenter",
    change: "Changer",
    donate: "Faire un don",
    continue: "Continuer",
    create: "Créer",
    delete: "Supprimer",
    or: "Ou",
    reset: "Réinitialiser",
    edit: "Éditer",
    required: "Requis",
    add: "Ajouter",
    name: "Nom",
    link: "Lier",
    send: "Envoyer",
    home: "Accueil",
    message: "Envoyer un message",
    refresh: "Rafraichir",
    confirm: "Confirmer",
    error: {
      invalidUrl: "Format d'URL invalide"
    }
  },
  hangar: {
    projectSearch: {
      query: "Rechercher parmi {0} projets, fièrement faits par la communauté...",
      relevanceSort: "Trier par pertinence",
      noProjects: "Il n'y a pas de projet. 😢",
      noProjectsFound: "0 projet trouvé. 😢"
    },
    subtitle: "Un dépôt de paquets Minecraft",
    sponsoredBy: "Sponsorisé par"
  },
  pages: {
    staffTitle: "Personnel",
    authorsTitle: "Auteurs",
    headers: {
      username: "Nom d'utilisateur",
      roles: "Rôles",
      joined: "Rejoint",
      projects: "Projets"
    }
  },
  nav: {
    login: "Se connecter",
    signup: "S'inscrire",
    user: {
      notifications: 'Notifications',
      flags: "Alertes",
      projectApprovals: "Approbations pour le projet",
      versionApprovals: "Approbations pour la version",
      stats: "Statistiques",
      health: "Santé d'Hangar",
      log: "Journal d'action utilisateur",
      platformVersions: "Versions de la plateforme",
      logout: "Se déconnecter",
      error: {
        loginFailed: "L'authentication a échoué",
        invalidUsername: "Nom d'utilisateur invalide",
        hangarAuth: "Impossible de se connecter à HangarAuth",
        loginDisabled: "La connexion est temporairement indisponible, veuillez réessayer plus tard",
        fakeUserEnabled: "Le faux utilisateur est activé. {0} est donc désactivé"
      }
    },
    createNew: "Créer un(e) nouveau/nouvelle...",
    new: {
      project: "Nouveau projet",
      organization: "Nouvelle organisation"
    },
    hangar: {
      home: "Page d'accueil",
      forums: 'Forums',
      code: 'Code',
      docs: "Documentations",
      javadocs: 'JavaDocs',
      hangar: 'Hangar (Plugins)',
      downloads: "Téléchargements",
      community: "Communauté"
    }
  },
  project: {
    stargazers: "Observateurs d'étoiles",
    noStargazers: "Il n'y a pas encore d'observateurs d'étoiles sur ce projet 😢",
    watchers: "Observateurs",
    noWatchers: "Il n'y a pas encore d'observateur sur projet 😢",
    members: "Membres",
    category: {
      info: "Catégorie: {0}",
      admin_tools: "Outils d'administration",
      chat: "Discuter",
      dev_tools: "Outils de développeur",
      economy: "Économie",
      gameplay: "Jouabilité",
      games: "Jeux",
      protection: "Protéger",
      role_playing: "Jeux de rôles",
      world_management: "Gestion du monde",
      misc: "Divers"
    },
    actions: {
      unwatch: "Ne plus suivre",
      watch: "Suivre",
      flag: "Alerter",
      star: "Etoiler",
      unstar: "Désétoiler",
      adminActions: "Actions de l'administrateur",
      flagHistory: "Historique des alertes ({0})",
      staffNotes: "Notes du personnel ({0})",
      userActionLogs: "Journaux d'actions utilisateur",
      forum: "Forums"
    },
    flag: {
      flagProject: "Alerte {0} ?",
      flagSend: "Signalé avec succès, merci d'avoir fait de cette communauté un endroit meilleur !",
      flagSent: "Alerte soumise pour examen",
      flags: {
        inappropriateContent: "Contenu inapproprié",
        impersonation: "Usurpation d'identité ou tromperie",
        spam: "Pourriel",
        malIntent: "Malveillance",
        other: "Autre"
      },
      error: {
        alreadyOpen: "Vous ne pouvez avoir qu'une seule alerte non résolue sur un projet",
        alreadyResolved: "Cette alerte est déjà résolue"
      }
    },
    tabs: {
      docs: "Documentations",
      versions: 'Versions',
      discuss: "Discussion",
      settings: "Paramètres",
      homepage: "Accueil",
      issues: "Problèmes",
      source: 'Source',
      support: "Soutien"
    },
    new: {
      step1: {
        title: "Accord de l'utilisateur",
        text: "Un projet contient vos téléchargements et la documentation pour votre plugin.<br>Avant de continuer ; veuillez consulter les <a href=\"#\">directives de soumission à Hangar.</a>",
        continue: "Accepter",
        back: "Annuler"
      },
      step2: {
        title: "Paramètres généraux",
        continue: "Continuer",
        back: "Retour",
        userSelect: "Créer comme...",
        projectName: "Nom du projet",
        projectSummary: "Résumé du projet",
        projectCategory: "Catégorie du projet"
      },
      step3: {
        title: "Paramètres additionnels",
        continue: "Continuer",
        back: "Retour",
        optional: "Optionnel",
        links: "Liens",
        homepage: "Page d'accueil",
        issues: "Traqueur de problèmes",
        source: "Code source",
        support: "Support externe",
        license: "Licence",
        type: "Type de texte",
        customName: "Nom",
        url: 'URL',
        seo: 'SEO',
        keywords: "Mots-clefs"
      },
      step4: {
        title: "Importer depuis Spigot",
        continue: "Continuer",
        back: "Retour",
        optional: "Optionnel",
        convert: "Convertir",
        saveAsHomePage: "Sauvegarder comme page d'accueil",
        convertLabels: {
          bbCode: "Coller votre BBCode ici",
          output: "Sortie Markdown"
        },
        preview: "Aperçu",
        tutorial: "Comment obtenir le BBCode",
        tutorialInstructions: {
          line1: "Pour obtenir le BBCode de votre projet Spigot, suivez les instructions :",
          line2: "1. Allez sur votre projet et cliquez sur \"Éditer la ressource\".",
          line3: "2. Cliquez sur le symbole de la clef dans l'éditeur de description.",
          line4: "3. Copiez-collez le nouveau contenu dans la zone de texte supérieure du convertisseur, modifiez la sortie si vous le souhaitez et cliquez sur Enregistrer !"
        }
      },
      step5: {
        title: "Finition",
        text: "Création..."
      },
      error: {
        create: "Il y a eu une erreur durant la création du projet",
        nameExists: "Un projet avec ce nom existe déjà",
        slugExists: "Un projet avec cette url réduite existe déjà",
        invalidName: "Ce nom contient des caractères invalides",
        tooLongName: "Le nom du projet est trop long",
        tooLongDesc: "La description du projet est trop longue",
        tooManyKeywords: "Le nom a trop de mots-clefs",
        noCategory: "Le projet doit avoir une catégorie",
        noDescription: "Le projet doit avoir une description"
      }
    },
    sendForApproval: "Envoyer pour approbation",
    info: {
      title: 'Information',
      publishDate: "Publier sur {0}",
      views: "0 vue | {0} vue | {0} vues",
      totalDownloads: "0 téléchargement au total | {0} téléchargement au total | {0} téléchargements au total",
      stars: "0 étoile | {0} étoile | {0} étoiles",
      watchers: "0 observateur | {0} observateur | {0} observateurs"
    },
    promotedVersions: "Versions promues",
    license: {
      link: "Sous license "
    },
    error: {
      star: "Echec de l'activation/désactivation des étoiles",
      watch: "Echec de l'activation/désactivation des observateurs"
    },
    settings: {
      title: "Paramètres",
      category: "Catégorie",
      categorySub: "Catégorisez votre projet dans l'une des 10 catégories. Catégoriser votre projet de manière appropriée permet aux gens de le trouver plus facilement.",
      keywords: "Mots-clefs",
      keywordsSub: "Ces mots spéciaux vont retourner votre projet quand les gens les ajouteront à leurs recherches.",
      homepage: "Page d'accueil",
      homepageSub: "Avoir une page d'accueil personnalisée pour votre projet vous permet de paraître plus correcr et plus officiel, et vous offre un autre endroit pour regrouper les informations sur votre projet.",
      issues: "Traqueur de problèmes",
      issuesSub: "Fournir un traqueur de problèmes aide vos utilisateurs à obtenir un support plus facilement et vous fournit une manière facile de traquer les bugs.",
      source: "Code source",
      sourceSub: "Supportez la communauté de développeurs en rendant votre projet open source !",
      support: "Support externe",
      supportSub: "Un lieu externe où vous pouvez offrir un support à vos utilisateurs. Cela peut être un forum, un serveur Discord ou autre chose.",
      license: "Licence",
      licenseSub: "Qu'est-ce que les gens peuvent (et ne peuvent pas) faire avec votre projet ?",
      forum: "Publier des messages sur les forums",
      forumSub: "Définir si des événements comme une nouvelle sortie devrait automatiquement créer un poste sur les forums",
      description: "Libellé",
      descriptionSub: "Une petite description de votre projet",
      icon: "Icône",
      iconSub: "Téléverser une image représentative de votre projet.",
      iconUpload: "Téléverser",
      iconReset: "Réinitialiser l'icône",
      apiKey: "Clefs API",
      apiKeySub: "Générer une clef de déploiement unique pour permettre le déploiement de build à partir de Gradle",
      apiKeyGenerate: "Générer",
      rename: "Renommer",
      renameSub: "Changer le nom de vos projets peut avoir des conséquences indésirables. Nous ne mettront en place aucune redirection.",
      delete: "Supprimer",
      deleteSub: "Une fois votre projet supprimé, il ne pourra pas être récupéré.",
      hardDelete: "Supprimer définitivement",
      hardDeleteSub: "Une fois votre projet supprimé, il ne pourra pas être récupéré. Pour de vrai cette cette fois...",
      save: "Sauvegarder les changements",
      optional: "(optionnel)",
      licenseCustom: "Nom personnalisé",
      licenseType: "Type de texte",
      licenseUrl: 'URL',
      donation: {
        enable: "Activer",
        enableSub: "Activer le formulaire de donations pour ce projet",
        email: "E-mail",
        emailSub: "L'adresse e-mail du compte Paypal qui doit recevoir les dons",
        defaultAmount: "Montant par défaut",
        defaultAmountSub: "Le montant présélectionné par défaut",
        oneTimeAmounts: "Montants des dons ponctuels",
        oneTimeAmountsSub: "Liste des options que vous souhaiteriez offrir aux utilisateurs pour des dons ponctuels. Les utilisateurs peuvent toujours entrer des montants personnalisés",
        monthlyAmounts: "Montants des dons mensuels",
        monthlyAmountsSub: "Liste des options que vous souhaiteriez offrir aux utilisateurs pour des dons mensuels. Les utilisateurs peuvent toujours entrer des montants personnalisés"
      },
      error: {
        invalidFile: "{0} est un type de fichier invalide",
        noFile: "Aucun fichier soumis",
        members: {
          invalidUser: "{0} n'est pas un utilisateur valide",
          alreadyInvited: "{0} est déjà invité dans ce projet",
          notMember: "{0} n'est pas un(e) membre du projet, donc vous ne pouvez pas éditer son rôle",
          invalidRole: "{0} n'a pas pu être ajouté/supprimé du projet"
        }
      },
      success: {
        changedIcon: "Icône du projet changée avec succès",
        resetIcon: "Icône du projet réinitialisée avec succès",
        rename: "Projet renommé {0} avec succès",
        softDelete: "Vous avez supprimé ce projet",
        hardDelete: "Vous avez complètement supprimé ce projet"
      },
      tabs: {
        general: "Général",
        optional: "Optionnel",
        management: "Gestion",
        donation: "Faire un don"
      }
    },
    discuss: {
      login: "Se connecter",
      toReply: "pour répondre à cette discussion",
      noTopic: "Il n'y a aucune discussion pour ce projet",
      send: "Réponse postée !"
    }
  },
  page: {
    plural: 'Pages',
    new: {
      title: "Créer une nouvelle page",
      error: {
        minLength: "Le contenu de la page est trop court",
        maxLength: "Le contenu de la page est trop long",
        duplicateName: "Une page avec ce nom existe déjà",
        invalidName: "Nom invalide",
        name: {
          maxLength: "Le nom de la page est trop long",
          minLength: "Nom de page trop court",
          invalidChars: "Le nom de la page contient des caractères invalides"
        },
        save: "Impossible de sauvegarder la page"
      },
      name: "Nom de la page",
      parent: "Page d'origine (optionnel)"
    },
    delete: {
      title: "Supprimer la page ?",
      text: "Êtes-vous bien sûr(e) de vouloir supprimer cette page ? Cela est irréversible."
    }
  },
  version: {
    new: {
      title: "Créer une version...",
      upload: "Téléverser un fichier",
      uploadNew: "Téléverser une nouvelle version",
      url: "Entrer une URL",
      form: {
        versionString: 'Version',
        fileName: "Nom du fichier",
        fileSize: "Taille du fichier",
        externalUrl: "URL externe",
        hangarProject: "Projet Hangar",
        channel: "Canal",
        addChannel: "Ajouter un canal",
        unstable: "Instable",
        recommended: "Recommandé",
        forumPost: "Poste Forum",
        release: {
          bulletin: "Bulletin de la version",
          desc: "Quoi de neuf dans cette version ?"
        },
        platforms: "Plateformes",
        dependencies: "Dépendances des plugins"
      },
      error: {
        metaNotFound: "Impossible de charger les métadonnées à partir du fichier téléversé",
        jarNotFound: "Impossible d'ouvrir le fichier jar",
        fileExtension: "Extension du fichier incorrecte",
        unexpected: "Une erreur inattendue est survenue",
        invalidVersionString: "Chaîne de version invalide trouvée",
        duplicateNameAndPlatform: "Une version avec ce nom compatible avec cette plateforme existe déjà",
        invalidNumOfPlatforms: "Nombre de plateforme invalide",
        duplicate: "Une version avec ce fichier existe déjà",
        noFile: "Impossible de trouver le fichier téléversé",
        mismatchedFileSize: "Les tailles du fichier ne correspondent pas",
        hashMismatch: "Les hachages du fichier ne correspondent pas",
        invalidPlatformVersion: "Version de Minecraft invalide pour la plateforme spécifiée",
        fileIOError: "Erreur d'E/S du fichier",
        unknown: "Une erreur inconnue est survenue",
        incomplete: "Fichier {0} du plugin manquant",
        noDescription: "Doit contenir une description",
        invalidPluginDependencyNamespace: "La dépendance du plugin déclarée a un espace de nom invalide",
        invalidName: "Nom de version invalide",
        channel: {
          noName: "Doit contenir un nom de canal spécifié",
          noColor: "Doit contenir une couleur spécifiée pour le canal"
        }
      }
    },
    edit: {
      platformVersions: "Éditer les versions de la plateforme : {0}",
      pluginDeps: "Éditer les dépendances du plugin : {0}",
      error: {
        noPlatformVersions: "Doit fournir au moins une version de plateforme valide",
        invalidVersionForPlatform: "{0} est une version invalide pour {1}",
        invalidProjectNamespace: "{0} n'est pas un espace de noms de projet valide"
      }
    },
    page: {
      subheader: "{0} diffusa cette version le {1}",
      dependencies: "Dépendances",
      platform: "Plateforme",
      required: "(requis)",
      adminMsg: "{0} approuva cette version le {1}",
      reviewLogs: "Journaux d'examen",
      reviewStart: "Commencer l'examen",
      setRecommended: "Définir comme recommandée",
      setRecommendedTooltip: "Définir cette version comme étant recommandée pour la plateforme {0}",
      delete: "Supprimer",
      hardDelete: "Supprimer (pour toujours)",
      restore: "Restaurer",
      download: "Télécharger",
      downloadExternal: "Télécharger (externe)",
      adminActions: "Actions administrateur",
      recommended: "Version recommandée",
      partiallyApproved: "Partiellement approuvé",
      approved: "Approuvé",
      userAdminLogs: "Journaux d'administration des utilisateurs",
      unsafeWarning: "Cette version n'a pas été examinée pour notre personnel de modération et pourrait pas être sûre à utiliser.",
      downloadUrlCopied: "Copié !",
      confirmation: {
        title: "Avertissement - {0} {1} par {2}",
        alert: "Cette version n'a pas encore été examinée pour notre personnel de modération et pourrait pas être sûre à utiliser.",
        disclaimer: "Avertissement : Nous déclinons toute responsabilité pour tout dommage causé à votre serveur ou système si vous choisissez de ne pas tenir compte de cet avertissement.",
        agree: "Le télécharger à mes propres risques et périls",
        deny: "Revenir en arrière"
      }
    },
    channels: "Canaux",
    editChannels: "Éditer les canaux",
    platforms: "Plateformes",
    error: {
      onlyOnePublic: "Vous n'avez seulement plus qu'une version publique restante"
    },
    success: {
      softDelete: "Vous avez supprimé cette version",
      hardDelete: "Vous avez complètement supprimé cette version",
      restore: "Vous avez restauré cette version",
      recommended: "Vous avez marqué cette version comme recommandée pour la plateforme {0}"
    }
  },
  channel: {
    modal: {
      titleNew: "Ajouter un nouveau canal",
      titleEdit: "Éditer le canal",
      name: "Nom du canal",
      color: "Couleur du canal",
      reviewQueue: "Exclure de la file d'attente d'examen de la modération ?",
      error: {
        invalidName: "Nom du canal invalide",
        maxChannels: "Ce projet a déjà le nombre maximum de canaux : {0}",
        duplicateColor: "Ce projet a déjà un canal avec cette couleur",
        duplicateName: "Ce projet a déjà un canal avec ce nom",
        tooLongName: "Le nom du canal est trop long",
        cannotDelete: "Vous ne pouvez pas supprimer ce canal"
      }
    },
    manage: {
      title: "Canaux de diffusion",
      subtitle: "Les canaux de diffusion représentent les niveaux de stabilité des versions d'un plugin... Un projet peut avoir jusqu'à cinq canaux de diffusion.",
      channelName: "Nom du canal",
      versionCount: "Numéro de la version",
      reviewed: "Examiné",
      edit: "Éditer",
      trash: "Poubelle",
      editButton: "Éditer",
      deleteButton: "Supprimer",
      add: "Ajouter un canal"
    }
  },
  organization: {
    new: {
      title: "Créer une nouvelle organisation",
      text: "Les organisations vous permettent de regrouper des utilisateurs afin d'établir une collaboration plus étroite entre eux au sein de vos projets sur Hangar.",
      name: "Nom de l'organisation",
      error: {
        duplicateName: "Un(e) utilisateur/organisation avec ce nom existe déjà",
        invalidName: "Nom d'organisation invalide",
        tooManyOrgs: "Vous ne pouvez créer au maximum {0} organisations",
        notEnabled: "Les organisations ne sont pas activées !",
        jsonError: "Erreur lors de l'analyse de la réponse JSON de HangarAuth",
        hangarAuthValidationError: "Erreur lors de la validation : {0}",
        unknownError: "Une erreur inconnue est survenue pendant la création de l'organisation"
      }
    },
    settings: {
      members: {
        invalidUser: "{0} n'est pas un utilisateur valide",
        alreadyInvited: "{0} est déjà invité dans l'organisation",
        notMember: "{0} n'est pas un membre de l'organisation, donc vous ne pouvez pas modifier son rôle",
        invalidRole: "{0} n'a pas pu être ajouté(e)/supprimé(e) de l'organisation"
      }
    }
  },
  form: {
    memberList: {
      addUser: "Ajouter un utilisateur...",
      create: "Créer",
      editUser: "Éditer un utilisateur",
      invitedAs: "(Invité en tant que {0})"
    }
  },
  notifications: {
    title: 'Notifications',
    invites: "Invitations",
    invited: "Vous avez été invité(e) à rejoindre {0}",
    inviteAccepted: "Vous avez accepté une invitation de {0}",
    readAll: "Tout marquer comme lu",
    unread: "Non lu",
    read: "Lu",
    all: "Toutes",
    invite: {
      all: "Toutes",
      projects: "Projets",
      organizations: "Organisations",
      btns: {
        accept: "Accepter",
        decline: "Décliner",
        unaccept: "Refuser"
      },
      msgs: {
        accept: "Vous avez rejoint {0}",
        decline: "Vous avez décliné l'invitation à rejoindre {0}",
        unaccept: "Vous avez quitté {0}"
      }
    },
    empty: {
      unread: "Vous n'avez aucune notification non lue.",
      read: "Vous n'avez aucune notification à lire.",
      all: "Vous n'avez aucune notification.",
      invites: "Vous n'avez aucune invitation."
    },
    project: {
      reviewed: "{0} {1} a été examiné et approuvé",
      reviewedPartial: "{0} {1} a été examiné et partiellement approuvé",
      newVersion: "Une nouvelle version est sortie pour {0}: {1}",
      invite: "Vous avez été invité à rejoindre le groupe {0} dans le projet {1}",
      inviteRescinded: "Votre invitation pour le groupe {0} dans le projet {1} a été annulée",
      removed: "Vous avez été retiré(e) du groupe {0} du projet {1}",
      roleChanged: "Vous avez été ajouté(e) au groupe {0} du projet {1}"
    },
    organization: {
      invite: "Vous avez été invité(e) à rejoindre le groupe {0} dans l'organisation {1",
      inviteRescinded: "Votre invitation pour le groupe {0} dans l'organisation {1} a été annulée",
      removed: "Vous avez été retiré(e) du groupe {0} de l'organisation {1}",
      roleChanged: "Vous avez été ajouté(e) au groupe {0} dans l'organisation {1}"
    }
  },
  visibility: {
    notice: {
      new: "Ce projet est nouveau et ne sera pas montré aux autres avant qu'une version ne soit téléversée. Si une version n'est pas téléversée après une longue période de temps, le projet sera supprimé.",
      needsChanges: "Ce projet nécessite des changements",
      needsApproval: "Vous avez envoyé le projet pour un examen",
      softDelete: "Projet supprimé par {0}"
    },
    name: {
      new: "Nouveau",
      public: "Publique",
      needsChanges: "Changements requis",
      needsApproval: "Approbation requise",
      softDelete: "Suppression douce"
    },
    changes: {
      version: {
        reviewed: "en raison d'examens approuvés"
      }
    },
    modal: {
      activatorBtn: "Actions de visibilité",
      title: "Changer la visibilité de {0}",
      reason: "Raison du changement",
      success: "Vous avez changé la visibilité de {0} à {1}"
    }
  },
  author: {
    watching: "Observe",
    stars: "Etoiles",
    orgs: "Organisations",
    viewOnForums: "Voir sur les forums ",
    taglineLabel: "Slogan utilisateur",
    editTagline: "Éditer le slogan",
    memberSince: "Membre depuis {0}",
    numProjects: "Aucun projet | {0} projet | {0} projets",
    addTagline: "Ajouter un slogan",
    noOrgs: "{0} ne fait partie d'aucune organisation. 😢",
    noWatching: "{0} n'observe aucun projet. 😢",
    noStarred: "{0} n'a étoilé aucun projet. 😢",
    tooltips: {
      settings: "Paramètres utilisateur",
      lock: "Verrouiller le compte",
      unlock: "Déverrouiller le compte",
      apiKeys: "Clefs API",
      activity: "Activité utilisateur",
      admin: "Administrateur d'utilisateur"
    },
    lock: {
      confirmLock: "Verrouiller le compte de {0} ?",
      confirmUnlock: "Déverrouiller le compte de {0} ?",
      successLock: "Le compte {0}a été verrouillé avec succès",
      successUnlock: "Le compte de {0}a bien été déverrouillé"
    },
    org: {
      editAvatar: "Éditer l'avatar"
    },
    error: {
      invalidTagline: "Slogan invalide",
      invalidUsername: "Nom d'utilisateur non valide"
    }
  },
  linkout: {
    title: "Avertissement des liens externes",
    text: "Vous avez cliqué sur un lien externe vers \"{0}\". Si vous ne souhaitiez pas visiter ce lien, veuillez revenir en arrière. Autrement, cliquez pour continuer.",
    abort: "Revenir en arrière",
    continue: "Continuer"
  },
  flags: {
    header: "Alertes pour",
    noFlags: "Aucune alerte trouvée",
    resolved: "Oui, par {0} le {1}",
    notResolved: "Non"
  },
  notes: {
    header: "Notes pour",
    noNotes: "Aucune note trouvée",
    addNote: "Ajouter une note",
    notes: 'Notes',
    placeholder: "Ajouter une note..."
  },
  stats: {
    title: "Statistiques",
    plugins: 'Plugins',
    reviews: "Examens",
    uploads: "Téléversements",
    downloads: "Téléchargements",
    totalDownloads: "Téléchargements totaux",
    unsafeDownloads: "Téléchargements non sécurisés",
    flags: "Alertes",
    openedFlags: "Alertes ouvertes",
    closedFlags: "Alertes fermées"
  },
  health: {
    title: "Rapport de santé d'Hangar",
    noTopicProject: "Sujet de discussion manquant",
    erroredJobs: "Travaux échoués",
    jobText: "Type de travail : {0}, Type d'erreur : {1}, Eu lieu : {2}",
    staleProjects: "Projets sensationnels",
    notPublicProjects: "Projets masqués",
    noPlatform: "Aucune plateforme détectée",
    missingFileProjects: "Fichier manquant",
    empty: "Vide ! Tout va bien !"
  },
  reviews: {
    headline: "{0} sorti cette version le {1}",
    title: "Journaux de l'examen",
    projectPage: "Page du projet",
    downloadFile: "Télécharger le fichier",
    startReview: "Commencer un examen",
    stopReview: "Arrêter un examen",
    approve: "Approuver",
    approvePartial: "Approuver partiellement",
    notUnderReview: "Cette version n'est pas sous examen",
    reviewMessage: "Examiner le message",
    addMessage: "Ajouter un message",
    reopenReview: "Rouvrir l'examen",
    undoApproval: "Annuler l'approbation",
    hideClosed: "Masquer tous les examens terminés",
    error: {
      noReviewStarted: "Il n'y a pas d'examen inachevé pour ajouter un message à",
      notCorrectUser: "Vous n'êtes pas l'utilisateur qui a commencé cet examen",
      cannotReopen: "Impossible de rouvrir cet examen",
      onlyOneReview: "Impossible d'avoir plus d'un examen pour une version",
      badUndo: "Annuler l'approbation n'est possible qu'après un approbation"
    },
    presets: {
      message: '{msg}',
      start: "{name} commença un examen",
      stop: "{name} stoppa un examen : {msg}",
      reopen: "{name} rouvra un examen",
      approve: "{name} approuva cette version",
      approvePartial: "{name} approuva partiellement cette version",
      undoApproval: "{name} a annulé son approbation",
      reviewTitle: "Examen de {name}"
    },
    state: {
      ongoing: "En cours",
      stopped: "Stoppé",
      approved: "Approuvé",
      partiallyApproved: "Partiellement approuvé",
      lastUpdate: "Mise à jour la dernière fois : {0}"
    }
  },
  apiKeys: {
    title: "Clefs API",
    createNew: "Créer une nouvelle clef",
    existing: "Clefs existantes",
    name: "Nom",
    key: "Clef",
    keyIdentifier: "Identifiant de la clef",
    permissions: 'Permissions',
    delete: "Supprimer",
    deleteKey: "Supprimer la clef",
    createKey: "Créer une clef",
    noKeys: "Il n'y a pas de clefs d'api pour l'instant. Vous pouvez en créer une sur la partie droite",
    success: {
      delete: "Vous avez supprimé la clef : {0}",
      create: "Vous avez créé la clef : {0}"
    },
    error: {
      notEnoughPerms: "Pas assez de permissions pour créer cette clef",
      duplicateName: "Le nom de la clef est en double"
    }
  },
  apiDocs: {
    title: "Documentations de l'API"
  },
  platformVersions: {
    title: "Configurer les versions de la platforme",
    platform: "Plateforme",
    versions: 'Versions',
    addVersion: "Ajouter une version",
    saveChanges: "Sauvegarder les changements",
    success: "Versions de la plateforme mise à jour"
  },
  flagReview: {
    title: "Alertes",
    noFlags: "Il n'y a pas d'alerte à examiner.",
    msgUser: "Message utilisateur",
    msgProjectOwner: "Propriétaire du message",
    markResolved: "Marqué comme étant résolu",
    line1: "{0} signala {1} le {2}",
    line2: "Raison : {0}",
    line3: "Commentaire : {0}"
  },
  userActivity: {
    title: "Activité de {0}",
    reviews: "Examens",
    flags: "Alertes",
    reviewApproved: "Examen approuvé",
    flagResolved: "Alertes résolues",
    error: {
      isOrg: "Impossible d'afficher l'activité pour les utilisateurs de l'organisation"
    }
  },
  userAdmin: {
    title: "Modifier l'utilisateur",
    organizations: "Organisations",
    organization: "Organisation",
    projects: "Projets",
    project: "Projet",
    owner: "Propriétaire",
    role: "Rôle",
    accepted: "Accepté",
    sidebar: "Autre administration",
    hangarAuth: "Profil HangarAuth",
    forum: "Profil du forum"
  },
  userActionLog: {
    title: "Journal des actions de l'utilisateur",
    user: "Utilisateur",
    address: "Adresse IP",
    time: "Temps",
    action: 'Action',
    context: "Contexte",
    oldState: "Ancien état",
    newState: "Nouvel état",
    markdownView: "Vue Markdown",
    diffView: "Vue Diff",
    types: {
      ProjectVisibilityChanged: "La visibilité du projet a été modifiée",
      ProjectRename: "Le projet a été renommé",
      ProjectFlagged: "Le projet a été signalé",
      ProjectSettingsChanged: "Les paramètres du projet ont été changés",
      ProjectIconChanged: "L'icône du projet a été changée",
      ProjectFlagResolved: "L'alerte a été résolue",
      ProjectChannelCreated: "Un canal de projet a été créé",
      ProjectChannelEdited: "Un canal de projet a été édité",
      ProjectChannelDeleted: "Un canal de projet a été supprimé",
      ProjectInvitesSent: "Les invitations au projet ont été envoyées",
      ProjectInviteDeclined: "Une invitation au projet a été déclinée",
      ProjectInviteUnaccepted: "Une invitation au projet n'a pas été acceptée",
      ProjectMemberAdded: "Un membre a été ajouté au projet",
      ProjectMembersRemoved: "Les membres du projet furent supprimés",
      ProjectMemberRolesChanged: "Les membres du projet ont vu leurs rôles mis à jour",
      ProjectPageCreated: "Une page de projet a été créée",
      ProjectPageDeleted: "Une page de projet a été supprimée",
      ProjectPageEdited: "Une page de projet a été éditée",
      VersionVisibilityChanged: "La visibilité de la version a été changée",
      VersionDeleted: "La version a été supprimée",
      VersionCreated: "Une nouvelle version a été téléversée",
      VersionDescriptionEdited: "La description de la version a été modifiée",
      VersionReviewStateChanged: "Le status de l'examen de la version a changé",
      VersionPluginDependencyAdded: "Une dépendance du plugin a été ajoutée",
      VersionPluginDependencyEdited: "Une dépendance du plugin a été éditée",
      VersionPluginDependencyRemoved: "Une dépendance du plugin a été supprimée",
      VersionPlatformDependencyAdded: "Une dépendance de plateforme a été ajoutée",
      VersionPlatformDependencyRemoved: "Une dépendance de plateforme a été supprimée",
      UserTaglineChanged: "Le slogan de l'utilisateur a changé",
      UserLocked: "Cet utilisateur est verrouillé",
      UserUnlocked: "Cet utilisateur est débloqué",
      UserApikeyCreated: "Une clef api a été créée",
      UserApikeyDeleted: "Une clef api a été supprimée",
      OrganizationInvitesSent: "Les invitations de l'organisation ont été envoyées",
      OrganizationInviteDeclined: "Une invitation de l'organisation a été déclinée",
      OrganizationInviteUnaccepted: "Une invitation de l'organisation n'a pas été acceptée",
      OrganizationMemberAdded: "Un membre a été ajouté à l'organisation",
      OrganizationMembersRemoved: "Les membres de l'organisation ont été retirés",
      OrganizationMemberRolesChanged: "Les membres de l'organisation ont vu leurs rôles mis à jour"
    }
  },
  versionApproval: {
    title: "Approbations de versions",
    inReview: "En cours d'examen",
    approvalQueue: "File d'attente d'approbation",
    queuedBy: "Mise en file d'attente par",
    status: "Statut",
    project: "Projet",
    date: 'Date',
    version: 'Version',
    started: "Commencé : {0}",
    ended: "Terminé : {0}",
    statuses: {
      ongoing: "{0} en cours",
      stopped: "{0} stoppé",
      approved: "{0} approuvé"
    }
  },
  projectApproval: {
    title: "Approbations de projet",
    sendForApproval: "Vous avez envoyé le projet pour l'approbation",
    noProjects: "Aucun projet",
    needsApproval: "Approbation requise",
    awaitingChanges: "En attente de changements",
    description: "{0} a demandé des changements sur {1}"
  },
  donate: {
    title: "Donner à {}",
    monthly: "Mensuellement",
    oneTime: "Ponctuel",
    selectAmount: "Sélectionner un montant ci-dessus ou entrer un montant ci-dessous",
    legal: "En donnant à {0} vous agréez à Y et que les saucissons sont délicieux",
    cta: "Donner",
    submit: "Donner {0}"
  },
  lang: {
    button: "Changer de langue",
    title: "Changer de langue",
    available: "Langues disponibles",
    hangarAuth: "Ceci ne change que la langue pour votre navigateur actuel (avec un cookie). Cliquer ici pour changer votre langue sur PaperAuth pour tous les services Paper"
  },
  validation: {
    required: "{0} est requise",
    maxLength: "La longueur maximale est de {0}",
    minLength: "La longueur minimale est de {0}",
    invalidFormat: "{0} est invalide",
    invalidUrl: "Format d'URL invalide"
  },
  prompts: {
    confirm: "Compris !",
    changeAvatar: {
      title: "Changer votre avatar !",
      message: "Bienvenue dans votre nouvelle organisation ! Commencez par changer son avatar en cliquant dessus."
    }
  },
  error: {
    userLocked: "Votre compte est verrouillé.",
    401: "Vous devez être identifié(e) pour ceci",
    403: "Vous n'avez pas la permission de faire cela",
    404: "404 Non trouvé",
    unknown: "Une erreur est survenue"
  }
};
export default msgs;