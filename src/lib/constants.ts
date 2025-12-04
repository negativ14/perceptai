export const currentCode = {
  Python: `import asyncio
from dragoneye import Dragoneye, Video

async def main():
    client = Dragoneye(api_key="YOUR_ACCESS_TOKEN")

    # Example: predict from a video
    media = Video.from_path("example.mp4")
    prediction_result = await client.classification.predict_video(
        media=media,
        model_name="recognize_anything/your_model",
    )

    print(prediction_result)

asyncio.run(main())`,

  Javascript: `import { Dragoneye } from "dragoneye-node";

const dragoneyeClient = new Dragoneye({
  apiKey: "YOUR_ACCESS_TOKEN",
});

const media = await Dragoneye.Video.fromFilePath("example.mp4");

const results = await dragoneyeClient.classification.predictVideo(
  media,
  "recognize_anything/your_model"
);

console.log(results.predictions);`,
};

export const faqs = [
  {
    question: "How does the $10 upfront redit works?",
    answer:
      "When you sign in to the Playground for the first time, you receive $10 in credits to start using the API immediately.",
  },
  {
    question: "What happens when i run out of credits?",
    answer:
      "Once your credits are depleted, you can easily add more credits to your account in the Settings page of the Playground. You maintain complete control over your spending.",
  },
  {
    question: "How is video processing calculated?",
    answer:
      "Pricing is based on video duration and frame rate. The base rate of $0.046 per minute applies to processing at 1 frame per second (FPS). If you process at higher frame rates (e.g., 5 FPS or 30 FPS), the cost scales proportionally. For example, 1 minute at 5 FPS would cost 5x the base rate.",
  },
  {
    question: "Whats included in the Scaled tier?",
    answer:
      "The Scaled tier offers volume-based pricing discounts for high-volume usage, access to our bespoke model finetuning feature (Beta), and priority support. Contact us to discuss custom pricing based on your specific needs.",
  },
  {
    question: "Can i switch between tiers?",
    answer:
      "Yes! You can start with the Pay-as-you-go tier and upgrade to Scaled pricing as your needs grow. Contact us when you're ready to discuss volume pricing options.",
  },
  {
    question: "Do you offer refunds on unused credits?",
    answer:
      "Credits are non-refundable but never expire. You can use them at your own pace without worrying about losing your investment. For enterprise agreements on the Scaled tier, contact us to discuss specific terms.",
  },
  {
    question: "Is there a free trail?",
    answer:
      "We provide $10 upfront credit when you sign up for the Playground. You can explore all features, test the API, and build custom models without any additional commitment. You can also try our models in the Playground before signing up.",
  },
];

export const pricingPlansOld = [
  {
    title: "Pay-as-you-go",
    subtitle: "Usage-Based Pricing",
    description: "Perfect for developers and small teams getting started",
    offer: "$10 free credits",
    offerCondition: "when you sign up",
    features: [
      "Interactive predictions in the playground",
      "Build custom models in plain English",
      "Customize models from Model Templates",
      "Python and Node SDK usage",
      "$0.046 per minute of video at 1fps",
      "$0.005 per image",
    ],
    cta: "Get Started",
  },
  {
    title: "Scaled",
    subtitle: "Volume Pricing",
    description: "For teams processing high volumes of video",
    offer: "Custom",
    offerCondition: "tailored to your needs",
    features: [
      "Everything in Pay-as-you-go",
      "Volume pricing discounts",
      "Bespoke model finetuning",
      "Priority support",
    ],
    cta: "Contact Us",
  },
];

export const pricingPlans = [
  {
    title: "Pay-as-you-go",
    subtitle: "Usage-Based Pricing",
    description: "Perfect for developers and small teams getting started",
    offer: "$10 free credits",
    offerCondition: "when you sign up",
    features: [
      { text: "Interactive predictions in the playground", beta: false },
      { text: "Build custom models in plain English", beta: false },
      { text: "Customize models from Model Templates", beta: false },
      { text: "Python and Node SDK usage", beta: false },
      { text: "$0.046 per minute of video at 1fps", beta: false },
      { text: "$0.005 per image", beta: false },
    ],
    cta: "Get Started",
  },
  {
    title: "Scaled",
    subtitle: "Volume Pricing",
    description: "For teams processing high volumes of video",
    offer: "Custom",
    offerCondition: "tailored to your needs",
    features: [
      { text: "Everything in Pay-as-you-go", beta: false },
      { text: "Volume pricing discounts", beta: false },
      { text: "Bespoke model finetuning", beta: true }, 
      { text: "Priority support", beta: false },
    ],
    cta: "Contact Us",
  },
];

