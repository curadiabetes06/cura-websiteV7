# Vercel Deployment Guide

## Quick Deployment Steps

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository

2. **Vercel Auto-Detection**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Deploy Settings** (usually auto-configured)
   - Node.js Version: **18.x** or higher
   - Build Command: `npm run build`
   - Development Command: `npm run dev`
   - Install Command: `npm install`

## Important Notes

### ✅ No Configuration Needed
- No environment variables required
- No API routes to configure
- Google Apps Script URL is hardcoded (external service)

### ✅ Image Optimization
- Images are optimized automatically by Next.js on Vercel
- All images are in `/public` folder (local assets)
- No external image domains configured (if you add any, update `next.config.js`)

### ✅ Form Submission
- Patient registration form submits to Google Apps Script
- URL is: `https://script.google.com/macros/s/AKfycbzkf3CwFJ_A4IZ3DxksKQjebRKbpcInxwdNkwSXAZG_sw3S-_McM8e3nOBmfSot0Mjb/exec`
- This works from any domain (CORS handled via iframe submission)

### ✅ Internationalization
- Uses client-side Context API (not Next.js i18n routing)
- No special routing configuration needed
- Language preference stored in localStorage

## Post-Deployment

### Custom Domain (Optional)
1. Add your domain in Vercel project settings
2. Configure DNS records as instructed
3. SSL certificate is automatic

### Monitoring
- Check Vercel dashboard for build logs
- Monitor function logs if you add API routes later
- Check Analytics tab for performance metrics

## Troubleshooting

### Build Fails
- Check Node.js version (must be 18+)
- Verify all dependencies in `package.json`
- Review build logs in Vercel dashboard

### Form Not Submitting
- Verify Google Apps Script is deployed and accessible
- Check browser console for CORS errors
- Ensure Google Sheet permissions are set correctly

### Images Not Loading
- Verify all images are in `/public` folder
- Check image paths are correct (relative to `/public`)
- Ensure image files are committed to Git

## Performance Optimization

The project is already optimized:
- ✅ SWC minification enabled
- ✅ Image optimization enabled
- ✅ Compression enabled
- ✅ React Strict Mode enabled

## Support

If you encounter any deployment issues:
1. Check Vercel build logs
2. Test build locally: `npm run build`
3. Verify all files are committed to Git

