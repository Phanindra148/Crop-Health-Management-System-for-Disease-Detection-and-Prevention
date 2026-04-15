// Test script to verify enhanced disease detection
const fs = require('fs');
const path = require('path');

async function testDiseaseDetection() {
  console.log('Testing enhanced disease detection...\n');

  // Create test images with different characteristics
  const testImages = [
    { name: 'healthy_green', description: 'High green, bright image' },
    { name: 'blight_red', description: 'High red, low green image' },
    { name: 'mildew_blue', description: 'High blue channel image' },
    { name: 'rust_orange', description: 'Orange/red dominant image' }
  ];

  for (const test of testImages) {
    console.log(`Testing ${test.name}: ${test.description}`);

    try {
      // Create a simple colored image buffer for testing
      const { createCanvas } = require('canvas');
      const canvas = createCanvas(400, 300);
      const ctx = canvas.getContext('2d');

      // Generate different color patterns based on test type
      switch(test.name) {
        case 'healthy_green':
          ctx.fillStyle = '#00FF00'; // Bright green
          break;
        case 'blight_red':
          ctx.fillStyle = '#8B0000'; // Dark red
          break;
        case 'mildew_blue':
          ctx.fillStyle = '#87CEEB'; // Sky blue
          break;
        case 'rust_orange':
          ctx.fillStyle = '#FF4500'; // Orange red
          break;
      }

      ctx.fillRect(0, 0, 400, 300);
      const buffer = canvas.toBuffer('image/jpeg');

      // Test the analysis
      const result = await require('./server.js').simulatePrediction(buffer);
      console.log(`  Result: ${result.diseaseName} (${result.confidence}% confidence)`);
      console.log(`  Risk: ${result.riskLevel}`);
      console.log('');

    } catch (error) {
      console.error(`  Error testing ${test.name}:`, error.message);
    }
  }
}

// Run test if called directly
if (require.main === module) {
  testDiseaseDetection().catch(console.error);
}

module.exports = { testDiseaseDetection };