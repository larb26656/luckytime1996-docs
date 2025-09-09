---
title: Minio
description: A cheatsheet of minio
---

## Permision

Root account คือผู้ใช้ระดับสูงสุด (superuser) เพียงคนเดียว มีสิทธิ์จัดการทุกอย่างในระบบ

ในการจัดการ permission ของ minio จะประกอบด้วย 2 องค์ประกอบดังนี้

### Policy

คือชุดกฎที่ใช้กำหนดสิทธิ์การเข้าถึง เช่น การกำหนดสิทธิ์ให้ bucket หรือบริการอื่น ๆ ในระบบโดยรูปแบบการกำหนดสิทธิ์จะเป็นแบบ json

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": ["arn:aws:s3:::my-bucket/*"]
    },
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": ["arn:aws:s3:::my-bucket"]
    }
  ]
}
```

> รูปแบบของ Policy ใน MinIO จะอ้างอิงตาม AWS S3 Policy ซึ่งใช้ JSON ในการกำหนดสิทธิ์การเข้าถึง

### Group

คือการจัดกลุ่มผู้ใช้งาน โดยเราสามารถผูก Policy หลาย ๆ ตัวเข้ากับ Group ได้ ตัวอย่างเช่น Group: admin อาจถูกกำหนดด้วย Policy consoleAdmin และ s3FullAccess เป็นต้น

## Authentication

ในการยืนยันตัวตน (authentication) เราสามารถใช้ 2 วิธีดังนี้

### User account

ใช้ username และ password ในการยืนยันตน เหมาะสำหรับการใช้งานผ่าน MinIO Console

### Service account

ใช้ accesskey และ secretkey ในการยืนยันตน เหมาะสำหรับการใช้งานผ่าน API หรือ SDK

การสร้าง Service account จะต้องอ้างอิงกับ User account เสมอ

- หนึ่ง User account สามารถสร้าง หลาย Service account ได้

## Admin commands

### alias

alias คือชื่อที่ใช้แทน url ของ minio server

```bash
# แสดง alias ในระบบ
mc alias list
```

### Group

```bash
# แสดง group ในระบบ
mc admin group list <alias>

# เพิ่ม policy ให้ group
mc admin policy attach <alias> <policy> --group <groupname>
```

### Policy

```bash
# แสดง policy ในระบบ
mc admin policy list <alias>
```

### User

```bash
# แสดง user ในระบบ
mc admin user list <alias>

# เพิ่ม user ในระบบ
mc admin user add <alias> <username> <password>

# แสดง policy ของ user
mc admin user policy <alias> <username>

# เพิ่ม policy ให้ user
mc admin policy attach <alias> <policy> --user <username>

# ลบ policy ออกจาก user
mc admin policy detach <alias> <policy> --user <username>
```
