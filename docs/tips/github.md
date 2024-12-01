

## 🔥 Push Two remote GitHub in same time

### নিচের কমান্ড গুলো ফলো করুন :

```
git init

```

```
git add .

```

```
git commit -m "First commit"

```

```
git branch -M main

```

```
git remote add bappasahabapi YOUR_PERSONAL_ACCOUNT_REPOSITORY_HTTPS_URL

ex: `git remote add https://github.com/bappasahabapi1/test1.git`

```

```
git remote add bappasahabapi1 YOUR_PERSONAL_ACCOUNT_REPOSITORY_HTTPS_URL
ex: `git remote add https://github.com/bappasahabapi1/test2.git`
```

**First account**
``` 
git push bappasahabapi1 main

```

**Second account**
```
git push bappasahabapi2 main

```

- মনে রাখবেন পুশ করার সময় খেয়াল রাখবেন আপনি কোন ব্রাঞ্চে আছেন আর কোন ব্রাঞ্চে পুশ করতেছে। **Git bash** Terminal এ দেখতে পারবেন আপনি কোন ব্রাঞ্চে আছেন বর্তমানে।
এরকম হলে ব্রাঞ্চ পরিবর্তন করে আবার পুশ করেন।

```
git branch -M main

```

এর পরেও না হলে:

- `.git` হিডেন ফোল্ডার ডিলিট দিয়ে আবার চেষ্টা করুন।

বিঃ দ্রঃ মনে রাখতে হবে কোনো কিছু পুশ করলে আপনাকে ২টা রিপোজিটরিতে পুশ করতে হবে। Deploy করার পরে গিটে আবার পুশ করলে vercel এ অটো আপডেট হয়ে যাবে।

### one command to push two branch

**npm run push**

```json
{
  "name": "vite-react-bsb",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "push":"git push -u bappasahabapi1 main && git push -u bappasahabapi2 main",
    **"push":"git push -u vercel main && git push -u code main"**
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-toastify": "^10.0.4"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "vite": "^5.0.8"
  }
}
```
