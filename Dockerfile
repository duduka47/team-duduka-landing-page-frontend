# deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY . .
RUN npm install

# build
FROM node:20-alpine AS build
WORKDIR /app/frontend/team-duduka
COPY --from=deps /app /app
ENV NODE_ENV=production
RUN npm run build

# runtime
FROM node:20-alpine
WORKDIR /app/frontend/team-duduka

COPY --from=build /app /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["npm", "run", "start"]