#  Set Up a Virtualized Environment Using Docker

# Step 1 : log in to your VM

- Open AWS cloud console. Login to console using credential
- Launch an EC2 instance
- Select an appropriate amazon machine (AMI)
- Instance type (e.g. t2 micro for free tier)
-  Configure security groups to allow HTTP (port 80) SSH (port 22)

![31](https://github.com/user-attachments/assets/9e02b282-6841-4976-9884-5ea831f6c9b8)

# Step 2: Switch to Root User
``` git
  suso su -
```

![32](https://github.com/user-attachments/assets/f85ebe84-acfe-4b4a-982f-2b14bc3f0b1c)

# Step 3: Check if Docker is Installed or not
``` git
docker --version
```

# Step 4: Install Docker

![33](https://github.com/user-attachments/assets/18344c22-f405-4eb9-9192-8b838c50ca52)

``` git
sudo yum install docker -y
```

