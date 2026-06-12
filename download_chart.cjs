const https = require('https');
const fs = require('fs');
const path = require('path');

const username = 'FrostyZ07';
const url = `https://ghchart.rshah.org/64ffda/${username}`;
const outputPath = path.join(__dirname, 'src/assets/github_chart.svg');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
};

console.log('Downloading GitHub contribution chart...');

https.get(url, options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to download chart: ${res.statusCode}`);
    process.exit(1);
  }
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync(outputPath, data);
    console.log('GitHub contribution chart downloaded successfully to src/assets/github_chart.svg');
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error downloading chart:', err);
  process.exit(1);
});
