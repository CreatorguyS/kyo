# 🌩️ KYO (CloudClass) – Full-Stack LMS Platform

KYO is a modern, full-featured **Learning Management System (LMS)** built with the latest full-stack technologies. Designed for both learners and instructors, it provides a complete platform to create, browse, purchase, and consume online courses.

## 🚀 Key Features

### 👨‍🏫 For Teachers & Admins
- **Course Creation**: Create courses with rich text descriptions and thumbnails.
- **Chapter Management**: Add unlimited chapters with drag-and-drop reordering.
- **Video Hosting**: Direct upload to **Mux** for professional-grade video streaming.
- **Attachments**: Upload resources (PDFs, code files) via **UploadThing**.
- **Monetization**: Set prices and receive payments via **Stripe**.
- **Analytics**: Dashboard tracking revenue and sales.

### 🧑‍🎓 For Students
- **Browse & Search**: Filter courses by category and search by keywords.
- **Secure Payments**: Purchase courses securely via Stripe.
- **Progress Tracking**: Mark chapters as completed and track overall course progress.
- **Confetti Celebration**: Fun animation upon 100% course completion!

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Shadcn UI
- **Database**: MySQL (hosted on **Aiven**) via Prisma ORM
- **Authentication**: Clerk
- **Video Processing**: Mux (HLS Streaming)
- **File Storage**: UploadThing
- **Payments**: Stripe

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE?ssl-mode=REQUIRED"

UPLOADTHING_SECRET=...
UPLOADTHING_APP_ID=...

MUX_TOKEN_ID=...
MUX_TOKEN_SECRET=...

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_API_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📦 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/CreatorguyS/kyo.git
    cd kyo
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Database (Prisma)**
    This project uses a custom output location for the Prisma Client (`lib/generated/prisma`).
    ```bash
    # Generate the Prisma Client
    npx prisma generate
    
    # Push the schema to your Aiven MySQL database
    npx prisma db push
    ```

4.  **Seed the Database**
    Populate the course categories (e.g., Computer Science, Music, Fitness).
    ```bash
    node scripts/seed.cjs
    ```

5.  **Run the Development Server**
    ```bash
    npm run dev
    ```

Default application will run at `http://localhost:3000`.

## 💳 Testing Payments (Stripe)

Use the following test card details at checkout:
- **Card Number**: `4242 4242 4242 4242`
- **Expiry Date**: Any future date
- **CVC**: Any 3 digits
- **ZIP**: Any 5-digit number
