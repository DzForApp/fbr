import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { Config } from 'sanity';

export  const config: Config = {
  name: 'default',
  title: 'fbr',

  projectId: 'lysgbnfy',
  dataset: 'production',
  basePath: '/dashboard',

  plugins: [structureTool(), visionTool(), deskTool()],

  schema: {
    types: schemaTypes,
  },
};
