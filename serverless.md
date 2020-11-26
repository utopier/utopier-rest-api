## serverless, AWS

1. express serverless basic

   - npm i serverless-http
   - Nodejs와 API Gateway 세부사항 간의 인터페이스를 처리하는 미들웨어
   - index.js

   ```javascript
   const serverless = require('serverless-http');
   //...
   module.exports.handler = serverless(app);
   ```

   - severless.yml

   ```yml
   service: my-express-application

   provider:
     name: aws
     runtime: nodejs12.x
     stage: dev
     region: us-east-1

   functions:
     app:
     handler: index.handler
     events:
       - http: ANY/
       - http: 'ANY {proxy+}'
   ```

   - sls deploy

2. DynamoDB 테이블 추가

- serverless.yml

  ```yml
  service: my-express-application

  custom:
    tableName: 'users-table-${self:provider.stage}'

  provider:
    name: aws
    runtime: nodejs12.x
    stage: dev
    region: us-east-1
    iamRoleStatements:
      - Effect: Allow
        Action:
          - dynamodb:Query
          - dynamodb:Scan
          - dynamodb:GetItem
          - dynamodb:PutItem
          - dynamodb:UpdateItem
          - dynamodb:DeleteItem
        Resource:
          - { 'FN::GetAtt': ['UsersDynamoDBTable', 'Arn'] }
    environment:
      USERS_TABLE: ${self:custom.tableName}

  functions:
    app:
      handler: index.handler
      events:
        - http: ANY/
        - http: 'ANY {proxy+}'

  resources:
    Resources:
      UsersDynamoDBTable:
        Type: 'AWS::DynamoDB::Table'
        Properties:
          AttributeDefinitions:
            - AttributeName: userId
              AttributeType: S
          KeySchema:
            - AttributeName: userId
              KeyType: HASH
          ProvisionedThroughput:
            ReadCapacityUnits: l
            WriteCapacityUnits: l
          TableName: ${self:custom.tableName}
  ```

---

## serverless document

1. Getting Started

- **설치**
  - npm i -g serverless
- **초기 설정**
  - serverless
- **업그레이드**
  - npm update -g serverless

2. provider CLI

- Serverless Framework는 AWS, Azure, GCP와 같은 클라우드 공급자나 Kubeless와 같은 Kubernates 기반 솔루션에 코드를 배포함

3. AWS provider

- **Guides**

  1. Intro

  - serverless Framework는 AWS 인프라 리소스와 AWS Lambda 함수를 개발하고 배포함
  - 함수 및 이벤트로 구성된 이벤트 중심의 서버리스 아키텍처를 구축하는데 집중할 수 있도록 바로 사용할 수 있는 구조, 자동화 및 모범 사례를 제공하는 CLI
  - **핵심 개념**

    1. Functions

    - Functions는 AWS Lambda 함수로 마이크로 서비스와 같은 독립적인 배포 단위

    2. Events

    - AWS Lambda 함수를 트리거하는 모든 것은 프레임워크에서 Events로 간주됨
    - AWS Lambda 함수에 대한 이벤트를 정의하면 프레임워크는 해당 이벤트에 필요한 모든 인프라를 자동으로 생성하고 이를 수신하도록 구성함
    - **AWS 인프라 Events**
      - AWS API Gateway HTTP enpoint request
      - AWS S3 bucket upload
      - CloudWatch Timer
      - AWS SNS topic
      - CloudWatch Alert
      - ...

    3. Resources

    - Resources는 함수가 다음과 같이 사용하는 AWS 인프라 구성요소
    - serverless 프레임워크는 함수와 이를 트리거하는 이벤트를 배포할 뿐만 아니라 함수가 의존하는 AWS 인프라 구성요소도 배포함.
      - AWS DynamoDB Table
      - AWS S3 Bucket
      - AWS SNS
      - CloudFormation에서 정의할 수 있는 모든 것

    4. Services

    - Services는 각각 이름이 지정된 파일을 사용, 루트 디렉토리의 serverless.yml or serverless.json or serverless.js or serverless.ts
    - ```yml
      service: users
      functinos:
        create:
          events:
            - http: post users/create
        delete:
          events:
            - http: delete users/delete
      resources:
      ```
    - ```json
      {
        "service": "users",
        "functions": {
          "create": {
            "events": [
              {
                "http": "post users/create"
              }
            ]
          },
          "delete": {
            "events": [
              {
                "http": "delete users/delete"
              }
            ]
          }
        }
      }
      ```
    - ```javascript
      module.exports = {
        service: 'users',
        functions: {
          create: {
            events: [
              {
                http: 'post users/create',
              },
            ],
          },
          delete: {
            events: [
              {
                http: 'delete users/delete',
              },
            ],
          },
        },
        resources: {},
      };
      ```
    - ```typescript
      import type { Serverless } from 'serverless/aws';

      const serverlessConfiguration: Serverless = {
        // ...
      };
      module.exports = serverlessConfiguration;
      ```

    5. Plugins

    - Plugins를 사용해 프레임워크의 기능을 덮어쓰거나 확장할 수 있음
    - serverless.yml에서는 plugins: 에서 속성을 포함

    ```yml
    plugins:
      - serverless-secrets
    ```

  2. Installation

  - Node.js 설치
    - v6 이상
    - node -v
  - Serverless Framework 설치
    - npm i -g serverless
    - serverless --version
  - AWS 계정 설정
    - https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

  3. Credentials

  - 사용자를 대신해 리소를 만들고 관리하도록 클라우드 공급자 계정에 대한 액세스 권한이 필요함
  - **AWS 계정 가입**
  - **IAM 사용자 및 액세스 키 생성**
    1. 서버리스 프레임 워크 대시보드에서 AWS 액세스 역할 활용
    - AWS 액세스 역할을 사용하면 모든 명령에 대해 서버리스 프레임 워크에 의해 AWS 액세스키가 생성되고 자격증명은 1시간후에 만료됨
    2. AWS 액세스 키 생성
    - 대시보드에서 AWS 액세스 역할을 설정하지 않으려면 환경변수 or AWS 프로필에 저장된 AWS 액세스 키를 사용하도록 CLI를 구성
    - AWS IAM 사용 권장
    - AWS Console에서 IAM 생성 후 API 키 보관
    3. AWS 액세스 키 사용
    - **환경변수**
      - shell의 serverless 및 AWS SDK에 액세스 할 수 있도록 환경변수로 내보낼수 있음
    - **AWS 프로필 사용**
      1. serverless config credentials
      2. aws-cli
      - aws configure
      - severless.yml의 provider에서 profile 설정
        ```yml
        service: new-service
        provider:
          name: aws
          runtime: nodejs12.x
          stage: dev
          profile: devProfile
        ```
      3. 기존 AWS 프로필 사용
      - ~/.aws/credentials
        ```
        [profileName1]
        aws_access_key_id=************
        aws_secret_access_key=*************
        [profileName2]
        aws_access_key_id=************
        aws_secret_access_key=*************
        ```
      4. aws-profile option
      - serverless deploy --aws-profile devProfile
      5. 웹 ID 토큰 사용
      6. 단계별 프로필
      ```yml
      service: new-service
      provider:
        name: aws
        runtime: nodejs12.x
        stage: ${opt:stage, self:custom.defaultStage}
        profile: ${self:custom.profiles.${opt:stage, self:provider.stage, 'dev'}}
      custom:
        defaultStage: dev
        profiles:
          dev: devProfile
          prod: prodProfile
      ```
      7. invoke local 명령을 사용해 적절한 프로파일링

  4. Services

  - **Organization**
    - 프로젝트의 serverless.yml 파일을 하나만 사용해 단일 서비스로 배포할 수도 있고 애플리케이션 규모가 커짐에 따라 여러 파일을 사용해 여러 서비스로 나눌 수 있음
  - **Creation**
    - create 명령으로 서비스를 생성하며, 런타임을 지정해줘야 하며, 경로를 전달해 디렉토리를 만들고 서비스 이름을 자동으로 지정할 수 있음
    - AWS Lambda에서 사용할 수 있는 template는 여러가지
    - serverless create --template aws-nodejs-typescript --path myService
  - **Contents**
    - 작업 디렉토리에 serverless.yml과 handler.js 파일이 생성됨
      - event.json 파일에 이벤트 데이터를 추가하면 데이터로 함수를 호출할 수 있음.
    - serverless.yml
      - 모든 항목은 단일 AWS CloudFormation 템플릿으로 변환되며 CloudFormation 템플릿에서 CloudFormation 스택이 생성됨
  - **Deployment**
    - 서비스를 배포하면 모든 함수, 이벤트 및 리소스가 AWS CloudFormation 템플릿으로 변환되고 단일 CloudFormation 스택으로 배포됨.
    - serverless deploy --stage prod --region us-east-1
  - **Removal**
    - remove 명령으로 서비스 제거
    - serverless remove -v
  - **Version Pinning**

    - 버전 고정

      - serverless.yml에서 frameworkVersion 지정

      ```yml
      frameworkVersion: '2.1.0'

      service: users

      provider:
        name: aws
        runtime: nodejs12.x
        memorySize: 512
      ```

  - **Installing Serverlee in an existing service**
    - npm i -D serverless
    - 로컬에서 서버리스 호출
      - node ./node_modules/serverless/bin/serverless deploy

  5. Functions

  - AWS를 provider로 사용하는 경우 서비스 내의 모든 함수는 AWS Lambda 함수
  - **Configuration**

    - serverless 서비스의 모든 Lambda 함수는 functions 속성 아래에 정의
    - serverless.yml

      ```yml
      service: myService

      provider:
        name: aws
        runtime: nodejs12.x

      functions:
        hello:
          handler: handler.hello
          name: ${opt:stage, self:provider.stage, 'dev'}-lambdaName
          description: Description of what the lambda function does
          runtime: python2.7
          memorySize: 512
          timeout: 10
          provisionedConcurrency: 3
          reservedConcurrency: 5
          tracing: PassThrough
      ```

    - handler.js
      ```javascript
      module.exports.hello = function (event, context, callback) {};
      ```
    - 함수를 다른 파일로 분리할때 함수 배열 지정
      ```yml
      # serverless.yml
      ---
      functions:
        - ${file(../foo-functions.yml)}
        - ${file(../bar-functions.yml)}
      ```
      ```yml
      # foo-functions.yml
      getFoo:
        handler: handler.foo
      deleteFoo:
        handler: handler.foo
      ```

  - **Permissions**

    - provider.iamRoleStatements 속성을 통해 역할 내에서 권한 정책 설명을 설정함.

    ```yml
    service: myService

    provider:
      name: aws
      runtime: nodejs12.x
      iamRoleStatements:
        - Effect: Allow
          Action:
            - dynamodb:DescribeTable
            - dynamodb:Query
            - dynamodb:Scan
            - dynamodb:GetItem
            - dynamodb:PutItem
            - dynamodb:UpdateItem
            - dynamodb:DeleteItem
          Resource: 'arn:aws:dynamodb:us-east-1:*:*'

    functions:
      functionOne:
        handler: handler.functionOne
        memorySize: 512
    ```

  - **VPC Configuration**

    - 특정 함수에 vpc 속성을 추가해 VPC를 구성할 수 있음. VPC를 구성하는데 필요한 securityGroupIds, subnetIds 배열 속성을 포함해야함

      ```yml
      service: service-name
      provider: aws

      functions:
        hello:
          handler: handler.hello
          vpc:
            securityGroupIds:
              - securityGroupId1
              - securityGroupId2
            subnetIds:
              - subnetId1
              - subnetId2
      ```

    - 모든 함수에 VPC를 적용하려는 경우 provider에 vpc 속성을 추가하고 각 함수에서 이를 덮어씀.
    - VPC IAM 권한
    - VPC Lambda 인터넷 액세스

  - **Environment Variables**
    - 특정 함수에 environment 속성을 추가하거나 provider에 environment 속성을 추가
    ```yml
    service: service-name
    provider:
      name: aws
      environment:
        SYSTEM_NAME: mySystem
        TABLE_NAME: tableName1
    functions:
      hello:
        handler: handler.hello
      users:
        handler: handler.users
        environment:
          TABLE_NAME: tableName2
    ```
  - **Tags**
    - tags 구성을 사용하면 함수나 provider에 key/value 태그를 추가할 수 있음
      ```yml
      service: service-name
      provider:
        name: aws
        tags:
          foo: bar
          baz: quz
      functions:
        hello:
          handler: handler.hello
        users:
          handler: handler.users
          tags:
            foo: quux
      ```
  - **Layers**
    - layers 구성을 사용하면 함수에서 Lambda 계층을 사용할 수 있음
      ```yml
      functions:
        hello:
          handler: handler.hello
          layers:
            - ara:aws:lambda:region:XXXXXX:layer:LayerName:Y
      ```
  - **Log Group Resources**
    - 기본적으로 프레임워크는 Lambda에 대한 LogGroups를 생성함. 이렇게하면 서비스를 제거하는 경우 로그 그룹을 쉽게 정리하고 람다 IAM 권한을 훨씬 더 구체적이고 안전하게 만들수 있음
      - 다음 설정으로 기본 동작 선택해제
      ```yml
      functions:
        hello:
          handler: handler.hello
          disableLogs: true
      ```
  - **Versioning Deployed Functions**
    - 기본적으로 프레임워크는 모든 배포에 대해 함수 버전을 생성함.
      - 이 기능을 끄려면 공급자 수준 옵션을 설정함
      ```yml
      provider:
        versionFunctions: false
      ```
  - **Dead Letter Queue(DLQ)**
    - AWS 람다 함수가 실패하면 다시 시도 됨. 재시도도 실패하는 경우 AWS에는 람다 실패를 추적, 진단하고 이에 대응하는데 사용할 수 있는 데드 레터 큐라는 SNS or SQS에 실패한 요청에 대한 정보를 보내는 기능이 있음
      - onError 속성을 사용해 설정
        ```yml
        functions:
          hello:
            handler: handler.hello
            onError: arn:aws:sns:us-east-1:XXXXXX:test
        ```
  - **KMS Keys**
    - AWS Lambda는 AWS Key Management Service(KMS)를 사용해 미사용 환경변수를 암호화함
    - awsKmsKeyArn 속성으로 KMS키를 정의함
    ```yml
    service:
      name: service-name
      awsKmsKeyArn: arn:aws:kms:us-east-1:XXXXXX:key/some-hash
    provider:
      name: aws
      environment:
        TABLE_NAME: tableName1
    functions:
      hello:
        handler: handler.hello
        awsKmsKeyArn: arn:aws:kms:us-east-1:XXXXXX:key/some-hash
        environment:
          TABLE_NAME: tableName2
        goodbye:
          handler: handler.goodbye
    ```
  - **AWS X-Ray Tracing**

    - tracing 속성을 사용해 AWS X-Ray 추적을 활성화할 수 있음

    ```yml
    service: myService

    provider:
      name: aws
      runtime: nodejs12.x
      tracing:
        lambda: true

    functions:
      hello:
        handler: handler.hello
        tracing: Active
      goodbye:
        handler: handler.goodbye
        tracing: PassThrough
    ```

  - **Asynchronous invocation**
    - 목적지
      - Target은 ARN을 통해 처리할 수 있는 서비스, 기타 적격 대상과 함께 배포하는 다른 람다함수 일 수 있음
      ```yml
      functions:
        asyncHello:
          handler: handler.asyncHello
          destinations:
            onSuccess: otherFunctionInService
            onFailure: arn:aws:sns:us-east-1:xxxx:some-topic-name
      ```
    - 최대 이벤트 기간 및 최대 재시도 횟수
      - maximumEventAge는 초 단위로 제공되는 60초에서 6시간 사이의 값을 허용함.
      - maximumRetryAttempts는0~2 사이의 값을 허용함
      ```yml
      functions:
        asyncHello:
          handler: handler.asyncHello
          maximumEventAge: 7200
          maximumRetryAttempts: 1
      ```
  - **EFS Configuration**

    - 속성을 추가해 Lambda와 함께 Amazon EFS를 사용할 수 있음

      ```yml
      service: service-name
      provider: aws

      functions:
        hello:
          handler: handler.hello
          fileSystemConfig:
            localMountPath: /mnt/example
            arn: arn:aws:elasticfilesystem:us-east-1:111111111111:access-point/fsap-0d0d0d0d0d0d0d0d0
          vpc:
            securityGroupIds:
              - securityGroupId1
            subnetIds:
              - subnetId1
      ```

  6. Events

  - 이벤트는 함수 실행을 트리거하는 것
  - **Configuration**
    ```yml
    functions:
      createUser:
        handler: handler.users
        events:
          - http:
              path: users/create
              method: post
          - http:
              path: users/update
              method: put
          - http:
              path: users/delete
              method: delete
    ```
  - **Types**
    - serverlee 프레임워크는 모든 AWS Lambda 이벤트등을 지원함.
  - **PathParameters**
    - 람다 함수에 경로 매개 변수를 전달하도록 HTTP 이벤트를 구성할 수 있음
      ```yml
      functions:
        createUser:
          handler: handler.users
          events:
            - http:
                path: users/{id}
                method: get
      ```
  - **Deploying**
    - 함수, 이벤트 및 인프라를 배포하거나 업데이트하려면 serverlee deploy

  7. Resources

  - **Configuration**

    - 모든 단계 aws는 단일 AWS CloudFormation 스택

    ```yml
    service: usersCrud
    provider: aws
    functions:

    resources:
      Resources:
        usersTable:
          Type: AWS::DynamoDB::Table
          Properties:
            TableName: usersTable
            AttributeDefinitions:
              - AttributeName: email
                AttributeType: S
            KeySchema:
              - AttributeName: email
                KeyType: HASH
            ProvisionedThroughput:
              ReadCapacityUnits: 1
              WriteCapacityUnits: 1
    ```

  - **AWS CloudFormation Resource Reference**
    - 배포되는 CloudFormation 템플릿에서 일관된 이름을 지정하기 위해 표준 패턴을 사용함
      - (Function Name) (Cloud Formation Resource Type) (Resource Name) (SequentialID, instanceId or Random String)
        - Function Name : 함수 이름이 변경 될때 다시 만들어야하는 리소스의 경우 선택사항. 이러한 리소스를 함수 바인딩이라고 함
        - Cloud Formation Resource Type : S3Bucket
        - Resource Name : 특정 리소스에 대한 식별자
        - SequentialID, instanceId or Random String : 일부 리소스의 경우 선택적 순차 ID, 서버리스 인스턴스 ID 또는 임의의 문자열을 추가해 식별
  - **Override AWS CloudFormation Resource**
    - 특정 CloudFormation 리소스를 재정의해 자체 옵션을 적용할 수 있음
    - AWS::Logs::LogGroup 보존기간을 30일로 설정하려면 위표의 Name Template
    - 기본 리소스를 재정의할때 다음 두가지 사항에 유의해야함.
      ```yml
      functions:
        write-post:
          handler: handler.writePost
          events:
            - http:
                method: post
                path: ${self:service}/api/posts/new
                cors: true
      resources:
        extensions:
          WriteDashPostLogGroup:
            Properties:
              RetentionInDays: '30'
      ```

  8. Deploying

  - **Deploy All**
    - serverless deploy
      - serverless.yml에서 함수, 이벤트 또는 리소스 구성을 업데이트하고 해당 변경사항을 AWS에 배포하려는 경우 이 방법을 사용함
  - **Deploy Function**
    - serverless deploy function --function myFunction
    - 이 배포방법은 AWS CloudFormation 스택에 영햐을 주지 않음, 대신 AWS에서 현재 함수의 zip 파일을 덮어씀.
  - **Deploying a package**
    - serverless deploy --package path-to-package
    - 이미 생성된 배포 디렉터리를 가져와 클라우드 공급자에 배포함, 이를 통해 CICD를 서버리스 프레임워크와 쉽게 통합할 수 있음.

  9. Testing

  - **A Poor Example**
  - **Writing Testable AWS Lambda Functions**

  10. Variables

  - 변수를 사용하면 사용자가 serverless.yml에서 구성값을 동적으로 바꿀수 있음.
  - **Syntax**
    - 변수를 사용하려면 대괄호로 묶인 값을 참조해야함.
    ```yml
    yamlKeyXYZ: ${variableSource}
    otherYamlKey: ${variableSource, defaultValue}
    ```
  - **Current variable sources**
  - **Recursively reference properties**
    - 변수를 사용해 속성을 재귀적으로 참조할 수 있음.
    ```yml
    provider:
      name: aws
      stage: ${opt:stage, 'dev'}
      environment:
        MY_SECRET: ${file(../config.${opt:stage, self:provider.stage, 'dev'}):CREDS}
    ```
  - ## **Reference Properties In serverless.yml**
  - **Referencing Serverless Core Variables**
  - **Referencing Environment Varialbes**
  - **Referencing CLI Options**
  - **Reference CloudFormation Outputs**
  - **Referencing S3 Objects**
  - **Reference Variables using the SSM Parameter Store**
  - **Reference Variables using AWS Secrets Manager**
  - **Reference Variables in Other Files**
  - **Reference Variables in Javascript Files**
  - **Multiple Configuration Files**
  - **Nesting Variable References**
  - **Overwriting Variables**
  - **Using Custom Variable Syntax**
  - **Migrating serverless.env.yml**
  - **Pseudo Parameters Reference**
  - **Read String Variable Values as Boolean Values**

  11. Packaging

  - **Package CLI Command**
    - 서버리스 CLI 도구를 사용하면 프로젝트를 AWS에 배포하지 않고도 패키지화 할 수 있음. 일관된 배포 가능한 아티팩트를 보장하기 위해 CICD 워크플로우와 함께 사용하는 것이 가장 좋음
    - 서비스의 .serverlee 디렉토리에 모든 배포 아티팩트가 빌드되고 저장됨
      - serverless package
    - --package 옵션을 사용해 대상 경로를 추가할수도 있으며 Serverless는 배포 아티팩트를 저장함(../my-artifacts)
      - serverless package --package my-artifacts
  - **Package Configuration**
    - package, exclude 속성을 사용해 패키징 프로세스를 더 잘 제어할 수 있음.
    1. Exclude/include
    - 제외 및 포함을 사용하면 결과 아티팩트에서 exclude / include될 glob을 정의할 수 있음.
    - 파일을 포함하려면 in 또는 !와 같이 접두사가 붙은 glob 패턴을 사용할 수 있음. 서버리스는 glob 패턴을 순서대로 실행함
    - 기본적으로 제외되는 패턴들
      - .git, .gitignore, .DS_Store, npm-debug.log, .serverless, .serverless_plugins
    2. Example
    - node_modules를 제외하고 exclude를 사용해 특정 모듈을 제외
    ```yml
    package:
      exclude:
        - node_moduels/**
        - src/**
      include:
        - src/function/handler.js
    ```
    3. Artifact
    -
    - Service package
    - Individual function packages
    4. S3
    - Service package
    - Individual function packages
    - Packaging functions separately
    5. Development dependencies

  12. IAM

  - **The Default IAM Role**
  - **Custom IAM Roles**

  13. Plugins

  - **Installing Plugins**
  - **Service local plugin**
  - **Writing Plugins**

  14. Workflow
  15. Serverless.yml

- **CLI references**
  1. Config Credentials
  2. Create
  3. Install
  4. Package
  5. Deploy
  6. Deploy Function
  7. Deploy List
  8. Invoke
  9. Invoke Local
  10. Logs
  11. Login
  12. Metrics
  13. Info
  14. Rollback
  15. Rollback Function
  16. Remove
  17. Plugin List
  18. Plugin Search
  19. Plugin Install
  20. Plugin Uninstall
  21. Print
  22. Serverless Stats
- **Events**
  1. API Gateway
  2. HTTP API
  3. Websocket
  4. Streams
  5. S3
  6. Schedule
  7. SNS
  8. SQS
  9. ALB
  10. Alexa Skill
  11. Alexa Smart Home
  12. IOT
  13. CloudWatch Event
  14. CloudWatch Log
  15. EventBridge
  16. CloudFront
  17. Cognito User Pool
- **Examples**

---

## AWS

- IAM, S3, CloudFront, Route53, CloudFormation, Lambda, API Gateway, EC2, ELB, RDS, DynamoDB, ElastiCache, SNS, CloudWatch

1. IAM
2. S3
3. CloudFront
4. Route53
5. CloudFormation
6. Lambda
7. API Gateway
8. EC2
9. ELB
10. RDS
11. DynamoDB
12. ElastiCache
13. SNS
14. CloudWatch

---

## CICD (CircleCI, Jira, Slack, Github, Git)

---

## Build(Typescript, babel, webpack)

---

## API Test(Postman, Swagger,...)

---