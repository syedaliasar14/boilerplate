# The Boilerplate 🐦‍🔥

## 🔶 Next.js Setup

[🔗 Get Started Docs](https://nextjs.org/docs/app/getting-started/installation#create-with-the-cli)

Create a folder for your project and run this command in there

    npx create-next-app@latest .

## 🔶 Shadcn UI

### Setup

[🔗 Installation Docs](https://ui.shadcn.com/docs/installation/next)

Run this command to initialize shadcn:

    npx shadcn@latest init

### Add New Components

[🔗 Components](https://ui.shadcn.com/docs/components)

Run this command to add new components:

    npx shadcn@latest add input
    npx shadcn@latest add textarea
    npx shadcn@latest add field

## 🔶 Contact Form

[🔗 Building a Form](https://ui.shadcn.com/docs/forms/react-hook-form)

* Basic Form - ```app/contact/contact-form.tsx```
* API Route - ```app/api/contact/route.ts```
* Email template - ```app/api/contact/route.ts```
* Environment variable - ```RESEND_API_KEY```

Install Dependencies

    npm install axios react-hook-form @hookform/resolvers zod resend @react-email/render @react-email/components

## 🔶 Sanity CMS

[🔗 Visual Editing Guide](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router)