## Project Setup

```
prisma.io/docs

```

```
https://www.prisma.io/docs/getting-started/prisma-orm/add-to-existing-project/postgresql
```

```
https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql
```

# 1. Create a new project

Create a project directory and navigate into it:

```
mkdir project-name
cd project-name
```

```
npm init -y
npm install typescript tsx @types/node --save-dev
npx tsc --init
```

# 2. Install required dependencies

```
npm install prisma @types/node @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv
```

# 3. Configure ESM support

# add to file: tsconfig.json

```
{

  "compilerOptions": {
      "rootDir": "./src",
  "outDir": "./dist",
    "module": "ESNext",
    "moduleResolution": "node",
    "target": "ES2023",
    "strict": true,
    "esModuleInterop": true,
    "ignoreDeprecations": "6.0"
  }
}
```

```
npm i -D @types/node
```

```
clrt+shift+p --> developer relod window
```

# 4. Initialize Prisma ORM

```
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

# open

```
.env
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

You are Entry

Example:
database name : johndoe
passaword     : randompassword
mydb: db name
```

```

npm install express
npm install cors
```

```
connect your database
```

# 5. Define your data model

create a model

```
 Open prisma/schema.prisma and add the following models:
```

# 6. Create and apply your first migration

```
npx prisma migrate dev --name init
npx prisma generate
```

# 7. Instantiate Prisma Client

```
CREATE
 lib/prisma.ts

```

# 8. Write your first query

Create a script.ts file to test your setup:

```


script.ts
```

# 9. Explore your data with Prisma Studio

Prisma Studio is a visual editor for your database. Launch it with:

```
npx prisma studio --config ./prisma.config.ts
```
