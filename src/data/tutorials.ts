export interface Tutorial {
  id: string
  slug: string
  title: string
  description: string
  category: 'AI' | 'Software Engineering' | 'Embedded Systems & IoT'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  topics: string[]
  prerequisites: string[]
  learningOutcomes: string[]
  content: string
  order: number
}

export const tutorials: Tutorial[] = [
  // AI Tutorials (6)
  {
    id: 'ai-1',
    slug: 'introduction-to-machine-learning',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamental concepts of machine learning, including supervised and unsupervised learning, model evaluation, and common algorithms.',
    category: 'AI',
    difficulty: 'Beginner',
    duration: '45 min',
    topics: ['ML Basics', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
    prerequisites: ['Basic Python knowledge', 'High school math'],
    learningOutcomes: [
      'Understand the difference between supervised and unsupervised learning',
      'Know when to apply different ML algorithms',
      'Evaluate model performance using appropriate metrics',
    ],
    content: `
# Introduction to Machine Learning

Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn from data without being explicitly programmed.

## What is Machine Learning?

At its core, ML is about finding patterns in data. Instead of writing rules manually, we let algorithms discover rules from examples.

## Types of Machine Learning

### Supervised Learning
- Learning from labeled examples
- Examples: Classification, Regression
- Use cases: Spam detection, price prediction

### Unsupervised Learning  
- Finding patterns in unlabeled data
- Examples: Clustering, Dimensionality Reduction
- Use cases: Customer segmentation, anomaly detection

### Reinforcement Learning
- Learning through trial and error
- Agent interacts with environment
- Use cases: Game AI, robotics

## Your First ML Pipeline

1. Collect and prepare data
2. Choose an algorithm
3. Train the model
4. Evaluate performance
5. Deploy and monitor
    `,
    order: 1,
  },
  {
    id: 'ai-2',
    slug: 'python-for-data-science',
    title: 'Python for Data Science Essentials',
    description: 'Master NumPy, Pandas, and Matplotlib - the essential Python libraries for data manipulation and visualization.',
    category: 'AI',
    difficulty: 'Beginner',
    duration: '60 min',
    topics: ['NumPy', 'Pandas', 'Matplotlib', 'Data Manipulation'],
    prerequisites: ['Basic Python knowledge'],
    learningOutcomes: [
      'Manipulate arrays efficiently with NumPy',
      'Clean and transform data with Pandas',
      'Create informative visualizations with Matplotlib',
    ],
    content: `
# Python for Data Science Essentials

Learn the core libraries that power data science in Python.

## NumPy: Numerical Computing

NumPy provides efficient array operations:

\`\`\`python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.zeros((3, 3))

# Vectorized operations
result = arr * 2 + 1
\`\`\`

## Pandas: Data Manipulation

Pandas makes data wrangling intuitive:

\`\`\`python
import pandas as pd

# Load and explore data
df = pd.read_csv('data.csv')
df.head()
df.describe()

# Filter and transform
filtered = df[df['age'] > 25]
df['new_col'] = df['a'] + df['b']
\`\`\`

## Matplotlib: Visualization

Create publication-quality plots:

\`\`\`python
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='Data')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.legend()
plt.show()
\`\`\`
    `,
    order: 2,
  },
  {
    id: 'ai-3',
    slug: 'neural-networks-from-scratch',
    title: 'Neural Networks from Scratch',
    description: 'Build a neural network from the ground up to understand backpropagation, activation functions, and gradient descent.',
    category: 'AI',
    difficulty: 'Intermediate',
    duration: '90 min',
    topics: ['Neural Networks', 'Backpropagation', 'Gradient Descent', 'Activation Functions'],
    prerequisites: ['Python proficiency', 'Linear algebra basics', 'Calculus fundamentals'],
    learningOutcomes: [
      'Implement forward propagation manually',
      'Understand and code backpropagation',
      'Train a neural network on real data',
    ],
    content: `
# Neural Networks from Scratch

Understanding neural networks by building one without frameworks.

## The Neuron

A single neuron computes: output = activation(weights · inputs + bias)

## Forward Propagation

Information flows from input to output:

\`\`\`python
def forward(X, weights, biases):
    z = np.dot(X, weights) + biases
    a = sigmoid(z)
    return a
\`\`\`

## Backpropagation

The chain rule computes gradients:

\`\`\`python
def backward(X, y, cache):
    m = X.shape[0]
    dZ = cache['A'] - y
    dW = (1/m) * np.dot(X.T, dZ)
    db = (1/m) * np.sum(dZ, axis=0)
    return dW, db
\`\`\`

## Training Loop

Iteratively improve weights:

\`\`\`python
for epoch in range(epochs):
    # Forward pass
    predictions = forward(X, W, b)
    
    # Compute loss
    loss = compute_loss(y, predictions)
    
    # Backward pass
    dW, db = backward(X, y, cache)
    
    # Update weights
    W -= learning_rate * dW
    b -= learning_rate * db
\`\`\`
    `,
    order: 3,
  },
  {
    id: 'ai-4',
    slug: 'deep-learning-with-pytorch',
    title: 'Deep Learning with PyTorch',
    description: 'Learn PyTorch fundamentals including tensors, autograd, neural network modules, and training loops.',
    category: 'AI',
    difficulty: 'Intermediate',
    duration: '120 min',
    topics: ['PyTorch', 'Tensors', 'Autograd', 'Neural Network Modules'],
    prerequisites: ['Neural network fundamentals', 'Python proficiency'],
    learningOutcomes: [
      'Work with PyTorch tensors and autograd',
      'Build neural networks using nn.Module',
      'Implement complete training pipelines',
    ],
    content: `
# Deep Learning with PyTorch

PyTorch is the go-to framework for research and production ML.

## Tensors

The fundamental data structure:

\`\`\`python
import torch

# Create tensors
x = torch.tensor([1, 2, 3])
y = torch.zeros(3, 4)
z = torch.randn(2, 3, requires_grad=True)

# GPU acceleration
if torch.cuda.is_available():
    x = x.cuda()
\`\`\`

## Building Models

Use nn.Module for clean architectures:

\`\`\`python
class MLP(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, output_dim)
        )
    
    def forward(self, x):
        return self.layers(x)
\`\`\`

## Training

The standard training loop:

\`\`\`python
model = MLP(784, 256, 10)
optimizer = torch.optim.Adam(model.parameters())
criterion = nn.CrossEntropyLoss()

for epoch in range(epochs):
    for batch in dataloader:
        optimizer.zero_grad()
        outputs = model(batch['x'])
        loss = criterion(outputs, batch['y'])
        loss.backward()
        optimizer.step()
\`\`\`
    `,
    order: 4,
  },
  {
    id: 'ai-5',
    slug: 'llm-application-development',
    title: 'Building LLM Applications',
    description: 'Learn to build production applications with Large Language Models, including prompt engineering, RAG, and API integration.',
    category: 'AI',
    difficulty: 'Advanced',
    duration: '150 min',
    topics: ['LLMs', 'Prompt Engineering', 'RAG', 'LangChain'],
    prerequisites: ['Python proficiency', 'API experience', 'ML fundamentals'],
    learningOutcomes: [
      'Design effective prompts for various tasks',
      'Implement Retrieval-Augmented Generation',
      'Build production-ready LLM applications',
    ],
    content: `
# Building LLM Applications

Create intelligent applications powered by Large Language Models.

## Working with LLM APIs

\`\`\`python
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing."}
    ]
)
\`\`\`

## Prompt Engineering

Design prompts that get consistent results:

- Be specific about format
- Provide examples (few-shot)
- Use system messages for context
- Chain of thought for reasoning

## RAG Architecture

Combine LLMs with your data:

1. Chunk documents
2. Create embeddings
3. Store in vector database
4. Retrieve relevant context
5. Augment prompt with context
6. Generate response

## Production Considerations

- Implement caching
- Add rate limiting
- Monitor costs
- Handle failures gracefully
- Validate outputs
    `,
    order: 5,
  },
  {
    id: 'ai-6',
    slug: 'mlops-production-ml',
    title: 'MLOps: Production Machine Learning',
    description: 'Master the tools and practices for deploying, monitoring, and maintaining ML systems in production.',
    category: 'AI',
    difficulty: 'Advanced',
    duration: '180 min',
    topics: ['MLOps', 'Model Deployment', 'Monitoring', 'CI/CD for ML'],
    prerequisites: ['ML experience', 'Docker basics', 'Cloud familiarity'],
    learningOutcomes: [
      'Deploy models with proper versioning',
      'Implement monitoring and alerting',
      'Build CI/CD pipelines for ML',
    ],
    content: `
# MLOps: Production Machine Learning

Taking ML from notebooks to production systems.

## Model Versioning

Track experiments and models:

\`\`\`python
import mlflow

mlflow.set_experiment("my_experiment")

with mlflow.start_run():
    mlflow.log_param("learning_rate", 0.01)
    mlflow.log_metric("accuracy", 0.95)
    mlflow.sklearn.log_model(model, "model")
\`\`\`

## Model Serving

Deploy with FastAPI:

\`\`\`python
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
async def predict(features: Features):
    prediction = model.predict([features.to_array()])
    return {"prediction": prediction[0]}
\`\`\`

## Monitoring

Track model health:

- Prediction latency
- Input data distribution
- Output distribution drift
- Error rates
- Business metrics

## CI/CD for ML

Automate the ML lifecycle:

1. Data validation
2. Model training
3. Model evaluation
4. Model registration
5. Deployment
6. Smoke tests
    `,
    order: 6,
  },

  // Software Engineering Tutorials (6)
  {
    id: 'se-1',
    slug: 'git-version-control-essentials',
    title: 'Git & Version Control Essentials',
    description: 'Master Git fundamentals including branching, merging, and collaboration workflows for professional development.',
    category: 'Software Engineering',
    difficulty: 'Beginner',
    duration: '45 min',
    topics: ['Git', 'Version Control', 'Branching', 'Collaboration'],
    prerequisites: ['Command line basics'],
    learningOutcomes: [
      'Initialize and manage Git repositories',
      'Work with branches effectively',
      'Collaborate using pull requests',
    ],
    content: `
# Git & Version Control Essentials

Version control is fundamental to professional software development.

## Git Basics

\`\`\`bash
# Initialize a repository
git init

# Stage and commit
git add .
git commit -m "Initial commit"

# Check status
git status
git log --oneline
\`\`\`

## Branching

Work on features in isolation:

\`\`\`bash
# Create and switch to branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Merge back to main
git checkout main
git merge feature/new-feature
\`\`\`

## Collaboration Workflow

1. Fork or clone repository
2. Create feature branch
3. Make changes
4. Push and create pull request
5. Code review
6. Merge
    `,
    order: 1,
  },
  {
    id: 'se-2',
    slug: 'clean-code-principles',
    title: 'Clean Code Principles',
    description: 'Write maintainable, readable code by following proven principles and best practices.',
    category: 'Software Engineering',
    difficulty: 'Beginner',
    duration: '60 min',
    topics: ['Clean Code', 'Best Practices', 'Code Quality', 'Refactoring'],
    prerequisites: ['Basic programming experience'],
    learningOutcomes: [
      'Write self-documenting code',
      'Apply SOLID principles',
      'Refactor code for clarity',
    ],
    content: `
# Clean Code Principles

Code is read more often than written. Make it readable.

## Meaningful Names

\`\`\`python
# Bad
def calc(a, b):
    return a * b * 0.08

# Good
def calculate_sales_tax(price, quantity, tax_rate=0.08):
    return price * quantity * tax_rate
\`\`\`

## Functions Should Do One Thing

\`\`\`python
# Bad: Does multiple things
def process_user(user):
    validate(user)
    save_to_db(user)
    send_email(user)
    log_action(user)

# Good: Single responsibility
def validate_user(user): ...
def save_user(user): ...
def notify_user(user): ...
\`\`\`

## SOLID Principles

- **S**ingle Responsibility
- **O**pen/Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion
    `,
    order: 2,
  },
  {
    id: 'se-3',
    slug: 'api-design-best-practices',
    title: 'API Design Best Practices',
    description: 'Design RESTful APIs that are intuitive, scalable, and developer-friendly.',
    category: 'Software Engineering',
    difficulty: 'Intermediate',
    duration: '90 min',
    topics: ['REST', 'API Design', 'HTTP', 'Documentation'],
    prerequisites: ['Web development basics', 'HTTP fundamentals'],
    learningOutcomes: [
      'Design consistent REST endpoints',
      'Handle errors gracefully',
      'Document APIs effectively',
    ],
    content: `
# API Design Best Practices

Great APIs are intuitive and consistent.

## RESTful Resource Naming

\`\`\`
GET    /users          # List users
POST   /users          # Create user
GET    /users/:id      # Get user
PUT    /users/:id      # Update user
DELETE /users/:id      # Delete user
GET    /users/:id/posts # User's posts
\`\`\`

## HTTP Status Codes

Use them correctly:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Error Responses

Be helpful:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email",
    "docs": "https://api.example.com/docs/errors"
  }
}
\`\`\`

## Pagination

Handle large datasets:

\`\`\`
GET /users?page=2&limit=20

{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
\`\`\`
    `,
    order: 3,
  },
  {
    id: 'se-4',
    slug: 'testing-strategies',
    title: 'Testing Strategies for Modern Applications',
    description: 'Implement comprehensive testing including unit tests, integration tests, and end-to-end tests.',
    category: 'Software Engineering',
    difficulty: 'Intermediate',
    duration: '120 min',
    topics: ['Unit Testing', 'Integration Testing', 'TDD', 'Mocking'],
    prerequisites: ['Programming proficiency', 'Basic testing concepts'],
    learningOutcomes: [
      'Write effective unit tests',
      'Design integration tests',
      'Apply TDD methodology',
    ],
    content: `
# Testing Strategies for Modern Applications

Tests are documentation that verify your code works.

## The Testing Pyramid

- Many unit tests (fast, isolated)
- Some integration tests (slower, connected)
- Few E2E tests (slowest, full system)

## Unit Testing

Test individual functions:

\`\`\`python
def test_calculate_discount():
    result = calculate_discount(100, 0.2)
    assert result == 80

def test_calculate_discount_zero():
    result = calculate_discount(100, 0)
    assert result == 100
\`\`\`

## Mocking Dependencies

Isolate units under test:

\`\`\`python
def test_user_service(mocker):
    mock_db = mocker.patch('app.database')
    mock_db.get_user.return_value = User(id=1)
    
    result = user_service.get_user(1)
    
    assert result.id == 1
    mock_db.get_user.assert_called_once_with(1)
\`\`\`

## Test-Driven Development

1. Write failing test
2. Write minimal code to pass
3. Refactor
4. Repeat
    `,
    order: 4,
  },
  {
    id: 'se-5',
    slug: 'microservices-architecture',
    title: 'Microservices Architecture Patterns',
    description: 'Design and implement microservices with proper communication patterns, data management, and deployment strategies.',
    category: 'Software Engineering',
    difficulty: 'Advanced',
    duration: '150 min',
    topics: ['Microservices', 'Distributed Systems', 'Service Communication', 'Data Patterns'],
    prerequisites: ['API design', 'Docker basics', 'Database experience'],
    learningOutcomes: [
      'Design service boundaries',
      'Implement inter-service communication',
      'Handle distributed data',
    ],
    content: `
# Microservices Architecture Patterns

Breaking monoliths into manageable services.

## Service Design Principles

- Single business capability
- Own your data
- Smart endpoints, dumb pipes
- Design for failure

## Communication Patterns

### Synchronous (REST/gRPC)
\`\`\`
Order Service ---> Inventory Service
              <--- 
\`\`\`

### Asynchronous (Message Queue)
\`\`\`
Order Service ---> [Queue] ---> Notification Service
\`\`\`

## Data Management

Each service owns its database:

- No shared databases
- Event-driven synchronization
- Eventual consistency
- Saga pattern for transactions

## Resilience Patterns

- Circuit breaker
- Retry with backoff
- Bulkhead isolation
- Timeout handling
    `,
    order: 5,
  },
  {
    id: 'se-6',
    slug: 'system-design-fundamentals',
    title: 'System Design Fundamentals',
    description: 'Learn to design scalable, reliable systems covering load balancing, caching, databases, and more.',
    category: 'Software Engineering',
    difficulty: 'Advanced',
    duration: '180 min',
    topics: ['System Design', 'Scalability', 'Reliability', 'Performance'],
    prerequisites: ['Software development experience', 'Networking basics'],
    learningOutcomes: [
      'Design systems for scale',
      'Make informed architecture decisions',
      'Balance trade-offs effectively',
    ],
    content: `
# System Design Fundamentals

Building systems that handle millions of users.

## Scalability Patterns

### Horizontal vs Vertical Scaling
- Vertical: Bigger machines
- Horizontal: More machines

### Load Balancing
Distribute traffic across servers:
- Round robin
- Least connections
- Weighted distribution

## Caching Strategies

Speed up reads:

- Browser cache
- CDN
- Application cache (Redis)
- Database cache

\`\`\`
User -> CDN -> Load Balancer -> App Server -> Cache -> Database
\`\`\`

## Database Scaling

- Read replicas
- Sharding
- Denormalization
- NoSQL for specific use cases

## Reliability

- Redundancy at every layer
- Health checks
- Graceful degradation
- Chaos engineering
    `,
    order: 6,
  },

  // Embedded Systems & IoT Tutorials (6)
  {
    id: 'iot-1',
    slug: 'introduction-to-embedded-systems',
    title: 'Introduction to Embedded Systems',
    description: 'Learn the fundamentals of embedded systems including microcontrollers, GPIO, and basic hardware interfacing.',
    category: 'Embedded Systems & IoT',
    difficulty: 'Beginner',
    duration: '60 min',
    topics: ['Microcontrollers', 'GPIO', 'Hardware Basics', 'Development Environment'],
    prerequisites: ['Basic C programming'],
    learningOutcomes: [
      'Understand microcontroller architecture',
      'Configure GPIO pins',
      'Build basic circuits',
    ],
    content: `
# Introduction to Embedded Systems

Embedded systems are computers designed for specific tasks.

## What is an Embedded System?

- Dedicated function
- Resource constrained
- Real-time requirements
- Hardware/software integration

## Popular Platforms

- **ESP32**: WiFi/BLE, dual-core, great for IoT
- **STM32**: Professional grade, wide range
- **Arduino**: Beginner-friendly, large community
- **Raspberry Pi Pico**: RP2040, affordable

## Development Setup

1. Install toolchain (ESP-IDF, STM32CubeIDE)
2. Connect development board
3. Write and flash code
4. Debug with serial output

## GPIO Basics

\`\`\`c
// Configure pin as output
gpio_set_direction(LED_PIN, GPIO_MODE_OUTPUT);

// Toggle LED
gpio_set_level(LED_PIN, 1);  // ON
gpio_set_level(LED_PIN, 0);  // OFF
\`\`\`
    `,
    order: 1,
  },
  {
    id: 'iot-2',
    slug: 'freertos-fundamentals',
    title: 'FreeRTOS Fundamentals',
    description: 'Master real-time operating system concepts including tasks, queues, semaphores, and scheduling.',
    category: 'Embedded Systems & IoT',
    difficulty: 'Beginner',
    duration: '90 min',
    topics: ['FreeRTOS', 'RTOS', 'Tasks', 'Scheduling'],
    prerequisites: ['C programming', 'Basic embedded knowledge'],
    learningOutcomes: [
      'Create and manage FreeRTOS tasks',
      'Use queues for inter-task communication',
      'Implement proper synchronization',
    ],
    content: `
# FreeRTOS Fundamentals

FreeRTOS is the leading RTOS for microcontrollers.

## Why Use an RTOS?

- Concurrent task execution
- Priority-based scheduling
- Timing guarantees
- Clean code organization

## Creating Tasks

\`\`\`c
void sensor_task(void *pvParameters) {
    while(1) {
        int value = read_sensor();
        xQueueSend(sensor_queue, &value, portMAX_DELAY);
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

xTaskCreate(sensor_task, "Sensor", 2048, NULL, 5, NULL);
\`\`\`

## Queues

Pass data between tasks:

\`\`\`c
QueueHandle_t queue = xQueueCreate(10, sizeof(int));

// Send
xQueueSend(queue, &data, portMAX_DELAY);

// Receive
xQueueReceive(queue, &received, portMAX_DELAY);
\`\`\`

## Semaphores

Synchronization primitives:

\`\`\`c
SemaphoreHandle_t mutex = xSemaphoreCreateMutex();

xSemaphoreTake(mutex, portMAX_DELAY);
// Critical section
xSemaphoreGive(mutex);
\`\`\`
    `,
    order: 2,
  },
  {
    id: 'iot-3',
    slug: 'sensor-interfacing',
    title: 'Sensor Interfacing & Data Acquisition',
    description: 'Learn to interface various sensors using I2C, SPI, and ADC including calibration and filtering.',
    category: 'Embedded Systems & IoT',
    difficulty: 'Intermediate',
    duration: '120 min',
    topics: ['I2C', 'SPI', 'ADC', 'Sensors', 'Signal Processing'],
    prerequisites: ['Embedded basics', 'Electronics fundamentals'],
    learningOutcomes: [
      'Interface sensors using I2C and SPI',
      'Read and calibrate analog sensors',
      'Implement basic filtering',
    ],
    content: `
# Sensor Interfacing & Data Acquisition

Connect the physical world to your embedded system.

## Communication Protocols

### I2C
Two-wire protocol for multiple devices:

\`\`\`c
i2c_master_write_read_device(
    I2C_PORT,
    SENSOR_ADDR,
    &reg,
    1,
    data,
    2,
    pdMS_TO_TICKS(100)
);
\`\`\`

### SPI
High-speed, full-duplex:

\`\`\`c
spi_transaction_t t = {
    .length = 8,
    .tx_buffer = &cmd,
    .rx_buffer = &result
};
spi_device_transmit(spi, &t);
\`\`\`

## ADC Reading

\`\`\`c
adc1_config_width(ADC_WIDTH_BIT_12);
adc1_config_channel_atten(ADC_CHANNEL_0, ADC_ATTEN_DB_11);

int raw = adc1_get_raw(ADC_CHANNEL_0);
float voltage = raw * 3.3 / 4095;
\`\`\`

## Filtering

Smooth noisy readings:

\`\`\`c
// Moving average
float filter(float new_val) {
    static float buffer[10];
    static int idx = 0;
    
    buffer[idx] = new_val;
    idx = (idx + 1) % 10;
    
    float sum = 0;
    for(int i = 0; i < 10; i++) sum += buffer[i];
    return sum / 10;
}
\`\`\`
    `,
    order: 3,
  },
  {
    id: 'iot-4',
    slug: 'mqtt-iot-communication',
    title: 'MQTT for IoT Communication',
    description: 'Implement reliable IoT communication using MQTT protocol with proper QoS and security.',
    category: 'Embedded Systems & IoT',
    difficulty: 'Intermediate',
    duration: '90 min',
    topics: ['MQTT', 'IoT Protocols', 'Pub/Sub', 'Security'],
    prerequisites: ['Networking basics', 'Embedded development'],
    learningOutcomes: [
      'Implement MQTT client on embedded device',
      'Design topic hierarchies',
      'Handle connection reliability',
    ],
    content: `
# MQTT for IoT Communication

MQTT is the standard protocol for IoT messaging.

## Why MQTT?

- Lightweight (minimal overhead)
- Publish/Subscribe pattern
- Quality of Service levels
- Persistent sessions

## Topic Design

Structure topics logically:

\`\`\`
home/
  living_room/
    temperature
    humidity
  kitchen/
    temperature
    smoke_detector
\`\`\`

## ESP32 MQTT Client

\`\`\`c
esp_mqtt_client_config_t config = {
    .broker.address.uri = "mqtt://broker.local",
    .credentials.username = "device1",
    .credentials.authentication.password = "secret"
};

esp_mqtt_client_handle_t client = esp_mqtt_client_init(&config);
esp_mqtt_client_start(client);

// Publish
esp_mqtt_client_publish(client, "sensors/temp", "25.5", 0, 1, 0);

// Subscribe
esp_mqtt_client_subscribe(client, "commands/#", 0);
\`\`\`

## QoS Levels

- QoS 0: At most once (fire and forget)
- QoS 1: At least once (acknowledged)
- QoS 2: Exactly once (guaranteed)
    `,
    order: 4,
  },
  {
    id: 'iot-5',
    slug: 'edge-ml-tflite',
    title: 'Edge ML with TensorFlow Lite',
    description: 'Deploy machine learning models on microcontrollers using TensorFlow Lite Micro.',
    category: 'Embedded Systems & IoT',
    difficulty: 'Advanced',
    duration: '150 min',
    topics: ['TensorFlow Lite', 'Edge ML', 'Model Optimization', 'Inference'],
    prerequisites: ['ML basics', 'Embedded development', 'C++ knowledge'],
    learningOutcomes: [
      'Convert models for microcontrollers',
      'Optimize models for edge deployment',
      'Run inference on embedded devices',
    ],
    content: `
# Edge ML with TensorFlow Lite

Run AI on microcontrollers.

## Why Edge ML?

- Privacy (data stays local)
- Latency (no network round-trip)
- Reliability (works offline)
- Cost (no cloud inference fees)

## Model Conversion

\`\`\`python
# Convert to TFLite
converter = tf.lite.TFLiteConverter.from_saved_model(model_path)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.target_spec.supported_types = [tf.int8]
tflite_model = converter.convert()

# Convert to C array
xxd -i model.tflite > model_data.cc
\`\`\`

## Inference on ESP32

\`\`\`cpp
#include "tensorflow/lite/micro/micro_interpreter.h"

// Setup
tflite::MicroInterpreter interpreter(model, resolver, 
                                      tensor_arena, kArenaSize);
interpreter.AllocateTensors();

// Run inference
TfLiteTensor* input = interpreter.input(0);
memcpy(input->data.f, input_data, input_size);

interpreter.Invoke();

TfLiteTensor* output = interpreter.output(0);
float result = output->data.f[0];
\`\`\`

## Optimization Techniques

- Quantization (float32 → int8)
- Pruning (remove weights)
- Knowledge distillation
- Architecture search
    `,
    order: 5,
  },
  {
    id: 'iot-6',
    slug: 'iot-system-architecture',
    title: 'IoT System Architecture',
    description: 'Design complete IoT systems including device management, cloud integration, and security.',
    category: 'Embedded Systems & IoT',
    difficulty: 'Advanced',
    duration: '180 min',
    topics: ['System Architecture', 'Cloud Integration', 'Security', 'Device Management'],
    prerequisites: ['Embedded development', 'Cloud basics', 'Networking'],
    learningOutcomes: [
      'Design scalable IoT architectures',
      'Implement secure device communication',
      'Build device management systems',
    ],
    content: `
# IoT System Architecture

Design IoT systems that scale.

## Architecture Layers

\`\`\`
Devices → Gateway → Cloud → Applications
   ↓         ↓        ↓          ↓
Sensors   Protocol  Storage    Dashboard
Actuators  Bridge   Analytics  Mobile App
          Security  ML/AI      Alerts
\`\`\`

## Security Best Practices

- Unique device credentials
- TLS for all communication
- Certificate-based auth
- Secure boot
- OTA update verification
- Key rotation

## Device Management

Essential capabilities:

- Device provisioning
- Configuration updates
- Firmware updates (OTA)
- Health monitoring
- Remote diagnostics

## Cloud Integration

\`\`\`
Device → MQTT → IoT Core → Lambda → DynamoDB
                    ↓
               Device Shadow
                    ↓
               Rules Engine → SNS → Alerts
\`\`\`

## Scalability Considerations

- Stateless device connections
- Message queuing for bursts
- Time-series databases
- Edge processing where possible
    `,
    order: 6,
  },
]

export function getTutorialsByCategory(category: string): Tutorial[] {
  return tutorials
    .filter(t => t.category === category)
    .sort((a, b) => a.order - b.order)
}

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find(t => t.slug === slug)
}

export function getCategories(): string[] {
  return ['AI', 'Software Engineering', 'Embedded Systems & IoT']
}
