#!/bin/bash
# Start SSH service
service ssh start

# Start cron (you can customize cron jobs here)
cron

# Start Node.js app
npm start
