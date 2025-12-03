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