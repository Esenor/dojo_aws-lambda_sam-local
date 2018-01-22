# Dojo_aws-lambda_sam-local

## Usage

### Install the AWS-cli and AWS Sam Local

Install an configure [the AWS cli](https://docs.aws.amazon.com/lambda/latest/dg/setup-awscli.html)

Install the aws-sam-local module

    $ npm i -g aws-sam-local

--------------------------

### Test the node function

    $ npm i
    $ npm run build
    $ npm run test-getOrdersList

--------------------------

### Test localy the function

    $ npm i
    $ npm run build
    $ rake localInvoke {YOUR_NAME}

--------------------------

### Package and upload the function

    $ npm i
    $ npm run build
    $ npm prune --production
    $ rake packageFunction

--------------------------

### Deploy the function

    $ deployFunction {YOUR_NAME}

--------------------------

### Test the remote function

    $ rake remoteInvoke {YOUR_NAME}
