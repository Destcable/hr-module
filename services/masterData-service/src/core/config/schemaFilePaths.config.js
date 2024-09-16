import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = process.cwd();

export const schemaFilePaths = [
    path.join(rootDir, 'customTypes.graphql'),
    path.join(rootDir, 'src/models/Department/schema.graphql'),
    path.join(rootDir, 'src/models/Position/schema.graphql'),
];
