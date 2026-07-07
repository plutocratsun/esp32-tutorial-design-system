export const projects = [
  {
    id: "blink",
    title: "Project 1 — Blink an LED",
    parts: ["LED-Red x1", "Resistor 220R x1", "830-point breadboard", "M-M Dupont cable x2"],
    wiring: "LED long leg (anode) → GPIO5 → 220R resistor → LED short leg (cathode) → GND",
    code: `#define LED_PIN 5

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}`,
    tip: { type: "tip", text: "LEDs only light one way — if it stays dark, flip it around on the breadboard." },
  },
  {
    id: "potentiometer",
    title: "Project 2 — Read a Potentiometer",
    parts: ["Potentiometer (10k) x1", "M-M Dupont cable x3"],
    wiring: "Outer pins → 3V3 and GND. Middle wiper pin → GPIO34 (ADC1_CH6, input-only).",
    code: `#define POT_PIN 34

void setup() {
  Serial.begin(115200);
}

void loop() {
  int raw = analogRead(POT_PIN);       // 0-4095 (12-bit ADC)
  int percent = map(raw, 0, 4095, 0, 100);
  Serial.printf("raw=%d  %d%%\\n", raw, percent);
  delay(200);
}`,
    tip: { type: "tip", text: "GPIO34-39 are input-only ADC pins — great for sensors, but you can't drive an LED from them." },
  },
  {
    id: "oled",
    title: "Project 3 — OLED \"Hello ESP32\"",
    parts: ["0.96\" OLED x1", "F-F Dupont cable x4"],
    wiring: "VCC → 3V3, GND → GND, SDA → GPIO21, SCL → GPIO22 (I2C).",
    code: `#include <Wire.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 20);
  display.println("Hello ESP32!");
  display.display();
}

void loop() {}`,
    tip: {
      type: "tip",
      text: "Install \"Adafruit SSD1306\" and \"Adafruit GFX\" from Library Manager before uploading.",
    },
  },
  {
    id: "dht11",
    title: "Project 4 — Temperature & Humidity",
    parts: ["DHT11 module x1", "F-M Dupont cable x3"],
    wiring: "OUT → GPIO4, VCC → 3V3, GND → GND.",
    code: `#include <DHT.h>

#define DHT_PIN 4
DHT dht(DHT_PIN, DHT11);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  Serial.printf("Temp: %.1f C  Humidity: %.1f%%\\n", t, h);
  delay(2000);
}`,
    tip: { type: "warning", text: "DHT11 only updates once per second — reading faster than that returns stale or NaN values." },
  },
  {
    id: "pir-alarm",
    title: "Project 5 — Motion Alarm",
    parts: ["HC-SR501 PIR sensor x1", "Passive Buzzer x1", "F-M Dupont cable x4"],
    wiring: "PIR OUT → GPIO27. Buzzer + → GPIO26, Buzzer − → GND.",
    code: `#define PIR_PIN 27
#define BUZZER_PIN 26

void setup() {
  pinMode(PIR_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  if (digitalRead(PIR_PIN) == HIGH) {
    tone(BUZZER_PIN, 1000);
  } else {
    noTone(BUZZER_PIN);
  }
}`,
    tip: { type: "tip", text: "The PIR needs ~30-60s to calibrate to the room after power-up — ignore false triggers at first." },
  },
  {
    id: "night-light",
    title: "Project 6 — Light-Activated Night Light",
    parts: ["Photosensitive resistor module x1", "LED-Yellow x1", "Resistor 220R x1", "M-M Dupont cable x3"],
    wiring: "Module OUT → GPIO35. LED anode → GPIO32 → resistor → GND.",
    code: `#define LIGHT_PIN 35
#define LED_PIN 32
#define DARK_THRESHOLD 1500

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  int light = analogRead(LIGHT_PIN);
  digitalWrite(LED_PIN, light < DARK_THRESHOLD ? HIGH : LOW);
  delay(200);
}`,
    tip: { type: "tip", text: "Print analogRead(LIGHT_PIN) to Serial first and pick DARK_THRESHOLD from your room's real values." },
  },
  {
    id: "obstacle-sensor",
    title: "Project 7 — Parking Sensor",
    parts: ["Obstacle avoidance module x1", "Active Buzzer x1", "M-M Dupont cable x4"],
    wiring: "Module OUT → GPIO33. Buzzer + → GPIO25, Buzzer − → GND.",
    code: `#define OBSTACLE_PIN 33
#define BUZZER_PIN 25

void setup() {
  pinMode(OBSTACLE_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  bool blocked = digitalRead(OBSTACLE_PIN) == LOW; // module pulls LOW on detection
  digitalWrite(BUZZER_PIN, blocked ? HIGH : LOW);
}`,
    tip: { type: "tip", text: "The onboard potentiometer on the module tunes detection distance — turn it while testing." },
  },
  {
    id: "rgb-led",
    title: "Project 8 — RGB Color Cycle",
    parts: ["LED-RGB x1", "Resistor 220R x3", "M-M Dupont cable x3"],
    wiring: "R → GPIO16, G → GPIO17, B → GPIO18, each through a 220R resistor. Common cathode → GND.",
    code: `#define R_PIN 16
#define G_PIN 17
#define B_PIN 18

void setColor(int r, int g, int b) {
  analogWrite(R_PIN, r);
  analogWrite(G_PIN, g);
  analogWrite(B_PIN, b);
}

void setup() {}

void loop() {
  setColor(255, 0, 0); delay(500);
  setColor(0, 255, 0); delay(500);
  setColor(0, 0, 255); delay(500);
}`,
    tip: { type: "warning", text: "Check your RGB LED's datasheet — common-cathode wires to GND, common-anode wires to 3V3 with inverted logic." },
  },
  {
    id: "relay",
    title: "Project 9 — Relay-Controlled Device",
    parts: ["5V 2-Channel Relay module x1", "M-M Dupont cable x3"],
    wiring: "VCC → 5V, GND → GND, IN1 → GPIO13. Wire the load to the relay's COM/NO screw terminals.",
    code: `#define RELAY_PIN 13

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
}

void loop() {
  digitalWrite(RELAY_PIN, HIGH);
  delay(2000);
  digitalWrite(RELAY_PIN, LOW);
  delay(2000);
}`,
    tip: {
      type: "danger",
      text: "For this tutorial, switch a low-voltage DC load (a battery-powered fan or LED strip), not mains AC. Mains wiring needs proper insulation and experience — a mistake here can be lethal.",
    },
  },
  {
    id: "button-toggle",
    title: "Project 10 — Push-Button Toggle",
    parts: ["Button Switch x1", "LED-Green x1", "Resistor 220R x1", "M-M Dupont cable x3"],
    wiring: "Button → GPIO14 (INPUT_PULLUP) and GND. LED anode → GPIO2 → resistor → GND.",
    code: `#define BUTTON_PIN 14
#define LED_PIN 2

bool ledState = false;
bool lastButton = HIGH;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  bool button = digitalRead(BUTTON_PIN);
  if (button == LOW && lastButton == HIGH) {
    ledState = !ledState;
    digitalWrite(LED_PIN, ledState);
    delay(50); // debounce
  }
  lastButton = button;
}`,
    tip: { type: "tip", text: "INPUT_PULLUP means the pin reads LOW when pressed — no external resistor needed on the button itself." },
  },
];
