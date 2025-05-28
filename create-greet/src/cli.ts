#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

create('create-greet', {
  templateRoot,
  defaultLicense: 'UNLICENSED',
  defaultPackageManager: 'npm',
  promptForAuthor: false,
  promptForEmail: false,
  promptForLicense: false,
  skipGitInit: true,
  after: () => console.log(`Next commit to change.`),
});
