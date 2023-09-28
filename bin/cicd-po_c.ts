#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CicdPoCStack } from '../lib/cicd-po_c-stack';

const app = new cdk.App();
new CicdPoCStack(app, 'CicdPoCStack', {
  env: {
    account: '051826877136',
    region: 'us-east-1',
  }
});

app.synth();