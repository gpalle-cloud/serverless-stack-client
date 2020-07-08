/* export default = {
  STRIPE_KEY: "pk_test_F77VCsrlQNDXvKzzjeszZIrn00hSvMrkIc",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-geetha"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://u0oc4zccrl.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_XmOWBC8qZ",
    APP_CLIENT_ID: "27571pjisnmkp9iaj9uqf1a4oi",
    IDENTITY_POOL_ID: "us-east-1:5475dfa1-b0c8-4adb-bae7-db219b108209"
  }
}; */

const dev = {
  STRIPE_KEY: "pk_test_F77VCsrlQNDXvKzzjeszZIrn00hSvMrkIc",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-3fiwwclbj8cf"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://g3dha9ofga.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_XQ7hs4wV2",
    APP_CLIENT_ID: "4qb9hfapvgo25qd1447igpkc7c",
    IDENTITY_POOL_ID: "us-east-2:ccbcb35a-10a4-4fc6-84cb-b88c930597f8"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_F77VCsrlQNDXvKzzjeszZIrn00hSvMrkIc",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-aicslaoypjju"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://6zwyixwt5b.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_u9pdO7G31",
    APP_CLIENT_ID: "9uvcuttvl4cv3j4kocidrpa4b",
    IDENTITY_POOL_ID: "us-east-2:da43b1df-2ddd-4014-9f38-b662d6fb12c7"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};