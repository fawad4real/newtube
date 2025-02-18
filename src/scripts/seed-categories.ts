// TODO: Create a script to seed categories
import { db } from '@/db';
import { categories } from '@/db/schema';

const categoryNames = [
  'Cars and vehicles',
  'Comedy',
  'Education',
  'Gaming',
  'Entertainment',
  'Film and animation',
  'How—to and style',
  'Music',
  'News and politics',
  'People and blogs',
  'Pets and animals',
  'Science and technology',
  'Sports',
  'Travel and events',
];

async function main() {
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `All ${name} related videos`,
    }));

    await db.insert(categories).values(values);
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
}

main();
