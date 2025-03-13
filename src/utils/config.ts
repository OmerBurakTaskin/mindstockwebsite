import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "MindStock",
  seo: {
    title: "MindStock",
    description: "Revolutionize learning with mindstock, an AI-powered mind mapping tool.",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/appicon.png",
  theme: "light",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  //appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.mindstock.app&utm_source=emea_OO",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {

    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download MindStock",
    subtitle:
      "Revolutionize learning with mindstock, an AI-powered mind mapping tool.",
    screenshots: [
      "/screenshots/suggestion_card.png",
      "/screenshots/home_screen.png",
      "/screenshots/quiz.png"
    ],
  },
  home: {
    seo: {
      title: "MindStock",
      description: "Unlock the power of structured thinking with AI-driven, interactive mind mapping.",
    },
    // testimonials: {
    //   id: "testimonials",
    //   title: "Testimonials",
    //   subtitle: "Check out a few of our customer stories",
    //   cards: [
    //     {
    //       name: "Alice Johnson",
    //       comment:
    //         "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
    //     },
    //     {
    //       name: "Bob Smith",
    //       comment:
    //         "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
    //     },
    //     {
    //       name: "Charlie Brown",
    //       comment:
    //         "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
    //     },
    //     {
    //       name: "Dana White",
    //       comment:
    //         "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
    //     },
    //     {
    //       name: "Eve Adams",
    //       comment:
    //         "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
    //     },
    //   ],
    // },
    partners: {
      title: "",
      logos: [
        // "/misc/companies/apple.svg",
        // "/misc/companies/aws.svg",
        // "/misc/companies/google.svg",
        // "/misc/companies/tumblr.svg",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "/stock/01.webp",
        },
        {
          title: "Create an Account",
          subtitle:
            "Sign up by entering your personal details and verifying your email to create a new account in just a few minutes.",
          image: "/stock/02.webp",
        },
        {
          title: "Explore Features",
          subtitle:
            "Navigate through the app to discover various features and tools designed to enhance your productivity and engagement.",
          image: "/stock/04.webp",
        },
        // {
        //   title: "Connect with Others",
        //   subtitle:
        //     "Start connecting with friends, colleagues, and like-minded individuals to expand your network and collaborate efficiently.",
        //   image: "/stock/05.webp",
        // },
      ],
    },
    "features": {
      "id": "features",
      "title": "Enhance Your Learning with AI-Powered Mind Mapping",
      "subtitle": "Transform your ideas into structured knowledge with intelligent, interactive, and adaptive mind maps.",
      "cards": [
        {
          "title": "AI-Assisted Insights",
          "subtitle": "Get intelligent suggestions and related topics based on your selected ideas, helping you explore concepts effortlessly.",
          "icon": "/screenshots/ai_icon.png"
        },
        {
          "title": "Smart Summaries & Quizzes",
          "subtitle": "Generate concise summaries and interactive quizzes from your mind maps to reinforce learning and retention.",
          "icon": "/screenshots/summary_quiz_icon.png"
        },
        {
          "title": "Seamless Knowledge Expansion",
          "subtitle": "Easily branch out your topics with AI-powered recommendations, ensuring a smooth and structured exploration of information.",
          "icon": "/screenshots/knowledge_icon.png"
        },
        {
          "title": "Cross-Device Accessibility",
          "subtitle": "Access your mind maps anytime, anywhere, and continue your learning journey seamlessly across all your devices.",
          "icon": "/screenshots/cloud_icon.png"
        }
      ]
    }
    ,
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is MindStock?",
          answer: "MindStock is an AI-powered study tool that helps you learn faster and more effectively."
        },
        {
          question: "How does MindStock work?",
          answer: "MindStock uses artificial intelligence to generate mind maps, quizzes, and summaries based on your input."
        },
        {
          question: "How can I get started with MindStock?",
          answer: "To get started with MindStock, simply create an account and start using the app."
        },
        {
          question: "Is MindStock free to use?",
          answer: "Yes, MindStock is free to use for a certain extent. However, some premium features may require a subscription."
        },
        {
          question: "How can I contact MindStock support?",
          answer: "For support or inquiries, please contact us at reach.btsoft@gmail.com."
        },
        {
          question: "How can I delete my account in MindStock?",
          answer: "To delete your account, go to settings in the app and click on delete account. Please note that this action is irreversible and all your data will be lost."
        },
        {
          question: "What kind of data does MindStock collect?",
          answer: "MindStock collects only the data you provide during the registration process, basically your name and email address."
        },
        {
          question: "If I delete my account, will my data be deleted?",
          answer: "Yes, if you delete your account, all your data will be deleted from our servers."
        },
        {
          question: "How can I change my password in MindStock?",
          answer: "To change your password, go to the password resetting screen by clicking 'forgot my password' button on the login page."
        }
      ]
    }
    ,
    header: {
      headline: "Unlock the Power of AI-Driven Mind Mapping",
      subtitle:
        "Effortlessly organize your thoughts, explore new ideas, and enhance your learning experience with intelligent, interactive mind maps.",
      screenshots: [
        "/screenshots/quiz.png",
        "/screenshots/suggestion_card.png",
        "/screenshots/create_workspace.png",

      ],
      //rewards: ["App of the year \n 1st", "Product of the day"],
      //usersDescription: "100+ people already using the app",
      headlineMark: [4, 5],
    },
    pricing: {
      id: "pricing",
      title: "Pricing",
      //subtitle: "Flexible costs to meet your budget",
      actionText: "Download the app",
      plans: [
        {
          title: "Free Plan",
          price: "Free!",
          rows: ["Limited AI mindcards", "Summaries of mindcards", "No quizzes"],
        },
        {
          title: "Monthly Premium",
          price: "$2.99/month",
          featured: true,
          rows: [
            "Access to all premium features of MindStock",
            "Unlimited AI mindcards",
            "Quizzes",
            "More powerful AI suggestions",
          ],
        },
        {
          title: "Annual Plan",
          price: "$29.99/month",
          rows: [
            "Access to all premium features of MindStock",
            "Unlimited AI mindcards",

            "Quizzes",
            "More powerful AI suggestions",
            "Early access to new features",
            "Save $6!"
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Mobile App Landing Template",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** 20/02/2025

## Introduction

Welcome to MindStock ("we," "our," or "us"). Your privacy is important to us, and we are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our application ("MindStock")
## Information We Collect

### We only collect the following personal information from you: 
- **Full Name:** Used to personalize your account and experience.
- **Email Address:** Used to create your account and allow you to log in.
- We may also collect information through OAuth authentication services, which adhere to strict security protocols.

### How We Use Your Information
  #### The information you provide is used for the following purposes:
- **Account Creation and Login:** To create a unique account for you and authenticate your access.
- **Personalized Experience:** To ensure a seamless experience while using the App.
- We do not use your information for any purpose beyond these functionalities.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

##  Use of Artificial Intelligence

#### Our App incorporates artificial intelligence to generate mind maps ("MindCards"), quizzes, and summaries based on your input. Rest assured:- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- Your personal information (name and email) is not shared with or visible to the AI
- The AI processes only the inputs you provide (e.g., questions or text) within the App for generating results
-  All AI processing is confined to improving your in-app experience.

## Third-Party Data Sharing

We do not sell, share, or disclose your personal information to any third parties. Your data remains private and secure within our App.

##  Data Storage and Security

#### We prioritize the security of your data:
- All personal information is securely stored and encrypted.
- We use industry-standard measures to protect your data from unauthorized access, alteration, or disclosure.

##  OAuth Authentication
Our App supports OAuth authentication methods to streamline the login process. OAuth services handle the authentication securely, and we only receive the minimum necessary data (name and email) to create your account.- All personal information is securely stored and encrypted.


## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at reach.btstudios@gmail.com .


## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

AxiiSoftware
reach.btstudios@gmail.com 

`
  },

  termsAndConditions: {
    seo: {
      title: "Terms Of Use - MindStock",
      description: "Terms of Use",
    },
    content: `**Effective Date:** 20/02/2025

# Terms of Use

## Introduction

Welcome to MindStock ("we," "our," or "us"). By accessing or using our app ("App"), you agree to these Terms of Use. Please read them carefully before proceeding.

## Use of the App

### 1. Eligibility
To use our App, you must be at least 13 years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. Description of Services
- **2.1:** Our App provides users with tools to create AI-assisted mind maps ("MindCards"), quizzes, and summaries.
- **2.2:** The App includes a free tier and a premium subscription tier with advanced features and increased usage limits.

### 3. User Accounts
- **3.1:** To access the App, you must create an account using your full name and email address or sign in via OAuth.
- **3.2:** You are responsible for maintaining the confidentiality of your login credentials and ensuring their security.
- **3.3:** Misuse or unauthorized access to your account should be reported immediately to reach.btsoft@gmail.com.

## Subscription Plans and Payments

### 4. Subscription Plans
- **4.1:** The App offers subscription plans for monthly or yearly periods, which are processed via Google Play In-App Purchase.
- **4.2:** Subscriptions grant access to premium features, including:
  - Higher usage limits.
  - Advanced AI capabilities for creating MindCards.
- **4.3:** Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period.
- **4.4:** Refunds for subscriptions are subject to Google Play’s refund policies.

## Use of Artificial Intelligence

### 5. AI Functionality
- **5.1:** The App uses AI to process user input and generate content.
- **5.2:** AI interactions are solely for enhancing your in-app experience.
- **5.3:** No personal data, such as your name or email, is shared with or processed by the AI.

## User Responsibilities

### 6. Compliance and Conduct
- **6.1:** You agree to use the App in compliance with all applicable laws and regulations.
- **6.2:** You may not use the App to create or share content that is illegal, harmful, or violates the rights of others.

## Intellectual Property

### 7. Ownership
- **7.1:** All App content, design, and functionality, including AI-generated results, are the intellectual property of MindStock.
- **7.2:** You may not reproduce, distribute, or modify any part of the App without explicit permission.

## Disclaimers and Limitation of Liability

### 8. Disclaimers
- **8.1:** The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App.
- **8.2:** We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 9. Limitation of Liability
- **9.1:** To the fullest extent permitted by law, MindStock shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
  - Your use or inability to use the App;
  - Any unauthorized access to or use of our servers and/or any personal information stored therein;
  - Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
  - Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless MindStock, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Cancellation and Termination

### 10. Cancellation
- **10.1:** You may cancel your subscription anytime via Google Play settings.
- **10.2:** We reserve the right to suspend or terminate your account for violations of these Terms of Use.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Modifications to the Terms

### 11. Changes to These Terms
- **11.1:** We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above.
- **11.2:** Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

**MindStock**  
**Email:** reach.btstudios@gmail.com


`,
  },
};

export default templateConfig;
