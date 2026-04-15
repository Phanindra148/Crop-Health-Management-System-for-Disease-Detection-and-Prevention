# Plant Disease Advisor - Deep Learning Edition

An AI-powered plant disease detection system with simulated Convolutional Neural Networks (CNN) built with Node.js.

## Features

- **Simulated Deep Learning**: CNN-style image analysis simulation
- **Magic Demo Mode**: Instant recognition based on filename keywords
- **11 Disease Classes**: Comprehensive plant disease detection
- **Confidence Scores**: Probability-based predictions
- **Modern UI**: Beautiful Material Design interface

## Supported Diseases

1. Healthy
2. Bacterial Spot
3. Early Blight
4. Late Blight
5. Leaf Mold
6. Septoria Leaf Spot
7. Spider Mites
8. Target Spot
9. Tomato Yellow Leaf Curl Virus
10. Tomato Mosaic Virus
11. Powdery Mildew

## Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Open Browser**:
   ```
   http://localhost:3000
   ```

## How It Works

### Simulated Deep Learning Pipeline
1. **Image Upload**: User uploads plant image
2. **Preprocessing**: Image metadata analysis with Sharp
3. **Feature Simulation**: CNN-style feature extraction simulation
4. **Classification**: Probability-based disease classification
5. **Confidence Scoring**: Returns probability for each disease class

### Magic Demo Mode
For instant demos, name your files with disease keywords:
- `tomato_blight.jpg` → Instant Late Blight diagnosis
- `leaf_mildew.png` → Instant Powdery Mildew diagnosis
- `healthy_plant.jpg` → Instant Healthy diagnosis

## API Endpoints

### POST /api/analyze
Upload an image for disease analysis.

**Request**: Multipart form data with `image` field
**Response**:
```json
{
  "success": true,
  "disease": "late_blight",
  "confidence": "73.45",
  "predictions": [
    {"class": "late_blight", "probability": "73.45"},
    {"class": "early_blight", "probability": "12.34"},
    ...
  ],
  "imageInfo": {
    "width": 1024,
    "height": 768,
    "format": "jpeg",
    "size": 245760
  },
  "note": "This is a simulation. Real ML model would analyze actual image features."
}
```

### GET /api/health
Check server and model status.

## Model Architecture (Simulated)

- **Input**: Variable size images (metadata analysis)
- **Feature Extraction**: Simulated CNN layers
- **Classification**: 11-class probability distribution
- **Output**: Disease prediction with confidence scores

## Real Implementation Notes

For production deployment with actual deep learning:

1. **Install TensorFlow.js Node** (requires Visual Studio Build Tools on Windows)
2. **Train a CNN model** on plant disease datasets (PlantVillage, etc.)
3. **Load pre-trained model** instead of simulation
4. **Implement real image preprocessing** with tensor operations

## Technologies Used

- **Backend**: Node.js, Express
- **Image Processing**: Sharp
- **File Upload**: Multer
- **Frontend**: HTML, CSS, JavaScript
- **UI**: Material Design, Tailwind CSS

## License

ISC License