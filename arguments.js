// Criando argumento
// tutorial https://www.digitalocean.com/community/tutorials/how-to-write-and-run-your-first-program-in-node-js

const args = process.argv.slice(2);

args.forEach(arg => {
  let envVar = process.env[arg];
  if (envVar === undefined) {
    console.error(`Could not find "${arg}" in environment`);
  } else {
    console.log(envVar);
  }
});