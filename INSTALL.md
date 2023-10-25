# Setup

```bash
yarn create next-app
```

# Prisma : config ORM

```bash
npm i prisma -D
```

- iniziliate

```bash
npx prisma init
```

- migrate initial

```bash
npx prisma migrate dev --name init
```

# Add vercel deploy

```bash
yarn global add vercel
```

- vercel login ( just with email for this example )

```bash
vercel login
```

- to deploy ( select project)

```bash
vercel
```

```log
? Set up and deploy “~/Desktop/testing/nextjs-comment-anon-neon”? [Y/n] y
? Which scope do you want to deploy to? Davidcrc's projects
? Link to existing project? [y/N] n
? What’s your project’s name? nextjs-comment-anon-neon
? In which directory is your code located? ./
Local settings detected in vercel.json:
Auto-detected Project Settings (Next.js):
- Build Command: next build
- Development Command: next dev --port $PORT
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
- Output Directory: Next.js default
? Want to modify these settings? [y/N] n
🔗  Linked to davidcrcs-projects/nextjs-comment-anon-neon (created .vercel)
🔍  Inspect: https://vercel.com/davidcrcs-projects/nextjs-comment-anon-neon/FqqRmKuvMcXmjGK3Uq9wWBauXTdC [2s]
✅  Preview: https://nextjs-comment-anon-neon-reqms62bp-davidcrcs-projects.vercel.app [2s]
⠇ Building
```

# Add prisma-kysely

```bash
yarn add kysely prisma-kysely
```

- Replcace in schema.prisma

```prisma
generator kysely {
  provider = "prisma-kysely"

  // Optionally provide a destination directory for the generated file
  // and a filename of your choice
  output = "../src/db"
  fileName = "types.ts"
  // Optionally generate runtime enums to a separate file
  enumFileName = "enums.ts"
}
```

- run:

```bash
npx prisma migrate dev
```

```bash
yarn add kysely-neon @neondatabase/serverless
```

- Add env

```bash
vercel env add
```

```
? What’s the name of the variable? DATABASE_URL
? What’s the value of DATABASE_URL? VALUE
? Add DATABASE_URL to which Environments (select multiple)?
  ▪︎ Production
  ▪︎ Preview
  ▪︎ Development
```

- finally: deploy

```bash
vercel
```

# Add react-query

```bash
yarn add react-query
```

- then create a provider like "src/providers/index.tsx"

# Add blob vercel

```bash
yarn add @vercel/blob
```

- firts : Connect blob to a project in web

- then run:

```bash
vercel env pull .env.development.local
```

verify exist "BLOB_READ_WRITE_TOKEN"

- => Existing two way to upload:
  -- first support 4.5mb
  -- client: no limit
