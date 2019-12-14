import {
  TransportKind,
  ServerOptions,
  LanguageClient,
  Disposable,
  LanguageClientOptions
} from "vscode-languageclient";
import * as path from "path";
import * as nls from "vscode-nls";
import { ExtensionContext } from "vscode";
const localize = nls.loadMessageBundle();

class EdgeLanguageClient {
  /**
   * Options to configure the language server.
   *
   * If the extension is launched in debug mode, the provided debug options
   * are used.
   */
  serverOptions: ServerOptions;

  /**
   * Options to configure the language client.
   */
  clientOptions: LanguageClientOptions = {
    documentSelector: [{ language: "edge", scheme: "file" }],
    synchronize: {
      configurationSection: ["edge", "css", "javascript", "emmet"]
    },
    initializationOptions: {
      embeddedLanguages: { css: true, javascript: true }
    }
  };

  /**
   * Create an instance of edge language client.
   *
   * @param context Extension context
   */
  constructor(context: ExtensionContext) {
    const serverModule = context.asAbsolutePath(
      path.join("languageServers", "html", "out", "htmlServerMain.js")
    );

    this.serverOptions = {
      run: { module: serverModule, transport: TransportKind.ipc },
      debug: {
        module: serverModule,
        transport: TransportKind.ipc,
        options: { execArgv: ["--nolazy", "--inspect=6045"] }
      }
    };
  }

  /**
   * Start the edge language client.
   */
  start(): Disposable {
    const id = "edge";
    const name = localize("edgeserver.name", "Edge Language Server");
    const client = new LanguageClient(
      id,
      name,
      this.serverOptions,
      this.clientOptions
    );

    client.registerProposedFeatures();
    client.onTelemetry(x => console.log(x));
    return client.start();
  }
}

export default EdgeLanguageClient;
