import fs from 'fs';
import path from 'path';

export function loadMarkdown(relativePath: string): string {
  const fullPath = path.join(process.cwd(), 'content', relativePath);
  return fs.readFileSync(fullPath, 'utf-8');
}
