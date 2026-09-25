#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="${REMOTE_HOST:-lkserver@192.168.0.24}"
REMOTE_DIR="${REMOTE_DIR:-/home/lkserver/apps/deli}"

rsync -az --delete \
  --exclude '.git/' \
  --exclude '.gradle/' \
  --exclude 'build/' \
  --exclude '.env' \
  ./ "${REMOTE_HOST}:${REMOTE_DIR}/"

ssh "${REMOTE_HOST}" \
  "cd '${REMOTE_DIR}' && test -f .env && docker compose up -d --build --remove-orphans"

ssh "${REMOTE_HOST}" \
  "cd '${REMOTE_DIR}' && docker compose ps && docker compose logs --tail=80 app"
