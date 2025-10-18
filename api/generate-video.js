const Replicate = require('replicate');

module.exports = async function handler(req, res) {
  console.log('=== VIDEO GENERATION API CALLED ===');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiToken = process.env.REPLICATE_API_TOKEN;
    if (!apiToken) {
      console.error('Missing REPLICATE_API_TOKEN environment variable');
      return res.status(500).json({ error: 'API token not configured' });
    }

    console.log('Generating video with prompt:', prompt);
    const replicate = new Replicate({ auth: apiToken });

    const output = await replicate.run(
      "minimax/video-01",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    console.log('Video generated successfully');

    // The output is a file object with a url() method
    const videoUrl = output.url ? output.url() : (output[0] || output);

    return res.status(200).json({
      success: true,
      videoUrl: videoUrl,
      prompt,
    });
  } catch (error) {
    console.error('Video generation error:', error);
    return res.status(500).json({
      error: 'Failed to generate video',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
