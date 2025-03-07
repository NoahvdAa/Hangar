import { LocaleMessageObject } from 'vue-i18n';
const msgs: LocaleMessageObject = {
  general: {
    close: 'Close',
    submit: 'Submit',
    save: 'Save',
    comment: 'Comment',
    change: 'Change',
    donate: 'Donate',
    continue: 'Continue',
    create: 'Create',
    delete: 'Delete',
    or: 'Or',
    reset: 'Reset',
    edit: 'Edit',
    required: 'Required',
    add: 'Add',
    name: 'Name',
    link: 'Link',
    send: 'Send',
    home: 'Home',
    message: 'Message',
    refresh: 'Refresh',
    confirm: 'Confirm',
    error: {
      invalidUrl: 'Invalid URL format'
    }
  },
  hangar: {
    projectSearch: {
      query: 'Search in {0} projects, proudly made by the community...',
      relevanceSort: 'Sort by relevance',
      noProjects: 'There are no projects. 😢',
      noProjectsFound: 'Found 0 projects. 😢'
    },
    subtitle: 'A Minecraft package repository',
    sponsoredBy: 'Sponsored by'
  },
  pages: {
    staffTitle: 'Staff',
    authorsTitle: 'Authors',
    headers: {
      username: 'Username',
      roles: 'Roles',
      joined: 'Joined',
      projects: 'Projects'
    }
  },
  nav: {
    login: 'Login',
    signup: 'Signup',
    user: {
      notifications: 'Notifications',
      flags: 'Flags',
      projectApprovals: 'Project approvals',
      versionApprovals: 'Version approvals',
      stats: 'Stats',
      health: 'Hangar Health',
      log: 'User Action Log',
      platformVersions: 'Platform Versions',
      logout: 'Sign out',
      error: {
        loginFailed: 'Authentication Failed',
        invalidUsername: 'Invalid Username',
        hangarAuth: "Couldn't connect to HangarAuth",
        loginDisabled: 'Login is temporarily unavailable, please try again later',
        fakeUserEnabled: 'Fake user is enabled. {0} is therefore disabled'
      }
    },
    createNew: 'Create new...',
    new: {
      project: 'New Project',
      organization: 'New Organization'
    },
    hangar: {
      home: 'Homepage',
      forums: 'Forums',
      code: 'Code',
      docs: 'Docs',
      javadocs: 'JavaDocs',
      hangar: 'Hangar (Plugins)',
      downloads: 'Downloads',
      community: 'Community'
    }
  },
  project: {
    stargazers: 'Stargazers',
    noStargazers: 'There are no stargazers on this project yet 😢',
    watchers: 'Watchers',
    noWatchers: 'There are no watchers on this project yet 😢',
    members: 'Members',
    category: {
      info: 'Category',
      admin_tools: 'Admin Tools',
      chat: 'Chat',
      dev_tools: 'Developer Tools',
      economy: 'Economy',
      gameplay: 'Gameplay',
      games: 'Games',
      protection: 'Protection',
      role_playing: 'Role Playing',
      world_management: 'World Management',
      misc: 'Miscellaneous'
    },
    actions: {
      unwatch: 'Unwatch',
      watch: 'Watch',
      flag: 'Flag',
      star: 'Star',
      unstar: 'Unstar',
      adminActions: 'Admin Actions',
      flagHistory: 'Flag history ({0})',
      staffNotes: 'Staff notes ({0})',
      userActionLogs: 'User Action Logs',
      forum: 'Forum'
    },
    flag: {
      flagProject: 'Flag {0}?',
      flagSend: 'Successfully flagged, thanks for making this community a better place!',
      flagSent: 'Flag submitted for review',
      flags: {
        inappropriateContent: 'Inappropriate Content',
        impersonation: 'Impersonation or Deception',
        spam: 'Spam',
        malIntent: 'Malicious Intent',
        other: 'Other'
      },
      error: {
        alreadyOpen: 'You can only have 1 unresolved flag on a project',
        alreadyResolved: 'This flag is already resolved'
      }
    },
    tabs: {
      docs: 'Docs',
      versions: 'Versions',
      discuss: 'Discuss',
      settings: 'Settings',
      homepage: 'Homepage',
      issues: 'Issues',
      source: 'Source',
      support: 'Support'
    },
    new: {
      step1: {
        title: 'User Agreement',
        text: 'A project contains your downloads and the documentation for your plugin.<br>Before continuing, please review the <a href="#">Hangar Submission Guidelines.</a>',
        continue: 'Agree',
        back: 'Abort'
      },
      step2: {
        title: 'Basic Settings',
        continue: 'Continue',
        back: 'Back',
        userSelect: 'Create as...',
        projectName: 'Project name',
        projectSummary: 'Project Summary',
        projectCategory: 'Project Category'
      },
      step3: {
        title: 'Additional Settings',
        continue: 'Continue',
        back: 'Back',
        optional: 'Optional',
        links: 'Links',
        homepage: 'Homepage',
        issues: 'Issue Tracker',
        source: 'Source Code',
        support: 'External Support',
        license: 'License',
        type: 'Type',
        customName: 'Name',
        url: 'URL',
        seo: 'SEO',
        keywords: 'Keywords'
      },
      step4: {
        title: 'Import from Spigot',
        continue: 'Continue',
        back: 'Back',
        optional: 'Optional',
        convert: 'Convert',
        saveAsHomePage: 'Save as Home Page',
        convertLabels: {
          bbCode: 'Paste your BBCode here',
          output: 'Markdown Output'
        },
        preview: 'Preview',
        tutorial: 'How to get the BBCode',
        tutorialInstructions: {
          line1: 'To get the BBCode of your Spigot project, do the following:',
          line2: '1. Go to your project and click on "Edit Resource".',
          line3: '2. Click on the wrench symbol in the description editor.',
          line4: '3. Copy paste the new contents into the upper converter textbox, do changes to the output if you like, and hit save!'
        }
      },
      step5: {
        title: 'Finishing',
        text: 'Creating...'
      },
      error: {
        create: 'There was an error creating the project',
        nameExists: 'A project with this name already exists',
        slugExists: 'A project with this slug already exists',
        invalidName: 'This name contains invalid characters',
        tooLongName: 'Project name is too long',
        tooLongDesc: 'Project description is too long',
        tooManyKeywords: 'Project has too many keywords',
        noCategory: 'Project must have a category',
        noDescription: 'Project must have a description'
      }
    },
    sendForApproval: 'Send for approval',
    info: {
      title: 'Information',
      publishDate: 'Published on',
      views: 'Views | View | Views',
      totalDownloads: 'Total downloads | Total download | Total downloads',
      stars: 'Stars | Star | Stars',
      watchers: 'Watchers | Watcher | Watchers'
    },
    promotedVersions: 'Promoted Versions',
    license: {
      link: 'Licensed under '
    },
    error: {
      star: 'Could not toggle starred',
      watch: 'Could not toggle watched'
    },
    settings: {
      title: 'Settings',
      category: 'Category',
      categorySub: 'Categorize your project into one of 10 categories. Appropriately categorizing your project makes it easier for people to find.',
      keywords: 'Keywords',
      keywordsSub: 'These are special words that will return your project when people add them to their searches.',
      homepage: 'Homepage',
      homepageSub: 'Having a custom homepage for your project helps you look more proper, official, and gives you another place to gather information about your project.',
      issues: 'Issue tracker',
      issuesSub: 'Providing an issue tracker helps your users get support more easily and provides you with an easy way to track bugs.',
      source: 'Source code',
      sourceSub: 'Support the community of developers by making your project open source!',
      support: 'External support',
      supportSub: 'An external place where you can offer support to your users. Could be a forum, a Discord server, or somewhere else.',
      license: 'License',
      licenseSub: 'What can people do (and not do) with your project?',
      forum: 'Create posts on the forums',
      forumSub: 'Sets if events like a new release should automatically create a post on the forums',
      description: 'Description',
      descriptionSub: 'A short description of your project',
      icon: 'Icon',
      iconSub: 'Upload an image representative of your project.',
      iconUpload: 'Upload',
      iconReset: 'Reset Icon',
      apiKey: 'API Keys',
      apiKeySub: 'Generate a unique deployment key to enable build deployment from Gradle',
      apiKeyGenerate: 'Generate',
      rename: 'Rename',
      renameSub: 'Changing your projects name can have undesired consequences. We will not setup any redirects.',
      delete: 'Delete',
      deleteSub: 'Once you delete a project, it cannot be recovered.',
      hardDelete: 'Hard Delete',
      hardDeleteSub: 'Once you delete a project, it cannot be recovered. For real this time...',
      save: 'Save changes',
      optional: '(optional)',
      licenseCustom: 'Custom Name',
      licenseType: 'Type',
      licenseUrl: 'URL',
      donation: {
        enable: 'Enable',
        enableSub: 'Enable the donation form for this project',
        email: 'Email',
        emailSub: 'The email address of the paypal account, that should receive the donations',
        defaultAmount: 'Default Amount',
        defaultAmountSub: 'The preselected default amount',
        oneTimeAmounts: 'One-Time Amounts',
        oneTimeAmountsSub: 'List of the options you want to give users for one time donations. Users can always enter custom amounts',
        monthlyAmounts: 'Monthly Amounts',
        monthlyAmountsSub: 'List of the options you want to give users for monthly donations. Users can always enter custom amounts'
      },
      error: {
        invalidFile: '{0} is an invalid file type',
        noFile: 'No file submitted',
        members: {
          invalidUser: '{0} is not a valid user',
          alreadyInvited: '{0} is already invited to the project',
          notMember: '{0} is not a member of the project, therefore you cannot edit their role',
          invalidRole: '{0} cannot be added/removed from the project'
        }
      },
      success: {
        changedIcon: 'Successfully changed the project icon',
        resetIcon: 'Successfully reset the project icon',
        rename: 'Successfully renamed the project to {0}',
        softDelete: 'You have deleted this project',
        hardDelete: 'You have fully deleted this project'
      },
      tabs: {
        general: 'General',
        optional: 'Optional',
        management: 'Management',
        donation: 'Donation'
      }
    },
    discuss: {
      login: 'Log in',
      toReply: 'to reply to this discussion',
      noTopic: 'There is no discussion for this project',
      send: 'Reply posted!'
    }
  },
  page: {
    plural: 'Pages',
    new: {
      title: 'Create a new page',
      error: {
        minLength: 'Page contents are too short',
        maxLength: 'Page contents are too long',
        duplicateName: 'A page with that name already exists',
        invalidName: 'Invalid name',
        name: {
          maxLength: 'Page name too long',
          minLength: 'Page name too short',
          invalidChars: 'Page name contained invalid characters'
        },
        save: 'Unable to save page'
      },
      name: 'Page Name',
      parent: 'Parent Page (optional)'
    },
    delete: {
      title: 'Delete page?',
      text: 'Are you sure you want to delete this page? This cannot be undone.'
    }
  },
  version: {
    new: {
      title: 'Create version...',
      upload: 'Upload File',
      uploadNew: 'Upload a new Version',
      url: 'Enter a URL',
      form: {
        versionString: 'Version',
        fileName: 'File name',
        fileSize: 'File size',
        externalUrl: 'External URL',
        hangarProject: 'Hangar Project',
        channel: 'Channel',
        addChannel: 'Add Channel',
        unstable: 'Unstable',
        recommended: 'Recommended',
        forumPost: 'Forum Post',
        release: {
          bulletin: 'Release Bulletin',
          desc: "What's new in this release?"
        },
        platforms: 'Platforms',
        dependencies: 'Plugin Dependencies'
      },
      error: {
        metaNotFound: 'Could not load metadata from uploaded file',
        jarNotFound: 'Could not open jar file',
        fileExtension: 'Incorrect file extension',
        unexpected: 'An unexpected error occurred',
        invalidVersionString: 'Invalid version string found',
        duplicateNameAndPlatform: 'A version with this name and compatible platform already exists',
        invalidNumOfPlatforms: 'Invalid number of platforms',
        duplicate: 'A version with this file already exists',
        noFile: 'Could not find uploaded file',
        mismatchedFileSize: 'File sizes do not match',
        hashMismatch: 'File hashes do not match',
        invalidPlatformVersion: 'Invalid MC version for a platform specified',
        fileIOError: 'File IO Error',
        unknown: 'An unknown error has occurred',
        incomplete: 'Plugin file missing {0}',
        noDescription: 'Must have a description',
        invalidPluginDependencyNamespace: 'Declared plugin dependency has an invalid project namespace',
        invalidName: 'Invalid version name',
        channel: {
          noName: 'Must have a channel name specified',
          noColor: 'Must have a channel color specified'
        }
      }
    },
    edit: {
      platformVersions: 'Edit Platform Versions: {0}',
      pluginDeps: 'Edit Plugin Dependencies: {0}',
      error: {
        noPlatformVersions: 'Must supply at least one valid platform version',
        invalidVersionForPlatform: '{0} is an invalid version for {1}',
        invalidProjectNamespace: '{0} is not a valid project namespace'
      }
    },
    page: {
      subheader: '{0} released this version on {1}',
      dependencies: 'Dependencies',
      platform: 'Platform',
      required: '(required)',
      adminMsg: '{0} approved this version on {1}',
      reviewLogs: 'Review logs',
      reviewStart: 'Start review',
      setRecommended: 'Set as Recommended',
      setRecommendedTooltip: 'Set this version as recommended for {0} platform',
      delete: 'Delete',
      hardDelete: 'Delete (forever)',
      restore: 'Restore',
      download: 'Download',
      downloadExternal: 'Download External',
      adminActions: 'Admin actions',
      recommended: 'Recommended version',
      partiallyApproved: 'Partially approved',
      approved: 'Approved',
      userAdminLogs: 'User Admin Logs',
      unsafeWarning: 'This version has not been reviewed by our moderation staff and may not be safe for download.',
      downloadUrlCopied: 'Copied!',
      confirmation: {
        title: 'Warning - {0} {1} by {2}',
        alert: 'This version has not been reviewed by our moderation staff yet and may not be safe to use.',
        disclaimer: 'Disclaimer: We disclaim all responsibility for any harm to your server or system should you choose not to heed this warning.',
        agree: 'Download it at my own risk',
        deny: 'Go back'
      }
    },
    channels: 'Channels',
    editChannels: 'Edit Channels',
    platforms: 'Platforms',
    error: {
      onlyOnePublic: 'You only have 1 public version left'
    },
    success: {
      softDelete: 'You have deleted this version',
      hardDelete: 'You have fully deleted this version',
      restore: 'You have restored this version',
      recommended: 'You have marked this version as recommended for {0} platform'
    }
  },
  channel: {
    modal: {
      titleNew: 'Add a new channel',
      titleEdit: 'Edit channel',
      name: 'Channel Name',
      color: 'Channel Color',
      reviewQueue: 'Exclude from moderation review queue?',
      error: {
        invalidName: 'Invalid channel name',
        maxChannels: 'This project already has the maximum number of channels: {0}',
        duplicateColor: 'This project already has a channel with this color',
        duplicateName: 'This project already has a channel with this name',
        tooLongName: 'Channel name is too long',
        cannotDelete: 'You cannot delete this channel'
      }
    },
    manage: {
      title: 'Release channels',
      subtitle: 'Release channels represent the state of a plugin release. A project may have up to five release channels.',
      channelName: 'Channel Name',
      versionCount: 'Version Count',
      reviewed: 'Reviewed',
      edit: 'Edit',
      trash: 'Trash',
      editButton: 'Edit',
      deleteButton: 'Delete',
      add: 'Add Channel'
    }
  },
  organization: {
    new: {
      title: 'Create a new Organization',
      text: 'Organizations allow you to group users and provide closer collaboration between them within your projects on Hangar.',
      name: 'Organization Name',
      error: {
        duplicateName: 'An organization/user with that name already exists',
        invalidName: 'Invalid organization name',
        tooManyOrgs: 'You can only create a maximum of {0} organizations',
        notEnabled: 'Organizations are not enabled!',
        jsonError: 'Error parsing the JSON response from HangarAuth',
        hangarAuthValidationError: 'Validation Error: {0}',
        unknownError: 'Unknown error while creating organization'
      }
    },
    settings: {
      members: {
        invalidUser: '{0} is not a valid user',
        alreadyInvited: '{0} is already invited to the organization',
        notMember: '{0} is not a member of the organization, therefore you cannot edit their role',
        invalidRole: '{0} cannot be added/removed from the organization'
      }
    }
  },
  form: {
    memberList: {
      addUser: 'Add User...',
      create: 'Create',
      editUser: 'Edit User',
      invitedAs: '(Invited as {0})'
    }
  },
  notifications: {
    title: 'Notifications',
    invites: 'Invites',
    invited: 'You have been invited to join the {0}',
    inviteAccepted: 'You have accepted an invitation to the {0}',
    readAll: 'Mark all as read',
    unread: 'Unread',
    read: 'Read',
    all: 'All',
    invite: {
      all: 'All',
      projects: 'Projects',
      organizations: 'Organizations',
      btns: {
        accept: 'Accept',
        decline: 'Decline',
        unaccept: 'Unaccept'
      },
      msgs: {
        accept: 'You have joined {0}',
        decline: 'You have declined to join {0}',
        unaccept: 'You have left {0}'
      }
    },
    empty: {
      unread: 'You have no unread notifications.',
      read: 'You have no read notifications.',
      all: 'You have no notifications.',
      invites: 'You have no invites'
    },
    project: {
      reviewed: '{0} {1} has been reviewed and is approved',
      reviewedPartial: '{0} {1} has been reviewed and is partially approved',
      newVersion: 'A new version has been released for {0}: {1}',
      invite: 'You have been invited to join the group {0} on the project {1}',
      inviteRescinded: 'Your invite to you the group {0} in the project {1} has been rescinded',
      removed: 'You have been removed from the group {0} in the project {1}',
      roleChanged: 'You have been added to the {0} group in the project {1}'
    },
    organization: {
      invite: 'You have been invited to join the group {0} in the organization {1}',
      inviteRescinded: 'Your invite to you the group {0} in the organization {1} has been rescinded',
      removed: 'You have been removed from the group {0} in the organization {1}',
      roleChanged: 'You have been added to the {0} group in the organization {1}'
    }
  },
  visibility: {
    notice: {
      new: 'This project is new, and will not be shown to others until a version has been uploaded. If a version is not uploaded over a longer time the project will be deleted.',
      needsChanges: 'This project requires changes',
      needsApproval: 'You have sent the project for review',
      softDelete: 'Project deleted by {0}'
    },
    name: {
      new: 'New',
      public: 'Public',
      needsChanges: 'Needs Changes',
      needsApproval: 'Needs Approval',
      softDelete: 'Soft Delete'
    },
    changes: {
      version: {
        reviewed: 'due to approved reviews'
      }
    },
    modal: {
      activatorBtn: 'Visibility Actions',
      title: "Change {0}'s visibility",
      reason: 'Reason for change',
      success: "You changed the {0}'s visibility to {1}"
    }
  },
  author: {
    watching: 'Watching',
    stars: 'Stars',
    orgs: 'Organizations',
    viewOnForums: 'View on forums ',
    taglineLabel: 'User Tagline',
    editTagline: 'Edit Tagline',
    memberSince: 'A member since {0}',
    numProjects: 'No projects | {0} project | {0} projects',
    addTagline: 'Add a tagline',
    noOrgs: '{0} is not part of any organizations. 😢',
    noWatching: '{0} is not watching any projects. 😢',
    noStarred: '{0}  has not starred any projects. 😢',
    tooltips: {
      settings: 'User Settings',
      lock: 'Lock Account',
      unlock: 'Unlock Account',
      apiKeys: 'API Keys',
      activity: 'User Activity',
      admin: 'User Admin'
    },
    lock: {
      confirmLock: "Lock {0}'s account?",
      confirmUnlock: "Unlock {0}'s account?",
      successLock: "Successfully locked {0}'s account",
      successUnlock: "Successfully unlocked {0}'s account"
    },
    org: {
      editAvatar: 'Edit avatar'
    },
    error: {
      invalidTagline: 'Invalid tagline',
      invalidUsername: 'Invalid username'
    }
  },
  linkout: {
    title: 'External Link Warning',
    text: 'You have clicked on an external link to "{0}". If you did not intend to visit this link, please go back. Otherwise, click continue.',
    abort: 'Go Back',
    continue: 'Continue'
  },
  flags: {
    header: 'Flags for',
    noFlags: 'No flags found',
    resolved: 'Yes, by {0} on {1}',
    notResolved: 'No'
  },
  notes: {
    header: 'Notes for',
    noNotes: 'No notes found',
    addNote: 'Add note',
    notes: 'Notes',
    placeholder: 'Add a note...'
  },
  stats: {
    title: 'Stats',
    plugins: 'Plugins',
    reviews: 'Reviews',
    uploads: 'Uploads',
    downloads: 'Downloads',
    totalDownloads: 'Total Downloads',
    unsafeDownloads: 'Unsafe Downloads',
    flags: 'Flags',
    openedFlags: 'Opened Flags',
    closedFlags: 'Closed Flags'
  },
  health: {
    title: 'Hangar Health Report',
    noTopicProject: 'Missing discussion topic',
    erroredJobs: 'Failed jobs',
    jobText: 'Job type: {0}, Error Type: {1}, Happened: {2}',
    staleProjects: 'Stale projects',
    notPublicProjects: 'Hidden projects',
    noPlatform: 'No platform detected',
    missingFileProjects: 'Missing File',
    empty: 'Empty! All good!'
  },
  reviews: {
    headline: '{0} released this version on {1}',
    title: 'Review logs',
    projectPage: 'Project Page',
    downloadFile: 'Download File',
    startReview: 'Start Review',
    stopReview: 'Stop Review',
    approve: 'Approve',
    approvePartial: 'Approve Partial',
    notUnderReview: 'This version is not under review',
    reviewMessage: 'Review Message',
    addMessage: 'Add Message',
    reopenReview: 'Reopen Review',
    undoApproval: 'Undo Approval',
    hideClosed: 'Hide all finished reviews',
    error: {
      noReviewStarted: 'There is no unfinished review to add a message to',
      notCorrectUser: 'You are not the user that started this review',
      cannotReopen: 'Unable to reopen this review',
      onlyOneReview: 'Cannot have more than 1 review for a version',
      badUndo: 'Can only undo approval after an approval'
    },
    presets: {
      message: '{msg}',
      start: '{name} started a review',
      stop: '{name} stopped a review: {msg}',
      reopen: '{name} reopened a review',
      approve: '{name} approved this version',
      approvePartial: '{name} partially approved this version',
      undoApproval: '{name} has undone their approval',
      reviewTitle: "{name}'s Review"
    },
    state: {
      ongoing: 'Ongoing',
      stopped: 'Stopped',
      approved: 'Approved',
      partiallyApproved: 'Partially Approved',
      lastUpdate: 'Last Update: {0}'
    }
  },
  apiKeys: {
    title: 'API Keys',
    createNew: 'Create new key',
    existing: 'Existing keys',
    name: 'Name',
    key: 'Key',
    keyIdentifier: 'Key Identifier',
    permissions: 'Permissions',
    delete: 'Delete',
    deleteKey: 'Delete Key',
    createKey: 'Create key',
    noKeys: 'There are no api keys yet. You can create one on the right side',
    success: {
      delete: 'You have deleted the key: {0}',
      create: 'You have created the key: {0}'
    },
    error: {
      notEnoughPerms: 'Not enough permissions to create that key',
      duplicateName: 'Duplicate key name'
    }
  },
  apiDocs: {
    title: 'API Docs'
  },
  platformVersions: {
    title: 'Configure Platform Versions',
    platform: 'Platform',
    versions: 'Versions',
    addVersion: 'Add Version',
    saveChanges: 'Save Changes',
    success: 'Updated platform versions'
  },
  flagReview: {
    title: 'Flags',
    noFlags: 'There are no flags to review.',
    msgUser: 'Message user',
    msgProjectOwner: 'Message owner',
    markResolved: 'Mark resolved',
    line1: '{0} reported {1} on {2}',
    line2: 'Reason: {0}',
    line3: 'Comment: {0}'
  },
  userActivity: {
    title: "{0}'s Activity",
    reviews: 'Reviews',
    flags: 'Flags',
    reviewApproved: 'Review Approved',
    flagResolved: 'Flag Resolved',
    error: {
      isOrg: 'Cannot show activity for organization users'
    }
  },
  userAdmin: {
    title: 'Edit User',
    organizations: 'Organizations',
    organization: 'Organization',
    projects: 'Projects',
    project: 'Project',
    owner: 'Owner',
    role: 'Role',
    accepted: 'Accepted',
    sidebar: 'Other Administration',
    hangarAuth: 'HangarAuth Profile',
    forum: 'Forum Profile'
  },
  userActionLog: {
    title: 'User Action Log',
    user: 'User',
    address: 'IP Address',
    time: 'Time',
    action: 'Action',
    context: 'Context',
    oldState: 'Old State',
    newState: 'New State',
    markdownView: 'Markdown View',
    diffView: 'Diff View',
    types: {
      ProjectVisibilityChanged: 'The project visibility state was changed',
      ProjectRename: 'The project was renamed',
      ProjectFlagged: 'The project got flagged',
      ProjectSettingsChanged: 'The project settings were changed',
      ProjectIconChanged: 'The project icon was changed',
      ProjectFlagResolved: 'The flag was resolved',
      ProjectChannelCreated: 'A project channel was created',
      ProjectChannelEdited: 'A project channel was edited',
      ProjectChannelDeleted: 'A project channel was deleted',
      ProjectInvitesSent: 'Project invites were sent',
      ProjectInviteDeclined: 'A project invite was declined',
      ProjectInviteUnaccepted: 'A project invite was unaccepted',
      ProjectMemberAdded: 'A project member was added',
      ProjectMembersRemoved: 'Project members were removed',
      ProjectMemberRolesChanged: 'Project members had their roles updated',
      ProjectPageCreated: 'A project page was created',
      ProjectPageDeleted: 'A project page was deleted',
      ProjectPageEdited: 'A project page was edited',
      VersionVisibilityChanged: "The version's visibility state was changed",
      VersionDeleted: 'The version was deleted',
      VersionCreated: 'A new version was uploaded',
      VersionDescriptionEdited: 'The version description was edited',
      VersionReviewStateChanged: "The version's review state was changed",
      VersionPluginDependencyAdded: 'A plugin dependency was added',
      VersionPluginDependencyEdited: 'A plugin dependency was edited',
      VersionPluginDependencyRemoved: 'A plugin dependency was removed',
      VersionPlatformDependencyAdded: 'A platform dependency was added',
      VersionPlatformDependencyRemoved: 'A platform dependency was removed',
      UserTaglineChanged: 'The user tagline changed',
      UserLocked: 'This user is locked',
      UserUnlocked: 'This user is unlocked',
      UserApikeyCreated: 'An apikey was created',
      UserApikeyDeleted: 'An apikey was deleted',
      OrganizationInvitesSent: 'Organization invites were sent',
      OrganizationInviteDeclined: 'An organization invite was declined',
      OrganizationInviteUnaccepted: 'An organization invite was unaccepted',
      OrganizationMemberAdded: 'An organization member was added',
      OrganizationMembersRemoved: 'Organization members were removed',
      OrganizationMemberRolesChanged: 'Organization members had their roles updated'
    }
  },
  versionApproval: {
    title: 'Version Approvals',
    inReview: 'In Review',
    approvalQueue: 'Approval queue',
    queuedBy: 'Queued by',
    status: 'Status',
    project: 'Project',
    date: 'Date',
    version: 'Version',
    started: 'Started: {0}',
    ended: 'Ended: {0}',
    statuses: {
      ongoing: '{0} ongoing',
      stopped: '{0} stopped',
      approved: '{0} approved'
    }
  },
  projectApproval: {
    title: 'Project Approvals',
    sendForApproval: 'You have sent the project for approval',
    noProjects: 'No projects',
    needsApproval: 'Needs Approval',
    awaitingChanges: 'Awaiting Changes',
    description: '{0} requested changes on {1}'
  },
  donate: {
    title: 'Donate to {}',
    monthly: 'Monthly',
    oneTime: 'One-Time',
    selectAmount: 'Select an amount above or enter an amount below',
    legal: 'By donating to {0} you agree to Y and that tacos are delicious',
    cta: 'Donate',
    submit: 'Donate {0}'
  },
  lang: {
    button: 'Switch Language',
    title: 'Switch Language',
    available: 'Available Language',
    hangarAuth: 'This only change the locale for your current browser (as a cookie). Click here to change your lang on paper auth for all paper services'
  },
  validation: {
    required: '{0} is required',
    maxLength: 'Maximum length is {0}',
    minLength: 'Minimum length is {0}',
    invalidFormat: '{0} is invalid',
    invalidUrl: 'Invalid URL format'
  },
  prompts: {
    confirm: 'Got it!',
    changeAvatar: {
      title: 'Change your avatar!',
      message: "Welcome to your new organization! Start by changing it's avatar by clicking on it."
    }
  },
  error: {
    userLocked: 'Your account is locked.',
    401: 'You must be logged in for this',
    403: 'You do not have permission to do that',
    404: '404 Not found',
    unknown: 'An error occurred'
  }
};
export default msgs;
