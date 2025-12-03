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

