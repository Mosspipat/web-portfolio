# Use the official Node.js 20 LTS image (Alpine)
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Optional: tools for better network/DNS on alpine
RUN apk add --no-cache curl ca-certificates

# Configure registry mirror and longer network timeout for Yarn v1
ARG YARN_REGISTRY=https://registry.npmmirror.com
ENV npm_config_registry=$YARN_REGISTRY
RUN yarn config set registry $YARN_REGISTRY \
 && yarn config set network-timeout 600000 -g

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock ./
# Install ALL deps so Next.js and build-time deps are available
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]