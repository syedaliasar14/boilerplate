# The Boilerplate 🐦‍🔥

## 🔶 Next.js Setup

[🔗 Getting Started](https://nextjs.org/docs/app/getting-started/installation#create-with-the-cli)

    npx create-next-app@latest .

## 🔶 Shadcn UI

[🔗 Installation](https://ui.shadcn.com/docs/installation/next)

    npx shadcn@latest init

[🔗 Add New Components](https://ui.shadcn.com/docs/components)

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

[🔗 Sanity Setup](https://www.sanity.io/docs/next-js-quickstart/setting-up-your-studio)

    npm create sanity@latest -- --dataset production --template clean --typescript

* Add sanity image config in ```next.config.ts```

[🔗 Visual Editing Guide](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router)

* Add env variables - ```SANITY_VIEWER_TOKEN``` & ```NEXT_PUBLIC_SANITY_STUDIO_URL```
* Add stega to ```sanity/lib/client.ts```
* Add enable draft mode API - ```api/draft-mode/enable/route.ts```
* Add disable draft mode server action - ```action.ts```
* Add ```disable-draft-mode.tsx``` component
* Add ```VisualEditing``` & ```DisableDraftMode``` components to ```layout.tsx```
* Add Presentation tool to ```sanity.config.ts```
* Add serverToken & browserToken to ```sanity/live.ts```
* Use sanityFetch for querying