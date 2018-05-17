# Server/API stack with ECS, CodeBuild & CodePipeline.

##Deploy stack

For geting github access token use https://github.com/settings/tokens/new and checked admin:repo_hook permissions.

```
aws cloudformation deploy \
  --stack-name api-init \
  --template-file ./aws-api-ci-cd.yaml \
  --parameter-overrides \
     KeyName=<KEY_NAME> \
     GitHubAuthToken=<ACCESS_TOKEN> \
     RepoOwner=<OWNER_NAME> \
     RepoName=<REPO_NAME> \
     BranchName=master \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
  --no-execute-changeset
```




https://engineering.gosquared.com/aws-reinvent-2017

https://medium.com/containers-on-aws/scaling-a-realtime-chat-app-on-aws-using-socket-io-redis-and-aws-fargate-4ed63fb1b681

https://github.com/aws-samples/ecs-blue-green-deployment/blob/master/templates/service.yaml



https://github.com/aws-samples/ecs-blue-green-deployment/blob/fargate/templates/ecs-cluster.yaml