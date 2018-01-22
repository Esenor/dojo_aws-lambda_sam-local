# Dojo_aws-lambda_sam-local

## Usage

    # Install sam local
    $ npm i -g aws-sam-local
    
    # Build source code
    $ npm i
    $ npm run build    
    
    # Invoke locally the function
    $ sam local invoke -t ./etc/infrastructure/template.yml --event ./event.json dojoOrderModel
    
    # --- Function deployment ---
    
    # Clean developer tool dependencies
    $ npm prune --production
    
    # Package and upload the fonction on a S3 Bucket
    $ aws cloudformation package --template-file ./etc/infrastructure/template.yml --s3-bucket dojo.lambda --output-template-file ./etc/infrastructure/template-packaged.yml
    
    # Deploy the function, !! change the stack name !!
    $ aws cloudformation deploy --template-file ./etc/infrastructure/template-packaged.yml --stack-name dojo--dev--{{YOUR_NAME}}--orderModel --capabilities CAPABILITY_IAM --region eu-west-3 --parameter-overrides Stage=dev Env={{YOUR_NAME}}

    
    # Get remote functions name
    $ aws lambda list-functions
    
    # Invoke remote function name, !! change the function name !!
    $ aws lambda invoke --function-name "{function remote name}" --payload '{"mail": "lorem-ipsum@oliverstore.com"}' outfile.json
