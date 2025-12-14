export const currentCode = {
  Python: `import asyncio
from perceptai import Client, MediaInput

async def run():
    ai = Client(api_key="YOUR_API_KEY")

    video = MediaInput.from_file("sample.mp4")

    result = await ai.vision.detect(
        source=video,
        prompt="detect moving objects"
    )

    print(result)

asyncio.run(run())`,

  Javascript: `import { PerceptAI } from "@perceptai/sdk";

const client = new PerceptAI({
  apiKey: "YOUR_API_KEY",
});

const video = await PerceptAI.media.fromFile("sample.mp4");

const response = await client.vision.detect({
  media: video,
  prompt: "detect moving objects",
});

console.log(response);`,
};

export const faqs = [
  {
    question: "How does the free credit work?",
    answer:
      "When you first access the Playground, your account is preloaded with credits so you can start testing the API immediately.",
  },
  {
    question: "What happens if I use all my credits?",
    answer:
      "Once your balance reaches zero, you can add more credits at any time from the Playground settings. You stay in full control of your usage and spending.",
  },
  {
    question: "How is video usage measured?",
    answer:
      "Video pricing depends on both duration and frame rate. Costs are calculated per minute at a default of 1 frame per second. Processing at higher frame rates increases usage proportionally.",
  },
  {
    question: "What’s included in the Growth plan?",
    answer:
      "The Growth plan is built for higher-volume workloads and includes discounted usage rates, access to advanced model customization features (beta), and prioritized support. Pricing is tailored to your usage needs.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. You can begin on a usage-based plan and move to a higher-volume plan as your requirements increase. Reach out when you’re ready to upgrade.",
  },
  {
    question: "Are unused credits refundable?",
    answer:
      "Credits do not expire but cannot be refunded. You’re free to use them at your own pace. Enterprise customers may request custom terms.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. New users receive free credits to explore the Playground, test the API, and build models without any upfront commitment. You can also preview available models before signing up.",
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    subtitle: "Flexible Usage",
    description: "Best for individuals and early-stage teams exploring the platform",
    offer: "$15 free credits",
    offerCondition: "included on signup",
    features: [
      { text: "Live testing in the interactive studio", beta: false },
      { text: "Create detection logic using natural language", beta: false },
      { text: "Access to ready-made detection categories", beta: false },
      { text: "Python and JavaScript SDK support", beta: false },
      { text: "$0.049 per minute of video at base frame rate", beta: false },
      { text: "$0.006 per processed image", beta: false },
    ],
    cta: "Start Building",
  },
  {
    title: "Growth",
    subtitle: "Scaled Usage",
    description: "Designed for teams running larger or continuous workloads",
    offer: "Custom pricing",
    offerCondition: "based on volume",
    features: [
      { text: "All features from Starter", beta: false },
      { text: "Lower per-unit rates at higher usage", beta: false },
      { text: "Advanced model customization", beta: true },
      { text: "Faster support response times", beta: false },
    ],
    cta: "Talk to Sales",
  },
];
