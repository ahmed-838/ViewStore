#!/bin/bash
# Run all services in parallel
concurrently "cd client && npm run dev" "cd admin && npm run dev" "cd server && nodemon server.js"