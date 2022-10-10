import { Command } from '@oclif/core'
import { Reference, Repository } from 'nodegit'
import { prompt } from 'enquirer'

export default class Git extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static args = [{ name: 'method' }]

  public async run(): Promise<void> {
    const { args } = await this.parse(Git)

    if (args.method === 'clean') {
      return this.clean()
    }

    throw new Error(`method ${args.method} not exist`)
  }

  private async clean() {
    const repo = await Repository.open(process.cwd())
    const refs = await repo.getReferenceNames(Reference.TYPE.LISTALL)
    const { selectedRefs } = (await prompt({
      name: 'selectedRefs',
      message: 'Select refs that you want to clean',
      type: 'multiselect',
      choices: refs,
    })) as any

    for (const ref of selectedRefs) {
      const refObj = await repo.getReference(ref)
      refObj.delete()
    }

    this.log('delete selected refs success!')
  }
}
