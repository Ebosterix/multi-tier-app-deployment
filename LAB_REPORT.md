# Multi-Tier Application Deployment with Docker Compose

## Objective
Deploy a multi-tier application on an EC2 virtual machine using Docker Compose, including configuring public IP addresses and setting up security group rules for accessing the frontend, API, and database services.

## Problem Statement
A user is tasked with deploying a multi-tier application on a cloud-based virtual machine. After installing Docker, Docker Compose, and Git, they clone the application repository and update configuration files with the machine's public IP to ensure proper communication between the frontend, API, and backend components. Post these updates, the user runs docker compose to bring up the application, adjusts security group settings, and verifies deployment by accessing the application via the public IP.

## Correct Workflow (Assignment-Aligned)

### Step 1: Create Repository on GitHub
1. Log in to GitHub
2. Create new repository: `multi-tier-app-deployment`
3. Do NOT initialize with README, .gitignore, or license

### Step 2: Clone Repository to VM
```bash
cd ~
git clone https://github.com/YOUR_USERNAME/multi-tier-app-deployment.git
cd multi-tier-app-deployment
