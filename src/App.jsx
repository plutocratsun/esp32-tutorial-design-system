import {
  Button,
  StepCard,
  CodeBlock,
  Callout,
  ChecklistItem,
  WiringDiagramFrame,
  ProjectSection,
} from "./components";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <header className="text-center">
        <h1 className="font-heading text-4xl font-bold text-ink">
          Setting Up Your <span className="text-primary">ESP32</span>
        </h1>
        <p className="mt-2 text-ink/60">
          Creator Kit for Projects — Starter Kit for ESP-32S WIFI development.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <StepCard
          number={1}
          title="What's in the kit"
          media={
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              <ChecklistItem checked>ESP32 Development Board</ChecklistItem>
              <ChecklistItem checked>0.96" OLED</ChecklistItem>
              <ChecklistItem checked>830-Point Breadboard</ChecklistItem>
              <ChecklistItem checked>Obstacle Avoidance Module</ChecklistItem>
              <ChecklistItem checked>Photosensitive Resistor Module</ChecklistItem>
              <ChecklistItem checked>DHT11 Temp/Humidity Module</ChecklistItem>
              <ChecklistItem checked>HC-SR501 PIR Motion Sensor</ChecklistItem>
              <ChecklistItem checked>Potentiometer (10k)</ChecklistItem>
              <ChecklistItem checked>Micro-USB Cable</ChecklistItem>
              <ChecklistItem checked>Resistors 220R/1k/10k x30</ChecklistItem>
              <ChecklistItem checked>Passive + Active Buzzer</ChecklistItem>
              <ChecklistItem checked>5V 2-Channel Relay Module</ChecklistItem>
              <ChecklistItem checked>Button Switch x6</ChecklistItem>
              <ChecklistItem checked>Dupont Cables (F-M, F-F, M-M)</ChecklistItem>
              <ChecklistItem checked>LEDs — Red, Yellow, Green, RGB</ChecklistItem>
            </ul>
          }
        >
          Everything below uses only parts from this kit.
        </StepCard>

        <StepCard number={2} title="Install Arduino IDE">
          Download the latest Arduino IDE from arduino.cc and install it for your OS.
        </StepCard>

        <StepCard
          number={3}
          title="Add ESP32 board support"
          media={
            <CodeBlock language="url">
              https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
            </CodeBlock>
          }
        >
          Go to File → Preferences and paste this URL into "Additional Board Manager URLs".
        </StepCard>

        <StepCard number={4} title="Install the board package">
          Tools → Board Manager → search "esp32" → Install.
        </StepCard>

        <StepCard
          number={5}
          title="Select your board & port"
          media={
            <WiringDiagramFrame caption="Tools → Board → ESP32 Dev Module">
              <span className="font-mono text-sm text-ink/50">[ board diagram ]</span>
            </WiringDiagramFrame>
          }
        >
          Tools → Board → ESP32 Dev Module, then Tools → Port → select your COM port.
        </StepCard>

        <StepCard number={6} title="Upload a test sketch">
          Open the Blink example and hit Upload. Hold the BOOT button if the upload
          doesn't start automatically.
          <div className="mt-3">
            <Callout type="warning">
              If upload fails, hold BOOT while it says "Connecting...", then release.
            </Callout>
          </div>
        </StepCard>
      </section>

      <nav className="sticky top-4 z-10 mt-12 flex flex-wrap justify-center gap-2 rounded-full border border-black/5 bg-white/90 p-2 backdrop-blur">
        {projects.map((p, i) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="rounded-full px-3 py-1 font-heading text-sm font-medium text-ink/70 hover:bg-primary/10 hover:text-primary"
          >
            {i + 1}
          </a>
        ))}
      </nav>

      <section className="mt-6 space-y-8">
        {projects.map((project) => (
          <ProjectSection key={project.id} {...project} />
        ))}
      </section>

      <footer className="mt-10 flex justify-center gap-3">
        <Button variant="primary">You're ready to build!</Button>
        <Button variant="secondary">View next tutorial</Button>
      </footer>
    </div>
  );
}
