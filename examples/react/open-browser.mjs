import { differenceInMinutes } from 'date-fns';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import open from 'open';

const lastOpenBrowserDateFile = './last-browser-open';

if (existsSync(lastOpenBrowserDateFile)) {
  const date = new Date(
    readFileSync(lastOpenBrowserDateFile, {
      encoding: 'utf-8',
    })
  );

  if (Math.abs(differenceInMinutes(date, new Date())) > 30) {
    open('http://localhost:4141', {}).catch(console.error);
  }
} else {
  open('http://localhost:4141', {}).catch(console.error);
}

writeFileSync(lastOpenBrowserDateFile, new Date().toISOString(), {
  encoding: 'utf-8',
});
