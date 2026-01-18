# Deployment Guide - Why Should I Pay

Complete guide to deploy your production-ready offline coding platform.

## 🚀 Pre-Deployment Checklist

Before deploying, verify locally:

```bash
npm run build
npm start
# Visit http://localhost:3000 and test all features
```

Verify:
- ✅ All pages load correctly
- ✅ No console errors
- ✅ Responsive design works
- ✅ Dark/Light theme works
- ✅ All navigation links work
- ✅ Learn, Problems, Quizzes load content
- ✅ IDE code editor functions
- ✅ Dashboard displays
- ✅ Roadmaps page works

## 📋 Build Production Version

### Create Optimized Build

```bash
# Install dependencies
npm ci

# Build for production (creates .next folder)
npm run build

# Output shows optimization stats
# Total gzipped size should be < 2MB
```

### Test Production Build Locally

```bash
# Start production server
npm start

# Visit http://localhost:3000
# Test all features thoroughly
# Performance should be fast

# Stop with Ctrl+C
```

## 🌐 Deploy to Vercel (Recommended)

Vercel is built for Next.js and provides instant deployment.

### Via CLI (Fastest)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel --prod

# 3. Follow prompts:
#    - Create/link project
#    - Confirm deployment
#    - Get live URL

# Output: https://why-should-i-pay.vercel.app
```

### Via Web Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up (GitHub, GitLab, Bitbucket)
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Configure:
   - Framework: Next.js (auto-detected)
   - Build: `npm run build` (auto-set)
   - Output: `.next` (auto-set)
6. Click "Deploy"
7. Wait 2-3 minutes for build

### Via GitHub Integration (Auto-Deploy)

1. Push code to GitHub
2. On Vercel: Import from Git
3. Select repository
4. Deploy
5. **Every push to main = automatic deployment**

## 🚀 Deploy to Netlify

Simple drag-and-drop or Git integration.

```bash
# 1. Build locally
npm run build

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=.next

# 4. Authenticate with Netlify
# 5. Get your production URL
```

Or use Netlify Dashboard:
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Click Deploy

## 🐳 Deploy with Docker

For any hosting platform that supports Docker.

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./next.js
COPY public ./public
COPY next.config.mjs ./

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
# Build image
docker build -t why-should-i-pay .

# Run locally
docker run -p 3000:3000 why-should-i-pay

# Run in background
docker run -d -p 3000:3000 why-should-i-pay
```

### Deploy to Container Registry

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag why-should-i-pay yourusername/why-should-i-pay:1.0

# Push
docker push yourusername/why-should-i-pay:1.0

# Deploy on any platform supporting Docker
# (AWS ECS, Google Cloud Run, DigitalOcean, etc.)
```

## ☁️ Deploy to AWS

### Option 1: AWS Amplify (Recommended)

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify init

# Deploy
amplify publish

# Get Amplify URL with auto-scaling
```

### Option 2: AWS EC2

```bash
# 1. Create Ubuntu 20.04+ EC2 instance

# 2. SSH into instance
ssh -i your-key.pem ubuntu@your-instance-ip

# 3. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. Clone repository
git clone https://github.com/yourusername/why-should-i-pay.git
cd why-should-i-pay

# 5. Build
npm install
npm run build

# 6. Start with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "why-should-i-pay" -- start
pm2 startup
pm2 save

# 7. Install Nginx (reverse proxy)
sudo apt install nginx
# Edit /etc/nginx/sites-available/default
# Add proxy to localhost:3000

# 8. SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

### Option 3: AWS Amplify Hosting

```bash
# Connect via AWS Console
# 1. Go to AWS Amplify
# 2. Connect GitHub repository
# 3. Select build settings
# 4. Deploy
# 5. Custom domain available
```

## 🌍 Other Hosting Platforms

### Google Cloud Run

```bash
# Build and push Docker image
gcloud builds submit --tag gcr.io/PROJECT_ID/why-should-i-pay

# Deploy
gcloud run deploy why-should-i-pay \
  --image gcr.io/PROJECT_ID/why-should-i-pay \
  --platform managed \
  --region us-central1
```

### DigitalOcean

```bash
# Via doctl CLI
doctl apps create --spec app.yaml

# Or use dashboard:
# 1. Create App
# 2. Connect GitHub
# 3. Select repository
# 4. Deploy
```

### Heroku (Legacy)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create why-should-i-pay

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

## 🔗 Add Custom Domain

### Vercel

1. Dashboard → Project → Settings → Domains
2. Add custom domain (e.g., coding.example.com)
3. Update DNS at registrar (Namecheap, GoDaddy, etc.)
4. SSL auto-provisioned

### Netlify

1. Site settings → Domain management
2. Add custom domain
3. Update DNS at registrar
4. SSL auto-provisioned via Let's Encrypt

### Traditional Hosting

1. Point DNS to your server IP
2. Configure Nginx/Apache
3. Setup SSL with Let's Encrypt
4. Configure domain in server

## 🔒 SSL/HTTPS Setup

All modern platforms provide free SSL:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic  
- ✅ AWS Amplify: Automatic
- ✅ Let's Encrypt: Free (self-hosted)

For self-hosted:
```bash
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com
sudo certbot renew --dry-run  # Test auto-renewal
```

## ⚙️ Environment Configuration

Currently NO environment variables needed!

To add in future, configure in hosting dashboard:

**Vercel:**
- Settings → Environment Variables
- Add secrets
- Auto-injected at build time

**Netlify:**
- Site settings → Build & deploy → Environment
- Add environment variables

## 📊 Performance Optimization

### Already Optimized

- ✅ Next.js code splitting
- ✅ Image optimization
- ✅ CSS minification
- ✅ JavaScript compression
- ✅ Gzip enabled

### Verify Performance

Test with:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse (Chrome DevTools)

Target metrics:
- Load time: < 2s
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔄 Continuous Deployment

### GitHub + Vercel Auto-Deploy

1. Push code to GitHub `main` branch
2. Vercel automatically:
   - Detects push
   - Runs build
   - Deploys to production
3. Preview URL in PR

### GitHub + Netlify Auto-Deploy

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish dir: `.next`
4. Every push = auto-deploy

## 📝 Update & Rollback

### Deploy Update

```bash
# Make changes
git add .
git commit -m "Update description"
git push origin main

# Auto-deploys on GitHub integration!
```

### Rollback to Previous Version

**Vercel:**
- Dashboard → Deployments
- Click previous deployment
- Click "Promote to Production"

**Netlify:**
- Deploys tab
- Click previous deploy
- Click "Publish"

**Git:**
```bash
git revert HEAD
git push
```

## 🎯 Post-Deployment Checklist

After deployment:

- [ ] Site loads quickly
- [ ] All pages accessible
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] All links function
- [ ] IDE executes code
- [ ] Quizzes work
- [ ] Dashboard displays
- [ ] SSL certificate valid
- [ ] Analytics configured
- [ ] Error monitoring enabled

## 📊 Monitor Deployment

### Vercel Analytics

- Built-in Web Vitals
- Real User Monitoring
- Performance dashboard
- Automatic alerts

### Netlify Analytics

- Visitor tracking
- Performance metrics
- Error alerts
- Deploy history

### Custom Monitoring

Add analytics:

```javascript
// Add to app/layout.tsx
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        
        {/* Error Tracking - Sentry */}
        <Script
          src="https://browser.sentry-cdn.com/7.0.0/bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
```

## 🚨 Troubleshooting

### Build Fails

```bash
# 1. Check build log carefully
# 2. Verify imports
# 3. Check for console errors
npm run build --verbose

# 4. Clear and retry
rm -rf .next node_modules
npm install
npm run build
```

### Site Shows 404

- Hard refresh browser (Ctrl+Shift+R)
- Check deployment status in dashboard
- Verify domain DNS settings
- Check build logs

### Slow Performance

- Enable caching
- Minimize bundle size
- Use CDN
- Monitor Network tab
- Check for memory leaks

### Deployment Stuck

```bash
# Cancel current deployment
vercel cancel

# Redeploy
vercel --prod
```

## 💾 Backup & Recovery

### Backup Repository

```bash
# Ensure all code committed
git add .
git commit -m "Final version"
git push

# Create GitHub release
git tag v1.0.0
git push origin v1.0.0
```

### Restore from Backup

```bash
# Clone from GitHub
git clone https://github.com/yourusername/why-should-i-pay.git
cd why-should-i-pay

# Install and build
npm install
npm run build
```

## 🎉 Launch!

Your platform is now live! 

### Share It

- Twitter: "Why Should I Pay? A free offline coding platform"
- LinkedIn: Share as achievement
- Reddit: r/learnprogramming, r/webdev
- Dev.to: Write launch post
- HackerNews: Submit if relevant

## 📈 Growth Strategies

1. **Share on Social Media**
   - Twitter, LinkedIn, Reddit
   - Dev communities

2. **Guest Post**
   - Dev.to, Medium
   - Mention your platform

3. **SEO Optimization**
   - Add metadata
   - Optimize page titles
   - Add structured data

4. **Community Building**
   - Encourage feedback
   - Regular updates
   - User testimonials

## 💰 Hosting Costs

- **Vercel Free Tier**: $0 (generous limits)
- **Netlify Free Tier**: $0 (unlimited deployments)
- **AWS Free Tier**: $0 (12 months)
- **DigitalOcean**: $5/month (cheapest paid)
- **Self-hosted VPS**: $3-10/month

## 📚 Documentation Links

- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs
- Docker: https://docs.docker.com
- Let's Encrypt: https://letsencrypt.org/docs

---

**Congratulations on deploying!** 🚀

Your offline coding platform is now production-ready and accessible to the world.
