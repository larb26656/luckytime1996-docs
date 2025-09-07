---
title: Docker
description: A cheatsheet of docker
---

## Docker Commands

### ข้อมูลระบบ

```bash
docker version          # แสดงเวอร์ชันของ Docker
docker info             # แสดงข้อมูลระบบ Docker ทั้งหมด
docker system df        # แสดงการใช้พื้นที่ของ Docker
docker system prune     # ลบ container, image, network ที่ไม่ได้ใช้งาน
```

### จัดการ Image

```bash
docker pull <image>                 # ดึง image จาก Docker Hub
docker build -t <name>:<tag> .      # สร้าง image จาก Dockerfile
docker images                       # แสดง image ทั้งหมด
docker rmi <image_id>               # ลบ image
docker tag <image> <new_name:tag>   # ตั้งชื่อ tag ใหม่ให้ image
```

### จัดการ Container

```bash
docker ps                          # แสดง container ที่กำลังรัน
docker ps -a                       # แสดง container ทั้งหมด
docker run -it --name <name> <image>   # สร้างและรัน container
docker start <container>           # เริ่ม container
docker stop <container>            # หยุด container
docker restart <container>         # รีสตาร์ท container
docker rm <container>              # ลบ container
docker logs <container>            # ดู log ของ container
docker exec -it <container> bash  # เข้า shell ของ container
```

### จัดการ Network & Volume

```bash
docker network ls                   # แสดง network ทั้งหมด
docker network create <name>        # สร้าง network
docker network rm <name>            # ลบ network

docker volume ls                    # แสดง volume ทั้งหมด
docker volume create <name>         # สร้าง volume
docker volume rm <name>             # ลบ volume
```

## Docker Compose Commands

### พื้นฐาน

```bash
docker-compose up                    # รัน service ตาม docker-compose.yml
docker-compose up -d                 # รัน service แบบ background
docker-compose down                  # ปิดและลบ container, network ที่สร้างโดย compose
docker-compose restart               # รีสตาร์ท service
docker-compose ps                    # แสดง container ของ compose
```

> Docker Compose จะสร้าง network แยกสำหรับแต่ละ project โดยอัตโนมัติ

### จัดการ Service

```bash
docker-compose build                  # build image ตาม service
docker-compose logs                   # ดู log ของ service
docker-compose logs -f                # ดู log แบบ realtime
docker-compose stop                   # หยุด service
docker-compose start                  # เริ่ม service
docker-compose rm    			      # ลบ container ของ service
```

### ตัวเลือกเพิ่มเติม

```bash
docker-compose run <service> <cmd>    # รันคำสั่งใน service
docker-compose exec <service> bash    # เข้า shell ของ service
docker-compose pull                   # ดึง image ของ service
docker-compose config                 # ตรวจสอบ config ของ compose
```
