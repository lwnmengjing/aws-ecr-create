import * as core from '@actions/core'
<<<<<<< HEAD
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
=======
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
>>>>>>> parent of fdbb3a9 (ecr create repository)
  }
}

run()
