FROM node:18

# Install cron and SSH
RUN apt-get update && apt-get install -y openssh-server cron

# Set up SSH
RUN mkdir /var/run/sshd && \
    echo 'root:root' | chpasswd && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Set working directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install Node.js dependencies
RUN npm install

# Expose ports for app and SSH
EXPOSE 3000 22

# Start all services using the custom script
ENTRYPOINT ["./start.sh"]
