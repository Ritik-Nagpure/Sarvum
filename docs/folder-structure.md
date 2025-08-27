# Folder structure
```
.
└── sarvum/
    ├── .env
    ├── package.json
    ├── package-lock.json
    ├── tssonfig.json
    ├── README.md        # Overview of Sarvum app
    ├── dist/
    │   └── # finally compilled code
    ├── prisma/
    │   ├── neondb/
    │   │   ├── subshemas/
    │   │   │   ├── codegears
    │   │   │   ├── astrobit
    │   │   │   ├── vastra
    │   │   │   └── rides
    │   │   └── prisma.schema
    │   └── mongodb/
    │       ├── subshemas/
    │       │   └── arya
    │       └── prisma.schema
    ├── src/
    │   ├── arya
    │   ├── codegears
    │   ├── astrobit
    │   ├── vastra
    │   ├── rides
    │   └── utils
    └── docs/
        ├── architecture.md                # High-level system architecture
        ├── setup.md                       # Installation & environment setup
        ├── deployment.md                  # CICD, hosting, and deployment steps
        ├── shared-components-utils.md          # Common modules or libraries
        ├── changelog.md                  # Version history and updates
        ├── contributing.md               # Guidelines for contributing to docs
        └── services                      # Individual service documentation/
            ├── arya/
            │   ├── overview.md
            │   ├── api.md
            │   └── workflows.md
            ├── codegears/
            │   ├── overview.md
            │   ├── api.md
            │   └── workflows.md
            ├── astrobit/
            │   ├── overview.md
            │   ├── api.md
            │   └── workflows.md
            ├── vastra/
            │   ├── overview.md
            │   ├── api.md
            │   └── workflows.md
            ├── rides/
            │   ├── overview.md
            │   ├── api.md
            │   └── workflows.md
            ├── habla/
            │   ├── overview.md
            │   ├── api.md
            │   └── workflows.md
            └── payments/
                ├── overview.md
                ├── api.md
                └── workflows.md
```