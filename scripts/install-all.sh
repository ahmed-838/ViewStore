#!/bin/bash
echo "Installing all dependencies..."
cd client && npm install
cd ../admin && npm install
cd ../server && npm install
echo "All dependencies installed successfully!"