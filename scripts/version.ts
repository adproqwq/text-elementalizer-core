import packageJson from '../package.json'

const getVersion = () => {
  process.stdout.write(packageJson.version);
}
getVersion();