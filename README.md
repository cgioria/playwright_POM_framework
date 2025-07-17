# Playwright Automation Framework - Complete Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)

## Introduction
A complete automation testing framework built with Playwright and TypeScript.

## Features
- Multi-environment testing (QA/Stage/Production)
- Role-based authentication (Admin/Standard User)
- Digital certificate login support
- Page Object Model architecture
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel test execution
- CI/CD integration ready
- Cucumber/Gherkin features implementation 

## Prerequisites
- Node.js 16+
- Playwright v1.30+
- Git
- Cucumber 12.0.0
- Digital certificate (for cert auth tests)


## Installation
```bash
git clone https://github.com/your-repo/playwright-framework.git
cd playwright-framework
npm install
npx playwright install


## Configuration
Run .spec.ts
ENV=prod npx playwright test /tests/admin/user-admin.spec.ts  --project=User --debug

Run Gherkin .feature
npm run test:cucumber:prod

# NombreDelProyecto
