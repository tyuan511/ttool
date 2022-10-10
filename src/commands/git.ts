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

    const branchs = refs.filter((ref: string) => ref.startsWith('refs/heads')).map((b) => b.replace('refs/heads/', ''))

    if (branchs.length === 0) {
      return
    }

    const { selectedBranchs } = (await prompt({
      name: 'selectedBranchs',
      message: 'Select branchs that you want to delete',
      type: 'multiselect',
      choices: branchs,
    })) as any

    this.log(selectedBranchs)

    const { isConfirm } = (await prompt({
      name: 'isConfirm',
      type: 'confirm',
      message: `Confirm to delete these branchs: \n${selectedBranchs.map((r: string) => '- ' + r).join('\n')}\n`,
    })) as any

    if (!isConfirm) {
      return
    }

    for (const branch of selectedBranchs) {
      const branchObj = await repo.getReference(branch)
      branchObj.delete()
    }

    this.log('Delete selected branchs success!')
  }
}
