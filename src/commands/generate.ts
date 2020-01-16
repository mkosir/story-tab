import { Command, flags } from '@oclif/command';
const chalk = require('chalk');

import { getDocTabFilePaths } from '../pipeline/01-getDocTabFilePaths/getDocTabFilePaths';
import { createDocTabFilesMeta } from '../pipeline/02-createDocTabFilesMeta/createDocTabFilesMeta';
import { createDocTabTemplates } from '../pipeline/03-createDocTabTemplates/createDocTabTemplates';
import { replaceDocTabTemplatesContent } from '../pipeline/04-replaceDocTabTemplatesContent/replaceDocTabTemplatesContent';

export default class Generate extends Command {
  static description = 'generate documentation tabs from React components';

  static flags = {
    prefix: flags.string({
      description: 'generate DocTab components with filename prefix',
      default: '_',
    }),
  };

  async run() {
    const { flags } = this.parse(Generate);

    this.log(chalk.blue(`Generating documentation tabs from React components...`));

    const { docTabCodeFilePaths, docTabStyleFilePaths } = getDocTabFilePaths();
    this.log(
      chalk.blue(
        `Found ${docTabCodeFilePaths.length + docTabStyleFilePaths.length} DocTab files (code: ${
          docTabCodeFilePaths.length
        }, style: ${docTabStyleFilePaths.length})`,
      ),
    );

    const docTabFilesInfo = createDocTabFilesMeta(
      docTabCodeFilePaths,
      docTabStyleFilePaths,
      flags.prefix,
    );

    try {
      const numOfCreatedDocTabTemplates = await createDocTabTemplates(docTabFilesInfo);
      this.log(chalk.blue(`Created ${numOfCreatedDocTabTemplates} DocTab templates`));
    } catch (err) {
      console.error('Error occurred:', err);
      this.exit();
    }

    try {
      const numOfReplacedDocTabTemplatesContent = await replaceDocTabTemplatesContent(
        docTabFilesInfo,
      );
      this.log(
        chalk.blue(`Content replaced in ${numOfReplacedDocTabTemplatesContent} DocTab templates`),
      );
    } catch (err) {
      console.error('Error occurred:', err);
      this.exit();
    }

    this.log(chalk.green('Completed!'));
  }
}
