# Anniversary Website

A beautiful, interactive one-year anniversary website built with HTML, CSS, and JavaScript. 💕

## Features

✨ **Interactive Elements:**
- Countdown timer - counts UP the days you've been together! 📈
- **DRONE VIDEO** - Full-width horizontal video playing on loop 🎬
- **FALLING PHOTOS ANIMATION** - 30 romantic photos cascade down with parallax effect
- **CLICK ANY PHOTO** - Opens beautiful full-screen preview modal 🖼️
- Close preview with X button or Escape key
- Interactive brightness effect on hover
- Heartfelt love letter section
- Love message section with local storage
- Celebration animation when you reach 365 days together! 💕
- Smooth animations and transitions
- Responsive design for all devices

## Customization

### 🎬 Add Your Drone Video!
Your beautiful drone footage plays on loop at the top of your memories section.

**How to add your video:**

1. Save your drone video as an MP4 file
2. Create a `videos/` folder in the same directory as `index.html`
3. Place your video file in that folder (e.g., `videos/drone.mp4`)
4. In `index.html`, find the `<video>` tag and update the `src`:

```html
<video class="drone-video" autoplay muted loop playsinline>
    <source src="videos/drone.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**Pro Tips:**
- Optimize video to ~5-20MB for web (use ffmpeg or online tools)
- 16:9 aspect ratio works best
- The video is set to `muted` and `autoplay` with `loop` for seamless playback
- Video will be responsive on all devices

### 🎉 Add Your 30 Photos!
The site has 30 photo slots ready for your memories! Each photo will cascade down the screen in a beautiful falling animation. **Click any photo to see a big preview!**

**How to add your photos:**

1. Create a `photos/` folder in the same directory as `index.html`
2. Add your 30 photos named `photo1.jpg`, `photo2.jpg`, ... `photo30.jpg`
3. In `index.html`, find the `<div class="falling-photo">` sections (there are 30)
4. Replace the empty `src=""` with your photo path:

```html
<!-- Photo 1 -->
<div class="falling-photo" style="--index: 0;">
    <img src="photos/photo1.jpg" alt="Memory" class="photo-img" />
</div>

<!-- Photo 2 -->
<div class="falling-photo" style="--index: 1;">
    <img src="photos/photo2.jpg" alt="Memory" class="photo-img" />
</div>

<!-- Continue for all 30 photos... -->
```

**Pro Tips:**
- Use square or nearly-square aspect ratio photos (they look best at 120x120px)
- Optimize images to ~50-100kb each for faster loading
- The photos will rotate as they fall - mix vertical and horizontal photos for cool effect
- **Click any photo to see a beautiful full-screen preview!** 💕
- Press `Escape` or click the X to close the preview

### Customize the Love Letter
Edit the letter section in `index.html` to write your own heartfelt message.

## Colors
The site uses Walmart brand colors:
- **Primary Blue:** `#0053e2`
- **Accent Gold:** `#ffc220`

You can customize these by editing the CSS variables in `styles.css`.

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Enable GitHub Pages in repository settings
3. Select the main/master branch as the source
4. Your site will be live at `https://yourusername.github.io/repo-name`

Or name your repo `yourusername.github.io` for a site-wide domain.

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips

📸 **For Photos:**
- Use high-quality images (optimized for web ~100-200kb each)
- Aspect ratio ~16:9 or 1:1 for best results
- Consider using free image optimization tools

🎨 **For Design:**
- Update the confetti colors in `script.js` if desired
- Modify animations in `styles.css` for different effects
- Change section padding/spacing for your preference

💖 **Anniversary Date:**
- Update the countdown date in `script.js` to your anniversary
- Change the footer date to match your celebration date

---

Made with 💙 by Byte-Buddy. Happy Anniversary! 😘
