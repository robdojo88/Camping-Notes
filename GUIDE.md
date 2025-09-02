# ================================================================

CREATING A PROJECT FROM THE SCRATCH

Requirements
⦁ Google Account (robbdominiq3@gmail.com)
⦁ GitHub Account (robbdominiq)
⦁ Supabase (Camping Notes - iQYYyRYoF5uKtCGb)
Project URL - https://grmbhgwsjevbahnrqdud.supabase.co
API Key - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybWJoZ3dzamV2YmFobnJxZHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3OTQ5NDAsImV4cCI6MjA3MjM3MDk0MH0.U6CB_TsvUZwz3lMh5pT2GkSi1vecDtvQut5zUhoRvfE

SET-UP REACT-VITE/TAILWIND/UI

1. Installation: https://tailwindcss.com/docs/installation/using-vite
2. Installation: https://ui.shadcn.com/docs/installation/vite
3. npm install @vitejs/plugin-react
4. npm i @supabase/supabase-js
5. npm run dev

# [ADDITIONAL STEPS]:

Supabase Authentication

Facebook
https://developers.facebook.com/

> My Apps
> Create App
> Use Cases
> Customize(Authenticate and request data from users with Facebook Login)
> Email (action - add)
> Settings
> Enter - Valid OAuth Redirect URIs
> Save Changes
> Redirect URI to Check
> Check URI
> Save Changes (again)

Google
https://console.cloud.google.com/

> New Project
> Quick access - API & Services
> Credentials
> Create Credentials - OAuth Client ID
> Application Type - Web
> Add Authorized redirect URIs (Callback URL (for OAuth) from Supabase)
> Save
> Make sure to save the OAuth client created in json file to be use as your credential ini Supabase

====================================================
SQL

-- If extensions aren't enabled yet (Postgres 15+ usually has gen_random_uuid by default via pgcrypto)
create extension if not exists "pgcrypto";

create table if not exists tasks (
id uuid primary key default gen_random_uuid(),
user_id uuid references auth.users(id) on delete cascade,
title text not null,
is_completed boolean default false,
created_at timestamptz default now()
);

alter table tasks enable row level security;

-- Policies: users can only CRUD their own tasks
create policy "select own tasks"
on tasks for select
using (auth.uid() = user_id);

create policy "insert own tasks"
on tasks for insert
with check (auth.uid() = user_id);

create policy "update own tasks"
on tasks for update
using (auth.uid() = user_id);

create policy "delete own tasks"
on tasks for delete
using (auth.uid() = user_id);

=====================================================================================================

Abstract

This study presents the development of a Task Management Web Application that leverages Supabase as a backend-as-a-service platform and ReactJS for the frontend interface. The system allows users to authenticate securely through multiple providers (Google, Facebook, and Magic Link) and manage their personal task lists through Create, Read, Update, and Delete (CRUD) operations. The application enforces row-level security (RLS), ensuring that each user can only access their own data. This project demonstrates how modern serverless technologies can accelerate the development of secure, scalable, and user-friendly productivity applications.

Statement of the Problem

Task management is an essential daily activity for students, professionals, and organizations. Traditional approaches—such as manual note-taking or generic task applications—often lack personalization, security, and integration with modern authentication methods.

The main problems addressed by this study are:

How can users maintain a personalized task list with secure login and ownership of data?

How can developers ensure data privacy and isolation without implementing a full backend manually?

What technologies can be used to create a scalable yet lightweight solution for small projects or academic prototypes?

Project Context

This project was conceived as a practical demonstration of cloud-based application development using modern platforms. Instead of building a backend from scratch, the team adopted Supabase, an open-source alternative to Firebase, to provide authentication, database hosting, and real-time features. By combining Supabase with ReactJS for the frontend, the project showcases how student developers can rapidly prototype applications that are both functional and production-ready.

The chosen application domain is personal task management, a simple yet widely relatable use case. Each user has a dedicated account and their own task list, which cannot be viewed or modified by other users.

Technical Background

Frontend: ReactJS with TailwindCSS for styling, providing a responsive, modular, and reactive user interface.

Backend: Supabase, which provides:

Authentication (Google, Facebook, Magic Link)

Database (PostgreSQL)

Row-Level Security (RLS) to enforce per-user task ownership

Database Schema: A single tasks table linked to Supabase’s auth.users table via foreign key (user_id).

Deployment: The application can be deployed using Vercel/Netlify for the frontend and Supabase’s hosted backend.

Introduction (IMRAD)

Modern productivity demands digital tools that are secure, user-friendly, and accessible from any device. While many commercial task management applications exist, they are often complex, costly, or not customizable for student projects.

This research aims to demonstrate the feasibility of building a lightweight yet secure task list system using cloud-based backend services and open-source frontend frameworks. The system highlights the potential of combining serverless backend tools (Supabase) with modern frontend libraries (React) to deliver real-world solutions with minimal infrastructure overhead.
