import { NestHyperExpressApplication } from "../../src/index";
import { request } from "pactum";

export async function appInit(
  app: NestHyperExpressApplication,
  port = 9999,
  host?: string,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  callback: () => void = () => {},
) {
  // console.log('we are calling app to listen', port);
  await app.listen(port, host, callback);
  // console.log('app is listening');
  const url = await app.getUrl();
  request.setBaseUrl(
    url.replace("::1", "127.0.0.1").replace("+unix", "").replace("%3A", ":"),
  );
}
