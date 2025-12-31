# Video Upload Reminder

## Video Gen Background Video

The Video Generation mode now supports a background video that autoplays when the mode is active.

### Required Action:
Upload your video file to: `static/videos/video-gen-bg.mp4`

### Video Behavior:
- ✅ Autoplays when "Video Gen" mode is selected
- ✅ Loops continuously
- ✅ Muted playback
- ✅ Stops/hides when user clicks in the text input field
- ✅ Resumes when user clicks away from input (onBlur)
- ✅ Stops when user switches to another mode
- ✅ Positioned behind all UI elements (z-index: 0)
- ✅ 40% opacity for subtle effect
- ✅ Covers full screen with object-fit: cover

### Current Implementation:
File location in code: `/static/videos/video-gen-bg.mp4`

### Video Specifications (Recommended):
- Format: MP4
- Codec: H.264
- Resolution: 1920x1080 or higher
- Aspect Ratio: 16:9
- File size: Keep under 10MB for fast loading
- Duration: 5-15 seconds (loops automatically)

### To Upload:
1. Place your video file in `static/videos/`
2. Rename it to `video-gen-bg.mp4`
3. Commit and push to deploy

Note: The video will only show when "Video Gen" feature is selected from the feature buttons.
