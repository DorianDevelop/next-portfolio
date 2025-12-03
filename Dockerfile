## 1 — Dependencies stage (full deps for build)
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./
# Faster, deterministic install; skip audits/fund prompts
RUN npm ci --no-audit --no-fund

## 2 — Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

## 3 — Production runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Use already-downloaded deps, then prune dev deps to avoid re-install
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
RUN npm prune --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

# Ensure Next.js binds to all interfaces inside the container
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "3000"]
