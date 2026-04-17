#!/bin/bash
# Run this ONCE after cloning to strip Replit internals from git tracking.
# The files are kept on disk (not deleted), just removed from the repository.

git rm --cached pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json tsconfig.json .npmrc .replit .replitignore replit.md 2>/dev/null
git rm -r --cached artifacts/ lib/ scripts/ attached_assets/ 2>/dev/null
git add .
git commit -m "chore: remove Replit monorepo internals from tracking"
echo ""
echo "Done! Push with: git push"
