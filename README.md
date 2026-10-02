# anish-kurra-site

Personal website for Anish Kurra, served at https://anishkurra.com.

A static page exported from the "Personal portfolio website" Claude artifact and unpacked into plain files: `index.html` plus `assets/` (React runtime, fonts, headshot). No build step; Vercel serves the repo root and deploys every push to `main`.


## Security headers

`vercel.json` sets CSP, HSTS, and the other security headers for every path. The CSP allows the one inline `<script>` in `index.html` by its SHA-256 hash, so if you edit that script, regenerate the hash:

```
python3 -c "import re,hashlib,base64;s=re.search(r'<script>(.*?)</script>',open('index.html').read(),re.S).group(1);print('sha256-'+base64.b64encode(hashlib.sha256(s.encode()).digest()).decode())"
```
