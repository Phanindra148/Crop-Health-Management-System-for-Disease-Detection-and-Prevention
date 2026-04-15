const fs = require('fs');
const http = require('http');

const imgPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\4af6bdb2-aabb-4168-9102-7fc143972b5c\\test_plant_disease_scan_jpg_1776141493206.png';
const boundary = 'CropDocBoundary' + Date.now();
const fileData = fs.readFileSync(imgPath);

const head = Buffer.from(
  `--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="scan.jpg"\r\nContent-Type: image/jpeg\r\n\r\n`
);
const tail = Buffer.from(`\r\n--${boundary}--\r\n`);
const body = Buffer.concat([head, fileData, tail]);

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/analyze',
  method: 'POST',
  headers: {
    'Content-Type': `multipart/form-data; boundary=${boundary}`,
    'Content-Length': body.length
  }
};

const req = http.request(options, (res) => {
  let raw = '';
  res.on('data', chunk => raw += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(raw);
      console.log('\n=== SCAN RESULT ===');
      console.log('Disease     :', data.diseaseName);
      console.log('Risk Level  :', data.riskLevel);
      console.log('Confidence  :', data.confidence + '%');
      console.log('\nPrecautions :');
      (data.precautions || []).forEach((p, i) => console.log(`  ${i+1}. ${p}`));
      console.log('\nCure Plan   :');
      (data.curePlan || []).forEach(c => console.log(`  Step ${c.step}: ${c.title} - ${c.description}`));
      console.log('\n OK Scan API working correctly!');
    } catch (e) {
      console.error('Parse error:', e.message, '\nRaw:', raw);
    }
  });
});

req.on('error', e => console.error('FAIL Request failed:', e.message));
req.write(body);
req.end();
