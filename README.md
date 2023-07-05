# Favoland

## Favoland NextJs Frontend

Favoland is a personalized beauty recommendation and lead generation platform that focuses on people allergies, religious beliefs, and preferences.

---

### Table of contents

- [Description](#Description)
- [How To Use](#How-to-use)
- [Branching Strategy](#Branching-strategy)
- [References](#References)
- [Route Info](#Router-and-its-files)

---

## Description

#### Technologies

- NextJs (version 13.1.2)
- Antd (version 5.1.5)
- Redux ToolKit
- GitLab CI/CD
- Visual Studio (Use latest one)
- Git (version 2.25.1)
- Git Bash (For window only)

[Back to the top](#Favoland)

---

## How To Use

#### Installation

First clone repo from gitLab by run this command -

```bash
git clone https://gitlab.com/favoland/favoland-web.git
```

Now open Visual Studio and go to backend repo -

```bash
cd favoland-web
```

Now install all the dependencies -

```bash
npm i

#or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

#### Getting Started

- Make sure in your code `.env` file is located. If not, then request to code access provider to provide `.env` file

  - Make sure `GOOGLE_SECRET_KEY` variable in this file.

  - Make sure `FACEBOOK_SECRET_KEY` variables in this file.

- Now start project -

```bash
yarn dev
#or
npm dev
```

- [Back to top](#Favoland)

---

## Branching Strategy

In here Favoland beauty recommendation, we practise using Git Flow workflow. Git Flow is a workflow design on how we should manage our releases and features.

Glossary:

- local -> your local repository
- origin -> your forked repository
- upstream -> main repository

Generally, we have `prod`,`dev` and `staging` as for our core branches.

When a developer work on a new feature, he should create a `local/feature` branch (e.g local/feature/continueWithFacebook). He will then push it to its `origin/feature` branch and submit a MR (Merge Request) from `origin/feature` for review. After the feature has been fully developed and tested, it can now merge into the `staging` branch, CD (Continuous Deployment) will listen and automatically deploy to our test server when there is new changes to this branch. During this period of time whenever we discovered a bug we should create a `fix` branch and MR point to the `staging`. Once the `staging` branch is stabilized, we can now merge `staging` into `preprod` and it should be treated as `production grade` quality, CD will be triggered and deploy it to our staging server. (The transition of this period must be quick or otherwise `staging` will keep stacking more features indefinitely and causing it to be dangerous and harder to merge into `preprod`). Finally, maintaner will create a new tag (kindly follow semver [read semver](https://semver.org/) and deploy it to `prod`! Anything urgent or production issue but no breaking fix `MUST` create a `hotfix` branch and go directly to the `prepord/prod` branch. If your fix requires testing/potentially consists of breaking please point it to `staging` instead.

Here is one of a good reference for you to understand further on the Git Flow workflow - [click here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

[Back to the top](#Favoland)

---

### Best Pracices

We need to be united, we have to talk in a same language, and so some of the founadamental coding styles have to be consistent. Here are some of the reading meterials for your infomation. Be a good prgrammer with OCD! `PLEASE TAKE IT SERIOUSLY!`

For JavaScript style guide, we follow Airbnb, you can read the style guide here - [click here](https://github.com/airbnb/javascript)

Understading a technology design pattern is incredibly important as it will guide you through a more detailed picture in the philosophy of the technology itself, so you don't develop an application that is "just works", but an application that is "flawless". "it works" mentality shouldn't exists in a prgrammer's cognitive as it will hurt the project in a long run with an abundance of technical debts.

You should think like a robot, don't put assumption or bias while designing/developing a feature, Knowing how to writecodes that is "just works" is mere a "coder". A good "programmer" should be capable of designing a beautiful piece of agnostic architecture and writing a consistent and indestructiable codes.

[Back to the top](#Favoland)

---

## Router and its files Structure

#### 1. Pages

     All the routes name define inside the pages folder. The name of the file becomes the name of the router name in nextjs.

#### 2.Src

- Src has components, constant, container and lib folder.

  - components
    components has the individual UI components that make up the app will live in here.
  - constant
    constant contains the images and json data.
  - container
    container combines all the components and logic which required to render the page.
  - lib
    All Business/app/domain logic will live in here
