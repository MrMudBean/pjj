#!/usr/bin/env node

import { dog } from './dog';

import { main } from './main';

(() => {
  try {
    main();
  } catch (error) {
    dog.error(error);
  }
})();
