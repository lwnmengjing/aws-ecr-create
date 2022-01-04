import * as core from '@actions/core'
import { CreateRepositoryCommand, ECRClient } from "@aws-sdk/client-ecr";

async function run(): Promise<void> {
  // try {
  const region: string = core.getInput('aws-region')
  core.debug(`AWS REGION ${region}`)

  // a client can be shared by different commands.
  const client = new ECRClient({ region });
  const params = {
    repositoryName: core.getInput('repository-name'),
  };
  const command = new CreateRepositoryCommand(params);

  // async/await.
  try {
    await client.send(command);
    // process data.
  } catch (error) {
    // error handling.
  } finally {
    // finally.
  }
}

run()
