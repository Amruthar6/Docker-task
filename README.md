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
Install prerequisite packages:
``` git
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

![36](https://github.com/user-attachments/assets/1de8371f-d4e0-4919-ab5b-e42c46594c2d)

``` git
sudo yum install docker -y
```
![33](https://github.com/user-attachments/assets/18344c22-f405-4eb9-9192-8b838c50ca52)

 Add Docker's official GPG key:
 ``` git
curl -fsSL https://download.docker.com/linux/centos/gpg | sudo gpg --dearmor -o /etc/pki/rpm-gpg/docker-archive-keyring.gpg
```

Add Docker's stable repository:
``` git
sudo yum install -y yum-utils
```

![35](https://github.com/user-attachments/assets/651eda58-f911-4ba2-bc5c-9fb85bcbd5eb)

Start Docker Engine:
``` git
systemctl start docker
```
``` git
systemctl status docker
```

![37](https://github.com/user-attachments/assets/a33878bd-2665-423a-9f60-c4d956f30ed0)

Check docker version
``` git
 docker --version
```

![34](https://github.com/user-attachments/assets/e1547b72-5939-45ef-81db-8dccfa62762c)

# Step 5: Clone Your Website Code

``` git
git clone https://github.com/Amruthar6/Docker-task.git
```

![38](https://github.com/user-attachments/assets/57662f7d-68e1-4916-af96-e2c39120a498)

Navigate to the project directory: 
``` git
cd docker-task
```

# Step 6: Create a Dockerfile

``` git
ls
vim dockerfile
```

Write the following content in the Dockerfile:

``` git
# Use the latest Nginx base image
FROM nginx:latest
# Copy website files to Nginx's default serving directory
COPY . /usr/share/nginx/html/
# Expose port 80 for the web server
EXPOSE 80
# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
```

![39](https://github.com/user-attachments/assets/1e1c7542-a529-472f-a95c-23f4c38d4871)

Save and exit from file

# Step 7: Build a Docker Image

``` git
docker build -t docker-task .
```

![40](https://github.com/user-attachments/assets/c760c79d-7bab-450c-8b18-1f48e2015540)

Verify the image is created or not:

``` git
docker images
```

![44](https://github.com/user-attachments/assets/7780eb46-99b8-4701-9e66-58847a84c4a0)

# Step 8: Run a Docker Container

``` git
docker run -dit -p 8000:80 docker-task
```

![41](https://github.com/user-attachments/assets/070f459f-50a4-4690-9e22-ac5b6a7aedd7)

Check running containers:

``` git
docker ps
```

![42](https://github.com/user-attachments/assets/60347853-7497-4505-8518-422996470b75)

# Step 19: Test Your Deployment
 open the browser
 copy : http://52.91.129.84:8000/

 
![43](https://github.com/user-attachments/assets/40ca2dc4-53c8-4a82-bc1b-9b19175f3696)

