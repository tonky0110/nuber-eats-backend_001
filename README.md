# Nuber Eats

The Backend of Nuber Eats Clone

## set backend

### install package

[backend server]

- [V] npm i @nestjs/graphql graphql-tools graphql apollo-server-express
- [V] npm i class-validator class-transformer
- [V] npm i @nestjs/config
- [V] npm i cross-env

[Authentication]

- [V] npm i jsonwebtoken
- [V] npm i @types/jsonwebtoken --only-dev

[DB]

- [V] npm i @nestjs/typeorm typeorm pg
- [V] npm i bcrypt // 단방향 암호화
- [V] npm i types/bcrypt --dev-only

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
- Authentication
  secret key gen: https://randomkeygen.com/
