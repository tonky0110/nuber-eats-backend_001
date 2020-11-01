# Nuber Eats

The Backend of Nuber Eats Clone

## set backend

### install package

[backend server]

- [V] npm i @nestjs/graphql graphql-tools graphql apollo-server-express
- [V] npm i class-validator class-transformer
- [V] npm i @nestjs/config
- [V] npm i cross-env

[DB]

- [V] npm i @nestjs/typeorm typeorm pg

## Database - postgrasql

### install

- www.postgrasql.com > download && postico install(mac) or pgAdmin(windows)
- /du; - 사용자 권한 확인.

## user Model:

= id

- createdAt
- updatedAt

- email
- password
- role(client|owner|delivery)

## User CRUD:

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email
