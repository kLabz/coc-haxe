import {LanguageClient, workspace} from 'coc.nvim'
import Command from './Command'

export default class RestartClientCommand implements Command {
  public readonly id = 'haxe.restart'

  public constructor(
    private readonly client: LanguageClient
  ) {
  }

  public execute(): void {
    this.client.stop().then(() => {
      this.client.restart();
      workspace.showMessage('projects reloaded')
    });
  }
}


