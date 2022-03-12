const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Ocorreu um erro ao tentar ler o arquivo: ${error.message}`);
  }
}

readFile('groceries.csv');