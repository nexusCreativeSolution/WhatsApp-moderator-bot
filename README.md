# FX BOT

<p align="center">  
  <a href="https://github.com/FXastro/bot">
    <img alt="WhatsApp BOT" height="300" src="https://raw.githubusercontent.com/FXastro/bot/main/lib/logo.jpeg">
  </a>
</p>

<p align="center">
  <a href="https://github.com/FXastro"><img title="Author" src="https://img.shields.io/badge/WhatsApp%20BOT-black?style=for-the-badge&logo=whatsapp"></a>
</p>

<p align="center">
  <a href="https://github.com/FXastro/bot/stargazers">
    <img title="Stars" src="https://img.shields.io/github/stars/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot/network/members">
    <img title="Forks" src="https://img.shields.io/github/forks/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot/issues">
    <img title="Issues" src="https://img.shields.io/github/issues/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot/graphs/contributors">
    <img title="Contributors" src="https://img.shields.io/github/contributors/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot/blob/main/LICENSE">
    <img title="License" src="https://img.shields.io/github/license/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot">
    <img title="Size" src="https://img.shields.io/github/repo-size/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot/commits/main">
    <img title="Last Commit" src="https://img.shields.io/github/last-commit/FXastro/bot?style=for-the-badge&logo=github">
  </a>
  <a href="https://github.com/FXastro/bot/actions">
    <img title="Build Status" src="https://img.shields.io/github/actions/workflow/status/FXastro/bot/ci.yml?style=for-the-badge&logo=github">
  </a>
</p>

## 🚨 Warning

Please note that this bot is provided as-is without any guarantees or warranties. Use it at your own risk and ensure you comply with all relevant terms of service and privacy policies. The developers are not responsible for any misuse, damages, or issues arising from the use of this bot.

---

## 🌟 Features

- **Automated Messaging:** Sends and receives messages based on predefined rules.
- **Custom Commands:** Define commands to perform specific actions.
- **User Management:** Handle and manage user interactions effectively.
- **Rich Media Support:** Send images, videos, and documents.
- **Error Handling:** Built-in mechanisms to handle and log errors.

---

Sure! Here’s how you can update the deployment sections to use the button-style similar to the ones you provided:

## Deployment Platforms

Deploy WhatsApp BOT on various platforms:

- **[Heroku Deployment](#heroku-deployment)**
- **[Koyeb Deployment](#koyeb-deployment)**
- **[Render Deployment](#render-deployment)**
- **[Replit Deployment](#replit-deployment)**
- **[Digital Ocean Deployment](#digital-ocean-deployment)**
- **[Termux Deployment](#termux-deployment)**
- **[Local Deployment](#local-deployment)**

---

## Heroku Deployment

Deploy WhatsApp BOT on Heroku:

1. **Install the Heroku CLI:**
   <br>
   <a href="https://devcenter.heroku.com/articles/heroku-cli">
   <img alt='Heroku CLI' src='https://img.shields.io/badge/Heroku%20CLI-blue?style=for-the-badge&logo=heroku'/>
   </a>

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/FXastro/bot.git
   ```

3. **Navigate to the Project Directory:**

   ```bash
   cd bot
   ```

4. **Create a Heroku App:**

   ```bash
   heroku create
   ```

5. **Deploy to Heroku:**

   ```bash
   git push heroku main
   ```

6. **Set Environment Variables:**
   - Use the Heroku CLI or dashboard to set your API key:
     ```bash
     heroku config:set WHATSAPP_API_KEY=your_api_key
     ```
     <br>
     <a href="https://heroku.com/deploy?template=https://github.com/FXastro/bot">
       <img alt='Deploy to Heroku' src='https://www.herokucdn.com/deploy/button.svg'/>
     </a>

---

## Koyeb Deployment

Deploy WhatsApp BOT on Koyeb:

1. **Create a Koyeb Account:**
   <br>
   <a href="https://www.koyeb.com">
   <img alt='Koyeb Account' src='https://img.shields.io/badge/Koyeb%20Account-blue?style=for-the-badge&logo=koyeb'/>
   </a>

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/FXastro/bot.git
   ```

3. **Deploy Using Koyeb CLI:**

   ```bash
   koyeb deploy
   ```

4. **Set Environment Variables:**
   - Configure your API key through the Koyeb dashboard.
     <br>
     <a href="https://app.koyeb.com/auth/signup">
     <img alt='Deploy to Koyeb' src='https://www.koyeb.com/static/images/deploy/button.svg'/>
     </a>

---

## Render Deployment

Deploy WhatsApp BOT on Render:

1. **Create a Render Account:**
   <br>
   <a href="https://render.com">
   <img alt='Render Account' src='https://img.shields.io/badge/Render%20Account-blue?style=for-the-badge&logo=render'/>
   </a>

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/FXastro/bot.git
   ```

3. **Create a New Web Service:**

   - Follow the instructions on Render's dashboard.
     <br>
     <a href="https://render.com">
     <img alt='Deploy to Render' src='https://img.shields.io/badge/Deploy%20to%20Render-blue?style=for-the-badge&logo=render'/>
     </a>

4. **Set Environment Variables:**
   - Add your API key in the Render dashboard.

---

## Replit Deployment

Deploy WhatsApp BOT on Replit:

1. **Create a Replit Account:**
   <br>
   <a href="https://replit.com">
   <img alt='Replit Account' src='https://img.shields.io/badge/Replit%20Account-blue?style=for-the-badge&logo=replit'/>
   </a>

2. **Import the Repository:**

   - Use Replit's "Import from GitHub" feature.

3. **Install Dependencies and Run:**

   ```bash
   npm install
   node main.js
   ```

4. **Set Environment Variables:**
   - Configure your API key in the Replit secrets.
     <br>
     <a href="https://replit.com">
     <img alt='Deploy to Replit' src='https://img.shields.io/badge/Deploy%20to%20Replit-blue?style=for-the-badge&logo=replit'/>
     </a>

---

## Digital Ocean Deployment

Deploy WhatsApp BOT on Digital Ocean:

1. **Create a Digital Ocean Account:**
   <br>
   <a href="https://www.digitalocean.com">
   <img alt='Digital Ocean Account' src='https://img.shields.io/badge/Digital%20Ocean%20Account-blue?style=for-the-badge&logo=digitalocean'/>
   </a>

2. **Create a Droplet:**

   - Follow the instructions to set up a Droplet.

3. **Clone the Repository:**

   ```bash
   git clone https://github.com/FXastro/bot.git
   ```

4. **Install Node.js and Dependencies:**

   ```bash
   sudo apt update
   sudo apt install nodejs npm
   npm install
   ```

5. **Configure Environment Variables:**

   - Create a `.env` file and add your API key.

6. **Run the Bot:**

   ```bash
   node main.js
   ```

---

## Termux Deployment

Deploy WhatsApp BOT on Termux with these steps:

1. **Install Termux:**
   <br>
   <a href="https://play.google.com/store/apps/details?id=com.termux">
   <img alt='Termux on Google Play' src='https://img.shields.io/badge/Termux%20on%20Google%20Play-green?style=for-the-badge&logo=googleplay'/>
   </a>
   <a href="https://f-droid.org/packages/com.termux/">
   <img alt='Termux on F-Droid' src='https://img.shields.io/badge/Termux%20on%20F--Droid-green?style=for-the-badge&logo=f-droid'/>
   </a>

2. **Install Node.js:**

   ```bash
   pkg install nodejs
   ```

3. **Clone the Repository:**

   ```bash
   git clone https://github.com/FXastro/bot.git
   ```

4. **Navigate to the Project Directory:**

   ```bash
   cd bot
   ```

5. **Install Dependencies:**

   ```bash
   npm install
   ```

6. **Configure Environment Variables:**

   - Create a `.env` file and add your WhatsApp API credentials:
     ```
     WHATSAPP_API_KEY=your_api_key
     ```

7. **Start the Bot:**

   ```bash
   node main.js
   ```

---

## Local Deployment for Windows/Mac/Linux

Deploy WhatsApp BOT locally on your machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/FXastro/bot.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd bot
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Configure Environment Variables:**

   - Create a `.env` file in the root directory and add your WhatsApp API credentials:
     ```
     WHATSAPP_API_KEY=your_api_key
     ```

5. **Start the Bot:**

   ```bash
   node main.js
   ```

---

This update uses button-style badges for the deployment platforms, similar to the style in the example you provided.

## 📜 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

---

## ⚠️ Reminder

- This Bot is Made By Astro only.
- This bot is not made by WhatsApp Inc. Misuse may result in your WhatsApp account being banned.
- Use at your own risk. The developers are not responsible for any issues or bans.

## 🚨 NOTICE

- Not For Sale.
- If a plugin's code is obfuscated, you do not have permission to edit it.
- Give credits if you are using or re-uploading any files.
