const { db } = require("@vercel/postgres");

const categories = [
  {
    id: 1,
    label: "Frontend",
    slug: "frontend",
    description:
      "Ipsum magna minim officia nostrud. Ut ullamco commodo aliqua incididunt eu veniam laborum voluptate aliquip dolor. Qui occaecat officia mollit pariatur dolore tempor aute laboris sit pariatur sunt. Aute id cupidatat elit sint in ut amet id ullamco in nisi cupidatat ut proident. Ipsum consectetur quis pariatur amet.",
  },
  {
    id: 2,
    label: "Backend",
    slug: "beckend",
    description:
      "Officia tempor sint ullamco occaecat. Ad amet consectetur ex quis. Sit adipisicing consequat ipsum pariatur tempor. Lorem voluptate officia ipsum excepteur. Nisi excepteur eu non in nostrud eiusmod labore sit qui aliquip.",
  },
  {
    id: 3,
    label: "DevOps",
    slug: "devops",
    description:
      "Quis velit tempor labore est officia duis qui occaecat nisi sint mollit nisi Lorem. Reprehenderit sunt amet nostrud sunt magna. Reprehenderit est aliqua excepteur dolore. Adipisicing qui elit et labore reprehenderit incididunt dolor do cupidatat.",
  },
  {
    id: 4,
    label: "UX/UI",
    slug: "ux-ui",
    description:
      "Eu Lorem cillum Lorem tempor non anim esse culpa ullamco non id amet laborum fugiat. Ea laboris et adipisicing in et velit Lorem. Ipsum est elit cupidatat ea sit est tempor voluptate. Id eiusmod minim id reprehenderit ea do culpa.",
  },
];

const posts = [
  {
    imageSrc:
      "https://fastly.picsum.photos/id/1015/1920/1920.jpg?hmac=JDdYl803NLWk-oY2XxB_WKgjS9MaYCQUfMuMB87dPcc",
    slug: "post-1",
    title:
      "Sunt qui laborum labore reprehenderit in mollit voluptate esse tempor voluptate pariatur sint laboris dolor.",
    summary:
      "Proident laborum amet aliquip sint. Labore cupidatat esse et enim. Quis nulla qui duis laborum et ut qui amet eu irure. Aliqua id exercitation quis consequat. Non irure aliquip ea ex officia proident cillum quis deserunt mollit enim et quis incididunt. Labore eu reprehenderit duis incididunt ea do enim exercitation aliqua anim.",
    content:
      "Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur.",
    publishedAt: new Date(2024, 1, 23),
    category: 1,
  },
  {
    imageSrc:
      "https://fastly.picsum.photos/id/450/1920/1920.jpg?hmac=hEqhr_DEqJQ9FDEpaBxmLMOa763Hl9eAIYLo6HCRdCQ",
    slug: "post-2",
    title:
      "Nisi aliquip elit consectetur non adipisicing aliqua non elit magna officia.",
    summary:
      "Est mollit cillum ullamco sit commodo cillum ad. Est veniam ad amet voluptate incididunt proident et in cillum ex do ipsum. Non ipsum dolor elit exercitation minim sit. Irure sint ipsum aliqua dolore est ad nostrud. Quis anim occaecat proident in commodo excepteur. Consequat fugiat exercitation deserunt anim eiusmod incididunt officia fugiat aute. Ea nulla id excepteur deserunt non sit id et do.",
    content:
      "Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur.",
    publishedAt: new Date(2024, 1, 22),
    category: 2,
  },
  {
    imageSrc:
      "https://fastly.picsum.photos/id/901/1920/1920.jpg?hmac=irNUs7dMedqII1jIv4h3WByrN4B1ckIGGZeuP_8lno4",
    slug: "post-3",
    title:
      "Ex reprehenderit sit minim incididunt proident aliqua et veniam voluptate.",
    summary:
      "Tempor irure reprehenderit incididunt ut tempor velit Lorem. Quis proident excepteur qui ex aliquip enim labore elit fugiat adipisicing ut anim. Dolore quis eiusmod sint mollit proident mollit esse nisi anim nulla Lorem. Cupidatat consectetur dolor Lorem elit est pariatur anim ut et fugiat qui irure ea in.",
    content:
      "Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur.",
    publishedAt: new Date(2023, 2, 22),
    category: 2,
  },
];

const works = [
  {
    id: 1,
    company: "Devmy",
    role: "Frontend Developer",
    startDate: new Date(2023, 10, 1),
    description:
      "Esse veniam est ad duis ullamco consequat. Deserunt ipsum exercitation Lorem laboris nostrud laborum do anim minim cupidatat culpa. Quis enim ipsum enim deserunt. Cillum culpa ipsum tempor enim ipsum. Nostrud ut nisi in culpa.",
  },
  {
    id: 2,
    company: "Vercel",
    role: "Frontend Developer",
    startDate: new Date(2022, 1, 1),
    endDate: new Date(2023, 10, 1),
    description:
      "Qui cupidatat quis aute est consectetur irure culpa excepteur mollit deserunt id aliquip incididunt. Ipsum labore magna proident esse cupidatat ut magna excepteur aute cillum officia excepteur et. Anim enim culpa amet ad pariatur id occaecat laborum occaecat proident ex dolor excepteur. Ad dolore exercitation est ut Lorem occaecat eiusmod. Ullamco irure sunt minim quis ipsum aute occaecat excepteur exercitation dolor nisi. Non cillum laboris deserunt nulla ad duis aliqua nisi cillum non sit. Laborum adipisicing anim voluptate nulla cillum ex duis ex exercitation eiusmod.",
  },
];

async function main() {
  const client = await db.connect();

  await seedCategories(client);
  await seedPosts(client);
  await seedWorks(client);

  await client.end();
}

async function seedCategories(client) {
  const resp = await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
      id VARCHAR(255) PRIMARY KEY,
      label VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT NOT NULL
    )
  `;

  console.log("Created categories table");

  for await (category of categories) {
    await client.sql`
      INSERT INTO categories (id, label, slug, description)
      VALUES (${category.id}, ${category.label}, ${category.slug}, ${category.description})
      ON CONFLICT (id) DO NOTHING
    `;
  }

  console.log("Created categories rows");
}

async function seedPosts(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  const resp = await client.sql`
    CREATE TABLE IF NOT EXISTS posts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      slug VARCHAR(255) NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      summary TEXT NOT NULL,
      content TEXT NOT NULL,
      "publishedAt" TIMESTAMP NOT NULL,
      category VARCHAR(255) REFERENCES categories(id) NOT NULL,
      "imageSrc" VARCHAR(255) NOT NULL
    )
  `;

  console.log("Created posts table");

  for await (post of posts) {
    await client.sql`
      INSERT INTO posts (slug, title, summary, content, "publishedAt", category, "imageSrc")
      VALUES (${post.slug}, ${post.title}, ${post.summary}, ${post.content}, ${post.publishedAt}, ${post.category}, ${post.imageSrc})
      ON CONFLICT (slug) DO NOTHING
    `;
  }

  console.log("Created posts rows");
}

async function seedWorks(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  const resp = await client.sql`
    CREATE TABLE IF NOT EXISTS works (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      company VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL,
      "startDate" DATE NOT NULL,
      "endDate" DATE,
      description TEXT NOT NULL
    )
  `;

  console.log("Created works table");

  for await (work of works) {
    await client.sql`
      INSERT INTO works (company, role, "startDate", "endDate", description)
      VALUES (${work.company}, ${work.role}, ${work.startDate}, ${work.endDate}, ${work.description})
    `;
  }

  console.log("Created works rows");
}

main().catch((err) => {
  console.error("Seed database error: ", err);
});
