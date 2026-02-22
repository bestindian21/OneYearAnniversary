# 🎉 Anniversary Website - Quick Setup Guide

Hey! Your anniversary website is ready to go! Here's exactly what you need to do to add your drone video and 30 photos.

## 📁 Folder Structure

Your project should look like this:

```
Happy 1 Year/
├── index.html          ✅ Already created
├── styles.css          ✅ Already created
├── script.js           ✅ Already created
├── README.md           ✅ Already created
├── SETUP_GUIDE.md      ✅ This file
│
├── videos/             👈 CREATE THIS FOLDER
│   └── drone.mp4       👈 PUT YOUR DRONE VIDEO HERE
│
└── photos/             👈 CREATE THIS FOLDER
    ├── photo1.jpg      👈 PUT YOUR 30 PHOTOS HERE
    ├── photo2.jpg
    ├── photo3.jpg
    ...
    └── photo30.jpg
```

## 🎬 Step 1: Add Your Drone Video

### 1a. Create the videos folder
- In your project directory (`Happy 1 Year`), create a new folder called `videos`

### 1b. Add your drone video
- Save your drone footage as an MP4 file
- Place it in the `videos/` folder
- **Recommended naming:** `drone.mp4`

### 1c. Update index.html
Open `index.html` and find this line:

```html
<video class="drone-video" autoplay muted loop playsinline>
    <source src="" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

Replace the empty `src=""` with your video path:

```html
<video class="drone-video" autoplay muted loop playsinline>
    <source src="videos/drone.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**That's it for the video!** It will automatically:
- ✅ Play on repeat (loop)
- ✅ Auto-play when page loads
- ✅ Mute automatically
- ✅ Be responsive on all devices

---

## 📸 Step 2: Add Your 30 Photos

### 2a. Create the photos folder
- In your project directory, create a new folder called `photos`

### 2b. Prepare your photos
- Select 30 of your favorite memories together
- Resize them to optimized dimensions (suggested: 600x600px or landscape)
- Compress them (~50-100kb each is ideal)
- Name them: `photo1.jpg`, `photo2.jpg`, ... `photo30.jpg`
- Save them all in the `photos/` folder

### 2c. Update index.html
Open `index.html` and search for `<div class="falling-photo">` (there are 30 of these)

For each one, replace the empty `src=""`:

**Before:**
```html
<div class="falling-photo" style="--index: 0;">
    <img src="" alt="Memory" class="photo-img" />
</div>
```

**After:**
```html
<div class="falling-photo" style="--index: 0;">
    <img src="photos/photo1.jpg" alt="Memory" class="photo-img" />
</div>
```

Do this for all 30 photos:
- `--index: 0;` → `src="photos/photo1.jpg"`
- `--index: 1;` → `src="photos/photo2.jpg"`
- `--index: 2;` → `src="photos/photo3.jpg"`
- ... and so on through photo30

**✨ Once done, the photos will:**
- Fall continuously in a beautiful animation
- Rotate as they cascade down
- Be clickable for full-screen previews
- Pause and brighten on hover
- Work perfectly on mobile devices

---

## 🚀 Step 3: Test It Out!

1. **Open your HTML file** - Just double-click `index.html` in your file explorer
2. **Scroll through the site** - Check out the drone video and falling photos
3. **Click a photo** - Any falling photo can be clicked to see a big preview
4. **Close the preview** - Click the X button or press Escape

---

## 📤 Step 4: Push to GitHub Pages

When you're ready to share it:

1. Create a GitHub repository
2. Upload all your files (including `videos/` and `photos/` folders)
3. Enable GitHub Pages in your repo settings
4. Share the link with your GF! 💕

---

## 🎨 Optional Customizations

### Change the Love Letter
Edit the letter section in `index.html` to add your own heartfelt message.

### Adjust Photo Sizes
If photos look too big/small, edit `styles.css`:
- Find `.falling-photo { width: 120px; height: 120px; }`
- Change the dimensions (try 100px or 140px)

### Change Colors
All Valentine's colors can be customized in `styles.css`:
- `#c41e3a` (dark red)
- `#ff69b4` (hot pink)

---

## 💡 Pro Tips

✅ **For the drone video:**
- Keep it under 20MB for fast loading
- Use 16:9 aspect ratio
- Consider compressing with ffmpeg if it's large

✅ **For the photos:**
- Mix portrait, landscape, and square aspect ratios
- Use consistent lighting/filter for cohesive look
- Optimize to ~60kb each for best performance
- The falling animation looks great with variety!

✅ **For the site:**
- Test on mobile before sharing
- Ask friends to try the preview modal
- Make sure all 30 photos load before going public

---

## ❓ FAQ

**Q: Can I use different video formats?**
A: MP4 works best. You can also use WebM or OGG if you know how.

**Q: What if I don't have 30 photos?**
A: You can remove the extra photo divs from the HTML. Or duplicate your favorites!

**Q: The photos are loading slowly**
A: Compress your images more. Use TinyPNG or similar tools.

**Q: Can I add more than 30 photos?**
A: Yes! Copy-paste more `<div class="falling-photo">` blocks and increment the `--index` value.

**Q: How do I change the countdown date?**
A: It's already set to February 24, 2025 (your anniversary). No changes needed!

---

## 🎁 You're All Set!

Once you add your video and photos, your website will be:
- ✅ Romantic & beautiful
- ✅ Interactive & fun
- ✅ Mobile responsive
- ✅ Ready to share

Your GF is going to LOVE this! 💕

Questions? Check the README.md for more details!

---

*Made with 💕 by Byte-Buddy* 🐶